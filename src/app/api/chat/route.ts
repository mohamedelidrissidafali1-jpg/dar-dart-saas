import { NextRequest, NextResponse } from "next/server";

const LANGUAGE_NAMES: Record<string, string> = {
  en: "English",
  fr: "French",
  es: "Spanish",
  ar: "Arabic",
  de: "German",
  it: "Italian",
};

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY is not configured" },
      { status: 500 }
    );
  }

  try {
    const { message, riad, language, guestName } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "message is required" },
        { status: 400 }
      );
    }

    const riadContext =
      riad === "riad141"
        ? "You are the concierge for Riad 141, located at 141 Derb Arset Aouzal, Marrakech. This property has its own unique rooms. WiFi network: DarDArt141, password: [placeholder]. Breakfast is served 8-10:30am on the rooftop terrace."
        : "You are the concierge for Riad 19, located at 19 Derb Zemrane, Marrakech. This property has 5 unique rooms. WiFi network: DarDArt19, password: [placeholder]. Breakfast is served 8-10:30am in the courtyard.";

    const langName = LANGUAGE_NAMES[language] ?? "English";
    const languageInstruction = `You MUST always respond in ${langName}, regardless of the language the guest uses to write.`;
    const nameInstruction = guestName && typeof guestName === "string"
      ? ` The guest's name is ${guestName}. Always address them warmly by their first name.`
      : "";

    const systemPrompt = `${riadContext} You are a warm, professional luxury riad concierge.${nameInstruction} ${languageInstruction}`;

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
        system: systemPrompt,
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
