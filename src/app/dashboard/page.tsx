"use client";

import { useState, useEffect, type JSX } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ChatBox from "@/components/ChatBox";
import Navbar from "@/components/Navbar";
import CheckoutSurveyModal from "./checkout-survey";
import { getT, isRtl, type Lang } from "@/lib/translations";
import { createClient } from "@/lib/supabase/client";

// ─── Room data ─────────────────────────────────────────────────────────────────

const ROOMS_19 = [
  {
    name: "Suite Terrasse Lulu",
    img: "/rooms/terrasse-lulu/image-7.webp",
  },
  {
    name: "Suite Africa",
    img: "/rooms/africa/image-14.webp",
  },
  {
    name: "Suite Familiar Gazelle",
    img: "/rooms/gazelle/image-20.webp",
  },
  {
    name: "Suite Frida",
    img: "/rooms/frida/image-27.webp",
  },
  {
    name: "Suite Rosa",
    img: "/rooms/rosa/image-33.webp",
  },
];

const ROOMS_141 = [
  {
    name: "Lexicon",
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
  },
  {
    name: "Mategot",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  },
  {
    name: "Chevrerie",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },
  {
    name: "Poupée",
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
  },
  {
    name: "Zagora",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
  },
];

// ─── Excursion data ─────────────────────────────────────────────────────────────

const EXCURSIONS = [
  {
    name: "Agafay Desert",
    slug: "agafay",
    subtitle: "Quad · Camel · Dinner",
    price: "€30–55 / person",
    img: "/excursions/agafay.webp",
  },
  {
    name: "Ourika Valley",
    slug: "ourika-valley",
    subtitle: "Atlas · Waterfalls · Berber villages",
    price: "From €20 / person",
    img: "/excursions/ourika-valley.webp",
  },
  {
    name: "Atlas Mountains",
    slug: "atlas-mountains",
    subtitle: "Mountains · Berber villages · Fresh air",
    price: "€35 / person",
    img: "/excursions/atlas-mountains.webp",
  },
  {
    name: "Hot Air Balloon",
    slug: "hot-air-balloon",
    subtitle: "Sunrise · Panoramic views",
    price: "€97 / person",
    img: "/excursions/hot-air-balloon.webp",
  },
  {
    name: "City Tour Guide",
    slug: "city-tour",
    subtitle: "Medina · Souks · Hidden places",
    price: "€20 / person",
    img: "/excursions/city-tour.webp",
  },
];

// ─── WhatsApp booking ──────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "212709086496";

const SLUG_TO_MESSAGE_KEY: Record<string, string> = {
  hammam: "hammam",
  "airport-transfer": "airportTransfer",
  dinner: "dinner",
  agafay: "agafay",
  "ourika-valley": "ourikaValley",
  "atlas-mountains": "atlasMountains",
  "hot-air-balloon": "hotAirBalloon",
  "city-tour": "cityTour",
};

// ─── Icons ─────────────────────────────────────────────────────────────────────

function BreakfastIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
    </svg>
  );
}

function HammamIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M8.1 13.34l2.83-2.83L3.91 3.5C2.35 5.06 2.35 7.62 3.91 9.17l4.19 4.17zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
    </svg>
  );
}

function PoolIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.5 13c0-1.4.78-2.6 1.92-3.23C10.16 8.77 10 8.4 10 8c0-1.1.9-2 2-2s2 .9 2 2c0 .4-.14.77-.39 1.06C14.72 9.67 15.5 10.87 15.5 12.27v.74H8.5V13z" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5zm-2-3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-10 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M1 9l2 2c5.27-5.27 13.73-5.27 19 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
    </svg>
  );
}

function ConciergeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </svg>
  );
}

// ─── Types ─────────────────────────────────────────────────────────────────────

