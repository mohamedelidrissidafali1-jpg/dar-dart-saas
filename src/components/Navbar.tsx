"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidBg = scrolled || !isHome;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: solidBg ? "rgba(13,27,42,0.97)" : "transparent",
        backdropFilter: solidBg ? "blur(10px)" : "none",
        borderBottom: solidBg ? "1px solid rgba(184,151,58,0.2)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-left leading-tight">
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
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase transition-opacity duration-200 opacity-70 hover:opacity-100"
              style={{ color: "#E8DFC8" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sign-in"
            className="px-5 py-2.5 text-xs tracking-widest uppercase font-semibold transition-all duration-200 hover:opacity-80"
            style={{ border: "1px solid #B8973A", color: "#B8973A" }}
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="px-5 py-2.5 text-xs tracking-widest uppercase font-semibold transition-opacity duration-200 hover:opacity-85"
            style={{ background: "#B8973A", color: "#0D1B2A" }}
          >
            Sign Up
          </Link>
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
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}
        style={{
          background: "rgba(13,27,42,0.98)",
          borderTop: menuOpen ? "1px solid rgba(184,151,58,0.2)" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-left text-sm tracking-[0.2em] uppercase py-3 opacity-75 hover:opacity-100 transition-opacity border-b border-white/5"
              style={{ color: "#E8DFC8" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sign-in"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 text-sm tracking-widest uppercase font-semibold text-center transition-all duration-200 hover:opacity-80"
            style={{ border: "1px solid #B8973A", color: "#B8973A" }}
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-sm tracking-widest uppercase font-semibold text-center"
            style={{ background: "#B8973A", color: "#0D1B2A" }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
