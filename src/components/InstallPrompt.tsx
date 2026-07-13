"use client";

import { useEffect, useState } from "react";

const DISMISS_KEY = "dardart-install-dismissed";

// Minimal shape of the (non-standard) beforeinstallprompt event.
type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

function isStandalone() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    // iOS Safari
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

function isIos() {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  return /iphone|ipad|ipod/i.test(ua) && !/crios|fxios/i.test(ua);
}

/**
 * Subtle, dismissable "Add to Home Screen" hint.
 * - Android/Chromium: captures `beforeinstallprompt` and shows an Install button.
 * - iOS Safari: shows a one-time Share → Add to Home Screen tip (no native prompt).
 * Dismissal is remembered in localStorage so it never nags.
 */
export default function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIosTip, setShowIosTip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isStandalone()) return; // already installed
    if (typeof window === "undefined") return;
    try {
      if (localStorage.getItem(DISMISS_KEY)) return; // previously dismissed
    } catch {
      /* private mode — just proceed */
    }

    // Android / desktop Chromium.
    const onBip = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setTimeout(() => setVisible(true), 1500);
    };
    window.addEventListener("beforeinstallprompt", onBip);

    // Once installed, hide and remember.
    const onInstalled = () => dismiss();
    window.addEventListener("appinstalled", onInstalled);

    // iOS never fires beforeinstallprompt → show the manual tip.
    if (isIos()) {
      const t = setTimeout(() => {
        setShowIosTip(true);
        setVisible(true);
      }, 2500);
      return () => {
        clearTimeout(t);
        window.removeEventListener("beforeinstallprompt", onBip);
        window.removeEventListener("appinstalled", onInstalled);
      };
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", onBip);
      window.removeEventListener("appinstalled", onInstalled);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  async function install() {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    dismiss();
  }

  if (!visible || (!deferred && !showIosTip)) return null;

  return (
    <div
      role="dialog"
      aria-label="Install Dar D'Art"
      className="fixed z-[60] left-4 bottom-4 max-w-[320px] rounded-xl overflow-hidden"
      style={{
        // Leave the WhatsApp FAB (bottom-right) clear; respect iOS safe area.
        marginBottom: "env(safe-area-inset-bottom)",
        background: "var(--surface, #FBF8F2)",
        color: "var(--ink, #2B2B2B)",
        border: "1px solid var(--hairline, #E6DECF)",
        boxShadow:
          "0 1px 3px rgba(43,43,43,0.06), 0 12px 32px rgba(43,43,43,0.12)",
      }}
    >
      <div className="flex items-start gap-3 p-3.5">
        {/* Brand mark */}
        <div
          className="shrink-0 flex items-center justify-center rounded-lg"
          style={{
            width: 40,
            height: 40,
            background: "var(--accent, #1E4D45)",
            color: "#F4EFE7",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: 22,
          }}
        >
          D
        </div>

        <div className="min-w-0">
          <p
            className="text-[13px] font-medium leading-snug"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Add Dar D&apos;Art to your home screen
          </p>
          {showIosTip ? (
            <p
              className="mt-1 text-[12px] leading-snug"
              style={{ color: "var(--ink-muted, #6E655A)" }}
            >
              Tap the Share icon, then{" "}
              <span style={{ color: "var(--accent, #1E4D45)", fontWeight: 600 }}>
                Add to Home Screen
              </span>
              .
            </p>
          ) : (
            <button
              onClick={install}
              className="mt-2 px-3.5 py-1.5 text-[12px] font-medium rounded-[4px] transition-opacity hover:opacity-85"
              style={{ background: "var(--accent, #1E4D45)", color: "#fff" }}
            >
              Install app
            </button>
          )}
        </div>

        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="shrink-0 -mt-1 -mr-1 p-1.5 rounded-md transition-opacity hover:opacity-70"
          style={{ color: "var(--ink-faint, #A89E8F)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
