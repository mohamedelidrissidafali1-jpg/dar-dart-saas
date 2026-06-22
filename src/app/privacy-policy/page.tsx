import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: `When you create an account and use the Dar D'Art concierge platform, we collect the following information:

**Account information:** Your name, email address, and booking access code provided during registration.

**Chat messages:** The text of your conversations with the AI concierge. These are used to generate responses and to improve the quality of the service.

**Usage data:** Basic analytics such as pages visited and session duration. This data is aggregated and anonymised.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use the information we collect to:

- Provide and operate the AI concierge service
- Authenticate your account and verify your guest status
- Process your concierge requests and relay booking enquiries to our team
- Improve the accuracy and relevance of AI responses
- Communicate with you about your stay or account

We do not sell your personal data to third parties.`,
  },
  {
    title: "3. Data Retention",
    body: `Account data is retained for the duration of your stay plus 90 days, after which it is permanently deleted unless you request earlier deletion.

Chat logs are retained for 30 days to allow us to review service quality. You may request deletion of your chat history at any time by contacting us.`,
  },
  {
    title: "4. Third-Party Services",
    body: `The AI concierge is powered by Anthropic's Claude AI. Your chat messages are transmitted to Anthropic's API solely to generate responses. Anthropic processes this data in accordance with their own privacy policy. We do not share your name, email, or booking details with Anthropic.

Our platform is hosted on Vercel. Your data is stored and processed in compliance with Vercel's data processing terms.`,
  },
  {
    title: "5. Your Rights",
    body: `Under the GDPR and applicable data protection laws, you have the right to:

- **Access** the personal data we hold about you
- **Correct** inaccurate or incomplete data
- **Delete** your account and personal data
- **Object** to the processing of your data
- **Portability** — request a copy of your data in a machine-readable format

To exercise any of these rights, please contact us at contact@riaddartmarrakech.com. We will respond within 30 days.`,
  },
  {
    title: "6. Cookies",
    body: `We use only essential cookies required to keep you logged in and maintain your session. We do not use advertising cookies or third-party tracking cookies.`,
  },
  {
    title: "7. Security",
    body: `We implement industry-standard security measures to protect your data, including encrypted data transmission (HTTPS) and secure password hashing. However, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: "8. Contact for Privacy Concerns",
    body: `If you have any questions about this Privacy Policy or how we handle your data, please contact us:

**Email:** contact@riaddartmarrakech.com
**Address:** 19 Derb Zemrane, Marrakech Medina 40000, Morocco`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "#0D1B2A", color: "#E8DFC8", minHeight: "100vh" }}>
      <Navbar />

      {/* Page header */}
      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.45em] uppercase mb-5" style={{ color: "#B8973A" }}>
          Legal
        </p>
        <h1
          className="text-4xl md:text-5xl font-light"
          style={{ color: "#E8DFC8", letterSpacing: "0.05em" }}
        >
          Privacy Policy
        </h1>
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-12" style={{ background: "#B8973A" }} />
          <div className="w-1 h-1 rotate-45" style={{ background: "#B8973A" }} />
          <div className="h-px w-12" style={{ background: "#B8973A" }} />
        </div>
        <p className="mt-6 text-xs opacity-40 tracking-wide" style={{ color: "#E8DFC8" }}>
          Last updated: June 2026
        </p>
      </section>

      {/* Content */}
      <section className="pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm leading-relaxed opacity-65 mb-12" style={{ color: "#E8DFC8" }}>
            Riad Dar D&apos;Art (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the
            dardart.com guest concierge platform. This Privacy Policy describes how we collect, use, and
            protect your personal information when you use our service.
          </p>

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div
                key={section.title}
                className="pb-10"
                style={{ borderBottom: "1px solid rgba(184,151,58,0.1)" }}
              >
                <h2
                  className="text-base font-semibold mb-4 tracking-wide"
                  style={{ color: "#E8DFC8" }}
                >
                  {section.title}
                </h2>
                <div className="text-sm leading-8 opacity-65 space-y-3" style={{ color: "#E8DFC8" }}>
                  {section.body.split("\n\n").map((para, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#E8DFC8;opacity:1">$1</strong>').replace(/\n/g, "<br/>") }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
