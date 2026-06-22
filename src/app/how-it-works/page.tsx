import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const STEPS = [
  {
    num: "01",
    title: "Book Your Stay",
    desc: "Reserve your room at Riad Dar D'Art through our website, Booking.com, or Airbnb. Every confirmed booking includes a personal access code.",
  },
  {
    num: "02",
    title: "Receive Your Code",
    desc: "Your unique access code is sent in your booking confirmation email. It's your personal key to the AI concierge platform.",
  },
  {
    num: "03",
    title: "Create Your Account",
    desc: "Sign up at dardart.com using your code. Takes less than a minute — just your name, email, and the code from your confirmation.",
  },
  {
    num: "04",
    title: "Chat 24/7",
    desc: "Your AI concierge is available around the clock. Ask anything — breakfast times, excursion bookings, room service, local tips, and more.",
  },
];

const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
    title: "Available 24/7",
    desc: "No waiting for the front desk. Get answers to your questions at any hour, day or night.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
      </svg>
    ),
    title: "Multilingual",
    desc: "The concierge automatically responds in your language — English, French, Arabic, Spanish, and more.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: "Personalized",
    desc: "Knows your riad, your rooms, and your services. Answers are specific to Dar D'Art, not generic.",
  },
];

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 mt-6 mb-0">
      <div className="h-px w-12" style={{ background: "#B8973A" }} />
      <div className="w-1 h-1 rotate-45" style={{ background: "#B8973A" }} />
      <div className="h-px w-12" style={{ background: "#B8973A" }} />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div style={{ background: "var(--background)", color: "var(--ink)", minHeight: "100vh" }}>
      <Navbar />

      {/* Page header */}
      <section className="pt-40 pb-20 px-6 text-center">
        <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "#B8973A" }}>
          Getting Started
        </p>
        <h1
          className="text-4xl md:text-5xl font-light"
          style={{ color: "var(--ink)", letterSpacing: "0.05em" }}
        >
          How It Works
        </h1>
        <Divider />
        <p className="mt-8 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          From booking to chatting with your AI concierge in four simple steps.
        </p>
      </section>

      {/* Steps */}
      <section className="py-20 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="flex gap-6 p-8 rounded-xl transition-all duration-200"
                style={{ background: "var(--background)", border: "1px solid rgba(184,151,58,0.15)" }}
              >
                {/* Step number */}
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-xs font-semibold tracking-widest"
                  style={{
                    border: "1px solid rgba(184,151,58,0.5)",
                    color: "#B8973A",
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    className="text-base font-semibold mb-3 tracking-wide"
                    style={{ color: "var(--ink)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6" style={{ background: "var(--background)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "#B8973A" }}>
              Why It Matters
            </p>
            <h2
              className="text-3xl font-light"
              style={{ color: "var(--ink)", letterSpacing: "0.05em" }}
            >
              A Smarter Stay
            </h2>
            <Divider />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="p-8 text-center rounded-xl"
                style={{ background: "var(--surface)", border: "1px solid rgba(184,151,58,0.15)" }}
              >
                <div className="flex justify-center mb-5" style={{ color: "#B8973A" }}>
                  {b.icon}
                </div>
                <h3
                  className="text-sm font-semibold mb-3 tracking-wide"
                  style={{ color: "var(--ink)" }}
                >
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "var(--surface)" }}
      >
        <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "#B8973A" }}>
          Ready?
        </p>
        <h2
          className="text-3xl font-light mb-6"
          style={{ color: "var(--ink)", letterSpacing: "0.05em" }}
        >
          Start Your Experience
        </h2>
        <p className="text-sm mb-10 max-w-sm mx-auto leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          Have your booking confirmation ready and create your account in under a minute.
        </p>
        <Link
          href="/sign-up"
          className="inline-block px-10 py-3.5 text-xs tracking-[0.3em] uppercase font-semibold transition-opacity duration-200 hover:opacity-85"
          style={{ background: "#B8973A", color: "#ffffff" }}
        >
          Create Account
        </Link>
      </section>

      <Footer />
    </div>
  );
}
