import type { CSSProperties, ReactNode } from "react";
import Badge from "./Badge";

// ─── Shared SectionHeader ───────────────────────────────────────────────────
// Eyebrow Badge + serif H2, centered, with consistent spacing. The H2 is
// font-medium (500) — Cormorant at 700 read too heavy for the "understated"
// goal; the big hero H1 is intentionally left untouched elsewhere.

interface SectionHeaderProps {
  eyebrow: ReactNode;
  title: ReactNode;
  /** Outer wrapper classes (margins differ per section). */
  className?: string;
  /** H2 color — defaults to the ink token; pages with explicit tokens override. */
  titleColor?: string;
  /** Optional style overrides for the eyebrow Badge (explicit-token pages). */
  badgeStyle?: CSSProperties;
}

export default function SectionHeader({
  eyebrow,
  title,
  className = "text-center mb-16",
  titleColor = "var(--ink)",
  badgeStyle,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <Badge className="mb-5" style={badgeStyle}>
        {eyebrow}
      </Badge>
      <h2
        className="text-3xl md:text-[40px] font-medium"
        style={{ color: titleColor, letterSpacing: "normal", lineHeight: 1.1 }}
      >
        {title}
      </h2>
    </div>
  );
}
