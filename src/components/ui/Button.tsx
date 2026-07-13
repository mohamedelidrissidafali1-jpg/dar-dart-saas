"use client";

import Link from "next/link";
import type { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppFab";

// ─── Shared Button ──────────────────────────────────────────────────────────
// One button system for the whole app so styling stops drifting per page.
//  • variant "primary"   → teal brand fill, white label
//  • variant "secondary" → teal outline
//  • variant "whatsapp"  → teal brand fill + white WhatsApp glyph (NOT green;
//    bright WhatsApp-green is reserved solely for the floating FAB)
// Labels render in Title Case — no uppercase transform (that is kept only for
// small letterspaced eyebrow labels, see Badge).

type Variant = "primary" | "secondary" | "whatsapp";
type Size = "sm" | "md" | "lg";

// Comfortable tap targets (≥44px) but refined — lighter vertical padding and a
// medium weight so filled buttons read elegant rather than loud on mobile.
const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-4 py-2 text-[14px]",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-3.5 text-[16px]",
};

function variantStyle(variant: Variant): CSSProperties {
  switch (variant) {
    case "secondary":
      return { border: "1px solid var(--accent)", color: "var(--accent)" };
    case "whatsapp":
    case "primary":
    default:
      return { background: "var(--accent)", color: "#ffffff" };
  }
}

function variantHover(variant: Variant): string {
  // Outline buttons shift background subtly; filled buttons soften opacity.
  return variant === "secondary"
    ? "hover:bg-[var(--background)]"
    : "hover:opacity-90";
}

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Internal route (Next Link) or external URL (renders <a target=_blank>). */
  href?: string;
  /** Force an external anchor even for non-http hrefs. Auto-detected otherwise. */
  external?: boolean;
  onClick?: MouseEventHandler;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
  "aria-label"?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
  className = "",
  style,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2.5 rounded-[2px] font-medium",
    "transition-all duration-200 active:scale-[0.98]",
    SIZE_CLASSES[size],
    variantHover(variant),
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // User style wins over the variant defaults (lets on-image variants recolor).
  const mergedStyle: CSSProperties = { ...variantStyle(variant), ...style };

  const content = (
    <>
      {variant === "whatsapp" && <WhatsAppIcon className="w-5 h-5" />}
      {children}
    </>
  );

  // External link: wa.me / http(s) / mailto / tel, or when explicitly requested.
  const isExternal =
    external ??
    (!!href && /^(https?:|mailto:|tel:|wa\.me)/.test(href));

  if (href && isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={mergedStyle}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} style={mergedStyle} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={mergedStyle}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
