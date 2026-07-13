"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import { getLang, getT, isRtl, type Lang } from "@/lib/translations";

// ─── Data ─────────────────────────────────────────────────────────────────────

const ROOMS_19 = [
  {
    name: "Suite Terrasse Lulu",
    descKey: "terrasseLulu",
    img: "/rooms/terrasse-lulu/image-7.webp",
  },
  {
    name: "Suite Africa",
    descKey: "africa",
    img: "/rooms/africa/image-14.webp",
  },
  {
    name: "Suite Familiar Gazelle",
    descKey: "gazelle",
    img: "/rooms/gazelle/image-20.webp",
  },
  {
    name: "Suite Frida",
    descKey: "frida",
    img: "/rooms/frida/image-27.webp",
  },
  {
    name: "Suite Rosa",
    descKey: "rosa",
    img: "/rooms/rosa/image-33.webp",
  },
];

const ROOMS_141 = [
  {
    name: "Lexicon",
    descKey: "lexicon",
    img: "/rooms/riad141/lexicon-1.webp",
  },
  {
    name: "Mategot",
    descKey: "mategot",
    img: "/rooms/riad141/mategot-1.webp",
  },
  {
    name: "Chevrerie",
    descKey: "chevrerie",
    img: "/rooms/riad141/chevrerie-1.webp",
  },
  {
    name: "Poupée",
    descKey: "poupee",
    img: "/rooms/riad141/poupee-1.webp",
  },
  {
    name: "Zagora",
    descKey: "zagora",
    img: "/rooms/riad141/zagora-1.webp",
  },
];

