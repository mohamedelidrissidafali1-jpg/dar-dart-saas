"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

// ─── Shared Input ───────────────────────────────────────────────────────────
// One field style for auth, checkout and profile. The accent border on focus
// is driven by React state (no per-page DOM mutation). Supports a single-line
// input or a multiline textarea, plus an optional right-aligned label slot
// (e.g. the "Forgot password?" link on sign-in).

interface InputProps {
  label?: ReactNode;
  /** Right-aligned node on the label row (e.g. a forgot-password link). */
  labelRight?: ReactNode;
  id?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  /** Render a textarea instead of an input. */
  multiline?: boolean;
  rows?: number;
  /** Field background — defaults to the surface token. */
  background?: string;
}

export default function Input({
  label,
  labelRight,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  autoComplete,
  multiline = false,
  rows = 3,
  background = "var(--surface)",
}: InputProps) {
  const [focused, setFocused] = useState(false);

  const fieldStyle: CSSProperties = {
    border: `1px solid ${focused ? "var(--accent)" : "var(--hairline)"}`,
    color: "var(--ink)",
    background,
    caretColor: "var(--accent)",
  };

  const fieldClasses =
    "w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px]";

  return (
    <div className="flex flex-col gap-1.5">
      {(label || labelRight) && (
        <div className="flex items-center justify-between">
          {label && (
            <label
              htmlFor={id}
              className="text-[14px] font-medium"
              style={{ color: "var(--ink-secondary)" }}
            >
              {label}
            </label>
          )}
          {labelRight}
        </div>
      )}
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          rows={rows}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${fieldClasses} resize-none`}
          style={fieldStyle}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={fieldClasses}
          style={fieldStyle}
        />
      )}
    </div>
  );
}
