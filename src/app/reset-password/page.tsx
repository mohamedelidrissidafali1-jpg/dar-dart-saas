"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getLang, getT, isRtl, type Lang } from "@/lib/translations";
import { createClient } from "@/lib/supabase/client";
import { getURL } from "@/lib/get-url";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

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
        <Card className="p-8 sm:p-10">
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
                  <Input
                    id="email"
                    type="email"
                    label={tr.signIn.email}
                    value={email}
                    onChange={setEmail}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                  />

                  {error && (
                    <p className="text-[14px] text-center" style={{ color: "#ef4444" }}>{error}</p>
                  )}

                  <Button type="submit" variant="primary" fullWidth disabled={loading} className="mt-2">
                    {loading ? tr.common.loading : tr.signIn.sendResetLink}
                  </Button>
                </form>
              </>
            )
          ) : updated ? (
            <p className="text-[15px] py-4" style={{ color: "var(--ink-secondary)" }}>
              {tr.signIn.passwordUpdated}
            </p>
          ) : (
            <form onSubmit={handleUpdate} className="flex flex-col gap-5">
              <Input
                id="new-password"
                type="password"
                label={tr.signIn.newPassword}
                value={password}
                onChange={setPassword}
                required
                autoComplete="new-password"
                placeholder="••••••••"
              />

              <Input
                id="confirm-password"
                type="password"
                label={tr.signIn.confirmPassword}
                value={confirm}
                onChange={setConfirm}
                required
                autoComplete="new-password"
                placeholder="••••••••"
              />

              {error && (
                <p className="text-[14px] text-center" style={{ color: "#ef4444" }}>{error}</p>
              )}

              <Button type="submit" variant="primary" fullWidth disabled={loading} className="mt-2">
                {loading ? tr.common.loading : tr.signIn.updatePassword}
              </Button>
            </form>
          )}
        </Card>

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
