"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Auth integration goes here
  }

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
          style={{
            background: "#162436",
            border: "1px solid rgba(184,151,58,0.2)",
          }}
        >
          <h1
            className="text-xl font-light tracking-[0.1em] mb-8"
            style={{ color: "#E8DFC8" }}
          >
            Welcome Back
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-all duration-200"
                style={{
                  border: "1px solid rgba(184,151,58,0.25)",
                  color: "#E8DFC8",
                  caretColor: "#B8973A",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(184,151,58,0.7)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(184,151,58,0.25)")}
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs tracking-[0.25em] uppercase opacity-60"
                  style={{ color: "#E8DFC8" }}
                >
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs tracking-wide opacity-55 hover:opacity-100 transition-opacity duration-200"
                  style={{ color: "#B8973A" }}
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full px-4 py-3 text-sm bg-transparent outline-none transition-all duration-200"
                style={{
                  border: "1px solid rgba(184,151,58,0.25)",
                  color: "#E8DFC8",
                  caretColor: "#B8973A",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(184,151,58,0.7)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(184,151,58,0.25)")}
                placeholder="••••••••"
              />
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 accent-[#B8973A]"
              />
              <span className="text-xs tracking-wide opacity-60" style={{ color: "#E8DFC8" }}>
                Remember me
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 text-xs tracking-[0.3em] uppercase font-semibold mt-2 transition-opacity duration-200 hover:opacity-85"
              style={{ background: "#B8973A", color: "#0D1B2A" }}
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px" style={{ background: "rgba(184,151,58,0.15)" }} />
            <span className="text-xs opacity-40" style={{ color: "#E8DFC8" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "rgba(184,151,58,0.15)" }} />
          </div>

          <p className="text-center text-xs tracking-wide" style={{ color: "#E8DFC8" }}>
            <span className="opacity-55">New guest? </span>
            <Link
              href="/sign-up"
              className="opacity-100 hover:opacity-70 transition-opacity duration-200"
              style={{ color: "#B8973A" }}
            >
              Create an account →
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
