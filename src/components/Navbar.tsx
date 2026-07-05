"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { getLang, getT, type Lang } from "@/lib/translations";
import ThemeToggle from "@/components/ThemeToggle";
import { createClient } from "@/lib/supabase/client";

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);
  const [firstName, setFirstName] = useState<string | null>(null);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const isHome = pathname === "/";

  useEffect(() => {
    setMounted(true);
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        supabase
          .from("profiles")
          .select("first_name")
          .eq("id", user.id)
          .single()
          .then(({ data }) => {
            if (data?.first_name) setFirstName(data.first_name);
          });
      }
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setLang(getLang());
  }, []);

  const tr = getT(lang);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setFirstName(null);
    router.push("/");
  }

  const NAV_LINKS = [
    { label: tr.nav.howItWorks, href: "/how-it-works" },
    { label: tr.nav.about, href: "/about" },
    { label: tr.nav.faq, href: "/faq" },
    { label: tr.nav.contact, href: "/contact" },
  ];

  const solidBg = scrolled || !isHome;
  const isDark = mounted && resolvedTheme === "dark";

  const transparent = !solidBg;
  const linkColor = transparent ? "#ffffff" : (isDark ? "#E8DFC8" : "#1a1a1a");
  const logoColor = transparent ? "#ffffff" : (isDark ? "#E8DFC8" : "#1a1a1a");
  const navBg = solidBg ? (isDark ? "#162436" : "#ffffff") : "transparent";
  const navShadow = solidBg ? "0 1px 24px rgba(0,0,0,0.08)" : "none";
  const borderColor = isDark ? "rgba(184,151,58,0.2)" : "#e8e8e8";
  const mobileBg = isDark ? "#162436" : "#ffffff";
  const signInBorderColor = transparent ? "rgba(255,255,255,0.55)" : (isDark ? "#E8DFC8" : "#1a1a1a");

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{ background: navBg, boxShadow: navShadow }}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-left leading-tight">
          <div
            className="text-[10px] font-light tracking-[0.38em] uppercase mb-0.5"
            style={{ color: transparent ? "rgba(255,255,255,0.65)" : "#C1440E" }}
          >
            Riad
          </div>
          <div
            className="text-[19px] font-light tracking-widest"
            style={{
              color: logoColor,
              fontFamily: "Georgia, 'Garamond', 'Times New Roman', serif",
            }}
          >
            Dar D&apos;Art
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative pb-0.5 text-[12px] font-light tracking-[0.18em] uppercase transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#C1440E] after:transition-all after:duration-300 hover:after:w-full"
              style={{ color: linkColor }}
            >
              {link.label}
            </Link>
          ))}

          {firstName ? (
            <>
              <span className="text-[12px] font-light tracking-[0.12em]" style={{ color: linkColor }}>
                {firstName}
              </span>
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-[12px] font-light tracking-[0.12em] uppercase rounded-full transition-all duration-200 hover:bg-white/10"
                style={{ border: `1px solid ${signInBorderColor}`, color: linkColor }}
              >
                {tr.common.logout}
              </button>
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-5 py-2 text-[12px] font-light tracking-[0.12em] uppercase rounded-full transition-all duration-200 hover:bg-white/10"
                style={{ border: `1px solid ${signInBorderColor}`, color: linkColor }}
              >
                {tr.nav.signIn}
              </Link>

              <Link
                href="/sign-up"
                className="px-5 py-2.5 text-[12px] font-medium tracking-[0.08em] uppercase rounded-full transition-all duration-200 hover:opacity-85"
                style={{ background: "#C1440E", color: "#ffffff" }}
              >
                {tr.nav.signUp}
              </Link>
            </>
          )}

          <ThemeToggle color={linkColor} />
        </div>

        {/* Mobile right controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle color={linkColor} />
          {!firstName && (
            <>
              <Link
                href="/sign-in"
                className="px-3 py-1.5 text-[11px] font-light tracking-[0.1em] uppercase rounded-full transition-all duration-200 hover:bg-white/10"
                style={{ border: `1px solid ${signInBorderColor}`, color: linkColor }}
              >
                {tr.nav.signIn}
              </Link>
              <Link
                href="/sign-up"
                className="px-3 py-1.5 text-[11px] font-medium tracking-[0.08em] uppercase rounded-full transition-all duration-200 hover:opacity-85"
                style={{ background: "#C1440E", color: "#ffffff" }}
              >
                {tr.nav.signUp}
              </Link>
            </>
          )}
          <button
            className="flex flex-col justify-center gap-1.5 w-8 h-8 ml-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={tr.common.toggleMenu}
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
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}
        style={{
          background: mobileBg,
          borderTop: menuOpen ? `1px solid ${borderColor}` : "none",
        }}
      >
        <div className="px-8 py-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-left text-[13px] font-light tracking-[0.12em] uppercase py-3.5 border-b transition-colors"
              style={{ color: isDark ? "#E8DFC8" : "#1a1a1a", borderColor }}
            >
              {link.label}
            </Link>
          ))}
          {firstName && (
            <>
              <span
                className="mt-4 py-3 text-[13px] font-light tracking-[0.1em] text-center"
                style={{ color: isDark ? "#E8DFC8" : "#1a1a1a" }}
              >
                {firstName}
              </span>
              <button
                onClick={() => { setMenuOpen(false); handleLogout(); }}
                className="mt-2 py-3 text-[13px] font-light tracking-[0.1em] uppercase text-center rounded-full transition-colors"
                style={{ border: `1px solid ${isDark ? "#E8DFC8" : "#1a1a1a"}`, color: isDark ? "#E8DFC8" : "#1a1a1a" }}
              >
                {tr.common.logout}
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
