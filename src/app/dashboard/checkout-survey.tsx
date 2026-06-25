"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getT, type Lang } from "@/lib/translations";
import { createClient } from "@/lib/supabase/client";

interface Props {
  firstName: string;
  lang: Lang;
  onClose: () => void;
  onCheckedOut: () => void;
}

const RATING_KEYS = [
  { key: "overall_rating", labelKey: "overallRating" },
  { key: "rooms_rating", labelKey: "roomsRating" },
  { key: "food_rating", labelKey: "foodRating" },
  { key: "staff_rating", labelKey: "staffRating" },
  { key: "cleanliness_rating", labelKey: "cleanlinessRating" },
  { key: "concierge_rating", labelKey: "conciergeRating" },
] as const;

type RatingKey = (typeof RATING_KEYS)[number]["key"];

export default function CheckoutSurveyModal({ firstName, lang, onClose, onCheckedOut }: Props) {
  const router = useRouter();
  const tr = getT(lang);

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
    const missing = RATING_KEYS.find(({ key }) => ratings[key] === 0);
    if (missing) {
      setError(`${tr.survey.pleaseRate} ${tr.survey[missing.labelKey]} ${tr.survey.beforeSubmitting}`);
      return;
    }

    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setError(tr.survey.sessionExpired);
      setLoading(false);
      return;
    }

    const { error: surveyError } = await supabase.from("checkout_surveys").insert({
      user_id: user.id,
      ...ratings,
      comment: comment.trim() || null,
    });

    if (surveyError) {
      setError(tr.survey.failedToSubmit);
      setLoading(false);
      return;
    }

    const { error: profileError } = await supabase
      .from("profiles")
      .update({ checked_out: true })
      .eq("id", user.id);

    if (profileError) {
      setError(tr.survey.checkoutFailed);
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
              {tr.survey.thankYou} {firstName}!
            </h2>
            <p className="text-[15px]" style={{ color: "var(--ink-muted)" }}>
              {tr.survey.feedbackMessage}
            </p>
            <p className="text-[13px]" style={{ color: "var(--ink-faint)" }}>
              {tr.survey.signingOut}
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
                  {tr.survey.checkOut}
                </div>
                <h2
                  className="text-[18px] font-bold"
                  style={{ color: "var(--ink)", letterSpacing: "-0.25px" }}
                >
                  {tr.survey.howWasStay} {firstName}?
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
              {RATING_KEYS.map(({ key, labelKey }) => (
                <div key={key} className="flex items-center justify-between gap-3">
                  <span className="text-[15px]" style={{ color: "var(--ink-secondary)" }}>
                    {tr.survey[labelKey]}
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
                  {tr.survey.comments}{" "}
                  <span style={{ color: "var(--ink-faint)", fontWeight: 400 }}>{tr.survey.optional}</span>
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                  placeholder={tr.survey.commentsPlaceholder}
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
                {tr.survey.cancel}
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-2.5 text-[15px] font-medium rounded-full transition-opacity hover:opacity-85 disabled:opacity-50"
                style={{ background: "#C1440E", color: "#ffffff" }}
              >
                {loading ? tr.survey.submitting : tr.survey.complete}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
