"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ChatBox from "@/components/ChatBox";
import ThemeToggle from "@/components/ThemeToggle";
import CheckoutSurveyModal from "./checkout-survey";
import { getLang, getT, isRtl, type Lang } from "@/lib/translations";
import { createClient } from "@/lib/supabase/client";

const RIAD_LABELS: Record<string, string> = {
  riad19: "Riad 19",
  riad141: "Riad 141",
};

interface Profile {
  first_name: string;
  language: string;
  riad: string;
  checked_out: boolean;
}

export default function Dashboard() {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>("en");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [chatKey, setChatKey] = useState(0);
  const [pendingPrompt, setPendingPrompt] = useState<string | undefined>();
  const [showSurvey, setShowSurvey] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);

  useEffect(() => {
    setLang(getLang());

    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/sign-in");
        return;
      }
      supabase
        .from("profiles")
        .select("first_name, language, riad, checked_out")
        .eq("id", user.id)
        .single()
        .then(({ data }) => {
          if (data) {
            setProfile(data as Profile);
            setCheckedOut(data.checked_out);
            if (data.language) setLang(data.language as Lang);
          }
        });
    });
  }, [router]);

  const tr = getT(lang);
  const dir = isRtl(lang) ? "rtl" : undefined;

  function handleQuickPrompt(prompt: string) {
    setPendingPrompt(prompt);
    setChatKey((k) => k + 1);
  }

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  }

  const firstName = profile?.first_name ?? "";
  const selectedRiad = profile?.riad ?? "";

  const welcomeText = firstName
    ? `Welcome, ${firstName}!`
    : selectedRiad
    ? `${tr.dashboard.welcome} ${RIAD_LABELS[selectedRiad] ?? "Riad Dar D'Art"}`
    : tr.dashboard.fallback;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--background)", color: "var(--ink)" }}
      dir={dir}
    >
      {/* Top bar */}
      <header
        className="flex items-center justify-between px-6 py-4"
        style={{
          background: "var(--surface)",
          borderBottom: "1px solid var(--hairline)",
        }}
      >
        <Link href="/" className="text-left leading-tight">
          <div
            className="text-[11px] font-semibold tracking-[0.3em] uppercase"
            style={{ color: "var(--primary)" }}
          >
            Riad
          </div>
          <div
            className="text-base font-bold tracking-tight"
            style={{ color: "var(--ink)", letterSpacing: "-0.25px" }}
          >
            Dar D&apos;Art
          </div>
        </Link>

        <div className="flex items-center gap-3">
          {firstName && (
            <span className="hidden sm:block text-[14px]" style={{ color: "var(--ink-muted)" }}>
              {firstName}
            </span>
          )}
          <ThemeToggle color="var(--ink-secondary)" />
          {!checkedOut && (
            <button
              onClick={() => setShowSurvey(true)}
              className="text-[14px] font-medium px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-[var(--background)]"
              style={{ border: "1px solid var(--hairline)", color: "var(--ink-secondary)" }}
            >
              Check Out
            </button>
          )}
          <button
            onClick={handleSignOut}
            className="text-[14px] font-medium px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-[var(--background)]"
            style={{ border: "1px solid var(--hairline)", color: "var(--ink-secondary)" }}
          >
            {tr.dashboard.signOut}
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-4 py-8 gap-6">
        {checkedOut ? (
          /* Stay-ended screen */
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-24">
            <div
              className="text-[11px] font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--primary)" }}
            >
              Riad Dar D&apos;Art
            </div>
            <h1
              className="text-2xl md:text-3xl font-bold"
              style={{ color: "var(--ink)", letterSpacing: "-0.5px" }}
            >
              Your stay has ended
            </h1>
            <p className="text-[15px] max-w-sm" style={{ color: "var(--ink-muted)" }}>
              Thank you for staying with us, {firstName}. We hope to welcome you back soon.
            </p>
            <Link
              href="/"
              className="mt-4 px-6 py-3 text-[15px] font-medium rounded-full transition-opacity duration-200 hover:opacity-85"
              style={{ background: "#C1440E", color: "#ffffff" }}
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <>
            {/* Welcome banner */}
            <div>
              <p className="text-[12px] font-semibold tracking-[0.125px] uppercase mb-2" style={{ color: "var(--primary)" }}>
                {tr.dashboard.aiConcierge}
              </p>
              <h1
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "var(--ink)", letterSpacing: "-0.5px" }}
              >
                {welcomeText}
              </h1>
              <p className="text-[15px] mt-1" style={{ color: "var(--ink-muted)" }}>
                {tr.dashboard.howCanIHelp}
              </p>
            </div>

            {/* Quick-access suggestion chips */}
            <div className="flex flex-wrap gap-2">
              {(tr.dashboard.quickPrompts as string[]).map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleQuickPrompt(prompt)}
                  className="px-4 py-2 text-[14px] rounded-full transition-all duration-200 hover:bg-[var(--surface)] hover:shadow-sm"
                  style={{
                    border: "1px solid var(--hairline)",
                    color: "var(--ink-secondary)",
                    background: "var(--background)",
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat box */}
            <div className="flex-1 flex flex-col min-h-[480px]">
              <ChatBox
                key={chatKey}
                initialMessage={pendingPrompt}
                riad={selectedRiad || undefined}
                language={profile?.language as Lang | undefined}
                guestName={firstName || undefined}
              />
            </div>

            <p className="text-center text-[14px]" style={{ color: "var(--ink-faint)" }}>
              {tr.dashboard.poweredBy}
            </p>
          </>
        )}
      </main>

      {showSurvey && profile && (
        <CheckoutSurveyModal
          firstName={firstName}
          onClose={() => setShowSurvey(false)}
          onCheckedOut={() => {
            setCheckedOut(true);
            setShowSurvey(false);
          }}
        />
      )}
    </div>
  );
}
