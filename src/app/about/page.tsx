"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const VALUES = [
  {
    title: "Hospitality",
    desc: "Every guest is welcomed as a cherished visitor. Our philosophy of 'dar' — meaning home — guides every interaction.",
  },
  {
    title: "Authenticity",
    desc: "Original zellige mosaics, hand-carved cedar, and traditional recipes preserved across generations. Nothing here is a replica.",
  },
  {
    title: "Innovation",
    desc: "We blend centuries of tradition with modern comforts — including an AI concierge that speaks your language and knows your stay.",
  },
];

const ALL_PROPERTIES = [
  {
    name: "Riad 19",
    address: "19 Derb Zemrane",
    desc: "The original property, featuring five intimate guest suites arranged around a mosaic fountain courtyard. Known for its original 17th-century tilework and rooftop terrace with panoramic medina views.",
    mapUrl: "https://maps.google.com/?q=19+Derb+Zemrane+Marrakech",
  },
  {
    name: "Riad 141",
    address: "141 Derb Arset Aouzal",
    desc: "A beautifully restored riad with five distinctive rooms and suites, a private hammam, and a lush interior garden with jasmine and orange trees. Perfect for families and groups.",
    mapUrl: "https://maps.google.com/?q=141+Derb+Arset+Aouzal+Marrakech",
  },
];

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

  useEffect(() => {
    const stored = localStorage.getItem("selectedRiad");
    if (stored === "riad19" || stored === "riad141") setSelectedRiad(stored);
  }, []);

  const properties = selectedRiad === "riad19"
    ? [ALL_PROPERTIES[0]]
    : selectedRiad === "riad141"
    ? [ALL_PROPERTIES[1]]
    : ALL_PROPERTIES;

  return (
    <div style={{ background: "var(--background)", color: "var(--ink)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero banner */}
      <section className="relative w-full h-72 sm:h-96 flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80"
          alt="Riad courtyard"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%)" }}
        />
        <div className="relative z-10 px-6 pb-12 max-w-6xl mx-auto w-full">
          <p className="text-xs tracking-[0.45em] uppercase mb-3" style={{ color: "#B8973A" }}>
            Our Story
          </p>
          <h1
            className="text-4xl md:text-5xl font-light"
            style={{ color: "#ffffff", letterSpacing: "0.05em" }}
          >
            About Dar D&apos;Art
          </h1>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase mb-5" style={{ color: "#B8973A" }}>
              Heritage
            </p>
            <h2
              className="text-3xl font-light mb-8"
              style={{ color: "var(--ink)", letterSpacing: "0.04em" }}
            >
              A Living Piece of Marrakech
            </h2>
            <div className="space-y-5 text-sm leading-8" style={{ color: "var(--ink-muted)" }}>
              <p>
                Nestled within the ancient walls of Marrakech&apos;s medina, Riad Dar D&apos;Art is a
                sanctuary of Moroccan art, architecture, and timeless hospitality. The name means
                &ldquo;House of Art&rdquo; — and every corner of the property reflects that identity.
              </p>
              {selectedRiad === "riad19" ? (
                <p>
                  We are delighted to welcome you to{" "}
                  <span className="font-semibold" style={{ color: "#B8973A" }}>
                    Riad Dar D&apos;Art 19
                  </span>
                  , located at 19 Derb Zemrane, Bab Doukkala. A testament to centuries of Andalusian
                  craftsmanship — mosaic courtyards, hand-carved cedar archways, and the scent of
                  orange blossom.
                </p>
              ) : selectedRiad === "riad141" ? (
                <p>
                  We are delighted to welcome you to{" "}
                  <span className="font-semibold" style={{ color: "#B8973A" }}>
                    Riad Dar D&apos;Art 141
                  </span>
                  , located at 141 Derb Arset Aouzal, Bab Doukkala. A testament to centuries of Andalusian
                  craftsmanship — mosaic courtyards, hand-carved cedar archways, and the scent of
                  orange blossom.
                </p>
              ) : (
                <p>
                  We operate two beautifully restored properties:{" "}
                  <span className="font-semibold" style={{ color: "#B8973A" }}>
                    Riad 19
                  </span>{" "}
                  at 19 Derb Zemrane and{" "}
                  <span className="font-semibold" style={{ color: "#B8973A" }}>
                    Riad 141
                  </span>{" "}
                  at 141 Derb Arset Aouzal. Each is a testament to centuries of Andalusian
                  craftsmanship — mosaic courtyards, hand-carved cedar archways, and the scent of
                  orange blossom.
                </p>
              )}
              <p>
                Our mission is to offer guests an authentic Moroccan experience without sacrificing
                modern comfort. That&apos;s why we&apos;ve built an AI-powered concierge that
                brings luxury service to every guest, at every hour.
              </p>
            </div>
          </div>

          <div className="overflow-hidden h-80 md:h-full min-h-64">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80"
              alt="Riad interior"
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
              What We Stand For
            </p>
            <h2
              className="text-3xl font-light"
              style={{ color: "var(--ink)", letterSpacing: "0.05em" }}
            >
              Our Values
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
              The Properties
            </p>
            <h2
              className="text-3xl font-light"
              style={{ color: "var(--ink)", letterSpacing: "0.05em" }}
            >
              {selectedRiad ? "Your Riad" : "Two Riads, One Soul"}
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
                  Marrakech Medina 40000, Morocco
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
                  View on map →
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
          Experience It Yourself
        </h2>
        <p className="text-sm mb-10 max-w-xs mx-auto leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          Ready to stay with us? Get in touch or explore our rooms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 text-xs tracking-[0.3em] uppercase font-semibold transition-opacity duration-200 hover:opacity-85"
            style={{ background: "#B8973A", color: "#ffffff" }}
          >
            Contact Us
          </Link>
          <Link
            href="/#rooms"
            className="inline-block px-8 py-3.5 text-xs tracking-[0.3em] uppercase font-light transition-opacity duration-200 hover:opacity-80"
            style={{ border: "1px solid rgba(184,151,58,0.55)", color: "var(--ink)" }}
          >
            View Rooms
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
