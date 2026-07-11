"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getLang, getT, isRtl, type Lang } from "@/lib/translations";
import { createClient } from "@/lib/supabase/client";
import { getURL } from "@/lib/get-url";

export default function SignIn() {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>("en");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLang(getLang());
  }, []);

  const tr = getT(lang);
  const dir = isRtl(lang) ? "rtl" : undefined;

  async function handleGoogleSignIn() {
    const supabase = createClient();
    const redirectTo = `${getURL()}/auth/callback`;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    if (signInError) {
      setError(signInError.message);
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
            {tr.signIn.conciergeAwaits}
          </p>
        </div>

        {/* Card */}
        <div
          className="p-8 sm:p-10 rounded-xl"
          style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}
        >
          <h1
            className="text-xl font-bold mb-8"
            style={{ color: "var(--ink)", letterSpacing: "-0.25px" }}
          >
            {tr.signIn.heading}
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email */}
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
                style={{ border: "1px solid var(--hairline)", color: "var(--ink)", background: "var(--surface)", caretColor: "var(--primary)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--hairline)")}
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-[14px] font-medium"
                  style={{ color: "var(--ink-secondary)" }}
                >
                  {tr.signIn.password}
                </label>
                <Link
                  href="/reset-password"
                  className="text-[14px] transition-opacity duration-200 hover:opacity-70"
                  style={{ color: "var(--primary)" }}
                >
                  {tr.signIn.forgotPassword}
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px]"
                style={{ border: "1px solid var(--hairline)", color: "var(--ink)", background: "var(--surface)", caretColor: "var(--primary)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--hairline)")}
                placeholder="••••••••"
              />
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
              {loading ? tr.signIn.signingIn : tr.signIn.submit}
            </button>
          </form>

          {/* Google sign-in */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 py-3 text-[15px] font-medium rounded-full mt-4 transition-opacity duration-200 hover:opacity-85"
            style={{ background: "#ffffff", border: "1px solid #dadce0", color: "#3c4043" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908C16.658 14.017 17.64 11.71 17.64 9.2z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
              <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
              <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/>
            </svg>
            {tr.signIn.continueWithGoogle}
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px" style={{ background: "var(--hairline)" }} />
            <span className="text-[14px]" style={{ color: "var(--ink-faint)" }}>{tr.signIn.or}</span>
            <div className="flex-1 h-px" style={{ background: "var(--hairline)" }} />
          </div>

          <p className="text-center text-[15px]" style={{ color: "var(--ink-secondary)" }}>
            <span>{tr.signIn.noAccount} </span>
            <Link
              href="/sign-up"
              className="font-medium transition-opacity duration-200 hover:opacity-70"
              style={{ color: "var(--primary)" }}
            >
              {tr.signIn.createAccount}
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
            {tr.signIn.backHome}
          </Link>
        </div>
      </div>
    </div>
  );
}
