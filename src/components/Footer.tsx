import Link from "next/link";

const NAVIGATE_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#091521", borderTop: "1px solid rgba(184,151,58,0.12)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div
              className="text-xs font-light tracking-[0.35em] uppercase mb-1"
              style={{ color: "#B8973A" }}
            >
              Riad
            </div>
            <div
              className="text-lg font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#E8DFC8" }}
            >
              Dar D&apos;Art
            </div>
            <p className="text-sm leading-relaxed opacity-55" style={{ color: "#E8DFC8" }}>
              A luxury riad experience in the heart of Marrakech&apos;s medina, guided by an AI
              concierge that&apos;s always on call.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase mb-5 font-semibold"
              style={{ color: "#B8973A" }}
            >
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {NAVIGATE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-55 hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "#E8DFC8" }}
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
              className="text-xs tracking-[0.35em] uppercase mb-5 font-semibold"
              style={{ color: "#B8973A" }}
            >
              Legal
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-55 hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "#E8DFC8" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p
              className="text-xs tracking-[0.35em] uppercase mb-3 font-semibold"
              style={{ color: "#B8973A" }}
            >
              Contact
            </p>
            <a
              href="mailto:contact@riaddartmarrakech.com"
              className="text-sm opacity-55 hover:opacity-100 transition-opacity duration-200 block"
              style={{ color: "#E8DFC8" }}
            >
              contact@riaddartmarrakech.com
            </a>
          </div>
        </div>

        <div className="h-px" style={{ background: "rgba(184,151,58,0.12)" }} />
        <p
          className="text-xs tracking-[0.3em] uppercase opacity-35 text-center mt-8"
          style={{ color: "#E8DFC8" }}
        >
          © 2026 Riad Dar D&apos;Art — Marrakech, Morocco
        </p>
      </div>
    </footer>
  );
}
