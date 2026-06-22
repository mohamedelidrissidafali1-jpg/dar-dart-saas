import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY is not configured" },
      { status: 500 }
    );
  }

  try {
    const { message, language = "english" } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "message is required" },
        { status: 400 }
      );
    }

    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1024,
        system:
          "You are a helpful concierge assistant for Riad Dar D'Art, a luxury riad in Marrakech, Morocco. You help guests with questions about the riad's services, rooms, excursions, local recommendations, and policies. Always respond in the same language the guest uses. Be warm, friendly, and professional.",
        messages: [{ role: "user", content: message }],
      }),
    });

    if (!anthropicRes.ok) {
      const error = await anthropicRes.json().catch(() => ({}));
      return NextResponse.json(
        { error: error?.error?.message ?? "Anthropic API error" },
        { status: 502 }
      );
    }

    const data = await anthropicRes.json();
    const reply = data.content?.[0]?.text ?? "";

    return NextResponse.json({ reply });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
