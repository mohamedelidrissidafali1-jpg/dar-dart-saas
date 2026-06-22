"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    accessCode: "",
    agreed: false,
  });

  function set(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Auth integration goes here
  }

  const inputStyle = {
    border: "1px solid rgba(184,151,58,0.25)",
    color: "#E8DFC8",
    caretColor: "#B8973A",
  };

  const focusOn = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.target.style.borderColor = "rgba(184,151,58,0.7)");
  const focusOff = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.target.style.borderColor = "rgba(184,151,58,0.25)");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative"
      style={{ background: "#0D1B2A" }}
    >
      {/* Faint background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.7)" }} />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/">
            <div className="text-xs font-light tracking-[0.4em] uppercase mb-1" style={{ color: "#B8973A" }}>
              Riad
            </div>
            <div className="text-2xl font-semibold tracking-[0.2em] uppercase" style={{ color: "#E8DFC8" }}>
              Dar D&apos;Art
            </div>
          </Link>
          <p className="mt-3 text-sm opacity-50 tracking-wide" style={{ color: "#E8DFC8" }}>
            Your personal concierge awaits
          </p>
        </div>

        {/* Card */}
        <div
          className="p-8 sm:p-10"
          style={{ background: "#162436", border: "1px solid rgba(184,151,58,0.2)" }}
        >
          <h1
            className="text-xl font-light tracking-[0.1em] mb-2"
            style={{ color: "#E8DFC8" }}
          >
            Create Your Account
          </h1>
          <p className="text-xs opacity-50 mb-8 leading-relaxed" style={{ color: "#E8DFC8" }}>
            Your unique access code is included in your booking confirmation email.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="firstName"
                  className="text-xs tracking-[0.25em] uppercase opacity-60"
                  style={{ color: "#E8DFC8" }}
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  required
                  autoComplete="given-name"
                  className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={focusOn}
                  onBlur={focusOff}
                  placeholder="Amina"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="lastName"
                  className="text-xs tracking-[0.25em] uppercase opacity-60"
                  style={{ color: "#E8DFC8" }}
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                  required
                  autoComplete="family-name"
                  className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={focusOn}
                  onBlur={focusOff}
                  placeholder="Benali"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs tracking-[0.25em] uppercase opacity-60"
                style={{ color: "#E8DFC8" }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                required
                autoComplete="email"
                className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-all duration-200"
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-xs tracking-[0.25em] uppercase opacity-60"
                style={{ color: "#E8DFC8" }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={form.password}
                onChange={(e) => set("password", e.target.value)}
                required
                autoComplete="new-password"
                className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-all duration-200"
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
                placeholder="••••••••"
              />
            </div>

            {/* Access code */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="accessCode"
                className="text-xs tracking-[0.25em] uppercase opacity-60"
                style={{ color: "#E8DFC8" }}
              >
                Booking Access Code
              </label>
              <input
                id="accessCode"
                type="text"
                value={form.accessCode}
                onChange={(e) => set("accessCode", e.target.value.toUpperCase())}
                required
                className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-all duration-200 tracking-widest"
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
                placeholder="DART-XXXX"
              />
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form.agreed}
                onChange={(e) => set("agreed", e.target.checked)}
                required
                className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#B8973A]"
              />
              <span className="text-xs leading-relaxed opacity-60" style={{ color: "#E8DFC8" }}>
                I agree to the{" "}
                <Link
                  href="/terms-of-service"
                  className="opacity-100 hover:opacity-70 transition-opacity"
                  style={{ color: "#B8973A" }}
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="opacity-100 hover:opacity-70 transition-opacity"
                  style={{ color: "#B8973A" }}
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 text-xs tracking-[0.3em] uppercase font-semibold mt-2 transition-opacity duration-200 hover:opacity-85"
              style={{ background: "#B8973A", color: "#0D1B2A" }}
            >
              Create Account
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px" style={{ background: "rgba(184,151,58,0.15)" }} />
            <span className="text-xs opacity-40" style={{ color: "#E8DFC8" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "rgba(184,151,58,0.15)" }} />
          </div>

          <p className="text-center text-xs tracking-wide" style={{ color: "#E8DFC8" }}>
            <span className="opacity-55">Already have an account? </span>
            <Link
              href="/sign-in"
              className="opacity-100 hover:opacity-70 transition-opacity duration-200"
              style={{ color: "#B8973A" }}
            >
              Sign In →
            </Link>
          </p>
        </div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-xs tracking-[0.2em] uppercase opacity-40 hover:opacity-70 transition-opacity duration-200"
            style={{ color: "#E8DFC8" }}
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
