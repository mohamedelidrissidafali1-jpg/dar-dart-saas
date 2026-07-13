import type { CSSProperties, ReactNode } from "react";

// ─── Shared Badge ───────────────────────────────────────────────────────────
// The small pill / eyebrow tag. Uppercase is KEPT here on purpose — a small,
// letterspaced small-caps label reads as elegant, unlike big all-caps buttons.

interface BadgeProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Badge({ children, className = "", style }: BadgeProps) {
  return (
    <span
      className={`inline-block text-[12px] font-semibold tracking-[0.125px] uppercase px-3 py-1 rounded-full ${className}`}
      style={{
        background: "var(--surface)",
        color: "var(--accent)",
        border: "1px solid var(--hairline)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
