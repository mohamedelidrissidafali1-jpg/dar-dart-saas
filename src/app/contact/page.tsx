"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLang, getT, isRtl, type Lang } from "@/lib/translations";
import { conciergeWhatsAppUrl } from "@/components/WhatsAppFab";

const WHATSAPP_NUMBER = "212709086496";

function WhatsAppIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(getLang());
  }, []);

  const tr = getT(lang);
  const dir = isRtl(lang) ? "rtl" : undefined;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    tr.contactPage.whatsappPrefill
  )}`;

  return (
    <div style={{ background: "var(--background)", color: "var(--ink)", minHeight: "100vh" }} dir={dir}>
      <Navbar />

      {/* Page header */}
      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "var(--gold)" }}>
          {tr.contactPage.reachOut}
        </p>
        <h1
          className="text-4xl md:text-5xl font-light"
          style={{ color: "var(--ink)", letterSpacing: "0.05em" }}
        >
          {tr.contact.label}
        </h1>
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-12" style={{ background: "var(--gold)" }} />
          <div className="w-1 h-1 rotate-45" style={{ background: "var(--gold)" }} />
          <div className="h-px w-12" style={{ background: "var(--gold)" }} />
        </div>
      </section>

      {/* Two-column layout */}
      <section className="pb-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* Left — info */}
          <div className="space-y-8">
            <div>
              <p
                className="text-xs tracking-[0.35em] uppercase mb-5 font-semibold"
                style={{ color: "var(--gold)" }}
              >
                {tr.contactPage.ourLocations}
              </p>

              {[
                {
                  name: "Riad 19",
                  street: "19 Derb Zemrane",
                  city: tr.home.cityLine,
                  mapUrl: "https://maps.google.com/?q=19+Derb+Zemrane+Marrakech",
                },
                {
                  name: "Riad 141",
                  street: "141 Derb Arset Aouzal",
                  city: tr.home.cityLine,
                  mapUrl: "https://maps.google.com/?q=141+Derb+Arset+Aouzal+Marrakech",
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className="p-6 mb-4 last:mb-0 rounded-xl"
                  style={{ background: "var(--surface)", border: "1px solid rgba(184,151,58,0.2)" }}
                >
                  <p
                    className="text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
                    style={{ color: "var(--gold)" }}
                  >
                    {p.name}
                  </p>
                  <div className="flex items-start gap-3 mb-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-60"
                      style={{ color: "var(--gold)" }}
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <div>
                      <p className="text-sm" style={{ color: "var(--ink)" }}>{p.street}</p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--ink-faint)" }}>{p.city}</p>
                    </div>
                  </div>
                  <a
                    href={p.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-[0.2em] uppercase opacity-70 hover:opacity-100 transition-opacity"
                    style={{ color: "var(--gold)" }}
                  >
                    {tr.contact.viewOnMap}
                  </a>
                </div>
              ))}
            </div>

            <div>
              <p
                className="text-xs tracking-[0.35em] uppercase mb-3 font-semibold"
                style={{ color: "var(--gold)" }}
              >
                {tr.contactPage.hours}
              </p>
              <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
                {tr.contactPage.deskHours}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--ink-muted)" }}>
                {tr.contactPage.conciergeAvailable}{" "}
                <a
                  href={conciergeWhatsAppUrl(tr.concierge.prefill)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                  style={{ color: "var(--gold)" }}
                >
                  {tr.contact.whatsapp}
                </a>
              </p>
            </div>
          </div>

          {/* Right — WhatsApp */}
          <div
            className="p-8 rounded-xl text-center"
            style={{ background: "var(--surface)", border: "1px solid rgba(184,151,58,0.2)" }}
          >
            <p
              className="text-xs tracking-[0.35em] uppercase mb-5 font-semibold"
              style={{ color: "var(--gold)" }}
            >
              {tr.contactPage.directContact}
            </p>

            <div
              className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full"
              style={{ background: "rgba(37,211,102,0.12)" }}
            >
              <WhatsAppIcon className="w-7 h-7" style={{ color: "#25D366" }} />
            </div>

            <h2 className="text-lg font-light mb-3 tracking-wide" style={{ color: "var(--ink)" }}>
              {tr.contactPage.chatOnWhatsApp}
            </h2>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              {tr.contactPage.whatsappDesc}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 text-[15px] font-medium rounded-[2px] transition-opacity duration-200 hover:opacity-90"
              style={{ background: "#25D366", color: "#ffffff" }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              {tr.contactPage.chatOnWhatsApp}
            </a>

            <p className="text-sm mt-5" style={{ color: "var(--ink-faint)" }} dir="ltr">
              {tr.contactPage.whatsappLabel}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
