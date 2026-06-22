"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getLang, getT, isRtl, type Lang } from "@/lib/translations";

export default function SignIn() {
  const [lang, setLang] = useState<Lang>("en");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    setLang(getLang());
  }, []);

  const tr = getT(lang);
  const dir = isRtl(lang) ? "rtl" : undefined;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Auth integration goes here
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ background: "#f6f5f4" }}
      dir={dir}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/">
            <div
              className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-1"
              style={{ color: "#0075de" }}
            >
              Riad
            </div>
            <div
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#000000", letterSpacing: "-0.5px" }}
            >
              Dar D&apos;Art
            </div>
          </Link>
          <p className="mt-3 text-[15px]" style={{ color: "#615d59" }}>
            {tr.signIn.conciergeAwaits}
          </p>
        </div>

        {/* Card */}
        <div
          className="p-8 sm:p-10 rounded-xl"
          style={{ background: "#ffffff", border: "1px solid #e6e6e6" }}
        >
          <h1
            className="text-xl font-bold mb-8"
            style={{ color: "#000000", letterSpacing: "-0.25px" }}
          >
            {tr.signIn.heading}
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[14px] font-medium"
                style={{ color: "#31302e" }}
              >
                {tr.signIn.email}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px]"
                style={{ border: "1px solid #e6e6e6", color: "#000000", background: "#ffffff", caretColor: "#0075de" }}
                onFocus={(e) => (e.target.style.borderColor = "#0075de")}
                onBlur={(e) => (e.target.style.borderColor = "#e6e6e6")}
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-[14px] font-medium"
                  style={{ color: "#31302e" }}
                >
                  {tr.signIn.password}
                </label>
                <Link
                  href="#"
                  className="text-[14px] transition-opacity duration-200 hover:opacity-70"
                  style={{ color: "#0075de" }}
                >
                  {tr.signIn.forgotPassword}
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full px-3 py-2 text-[15px] outline-none transition-all duration-200 rounded-[4px]"
                style={{ border: "1px solid #e6e6e6", color: "#000000", background: "#ffffff", caretColor: "#0075de" }}
                onFocus={(e) => (e.target.style.borderColor = "#0075de")}
                onBlur={(e) => (e.target.style.borderColor = "#e6e6e6")}
                placeholder="••••••••"
              />
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 accent-[#0075de]"
              />
              <span className="text-[14px]" style={{ color: "#615d59" }}>
                {tr.signIn.rememberMe}
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 text-[16px] font-medium rounded-full mt-2 transition-opacity duration-200 hover:opacity-85"
              style={{ background: "#0075de", color: "#ffffff" }}
            >
              {tr.signIn.submit}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px" style={{ background: "#e6e6e6" }} />
            <span className="text-[14px]" style={{ color: "#a39e98" }}>{tr.signIn.or}</span>
            <div className="flex-1 h-px" style={{ background: "#e6e6e6" }} />
          </div>

          <p className="text-center text-[15px]" style={{ color: "#31302e" }}>
            <span>{tr.signIn.noAccount} </span>
            <Link
              href="/sign-up"
              className="font-medium transition-opacity duration-200 hover:opacity-70"
              style={{ color: "#0075de" }}
            >
              {tr.signIn.createAccount}
            </Link>
          </p>
        </div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-[14px] transition-colors duration-200 hover:text-black"
            style={{ color: "#a39e98" }}
          >
            {tr.signIn.backHome}
          </Link>
        </div>
      </div>
    </div>
  );
}
