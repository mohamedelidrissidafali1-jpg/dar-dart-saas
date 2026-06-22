"use client";

import { useState } from "react";
import Link from "next/link";
import ChatBox from "@/components/ChatBox";

const QUICK_PROMPTS = [
  "What time is breakfast?",
  "Book an excursion",
  "Request room service",
  "What's the Wi-Fi password?",
  "What time is check-out?",
];

export default function Dashboard() {
  const [chatKey, setChatKey] = useState(0);
  const [pendingPrompt, setPendingPrompt] = useState<string | undefined>();

  function handleQuickPrompt(prompt: string) {
    setPendingPrompt(prompt);
    setChatKey((k) => k + 1);
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#0D1B2A", color: "#E8DFC8" }}
    >
      {/* Top bar */}
      <header
        className="flex items-center justify-between px-6 py-4"
        style={{
          background: "rgba(13,27,42,0.97)",
          borderBottom: "1px solid rgba(184,151,58,0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Link href="/" className="text-left leading-tight">
          <div
            className="text-xs font-light tracking-[0.35em] uppercase"
            style={{ color: "#B8973A" }}
          >
            Riad
          </div>
          <div
            className="text-base font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#E8DFC8" }}
          >
            Dar D&apos;Art
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <span
            className="hidden sm:block text-xs tracking-wide opacity-55"
            style={{ color: "#E8DFC8" }}
          >
            Welcome, Guest
          </span>
          <Link
            href="/"
            className="text-xs tracking-[0.2em] uppercase px-4 py-2 transition-all duration-200 hover:opacity-80"
            style={{ border: "1px solid rgba(184,151,58,0.4)", color: "#B8973A" }}
          >
            Sign Out
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col max-w-3xl w-full mx-auto px-4 py-8 gap-6">
        {/* Welcome banner */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase mb-2" style={{ color: "#B8973A" }}>
            AI Concierge
          </p>
          <h1
            className="text-2xl md:text-3xl font-light"
            style={{ color: "#E8DFC8", letterSpacing: "0.04em" }}
          >
            How can I help you today?
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <div className="h-px w-10" style={{ background: "#B8973A" }} />
            <div className="w-1 h-1 rotate-45" style={{ background: "#B8973A" }} />
            <div className="h-px w-10" style={{ background: "#B8973A" }} />
          </div>
        </div>

        {/* Quick-access suggestion chips */}
        <div className="flex flex-wrap gap-2">
          {QUICK_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleQuickPrompt(prompt)}
              className="px-4 py-2 text-xs tracking-wide transition-all duration-200 hover:opacity-100 opacity-70"
              style={{
                border: "1px solid rgba(184,151,58,0.35)",
                color: "#E8DFC8",
                background: "rgba(184,151,58,0.06)",
              }}
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat box — full width, expands to fill */}
        <div className="flex-1 flex flex-col min-h-[480px]">
          <ChatBox key={chatKey} initialMessage={pendingPrompt} />
        </div>

        {/* Powered by note */}
        <p className="text-center text-xs opacity-25 tracking-wide" style={{ color: "#E8DFC8" }}>
          Powered by Claude AI · Responses are informational only
        </p>
      </main>
    </div>
  );
}
