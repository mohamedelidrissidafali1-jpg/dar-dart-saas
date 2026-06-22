"use client";

import { useState, useEffect } from "react";
import ChatBox from "@/components/ChatBox";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Rooms", "Services", "Excursions", "Contact"] as const;

const ROOMS = [
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
];

const EXCURSIONS = [
  {
    name: "Medina Walking Tour",
    desc: "Explore the ancient labyrinthine streets and souks of Marrakech with an expert local guide.",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8b22e5d?w=700&q=80",
    duration: "3 hours",
  },
  {
    name: "Atlas Mountains Day Trip",
    desc: "Journey through Berber villages and stunning high-altitude landscapes, just 40 km from the city.",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=80",
    duration: "Full day",
  },
  {
    name: "Sahara Desert Tour",
    desc: "A 3-day adventure to the golden dunes of Erg Chebbi — camel trek and overnight camp included.",
    img: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=700&q=80",
    duration: "3 days",
  },
  {
    name: "Moroccan Cooking Class",
    desc: "Learn to prepare traditional tagines, bastilla, and mint tea in our authentic riad kitchen.",
    img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=700&q=80",
    duration: "4 hours",
  },
  {
    name: "Camel Ride",
    desc: "A sunset ride through the palm groves and olive orchards on the outskirts of Marrakech.",
    img: "https://images.unsplash.com/photo-1541943869526-7f8da12b07b4?w=700&q=80",
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id: string) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div style={{ background: "#0D1B2A", color: "#E8DFC8", minHeight: "100vh" }}>

      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(13,27,42,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(184,151,58,0.2)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left leading-tight"
          >
            <div
              className="text-xs font-light tracking-[0.35em] uppercase"
              style={{ color: "#B8973A" }}
            >
              Riad
            </div>
            <div
              className="text-lg font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#E8DFC8" }}
            >
              Dar D&apos;Art
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-xs tracking-[0.2em] uppercase transition-colors duration-200 opacity-70 hover:opacity-100"
                style={{ color: "#E8DFC8" }}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2.5 text-xs tracking-widest uppercase font-semibold transition-opacity duration-200 hover:opacity-80"
              style={{ background: "#B8973A", color: "#0D1B2A" }}
            >
              Book Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ background: "#B8973A" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              style={{ background: "#B8973A" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ background: "#B8973A" }}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}
          style={{ background: "rgba(13,27,42,0.98)", borderTop: menuOpen ? "1px solid rgba(184,151,58,0.2)" : "none" }}
        >
          <div className="px-6 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-left text-sm tracking-[0.2em] uppercase py-3 opacity-75 hover:opacity-100 transition-opacity border-b border-white/5"
                style={{ color: "#E8DFC8" }}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 py-3 text-sm tracking-widest uppercase font-semibold text-center"
              style={{ background: "#B8973A", color: "#0D1B2A" }}
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background image - placeholder from Unsplash */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80"
          alt="Moroccan riad courtyard"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,27,42,0.45) 0%, rgba(13,27,42,0.65) 60%, rgba(13,27,42,0.92) 100%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="text-xs tracking-[0.5em] uppercase mb-8 font-light"
            style={{ color: "#B8973A" }}
          >
            Marrakech, Morocco
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 leading-tight"
            style={{ color: "#E8DFC8", letterSpacing: "0.04em" }}
          >
            Riad Dar D&apos;Art
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px flex-1 max-w-[60px]" style={{ background: "#B8973A" }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#B8973A" }} />
            <div className="h-px flex-1 max-w-[60px]" style={{ background: "#B8973A" }} />
          </div>
          <p
            className="text-base md:text-xl font-light mb-12 opacity-85 leading-relaxed"
            style={{ color: "#E8DFC8", letterSpacing: "0.03em" }}
          >
            Your luxury retreat in the heart of Marrakech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("rooms")}
              className="px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-semibold transition-opacity duration-200 hover:opacity-85"
              style={{ background: "#B8973A", color: "#0D1B2A" }}
            >
              Explore Rooms
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-light transition-colors duration-200 hover:bg-white/10"
              style={{ border: "1px solid rgba(184,151,58,0.55)", color: "#E8DFC8" }}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#B8973A" }}>
            Scroll
          </span>
          <div className="w-px h-10 animate-pulse" style={{ background: "#B8973A" }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "#B8973A" }}>
            Our Story
          </p>
          <h2
            className="text-3xl md:text-4xl font-light mb-8"
            style={{ color: "#E8DFC8", letterSpacing: "0.05em" }}
          >
            A Living Heritage in the Medina
          </h2>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12" style={{ background: "#B8973A" }} />
            <div className="w-1 h-1 rotate-45" style={{ background: "#B8973A" }} />
            <div className="h-px w-12" style={{ background: "#B8973A" }} />
          </div>
          <p
            className="text-base md:text-lg leading-8 opacity-75"
            style={{ color: "#E8DFC8" }}
          >
            Nestled within the ancient walls of Marrakech&apos;s medina, Riad Dar D&apos;Art is a sanctuary of
            Moroccan art, architecture, and timeless hospitality. We operate two beautifully restored
            properties:{" "}
            <span className="font-semibold opacity-100" style={{ color: "#B8973A" }}>Riad 19</span>
            {" "}at 19 Derb Zemrane and{" "}
            <span className="font-semibold opacity-100" style={{ color: "#B8973A" }}>Riad 141</span>
            {" "}at 141 Derb Arset Aouzal — each a testament to centuries of Andalusian craftsmanship.
            Mosaic courtyards, hand-carved cedar archways, and the scent of orange blossom welcome you into
            a world apart from the outside bustle, yet steps away from the vibrant soul of the city.
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
                className="p-8 text-left"
                style={{
                  background: "#162436",
                  border: "1px solid rgba(184,151,58,0.2)",
                }}
              >
                <p className="text-xs tracking-[0.35em] uppercase mb-3 font-semibold" style={{ color: "#B8973A" }}>
                  {p.label}
                </p>
                <p className="text-base font-light mb-1" style={{ color: "#E8DFC8" }}>
                  {p.sub}
                </p>
                <p className="text-sm opacity-55" style={{ color: "#E8DFC8" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROOMS ── */}
      <section id="rooms" className="py-28 px-6" style={{ background: "#091521" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "#B8973A" }}>
              Accommodation
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ color: "#E8DFC8", letterSpacing: "0.05em" }}
            >
              Rooms &amp; Suites
            </h2>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-12" style={{ background: "#B8973A" }} />
              <div className="w-1 h-1 rotate-45" style={{ background: "#B8973A" }} />
              <div className="h-px w-12" style={{ background: "#B8973A" }} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROOMS.map((room) => (
              <article
                key={room.name}
                className="group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{ background: "#162436", border: "1px solid rgba(184,151,58,0.15)" }}
              >
                {/* Image */}
                <div className="overflow-hidden h-52 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(184,151,58,0.08)" }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <p
                    className="text-xs tracking-[0.3em] uppercase mb-2 font-semibold"
                    style={{ color: "#B8973A" }}
                  >
                    Suite
                  </p>
                  <h3 className="text-base font-light mb-3" style={{ color: "#E8DFC8" }}>
                    {room.name}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-60 flex-1" style={{ color: "#E8DFC8" }}>
                    {room.desc}
                  </p>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="mt-5 w-full py-2.5 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-200 hover:bg-[#B8973A] hover:text-[#0D1B2A]"
                    style={{ border: "1px solid #B8973A", color: "#B8973A" }}
                  >
                    View Room
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "#B8973A" }}>
              Amenities
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ color: "#E8DFC8", letterSpacing: "0.05em" }}
            >
              Services &amp; Facilities
            </h2>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-12" style={{ background: "#B8973A" }} />
              <div className="w-1 h-1 rotate-45" style={{ background: "#B8973A" }} />
              <div className="h-px w-12" style={{ background: "#B8973A" }} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ name, desc, Icon }) => (
              <div
                key={name}
                className="p-8 flex gap-5 items-start transition-all duration-200 hover:border-[rgba(184,151,58,0.4)]"
                style={{ background: "#162436", border: "1px solid rgba(184,151,58,0.15)" }}
              >
                <div className="flex-shrink-0" style={{ color: "#B8973A" }}>
                  <Icon />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2 tracking-wide" style={{ color: "#E8DFC8" }}>
                    {name}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-60" style={{ color: "#E8DFC8" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXCURSIONS ── */}
      <section id="excursions" className="py-28 px-6" style={{ background: "#091521" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "#B8973A" }}>
              Experiences
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ color: "#E8DFC8", letterSpacing: "0.05em" }}
            >
              Curated Excursions
            </h2>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-12" style={{ background: "#B8973A" }} />
              <div className="w-1 h-1 rotate-45" style={{ background: "#B8973A" }} />
              <div className="h-px w-12" style={{ background: "#B8973A" }} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXCURSIONS.map((ex) => (
              <article
                key={ex.name}
                className="group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{ background: "#162436", border: "1px solid rgba(184,151,58,0.15)" }}
              >
                <div className="overflow-hidden h-44 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ex.img}
                    alt={ex.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(13,27,42,0.6) 0%, transparent 60%)" }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-sm font-semibold leading-tight" style={{ color: "#E8DFC8" }}>
                      {ex.name}
                    </h3>
                    <span
                      className="text-xs px-2.5 py-1 flex-shrink-0 tracking-wide"
                      style={{
                        background: "rgba(184,151,58,0.12)",
                        color: "#B8973A",
                        border: "1px solid rgba(184,151,58,0.25)",
                      }}
                    >
                      {ex.duration}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed opacity-60 flex-1" style={{ color: "#E8DFC8" }}>
                    {ex.desc}
                  </p>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="mt-5 w-full py-2.5 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-200 hover:bg-[#B8973A] hover:text-[#0D1B2A]"
                    style={{ border: "1px solid #B8973A", color: "#B8973A" }}
                  >
                    Inquire
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "#B8973A" }}>
              Get in Touch
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ color: "#E8DFC8", letterSpacing: "0.05em" }}
            >
              Contact &amp; Reservations
            </h2>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-12" style={{ background: "#B8973A" }} />
              <div className="w-1 h-1 rotate-45" style={{ background: "#B8973A" }} />
              <div className="h-px w-12" style={{ background: "#B8973A" }} />
            </div>
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
                className="p-8"
                style={{ background: "#162436", border: "1px solid rgba(184,151,58,0.2)" }}
              >
                <p
                  className="text-xs tracking-[0.35em] uppercase mb-4 font-semibold"
                  style={{ color: "#B8973A" }}
                >
                  {p.label}
                </p>
                <div className="flex items-start gap-3 mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-60"
                    style={{ color: "#B8973A" }}
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <p className="text-sm leading-relaxed" style={{ color: "#E8DFC8" }}>
                      {p.street}
                    </p>
                    <p className="text-sm opacity-55" style={{ color: "#E8DFC8" }}>
                      {p.city}
                    </p>
                  </div>
                </div>
                <a
                  href={p.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.2em] uppercase opacity-55 hover:opacity-100 transition-opacity duration-200"
                  style={{ color: "#B8973A" }}
                >
                  View on map →
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
              className="flex items-center justify-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold transition-opacity duration-200 hover:opacity-90"
              style={{ background: "#25D366", color: "#fff" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>

            {/* Email */}
            <a
              href="mailto:contact@riaddartmarrakech.com"
              className="flex items-center justify-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-200 hover:bg-white/5"
              style={{ border: "1px solid rgba(184,151,58,0.55)", color: "#B8973A" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-10 px-6 text-center"
        style={{ borderTop: "1px solid rgba(184,151,58,0.12)" }}
      >
        <p className="text-xs tracking-[0.3em] uppercase opacity-35" style={{ color: "#E8DFC8" }}>
          © {new Date().getFullYear()} Riad Dar D&apos;Art — Marrakech, Morocco
        </p>
      </footer>

      {/* ── FLOATING CHAT BUTTON ── */}
      <button
        onClick={() => setChatOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 shadow-2xl transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{
          background: "#B8973A",
          color: "#0D1B2A",
          borderRadius: "50px",
          boxShadow: "0 8px 30px rgba(184,151,58,0.4)",
        }}
        aria-label="Open concierge chat"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
        <span className="text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
          Ask our Concierge
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
          style={{ background: "#B8973A", color: "#0D1B2A" }}
          aria-label="Close chat"
        >
          ✕
        </button>
        <ChatBox />
      </div>
    </div>
  );
}
