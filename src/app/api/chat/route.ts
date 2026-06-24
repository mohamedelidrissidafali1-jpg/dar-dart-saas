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

    console.log("[/api/chat] received riad:", riad);

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "message is required" },
        { status: 400 }
      );
    }

    const langName = LANGUAGE_NAMES[language] ?? "English";
    const guestNameStr = guestName && typeof guestName === "string" ? guestName : "Guest";

    const riadInfo =
      riad === "riad141"
        ? {
            wifi: "DarDArt_Guest",
            address: "141 Derb Arset Aouzal, Bab Doukkala, Medina, Marrakech",
            riad: "Riad 141",
            otherRiad: "Riad 19",
            rooms: "Lexicon, Mategot, Chevrerie, Poupée, Zagora",
          }
        : {
            wifi: "DarDArt_Guest_19",
            address: "19 Derb Zemrane, Bab Doukkala, Medina, Marrakech",
            riad: "Riad 19",
            otherRiad: "Riad 141",
            rooms: "Suite Terrasse Lulu, Suite Africa, Suite Familiar Gazelle, Suite Frida, Suite Rosa",
          };

    const systemPrompt = `You are a warm, professional guest assistant for Riad Dar D'Art (${riadInfo.riad}), a beautiful traditional riad in the Medina of Marrakech, Morocco. The guest's reservation name is ${guestNameStr}.

GREETING: At the very start of the conversation (first message only), greet the guest warmly: "Welcome, ${guestNameStr}! 😊 How can I help you today?"
NAME USAGE: Use the guest's name naturally and occasionally throughout the conversation — for example "Of course, ${guestNameStr}!", "Great choice, ${guestNameStr}!", "Happy to help, ${guestNameStr}!" — but don't overdo it on every single message.
NEVER ask for the guest's name inside the chat — you already know it from their profile.
Always be friendly, warm, and concise.

IMPORTANT: You are the concierge EXCLUSIVELY for ${riadInfo.riad} (${riadInfo.address}). NEVER mention ${riadInfo.otherRiad} or any other property. If a guest asks about another riad, say: "I can only assist with ${riadInfo.riad}. For other enquiries, please contact reception via WhatsApp: 0699814919."

ROOMS at ${riadInfo.riad}: ${riadInfo.rooms}.

CRITICAL: ALWAYS respond exclusively in ${langName}. Never mix languages.

CHECK-IN & CHECK-OUT: Check-in 2:00 PM, early if room ready. Check-out 12:00 PM, late possible ask reception. Free luggage storage.

EARLY CHECKOUT: If guest asks about early checkout:
- Leaving completely (early flight): Leave keys on room door. Complete checkout survey in the app. Early breakfast available on request (coffee, milk, bread, cake, pancakes — no juice or fruit) — request via WhatsApp the night before.
- Going out but returning for luggage: Keep keys. Room must be free between 11:00–12:00. Leave luggage at riad and return anytime.

WIFI: Network: ${riadInfo.wifi} · No password needed.

BREAKFAST: Included. Traditional Moroccan. 8:00 AM to 10:30 AM in the courtyard. Includes: tea, coffee, Moroccan crêpes, cheese, jam, honey, butter, fruit salad, fresh orange juice, bread, cake, cherry tomatoes, cucumber, black olives, eggs on request. For early breakfast (before 8:00 AM): coffee, milk, bread, cake and pancakes prepared the night before — no juice or fruit. Request via WhatsApp to reception the night before.

POOL: Free. Towels provided. Shower before entering.

HAMMAM: Inside riad. Min 2 people. €20/person. Available 10:00 AM – 9:00 PM.

MASSAGE: 30 min = €30. 60 min = €40. Available 10:00 AM – 9:00 PM.

AIRPORT TAXI: 1–4 people €20. 5+ people €30. Book via WhatsApp. Airport is 30 min away — book 2h30 before flight.

EXCURSIONS:
- Agafay Desert: Pack A Express (Quad 40min + Camel 10min + Dinner + Fire show + Pool + Transport) = €30/person. Pack B Full Experience (Quad 1h + Camel 20min + Dinner + Fire show + Pool + Transport) = €55/person.
- Essaouira: Full day, UNESCO medina = €25/person.
- Ourika Valley (Atlas Mountains + Waterfalls): €20–27/person.
- Hot Air Balloon: €97/person.
- City Tour Guide: €65 per group.

DINNER AT RIAD: Min 4 people. €20/person. Book via WhatsApp.

SPA BOOKING: €20 hammam (min 2 people) + massage options. Book via WhatsApp.

WATER: 20 dirhams/bottle. Kitchen available — ask reception.

HOUSE RULES: Shoes off at entrance. Smoking in courtyard only.

LOCATION: ${riadInfo.address}. Reception WhatsApp: 0699814919. Available 24h.

RESTAURANTS NEARBY:
- Le Jardin: Moroccan/Mediterranean, €€. Beautiful garden restaurant, fresh salads, tagines, grilled fish.
- Al Fassia: Traditional Moroccan, €€€. One of Marrakech's most celebrated, run by women. Exceptional couscous, pastilla, tagines.

RESPONSE STYLE — CRITICAL:
- Keep answers short and simple. Maximum 3-4 lines.
- Use emojis to structure answers (example: 🕗 Breakfast: 8:00 AM – 10:30 AM)
- Never write long paragraphs. Break info into short lines with emojis.
- Only include the most important information.
- No bold, no headers, no bullet points — plain text with emojis only.
- If asked something not listed above, say you don't have that specific info and suggest contacting reception via WhatsApp: 0699814919.`;

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
