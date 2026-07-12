"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLang, getT, isRtl, type Lang } from "@/lib/translations";

interface Section {
  title: string;
  body: string;
}

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(getLang());
  }, []);

  const tr = getT(lang);
  const dir = isRtl(lang) ? "rtl" : undefined;
  const sections: Section[] = tr.privacyPage.sections;

  return (
    <div style={{ background: "#0D1B2A", color: "#E8DFC8", minHeight: "100vh" }} dir={dir}>
      <Navbar />

      {/* Page header */}
      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "var(--gold)" }}>
          {tr.privacyPage.legal}
        </p>
        <h1
          className="text-4xl md:text-5xl font-light"
          style={{ color: "#E8DFC8", letterSpacing: "0.05em" }}
        >
          {tr.privacyPage.title}
        </h1>
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-12" style={{ background: "var(--gold)" }} />
          <div className="w-1 h-1 rotate-45" style={{ background: "var(--gold)" }} />
          <div className="h-px w-12" style={{ background: "var(--gold)" }} />
        </div>
        <p className="mt-6 text-xs opacity-40 tracking-wide" style={{ color: "#E8DFC8" }}>
          {tr.common.lastUpdated}
        </p>
      </section>

      {/* Content */}
      <section className="pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm leading-relaxed opacity-65 mb-12" style={{ color: "#E8DFC8" }}>
            {tr.privacyPage.intro}
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div
                key={section.title}
                className="pb-10"
                style={{ borderBottom: "1px solid rgba(184,151,58,0.1)" }}
              >
                <h2
                  className="text-base font-semibold mb-4 tracking-wide"
                  style={{ color: "#E8DFC8" }}
                >
                  {section.title}
                </h2>
                <div className="text-sm leading-8 opacity-65 space-y-3" style={{ color: "#E8DFC8" }}>
                  {section.body.split("\n\n").map((para, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#E8DFC8;opacity:1">$1</strong>').replace(/\n/g, "<br/>") }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
