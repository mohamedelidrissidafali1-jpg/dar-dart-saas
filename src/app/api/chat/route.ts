import { NextRequest, NextResponse } from "next/server";

const LANGUAGE_NAMES: Record<string, string> = {
  en: "English",
  fr: "French",
  es: "Spanish",
  ar: "Arabic",
  de: "German",
  it: "Italian",
};

const RECEPTION_WHATSAPP = "+212 709 086 496";

// Bound the history forwarded to the model.
const MAX_HISTORY = 12;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY is not configured" },
      { status: 500 }
    );
  }

  try {
    const { message, messages, riad, language, guestName } = await req.json();

    // Accept either a full history (`messages`) or a single `message` (legacy).
    let history: ChatMessage[] = [];
    if (Array.isArray(messages)) {
      history = messages
        .filter(
          (m): m is ChatMessage =>
            m &&
            (m.role === "user" || m.role === "assistant") &&
            typeof m.content === "string" &&
            m.content.trim() !== ""
        )
        .slice(-MAX_HISTORY);
      // Anthropic requires the first message to be a user turn.
      while (history.length > 0 && history[0].role !== "user") {
        history.shift();
      }
    } else if (typeof message === "string" && message.trim() !== "") {
      history = [{ role: "user", content: message }];
    }

    if (history.length === 0 || history[history.length - 1].role !== "user") {
      return NextResponse.json(
        { error: "a user message is required" },
        { status: 400 }
      );
    }

    const langName = LANGUAGE_NAMES[language] ?? "English";
    const guestNameStr = guestName && typeof guestName === "string" ? guestName : "Guest";

    const riadInfo =
      riad === "riad141"
        ? {
            address: "141 Derb Arset Aouzal, Bab Doukkala, Medina, Marrakech",
            riad: "Riad 141",
            otherRiad: "Riad 19",
            rooms: "Lexicon, Mategot, Chevrerie, Poupée, Zagora",
          }
        : {
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

IMPORTANT: You are the concierge EXCLUSIVELY for ${riadInfo.riad} (${riadInfo.address}). NEVER mention ${riadInfo.otherRiad} or any other property. If a guest asks about another riad, say: "I can only assist with ${riadInfo.riad}. For other enquiries, please contact reception via WhatsApp: ${RECEPTION_WHATSAPP}."

ROOMS at ${riadInfo.riad}: ${riadInfo.rooms}.

CRITICAL: ALWAYS respond exclusively in ${langName}. Never mix languages.

CHECK-IN & CHECK-OUT: Arrival possible from 10:30 AM (luggage storage available); rooms ready from 2:00 PM. Check-out by 12:00 PM, late check-out possible — ask reception. Free luggage storage.

EARLY CHECKOUT: If guest asks about early checkout:
- Leaving completely (early flight): Leave keys on room door. Complete checkout survey in the app. Express early breakfast available on request (coffee, milk, bread, cake, pancakes — no juice or fruit) — request via WhatsApp the night before.
- Going out but returning for luggage: Keep keys. Room must be free between 11:00–12:00. Leave luggage at riad and return anytime.

WIFI: Included in your stay. Connection details are provided at check-in — never share network names or passwords in chat.

BREAKFAST: Included. Traditional Moroccan, 8:00 AM to 10:30 AM in the courtyard. Includes: tea, coffee, Moroccan pancakes, cheese, jam, honey, butter, fruit salad, fresh orange juice, bread, cake, cherry tomatoes, cucumber, black olives, and eggs to order. Menu varies daily. Gluten-free cannot be guaranteed — bringing your own gluten-free products is recommended. For early departures an express breakfast (before 8:00 AM: coffee, milk, bread, cake, pancakes — no juice or fruit) can be prepared — request via WhatsApp the night before.

POOL: Free. Towels provided. Shower before entering.

SPA & HAMMAM: Inside the riad. Open 9:00 AM – 9:00 PM. Reserve at least 2 hours in advance. Hammam with gommage: €20/person, minimum 2 people. Massage: 30 min €30 · 60 min €40.

AIRPORT TRANSFER: €20 for 1–4 people (07:00–22:00) · €25 for 1–4 people at night (23:00–06:00) · €30 for 5–7 people. Book via WhatsApp. Airport is 30 min away — book 2h30 before your flight.

EXCURSIONS:
- Agafay Desert: Pack A Express (Quad 40min + Camel 10min + Dinner + Fire show + Pool + Transport) = €30/person. Pack B Full Experience (Quad 1h + Camel 20min + Dinner + Fire show + Pool + Transport) = €55/person.
- Essaouira: Full day, UNESCO medina on the Atlantic coast = €25/person. Departure 8:00 AM, return around 8:00 PM.
- Ourika Valley (Atlas Mountains + Waterfalls): €20/person, or €27/person with meal. Departure 9:00 AM, return around 5:00 PM.
- Hot Air Balloon: €97/person. Advance reservation required.
- Guided city day (Marrakech): €65 per GROUP of 1–4 people.
CANCELLATION: Free cancellation up to 14 days before arrival.

DINNER AT RIAD: €20/person, children under 12 €12, under 4 free. Minimum 4 people. Reserve 1 day ahead via WhatsApp.

WATER: 20 dirhams/bottle. Kitchen available — ask reception.

NOT OFFERED: There is no laundry service.

HOUSE RULES: Shoes off at entrance. Smoking in courtyard only.

LOCATION: ${riadInfo.address}. Reception WhatsApp: ${RECEPTION_WHATSAPP}. Front desk hours: 08:00–22:00 daily. This chat assistant is available 24/7.

RESTAURANTS NEARBY:
- Le Jardin: Moroccan/Mediterranean, €€. Beautiful garden restaurant, fresh salads, tagines, grilled fish.
- Al Fassia: Traditional Moroccan, €€€. One of Marrakech's most celebrated, run by women. Exceptional couscous, pastilla, tagines.

RESPONSE STYLE — CRITICAL:
- Keep answers short and simple. Maximum 3-4 lines.
- Use emojis to structure answers (example: 🕗 Breakfast: 8:00 AM – 10:30 AM)
- Never write long paragraphs. Break info into short lines with emojis.
- Only include the most important information.
- No bold, no headers, no bullet points — plain text with emojis only.
- If asked something not listed above, say you don't have that specific info and suggest contacting reception via WhatsApp: ${RECEPTION_WHATSAPP}.`;

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
        messages: history,
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
