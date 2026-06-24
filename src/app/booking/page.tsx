"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/client";

const SERVICE_LABELS: Record<string, string> = {
  hammam: "Hammam & Massage",
  "airport-transfer": "Airport Transfer",
  dinner: "Dinner at the Riad",
  agafay: "Agafay Desert",
  "ourika-valley": "Ourika Valley",
  "atlas-mountains": "Atlas Mountains",
  "hot-air-balloon": "Hot Air Balloon",
  "city-tour": "City Tour Guide",
};

const WEBHOOK_URL = "https://PLACEHOLDER_WEBHOOK_URL";

interface Profile {
  first_name: string;
  riad: string;
}

function BackArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  );
}

function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceSlug = searchParams.get("service") ?? "";
  const serviceLabel = SERVICE_LABELS[serviceSlug] ?? serviceSlug;

  const [profile, setProfile] = useState<Profile | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState(1);
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const readDark = () => {
      const stored = localStorage.getItem("darkMode");
      if (stored !== null) setIsDark(stored === "true");
      else setIsDark(document.documentElement.classList.contains("dark"));
    };
    readDark();
    window.addEventListener("storage", readDark);
    const observer = new MutationObserver(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    );
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => {
      window.removeEventListener("storage", readDark);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/sign-in");
        return;
      }
      supabase
        .from("profiles")
        .select("first_name, riad")
        .eq("id", user.id)
        .single()
        .then(({ data }) => {
          if (data) setProfile(data as Profile);
        });
    });
  }, [router]);

  const riadLabel =
    profile?.riad === "riad141"
      ? "Riad 141"
      : profile?.riad === "riad19"
      ? "Riad 19"
      : "Riad Dar D'Art";

  const bg = isDark ? "#0D1B2A" : "#faf8f5";
  const surface = isDark ? "#162436" : "#ffffff";
  const ink = isDark ? "#E8DFC8" : "#2C1810";
  const inkMuted = isDark ? "rgba(232,223,200,0.6)" : "#6b4c35";
  const border = isDark ? "rgba(232,223,200,0.1)" : "#e0d5c8";
  const inputBg = isDark ? "#1e2f42" : "#ffffff";

  const inputStyle: React.CSSProperties = {
    background: inputBg,
    border: `1px solid ${border}`,
    color: ink,
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "15px",
    outline: "none",
    width: "100%",
  };

  const labelStyle: React.CSSProperties = {
    color: inkMuted,
    fontSize: "13px",
    fontWeight: 500,
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName: profile?.first_name ?? "",
          riad: riadLabel,
          service: serviceLabel,
          date,
          time,
          persons,
          phone,
          notes,
        }),
      });
      if (!res.ok) throw new Error("HTTP error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div style={{ background: bg, color: ink, minHeight: "100vh" }}>
      <Navbar />

      <main className="max-w-lg mx-auto px-6 py-12">
        {/* Back button */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-[14px] mb-8 transition-opacity hover:opacity-70"
          style={{ color: inkMuted }}
        >
          <BackArrow />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-8">
          <p
            className="text-[11px] font-light tracking-[0.4em] uppercase mb-3"
            style={{ color: "#C1440E" }}
          >
            Book a Service
          </p>
          <h1
            className="text-3xl font-bold"
            style={{ color: ink, letterSpacing: "-0.5px" }}
          >
            {serviceLabel || "Booking"}
          </h1>
          {profile && (
            <p className="text-[14px] mt-2" style={{ color: inkMuted }}>
              {riadLabel} · {profile.first_name}
            </p>
          )}
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: surface,
            border: `1px solid ${border}`,
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.05)",
          }}
        >
          {status === "success" ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center" style={{ background: "rgba(193,68,14,0.1)" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" style={{ color: "#C1440E" }}>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <h2 className="text-[20px] font-bold mb-3" style={{ color: ink }}>
                Request Sent!
              </h2>
              <p className="text-[15px]" style={{ color: inkMuted }}>
                Your request has been sent! We will confirm shortly 😊
              </p>
              <Link
                href="/dashboard"
                className="inline-block mt-6 px-6 py-2.5 text-[14px] font-medium rounded-full transition-opacity hover:opacity-85"
                style={{ background: "#C1440E", color: "#ffffff" }}
              >
                Back to Dashboard
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Service (readonly) */}
              <div className="flex flex-col gap-1.5">
                <label style={labelStyle}>Service</label>
                <input
                  type="text"
                  value={serviceLabel}
                  readOnly
                  style={{ ...inputStyle, opacity: 0.65, cursor: "not-allowed" }}
                />
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1.5">
                <label style={labelStyle}>
                  Date <span style={{ color: "#C1440E" }}>*</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={today}
                  style={inputStyle}
                />
              </div>

              {/* Time */}
              <div className="flex flex-col gap-1.5">
                <label style={labelStyle}>
                  Time <span style={{ color: "#C1440E" }}>*</span>
                </label>
                <input
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* Persons */}
              <div className="flex flex-col gap-1.5">
                <label style={labelStyle}>
                  Number of persons <span style={{ color: "#C1440E" }}>*</span>
                </label>
                <input
                  type="number"
                  required
                  min={1}
                  value={persons}
                  onChange={(e) => setPersons(Number(e.target.value))}
                  style={inputStyle}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label style={labelStyle}>
                  Phone number <span style={{ color: "#C1440E" }}>*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+212..."
                  style={inputStyle}
                />
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-1.5">
                <label style={labelStyle}>
                  Notes{" "}
                  <span style={{ color: inkMuted, fontWeight: 400 }}>(optional)</span>
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special requests?"
                  rows={3}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p
                  className="text-[13px] px-4 py-3 rounded-lg"
                  style={{ background: "rgba(193,68,14,0.08)", color: "#C1440E" }}
                >
                  Something went wrong. Please try WhatsApp directly.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-1 py-3.5 text-[15px] font-medium rounded-full transition-all duration-200 hover:opacity-85 active:scale-95 disabled:opacity-60"
                style={{ background: "#C1440E", color: "#ffffff" }}
              >
                {status === "loading" ? "Sending…" : "Send Booking Request"}
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-8 h-8 rounded-full border-2 border-[#C1440E] border-t-transparent animate-spin" />
        </div>
      }
    >
      <BookingForm />
    </Suspense>
  );
}
