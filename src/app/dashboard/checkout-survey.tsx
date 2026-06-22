"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

interface Props {
  firstName: string;
  onClose: () => void;
  onCheckedOut: () => void;
}

const CATEGORIES = [
  { key: "overall_rating", label: "Overall Stay" },
  { key: "rooms_rating", label: "Rooms" },
  { key: "food_rating", label: "Food" },
  { key: "staff_rating", label: "Staff" },
  { key: "cleanliness_rating", label: "Cleanliness" },
  { key: "concierge_rating", label: "AI Concierge" },
] as const;

type RatingKey = (typeof CATEGORIES)[number]["key"];

export default function CheckoutSurveyModal({ firstName, onClose, onCheckedOut }: Props) {
  const router = useRouter();
  const [ratings, setRatings] = useState<Record<RatingKey, number>>({
    overall_rating: 0,
    rooms_rating: 0,
    food_rating: 0,
    staff_rating: 0,
    cleanliness_rating: 0,
    concierge_rating: 0,
  });
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function setRating(key: RatingKey, value: number) {
    setRatings((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const missing = CATEGORIES.find(({ key }) => ratings[key] === 0);
    if (missing) {
      setError(`Please rate ${missing.label} before submitting.`);
      return;
    }

    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setError("Session expired. Please sign in again.");
      setLoading(false);
      return;
    }

    const { error: surveyError } = await supabase.from("checkout_surveys").insert({
      user_id: user.id,
      ...ratings,
      comment: comment.trim() || null,
    });

    if (surveyError) {
      setError("Failed to submit survey. Please try again.");
      setLoading(false);
      return;
    }

    const { error: profileError } = await supabase
      .from("profiles")
      .update({ checked_out: true })
      .eq("id", user.id);

    if (profileError) {
      setError("Survey saved but checkout failed. Please try again.");
      setLoading(false);
      return;
    }

    setDone(true);
    setTimeout(async () => {
      await supabase.auth.signOut();
      onCheckedOut();
      router.push("/");
    }, 3000);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full max-w-lg rounded-2xl overflow-hidden"
        style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}
      >
        {done ? (
          <div className="flex flex-col items-center justify-center gap-4 px-8 py-16 text-center">
            <div
              className="text-[11px] font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#C1440E" }}
            >
              Riad Dar D&apos;Art
            </div>
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--ink)", letterSpacing: "-0.25px" }}
            >
              Thank you, {firstName}!
            </h2>
            <p className="text-[15px]" style={{ color: "var(--ink-muted)" }}>
              Your feedback means the world to us. We hope to welcome you back soon.
            </p>
            <p className="text-[13px]" style={{ color: "var(--ink-faint)" }}>
              Signing you out…
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: "1px solid var(--hairline)" }}
            >
              <div>
                <div
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-0.5"
                  style={{ color: "#C1440E" }}
                >
                  Check Out
                </div>
                <h2
                  className="text-[18px] font-bold"
                  style={{ color: "var(--ink)", letterSpacing: "-0.25px" }}
                >
                  How was your stay, {firstName}?
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-[var(--background)]"
                style={{ color: "var(--ink-muted)" }}
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Ratings */}
            <div className="px-6 py-5 flex flex-col gap-4" style={{ maxHeight: "60vh", overflowY: "auto" }}>
              {CATEGORIES.map(({ key, label }) => (
                <div key={key} className="flex items-center justify-between gap-3">
                  <span className="text-[15px]" style={{ color: "var(--ink-secondary)" }}>
                    {label}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(key, star)}
                        className="transition-transform hover:scale-110"
                        aria-label={`${star} star`}
                      >
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill={ratings[key] >= star ? "#C1440E" : "none"} stroke={ratings[key] >= star ? "#C1440E" : "var(--hairline)"} strokeWidth={1.5}>
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Comment */}
              <div className="flex flex-col gap-1.5 mt-2">
                <label
                  className="text-[14px] font-medium"
                  style={{ color: "var(--ink-secondary)" }}
                >
                  Any comments? <span style={{ color: "var(--ink-faint)", fontWeight: 400 }}>(optional)</span>
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                  placeholder="Tell us about your experience…"
                  className="w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px] resize-none"
                  style={{
                    border: "1px solid var(--hairline)",
                    color: "var(--ink)",
                    background: "var(--background)",
                    caretColor: "#C1440E",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#C1440E")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--hairline)")}
                />
              </div>

              {error && (
                <p className="text-[14px]" style={{ color: "#ef4444" }}>{error}</p>
              )}
            </div>

            {/* Footer */}
            <div
              className="flex gap-3 px-6 py-4"
              style={{ borderTop: "1px solid var(--hairline)" }}
            >
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 text-[15px] font-medium rounded-full transition-opacity hover:opacity-70"
                style={{ border: "1px solid var(--hairline)", color: "var(--ink-secondary)" }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-2.5 text-[15px] font-medium rounded-full transition-opacity hover:opacity-85 disabled:opacity-50"
                style={{ background: "#C1440E", color: "#ffffff" }}
              >
                {loading ? "Submitting…" : "Complete Check Out"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
