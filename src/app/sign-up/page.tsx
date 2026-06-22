"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LANGUAGES, getLang, getT, isRtl, type Lang } from "@/lib/translations";

export default function SignUp() {
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
    agreed: false,
    selectedRiad: "",
    selectedLanguage: "",
  });
  const [riadError, setRiadError] = useState(false);
  const [langError, setLangError] = useState(false);

  function set(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === "selectedRiad") setRiadError(false);
    if (field === "selectedLanguage") {
      setLangError(false);
      setLang(value as Lang);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let valid = true;
    if (!form.selectedRiad) { setRiadError(true); valid = false; }
    if (!form.selectedLanguage) { setLangError(true); valid = false; }
    if (!valid) return;
    localStorage.setItem("selectedRiad", form.selectedRiad);
    localStorage.setItem("selectedLanguage", form.selectedLanguage);
    // Auth integration goes here
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

            {/* Name row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="firstName"
                  className="text-[14px] font-medium"
                  style={{ color: "var(--ink-secondary)" }}
                >
                  {tr.signUp.firstName}
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  required
                  autoComplete="given-name"
                  className="w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px]"
                  style={inputBase}
                  onFocus={focusOn}
                  onBlur={focusOff}
                  placeholder="Amina"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="lastName"
                  className="text-[14px] font-medium"
                  style={{ color: "var(--ink-secondary)" }}
                >
                  {tr.signUp.lastName}
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                  required
                  autoComplete="family-name"
                  className="w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px]"
                  style={inputBase}
                  onFocus={focusOn}
                  onBlur={focusOff}
                  placeholder="Benali"
                />
              </div>
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 text-[16px] font-medium rounded-full mt-2 transition-opacity duration-200 hover:opacity-85"
              style={{ background: "#0075de", color: "#ffffff" }}
            >
              {tr.signUp.submit}
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
