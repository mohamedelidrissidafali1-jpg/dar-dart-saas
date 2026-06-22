"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LANGUAGES, getLang, getT, isRtl, type Lang } from "@/lib/translations";
import { createClient } from "@/lib/supabase/client";

export default function CompleteProfile() {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>("en");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedRiad, setSelectedRiad] = useState("");
  const [riadError, setRiadError] = useState(false);
  const [langError, setLangError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLang(getLang());
  }, []);

  const tr = getT(lang);
  const dir = isRtl(lang) ? "rtl" : undefined;

  function pickLanguage(code: string) {
    setSelectedLanguage(code);
    setLangError(false);
    setLang(code as Lang);
  }

  function pickRiad(value: string) {
    setSelectedRiad(value);
    setRiadError(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let valid = true;
    if (!selectedRiad) { setRiadError(true); valid = false; }
    if (!selectedLanguage) { setLangError(true); valid = false; }
    if (!valid) return;

    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      router.push("/sign-in");
      return;
    }

    const firstName = (user.user_metadata?.full_name as string | undefined)?.split(" ")[0]
      ?? (user.user_metadata?.name as string | undefined)
      ?? "";

    const { error: upsertError } = await supabase.from("profiles").upsert({
      id: user.id,
      first_name: firstName,
      language: selectedLanguage,
      riad: selectedRiad,
      checked_out: false,
    });

    if (upsertError) {
      setError("Failed to save profile. Please try again.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ background: "var(--background)", color: "var(--ink)" }}
      dir={dir}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/">
            <div
              className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-1"
              style={{ color: "var(--primary)" }}
            >
              Riad
            </div>
            <div
              className="text-2xl font-bold tracking-tight"
              style={{ color: "var(--ink)", letterSpacing: "-0.5px" }}
            >
              Dar D&apos;Art
            </div>
          </Link>
          <p className="mt-3 text-[15px]" style={{ color: "var(--ink-muted)" }}>
            {tr.signUp.conciergeAwaits}
          </p>
        </div>

        {/* Card */}
        <div
          className="p-8 sm:p-10 rounded-xl"
          style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}
        >
          <h1
            className="text-xl font-bold mb-6"
            style={{ color: "var(--ink)", letterSpacing: "-0.25px" }}
          >
            Complete Your Profile
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Language selection */}
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-medium" style={{ color: "var(--ink-secondary)" }}>
                {tr.signUp.language}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map(({ code, flag, label }) => {
                  const selected = selectedLanguage === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => pickLanguage(code)}
                      className="flex items-center gap-2.5 px-3 py-2.5 text-left transition-all duration-200 rounded-lg"
                      style={{
                        border: selected
                          ? "1px solid #0075de"
                          : langError
                          ? "1px solid #ef4444"
                          : "1px solid var(--hairline)",
                        background: selected ? "rgba(0,117,222,0.08)" : "var(--surface)",
                      }}
                    >
                      <span className="text-lg leading-none">{flag}</span>
                      <span
                        className="text-[15px]"
                        style={{ color: selected ? "#0075de" : "var(--ink-secondary)" }}
                      >
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
              {langError && (
                <p className="text-[14px]" style={{ color: "#ef4444" }}>
                  {tr.signUp.languageRequired}
                </p>
              )}
            </div>

            {/* Riad selection */}
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-medium" style={{ color: "var(--ink-secondary)" }}>
                {tr.signUp.whichRiad}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {([
                  { value: "riad19", label: "Riad 19", sub: "19 Derb Zemrane" },
                  { value: "riad141", label: "Riad 141", sub: "141 Derb Arset Aouzal" },
                ] as const).map(({ value, label, sub }) => {
                  const selected = selectedRiad === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => pickRiad(value)}
                      className="text-left px-4 py-3.5 transition-all duration-200 rounded-lg"
                      style={{
                        border: selected
                          ? "1px solid #0075de"
                          : riadError
                          ? "1px solid #ef4444"
                          : "1px solid var(--hairline)",
                        background: selected ? "rgba(0,117,222,0.08)" : "var(--surface)",
                      }}
                    >
                      <div
                        className="text-[15px] font-semibold"
                        style={{ color: selected ? "#0075de" : "var(--ink)" }}
                      >
                        {label}
                      </div>
                      <div className="text-[13px] mt-0.5" style={{ color: "var(--ink-muted)" }}>
                        {sub}
                      </div>
                    </button>
                  );
                })}
              </div>
              {riadError && (
                <p className="text-[14px]" style={{ color: "#ef4444" }}>
                  {tr.signUp.riadRequired}
                </p>
              )}
            </div>

            {/* Error */}
            {error && (
              <p className="text-[14px] text-center" style={{ color: "#ef4444" }}>{error}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-[16px] font-medium rounded-full mt-2 transition-opacity duration-200 hover:opacity-85 disabled:opacity-50"
              style={{ background: "#0075de", color: "#ffffff" }}
            >
              {loading ? "Saving…" : "Continue to Dashboard"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
