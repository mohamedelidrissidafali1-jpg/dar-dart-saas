"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

type Role = "guest" | "assistant";

interface Message {
  id: number;
  role: Role;
  text: string;
}

interface ChatBoxProps {
  initialMessage?: string;
}

export default function ChatBox({ initialMessage }: ChatBoxProps = {}) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "assistant", text: "Marhaba! How can I help you today?" },
  ]);
  const [input, setInput] = useState(initialMessage ?? "");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const guestMsg: Message = { id: nextId.current++, role: "guest", text };
    setMessages((prev) => [...prev, guestMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      const reply: string =
        data.reply ?? data.message ?? "I'm sorry, I couldn't understand that.";

      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, role: "assistant", text: reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: nextId.current++,
          role: "assistant",
          text: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="flex flex-col h-full rounded-2xl overflow-hidden border"
      style={{
        background: "#0D1B2A",
        borderColor: "#B8973A33",
        fontFamily: "var(--font-geist-sans, sans-serif)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-5 py-4 border-b"
        style={{ borderColor: "#B8973A33" }}
      >
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: "#B8973A" }}
        />
        <span
          className="text-sm font-semibold tracking-widest uppercase"
          style={{ color: "#B8973A" }}
        >
          Dar D&apos;art Concierge
        </span>
      </div>

      {/* Message history */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "guest" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed"
              style={
                msg.role === "guest"
                  ? {
                      background: "#B8973A",
                      color: "#0D1B2A",
                      borderBottomRightRadius: "4px",
                      fontWeight: 500,
                    }
                  : {
                      background: "#162436",
                      color: "#E8DFC8",
                      borderBottomLeftRadius: "4px",
                      border: "1px solid #B8973A22",
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
              style={{
                background: "#162436",
                border: "1px solid #B8973A22",
                borderBottomLeftRadius: "4px",
              }}
            >
              <span className="flex gap-1 items-center">
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{
                      background: "#B8973A",
                      animationDelay: `${delay}ms`,
                    }}
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
        style={{ borderColor: "#B8973A33" }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your concierge…"
          disabled={loading}
          className="flex-1 bg-transparent outline-none text-sm placeholder:opacity-40 disabled:opacity-50"
          style={{ color: "#E8DFC8", caretColor: "#B8973A" }}
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="flex items-center justify-center w-9 h-9 rounded-full transition-opacity disabled:opacity-30"
          style={{ background: "#B8973A" }}
          aria-label="Send message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#0D1B2A"
            className="w-4 h-4"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
