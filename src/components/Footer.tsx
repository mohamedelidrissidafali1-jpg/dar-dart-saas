"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getLang, getT, type Lang } from "@/lib/translations";

export default function Footer() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(getLang());
  }, []);

  const tr = getT(lang);

  const NAVIGATE_LINKS = [
    { label: tr.nav.howItWorks, href: "/how-it-works" },
    { label: tr.nav.about, href: "/about" },
    { label: tr.nav.faq, href: "/faq" },
    { label: tr.nav.contact, href: "/contact" },
  ];

  const LEGAL_LINKS = [
    { label: tr.footer.privacy, href: "/privacy-policy" },
    { label: tr.footer.terms, href: "/terms-of-service" },
  ];

  return (
    <footer style={{ background: "#f6f5f4", borderTop: "1px solid #e6e6e6" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div
              className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-1"
              style={{ color: "#0075de" }}
            >
              Riad
            </div>
            <div
              className="text-lg font-bold tracking-tight mb-4"
              style={{ color: "#000000", letterSpacing: "-0.25px" }}
            >
              Dar D&apos;Art
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#615d59" }}>
              {tr.footer.tagline}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p
              className="text-[12px] font-semibold tracking-[0.125px] uppercase mb-5"
              style={{ color: "#a39e98" }}
            >
              {tr.footer.navigate}
            </p>
            <ul className="flex flex-col gap-3">
              {NAVIGATE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] transition-colors duration-200 hover:text-black"
                    style={{ color: "#31302e" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <p
              className="text-[12px] font-semibold tracking-[0.125px] uppercase mb-5"
              style={{ color: "#a39e98" }}
            >
              {tr.footer.legal}
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] transition-colors duration-200 hover:text-black"
                    style={{ color: "#31302e" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p
              className="text-[12px] font-semibold tracking-[0.125px] uppercase mb-3"
              style={{ color: "#a39e98" }}
            >
              {tr.footer.contact}
            </p>
            <a
              href="mailto:contact@riaddartmarrakech.com"
              className="text-[14px] transition-colors duration-200 hover:text-black block"
              style={{ color: "#31302e" }}
            >
              contact@riaddartmarrakech.com
            </a>
          </div>
        </div>

        <div className="h-px" style={{ background: "#e6e6e6" }} />
        <p className="text-[14px] text-center mt-8" style={{ color: "#a39e98" }}>
          {tr.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
