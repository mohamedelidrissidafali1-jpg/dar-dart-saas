"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LANGUAGES, getLang, getT, isRtl, type Lang } from "@/lib/translations";
import { createClient } from "@/lib/supabase/client";
import { getURL } from "@/lib/get-url";
import { normalizePhone } from "@/lib/phone";

export default function SignUp() {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(getLang());
  }, []);

  const tr = getT(lang);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    agreed: false,
    selectedRiad: "",
    selectedLanguage: "",
  });
  const [riadError, setRiadError] = useState(false);
  const [langError, setLangError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmEmail, setConfirmEmail] = useState(false);

  function set(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === "selectedRiad") setRiadError(false);
    if (field === "selectedLanguage") {
      setLangError(false);
      setLang(value as Lang);
    }
  }

  async function handleGoogleSignUp() {
    const supabase = createClient();
    const redirectTo = `${getURL()}/auth/callback`;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let valid = true;
    if (!form.selectedRiad) { setRiadError(true); valid = false; }
    if (!form.selectedLanguage) { setLangError(true); valid = false; }
    if (!valid) return;

    // Normalize the phone up-front so profiles only ever hold bare E.164 digits.
    const normalizedPhone = normalizePhone(form.phone);
    if (!normalizedPhone) {
      setError(tr.signUp.phoneInvalid);
      return;
    }

    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (signUpError || !data.user) {
      setError(signUpError?.message ?? tr.signUp.signUpFailedDefault);
      setLoading(false);
      return;
    }

    // Email confirmation enabled → no session yet. The DB trigger creates the
    // profile row; details are completed at /complete-profile after confirmation.
    if (!data.session) {
      setError(null);
      setConfirmEmail(true);
      setLoading(false);
      return;
    }

    // Upsert (not insert): a DB trigger on auth.users may have already created the row.
    const { error: profileError } = await supabase.from("profiles").upsert({
      id: data.user.id,
      first_name: form.firstName,
      language: form.selectedLanguage,
      riad: form.selectedRiad,
      phone: normalizedPhone,
      checked_out: false,
    });

    if (profileError) {
      setError(tr.signUp.profileSetupFailed);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  const dir = isRtl(lang) ? "rtl" : undefined;

  const inputBase = {
    border: "1px solid var(--hairline)",
    color: "var(--ink)",
    background: "var(--surface)",
    caretColor: "#0075de",
  };

  const focusOn = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.target.style.borderColor = "#0075de");
  const focusOff = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.target.style.borderColor = "var(--hairline)");

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
            {tr.signUp.heading}
          </h1>

          {/* Google sign-up */}
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center gap-3 py-3 text-[15px] font-medium rounded-full mb-6 transition-opacity duration-200 hover:opacity-85"
            style={{ background: "#ffffff", border: "1px solid #dadce0", color: "#3c4043" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908C16.658 14.017 17.64 11.71 17.64 9.2z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
              <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
              <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/>
            </svg>
            {tr.signUp.signUpWithGoogle}
          </button>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Language selection */}
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-medium" style={{ color: "var(--ink-secondary)" }}>
                {tr.signUp.language}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map(({ code, flag, label }) => {
                  const selected = form.selectedLanguage === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => set("selectedLanguage", code)}
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

            {/* Reservation name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="firstName"
                className="text-[14px] font-medium"
                style={{ color: "var(--ink-secondary)" }}
              >
                {tr.signUp.nameOnReservation}
              </label>
              <input
                id="firstName"
                type="text"
                value={form.firstName}
                onChange={(e) => set("firstName", e.target.value)}
                required
                autoComplete="name"
                className="w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px]"
                style={inputBase}
                onFocus={focusOn}
                onBlur={focusOff}
                placeholder={tr.signUp.namePlaceholder}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[14px] font-medium"
                style={{ color: "var(--ink-secondary)" }}
              >
                {tr.signUp.email}
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                required
                autoComplete="email"
                className="w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px]"
                style={inputBase}
                onFocus={focusOn}
                onBlur={focusOff}
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone"
                className="text-[14px] font-medium"
                style={{ color: "var(--ink-secondary)" }}
              >
                {tr.signUp.phone}
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                required
                autoComplete="tel"
                className="w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px]"
                style={inputBase}
                onFocus={focusOn}
                onBlur={focusOff}
                placeholder={tr.signUp.phonePlaceholder}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-[14px] font-medium"
                style={{ color: "var(--ink-secondary)" }}
              >
                {tr.signUp.password}
              </label>
              <input
                id="password"
                type="password"
                value={form.password}
                onChange={(e) => set("password", e.target.value)}
                required
                autoComplete="new-password"
                className="w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px]"
                style={inputBase}
                onFocus={focusOn}
                onBlur={focusOff}
                placeholder="••••••••"
              />
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
                  const selected = form.selectedRiad === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => set("selectedRiad", value)}
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

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form.agreed}
                onChange={(e) => set("agreed", e.target.checked)}
                required
                className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#0075de]"
              />
              <span className="text-[14px] leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                {tr.signUp.terms}{" "}
                <Link
                  href="/terms-of-service"
                  className="font-medium hover:opacity-70 transition-opacity"
                  style={{ color: "#0075de" }}
                >
                  {tr.signUp.termsLink}
                </Link>{" "}
                {tr.signUp.and}{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium hover:opacity-70 transition-opacity"
                  style={{ color: "#0075de" }}
                >
                  {tr.signUp.privacyLink}
                </Link>
              </span>
            </label>

            {/* Error */}
            {error && (
              <p className="text-[14px] text-center" style={{ color: "#ef4444" }}>{error}</p>
            )}

            {/* Email confirmation notice */}
            {confirmEmail && (
              <p className="text-[14px] text-center" style={{ color: "var(--ink-secondary)" }}>
                {tr.signUp.confirmEmail}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || confirmEmail}
              className="w-full py-3 text-[16px] font-medium rounded-full mt-2 transition-opacity duration-200 hover:opacity-85 disabled:opacity-50"
              style={{ background: "#0075de", color: "#ffffff" }}
            >
              {loading ? tr.signUp.creatingAccount : tr.signUp.submit}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px" style={{ background: "var(--hairline)" }} />
            <span className="text-[14px]" style={{ color: "var(--ink-faint)" }}>{tr.signUp.or}</span>
            <div className="flex-1 h-px" style={{ background: "var(--hairline)" }} />
          </div>

          <p className="text-center text-[15px]" style={{ color: "var(--ink-secondary)" }}>
            <span>{tr.signUp.haveAccount} </span>
            <Link
              href="/sign-in"
              className="font-medium transition-opacity duration-200 hover:opacity-70"
              style={{ color: "#0075de" }}
            >
              {tr.signUp.signIn}
            </Link>
          </p>
        </div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-[14px] transition-opacity duration-200 hover:opacity-100 opacity-60"
            style={{ color: "var(--ink-faint)" }}
          >
            {tr.signUp.backHome}
          </Link>
        </div>
      </div>
    </div>
  );
}
