import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const FAQ_CATEGORIES = [
  {
    category: "Check-in & Check-out",
    items: [
      {
        q: "What time is check-in and check-out?",
        a: "Check-in is from 14:00 (2:00 PM). Check-out is by 11:00 AM. Early check-in and late check-out can be arranged subject to availability — just ask your AI concierge or contact us in advance.",
      },
      {
        q: "Where do I pick up the keys?",
        a: "Our team will greet you at the riad entrance. For late arrivals, please let us know your estimated arrival time so we can ensure someone is there to welcome you.",
      },
      {
        q: "Can I leave luggage before check-in or after check-out?",
        a: "Yes, we're happy to store your luggage on the day of arrival before your room is ready, or on the day of departure after check-out.",
      },
    ],
  },
  {
    category: "Rooms & Amenities",
    items: [
      {
        q: "Is Wi-Fi available?",
        a: "Yes, complimentary high-speed Wi-Fi is available throughout both riads. Your concierge can provide the current password on request.",
      },
      {
        q: "Is there air conditioning?",
        a: "All rooms are equipped with air conditioning and heating, ensuring comfort year-round in Marrakech's varying climate.",
      },
      {
        q: "Do you offer laundry service?",
        a: "Yes, laundry and dry-cleaning services are available. Please speak to our team or ask your AI concierge for details and turnaround times.",
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        q: "What does breakfast include?",
        a: "We serve a traditional Moroccan breakfast daily in the courtyard — msemen, beghrir, fresh-pressed orange juice, Medjool dates, honey, argan oil, and Moroccan mint tea. Served from 7:30 AM to 10:30 AM.",
      },
      {
        q: "Is there a pool?",
        a: "Riad 141 has a small plunge pool in the garden courtyard, available to all guests staying at either property.",
      },
      {
        q: "How do I book the hammam?",
        a: "The hammam is available for private bookings. Ask your AI concierge or speak to the front desk to check availability and book a session.",
      },
    ],
  },
  {
    category: "Excursions",
    items: [
      {
        q: "How do I book an excursion?",
        a: "You can request any excursion through your AI concierge or directly with our team at the front desk. We recommend booking at least 24 hours in advance for day trips.",
      },
      {
        q: "What is the cancellation policy for excursions?",
        a: "Excursions can be cancelled or rescheduled up to 24 hours before the scheduled departure. Same-day cancellations may incur a fee.",
      },
      {
        q: "Can you arrange custom private tours?",
        a: "Absolutely. We work with expert local guides and private drivers to create bespoke experiences. Contact us with your interests and we'll design something special.",
      },
    ],
  },
  {
    category: "AI Concierge",
    items: [
      {
        q: "What can the AI concierge help me with?",
        a: "Your AI concierge can answer questions about your room, riad facilities, breakfast times, local recommendations, excursion booking requests, check-in/check-out times, and much more. It's available 24/7.",
      },
      {
        q: "What languages does the concierge speak?",
        a: "The AI concierge automatically detects and responds in your language. It supports English, French, Arabic, Spanish, German, Italian, and many more.",
      },
      {
        q: "Are my conversations private?",
        a: "Yes. Your chat messages are processed securely and are not shared with third parties. Please see our Privacy Policy for full details.",
      },
      {
        q: "Can the AI concierge make actual bookings?",
        a: "Currently the concierge provides information and can relay requests to our team. For confirmed bookings (excursions, hammam, transfers), our staff will follow up to finalise the details.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div style={{ background: "var(--background)", color: "var(--ink)", minHeight: "100vh" }}>
      <Navbar />

      {/* Page header */}
      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "#B8973A" }}>
          Help &amp; Support
        </p>
        <h1
          className="text-4xl md:text-5xl font-light"
          style={{ color: "var(--ink)", letterSpacing: "0.05em" }}
        >
          Frequently Asked Questions
        </h1>
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-12" style={{ background: "#B8973A" }} />
          <div className="w-1 h-1 rotate-45" style={{ background: "#B8973A" }} />
          <div className="h-px w-12" style={{ background: "#B8973A" }} />
        </div>
      </section>

      {/* FAQ content */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              <h2
                className="text-xs tracking-[0.4em] uppercase mb-6 pb-4 font-semibold"
                style={{ color: "#B8973A", borderBottom: "1px solid rgba(184,151,58,0.2)" }}
              >
                {cat.category}
              </h2>
              <div className="space-y-2">
                {cat.items.map((item) => (
                  <details
                    key={item.q}
                    className="group"
                    style={{ borderBottom: "1px solid var(--hairline)" }}
                  >
                    <summary
                      className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none transition-opacity duration-200 hover:opacity-100 opacity-80"
                      style={{ color: "var(--ink)" }}
                    >
                      <span className="text-sm font-light leading-relaxed">{item.q}</span>
                      <span
                        className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-base transition-transform duration-200 group-open:rotate-45"
                        style={{ color: "#B8973A" }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p
                      className="pb-5 text-sm leading-relaxed"
                      style={{ color: "var(--ink-muted)" }}
                    >
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "var(--surface)" }}
      >
        <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#B8973A" }}>
          Still Have Questions?
        </p>
        <h2
          className="text-2xl font-light mb-6"
          style={{ color: "var(--ink)", letterSpacing: "0.04em" }}
        >
          Chat with Our AI Concierge
        </h2>
        <p className="text-sm mb-10 max-w-xs mx-auto leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          Your personal concierge is available 24/7 and speaks your language.
        </p>
        <Link
          href="/dashboard"
          className="inline-block px-10 py-3.5 text-xs tracking-[0.3em] uppercase font-semibold transition-opacity duration-200 hover:opacity-85"
          style={{ background: "#B8973A", color: "#ffffff" }}
        >
          Open Concierge
        </Link>
      </section>

      <Footer />
    </div>
  );
}