const EXCURSIONS = [
  {
    key: "agafayExpress",
    img: "/excursions/agafay.webp",
  },
  {
    key: "agafayFull",
    img: "/excursions/agafay.webp",
  },
  {
    key: "essaouira",
    img: "/excursions/essaouira.webp",
  },
  {
    key: "ourika",
    img: "/excursions/ourika-valley.webp",
  },
  {
    key: "hotAirBalloon",
    img: "/excursions/hot-air-balloon.webp",
  },
  {
    key: "cityDay",
    img: "/excursions/city-tour.webp",
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

const SERVICES: { key: string; Icon: ServiceIcon }[] = [
  { key: "breakfast", Icon: BreakfastIcon },
  { key: "hammamSpa", Icon: HammamIcon },
  { key: "airportTransfer", Icon: CarIcon },
  { key: "rooftopTerrace", Icon: RooftopIcon },
  { key: "highSpeedWifi", Icon: WifiIcon },
  { key: "concierge", Icon: KeyIcon },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Home() {
  const [selectedRiad, setSelectedRiad] = useState<"riad19" | "riad141" | null>(null);
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("selectedRiad");
    if (stored === "riad19" || stored === "riad141") setSelectedRiad(stored);
    setLang(getLang());
  }, []);

  const tr = getT(lang);
  const dir = isRtl(lang) ? "rtl" : undefined;

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

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
            background: "linear-gradient(180deg, rgba(28,18,12,0.28) 0%, rgba(28,18,12,0.55) 55%, rgba(28,18,12,0.78) 100%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          {/* Eyebrow */}
          <p
            className="text-[11px] font-light tracking-[0.45em] uppercase mb-8"
            style={{ color: "var(--accent)" }}
          >
            {tr.hero.location}
          </p>

          {/* Main heading */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-light mb-7 leading-none tracking-wide"
            style={{
              color: "#ffffff",
              fontFamily: "var(--font-cormorant), Georgia, serif",
            }}
          >
            {tr.hero.title}
          </h1>

          {/* Gold divider */}
          <div className="w-16 h-px mx-auto mb-7" style={{ background: "var(--gold)" }} />

          {/* Tagline */}
          <p
            className="text-lg font-light mb-12 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.88)" }}
          >
            {tr.hero.tagline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/sign-up">
              {tr.nav.signUp}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/sign-in"
              className="hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.65)", color: "#ffffff" }}
            >
              {tr.nav.signIn}
            </Button>
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
          <Badge className="mb-5">{tr.about.label}</Badge>
          <h2
            className="text-3xl md:text-[40px] font-medium mb-8"
            style={{ color: "var(--ink)", letterSpacing: "normal", lineHeight: 1.1 }}
          >
            {tr.about.heading}
          </h2>
          <p
            className="text-base md:text-lg leading-8"
            style={{ color: "var(--ink-muted)" }}
          >
            {selectedRiad === "riad19"
              ? tr.home.riad19Intro
              : selectedRiad === "riad141"
              ? tr.home.riad141Intro
              : <>{tr.about.body}{" "}<span className="font-semibold" style={{ color: "var(--ink)" }}>Riad 19</span>{" "}at 19 Derb Zemrane {tr.about.and}{" "}<span className="font-semibold" style={{ color: "var(--ink)" }}>Riad 141</span>{" "}at 141 Derb Arset Aouzal {tr.about.each}</>
            }
          </p>

          {/* Property card(s) */}
          {(() => {
            const cards = selectedRiad === "riad19"
              ? [{ label: "Riad 19", sub: "19 Derb Zemrane", desc: tr.home.cityLine }]
              : selectedRiad === "riad141"
              ? [{ label: "Riad 141", sub: "141 Derb Arset Aouzal", desc: tr.home.cityLine }]
              : [
                  { label: "Riad 19", sub: "19 Derb Zemrane", desc: tr.home.cityLine },
                  { label: "Riad 141", sub: "141 Derb Arset Aouzal", desc: tr.home.cityLine },
                ];
            return (
              <div className={`mt-14 grid gap-5 ${cards.length > 1 ? "md:grid-cols-2" : "max-w-sm mx-auto"}`}>
                {cards.map((p) => (
                  <Card key={p.label} className="p-8 text-left">
                    <Badge
                      className="mb-3"
                      style={{ background: "var(--background)", color: "var(--accent)", border: "none" }}
                    >
                      {p.label}
                    </Badge>
                    <p className="text-base font-semibold mb-1" style={{ color: "var(--ink)" }}>
                      {p.sub}
                    </p>
                    <p className="text-sm" style={{ color: "var(--ink-faint)" }}>
                      {p.desc}
                    </p>
                  </Card>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── ROOMS ── */}
      <section id="rooms" className="py-28 px-6 bg-[#EFE7D9] dark:bg-[#12212F]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow={tr.rooms.label} title={tr.rooms.heading} />

          {selectedRiad ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {(selectedRiad === "riad141" ? ROOMS_141 : ROOMS_19).map((room) => (
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
                      style={{ background: "var(--background)", color: "var(--accent)" }}
                    >
                      {tr.rooms.suite}
                    </span>
                    <h3 className="text-[16px] font-semibold mb-3" style={{ color: "var(--ink)", letterSpacing: "-0.125px" }}>
                      {room.name}
                    </h3>
                    <p className="text-[15px] leading-relaxed flex-1" style={{ color: "var(--ink-muted)" }}>
                      {(selectedRiad === "riad141" ? tr.home.rooms141 : tr.home.rooms19)[room.descKey]}
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      fullWidth
                      onClick={() => scrollTo("contact")}
                      className="mt-5"
                    >
                      {tr.rooms.viewRoom}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-16">
              <p className="text-[16px]" style={{ color: "var(--ink-muted)" }}>
                {tr.home.signInForRooms}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-28 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow={tr.services.label} title={tr.services.heading} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ key, Icon }) => {
              const svc = tr.home.servicesList[key];
              return (
                <div
                  key={key}
                  className="p-8 flex gap-5 items-start rounded-xl transition-shadow duration-200 hover:shadow-md"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--hairline)",
                  }}
                >
                  <div className="flex-shrink-0" style={{ color: "var(--accent)" }}>
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold mb-2" style={{ color: "var(--ink)" }}>
                      {svc.name}
                    </h3>
                    <p className="text-[15px] leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                      {svc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EXCURSIONS ── */}
      <section id="excursions" className="py-28 px-6 bg-[#EFE7D9] dark:bg-[#12212F]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow={tr.excursions.label} title={tr.excursions.heading} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXCURSIONS.map((ex) => {
              const item = tr.home.excursionsList[ex.key];
              return (
                <article
                  key={ex.key}
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
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-[16px] font-semibold leading-tight" style={{ color: "var(--ink)" }}>
                        {item.name}
                      </h3>
                      <span
                        className="text-[12px] font-semibold px-2.5 py-1 flex-shrink-0 rounded-full"
                        style={{
                          background: "var(--surface)",
                          color: "var(--accent)",
                          border: "1px solid var(--hairline)",
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[15px] leading-relaxed flex-1" style={{ color: "var(--ink-muted)" }}>
                      {item.desc}
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      fullWidth
                      onClick={() => scrollTo("contact")}
                      className="mt-5"
                    >
                      {tr.excursions.inquire}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow={tr.contact.label} title={tr.contact.heading} />

          {/* Address cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {[
              {
                label: "Riad 19",
                street: "19 Derb Zemrane",
                city: tr.home.cityLine,
                mapUrl: "https://maps.google.com/?q=19+Derb+Zemrane+Marrakech",
              },
              {
                label: "Riad 141",
                street: "141 Derb Arset Aouzal",
                city: tr.home.cityLine,
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
                  style={{ background: "var(--background)", color: "var(--accent)" }}
                >
                  {p.label}
                </span>
                <div className="flex items-start gap-3 mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "var(--accent)" }}
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
                  style={{ color: "var(--accent)" }}
                >
                  {tr.contact.viewOnMap}
                </a>
              </div>
            ))}
          </div>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="whatsapp"
              size="lg"
              href={`https://wa.me/212709086496?text=${encodeURIComponent(tr.contactPage.whatsappPrefill)}`}
            >
              {tr.contact.whatsapp}
            </Button>
          </div>
          <p className="text-center text-[14px] mt-4" style={{ color: "var(--ink-faint)" }} dir="ltr">
            {tr.contactPage.whatsappLabel}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
