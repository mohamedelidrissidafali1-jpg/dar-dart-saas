"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { getLang, getT, isRtl, type Lang } from "@/lib/translations";

type Role = "guest" | "assistant";

interface Message {
  id: number;
  role: Role;
  text: string;
}

interface ChatBoxProps {
  initialMessage?: string;
  riad?: string;
  language?: string;
  guestName?: string;
}

export default function ChatBox({ initialMessage, riad, language: langProp, guestName }: ChatBoxProps = {}) {
  const [lang, setLang] = useState<Lang>((langProp as Lang) ?? "en");

  useEffect(() => {
    if (!langProp) setLang(getLang());
  }, [langProp]);

  const tr = getT(lang);

  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "assistant", text: tr.chat.greeting },
  ]);
  const [input, setInput] = useState(initialMessage ?? "");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);
  const greetingSet = useRef(false);

  useEffect(() => {
    if (!greetingSet.current) {
      greetingSet.current = true;
      return;
    }
    setMessages((prev) =>
      prev[0]?.role === "assistant" && prev.length === 1
        ? [{ id: 0, role: "assistant", text: tr.chat.greeting }]
        : prev
    );
  }, [tr.chat.greeting]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const guestMsg: Message = { id: nextId.current++, role: "guest", text };
    const nextMessages = [...messages, guestMsg];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    // Send the bounded conversation history so the assistant has context.
    // Drop the locally-injected greeting (id 0) so the history starts with a user turn.
    const history = nextMessages
      .filter((m) => m.id !== 0)
      .slice(-12)
      .map((m) => ({
        role: m.role === "guest" ? "user" : "assistant",
        content: m.text,
      }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, riad, language: lang, guestName }),
      });

      const data = await res.json();
      const reply: string =
        data.reply ?? data.message ?? tr.common.error;

      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, role: "assistant", text: reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, role: "assistant", text: tr.common.error },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const dir = isRtl(lang) ? "rtl" : undefined;

  return (
    <div
      className="flex flex-col h-full rounded-xl overflow-hidden"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--hairline)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)",
      }}
      dir={dir}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-5 py-4 border-b"
        style={{ borderColor: "var(--hairline)", background: "var(--surface)" }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: "#0075de" }} />
        <span className="text-[15px] font-semibold" style={{ color: "var(--ink)" }}>
          {tr.chat.concierge}
        </span>
      </div>

      {/* Message history */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4" style={{ background: "var(--background)" }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "guest" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="max-w-[75%] px-4 py-3 rounded-2xl text-[15px] leading-relaxed"
              style={
                msg.role === "guest"
                  ? {
                      background: "#0075de",
                      color: "#ffffff",
                      borderBottomRightRadius: "4px",
                    }
                  : {
                      background: "var(--surface)",
                      color: "var(--ink)",
                      borderBottomLeftRadius: "4px",
                      border: "1px solid var(--hairline)",
                    }
              }
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-start">
            <div
              className="px-4 py-3 rounded-2xl"
              style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderBottomLeftRadius: "4px" }}
            >
              <span className="flex gap-1 items-center">
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{ background: "#0075de", animationDelay: `${delay}ms` }}
                  />
                ))}
              </span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <form
        onSubmit={handleSend}
        className="flex items-center gap-3 px-4 py-4 border-t"
        style={{ borderColor: "var(--hairline)", background: "var(--surface)" }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={tr.chat.placeholder}
          disabled={loading}
          className="flex-1 bg-transparent outline-none text-[15px] disabled:opacity-50"
          style={{ color: "var(--ink)", caretColor: "#0075de" }}
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="flex items-center justify-center w-9 h-9 rounded-full transition-opacity disabled:opacity-30"
          style={{ background: "#0075de" }}
          aria-label={tr.common.send}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="w-4 h-4">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
