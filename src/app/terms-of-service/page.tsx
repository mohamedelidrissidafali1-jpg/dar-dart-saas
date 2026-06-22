import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: `By creating an account and using the Dar D'Art guest concierge platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.

These terms may be updated from time to time. Continued use of the service after changes constitutes acceptance of the revised terms.`,
  },
  {
    title: "2. Eligibility",
    body: `Access to the concierge platform is restricted to confirmed guests of Riad Dar D'Art. A valid booking access code — provided in your reservation confirmation — is required to create an account.

By registering, you confirm that you are a current or upcoming guest and that the access code you provide is your own.`,
  },
  {
    title: "3. Use of the Service",
    body: `You agree to use the platform only for lawful purposes and in a manner consistent with these terms. You must not:

- Use the service to transmit harmful, offensive, or illegal content
- Attempt to reverse-engineer, hack, or disrupt the platform
- Share your account credentials or access code with others
- Use the service in any way that could damage the reputation of Riad Dar D'Art`,
  },
  {
    title: "4. AI Concierge Limitations",
    body: `The AI concierge provides informational responses based on general knowledge about Riad Dar D'Art and Marrakech. Its responses:

- Are for informational purposes only and do not constitute a contractual commitment
- May not always be accurate or up to date
- Should not be relied upon for medical, legal, or safety-critical decisions

For confirmed reservations, bookings, or specific arrangements, please contact our team directly.`,
  },
  {
    title: "5. User Accounts & Access Codes",
    body: `You are responsible for maintaining the confidentiality of your account and access code. You must notify us immediately if you suspect unauthorised access to your account.

Each access code is valid for one account registration. Access codes expire 30 days after your check-out date.`,
  },
  {
    title: "6. Intellectual Property",
    body: `All content on the platform — including text, images, design, and the AI concierge system — is the property of Riad Dar D'Art or its licensors and is protected by applicable intellectual property laws.

You may not reproduce, distribute, or create derivative works from any content on the platform without our prior written consent.`,
  },
  {
    title: "7. Limitation of Liability",
    body: `To the fullest extent permitted by law, Riad Dar D'Art shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.

The service is provided "as is" without warranties of any kind. We do not guarantee the accuracy, reliability, or availability of the AI concierge at any given time.`,
  },
  {
    title: "8. Changes to Terms",
    body: `We reserve the right to modify these Terms of Service at any time. We will notify users of material changes by updating the "Last updated" date at the top of this page.`,
  },
  {
    title: "9. Governing Law",
    body: `These terms are governed by the laws of the Kingdom of Morocco. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Marrakech, Morocco.`,
  },
  {
    title: "10. Contact",
    body: `For questions about these Terms of Service, please contact us:

**Email:** contact@riaddartmarrakech.com
**Address:** 19 Derb Zemrane, Marrakech Medina 40000, Morocco`,
  },
];

export default function TermsOfService() {
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
          Terms of Service
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
            These Terms of Service govern your use of the Dar D&apos;Art guest concierge platform
            operated by Riad Dar D&apos;Art, located at 19 Derb Zemrane, Marrakech, Morocco. Please read
            these terms carefully before using our service.
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
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: para
                          .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#E8DFC8;opacity:1">$1</strong>')
                          .replace(/\n- /g, "<br/>• ")
                          .replace(/\n/g, "<br/>"),
                      }}
                    />
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