interface Profile {
  first_name: string;
  language: string;
  riad: string;
  checked_out: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Dashboard() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [checkedOut, setCheckedOut] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const readDark = () => {
      const stored = localStorage.getItem("darkMode");
      if (stored !== null) {
        setIsDark(stored === "true");
      } else {
        setIsDark(document.documentElement.classList.contains("dark"));
      }
    };
    readDark();
    window.addEventListener("storage", readDark);
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
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
        .select("first_name, language, riad, checked_out")
        .eq("id", user.id)
        .single()
        .then(({ data }) => {
          if (data) {
            setProfile(data as Profile);
            setCheckedOut(data.checked_out);
          }
        });
    });
  }, [router]);

  const lang = (profile?.language as Lang) ?? "en";
  const tr = getT(lang);
  const dir = isRtl(lang) ? "rtl" : "ltr";

  const whatsappUrl = (slug: string) => {
    const messageKey = SLUG_TO_MESSAGE_KEY[slug];
    const message: string = tr.dashboard.whatsappMessages[messageKey];
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  // ── Explicit color tokens ──
  const bg       = isDark ? "#0D1B2A" : "#faf8f5";
  const surface  = isDark ? "#162436" : "#ffffff";
  const ink      = isDark ? "#E8DFC8" : "#2C1810";
  const inkMuted = isDark ? "rgba(232,223,200,0.6)" : "#6b4c35";
  const inkFaint = isDark ? "rgba(232,223,200,0.4)" : "#9b8272";
  const border   = isDark ? "rgba(232,223,200,0.1)" : "#e0d5c8";

  const firstName = profile?.first_name ?? "";
  const riad = profile?.riad ?? "";
  const riadLabel =
    riad === "riad141" ? "Riad 141" : riad === "riad19" ? "Riad 19" : "Riad Dar D'Art";
  const rooms = riad === "riad141" ? ROOMS_141 : riad === "riad19" ? ROOMS_19 : [];
  const wifiName = riad === "riad141" ? "DarDArt_Guest" : "DarDArt_Guest_19";

  // ── Services list (icons + booking slugs, text from translations) ──
  const SERVICE_LIST: Array<{
    key: string;
    Icon: () => JSX.Element;
    bookSlug?: string;
    customDetail?: string;
  }> = [
    { key: "breakfast", Icon: BreakfastIcon },
    { key: "hammam", Icon: HammamIcon, bookSlug: "hammam" },
    { key: "pool", Icon: PoolIcon },
    { key: "airportTransfer", Icon: CarIcon, bookSlug: "airport-transfer" },
    {
      key: "wifi",
      Icon: WifiIcon,
      customDetail: `${wifiName} · ${tr.dashboard.services.wifi.noPassword}`,
    },
    { key: "concierge", Icon: ConciergeIcon },
  ];

  // ── Info items ──
  const INFO_KEYS: Array<{ key: string; bookSlug?: string }> = [
    { key: "checkIn" },
    { key: "checkOut" },
    { key: "dinner", bookSlug: "dinner" },
    { key: "water" },
  ];

  // ── Checked-out screen ──
  if (checkedOut) {
    return (
      <div dir={dir} style={{ background: bg, color: ink, minHeight: "100vh" }}>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen text-center gap-4 px-6">
          <div
            className="text-[11px] font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#C1440E" }}
          >
            Riad Dar D&apos;Art
          </div>
          <h1
            className="text-2xl md:text-3xl font-bold"
            style={{ color: ink, letterSpacing: "-0.5px" }}
          >
            {tr.dashboard.stayEnded}
          </h1>
          <p className="text-[15px] max-w-sm" style={{ color: inkMuted }}>
            {tr.dashboard.stayEndedThanks}{firstName ? `, ${firstName}` : ""}.
          </p>
          <Link
            href="/"
            className="mt-4 px-6 py-3 text-[15px] font-medium rounded-full transition-opacity duration-200 hover:opacity-85"
            style={{ background: "#C1440E", color: "#ffffff" }}
          >
            {tr.dashboard.backToHome}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div dir={dir} style={{ background: bg, color: ink, minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt="Moroccan riad courtyard"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="text-[11px] font-light tracking-[0.45em] uppercase mb-6"
            style={{ color: "#C1440E" }}
          >
            {tr.dashboard.guestPortal}
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-light mb-5 leading-none tracking-wide"
            style={{
              color: "#ffffff",
              fontFamily: "Georgia, 'Garamond', 'Times New Roman', serif",
            }}
          >
            {firstName
              ? `${tr.dashboard.welcomeBack}, ${firstName}`
              : tr.dashboard.welcomeBack}
          </h1>
          <div className="w-16 h-px mx-auto mb-5" style={{ background: "#C9A84C" }} />
          <p className="text-lg font-light mb-10" style={{ color: "rgba(255,255,255,0.85)" }}>
            {tr.dashboard.yourStay} {riadLabel}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setChatOpen(true)}
              className="px-8 py-3 text-[14px] font-medium tracking-[0.08em] uppercase rounded-full transition-all duration-200 hover:opacity-85 active:scale-95"
              style={{ background: "#C1440E", color: "#ffffff" }}
            >
              {tr.common.askConcierge}
            </button>
            <button
              onClick={() => setShowSurvey(true)}
              className="px-8 py-3 text-[14px] font-light tracking-[0.08em] uppercase rounded-full transition-colors duration-200 hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.65)", color: "#ffffff" }}
            >
              {tr.dashboard.checkOut}
            </button>
          </div>
        </div>
      </section>

      {/* ── ROOMS ── */}
      <section className="py-24 px-6" style={{ background: bg }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-[12px] font-semibold tracking-[0.125px] uppercase mb-5 px-3 py-1 rounded-full"
              style={{ background: surface, color: "#C1440E", border: `1px solid ${border}` }}
            >
              {riadLabel}
            </span>
            <h2
              className="text-3xl md:text-[40px] font-bold"
              style={{ color: ink, letterSpacing: "-1px", lineHeight: 1.1 }}
            >
              {tr.dashboard.accommodation}
            </h2>
          </div>

          {rooms.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {rooms.map((room) => (
                <article
                  key={room.name}
                  className="group flex flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background: surface,
                    border: `1px solid ${border}`,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
                  }}
                >
                  <div className="overflow-hidden h-44 rounded-t-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={room.img}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <span
                      className="inline-block text-[11px] font-semibold tracking-[0.1em] uppercase mb-2 px-2 py-0.5 rounded-full self-start"
                      style={{ background: bg, color: "#C1440E" }}
                    >
                      {tr.rooms.suite}
                    </span>
                    <h3
                      className="text-[15px] font-semibold mb-2"
                      style={{ color: ink, letterSpacing: "-0.1px" }}
                    >
                      {room.name}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-16">
              <div className="w-8 h-8 rounded-full border-2 border-[#C1440E] border-t-transparent animate-spin" />
            </div>
          )}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6" style={{ background: surface }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-[12px] font-semibold tracking-[0.125px] uppercase mb-5 px-3 py-1 rounded-full"
              style={{ background: bg, color: "#C1440E", border: `1px solid ${border}` }}
            >
              {tr.dashboard.includedInStay}
            </span>
            <h2
              className="text-3xl md:text-[40px] font-bold"
              style={{ color: ink, letterSpacing: "-1px", lineHeight: 1.1 }}
            >
              {tr.dashboard.servicesAmenities}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICE_LIST.map(({ key, Icon, bookSlug, customDetail }) => {
              const svc = tr.dashboard.services[key];
              const name: string = svc.name;
              const detail: string = customDetail ?? svc.detail;
              const desc: string = svc.desc;
              return (
                <div
                  key={key}
                  className="p-7 flex gap-5 items-start rounded-xl transition-shadow duration-200 hover:shadow-md"
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <div className="flex-shrink-0 mt-0.5" style={{ color: "#C1440E" }}>
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold mb-0.5" style={{ color: ink }}>
                      {name}
                    </h3>
                    <p className="text-[12px] font-semibold mb-2" style={{ color: "#C1440E" }}>
                      {detail}
                    </p>
                    <p className="text-[14px] leading-relaxed" style={{ color: inkMuted }}>
                      {desc}
                    </p>
                    {bookSlug && (
                      <a
                        href={whatsappUrl(bookSlug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 px-4 py-1.5 text-[13px] font-medium rounded-full transition-opacity duration-200 hover:opacity-85"
                        style={{ background: "#C1440E", color: "#ffffff" }}
                      >
                        {tr.dashboard.bookViaWhatsApp}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EXCURSIONS ── */}
      <section className="py-24 px-6" style={{ background: bg }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-[12px] font-semibold tracking-[0.125px] uppercase mb-5 px-3 py-1 rounded-full"
              style={{ background: surface, color: "#C1440E", border: `1px solid ${border}` }}
            >
              {tr.dashboard.marrakechBeyond}
            </span>
            <h2
              className="text-3xl md:text-[40px] font-bold"
              style={{ color: ink, letterSpacing: "-1px", lineHeight: 1.1 }}
            >
              {tr.dashboard.excursionsHeading}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXCURSIONS.map((ex) => (
              <article
                key={ex.name}
                className="group flex flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: surface,
                  border: `1px solid ${border}`,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
                }}
              >
                <div className="overflow-hidden rounded-t-xl" style={{ height: "200px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ex.img}
                    alt={ex.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[16px] font-bold mb-1 leading-tight" style={{ color: ink }}>
                    {ex.name}
                  </h3>
                  <p className="text-[12px] mb-2" style={{ color: inkFaint }}>
                    {ex.subtitle}
                  </p>
                  <p className="text-[14px] font-semibold mb-3" style={{ color: "#B8973A" }}>
                    {ex.price}
                  </p>
                  <div className="flex-1 mb-4" />
                  <a
                    href={whatsappUrl(ex.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-[14px] font-medium rounded-lg transition-opacity duration-200 hover:opacity-85 text-center block"
                    style={{ background: "#C1440E", color: "#ffffff" }}
                  >
                    {tr.dashboard.bookViaWhatsApp}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPORTANT INFO ── */}
      <section className="py-24 px-6" style={{ background: surface }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-[12px] font-semibold tracking-[0.125px] uppercase mb-5 px-3 py-1 rounded-full"
              style={{ background: bg, color: "#C1440E", border: `1px solid ${border}` }}
            >
              {tr.dashboard.goodToKnow}
            </span>
            <h2
              className="text-3xl md:text-[40px] font-bold"
              style={{ color: ink, letterSpacing: "-1px", lineHeight: 1.1 }}
            >
              {tr.dashboard.importantInfo}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INFO_KEYS.map(({ key, bookSlug }) => {
              const info = tr.dashboard.info[key];
              return (
                <div
                  key={key}
                  className="p-7 rounded-xl text-center"
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <p
                    className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-2"
                    style={{ color: "#C1440E" }}
                  >
                    {info.label}
                  </p>
                  <p
                    className="text-[22px] font-bold mb-1"
                    style={{ color: ink, letterSpacing: "-0.5px" }}
                  >
                    {info.value}
                  </p>
                  <p className="text-[13px]" style={{ color: inkFaint }}>
                    {info.sub}
                  </p>
                  {bookSlug && (
                    <a
                      href={whatsappUrl(bookSlug)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 px-4 py-1.5 text-[13px] font-medium rounded-full transition-opacity duration-200 hover:opacity-85"
                      style={{ background: "#C1440E", color: "#ffffff" }}
                    >
                      {tr.dashboard.bookViaWhatsApp}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CHECK OUT ── */}
      <section className="py-24 px-6" style={{ background: bg }}>
        <div className="max-w-xl mx-auto text-center">
          <span
            className="inline-block text-[12px] font-semibold tracking-[0.125px] uppercase mb-5 px-3 py-1 rounded-full"
            style={{ background: surface, color: "#C1440E", border: `1px solid ${border}` }}
          >
            {tr.dashboard.endOfStay}
          </span>
          <h2
            className="text-3xl md:text-[36px] font-bold mb-4"
            style={{ color: ink, letterSpacing: "-1px", lineHeight: 1.15 }}
          >
            {tr.dashboard.enjoyedStay}
          </h2>
          <p className="text-[16px] mb-10" style={{ color: inkMuted }}>
            {tr.dashboard.checkoutDesc}
          </p>
          <button
            onClick={() => setShowSurvey(true)}
            className="px-10 py-4 text-[16px] font-medium tracking-[0.04em] rounded-full transition-all duration-200 hover:opacity-85 active:scale-95"
            style={{ background: "#C1440E", color: "#ffffff" }}
          >
            {tr.dashboard.checkoutReview}
          </button>
        </div>
      </section>

      {/* ── FLOATING CHAT BUTTON ── */}
      <button
        onClick={() => setChatOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{
          background: "#0075de",
          color: "#ffffff",
          borderRadius: "9999px",
          boxShadow: "0 4px 14px rgba(0,117,222,0.35), 0 2px 6px rgba(0,0,0,0.1)",
        }}
        aria-label="Open concierge chat"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
        <span className="text-[15px] font-medium whitespace-nowrap">{tr.common.askConcierge}</span>
      </button>

      {/* ── CHAT POPUP ── */}
      <div
        className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 transition-all duration-300 origin-bottom-right"
        style={{
          height: "480px",
          opacity: chatOpen ? 1 : 0,
          transform: chatOpen ? "scale(1) translateY(0)" : "scale(0.95) translateY(8px)",
          pointerEvents: chatOpen ? "auto" : "none",
        }}
      >
        <button
          onClick={() => setChatOpen(false)}
          className="absolute -top-3.5 -right-3.5 z-10 w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold shadow-lg transition-opacity duration-200 hover:opacity-80"
          style={{ background: "#0075de", color: "#ffffff" }}
          aria-label="Close chat"
        >
          ✕
        </button>
        <ChatBox
          riad={riad || undefined}
          language={profile?.language as Lang | undefined}
          guestName={firstName || undefined}
        />
      </div>

      {/* ── SURVEY MODAL ── */}
      {showSurvey && profile && (
        <CheckoutSurveyModal
          firstName={firstName}
          lang={lang}
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
