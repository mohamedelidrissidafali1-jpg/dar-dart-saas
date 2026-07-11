"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getLang, getT, isRtl, type Lang } from "@/lib/translations";

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      <div className="h-px w-12" style={{ background: "#B8973A" }} />
      <div className="w-1 h-1 rotate-45" style={{ background: "#B8973A" }} />
      <div className="h-px w-12" style={{ background: "#B8973A" }} />
    </div>
  );
}

export default function About() {
  const [selectedRiad, setSelectedRiad] = useState<"riad19" | "riad141" | null>(null);
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("selectedRiad");
    if (stored === "riad19" || stored === "riad141") setSelectedRiad(stored);
    setLang(getLang());
  }, []);

  const tr = getT(lang);
  const dir = isRtl(lang) ? "rtl" : undefined;

  const ALL_PROPERTIES = [
    {
      name: "Riad 19",
      address: "19 Derb Zemrane",
      desc: tr.aboutPage.riad19Desc,
      mapUrl: "https://maps.google.com/?q=19+Derb+Zemrane+Marrakech",
    },
    {
      name: "Riad 141",
      address: "141 Derb Arset Aouzal",
      desc: tr.aboutPage.riad141Desc,
      mapUrl: "https://maps.google.com/?q=141+Derb+Arset+Aouzal+Marrakech",
    },
  ];

  const VALUES = [
    { title: tr.aboutPage.values.hospitality.title, desc: tr.aboutPage.values.hospitality.desc },
    { title: tr.aboutPage.values.authenticity.title, desc: tr.aboutPage.values.authenticity.desc },
    { title: tr.aboutPage.values.innovation.title, desc: tr.aboutPage.values.innovation.desc },
  ];

  const properties = selectedRiad === "riad19"
    ? [ALL_PROPERTIES[0]]
    : selectedRiad === "riad141"
    ? [ALL_PROPERTIES[1]]
    : ALL_PROPERTIES;

  return (
    <div style={{ background: "var(--background)", color: "var(--ink)", minHeight: "100vh" }} dir={dir}>
      <Navbar />

      {/* Hero banner */}
      <section className="relative w-full h-72 sm:h-96 flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/rooms/photo1.webp"
          alt="Riad Dar D'Art entrance in the Marrakech medina"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%)" }}
        />
        <div className="relative z-10 px-6 pb-12 max-w-6xl mx-auto w-full">
          <p className="text-xs tracking-[0.45em] uppercase mb-3" style={{ color: "#B8973A" }}>
            {tr.aboutPage.ourStory}
          </p>
          <h1
            className="text-4xl md:text-5xl font-light"
            style={{ color: "#ffffff", letterSpacing: "0.05em" }}
          >
            {tr.aboutPage.title}
          </h1>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase mb-5" style={{ color: "#B8973A" }}>
              {tr.aboutPage.heritageLabel}
            </p>
            <h2
              className="text-3xl font-light mb-8"
              style={{ color: "var(--ink)", letterSpacing: "0.04em" }}
            >
              {tr.aboutPage.heading}
            </h2>
            <div className="space-y-5 text-sm leading-8" style={{ color: "var(--ink-muted)" }}>
              <p>{tr.aboutPage.intro}</p>
              <p>
                {selectedRiad === "riad19"
                  ? tr.aboutPage.riad19Welcome
                  : selectedRiad === "riad141"
                  ? tr.aboutPage.riad141Welcome
                  : tr.aboutPage.bothWelcome}
              </p>
              <p>{tr.aboutPage.mission}</p>
            </div>
          </div>

          <div className="overflow-hidden h-80 md:h-full min-h-64">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/rooms/photo5.webp"
              alt="Riad Dar D'Art suite interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "#B8973A" }}>
              {tr.aboutPage.whatWeStandFor}
            </p>
            <h2
              className="text-3xl font-light"
              style={{ color: "var(--ink)", letterSpacing: "0.05em" }}
            >
              {tr.aboutPage.ourValues}
            </h2>
            <SectionDivider />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-xl"
                style={{ background: "var(--background)", border: "1px solid rgba(184,151,58,0.2)" }}
              >
                <div className="w-8 h-px mb-6" style={{ background: "#B8973A" }} />
                <h3
                  className="text-base font-semibold mb-3 tracking-wide"
                  style={{ color: "var(--ink)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-24 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "#B8973A" }}>
              {tr.aboutPage.theProperties}
            </p>
            <h2
              className="text-3xl font-light"
              style={{ color: "var(--ink)", letterSpacing: "0.05em" }}
            >
              {selectedRiad ? tr.aboutPage.yourRiad : tr.aboutPage.twoRiads}
            </h2>
            <SectionDivider />
          </div>

          <div className={`grid gap-5 ${properties.length > 1 ? "md:grid-cols-2" : "max-w-lg mx-auto"}`}>
            {properties.map((p) => (
              <div
                key={p.name}
                className="p-8 rounded-xl"
                style={{ background: "var(--surface)", border: "1px solid rgba(184,151,58,0.2)" }}
              >
                <p
                  className="text-xs tracking-[0.35em] uppercase mb-3 font-semibold"
                  style={{ color: "#B8973A" }}
                >
                  {p.name}
                </p>
                <p className="text-base font-light mb-2" style={{ color: "var(--ink)" }}>
                  {p.address}
                </p>
                <p className="text-xs mb-1" style={{ color: "var(--ink-faint)" }}>
                  {tr.home.cityLine}
                </p>
                <p className="text-sm leading-relaxed mt-4 mb-5" style={{ color: "var(--ink-muted)" }}>
                  {p.desc}
                </p>
                <a
                  href={p.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.2em] uppercase opacity-70 hover:opacity-100 transition-opacity duration-200"
                  style={{ color: "#B8973A" }}
                >
                  {tr.contact.viewOnMap}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--surface)" }}>
        <h2
          className="text-2xl font-light mb-6"
          style={{ color: "var(--ink)", letterSpacing: "0.05em" }}
        >
          {tr.aboutPage.experienceItYourself}
        </h2>
        <p className="text-sm mb-10 max-w-xs mx-auto leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          {tr.aboutPage.ctaDesc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 text-xs tracking-[0.3em] uppercase font-semibold transition-opacity duration-200 hover:opacity-85"
            style={{ background: "#B8973A", color: "#ffffff" }}
          >
            {tr.hero.contactUs}
          </Link>
          <Link
            href="/#rooms"
            className="inline-block px-8 py-3.5 text-xs tracking-[0.3em] uppercase font-light transition-opacity duration-200 hover:opacity-80"
            style={{ border: "1px solid rgba(184,151,58,0.55)", color: "var(--ink)" }}
          >
            {tr.aboutPage.viewRooms}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
