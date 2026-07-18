import { NextRequest, NextResponse } from "next/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createClient as createServerClient } from "@/lib/supabase/server";
import { normalizePhone } from "@/lib/phone";

const RATING_KEYS = [
  "overall_rating",
  "rooms_rating",
  "food_rating",
  "staff_rating",
  "cleanliness_rating",
  "concierge_rating",
] as const;

function createAdminClient() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not configured");
  }
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}

export async function POST(req: NextRequest) {
  try {
    // Authenticate the caller from their session cookie (anon client),
    // then perform all writes with the service role.
    const supabase = await createServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "not_authenticated" }, { status: 401 });
    }

    const body = await req.json();
    const ratings: Record<string, number> = {};
    for (const key of RATING_KEYS) {
      const value = body?.[key];
      if (typeof value !== "number" || !Number.isInteger(value) || value < 1 || value > 5) {
        return NextResponse.json({ error: "invalid_ratings" }, { status: 400 });
      }
      ratings[key] = value;
    }
    const comment: string | null =
      typeof body?.comment === "string" && body.comment.trim() ? body.comment.trim() : null;

    const admin = createAdminClient();

    // Profile is the source of truth for name / riad / phone.
    const { data: profile, error: profileFetchError } = await admin
      .from("profiles")
      .select("first_name, riad, phone, checked_out")
      .eq("id", user.id)
      .single();

    if (profileFetchError || !profile) {
      console.error("[submit-checkout] failed to load profile:", profileFetchError);
      return NextResponse.json({ error: "profile_not_found" }, { status: 500 });
    }

    // A guest can only check out once — the bot pipeline must not receive duplicates.
    if (profile.checked_out) {
      return NextResponse.json({ error: "already_checked_out" }, { status: 409 });
    }

    // Validate the phone BEFORE writing anything, so a rejection leaves no partial state.
    const guestPhone = normalizePhone(profile.phone);
    if (!guestPhone) {
      return NextResponse.json({ error: "invalid_phone" }, { status: 422 });
    }

    // Must match the n8n Receiver's riad labels exactly.
    const riadLabel = profile.riad === "riad141" ? "Riad 141" : "Riad 19";

    // Step 1 — survey
    const { error: surveyError } = await admin.from("checkout_surveys").insert({
      user_id: user.id,
      ...ratings,
      comment,
    });
    if (surveyError) {
      console.error("[submit-checkout] checkout_surveys insert failed:", surveyError);
      return NextResponse.json({ error: "survey_failed" }, { status: 500 });
    }

    // Step 2 — mark profile as checked out
    const { error: profileUpdateError } = await admin
      .from("profiles")
      .update({ checked_out: true })
      .eq("id", user.id);
    if (profileUpdateError) {
      console.error("[submit-checkout] profiles update failed:", profileUpdateError);
      return NextResponse.json({ error: "checkout_failed" }, { status: 500 });
    }

    // Step 3 — hand off to the WhatsApp bot pipeline
    const { error: checkedOutGuestError } = await admin.from("checked_out_guests").insert({
      guest_phone: guestPhone,
      guest_name: profile.first_name,
      riad: riadLabel,
      checked_out_at: new Date().toISOString(),
      // The web-checkout webhook below sends the guest their thank-you message,
      // which IS the farewell — so the bot's goodbye poller must not fire again.
      goodbye_sent: true,
    });
    if (checkedOutGuestError) {
      console.error("[submit-checkout] checked_out_guests insert failed:", checkedOutGuestError);
      return NextResponse.json({ error: "handoff_failed" }, { status: 500 });
    }

    // Step 4 — notify the n8n bot immediately. Best-effort: awaited so the
    // serverless runtime doesn't kill the request, but a failure never fails
    // the guest's checkout.
    try {
      const webhookSecret = process.env.CHECKOUT_WEBHOOK_SECRET;
      if (webhookSecret === undefined) {
        console.error("[submit-checkout] CHECKOUT_WEBHOOK_SECRET is undefined");
      }
      await fetch("https://n8n.elidrissi.tech/webhook/web-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-dardart-secret": webhookSecret ?? "",
        },
        body: JSON.stringify({
          guest_phone: guestPhone,
          guest_name: profile.first_name,
          riad: riadLabel,
          survey: { ...ratings, comment },
        }),
        signal: AbortSignal.timeout(3000),
      });
    } catch (webhookError) {
      console.error("[submit-checkout] web-checkout webhook failed:", webhookError);
    }

    return NextResponse.json({ ok: true, guestName: profile.first_name, riad: riadLabel });
  } catch (err) {
    console.error("[submit-checkout] unexpected error:", err);
    return NextResponse.json({ error: "unexpected" }, { status: 500 });
  }
}
