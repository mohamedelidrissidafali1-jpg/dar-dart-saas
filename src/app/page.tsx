"use client";

import { useState, useEffect } from "react";
import ChatBox from "@/components/ChatBox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLang, getT, isRtl, type Lang } from "@/lib/translations";

// ─── Data ─────────────────────────────────────────────────────────────────────

const ROOMS_19 = [
  {
    name: "The Rose Suite",
    desc: "Hand-crafted Moroccan tilework, king bed, and a private terrace overlooking the fountain courtyard.",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
  },
  {
    name: "The Atlas Room",
    desc: "Rich earthy tones, carved cedar ceilings, and panoramic rooftop views inspired by the Atlas Mountains.",
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
  },
  {
    name: "The Medina Suite",
    desc: "Our grandest suite with original zellige mosaics, premium linens, and a private in-room hammam.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },
  {
    name: "The Garden Room",
    desc: "A serene escape surrounded by jasmine and orange blossom with direct access to the garden.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  },
  {
    name: "The Courtyard Room",
    desc: "A tranquil retreat with zellige floors and views across the inner courtyard fountain.",
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
  },
];

const ROOMS_141 = [
  {
    name: "The Amber Suite",
    desc: "Warm amber tones, hand-painted plaster walls, and a four-poster bed draped in Berber textiles.",
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
  },
  {
    name: "The Indigo Room",
    desc: "Midnight-blue tadelakt walls, brass lanterns, and a private courtyard sitting area.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  },
  {
    name: "The Jasmine Suite",
    desc: "Flooded with natural light and the scent of jasmine, with a rooftop access and hammam tub.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },
  {
    name: "The Zellige Room",
    desc: "A mosaic masterpiece — floor-to-ceiling hand-cut tiles and a king bed of carved cedar.",
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
  },
];

const EXCURSIONS = [
  {
    name: "Medina Walking Tour",
    desc: "Explore the ancient labyrinthine streets and souks of Marrakech with an expert local guide.",
    img: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800",
    duration: "3 hours",
  },
  {
    name: "Atlas Mountains Day Trip",
    desc: "Journey through Berber villages and stunning high-altitude landscapes, just 40 km from the city.",
    img: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800",
    duration: "Full day",
  },
  {
    name: "Sahara Desert Tour",
    desc: "A 3-day adventure to the golden dunes of Erg Chebbi — camel trek and overnight camp included.",
    img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
    duration: "3 days",
  },
  {
    name: "Moroccan Cooking Class",
    desc: "Learn to prepare traditional tagines, bastilla, and mint tea in our authentic riad kitchen.",
    img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800",
    duration: "4 hours",
  },
  {
    name: "Camel Ride",
    desc: "A sunset ride through the palm groves and olive orchards on the outskirts of Marrakech.",
    img: "https://images.unsplash.com/photo-1452022582947-b521d8779ab6?w=800",
    duration: "2 hours",
  },
];

// ─── Service Icons ─────────────────────────────────────────────────────────────

function BreakfastIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
    </svg>
  );
}

function HammamIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M8.1 13.34l2.83-2.83L3.91 3.5C2.35 5.06 2.35 7.62 3.91 9.17l4.19 4.17zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5zm-2-3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-10 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
    </svg>
  );
}

function RooftopIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M1 9l2 2c5.27-5.27 13.73-5.27 19 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  );
}

type ServiceIcon = () => React.JSX.Element;

