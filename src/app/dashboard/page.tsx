"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ChatBox from "@/components/ChatBox";
import ThemeToggle from "@/components/ThemeToggle";
import { getLang, getT, isRtl, type Lang } from "@/lib/translations";

const RIAD_LABELS: Record<string, string> = {
  riad19: "Riad 19",
  riad141: "Riad 141",
};

export default function Dashboard() {
  const [lang, setLang] = useState<Lang>("en");
  const [selectedRiad, setSelectedRiad] = useState<string>("");
  const [chatKey, setChatKey] = useState(0);
  const [pendingPrompt, setPendingPrompt] = useState<string | undefined>();

  useEffect(() => {
    setLang(getLang());
    setSelectedRiad(localStorage.getItem("selectedRiad") ?? "");
  }, []);

  const tr = getT(lang);
  const dir = isRtl(lang) ? "rtl" : undefined;

  function handleQuickPrompt(prompt: string) {
    setPendingPrompt(prompt);
    setChatKey((k) => k + 1);
  }

  const welcomeText = selectedRiad
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
          <span className="hidden sm:block text-[14px]" style={{ color: "var(--ink-muted)" }}>
            {tr.dashboard.welcomeGuest}
          </span>
          <ThemeToggle color="var(--ink-secondary)" />
          <Link
            href="/"
            className="text-[14px] font-medium px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-[var(--background)]"
            style={{ border: "1px solid var(--hairline)", color: "var(--ink-secondary)" }}
          >
            {tr.dashboard.signOut}
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-4 py-8 gap-6">
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
          <ChatBox key={chatKey} initialMessage={pendingPrompt} riad={selectedRiad || undefined} />
        </div>

        <p className="text-center text-[14px]" style={{ color: "var(--ink-faint)" }}>
          {tr.dashboard.poweredBy}
        </p>
      </main>
    </div>
  );
}
