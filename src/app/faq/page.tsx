"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLang, getT, isRtl, type Lang } from "@/lib/translations";
import { WhatsAppIcon, conciergeWhatsAppUrl } from "@/components/WhatsAppFab";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export default function FAQ() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(getLang());
  }, []);

  const tr = getT(lang);
  const dir = isRtl(lang) ? "rtl" : undefined;
  const categories: FaqCategory[] = tr.faqPage.categories;

  return (
    <div style={{ background: "var(--background)", color: "var(--ink)", minHeight: "100vh" }} dir={dir}>
      <Navbar />

      {/* Page header */}
      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "var(--gold)" }}>
          {tr.faqPage.helpSupport}
        </p>
        <h1
          className="text-4xl md:text-5xl font-light"
          style={{ color: "var(--ink)", letterSpacing: "0.05em" }}
        >
          {tr.faqPage.title}
        </h1>
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-12" style={{ background: "var(--gold)" }} />
          <div className="w-1 h-1 rotate-45" style={{ background: "var(--gold)" }} />
          <div className="h-px w-12" style={{ background: "var(--gold)" }} />
        </div>
      </section>

      {/* FAQ content */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {categories.map((cat) => (
            <div key={cat.category}>
              <h2
                className="text-xs tracking-[0.4em] uppercase mb-6 pb-4 font-semibold"
                style={{ color: "var(--gold)", borderBottom: "1px solid rgba(184,151,58,0.2)" }}
              >
                {cat.category}
              </h2>
              <div className="space-y-2">
                {cat.items.map((item) => (
                  <details
                    key={item.q}
                    className="group"
                    style={{ borderBottom: "1px solid var(--hairline)" }}
                  >
                    <summary
                      className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none transition-opacity duration-200 hover:opacity-100 opacity-80"
                      style={{ color: "var(--ink)" }}
                    >
                      <span className="text-sm font-light leading-relaxed">{item.q}</span>
                      <span
                        className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-base transition-transform duration-200 group-open:rotate-45"
                        style={{ color: "var(--gold)" }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p
                      className="pb-5 text-sm leading-relaxed"
                      style={{ color: "var(--ink-muted)" }}
                    >
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "var(--surface)" }}
      >
        <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>
          {tr.faqPage.stillHaveQuestions}
        </p>
        <h2
          className="text-2xl font-light mb-6"
          style={{ color: "var(--ink)", letterSpacing: "0.04em" }}
        >
          {tr.faqPage.chatWithConcierge}
        </h2>
        <p className="text-sm mb-10 max-w-xs mx-auto leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          {tr.faqPage.ctaDesc}
        </p>
        <a
          href={conciergeWhatsAppUrl(tr.concierge.prefill)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-3.5 text-xs tracking-[0.3em] uppercase font-semibold transition-opacity duration-200 hover:opacity-85"
          style={{ background: "#25D366", color: "#ffffff" }}
        >
          <WhatsAppIcon className="w-4 h-4" />
          {tr.faqPage.openConcierge}
        </a>
      </section>

      <Footer />
    </div>
  );
}
