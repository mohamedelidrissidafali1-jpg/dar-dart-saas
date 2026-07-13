import type { CSSProperties, ReactNode } from "react";

// ─── Shared Card ────────────────────────────────────────────────────────────
// Consistent warm surface: surface bg, hairline border, restrained shadow,
// card radius. Padding is left to the caller (cards vary p-6 / p-7 / p-8) via
// `className`; colors can be overridden through `style` for pages that compute
// explicit light/dark tokens (e.g. the dashboard).

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Card({ children, className = "", style }: CardProps) {
  return (
    <div
      className={`rounded-xl ${className}`}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--hairline)",
        boxShadow: "var(--shadow-card)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