const SERVICES: { name: string; desc: string; Icon: ServiceIcon }[] = [
  {
    name: "Breakfast",
    desc: "Traditional Moroccan breakfast served daily in the open-air courtyard.",
    Icon: BreakfastIcon,
  },
  {
    name: "Hammam & Spa",
    desc: "Authentic hammam rituals and rejuvenating spa treatments on-site.",
    Icon: HammamIcon,
  },
  {
    name: "Airport Transfer",
    desc: "Private, air-conditioned transfers available 24/7 to your door.",
    Icon: CarIcon,
  },
  {
    name: "Rooftop Terrace",
    desc: "Exclusive rooftop with panoramic views over the Marrakech medina.",
    Icon: RooftopIcon,
  },
  {
    name: "High-Speed WiFi",
    desc: "Complimentary high-speed internet throughout both riads.",
    Icon: WifiIcon,
  },
  {
    name: "Concierge",
    desc: "A dedicated concierge to arrange every detail of your stay.",
    Icon: KeyIcon,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [roomsRiad, setRoomsRiad] = useState<"riad19" | "riad141">("riad19");
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("selectedRiad");
    if (stored === "riad19" || stored === "riad141") setRoomsRiad(stored);
    setLang(getLang());
  }, []);

  const tr = getT(lang);
  const dir = isRtl(lang) ? "rtl" : undefined;

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  const activeRooms = roomsRiad === "riad141" ? ROOMS_141 : ROOMS_19;

  return (
    <div style={{ background: "var(--background)", color: "var(--ink)", minHeight: "100vh" }} dir={dir}>

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
            background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          {/* Eyebrow */}
          <p
            className="text-[11px] font-light tracking-[0.45em] uppercase mb-8"
            style={{ color: "#C1440E" }}
          >
            {tr.hero.location}
          </p>

          {/* Main heading */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-light mb-7 leading-none tracking-wide"
            style={{
              color: "#ffffff",
              fontFamily: "Georgia, 'Garamond', 'Times New Roman', serif",
            }}
          >
            Riad Dar D&apos;Art
          </h1>

          {/* Gold divider */}
          <div className="w-16 h-px mx-auto mb-7" style={{ background: "#C9A84C" }} />

          {/* Tagline */}
          <p
            className="text-lg font-light mb-12 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.88)" }}
          >
            {tr.hero.tagline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("rooms")}
              className="px-8 py-3 text-[14px] font-medium tracking-[0.08em] uppercase rounded-full transition-all duration-200 hover:opacity-85 active:scale-95"
              style={{ background: "#C1440E", color: "#ffffff" }}
            >
              {tr.hero.exploreRooms}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3 text-[14px] font-light tracking-[0.08em] uppercase rounded-full transition-colors duration-200 hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.65)", color: "#ffffff" }}
            >
              {tr.hero.contactUs}
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span
            className="text-[10px] font-light tracking-[0.45em] uppercase"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {tr.hero.scroll}
          </span>
          <div className="w-px h-12 animate-pulse" style={{ background: "rgba(255,255,255,0.35)" }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block text-[12px] font-semibold tracking-[0.125px] uppercase mb-5 px-3 py-1 rounded-full"
            style={{ background: "var(--surface)", color: "#C1440E", border: "1px solid var(--hairline)" }}
          >
            {tr.about.label}
          </span>
          <h2
            className="text-3xl md:text-[40px] font-bold mb-8"
            style={{ color: "var(--ink)", letterSpacing: "-1px", lineHeight: 1.1 }}
          >
            {tr.about.heading}
          </h2>
          <p
            className="text-base md:text-lg leading-8"
            style={{ color: "var(--ink-muted)" }}
          >
            {tr.about.body}{" "}
            <span className="font-semibold" style={{ color: "var(--ink)" }}>Riad 19</span>
            {" "}at 19 Derb Zemrane {tr.about.and}{" "}
            <span className="font-semibold" style={{ color: "var(--ink)" }}>Riad 141</span>
            {" "}at 141 Derb Arset Aouzal {tr.about.each}
          </p>

          {/* Property cards */}
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {[
              {
                label: "Riad 19",
                sub: "19 Derb Zemrane",
                desc: "Marrakech Medina 40000, Morocco",
              },
              {
                label: "Riad 141",
                sub: "141 Derb Arset Aouzal",
                desc: "Marrakech Medina 40000, Morocco",
              },
            ].map((p) => (
              <div
                key={p.label}
                className="p-8 text-left rounded-xl"
                style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}
              >
                <span
                  className="inline-block text-[12px] font-semibold tracking-[0.125px] uppercase mb-3 px-2.5 py-1 rounded-full"
                  style={{ background: "var(--background)", color: "#C1440E" }}
                >
                  {p.label}
                </span>
                <p className="text-base font-semibold mb-1" style={{ color: "var(--ink)" }}>
                  {p.sub}
                </p>
                <p className="text-sm" style={{ color: "var(--ink-faint)" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROOMS ── */}
      <section id="rooms" className="py-28 px-6 bg-[#faf8f5] dark:bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block text-[12px] font-semibold tracking-[0.125px] uppercase mb-5 px-3 py-1 rounded-full"
              style={{ background: "var(--background)", color: "#C1440E", border: "1px solid var(--hairline)" }}
            >
              {tr.rooms.label}
            </span>
            <h2
              className="text-3xl md:text-[40px] font-bold mb-10"
              style={{ color: "var(--ink)", letterSpacing: "-1px", lineHeight: 1.1 }}
            >
              {tr.rooms.heading}
            </h2>

            {/* Riad toggle */}
            <div className="inline-flex rounded-lg overflow-hidden" style={{ border: "1px solid var(--hairline)" }}>
              {(["riad19", "riad141"] as const).map((r) => {
                const active = roomsRiad === r;
                const label = r === "riad19" ? "Riad 19" : "Riad 141";
                return (
                  <button
                    key={r}
                    onClick={() => setRoomsRiad(r)}
                    className="px-6 py-2.5 text-[15px] font-medium transition-all duration-200"
                    style={{
                      background: active ? "#C1440E" : "var(--surface)",
                      color: active ? "#ffffff" : "var(--ink-secondary)",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activeRooms.map((room) => (
              <article
                key={room.name}
                className="group flex flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--hairline)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
                }}
              >
                {/* Image */}
                <div className="overflow-hidden h-52 relative rounded-t-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <span
                    className="inline-block text-[12px] font-semibold tracking-[0.125px] uppercase mb-2 px-2 py-0.5 rounded-full self-start"
                    style={{ background: "var(--background)", color: "#C1440E" }}
                  >
                    {tr.rooms.suite}
                  </span>
                  <h3 className="text-[16px] font-semibold mb-3" style={{ color: "var(--ink)", letterSpacing: "-0.125px" }}>
                    {room.name}
                  </h3>
                  <p className="text-[15px] leading-relaxed flex-1" style={{ color: "var(--ink-muted)" }}>
                    {room.desc}
                  </p>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="mt-5 w-full py-2.5 text-[15px] font-medium rounded-lg transition-colors duration-200 hover:bg-[var(--background)]"
                    style={{ border: "1px solid #C1440E", color: "#C1440E" }}
                  >
                    {tr.rooms.viewRoom}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-28 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block text-[12px] font-semibold tracking-[0.125px] uppercase mb-5 px-3 py-1 rounded-full"
              style={{ background: "var(--surface)", color: "#C1440E", border: "1px solid var(--hairline)" }}
            >
              {tr.services.label}
            </span>
            <h2
              className="text-3xl md:text-[40px] font-bold"
              style={{ color: "var(--ink)", letterSpacing: "-1px", lineHeight: 1.1 }}
            >
              {tr.services.heading}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ name, desc, Icon }) => (
              <div
                key={name}
                className="p-8 flex gap-5 items-start rounded-xl transition-shadow duration-200 hover:shadow-md"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--hairline)",
                }}
              >
                <div className="flex-shrink-0" style={{ color: "#C1440E" }}>
                  <Icon />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold mb-2" style={{ color: "var(--ink)" }}>
                    {name}
                  </h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXCURSIONS ── */}
      <section id="excursions" className="py-28 px-6 bg-[#faf8f5] dark:bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block text-[12px] font-semibold tracking-[0.125px] uppercase mb-5 px-3 py-1 rounded-full"
              style={{ background: "var(--background)", color: "#C1440E", border: "1px solid var(--hairline)" }}
            >
              {tr.excursions.label}
            </span>
            <h2
              className="text-3xl md:text-[40px] font-bold"
              style={{ color: "var(--ink)", letterSpacing: "-1px", lineHeight: 1.1 }}
            >
              {tr.excursions.heading}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXCURSIONS.map((ex) => (
              <article
                key={ex.name}
                className="group flex flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--hairline)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
                }}
              >
                <div className="overflow-hidden h-44 relative rounded-t-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ex.img}
                    alt={ex.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-[16px] font-semibold leading-tight" style={{ color: "var(--ink)" }}>
                      {ex.name}
                    </h3>
                    <span
                      className="text-[12px] font-semibold px-2.5 py-1 flex-shrink-0 rounded-full"
                      style={{
                        background: "var(--surface)",
                        color: "#C1440E",
                        border: "1px solid var(--hairline)",
                      }}
                    >
                      {ex.duration}
                    </span>
                  </div>
                  <p className="text-[15px] leading-relaxed flex-1" style={{ color: "var(--ink-muted)" }}>
                    {ex.desc}
                  </p>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="mt-5 w-full py-2.5 text-[15px] font-medium rounded-lg transition-colors duration-200 hover:bg-[var(--background)]"
                    style={{ border: "1px solid #C1440E", color: "#C1440E" }}
                  >
                    {tr.excursions.inquire}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block text-[12px] font-semibold tracking-[0.125px] uppercase mb-5 px-3 py-1 rounded-full"
              style={{ background: "var(--surface)", color: "#C1440E", border: "1px solid var(--hairline)" }}
            >
              {tr.contact.label}
            </span>
            <h2
              className="text-3xl md:text-[40px] font-bold"
              style={{ color: "var(--ink)", letterSpacing: "-1px", lineHeight: 1.1 }}
            >
              {tr.contact.heading}
            </h2>
          </div>

          {/* Address cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {[
              {
                label: "Riad 19",
                street: "19 Derb Zemrane",
                city: "Marrakech Medina 40000, Morocco",
                mapUrl: "https://maps.google.com/?q=19+Derb+Zemrane+Marrakech",
              },
              {
                label: "Riad 141",
                street: "141 Derb Arset Aouzal",
                city: "Marrakech Medina 40000, Morocco",
                mapUrl: "https://maps.google.com/?q=141+Derb+Arset+Aouzal+Marrakech",
              },
            ].map((p) => (
              <div
                key={p.label}
                className="p-8 rounded-xl"
                style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}
              >
                <span
                  className="inline-block text-[12px] font-semibold tracking-[0.125px] uppercase mb-4 px-2.5 py-1 rounded-full"
                  style={{ background: "var(--background)", color: "#C1440E" }}
                >
                  {p.label}
                </span>
                <div className="flex items-start gap-3 mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "#C1440E" }}
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <p className="text-[15px] font-medium" style={{ color: "var(--ink)" }}>
                      {p.street}
                    </p>
                    <p className="text-[14px]" style={{ color: "var(--ink-faint)" }}>
                      {p.city}
                    </p>
                  </div>
                </div>
                <a
                  href={p.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-medium transition-opacity duration-200 hover:opacity-70"
                  style={{ color: "#C1440E" }}
                >
                  {tr.contact.viewOnMap}
                </a>
              </div>
            ))}
          </div>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* WhatsApp */}
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 text-[16px] font-medium rounded-full transition-opacity duration-200 hover:opacity-90"
              style={{ background: "#25D366", color: "#ffffff" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {tr.contact.whatsapp}
            </a>

            {/* Email */}
            <a
              href="mailto:contact@riaddartmarrakech.com"
              className="flex items-center justify-center gap-3 px-8 py-4 text-[16px] font-medium rounded-full transition-opacity duration-200 hover:opacity-85"
              style={{ background: "#C1440E", color: "#ffffff" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              {tr.contact.emailUs}
            </a>
          </div>
        </div>
      </section>

      <Footer />

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
        <span className="text-[15px] font-medium whitespace-nowrap">
          {tr.common.askConcierge}
        </span>
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
        {/* Close button */}
        <button
          onClick={() => setChatOpen(false)}
          className="absolute -top-3.5 -right-3.5 z-10 w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold shadow-lg transition-opacity duration-200 hover:opacity-80"
          style={{ background: "#0075de", color: "#ffffff" }}
          aria-label="Close chat"
        >
          ✕
        </button>
        <ChatBox />
      </div>
    </div>
  );
}
