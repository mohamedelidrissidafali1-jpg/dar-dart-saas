"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getLang, getT, isRtl, type Lang } from "@/lib/translations";
import { createClient } from "@/lib/supabase/client";
import { getURL } from "@/lib/get-url";

export default function ResetPassword() {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>("en");
  const [mode, setMode] = useState<"request" | "update" | "loading">("loading");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    setLang(getLang());
    // A session here means the guest arrived from the recovery link
    // (or is already signed in) — either way they may set a new password.
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      setMode(session ? "update" : "request");
    });
  }, []);

  const tr = getT(lang);
  const dir = isRtl(lang) ? "rtl" : undefined;

  async function handleRequest(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${getURL()}/auth/callback?next=/reset-password`,
    });

    if (resetError) {
      setError(resetError.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  }

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError(tr.signIn.passwordTooShort);
      return;
    }
    if (password !== confirm) {
      setError(tr.signIn.passwordMismatch);
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return;
    }

    setUpdated(true);
    setLoading(false);
    setTimeout(() => router.push("/dashboard"), 2000);
  }

  const inputStyle = {
    border: "1px solid var(--hairline)",
    color: "var(--ink)",
    background: "var(--surface)",
    caretColor: "var(--primary)",
  };
  const focusOn = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.target.style.borderColor = "var(--primary)");
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
        </div>

        {/* Card */}
        <div
          className="p-8 sm:p-10 rounded-xl"
          style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}
        >
          <h1
            className="text-xl font-bold mb-3"
            style={{ color: "var(--ink)", letterSpacing: "-0.25px" }}
          >
            {tr.signIn.resetHeading}
          </h1>

          {mode === "loading" ? (
            <p className="text-[15px] py-4" style={{ color: "var(--ink-muted)" }}>
              {tr.common.loading}
            </p>
          ) : mode === "request" ? (
            sent ? (
              <p className="text-[15px] py-4" style={{ color: "var(--ink-secondary)" }}>
                {tr.signIn.resetEmailSent}
              </p>
            ) : (
              <>
                <p className="text-[15px] mb-6" style={{ color: "var(--ink-muted)" }}>
                  {tr.signIn.resetDesc}
                </p>
                <form onSubmit={handleRequest} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-[14px] font-medium"
                      style={{ color: "var(--ink-secondary)" }}
                    >
                      {tr.signIn.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className="w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px]"
                      style={inputStyle}
                      onFocus={focusOn}
                      onBlur={focusOff}
                      placeholder="you@example.com"
                    />
                  </div>

                  {error && (
                    <p className="text-[14px] text-center" style={{ color: "#ef4444" }}>{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 text-[16px] font-medium rounded-[2px] mt-2 transition-opacity duration-200 hover:opacity-85 disabled:opacity-50"
                    style={{ background: "var(--accent)", color: "#ffffff" }}
                  >
                    {loading ? tr.common.loading : tr.signIn.sendResetLink}
                  </button>
                </form>
              </>
            )
          ) : updated ? (
            <p className="text-[15px] py-4" style={{ color: "var(--ink-secondary)" }}>
              {tr.signIn.passwordUpdated}
            </p>
          ) : (
            <form onSubmit={handleUpdate} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="new-password"
                  className="text-[14px] font-medium"
                  style={{ color: "var(--ink-secondary)" }}
                >
                  {tr.signIn.newPassword}
                </label>
                <input
                  id="new-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                  className="w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px]"
                  style={inputStyle}
                  onFocus={focusOn}
                  onBlur={focusOff}
                  placeholder="••••••••"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="confirm-password"
                  className="text-[14px] font-medium"
                  style={{ color: "var(--ink-secondary)" }}
                >
                  {tr.signIn.confirmPassword}
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                  autoComplete="new-password"
                  className="w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px]"
                  style={inputStyle}
                  onFocus={focusOn}
                  onBlur={focusOff}
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <p className="text-[14px] text-center" style={{ color: "#ef4444" }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-[16px] font-medium rounded-[2px] mt-2 transition-opacity duration-200 hover:opacity-85 disabled:opacity-50"
                style={{ background: "var(--accent)", color: "#ffffff" }}
              >
                {loading ? tr.common.loading : tr.signIn.updatePassword}
              </button>
            </form>
          )}
        </div>

        {/* Back to sign in */}
        <div className="text-center mt-6">
          <Link
            href="/sign-in"
            className="text-[14px] transition-opacity duration-200 hover:opacity-100 opacity-60"
            style={{ color: "var(--ink-faint)" }}
          >
            {tr.signIn.backToSignIn}
          </Link>
        </div>
      </div>
    </div>
  );
}
