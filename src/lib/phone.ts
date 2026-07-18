/**
 * Normalizes a phone number to bare E.164 digits (no `+`, no spaces, no
 * `@s.whatsapp.net`) as expected by the n8n WhatsApp Receiver. Works for any
 * country code — the n8n matching is not Morocco-specific.
 *
 * Rules:
 * - strip all non-digits
 * - leading `00` (international dialing prefix) is dropped
 * - leading `0` + exactly 9 digits (Moroccan local, e.g. 0612345678) → `212` + 9 digits
 * - otherwise accept 10–15 digits that do not start with `0` — anything shorter
 *   is almost certainly a national number missing its country code, which the
 *   WhatsApp pipeline cannot deliver to
 * - anything else → null (caller must reject, never fall back to another value)
 */
export function normalizePhone(input: string | null | undefined): string | null {
  if (!input) return null;

  let digits = input.replace(/\D/g, "");

  if (digits.startsWith("00")) {
    digits = digits.slice(2);
  }

  if (digits.length === 10 && digits.startsWith("0")) {
    digits = "212" + digits.slice(1);
  }

  if (digits.length < 10 || digits.length > 15 || digits.startsWith("0")) {
    return null;
  }

  return digits;
}
