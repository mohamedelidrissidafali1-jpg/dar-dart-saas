"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLang, getT, type Lang } from "@/lib/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setLang(getLang());
  }, []);

  const tr = getT(lang);

  const NAV_LINKS = [
    { label: tr.nav.howItWorks, href: "/how-it-works" },
    { label: tr.nav.about, href: "/about" },
    { label: tr.nav.faq, href: "/faq" },
    { label: tr.nav.contact, href: "/contact" },
  ];

  const solidBg = scrolled || !isHome;
  const linkColor = solidBg ? "#31302e" : "#ffffff";
  const logoTopColor = solidBg ? "#0075de" : "rgba(255,255,255,0.7)";
  const logoBottomColor = solidBg ? "#000000" : "#ffffff";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: solidBg ? "#ffffff" : "transparent",
        backdropFilter: solidBg ? "blur(12px)" : "none",
        borderBottom: solidBg ? "1px solid #e6e6e6" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-left leading-tight">
          <div
            className="text-[11px] font-semibold tracking-[0.3em] uppercase"
            style={{ color: logoTopColor }}
          >
            Riad
          </div>
          <div
            className="text-lg font-bold tracking-tight"
            style={{ color: logoBottomColor, letterSpacing: "-0.25px" }}
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
              className="text-[15px] transition-opacity duration-200 opacity-75 hover:opacity-100"
              style={{ color: linkColor }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sign-in"
            className="px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-200 hover:bg-black/5"
            style={{ color: linkColor }}
          >
            {tr.nav.signIn}
          </Link>
          <Link
            href="/sign-up"
            className="px-5 py-2 text-[15px] font-medium rounded-full transition-opacity duration-200 hover:opacity-85"
            style={{ background: "#0075de", color: "#ffffff" }}
          >
            {tr.nav.signUp}
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
            style={{ background: linkColor }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: linkColor }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: linkColor }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}
        style={{
          background: "#ffffff",
          borderTop: menuOpen ? "1px solid #e6e6e6" : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-left text-[15px] py-3 text-[#31302e] hover:text-black transition-colors border-b border-[#e6e6e6]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sign-in"
            onClick={() => setMenuOpen(false)}
            className="mt-3 py-3 text-[15px] font-medium text-center rounded-lg transition-colors hover:bg-gray-50"
            style={{ border: "1px solid #e6e6e6", color: "#000000" }}
          >
            {tr.nav.signIn}
          </Link>
          <Link
            href="/sign-up"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-3 text-[15px] font-medium text-center rounded-full"
            style={{ background: "#0075de", color: "#ffffff" }}
          >
            {tr.nav.signUp}
          </Link>
        </div>
      </div>
    </nav>
  );
}
