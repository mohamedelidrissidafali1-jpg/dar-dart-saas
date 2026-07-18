export type Lang = "en" | "fr" | "es" | "ar" | "de" | "it";

export const LANGUAGES: { code: Lang; flag: string; label: string; dir?: "rtl" }[] = [
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "ar", flag: "🇸🇦", label: "العربية", dir: "rtl" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
];

export function getLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("selectedLanguage") as Lang | null;
  return stored ?? "en";
}

export function isRtl(lang: Lang) {
  return lang === "ar";
}

const t = {
  en: {
    nav: {
      howItWorks: "How It Works",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      signIn: "Sign In",
      signUp: "Sign Up",
      navigate: "Navigate",
      legal: "Legal",
    },
    hero: {
      location: "Marrakech, Morocco",
      title: "Riad Dar D'Art",
      tagline: "Your luxury retreat in the heart of Marrakech",
      exploreRooms: "Explore Rooms",
      contactUs: "Contact Us",
      scroll: "Scroll",
    },
    about: {
      label: "Our Story",
      heading: "A Living Heritage in the Medina",
      body: "Nestled within the ancient walls of Marrakech's medina, Riad Dar D'Art is a sanctuary of Moroccan art, architecture, and timeless hospitality. We operate two beautifully restored properties:",
      and: "and",
      each: "— each a testament to centuries of Andalusian craftsmanship. Mosaic courtyards, hand-carved cedar archways, and the scent of orange blossom welcome you into a world apart from the outside bustle, yet steps away from the vibrant soul of the city.",
    },
    rooms: {
      label: "Accommodation",
      heading: "Rooms & Suites",
      suite: "Suite",
      viewRoom: "View Room",
    },
    services: {
      label: "Amenities",
      heading: "Services & Facilities",
    },
    excursions: {
      label: "Experiences",
      heading: "Curated Excursions",
      inquire: "Inquire",
    },
    contact: {
      label: "Get in Touch",
      heading: "Contact & Reservations",
      viewOnMap: "View on map →",
      whatsapp: "WhatsApp",
      emailUs: "Email Us",
    },
    footer: {
      tagline: "A luxury riad experience in the heart of Marrakech's medina, guided by an AI concierge that's always on call.",
      navigate: "Navigate",
      legal: "Legal",
      contact: "Contact",
      copyright: "© 2026 Riad Dar D'Art — Marrakech, Morocco",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    signIn: {
      conciergeAwaits: "Your personal concierge awaits",
      heading: "Welcome Back",
      email: "Email",
      password: "Password",
      forgotPassword: "Forgot password?",
      submit: "Sign In",
      signingIn: "Signing in…",
      continueWithGoogle: "Continue with Google",
      or: "or",
      noAccount: "New guest?",
      createAccount: "Create an account →",
      backHome: "← Back to home",
      resetHeading: "Reset Your Password",
      resetDesc: "Enter your email address and we'll send you a link to reset your password.",
      sendResetLink: "Send Reset Link",
      resetEmailSent: "Check your inbox — we've sent you a password reset link.",
      newPassword: "New Password",
      confirmPassword: "Confirm Password",
      updatePassword: "Update Password",
      passwordUpdated: "Password updated. Taking you to your dashboard…",
      passwordMismatch: "Passwords do not match.",
      passwordTooShort: "Password must be at least 6 characters.",
      backToSignIn: "← Back to sign in",
    },
    signUp: {
      conciergeAwaits: "Your personal concierge awaits",
      heading: "Create Your Account",
      subheading: "Create your free guest account to access your personal concierge.",
      firstName: "First Name",
      lastName: "Last Name",
      nameOnReservation: "Name on Reservation",
      namePlaceholder: "Enter the name used for your booking",
      email: "Email",
      password: "Password",
      phone: "Phone Number",
      phonePlaceholder: "With country code, e.g. +1 234 567 8900",
      phoneRequired: "Please enter your phone number.",
      whichRiad: "Which riad are you staying at?",
      language: "Preferred Language",
      languageRequired: "Please select your language to continue.",
      riadRequired: "Please select your riad to continue.",
      terms: "I agree to the",
      termsLink: "Terms of Service",
      and: "and",
      privacyLink: "Privacy Policy",
      submit: "Create Account",
      creatingAccount: "Creating account…",
      signUpWithGoogle: "Sign up with Google",
      or: "or",
      haveAccount: "Already have an account?",
      signIn: "Sign In →",
      backHome: "← Back to home",
      signUpFailedDefault: "Sign up failed. Please try again.",
      profileSetupFailed: "Account created but profile setup failed. Please contact support.",
      phoneInvalid: "Please enter your full phone number with country code (e.g. +212 6XX XXX XXX or +33 6 XX XX XX XX).",
      confirmEmail: "Almost there! Check your inbox and confirm your email address to activate your account.",
    },
    dashboard: {
      aiConcierge: "AI Concierge",
      welcome: "Welcome to",
      fallback: "Welcome to Riad Dar D'Art",
      howCanIHelp: "How can I help you today?",
      signOut: "Sign Out",
      welcomeGuest: "Welcome, Guest",
      poweredBy: "Powered by Claude AI · Responses are informational only",
      quickPrompts: [
        "What time is breakfast?",
        "Book an excursion",
        "Request room service",
        "What excursions do you offer?",
        "What time is check-out?",
      ],
      guestPortal: "Your Personalized Guest Portal",
      welcomeBack: "Welcome back",
      yourStay: "Your stay at",
      checkOut: "Check Out",
      accommodation: "Your Accommodation",
      includedInStay: "Included in Your Stay",
      servicesAmenities: "Services & Amenities",
      marrakechBeyond: "Marrakech & Beyond",
      excursionsHeading: "Excursions",
      goodToKnow: "Good to Know",
      importantInfo: "Important Information",
      endOfStay: "End of Stay",
      enjoyedStay: "Enjoyed your stay?",
      checkoutDesc: "We'd love to hear from you. Check out and leave us a review to help future guests discover Dar D'Art.",
      checkoutReview: "Check Out & Leave a Review",
      stayEnded: "Your stay has ended",
      stayEndedThanks: "Thank you for staying with us",
      backToHome: "Back to Home",
      bookViaWhatsApp: "Book via WhatsApp",
      whatsappMessages: {
        hammam: "Hello, I would like to book a Hammam & Spa",
        airportTransfer: "Hello, I would like to book an Airport Transfer",
        dinner: "Hello, I would like to book Dinner at the Riad",
        agafay: "Hello, I would like to book the Agafay Desert Excursion",
        ourikaValley: "Hello, I would like to book the Ourika Valley Excursion",
        essaouira: "Hello, I would like to book the Essaouira Day Trip",
        cityTour: "Hello, I would like to book a Guided City Day",
      },
      services: {
        breakfast: {
          name: "Breakfast",
          detail: "8:00 AM – 10:30 AM · Included",
          desc: "Traditional Moroccan breakfast in the open-air courtyard. Tea, coffee, Moroccan pancakes, fresh orange juice, cheese, honey, and eggs to order. Express breakfast available for early departures.",
        },
        hammam: {
          name: "Hammam & Spa",
          detail: "€20/person · Min 2 people",
          desc: "Authentic hammam ritual with exfoliation and argan soap. Massage: 30 min €30 · 60 min €40. Open 9:00 AM – 9:00 PM — reserve at least 2 hours in advance via WhatsApp.",
        },
        pool: {
          name: "Pool",
          detail: "Free · Towels provided",
          desc: "Relax in our private courtyard pool. Towels are provided — please shower before entering.",
        },
        airportTransfer: {
          name: "Airport Transfer",
          detail: "€20 (1–4, 07:00–22:00) · €25 (1–4, 23:00–06:00) · €30 (5–7)",
          desc: "Private, air-conditioned transfers. Book via WhatsApp at least 2h30 before your flight.",
        },
        wifi: {
          name: "WiFi",
          detail: "Included",
          desc: "High-speed complimentary WiFi throughout the riad. Connection details are provided at check-in.",
        },
        concierge: {
          name: "Concierge",
          detail: "WhatsApp +212 709 086 496 · 08:00–22:00",
          desc: "Our front desk team is available daily from 08:00 to 22:00 to arrange anything you need — from restaurant bookings to excursions. The AI concierge in the app is available 24/7.",
        },
      },
      info: {
        checkIn: { label: "Check-in", value: "2:00 PM", sub: "Arrival possible from 10:30 AM" },
        checkOut: { label: "Check-out", value: "12:00 PM", sub: "Late possible on request" },
        dinner: { label: "Dinner at Riad", value: "€20/person", sub: "Min 4 people · Children <12 €12, <4 free · Reserve 1 day ahead" },
        water: { label: "Water", value: "20 dirhams", sub: "Per bottle · Kitchen available" },
      },
      excursionsList: {
        agafay: { subtitle: "Quad · Camel · Dinner · Fire show", price: "Pack A €30 · Pack B €55" },
        "ourika-valley": { subtitle: "Atlas · Waterfalls · Berber villages · 09:00–17:00", price: "€20 · €27 with meal" },
        essaouira: { subtitle: "UNESCO medina · Atlantic coast · 08:00–20:00", price: "€25 / person" },
        "city-tour": { subtitle: "Medina · Souks · Hidden places", price: "€65 / group (1–4 people)" },
      },
    },
    survey: {
      checkOut: "Check Out",
      howWasStay: "How was your stay,",
      overallRating: "Overall Stay",
      roomsRating: "Rooms",
      foodRating: "Food",
      staffRating: "Staff",
      cleanlinessRating: "Cleanliness",
      conciergeRating: "AI Concierge",
      comments: "Any comments?",
      optional: "(optional)",
      commentsPlaceholder: "Tell us about your experience…",
      cancel: "Cancel",
      submitting: "Submitting…",
      complete: "Complete Check Out",
      thankYou: "Thank you,",
      farewellTitle: "Thank you for staying with us! ✨",
      farewellMessage: "Check your WhatsApp — we've sent you a little farewell.",
      alreadyCheckedOut: "You're already checked out — thank you again for staying with us. We hope to welcome you back soon!",
      signingOut: "Signing you out…",
      pleaseRate: "Please rate",
      beforeSubmitting: "before submitting.",
      sessionExpired: "Session expired. Please sign in again.",
      failedToSubmit: "Failed to submit survey. Please try again.",
      checkoutFailed: "Something went wrong during checkout. You have not been signed out — please try again.",
      phoneInvalid: "Please enter your full phone number with country code in your profile (e.g. +212 6XX XXX XXX or +33 6 XX XX XX XX), then try again.",
      retry: "Retry",
    },
    concierge: {
      title: "Your Personal Concierge",
      subtitle: "Questions? Bookings? Chat with us on WhatsApp — we reply in your language, 24/7.",
      chatButton: "Chat on WhatsApp",
      fabLabel: "Chat with us on WhatsApp",
      prefill: "Hello! I'm a guest at Riad Dar D'Art and I have a question.",
    },
    common: {
      loading: "Loading…",
      close: "Close",
      success: "Success",
      toggleMenu: "Toggle menu",
      logout: "Logout",
      lastUpdated: "Last updated: June 2026",
      cityLine: "Marrakech Medina 40000, Morocco",
    },
    home: {
      riad19Intro: "Nestled in the heart of Marrakech's medina, Riad Dar D'Art 19 is located at 19 Derb Zemrane, Bab Doukkala. A sanctuary of Moroccan art, architecture, and timeless hospitality.",
      riad141Intro: "Nestled in the heart of Marrakech's medina, Riad Dar D'Art 141 is located at 141 Derb Arset Aouzal, Bab Doukkala. A sanctuary of Moroccan art, architecture, and timeless hospitality.",
      signInForRooms: "Sign in to see your riad's rooms",
      rooms19: {
        terrasseLulu: "A charming suite with a private terrace overlooking the fountain courtyard, blending traditional zellige tilework with modern comfort.",
        africa: "Rich earthy tones, carved cedar ceilings, and a warm African-inspired décor create an unforgettable retreat.",
        gazelle: "Our spacious family suite with original zellige mosaics, premium linens, and room for the whole family.",
        frida: "A vibrant, artful retreat inspired by bold colours and creative spirit, with direct garden access.",
        rosa: "A serene sanctuary in soft rose tones with zellige floors and views across the inner courtyard fountain.",
      },
      rooms141: {
        lexicon: "A literary-inspired suite with warm amber tones, hand-painted plaster walls, and a four-poster bed draped in Berber textiles.",
        mategot: "Midnight-blue tadelakt walls, brass lanterns, and a private courtyard sitting area inspired by mid-century Moroccan design.",
        chevrerie: "Flooded with natural light, this suite blends rustic charm with rooftop access and a traditional hammam tub.",
        poupee: "A mosaic masterpiece — floor-to-ceiling hand-cut tiles and a king bed of carved cedar in a whimsical setting.",
        zagora: "Evocative of the desert south, featuring warm sandstone hues, geometric patterns, and a private terrace.",
      },
      excursionsList: {
        agafayExpress: { name: "Agafay Desert — Pack A Express", desc: "Quad biking (40 min), camel ride (10 min), dinner, fire show, pool and transport included.", price: "€30 / person" },
        agafayFull: { name: "Agafay Desert — Pack B Full Experience", desc: "Quad biking (1 h), camel ride (20 min), dinner, fire show, pool and transport included.", price: "€55 / person" },
        essaouira: { name: "Essaouira Day Trip", desc: "A full day on the Atlantic coast — UNESCO-listed medina, port, and ramparts. Departure 08:00, return 20:00.", price: "€25 / person" },
        ourika: { name: "Ourika Valley", desc: "Atlas mountains, waterfalls, and Berber villages. Departure 09:00, return 17:00. €27 with meal included.", price: "From €20 / person" },
        cityDay: { name: "Guided City Day", desc: "A full day in Marrakech with an expert local guide — medina, souks, and hidden places.", price: "€65 / group (1–4)" },
      },
      servicesList: {
        breakfast: { name: "Breakfast", desc: "Traditional Moroccan breakfast served daily in the open-air courtyard." },
        hammamSpa: { name: "Hammam & Spa", desc: "Authentic hammam rituals and rejuvenating spa treatments on-site." },
        airportTransfer: { name: "Airport Transfer", desc: "Private, air-conditioned transfers available 24/7 to your door." },
        rooftopTerrace: { name: "Rooftop Terrace", desc: "Exclusive rooftop with panoramic views over the Marrakech medina." },
        highSpeedWifi: { name: "High-Speed WiFi", desc: "Complimentary high-speed internet throughout both riads." },
        concierge: { name: "Concierge", desc: "A dedicated concierge to arrange every detail of your stay." },
      },
    },
    completeProfile: {
      heading: "Complete Your Profile",
      saving: "Saving…",
      continueToDashboard: "Continue to Dashboard",
      saveFailed: "Failed to save profile. Please try again.",
      phone: "Phone Number",
      phonePlaceholder: "With country code, e.g. +1 234 567 8900",
      phoneRequired: "Please enter your phone number.",
    },
    aboutPage: {
      ourStory: "Our Story",
      title: "About Dar D'Art",
      heritageLabel: "Heritage",
      heading: "A Living Piece of Marrakech",
      intro: "Nestled within the ancient walls of Marrakech's medina, Riad Dar D'Art is a sanctuary of Moroccan art, architecture, and timeless hospitality. The name means “House of Art” — and every corner of the property reflects that identity.",
      riad19Welcome: "We are delighted to welcome you to Riad Dar D'Art 19, located at 19 Derb Zemrane, Bab Doukkala. A testament to centuries of Andalusian craftsmanship — mosaic courtyards, hand-carved cedar archways, and the scent of orange blossom.",
      riad141Welcome: "We are delighted to welcome you to Riad Dar D'Art 141, located at 141 Derb Arset Aouzal, Bab Doukkala. A testament to centuries of Andalusian craftsmanship — mosaic courtyards, hand-carved cedar archways, and the scent of orange blossom.",
      bothWelcome: "We operate two beautifully restored properties: Riad 19 at 19 Derb Zemrane and Riad 141 at 141 Derb Arset Aouzal. Each is a testament to centuries of Andalusian craftsmanship — mosaic courtyards, hand-carved cedar archways, and the scent of orange blossom.",
      mission: "Our mission is to offer guests an authentic Moroccan experience without sacrificing modern comfort. That's why we've built an AI-powered concierge that brings luxury service to every guest, at every hour.",
      whatWeStandFor: "What We Stand For",
      ourValues: "Our Values",
      values: {
        hospitality: { title: "Hospitality", desc: "Every guest is welcomed as a cherished visitor. Our philosophy of 'dar' — meaning home — guides every interaction." },
        authenticity: { title: "Authenticity", desc: "Original zellige mosaics, hand-carved cedar, and traditional recipes preserved across generations. Nothing here is a replica." },
        innovation: { title: "Innovation", desc: "We blend centuries of tradition with modern comforts — including an AI concierge that speaks your language and knows your stay." },
      },
      theProperties: "The Properties",
      yourRiad: "Your Riad",
      twoRiads: "Two Riads, One Soul",
      riad19Desc: "The original property, featuring five intimate guest suites arranged around a mosaic fountain courtyard. Known for its original 17th-century tilework and rooftop terrace with panoramic medina views.",
      riad141Desc: "A beautifully restored riad with five distinctive rooms and suites, a private hammam, and a lush interior garden with jasmine and orange trees. Perfect for families and groups.",
      experienceItYourself: "Experience It Yourself",
      ctaDesc: "Ready to stay with us? Get in touch or explore our rooms.",
      viewRooms: "View Rooms",
    },
    contactPage: {
      reachOut: "Reach Out",
      ourLocations: "Our Locations",
      directContact: "Direct Contact",
      whatsappLabel: "WhatsApp: +212 709 086 496",
      hours: "Hours",
      deskHours: "Front desk available daily, 08:00 – 22:00",
      conciergeAvailable: "AI Concierge available 24/7 via",
      chatOnWhatsApp: "Chat on WhatsApp",
      whatsappDesc: "The fastest way to reach us — questions, bookings, and anything about your stay.",
      whatsappPrefill: "Hello! I have a question about Riad Dar D'Art",
    },
    faqPage: {
      helpSupport: "Help & Support",
      title: "Frequently Asked Questions",
      stillHaveQuestions: "Still Have Questions?",
      chatWithConcierge: "Chat with Our AI Concierge",
      ctaDesc: "Your personal concierge is available 24/7 and speaks your language.",
      openConcierge: "Open Concierge",
      categories: [
        {
          category: "Check-in & Check-out",
          items: [
            { q: "What time is check-in and check-out?", a: "Arrival is possible from 10:30 AM (we'll store your luggage); rooms are ready from 14:00 (2:00 PM). Check-out is by 12:00 (noon). Early check-in and late check-out can be arranged subject to availability — just ask your AI concierge or contact us in advance." },
            { q: "Where do I pick up the keys?", a: "Our team will greet you at the riad entrance. For late arrivals, please let us know your estimated arrival time so we can ensure someone is there to welcome you." },
            { q: "Can I leave luggage before check-in or after check-out?", a: "Yes, we're happy to store your luggage on the day of arrival before your room is ready, or on the day of departure after check-out." },
          ],
        },
        {
          category: "Rooms & Amenities",
          items: [
            { q: "Is Wi-Fi available?", a: "Yes, complimentary high-speed Wi-Fi is included throughout both riads. Connection details are provided at check-in." },
            { q: "Is there air conditioning?", a: "All rooms are equipped with air conditioning and heating, ensuring comfort year-round in Marrakech's varying climate." },
          ],
        },
        {
          category: "Services",
          items: [
            { q: "What does breakfast include?", a: "We serve a traditional Moroccan breakfast daily in the courtyard from 8:00 AM to 10:30 AM — tea, coffee, Moroccan pancakes, cheese, jam, honey, butter, fruit salad, fresh orange juice, bread, cake, cherry tomatoes, cucumber, black olives, and eggs to order. The menu varies daily. An express breakfast is available for early departures (request it the night before). Gluten-free cannot be guaranteed — we recommend bringing your own gluten-free products." },
            { q: "Is there a pool?", a: "Riad 141 has a small plunge pool in the garden courtyard, available to all guests staying at either property." },
            { q: "How do I book the hammam?", a: "The spa is open 9:00 AM – 9:00 PM. The hammam is €20/person with a minimum of 2 people; massages are 30 min €30 or 60 min €40. Reserve at least 2 hours in advance via WhatsApp or your AI concierge." },
          ],
        },
        {
          category: "Excursions",
          items: [
            { q: "How do I book an excursion?", a: "You can request any excursion through your AI concierge or via WhatsApp. We recommend booking at least 24 hours in advance for day trips." },
            { q: "What is the cancellation policy?", a: "Cancellation is free up to 14 days before your arrival. For any changes after that, please contact our team via WhatsApp." },
            { q: "Can you arrange custom private tours?", a: "Absolutely. We work with expert local guides and private drivers to create bespoke experiences. Contact us with your interests and we'll design something special." },
          ],
        },
        {
          category: "AI Concierge",
          items: [
            { q: "What can the AI concierge help me with?", a: "Your AI concierge can answer questions about your room, riad facilities, breakfast times, local recommendations, excursion booking requests, check-in/check-out times, and much more. It's available 24/7." },
            { q: "What languages does the concierge speak?", a: "The AI concierge automatically detects and responds in your language. It supports English, French, Arabic, Spanish, German, Italian, and many more." },
            { q: "Are my conversations private?", a: "Yes. Your chat messages are processed securely and are not shared with third parties. Please see our Privacy Policy for full details." },
            { q: "Can the AI concierge make actual bookings?", a: "Currently the concierge provides information and can relay requests to our team. For confirmed bookings (excursions, hammam, transfers), our staff will follow up to finalise the details." },
          ],
        },
      ],
    },
    howItWorksPage: {
      gettingStarted: "Getting Started",
      subtitle: "From booking to chatting with your AI concierge in four simple steps.",
      whyItMatters: "Why It Matters",
      aSmarterStay: "A Smarter Stay",
      ready: "Ready?",
      startExperience: "Start Your Experience",
      ctaDesc: "Create your free account in under a minute.",
      steps: [
        { title: "Book Your Stay", desc: "Reserve your room at Riad Dar D'Art through our website, Booking.com, or Airbnb." },
        { title: "Create Your Account", desc: "Sign up for free in under a minute — just your name, email, phone number, and the riad you're staying at." },
        { title: "Explore Your Guest Portal", desc: "Find everything about your stay in one place — your rooms, services, excursions, and practical information." },
        { title: "Chat 24/7", desc: "Your AI concierge is available around the clock. Ask anything — breakfast times, excursion bookings, local tips, and more." },
      ],
      benefits: [
        { title: "Available 24/7", desc: "No waiting for the front desk. Get answers to your questions at any hour, day or night." },
        { title: "Multilingual", desc: "The concierge automatically responds in your language — English, French, Arabic, Spanish, and more." },
        { title: "Personalized", desc: "Knows your riad, your rooms, and your services. Answers are specific to Dar D'Art, not generic." },
      ],
    },
    privacyPage: {
      legal: "Legal",
      title: "Privacy Policy",
      intro: "Riad Dar D'Art (“we”, “us”, or “our”) operates this guest concierge platform (dar-dart-saas.vercel.app). This Privacy Policy describes how we collect, use, and protect your personal information when you use our service.",
      sections: [
        {
          title: "1. Information We Collect",
          body: `When you create an account and use the Dar D'Art concierge platform, we collect the following information:

**Account information:** Your name, email address, phone number, chosen riad, and preferred language, provided during registration.

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

Concierge conversation history is retained for the duration of your stay and for up to 12 months afterwards to improve service quality, after which it may be deleted. You may request deletion of your chat history at any time by contacting us.`,
        },
        {
          title: "4. Third-Party Services",
          body: `Our concierge service runs on WhatsApp. Conversations with our WhatsApp concierge are processed by our automation system and an AI provider (Anthropic) to answer your questions. Anthropic processes this data in accordance with its own privacy policy. Conversation history is stored to improve the quality and accuracy of responses.

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
      ],
    },
    termsPage: {
      legal: "Legal",
      title: "Terms of Service",
      intro: "These Terms of Service govern your use of the Dar D'Art guest concierge platform operated by Riad Dar D'Art, located at 19 Derb Zemrane, Marrakech, Morocco. Please read these terms carefully before using our service.",
      sections: [
        {
          title: "1. Acceptance of Terms",
          body: `By creating an account and using the Dar D'Art guest concierge platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.

These terms may be updated from time to time. Continued use of the service after changes constitutes acceptance of the revised terms.`,
        },
        {
          title: "2. The Service",
          body: `The platform is a free information and concierge companion for guests of Riad Dar D'Art. Registration is open — anyone planning or enjoying a stay with us can create an account.

By registering, you confirm that the information you provide (name, email, phone number) is accurate and your own.`,
        },
        {
          title: "3. Use of the Service",
          body: `You agree to use the platform only for lawful purposes and in a manner consistent with these terms. You must not:

- Use the service to transmit harmful, offensive, or illegal content
- Attempt to reverse-engineer, hack, or disrupt the platform
- Share your account credentials with others
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
          title: "5. User Accounts",
          body: `You are responsible for maintaining the confidentiality of your account credentials. You must notify us immediately if you suspect unauthorised access to your account.

Accounts are personal and may not be shared. We may deactivate accounts after the end of your stay in line with our data retention policy.`,
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
      ],
    },
  },

  fr: {
    nav: {
      howItWorks: "Comment ça marche",
      about: "À propos",
      faq: "FAQ",
      contact: "Contact",
      signIn: "Connexion",
      signUp: "S'inscrire",
      navigate: "Navigation",
      legal: "Mentions légales",
    },
    hero: {
      location: "Marrakech, Maroc",
      title: "Riad Dar D'Art",
      tagline: "Votre retraite de luxe au cœur de Marrakech",
      exploreRooms: "Découvrir les chambres",
      contactUs: "Nous contacter",
      scroll: "Défiler",
    },
    about: {
      label: "Notre Histoire",
      heading: "Un Patrimoine Vivant dans la Médina",
      body: "Nichée dans les murs anciens de la médina de Marrakech, Riad Dar D'Art est un sanctuaire d'art marocain, d'architecture et d'hospitalité intemporelle. Nous gérons deux propriétés magnifiquement restaurées :",
      and: "et",
      each: "— chacune témoignant de siècles de savoir-faire andalou. Des cours en mosaïque, des arches en cèdre sculptées à la main et le parfum de fleur d'oranger vous accueillent dans un monde à part, à quelques pas de l'âme vibrante de la ville.",
    },
    rooms: {
      label: "Hébergement",
      heading: "Chambres & Suites",
      suite: "Suite",
      viewRoom: "Voir la chambre",
    },
    services: {
      label: "Équipements",
      heading: "Services & Installations",
    },
    excursions: {
      label: "Expériences",
      heading: "Excursions Sélectionnées",
      inquire: "Renseignez-vous",
    },
    contact: {
      label: "Contactez-nous",
      heading: "Contact & Réservations",
      viewOnMap: "Voir sur la carte →",
      whatsapp: "WhatsApp",
      emailUs: "Nous écrire",
    },
    footer: {
      tagline: "Une expérience de riad de luxe au cœur de la médina de Marrakech, guidée par un concierge IA toujours disponible.",
      navigate: "Navigation",
      legal: "Mentions légales",
      contact: "Contact",
      copyright: "© 2026 Riad Dar D'Art — Marrakech, Maroc",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
    signIn: {
      conciergeAwaits: "Votre concierge personnel vous attend",
      heading: "Bon Retour",
      email: "E-mail",
      password: "Mot de passe",
      forgotPassword: "Mot de passe oublié ?",
      submit: "Connexion",
      signingIn: "Connexion en cours…",
      continueWithGoogle: "Continuer avec Google",
      or: "ou",
      noAccount: "Nouveau client ?",
      createAccount: "Créer un compte →",
      backHome: "← Retour à l'accueil",
      resetHeading: "Réinitialiser votre mot de passe",
      resetDesc: "Saisissez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.",
      sendResetLink: "Envoyer le lien",
      resetEmailSent: "Vérifiez votre boîte de réception — nous vous avons envoyé un lien de réinitialisation.",
      newPassword: "Nouveau mot de passe",
      confirmPassword: "Confirmer le mot de passe",
      updatePassword: "Mettre à jour le mot de passe",
      passwordUpdated: "Mot de passe mis à jour. Redirection vers votre tableau de bord…",
      passwordMismatch: "Les mots de passe ne correspondent pas.",
      passwordTooShort: "Le mot de passe doit contenir au moins 6 caractères.",
      backToSignIn: "← Retour à la connexion",
    },
    signUp: {
      conciergeAwaits: "Votre concierge personnel vous attend",
      heading: "Créer votre compte",
      subheading: "Créez votre compte invité gratuit pour accéder à votre concierge personnel.",
      firstName: "Prénom",
      lastName: "Nom",
      nameOnReservation: "Nom de la réservation",
      namePlaceholder: "Entrez le nom utilisé pour votre réservation",
      email: "E-mail",
      password: "Mot de passe",
      phone: "Numéro de téléphone",
      phonePlaceholder: "Avec l'indicatif du pays, ex. +33 6 12 34 56 78",
      phoneRequired: "Veuillez saisir votre numéro de téléphone.",
      whichRiad: "Dans quel riad séjournez-vous ?",
      language: "Langue préférée",
      languageRequired: "Veuillez sélectionner votre langue pour continuer.",
      riadRequired: "Veuillez sélectionner votre riad pour continuer.",
      terms: "J'accepte les",
      termsLink: "Conditions d'utilisation",
      and: "et la",
      privacyLink: "Politique de confidentialité",
      submit: "Créer le compte",
      creatingAccount: "Création du compte…",
      signUpWithGoogle: "S'inscrire avec Google",
      or: "ou",
      haveAccount: "Vous avez déjà un compte ?",
      signIn: "Connexion →",
      backHome: "← Retour à l'accueil",
      signUpFailedDefault: "Échec de l'inscription. Veuillez réessayer.",
      profileSetupFailed: "Compte créé mais la configuration du profil a échoué. Veuillez contacter le support.",
      phoneInvalid: "Veuillez saisir votre numéro de téléphone complet avec l'indicatif du pays (ex. +212 6XX XXX XXX ou +33 6 XX XX XX XX).",
      confirmEmail: "Presque terminé ! Vérifiez votre boîte de réception et confirmez votre adresse e-mail pour activer votre compte.",
    },
    dashboard: {
      aiConcierge: "Concierge IA",
      welcome: "Bienvenue au",
      fallback: "Bienvenue au Riad Dar D'Art",
      howCanIHelp: "Comment puis-je vous aider ?",
      signOut: "Déconnexion",
      welcomeGuest: "Bienvenue, Invité",
      poweredBy: "Propulsé par Claude AI · Les réponses sont à titre informatif uniquement",
      quickPrompts: [
        "À quelle heure est le petit-déjeuner ?",
        "Réserver une excursion",
        "Service en chambre",
        "Quelles excursions proposez-vous ?",
        "À quelle heure est le départ ?",
      ],
      guestPortal: "Votre portail d'accueil personnalisé",
      welcomeBack: "Content de vous revoir",
      yourStay: "Votre séjour au",
      checkOut: "Départ",
      accommodation: "Votre hébergement",
      includedInStay: "Inclus dans votre séjour",
      servicesAmenities: "Services & Équipements",
      marrakechBeyond: "Marrakech & Alentours",
      excursionsHeading: "Excursions",
      goodToKnow: "Bon à savoir",
      importantInfo: "Informations importantes",
      endOfStay: "Fin du séjour",
      enjoyedStay: "Vous avez apprécié votre séjour ?",
      checkoutDesc: "Nous serions ravis de vous entendre. Faites votre départ et laissez-nous un avis pour aider les futurs voyageurs à découvrir Dar D'Art.",
      checkoutReview: "Départ & Laisser un avis",
      stayEnded: "Votre séjour est terminé",
      stayEndedThanks: "Merci de votre séjour parmi nous",
      backToHome: "Retour à l'accueil",
      bookViaWhatsApp: "Réserver via WhatsApp",
      whatsappMessages: {
        hammam: "Bonjour, je souhaite réserver un Hammam & Spa",
        airportTransfer: "Bonjour, je souhaite réserver un transfert aéroport",
        dinner: "Bonjour, je souhaite réserver un dîner au riad",
        agafay: "Bonjour, je souhaite réserver l'excursion désert d'Agafay",
        ourikaValley: "Bonjour, je souhaite réserver l'excursion vallée de l'Ourika",
        essaouira: "Bonjour, je souhaite réserver l'excursion d'une journée à Essaouira",
        cityTour: "Bonjour, je souhaite réserver une journée guidée en ville",
      },
      services: {
        breakfast: {
          name: "Petit-déjeuner",
          detail: "8h00 – 10h30 · Inclus",
          desc: "Petit-déjeuner marocain traditionnel dans la cour en plein air. Thé, café, crêpes marocaines, jus d'orange frais, fromage, miel et œufs sur demande. Petit-déjeuner express disponible pour les départs matinaux.",
        },
        hammam: {
          name: "Hammam & Spa",
          detail: "20€/personne · Min 2 personnes",
          desc: "Rituel hammam authentique avec gommage et savon à l'argan. Massage : 30 min 30€ · 60 min 40€. Ouvert de 9h00 à 21h00 — réservez au moins 2 heures à l'avance via WhatsApp.",
        },
        pool: {
          name: "Piscine",
          detail: "Gratuit · Serviettes fournies",
          desc: "Détendez-vous dans notre piscine privée dans la cour. Les serviettes sont fournies — veuillez vous doucher avant d'entrer.",
        },
        airportTransfer: {
          name: "Transfert aéroport",
          detail: "20€ (1–4, 7h–22h) · 25€ (1–4, 23h–6h) · 30€ (5–7)",
          desc: "Transferts privés climatisés. Réservez via WhatsApp au moins 2h30 avant votre vol.",
        },
        wifi: {
          name: "WiFi",
          detail: "Inclus",
          desc: "WiFi haut débit gratuit dans tout le riad. Les informations de connexion sont fournies à l'arrivée.",
        },
        concierge: {
          name: "Conciergerie",
          detail: "WhatsApp +212 709 086 496 · 8h00–22h00",
          desc: "Notre équipe de réception est disponible tous les jours de 8h00 à 22h00 pour organiser tout ce dont vous avez besoin — des réservations de restaurants aux excursions. Le concierge IA de l'application est disponible 24h/24.",
        },
      },
      info: {
        checkIn: { label: "Arrivée", value: "14h00", sub: "Arrivée possible dès 10h30" },
        checkOut: { label: "Départ", value: "12h00", sub: "Tardif possible sur demande" },
        dinner: { label: "Dîner au Riad", value: "20€/personne", sub: "Min 4 personnes · Enfants <12 ans 12€, <4 ans gratuit · Réservez 1 jour à l'avance" },
        water: { label: "Eau", value: "20 dirhams", sub: "Par bouteille · Cuisine disponible" },
      },
      excursionsList: {
        agafay: { subtitle: "Quad · Chameau · Dîner · Spectacle de feu", price: "Pack A 30 € · Pack B 55 €" },
        "ourika-valley": { subtitle: "Atlas · Cascades · Villages berbères · 9h00–17h00", price: "20 € · 27 € avec repas" },
        essaouira: { subtitle: "Médina UNESCO · Côte atlantique · 8h00–20h00", price: "25 € / personne" },
        "city-tour": { subtitle: "Médina · Souks · Lieux cachés", price: "65 € / groupe (1–4 personnes)" },
      },
    },
    survey: {
      checkOut: "Départ",
      howWasStay: "Comment était votre séjour,",
      overallRating: "Séjour global",
      roomsRating: "Chambres",
      foodRating: "Nourriture",
      staffRating: "Personnel",
      cleanlinessRating: "Propreté",
      conciergeRating: "Concierge IA",
      comments: "Des commentaires ?",
      optional: "(optionnel)",
      commentsPlaceholder: "Parlez-nous de votre expérience…",
      cancel: "Annuler",
      submitting: "Envoi en cours…",
      complete: "Finaliser le départ",
      thankYou: "Merci,",
      farewellTitle: "Merci d'avoir séjourné chez nous ! ✨",
      farewellMessage: "Regardez votre WhatsApp — nous vous avons envoyé un petit mot d'adieu.",
      alreadyCheckedOut: "Votre départ a déjà été enregistré — merci encore pour votre séjour. Nous espérons vous revoir bientôt !",
      signingOut: "Déconnexion en cours…",
      pleaseRate: "Veuillez noter",
      beforeSubmitting: "avant de soumettre.",
      sessionExpired: "Session expirée. Veuillez vous reconnecter.",
      failedToSubmit: "Échec de l'envoi du questionnaire. Veuillez réessayer.",
      checkoutFailed: "Une erreur s'est produite lors du départ. Vous n'avez pas été déconnecté — veuillez réessayer.",
      phoneInvalid: "Veuillez saisir dans votre profil votre numéro de téléphone complet avec l'indicatif du pays (ex. +212 6XX XXX XXX ou +33 6 XX XX XX XX), puis réessayez.",
      retry: "Réessayer",
    },
    concierge: {
      title: "Votre Concierge Personnel",
      subtitle: "Une question ? Une réservation ? Écrivez-nous sur WhatsApp — nous vous répondons dans votre langue, 24h/24 et 7j/7.",
      chatButton: "Discuter sur WhatsApp",
      fabLabel: "Discuter avec nous sur WhatsApp",
      prefill: "Bonjour ! Je suis client au Riad Dar D'Art et j'ai une question.",
    },
    common: {
      loading: "Chargement…",
      close: "Fermer",
      success: "Succès",
      toggleMenu: "Afficher/masquer le menu",
      logout: "Déconnexion",
      lastUpdated: "Dernière mise à jour : juin 2026",
      cityLine: "Médina de Marrakech 40000, Maroc",
    },
    home: {
      riad19Intro: "Niché au cœur de la médina de Marrakech, le Riad Dar D'Art 19 est situé au 19 Derb Zemrane, Bab Doukkala. Un sanctuaire d'art marocain, d'architecture et d'hospitalité intemporelle.",
      riad141Intro: "Niché au cœur de la médina de Marrakech, le Riad Dar D'Art 141 est situé au 141 Derb Arset Aouzal, Bab Doukkala. Un sanctuaire d'art marocain, d'architecture et d'hospitalité intemporelle.",
      signInForRooms: "Connectez-vous pour voir les chambres de votre riad",
      rooms19: {
        terrasseLulu: "Une suite charmante avec une terrasse privée surplombant la cour de la fontaine, alliant zellige traditionnel et confort moderne.",
        africa: "Des tons chauds et terreux, des plafonds en cèdre sculpté et une décoration chaleureuse d'inspiration africaine créent une retraite inoubliable.",
        gazelle: "Notre spacieuse suite familiale avec mosaïques zellige d'origine, linge de qualité supérieure et de la place pour toute la famille.",
        frida: "Une retraite vibrante et artistique inspirée de couleurs audacieuses et d'un esprit créatif, avec accès direct au jardin.",
        rosa: "Un sanctuaire serein aux tons roses doux, avec sols en zellige et vue sur la fontaine de la cour intérieure.",
      },
      rooms141: {
        lexicon: "Une suite d'inspiration littéraire aux tons ambrés chaleureux, murs en plâtre peints à la main et lit à baldaquin drapé de textiles berbères.",
        mategot: "Murs en tadelakt bleu nuit, lanternes en laiton et coin salon privé dans la cour, inspirés du design marocain du milieu du siècle.",
        chevrerie: "Baignée de lumière naturelle, cette suite allie charme rustique, accès au toit-terrasse et baignoire hammam traditionnelle.",
        poupee: "Un chef-d'œuvre de mosaïque — carreaux taillés à la main du sol au plafond et lit king-size en cèdre sculpté dans un cadre fantaisiste.",
        zagora: "Évocatrice du sud désertique, avec des teintes chaudes de grès, des motifs géométriques et une terrasse privée.",
      },
      excursionsList: {
        agafayExpress: { name: "Désert d'Agafay — Pack A Express", desc: "Quad (40 min), balade à dos de chameau (10 min), dîner, spectacle de feu, piscine et transport inclus.", price: "30 € / personne" },
        agafayFull: { name: "Désert d'Agafay — Pack B Expérience Complète", desc: "Quad (1 h), balade à dos de chameau (20 min), dîner, spectacle de feu, piscine et transport inclus.", price: "55 € / personne" },
        essaouira: { name: "Journée à Essaouira", desc: "Une journée complète sur la côte atlantique — médina classée UNESCO, port et remparts. Départ 8h00, retour 20h00.", price: "25 € / personne" },
        ourika: { name: "Vallée de l'Ourika", desc: "Montagnes de l'Atlas, cascades et villages berbères. Départ 9h00, retour 17h00. 27 € avec repas inclus.", price: "À partir de 20 € / personne" },
        cityDay: { name: "Journée guidée en ville", desc: "Une journée complète à Marrakech avec un guide local expert — médina, souks et lieux cachés.", price: "65 € / groupe (1–4)" },
      },
      servicesList: {
        breakfast: { name: "Petit-déjeuner", desc: "Petit-déjeuner marocain traditionnel servi chaque jour dans la cour en plein air." },
        hammamSpa: { name: "Hammam & Spa", desc: "Rituels de hammam authentiques et soins de spa revitalisants sur place." },
        airportTransfer: { name: "Transfert aéroport", desc: "Transferts privés climatisés disponibles 24h/24 jusqu'à votre porte." },
        rooftopTerrace: { name: "Terrasse sur le toit", desc: "Toit-terrasse exclusif avec vue panoramique sur la médina de Marrakech." },
        highSpeedWifi: { name: "WiFi haut débit", desc: "Internet haut débit gratuit dans les deux riads." },
        concierge: { name: "Conciergerie", desc: "Un concierge dédié pour organiser chaque détail de votre séjour." },
      },
    },
    completeProfile: {
      heading: "Complétez votre profil",
      saving: "Enregistrement…",
      continueToDashboard: "Continuer vers le tableau de bord",
      saveFailed: "Échec de l'enregistrement du profil. Veuillez réessayer.",
      phone: "Numéro de téléphone",
      phonePlaceholder: "Avec l'indicatif du pays, ex. +33 6 12 34 56 78",
      phoneRequired: "Veuillez saisir votre numéro de téléphone.",
    },
    aboutPage: {
      ourStory: "Notre Histoire",
      title: "À propos de Dar D'Art",
      heritageLabel: "Patrimoine",
      heading: "Un Fragment Vivant de Marrakech",
      intro: "Nichée dans les murs anciens de la médina de Marrakech, Riad Dar D'Art est un sanctuaire d'art marocain, d'architecture et d'hospitalité intemporelle. Le nom signifie « Maison de l'Art » — et chaque recoin de la propriété reflète cette identité.",
      riad19Welcome: "Nous sommes ravis de vous accueillir au Riad Dar D'Art 19, situé au 19 Derb Zemrane, Bab Doukkala. Un témoignage de siècles de savoir-faire andalou — cours en mosaïque, arches en cèdre sculptées à la main et parfum de fleur d'oranger.",
      riad141Welcome: "Nous sommes ravis de vous accueillir au Riad Dar D'Art 141, situé au 141 Derb Arset Aouzal, Bab Doukkala. Un témoignage de siècles de savoir-faire andalou — cours en mosaïque, arches en cèdre sculptées à la main et parfum de fleur d'oranger.",
      bothWelcome: "Nous gérons deux propriétés magnifiquement restaurées : Riad 19 au 19 Derb Zemrane et Riad 141 au 141 Derb Arset Aouzal. Chacune témoigne de siècles de savoir-faire andalou — cours en mosaïque, arches en cèdre sculptées à la main et parfum de fleur d'oranger.",
      mission: "Notre mission est d'offrir à nos hôtes une expérience marocaine authentique sans sacrifier le confort moderne. C'est pourquoi nous avons créé un concierge propulsé par l'IA qui offre un service de luxe à chaque hôte, à toute heure.",
      whatWeStandFor: "Ce que nous défendons",
      ourValues: "Nos Valeurs",
      values: {
        hospitality: { title: "Hospitalité", desc: "Chaque hôte est accueilli comme un visiteur précieux. Notre philosophie du « dar » — qui signifie maison — guide chaque interaction." },
        authenticity: { title: "Authenticité", desc: "Mosaïques zellige d'origine, cèdre sculpté à la main et recettes traditionnelles préservées à travers les générations. Rien ici n'est une réplique." },
        innovation: { title: "Innovation", desc: "Nous mêlons des siècles de tradition au confort moderne — y compris un concierge IA qui parle votre langue et connaît votre séjour." },
      },
      theProperties: "Les Propriétés",
      yourRiad: "Votre Riad",
      twoRiads: "Deux Riads, Une Âme",
      riad19Desc: "La propriété d'origine, avec cinq suites intimistes disposées autour d'une cour à fontaine en mosaïque. Réputée pour ses carreaux d'origine du XVIIe siècle et sa terrasse sur le toit offrant une vue panoramique sur la médina.",
      riad141Desc: "Un riad magnifiquement restauré avec cinq chambres et suites uniques, un hammam privé et un jardin intérieur luxuriant planté de jasmin et d'orangers. Parfait pour les familles et les groupes.",
      experienceItYourself: "Vivez l'Expérience",
      ctaDesc: "Prêt à séjourner chez nous ? Contactez-nous ou découvrez nos chambres.",
      viewRooms: "Voir les chambres",
    },
    contactPage: {
      reachOut: "Contactez-nous",
      ourLocations: "Nos Adresses",
      directContact: "Contact Direct",
      whatsappLabel: "WhatsApp : +212 709 086 496",
      hours: "Horaires",
      deskHours: "Réception ouverte tous les jours, 08h00 – 22h00",
      conciergeAvailable: "Concierge IA disponible 24h/24 via",
      chatOnWhatsApp: "Discuter sur WhatsApp",
      whatsappDesc: "Le moyen le plus rapide de nous joindre — questions, réservations et tout ce qui concerne votre séjour.",
      whatsappPrefill: "Bonjour ! J'ai une question à propos du Riad Dar D'Art",
    },
    faqPage: {
      helpSupport: "Aide & Assistance",
      title: "Foire Aux Questions",
      stillHaveQuestions: "Encore des Questions ?",
      chatWithConcierge: "Discutez avec Notre Concierge IA",
      ctaDesc: "Votre concierge personnel est disponible 24h/24 et parle votre langue.",
      openConcierge: "Ouvrir le Concierge",
      categories: [
        {
          category: "Arrivée & Départ",
          items: [
            { q: "À quelle heure sont l'arrivée et le départ ?", a: "L'arrivée est possible dès 10h30 (nous gardons vos bagages) ; les chambres sont prêtes à partir de 14h00. Le départ se fait avant 12h00. Une arrivée anticipée ou un départ tardif peuvent être organisés selon disponibilité — demandez simplement à votre concierge IA ou contactez-nous à l'avance." },
            { q: "Où puis-je récupérer les clés ?", a: "Notre équipe vous accueillera à l'entrée du riad. Pour les arrivées tardives, merci de nous indiquer votre heure d'arrivée estimée afin que quelqu'un soit présent pour vous accueillir." },
            { q: "Puis-je laisser mes bagages avant l'arrivée ou après le départ ?", a: "Oui, nous sommes heureux de conserver vos bagages le jour de votre arrivée avant que votre chambre soit prête, ou le jour de votre départ après le check-out." },
          ],
        },
        {
          category: "Chambres & Équipements",
          items: [
            { q: "Le Wi-Fi est-il disponible ?", a: "Oui, le Wi-Fi haut débit gratuit est inclus dans les deux riads. Les informations de connexion sont fournies à l'arrivée." },
            { q: "Y a-t-il la climatisation ?", a: "Toutes les chambres sont équipées de climatisation et de chauffage, garantissant un confort toute l'année malgré le climat variable de Marrakech." },
          ],
        },
        {
          category: "Services",
          items: [
            { q: "Que comprend le petit-déjeuner ?", a: "Nous servons un petit-déjeuner marocain traditionnel chaque jour dans la cour, de 8h00 à 10h30 — thé, café, crêpes marocaines, fromage, confiture, miel, beurre, salade de fruits, jus d'orange frais, pain, cake, tomates cerises, concombre, olives noires et œufs à la demande. Le menu varie chaque jour. Un petit-déjeuner express est disponible pour les départs matinaux (à demander la veille). Le sans-gluten ne peut pas être garanti — nous vous recommandons d'apporter vos propres produits." },
            { q: "Y a-t-il une piscine ?", a: "Le Riad 141 dispose d'une petite piscine dans la cour du jardin, accessible à tous les hôtes séjournant dans l'une ou l'autre des propriétés." },
            { q: "Comment réserver le hammam ?", a: "Le spa est ouvert de 9h00 à 21h00. Le hammam est à 20 €/personne avec un minimum de 2 personnes ; les massages sont à 30 € (30 min) ou 40 € (60 min). Réservez au moins 2 heures à l'avance via WhatsApp ou votre concierge IA." },
          ],
        },
        {
          category: "Excursions",
          items: [
            { q: "Comment réserver une excursion ?", a: "Vous pouvez demander n'importe quelle excursion via votre concierge IA ou via WhatsApp. Nous recommandons de réserver au moins 24 heures à l'avance pour les excursions d'une journée." },
            { q: "Quelle est la politique d'annulation ?", a: "L'annulation est gratuite jusqu'à 14 jours avant votre arrivée. Pour toute modification après ce délai, veuillez contacter notre équipe via WhatsApp." },
            { q: "Pouvez-vous organiser des visites privées sur mesure ?", a: "Absolument. Nous travaillons avec des guides locaux experts et des chauffeurs privés pour créer des expériences sur mesure. Contactez-nous avec vos envies et nous concevrons quelque chose de spécial." },
          ],
        },
        {
          category: "Concierge IA",
          items: [
            { q: "Avec quoi le concierge IA peut-il m'aider ?", a: "Votre concierge IA peut répondre à des questions sur votre chambre, les installations du riad, les horaires du petit-déjeuner, des recommandations locales, des demandes de réservation d'excursions, les horaires d'arrivée/départ, et bien plus. Il est disponible 24h/24." },
            { q: "Quelles langues parle le concierge ?", a: "Le concierge IA détecte automatiquement votre langue et y répond. Il prend en charge l'anglais, le français, l'arabe, l'espagnol, l'allemand, l'italien et bien d'autres." },
            { q: "Mes conversations sont-elles privées ?", a: "Oui. Vos messages de chat sont traités de manière sécurisée et ne sont pas partagés avec des tiers. Consultez notre Politique de Confidentialité pour tous les détails." },
            { q: "Le concierge IA peut-il effectuer de réelles réservations ?", a: "Actuellement, le concierge fournit des informations et peut transmettre des demandes à notre équipe. Pour les réservations confirmées (excursions, hammam, transferts), notre personnel vous recontactera pour finaliser les détails." },
          ],
        },
      ],
    },
    howItWorksPage: {
      gettingStarted: "Pour Commencer",
      subtitle: "De la réservation à la conversation avec votre concierge IA en quatre étapes simples.",
      whyItMatters: "Pourquoi C'est Important",
      aSmarterStay: "Un Séjour Plus Intelligent",
      ready: "Prêt ?",
      startExperience: "Démarrez Votre Expérience",
      ctaDesc: "Créez votre compte gratuit en moins d'une minute.",
      steps: [
        { title: "Réservez Votre Séjour", desc: "Réservez votre chambre au Riad Dar D'Art via notre site web, Booking.com ou Airbnb." },
        { title: "Créez Votre Compte", desc: "Inscrivez-vous gratuitement en moins d'une minute — juste votre nom, votre e-mail, votre numéro de téléphone et le riad où vous séjournez." },
        { title: "Explorez Votre Portail Invité", desc: "Retrouvez tout votre séjour au même endroit — vos chambres, les services, les excursions et les informations pratiques." },
        { title: "Discutez 24h/24", desc: "Votre concierge IA est disponible à toute heure. Demandez tout — horaires du petit-déjeuner, réservations d'excursions, conseils locaux, et plus encore." },
      ],
      benefits: [
        { title: "Disponible 24h/24", desc: "Plus besoin d'attendre à la réception. Obtenez des réponses à vos questions à toute heure, jour et nuit." },
        { title: "Multilingue", desc: "Le concierge répond automatiquement dans votre langue — anglais, français, arabe, espagnol, et plus encore." },
        { title: "Personnalisé", desc: "Connaît votre riad, vos chambres et vos services. Les réponses sont spécifiques à Dar D'Art, pas génériques." },
      ],
    },
    privacyPage: {
      legal: "Mentions légales",
      title: "Politique de Confidentialité",
      intro: "Riad Dar D'Art (« nous », « notre » ou « nos ») exploite cette plateforme de conciergerie invité (dar-dart-saas.vercel.app). Cette Politique de Confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre service.",
      sections: [
        {
          title: "1. Informations que nous collectons",
          body: `Lorsque vous créez un compte et utilisez la plateforme de conciergerie Dar D'Art, nous collectons les informations suivantes :

**Informations du compte :** votre nom, votre adresse e-mail, votre numéro de téléphone, le riad choisi et votre langue préférée, fournis lors de l'inscription.

**Messages de chat :** le texte de vos conversations avec le concierge IA. Ils sont utilisés pour générer des réponses et améliorer la qualité du service.

**Données d'utilisation :** analyses de base telles que les pages visitées et la durée de session. Ces données sont agrégées et anonymisées.`,
        },
        {
          title: "2. Comment nous utilisons vos informations",
          body: `Nous utilisons les informations collectées pour :

- Fournir et exploiter le service de concierge IA
- Authentifier votre compte et vérifier votre statut d'hôte
- Traiter vos demandes au concierge et transmettre les demandes de réservation à notre équipe
- Améliorer la précision et la pertinence des réponses de l'IA
- Communiquer avec vous au sujet de votre séjour ou de votre compte

Nous ne vendons pas vos données personnelles à des tiers.`,
        },
        {
          title: "3. Conservation des données",
          body: `Les données de compte sont conservées pendant la durée de votre séjour plus 90 jours, après quoi elles sont définitivement supprimées, sauf demande de suppression anticipée de votre part.

L'historique des conversations avec le concierge est conservé pendant la durée de votre séjour et jusqu'à 12 mois après, afin d'améliorer la qualité du service, après quoi il peut être supprimé. Vous pouvez demander la suppression de votre historique de chat à tout moment en nous contactant.`,
        },
        {
          title: "4. Services tiers",
          body: `Notre service de conciergerie fonctionne sur WhatsApp. Les conversations avec notre concierge WhatsApp sont traitées par notre système d'automatisation et un fournisseur d'IA (Anthropic) afin de répondre à vos questions. Anthropic traite ces données conformément à sa propre politique de confidentialité. L'historique des conversations est conservé afin d'améliorer la qualité et la précision des réponses.

Notre plateforme est hébergée sur Vercel. Vos données sont stockées et traitées conformément aux conditions de traitement des données de Vercel.`,
        },
        {
          title: "5. Vos droits",
          body: `En vertu du RGPD et des lois applicables sur la protection des données, vous avez le droit de :

- **Accéder** aux données personnelles que nous détenons à votre sujet
- **Corriger** les données inexactes ou incomplètes
- **Supprimer** votre compte et vos données personnelles
- **Vous opposer** au traitement de vos données
- **Portabilité** — demander une copie de vos données dans un format lisible par machine

Pour exercer l'un de ces droits, veuillez nous contacter à contact@riaddartmarrakech.com. Nous répondrons dans un délai de 30 jours.`,
        },
        {
          title: "6. Cookies",
          body: `Nous n'utilisons que des cookies essentiels nécessaires pour vous maintenir connecté et conserver votre session. Nous n'utilisons pas de cookies publicitaires ni de cookies de suivi tiers.`,
        },
        {
          title: "7. Sécurité",
          body: `Nous mettons en œuvre des mesures de sécurité conformes aux normes du secteur pour protéger vos données, notamment la transmission de données chiffrées (HTTPS) et le hachage sécurisé des mots de passe. Cependant, aucune méthode de transmission sur Internet n'est fiable à 100 %.`,
        },
        {
          title: "8. Contact pour les questions de confidentialité",
          body: `Si vous avez des questions concernant cette Politique de Confidentialité ou la manière dont nous traitons vos données, veuillez nous contacter :

**E-mail :** contact@riaddartmarrakech.com
**Adresse :** 19 Derb Zemrane, Médina de Marrakech 40000, Maroc`,
        },
      ],
    },
    termsPage: {
      legal: "Mentions légales",
      title: "Conditions d'Utilisation",
      intro: "Ces Conditions d'Utilisation régissent votre utilisation de la plateforme de conciergerie invité Dar D'Art exploitée par Riad Dar D'Art, situé au 19 Derb Zemrane, Marrakech, Maroc. Veuillez lire attentivement ces conditions avant d'utiliser notre service.",
      sections: [
        {
          title: "1. Acceptation des conditions",
          body: `En créant un compte et en utilisant la plateforme de conciergerie invité Dar D'Art, vous acceptez d'être lié par ces Conditions d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le service.

Ces conditions peuvent être mises à jour de temps à autre. L'utilisation continue du service après modification constitue une acceptation des conditions révisées.`,
        },
        {
          title: "2. Le Service",
          body: `La plateforme est un compagnon d'information et de conciergerie gratuit pour les hôtes du Riad Dar D'Art. L'inscription est ouverte — toute personne préparant ou effectuant un séjour chez nous peut créer un compte.

En vous inscrivant, vous confirmez que les informations que vous fournissez (nom, e-mail, numéro de téléphone) sont exactes et vous appartiennent.`,
        },
        {
          title: "3. Utilisation du Service",
          body: `Vous acceptez d'utiliser la plateforme uniquement à des fins légales et d'une manière conforme à ces conditions. Vous ne devez pas :

- Utiliser le service pour transmettre du contenu nuisible, offensant ou illégal
- Tenter de désassembler, pirater ou perturber la plateforme
- Partager vos identifiants de compte avec d'autres personnes
- Utiliser le service d'une manière susceptible de nuire à la réputation de Riad Dar D'Art`,
        },
        {
          title: "4. Limites du Concierge IA",
          body: `Le concierge IA fournit des réponses informatives basées sur des connaissances générales sur Riad Dar D'Art et Marrakech. Ses réponses :

- Sont fournies à titre informatif uniquement et ne constituent pas un engagement contractuel
- Peuvent ne pas toujours être exactes ou à jour
- Ne doivent pas être utilisées pour des décisions médicales, juridiques ou critiques pour la sécurité

Pour les réservations confirmées ou les arrangements spécifiques, veuillez contacter directement notre équipe.`,
        },
        {
          title: "5. Comptes Utilisateurs",
          body: `Vous êtes responsable du maintien de la confidentialité de vos identifiants de compte. Vous devez nous informer immédiatement si vous soupçonnez un accès non autorisé à votre compte.

Les comptes sont personnels et ne peuvent pas être partagés. Nous pouvons désactiver les comptes après la fin de votre séjour, conformément à notre politique de conservation des données.`,
        },
        {
          title: "6. Propriété Intellectuelle",
          body: `Tout le contenu de la plateforme — y compris les textes, images, la conception et le système de concierge IA — est la propriété de Riad Dar D'Art ou de ses concédants de licence et est protégé par les lois applicables en matière de propriété intellectuelle.

Vous ne pouvez pas reproduire, distribuer ou créer des œuvres dérivées à partir de tout contenu de la plateforme sans notre consentement écrit préalable.`,
        },
        {
          title: "7. Limitation de Responsabilité",
          body: `Dans toute la mesure permise par la loi, Riad Dar D'Art ne pourra être tenu responsable de tout dommage indirect, accessoire, spécial ou consécutif résultant de votre utilisation de la plateforme.

Le service est fourni « tel quel » sans garantie d'aucune sorte. Nous ne garantissons pas l'exactitude, la fiabilité ou la disponibilité du concierge IA à un moment donné.`,
        },
        {
          title: "8. Modifications des Conditions",
          body: `Nous nous réservons le droit de modifier ces Conditions d'Utilisation à tout moment. Nous informerons les utilisateurs des changements importants en mettant à jour la date de « Dernière mise à jour » en haut de cette page.`,
        },
        {
          title: "9. Droit Applicable",
          body: `Ces conditions sont régies par les lois du Royaume du Maroc. Tout litige découlant de ces conditions sera soumis à la juridiction exclusive des tribunaux de Marrakech, Maroc.`,
        },
        {
          title: "10. Contact",
          body: `Pour toute question concernant ces Conditions d'Utilisation, veuillez nous contacter :

**E-mail :** contact@riaddartmarrakech.com
**Adresse :** 19 Derb Zemrane, Médina de Marrakech 40000, Maroc`,
        },
      ],
    },
  },

  es: {
    nav: {
      howItWorks: "Cómo funciona",
      about: "Acerca de",
      faq: "Preguntas frecuentes",
      contact: "Contacto",
      signIn: "Iniciar sesión",
      signUp: "Registrarse",
      navigate: "Navegar",
      legal: "Legal",
    },
    hero: {
      location: "Marrakech, Marruecos",
      title: "Riad Dar D'Art",
      tagline: "Tu retiro de lujo en el corazón de Marrakech",
      exploreRooms: "Explorar habitaciones",
      contactUs: "Contáctenos",
      scroll: "Desplazar",
    },
    about: {
      label: "Nuestra Historia",
      heading: "Un Patrimonio Vivo en la Medina",
      body: "Enclavado en los muros antiguos de la medina de Marrakech, Riad Dar D'Art es un santuario de arte marroquí, arquitectura y hospitalidad atemporal. Operamos dos propiedades bellamente restauradas:",
      and: "y",
      each: "— cada una, testamento de siglos de artesanía andaluza. Patios de mosaico, arcos de cedro tallados a mano y el aroma de azahar le dan la bienvenida a un mundo aparte del bullicio exterior, pero a pocos pasos del alma vibrante de la ciudad.",
    },
    rooms: {
      label: "Alojamiento",
      heading: "Habitaciones & Suites",
      suite: "Suite",
      viewRoom: "Ver habitación",
    },
    services: {
      label: "Comodidades",
      heading: "Servicios & Instalaciones",
    },
    excursions: {
      label: "Experiencias",
      heading: "Excursiones Seleccionadas",
      inquire: "Consultar",
    },
    contact: {
      label: "Contáctenos",
      heading: "Contacto & Reservas",
      viewOnMap: "Ver en el mapa →",
      whatsapp: "WhatsApp",
      emailUs: "Envíanos un correo",
    },
    footer: {
      tagline: "Una experiencia de riad de lujo en el corazón de la medina de Marrakech, guiada por un conserje de IA siempre disponible.",
      navigate: "Navegar",
      legal: "Legal",
      contact: "Contacto",
      copyright: "© 2026 Riad Dar D'Art — Marrakech, Marruecos",
      privacy: "Política de privacidad",
      terms: "Términos de servicio",
    },
    signIn: {
      conciergeAwaits: "Tu conserje personal te espera",
      heading: "Bienvenido de nuevo",
      email: "Correo electrónico",
      password: "Contraseña",
      forgotPassword: "¿Olvidaste tu contraseña?",
      submit: "Iniciar sesión",
      signingIn: "Iniciando sesión…",
      continueWithGoogle: "Continuar con Google",
      or: "o",
      noAccount: "¿Nuevo huésped?",
      createAccount: "Crear una cuenta →",
      backHome: "← Volver al inicio",
      resetHeading: "Restablecer tu contraseña",
      resetDesc: "Introduce tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.",
      sendResetLink: "Enviar enlace",
      resetEmailSent: "Revisa tu bandeja de entrada — te hemos enviado un enlace para restablecer la contraseña.",
      newPassword: "Nueva contraseña",
      confirmPassword: "Confirmar contraseña",
      updatePassword: "Actualizar contraseña",
      passwordUpdated: "Contraseña actualizada. Redirigiendo a tu panel…",
      passwordMismatch: "Las contraseñas no coinciden.",
      passwordTooShort: "La contraseña debe tener al menos 6 caracteres.",
      backToSignIn: "← Volver a iniciar sesión",
    },
    signUp: {
      conciergeAwaits: "Tu conserje personal te espera",
      heading: "Crear tu cuenta",
      subheading: "Crea tu cuenta de huésped gratuita para acceder a tu conserje personal.",
      firstName: "Nombre",
      lastName: "Apellido",
      nameOnReservation: "Nombre de la reserva",
      namePlaceholder: "Ingrese el nombre usado para su reserva",
      email: "Correo electrónico",
      password: "Contraseña",
      phone: "Número de teléfono",
      phonePlaceholder: "Con código de país, p. ej. +34 612 34 56 78",
      phoneRequired: "Por favor ingrese su número de teléfono.",
      whichRiad: "¿En qué riad te hospedas?",
      language: "Idioma preferido",
      languageRequired: "Por favor selecciona tu idioma para continuar.",
      riadRequired: "Por favor selecciona tu riad para continuar.",
      terms: "Acepto los",
      termsLink: "Términos de servicio",
      and: "y la",
      privacyLink: "Política de privacidad",
      submit: "Crear cuenta",
      creatingAccount: "Creando cuenta…",
      signUpWithGoogle: "Registrarse con Google",
      or: "o",
      haveAccount: "¿Ya tienes una cuenta?",
      signIn: "Iniciar sesión →",
      backHome: "← Volver al inicio",
      signUpFailedDefault: "Error al registrarse. Por favor, inténtalo de nuevo.",
      profileSetupFailed: "Cuenta creada, pero la configuración del perfil falló. Por favor, contacta con soporte.",
      phoneInvalid: "Por favor ingrese su número de teléfono completo con el código de país (p. ej. +212 6XX XXX XXX o +33 6 XX XX XX XX).",
      confirmEmail: "¡Ya casi está! Revisa tu bandeja de entrada y confirma tu correo electrónico para activar tu cuenta.",
    },
    dashboard: {
      aiConcierge: "Conserje IA",
      welcome: "Bienvenido al",
      fallback: "Bienvenido al Riad Dar D'Art",
      howCanIHelp: "¿Cómo puedo ayudarte hoy?",
      signOut: "Cerrar sesión",
      welcomeGuest: "Bienvenido, Huésped",
      poweredBy: "Desarrollado por Claude AI · Las respuestas son solo informativas",
      quickPrompts: [
        "¿A qué hora es el desayuno?",
        "Reservar una excursión",
        "Solicitar servicio a la habitación",
        "¿Qué excursiones ofrecéis?",
        "¿A qué hora es el check-out?",
      ],
      guestPortal: "Su portal de huésped personalizado",
      welcomeBack: "Bienvenido de nuevo",
      yourStay: "Su estancia en",
      checkOut: "Salida",
      accommodation: "Su alojamiento",
      includedInStay: "Incluido en su estancia",
      servicesAmenities: "Servicios & Comodidades",
      marrakechBeyond: "Marrakech & Más allá",
      excursionsHeading: "Excursiones",
      goodToKnow: "Bueno saber",
      importantInfo: "Información importante",
      endOfStay: "Fin de la estancia",
      enjoyedStay: "¿Disfrutó su estancia?",
      checkoutDesc: "Nos encantaría escucharle. Realice el check-out y déjenos una reseña para ayudar a futuros huéspedes a descubrir Dar D'Art.",
      checkoutReview: "Salida & Dejar una reseña",
      stayEnded: "Su estancia ha terminado",
      stayEndedThanks: "Gracias por quedarse con nosotros",
      backToHome: "Volver al inicio",
      bookViaWhatsApp: "Reservar por WhatsApp",
      whatsappMessages: {
        hammam: "Hola, me gustaría reservar un Hammam & Spa",
        airportTransfer: "Hola, me gustaría reservar un traslado al aeropuerto",
        dinner: "Hola, me gustaría reservar una cena en el riad",
        agafay: "Hola, me gustaría reservar la excursión al desierto de Agafay",
        ourikaValley: "Hola, me gustaría reservar la excursión al valle de Ourika",
        essaouira: "Hola, me gustaría reservar la excursión de un día a Esauira",
        cityTour: "Hola, me gustaría reservar un día guiado por la ciudad",
      },
      services: {
        breakfast: {
          name: "Desayuno",
          detail: "8:00 AM – 10:30 AM · Incluido",
          desc: "Desayuno marroquí tradicional en el patio al aire libre. Té, café, crêpes marroquíes, zumo de naranja fresco, queso, miel y huevos a petición. Desayuno exprés disponible para salidas tempranas.",
        },
        hammam: {
          name: "Hammam & Spa",
          detail: "€20/persona · Mín 2 personas",
          desc: "Ritual de hammam auténtico con exfoliación y jabón de argán. Masaje: 30 min €30 · 60 min €40. Abierto de 9:00 a 21:00 — reserve con al menos 2 horas de antelación por WhatsApp.",
        },
        pool: {
          name: "Piscina",
          detail: "Gratis · Toallas incluidas",
          desc: "Relájese en nuestra piscina privada del patio. Se proporcionan toallas — por favor dúchese antes de entrar.",
        },
        airportTransfer: {
          name: "Traslado al aeropuerto",
          detail: "€20 (1–4, 07:00–22:00) · €25 (1–4, 23:00–06:00) · €30 (5–7)",
          desc: "Traslados privados con aire acondicionado. Reserve por WhatsApp al menos 2h30 antes de su vuelo.",
        },
        wifi: {
          name: "WiFi",
          detail: "Incluido",
          desc: "WiFi de alta velocidad gratuito en todo el riad. Los datos de conexión se facilitan a la llegada.",
        },
        concierge: {
          name: "Conserjería",
          detail: "WhatsApp +212 709 086 496 · 08:00–22:00",
          desc: "Nuestro equipo de recepción está disponible todos los días de 08:00 a 22:00 para organizar todo lo que necesite — desde reservas de restaurantes hasta excursiones. El conserje IA de la aplicación está disponible 24/7.",
        },
      },
      info: {
        checkIn: { label: "Check-in", value: "2:00 PM", sub: "Llegada posible desde las 10:30" },
        checkOut: { label: "Check-out", value: "12:00 PM", sub: "Tardío posible bajo petición" },
        dinner: { label: "Cena en el Riad", value: "€20/persona", sub: "Mín 4 personas · Niños <12 €12, <4 gratis · Reserve con 1 día de antelación" },
        water: { label: "Agua", value: "20 dírhams", sub: "Por botella · Cocina disponible" },
      },
      excursionsList: {
        agafay: { subtitle: "Quad · Camello · Cena · Espectáculo de fuego", price: "Pack A 30 € · Pack B 55 €" },
        "ourika-valley": { subtitle: "Atlas · Cascadas · Pueblos bereberes · 9:00–17:00", price: "20 € · 27 € con comida" },
        essaouira: { subtitle: "Medina UNESCO · Costa atlántica · 8:00–20:00", price: "25 € / persona" },
        "city-tour": { subtitle: "Medina · Zocos · Lugares ocultos", price: "65 € / grupo (1–4 personas)" },
      },
    },
    survey: {
      checkOut: "Check-out",
      howWasStay: "¿Cómo estuvo su estancia,",
      overallRating: "Estancia general",
      roomsRating: "Habitaciones",
      foodRating: "Comida",
      staffRating: "Personal",
      cleanlinessRating: "Limpieza",
      conciergeRating: "Conserje IA",
      comments: "¿Algún comentario?",
      optional: "(opcional)",
      commentsPlaceholder: "Cuéntenos su experiencia…",
      cancel: "Cancelar",
      submitting: "Enviando…",
      complete: "Completar salida",
      thankYou: "¡Gracias,",
      farewellTitle: "¡Gracias por hospedarse con nosotros! ✨",
      farewellMessage: "Revise su WhatsApp — le hemos enviado una pequeña despedida.",
      alreadyCheckedOut: "Su salida ya fue registrada — gracias de nuevo por su estancia. ¡Esperamos darle la bienvenida pronto!",
      signingOut: "Cerrando sesión…",
      pleaseRate: "Por favor califique",
      beforeSubmitting: "antes de enviar.",
      sessionExpired: "Sesión expirada. Por favor inicie sesión nuevamente.",
      failedToSubmit: "No se pudo enviar la encuesta. Por favor intente de nuevo.",
      checkoutFailed: "Algo salió mal durante el check-out. No se ha cerrado su sesión — por favor intente de nuevo.",
      phoneInvalid: "Por favor ingrese en su perfil su número de teléfono completo con el código de país (p. ej. +212 6XX XXX XXX o +33 6 XX XX XX XX) e intente de nuevo.",
      retry: "Reintentar",
    },
    concierge: {
      title: "Tu Conserje Personal",
      subtitle: "¿Preguntas? ¿Reservas? Escríbenos por WhatsApp: te respondemos en tu idioma, las 24 horas.",
      chatButton: "Chatear por WhatsApp",
      fabLabel: "Chatea con nosotros por WhatsApp",
      prefill: "¡Hola! Soy huésped del Riad Dar D'Art y tengo una pregunta.",
    },
    common: {
      loading: "Cargando…",
      close: "Cerrar",
      success: "Éxito",
      toggleMenu: "Mostrar/ocultar menú",
      logout: "Cerrar sesión",
      lastUpdated: "Última actualización: junio de 2026",
      cityLine: "Medina de Marrakech 40000, Marruecos",
    },
    home: {
      riad19Intro: "Enclavado en el corazón de la medina de Marrakech, el Riad Dar D'Art 19 se encuentra en 19 Derb Zemrane, Bab Doukkala. Un santuario de arte marroquí, arquitectura y hospitalidad atemporal.",
      riad141Intro: "Enclavado en el corazón de la medina de Marrakech, el Riad Dar D'Art 141 se encuentra en 141 Derb Arset Aouzal, Bab Doukkala. Un santuario de arte marroquí, arquitectura y hospitalidad atemporal.",
      signInForRooms: "Inicia sesión para ver las habitaciones de tu riad",
      rooms19: {
        terrasseLulu: "Una encantadora suite con terraza privada con vistas al patio de la fuente, que combina el zellige tradicional con el confort moderno.",
        africa: "Tonos cálidos y terrosos, techos de cedro tallado y una cálida decoración de inspiración africana crean un refugio inolvidable.",
        gazelle: "Nuestra amplia suite familiar con mosaicos zellige originales, ropa de cama de primera calidad y espacio para toda la familia.",
        frida: "Un refugio vibrante y artístico inspirado en colores audaces y espíritu creativo, con acceso directo al jardín.",
        rosa: "Un santuario sereno en suaves tonos rosados con suelos de zellige y vistas a la fuente del patio interior.",
      },
      rooms141: {
        lexicon: "Una suite de inspiración literaria con cálidos tonos ámbar, paredes de yeso pintadas a mano y una cama con dosel vestida con textiles bereberes.",
        mategot: "Paredes de tadelakt azul medianoche, faroles de latón y una zona de estar privada en el patio, inspirada en el diseño marroquí de mediados de siglo.",
        chevrerie: "Inundada de luz natural, esta suite combina el encanto rústico con acceso a la azotea y una bañera de hammam tradicional.",
        poupee: "Una obra maestra de mosaico — azulejos cortados a mano de suelo a techo y una cama king de cedro tallado en un entorno caprichoso.",
        zagora: "Evocadora del sur desértico, con cálidos tonos de arenisca, patrones geométricos y una terraza privada.",
      },
      excursionsList: {
        agafayExpress: { name: "Desierto de Agafay — Pack A Exprés", desc: "Quad (40 min), paseo en camello (10 min), cena, espectáculo de fuego, piscina y transporte incluidos.", price: "30 € / persona" },
        agafayFull: { name: "Desierto de Agafay — Pack B Experiencia Completa", desc: "Quad (1 h), paseo en camello (20 min), cena, espectáculo de fuego, piscina y transporte incluidos.", price: "55 € / persona" },
        essaouira: { name: "Excursión de un Día a Esauira", desc: "Un día completo en la costa atlántica — medina declarada Patrimonio de la UNESCO, puerto y murallas. Salida 8:00, regreso 20:00.", price: "25 € / persona" },
        ourika: { name: "Valle de Ourika", desc: "Montañas del Atlas, cascadas y pueblos bereberes. Salida 9:00, regreso 17:00. 27 € con comida incluida.", price: "Desde 20 € / persona" },
        cityDay: { name: "Día Guiado por la Ciudad", desc: "Un día completo en Marrakech con un experto guía local — medina, zocos y lugares ocultos.", price: "65 € / grupo (1–4)" },
      },
      servicesList: {
        breakfast: { name: "Desayuno", desc: "Desayuno marroquí tradicional servido a diario en el patio al aire libre." },
        hammamSpa: { name: "Hammam & Spa", desc: "Rituales de hammam auténticos y tratamientos de spa revitalizantes en el lugar." },
        airportTransfer: { name: "Traslado al Aeropuerto", desc: "Traslados privados con aire acondicionado disponibles 24/7 hasta tu puerta." },
        rooftopTerrace: { name: "Terraza en la Azotea", desc: "Azotea exclusiva con vistas panorámicas sobre la medina de Marrakech." },
        highSpeedWifi: { name: "WiFi de Alta Velocidad", desc: "Internet de alta velocidad gratuito en ambos riads." },
        concierge: { name: "Conserjería", desc: "Un conserje dedicado para organizar cada detalle de tu estancia." },
      },
    },
    completeProfile: {
      heading: "Completa tu Perfil",
      saving: "Guardando…",
      continueToDashboard: "Continuar al Panel",
      saveFailed: "Error al guardar el perfil. Por favor, inténtalo de nuevo.",
      phone: "Número de teléfono",
      phonePlaceholder: "Con código de país, p. ej. +34 612 34 56 78",
      phoneRequired: "Por favor ingrese su número de teléfono.",
    },
    aboutPage: {
      ourStory: "Nuestra Historia",
      title: "Acerca de Dar D'Art",
      heritageLabel: "Patrimonio",
      heading: "Un Patrimonio Vivo de Marrakech",
      intro: "Enclavado en los muros antiguos de la medina de Marrakech, Riad Dar D'Art es un santuario de arte marroquí, arquitectura y hospitalidad atemporal. El nombre significa «Casa del Arte» — y cada rincón de la propiedad refleja esa identidad.",
      riad19Welcome: "Nos complace darte la bienvenida al Riad Dar D'Art 19, ubicado en 19 Derb Zemrane, Bab Doukkala. Un testimonio de siglos de artesanía andaluza — patios de mosaico, arcos de cedro tallados a mano y el aroma de azahar.",
      riad141Welcome: "Nos complace darte la bienvenida al Riad Dar D'Art 141, ubicado en 141 Derb Arset Aouzal, Bab Doukkala. Un testimonio de siglos de artesanía andaluza — patios de mosaico, arcos de cedro tallados a mano y el aroma de azahar.",
      bothWelcome: "Operamos dos propiedades bellamente restauradas: Riad 19 en 19 Derb Zemrane y Riad 141 en 141 Derb Arset Aouzal. Cada una es un testimonio de siglos de artesanía andaluza — patios de mosaico, arcos de cedro tallados a mano y el aroma de azahar.",
      mission: "Nuestra misión es ofrecer a los huéspedes una experiencia marroquí auténtica sin sacrificar el confort moderno. Por eso hemos creado un conserje impulsado por IA que ofrece un servicio de lujo a cada huésped, a cualquier hora.",
      whatWeStandFor: "Lo Que Defendemos",
      ourValues: "Nuestros Valores",
      values: {
        hospitality: { title: "Hospitalidad", desc: "Cada huésped es recibido como un visitante apreciado. Nuestra filosofía de 'dar' — que significa hogar — guía cada interacción." },
        authenticity: { title: "Autenticidad", desc: "Mosaicos zellige originales, cedro tallado a mano y recetas tradicionales conservadas a través de generaciones. Nada aquí es una réplica." },
        innovation: { title: "Innovación", desc: "Combinamos siglos de tradición con comodidades modernas — incluido un conserje de IA que habla tu idioma y conoce tu estancia." },
      },
      theProperties: "Las Propiedades",
      yourRiad: "Tu Riad",
      twoRiads: "Dos Riads, Una Sola Alma",
      riad19Desc: "La propiedad original, con cinco suites íntimas dispuestas alrededor de un patio con fuente de mosaico. Conocida por sus azulejos originales del siglo XVII y su terraza en la azotea con vistas panorámicas de la medina.",
      riad141Desc: "Un riad bellamente restaurado con cinco habitaciones y suites distintivas, un hammam privado y un exuberante jardín interior con jazmín y naranjos. Perfecto para familias y grupos.",
      experienceItYourself: "Vívelo Tú Mismo",
      ctaDesc: "¿Listo para hospedarte con nosotros? Contáctanos o explora nuestras habitaciones.",
      viewRooms: "Ver Habitaciones",
    },
    contactPage: {
      reachOut: "Contáctanos",
      ourLocations: "Nuestras Ubicaciones",
      directContact: "Contacto Directo",
      whatsappLabel: "WhatsApp: +212 709 086 496",
      hours: "Horario",
      deskHours: "Recepción disponible todos los días, de 08:00 a 22:00",
      conciergeAvailable: "Conserje IA disponible 24/7 a través de",
      chatOnWhatsApp: "Chatear por WhatsApp",
      whatsappDesc: "La forma más rápida de contactarnos — preguntas, reservas y todo lo relacionado con tu estancia.",
      whatsappPrefill: "¡Hola! Tengo una pregunta sobre el Riad Dar D'Art",
    },
    faqPage: {
      helpSupport: "Ayuda y Soporte",
      title: "Preguntas Frecuentes",
      stillHaveQuestions: "¿Aún Tienes Preguntas?",
      chatWithConcierge: "Chatea con Nuestro Conserje IA",
      ctaDesc: "Tu conserje personal está disponible 24/7 y habla tu idioma.",
      openConcierge: "Abrir Conserje",
      categories: [
        {
          category: "Entrada y Salida",
          items: [
            { q: "¿A qué hora son el check-in y el check-out?", a: "La llegada es posible desde las 10:30 (guardamos tu equipaje); las habitaciones están listas a partir de las 14:00. El check-out es antes de las 12:00. Se puede organizar un check-in anticipado o un check-out tardío según disponibilidad — simplemente pregunta a tu conserje IA o contáctanos con antelación." },
            { q: "¿Dónde recojo las llaves?", a: "Nuestro equipo te recibirá en la entrada del riad. Para llegadas tardías, indícanos tu hora estimada de llegada para asegurarnos de que alguien esté allí para darte la bienvenida." },
            { q: "¿Puedo dejar el equipaje antes del check-in o después del check-out?", a: "Sí, con gusto guardamos tu equipaje el día de llegada antes de que tu habitación esté lista, o el día de salida después del check-out." },
          ],
        },
        {
          category: "Habitaciones y Comodidades",
          items: [
            { q: "¿Hay Wi-Fi disponible?", a: "Sí, el Wi-Fi de alta velocidad gratuito está incluido en ambos riads. Los datos de conexión se facilitan a la llegada." },
            { q: "¿Hay aire acondicionado?", a: "Todas las habitaciones están equipadas con aire acondicionado y calefacción, garantizando confort durante todo el año en el clima variable de Marrakech." },
          ],
        },
        {
          category: "Servicios",
          items: [
            { q: "¿Qué incluye el desayuno?", a: "Servimos un desayuno marroquí tradicional a diario en el patio, de 8:00 a 10:30 — té, café, crêpes marroquíes, queso, mermelada, miel, mantequilla, ensalada de frutas, zumo de naranja fresco, pan, bizcocho, tomates cherry, pepino, aceitunas negras y huevos al gusto. El menú varía cada día. Hay desayuno exprés para salidas tempranas (solicítalo la noche anterior). No podemos garantizar opciones sin gluten — recomendamos traer tus propios productos." },
            { q: "¿Hay piscina?", a: "El Riad 141 cuenta con una pequeña piscina en el patio del jardín, disponible para todos los huéspedes alojados en cualquiera de las dos propiedades." },
            { q: "¿Cómo reservo el hammam?", a: "El spa abre de 9:00 a 21:00. El hammam cuesta 20 €/persona con un mínimo de 2 personas; los masajes cuestan 30 € (30 min) o 40 € (60 min). Reserva con al menos 2 horas de antelación por WhatsApp o con tu conserje IA." },
          ],
        },
        {
          category: "Excursiones",
          items: [
            { q: "¿Cómo reservo una excursión?", a: "Puedes solicitar cualquier excursión a través de tu conserje IA o por WhatsApp. Recomendamos reservar con al menos 24 horas de antelación para las excursiones de un día." },
            { q: "¿Cuál es la política de cancelación?", a: "La cancelación es gratuita hasta 14 días antes de tu llegada. Para cualquier cambio posterior, contacta con nuestro equipo por WhatsApp." },
            { q: "¿Pueden organizar tours privados personalizados?", a: "Por supuesto. Trabajamos con guías locales expertos y conductores privados para crear experiencias a medida. Contáctanos con tus intereses y diseñaremos algo especial." },
          ],
        },
        {
          category: "Conserje IA",
          items: [
            { q: "¿En qué puede ayudarme el conserje IA?", a: "Tu conserje IA puede responder preguntas sobre tu habitación, las instalaciones del riad, los horarios de desayuno, recomendaciones locales, solicitudes de reserva de excursiones, horarios de check-in/check-out y mucho más. Está disponible 24/7." },
            { q: "¿Qué idiomas habla el conserje?", a: "El conserje IA detecta automáticamente tu idioma y responde en él. Soporta inglés, francés, árabe, español, alemán, italiano y muchos más." },
            { q: "¿Son privadas mis conversaciones?", a: "Sí. Tus mensajes de chat se procesan de forma segura y no se comparten con terceros. Consulta nuestra Política de Privacidad para más detalles." },
            { q: "¿Puede el conserje IA realizar reservas reales?", a: "Actualmente el conserje proporciona información y puede transmitir solicitudes a nuestro equipo. Para reservas confirmadas (excursiones, hammam, traslados), nuestro personal te contactará para finalizar los detalles." },
          ],
        },
      ],
    },
    howItWorksPage: {
      gettingStarted: "Primeros Pasos",
      subtitle: "Desde la reserva hasta chatear con tu conserje IA en cuatro sencillos pasos.",
      whyItMatters: "Por Qué Importa",
      aSmarterStay: "Una Estancia Más Inteligente",
      ready: "¿Listo?",
      startExperience: "Comienza Tu Experiencia",
      ctaDesc: "Crea tu cuenta gratuita en menos de un minuto.",
      steps: [
        { title: "Reserva Tu Estancia", desc: "Reserva tu habitación en Riad Dar D'Art a través de nuestro sitio web, Booking.com o Airbnb." },
        { title: "Crea Tu Cuenta", desc: "Regístrate gratis en menos de un minuto — solo tu nombre, correo electrónico, número de teléfono y el riad donde te alojas." },
        { title: "Explora Tu Portal de Huésped", desc: "Encuentra todo sobre tu estancia en un solo lugar — tus habitaciones, servicios, excursiones e información práctica." },
        { title: "Chatea 24/7", desc: "Tu conserje IA está disponible a cualquier hora. Pregunta lo que sea — horarios de desayuno, reservas de excursiones, consejos locales y más." },
      ],
      benefits: [
        { title: "Disponible 24/7", desc: "Sin esperas en recepción. Obtén respuestas a tus preguntas a cualquier hora, de día o de noche." },
        { title: "Multilingüe", desc: "El conserje responde automáticamente en tu idioma — inglés, francés, árabe, español y más." },
        { title: "Personalizado", desc: "Conoce tu riad, tus habitaciones y tus servicios. Las respuestas son específicas de Dar D'Art, no genéricas." },
      ],
    },
    privacyPage: {
      legal: "Legal",
      title: "Política de Privacidad",
      intro: "Riad Dar D'Art (“nosotros”, “nos” o “nuestro”) opera esta plataforma de conserjería para huéspedes (dar-dart-saas.vercel.app). Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos tu información personal cuando utilizas nuestro servicio.",
      sections: [
        {
          title: "1. Información que Recopilamos",
          body: `Cuando creas una cuenta y utilizas la plataforma de conserjería Dar D'Art, recopilamos la siguiente información:

**Información de la cuenta:** tu nombre, dirección de correo electrónico, número de teléfono, riad elegido e idioma preferido, proporcionados durante el registro.

**Mensajes de chat:** el texto de tus conversaciones con el conserje IA. Se utilizan para generar respuestas y mejorar la calidad del servicio.

**Datos de uso:** análisis básicos como páginas visitadas y duración de la sesión. Estos datos se agregan y anonimizan.`,
        },
        {
          title: "2. Cómo Usamos Tu Información",
          body: `Usamos la información que recopilamos para:

- Proveer y operar el servicio de conserje IA
- Autenticar tu cuenta y verificar tu condición de huésped
- Procesar tus solicitudes al conserje y transmitir consultas de reserva a nuestro equipo
- Mejorar la precisión y relevancia de las respuestas de la IA
- Comunicarnos contigo sobre tu estancia o cuenta

No vendemos tus datos personales a terceros.`,
        },
        {
          title: "3. Retención de Datos",
          body: `Los datos de la cuenta se conservan durante la duración de tu estancia más 90 días, tras lo cual se eliminan permanentemente a menos que solicites una eliminación anticipada.

El historial de conversaciones con el conserje se conserva durante tu estancia y hasta 12 meses después para mejorar la calidad del servicio, tras lo cual puede ser eliminado. Puedes solicitar la eliminación de tu historial de chat en cualquier momento contactándonos.`,
        },
        {
          title: "4. Servicios de Terceros",
          body: `Nuestro servicio de conserjería funciona a través de WhatsApp. Las conversaciones con nuestro conserje de WhatsApp son procesadas por nuestro sistema de automatización y un proveedor de IA (Anthropic) para responder a tus preguntas. Anthropic procesa estos datos de acuerdo con su propia política de privacidad. El historial de conversaciones se almacena para mejorar la calidad y precisión de las respuestas.

Nuestra plataforma está alojada en Vercel. Tus datos se almacenan y procesan de conformidad con los términos de procesamiento de datos de Vercel.`,
        },
        {
          title: "5. Tus Derechos",
          body: `Según el RGPD y las leyes de protección de datos aplicables, tienes derecho a:

- **Acceder** a los datos personales que tenemos sobre ti
- **Corregir** datos inexactos o incompletos
- **Eliminar** tu cuenta y tus datos personales
- **Oponerte** al procesamiento de tus datos
- **Portabilidad** — solicitar una copia de tus datos en un formato legible por máquina

Para ejercer cualquiera de estos derechos, contáctanos en contact@riaddartmarrakech.com. Responderemos en un plazo de 30 días.`,
        },
        {
          title: "6. Cookies",
          body: `Solo utilizamos cookies esenciales necesarias para mantenerte conectado y mantener tu sesión. No utilizamos cookies publicitarias ni cookies de seguimiento de terceros.`,
        },
        {
          title: "7. Seguridad",
          body: `Implementamos medidas de seguridad estándar de la industria para proteger tus datos, incluida la transmisión cifrada de datos (HTTPS) y el hash seguro de contraseñas. Sin embargo, ningún método de transmisión por Internet es 100% seguro.`,
        },
        {
          title: "8. Contacto para Asuntos de Privacidad",
          body: `Si tienes alguna pregunta sobre esta Política de Privacidad o cómo manejamos tus datos, contáctanos:

**Correo electrónico:** contact@riaddartmarrakech.com
**Dirección:** 19 Derb Zemrane, Medina de Marrakech 40000, Marruecos`,
        },
      ],
    },
    termsPage: {
      legal: "Legal",
      title: "Términos de Servicio",
      intro: "Estos Términos de Servicio rigen tu uso de la plataforma de conserjería para huéspedes Dar D'Art, operada por Riad Dar D'Art, ubicado en 19 Derb Zemrane, Marrakech, Marruecos. Por favor, lee estos términos cuidadosamente antes de usar nuestro servicio.",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          body: `Al crear una cuenta y usar la plataforma de conserjería para huéspedes Dar D'Art, aceptas quedar vinculado por estos Términos de Servicio. Si no estás de acuerdo con estos términos, no utilices el servicio.

Estos términos pueden actualizarse de vez en cuando. El uso continuado del servicio después de los cambios constituye la aceptación de los términos revisados.`,
        },
        {
          title: "2. El Servicio",
          body: `La plataforma es un acompañante gratuito de información y conserjería para los huéspedes de Riad Dar D'Art. El registro es abierto — cualquier persona que planee o disfrute una estancia con nosotros puede crear una cuenta.

Al registrarte, confirmas que la información que proporcionas (nombre, correo electrónico, número de teléfono) es exacta y te pertenece.`,
        },
        {
          title: "3. Uso del Servicio",
          body: `Aceptas utilizar la plataforma únicamente con fines lícitos y de manera coherente con estos términos. No debes:

- Utilizar el servicio para transmitir contenido dañino, ofensivo o ilegal
- Intentar realizar ingeniería inversa, hackear o interrumpir la plataforma
- Compartir tus credenciales de cuenta con otros
- Utilizar el servicio de cualquier forma que pueda dañar la reputación de Riad Dar D'Art`,
        },
        {
          title: "4. Limitaciones del Conserje IA",
          body: `El conserje IA proporciona respuestas informativas basadas en conocimiento general sobre Riad Dar D'Art y Marrakech. Sus respuestas:

- Tienen fines meramente informativos y no constituyen un compromiso contractual
- Pueden no ser siempre precisas o estar actualizadas
- No deben utilizarse para decisiones médicas, legales o críticas para la seguridad

Para reservas confirmadas o arreglos específicos, por favor contacta directamente a nuestro equipo.`,
        },
        {
          title: "5. Cuentas de Usuario",
          body: `Eres responsable de mantener la confidencialidad de tus credenciales de cuenta. Debes notificarnos inmediatamente si sospechas de un acceso no autorizado a tu cuenta.

Las cuentas son personales y no pueden compartirse. Podemos desactivar las cuentas tras el final de tu estancia, de acuerdo con nuestra política de retención de datos.`,
        },
        {
          title: "6. Propiedad Intelectual",
          body: `Todo el contenido de la plataforma — incluidos textos, imágenes, diseño y el sistema de conserje IA — es propiedad de Riad Dar D'Art o de sus licenciantes y está protegido por las leyes de propiedad intelectual aplicables.

No puedes reproducir, distribuir ni crear obras derivadas de ningún contenido de la plataforma sin nuestro consentimiento previo por escrito.`,
        },
        {
          title: "7. Limitación de Responsabilidad",
          body: `En la máxima medida permitida por la ley, Riad Dar D'Art no será responsable de ningún daño indirecto, incidental, especial o consecuente que surja del uso de la plataforma.

El servicio se proporciona "tal cual" sin garantías de ningún tipo. No garantizamos la exactitud, fiabilidad o disponibilidad del conserje IA en un momento dado.`,
        },
        {
          title: "8. Cambios en los Términos",
          body: `Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Notificaremos a los usuarios sobre cambios importantes actualizando la fecha de "Última actualización" en la parte superior de esta página.`,
        },
        {
          title: "9. Ley Aplicable",
          body: `Estos términos se rigen por las leyes del Reino de Marruecos. Cualquier disputa que surja de estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Marrakech, Marruecos.`,
        },
        {
          title: "10. Contacto",
          body: `Para preguntas sobre estos Términos de Servicio, contáctanos:

**Correo electrónico:** contact@riaddartmarrakech.com
**Dirección:** 19 Derb Zemrane, Medina de Marrakech 40000, Marruecos`,
        },
      ],
    },
  },

  ar: {
    nav: {
      howItWorks: "كيف يعمل",
      about: "عن الرياض",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
      signIn: "تسجيل الدخول",
      signUp: "إنشاء حساب",
      navigate: "التنقل",
      legal: "قانوني",
    },
    hero: {
      location: "مراكش، المغرب",
      title: "رياض دار دار",
      tagline: "ملاذك الفاخر في قلب مراكش",
      exploreRooms: "استكشف الغرف",
      contactUs: "اتصل بنا",
      scroll: "تمرير",
    },
    about: {
      label: "قصتنا",
      heading: "إرث حي في المدينة القديمة",
      body: "تقع رياض دار دار داخل الأسوار القديمة لمدينة مراكش العتيقة، وهي ملاذ للفن المغربي والعمارة والضيافة الخالدة. نحن ندير عقارين تم ترميمهما بشكل رائع:",
      and: "و",
      each: "— كل منهما شاهد على قرون من الحرفية الأندلسية. تستقبلك أفنية الفسيفساء والأقواس الأرزية المنحوتة يدوياً وعطر زهر البرتقال في عالم بعيد عن صخب الخارج، على بُعد خطوات من روح المدينة النابضة.",
    },
    rooms: {
      label: "الإقامة",
      heading: "الغرف والأجنحة",
      suite: "جناح",
      viewRoom: "عرض الغرفة",
    },
    services: {
      label: "المرافق",
      heading: "الخدمات والمرافق",
    },
    excursions: {
      label: "تجارب",
      heading: "رحلات مختارة",
      inquire: "استفسر",
    },
    contact: {
      label: "تواصل معنا",
      heading: "الاتصال والحجوزات",
      viewOnMap: "عرض على الخريطة ←",
      whatsapp: "واتساب",
      emailUs: "راسلنا",
    },
    footer: {
      tagline: "تجربة رياض فاخرة في قلب مدينة مراكش العتيقة، بتوجيه من كونسيرج ذكاء اصطناعي دائم الاستعداد.",
      navigate: "التنقل",
      legal: "قانوني",
      contact: "اتصل بنا",
      copyright: "© 2026 رياض دار دار — مراكش، المغرب",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
    },
    signIn: {
      conciergeAwaits: "الكونسيرج الشخصي في انتظارك",
      heading: "مرحباً بعودتك",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      forgotPassword: "نسيت كلمة المرور؟",
      submit: "تسجيل الدخول",
      signingIn: "جارٍ تسجيل الدخول…",
      continueWithGoogle: "المتابعة مع Google",
      or: "أو",
      noAccount: "ضيف جديد؟",
      createAccount: "إنشاء حساب ←",
      backHome: "→ العودة إلى الرئيسية",
      resetHeading: "إعادة تعيين كلمة المرور",
      resetDesc: "أدخل بريدك الإلكتروني وسنرسل لك رابطاً لإعادة تعيين كلمة المرور.",
      sendResetLink: "إرسال الرابط",
      resetEmailSent: "تحقق من بريدك الوارد — أرسلنا لك رابط إعادة تعيين كلمة المرور.",
      newPassword: "كلمة المرور الجديدة",
      confirmPassword: "تأكيد كلمة المرور",
      updatePassword: "تحديث كلمة المرور",
      passwordUpdated: "تم تحديث كلمة المرور. جارٍ نقلك إلى لوحة التحكم…",
      passwordMismatch: "كلمتا المرور غير متطابقتين.",
      passwordTooShort: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
      backToSignIn: "→ العودة إلى تسجيل الدخول",
    },
    signUp: {
      conciergeAwaits: "الكونسيرج الشخصي في انتظارك",
      heading: "إنشاء حسابك",
      subheading: "أنشئ حساب الضيف المجاني الخاص بك للوصول إلى الكونسيرج الشخصي.",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      nameOnReservation: "الاسم في الحجز",
      namePlaceholder: "أدخل الاسم المستخدم في حجزك",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      phone: "رقم الهاتف",
      phonePlaceholder: "مع رمز البلد، مثال: +212 6 00 00 00 00",
      phoneRequired: "يرجى إدخال رقم هاتفك.",
      whichRiad: "في أي رياض تقيم؟",
      language: "اللغة المفضلة",
      languageRequired: "يرجى اختيار لغتك للمتابعة.",
      riadRequired: "يرجى اختيار الرياض للمتابعة.",
      terms: "أوافق على",
      termsLink: "شروط الخدمة",
      and: "و",
      privacyLink: "سياسة الخصوصية",
      submit: "إنشاء الحساب",
      creatingAccount: "جارٍ إنشاء الحساب…",
      signUpWithGoogle: "التسجيل عبر Google",
      or: "أو",
      haveAccount: "لديك حساب بالفعل؟",
      signIn: "← تسجيل الدخول",
      backHome: "→ العودة إلى الرئيسية",
      signUpFailedDefault: "فشل إنشاء الحساب. يرجى المحاولة مرة أخرى.",
      profileSetupFailed: "تم إنشاء الحساب لكن فشل إعداد الملف الشخصي. يرجى التواصل مع الدعم.",
      phoneInvalid: "يرجى إدخال رقم هاتفك الكامل مع رمز البلد (مثال: +212 6XX XXX XXX أو +33 6 XX XX XX XX).",
      confirmEmail: "خطوة أخيرة! تحقق من بريدك الوارد وأكّد عنوان بريدك الإلكتروني لتفعيل حسابك.",
    },
    dashboard: {
      aiConcierge: "كونسيرج الذكاء الاصطناعي",
      welcome: "مرحباً بك في",
      fallback: "مرحباً بك في رياض دار دار",
      howCanIHelp: "كيف يمكنني مساعدتك اليوم؟",
      signOut: "تسجيل الخروج",
      welcomeGuest: "مرحباً بك، ضيفنا",
      poweredBy: "مدعوم بالذكاء الاصطناعي · الردود لأغراض إعلامية فقط",
      quickPrompts: [
        "متى يُقدَّم الإفطار؟",
        "حجز رحلة",
        "طلب خدمة الغرف",
        "ما هي الرحلات التي تقدمونها؟",
        "متى موعد تسجيل المغادرة؟",
      ],
      guestPortal: "بوابة ضيفك الشخصية",
      welcomeBack: "مرحباً بعودتك",
      yourStay: "إقامتك في",
      checkOut: "المغادرة",
      accommodation: "إقامتك",
      includedInStay: "مشمول في إقامتك",
      servicesAmenities: "الخدمات والمرافق",
      marrakechBeyond: "مراكش وما وراءها",
      excursionsHeading: "الرحلات",
      goodToKnow: "معلومات مهمة",
      importantInfo: "معلومات هامة",
      endOfStay: "نهاية الإقامة",
      enjoyedStay: "هل استمتعت بإقامتك؟",
      checkoutDesc: "نود أن نسمع منك. أنهِ إقامتك واترك لنا تقييماً لمساعدة الضيوف القادمين على اكتشاف دار دار.",
      checkoutReview: "المغادرة وترك تقييم",
      stayEnded: "انتهت إقامتك",
      stayEndedThanks: "شكراً لإقامتك معنا",
      backToHome: "العودة إلى الرئيسية",
      bookViaWhatsApp: "احجز عبر واتساب",
      whatsappMessages: {
        hammam: "مرحباً، أود حجز خدمة الحمام والسبا",
        airportTransfer: "مرحباً، أود حجز خدمة نقل المطار",
        dinner: "مرحباً، أود حجز العشاء في الرياض",
        agafay: "مرحباً، أود حجز رحلة صحراء أكافاي",
        ourikaValley: "مرحباً، أود حجز رحلة وادي أوريكا",
        essaouira: "مرحباً، أود حجز رحلة يوم إلى الصويرة",
        cityTour: "مرحباً، أود حجز يوم بمرشد سياحي في المدينة",
      },
      services: {
        breakfast: {
          name: "الإفطار",
          detail: "8:00 ص – 10:30 ص · مشمول",
          desc: "إفطار مغربي تقليدي في الفناء المفتوح. شاي، قهوة، فطائر مغربية، عصير برتقال طازج، جبن، عسل، وبيض عند الطلب. إفطار سريع متاح للمغادرات المبكرة.",
        },
        hammam: {
          name: "الحمام والسبا",
          detail: "20€/شخص · شخصان على الأقل",
          desc: "طقوس الحمام الأصيلة مع التقشير وصابون الأرغان. مساج: 30 دقيقة 30€ · 60 دقيقة 40€. مفتوح من 9:00 ص حتى 9:00 م — احجز قبل ساعتين على الأقل عبر واتساب.",
        },
        pool: {
          name: "المسبح",
          detail: "مجاني · مناشف متوفرة",
          desc: "استرخ في مسبحنا الخاص في الفناء. المناشف متوفرة — يرجى الاستحمام قبل الدخول.",
        },
        airportTransfer: {
          name: "نقل المطار",
          detail: "20€ (1–4، 07:00–22:00) · 25€ (1–4، 23:00–06:00) · 30€ (5–7)",
          desc: "نقل خاص مكيف. احجز عبر واتساب قبل 2.5 ساعة على الأقل من رحلتك.",
        },
        wifi: {
          name: "واي فاي",
          detail: "مشمول",
          desc: "واي فاي مجاني عالي السرعة في جميع أنحاء الرياض. تُقدَّم تفاصيل الاتصال عند تسجيل الوصول.",
        },
        concierge: {
          name: "الكونسيرج",
          detail: "واتساب ‎+212 709 086 496 · 08:00–22:00",
          desc: "فريق الاستقبال متاح يومياً من 08:00 حتى 22:00 لترتيب كل ما تحتاجه — من حجوزات المطاعم إلى الرحلات. كونسيرج الذكاء الاصطناعي في التطبيق متاح على مدار الساعة.",
        },
      },
      info: {
        checkIn: { label: "تسجيل الوصول", value: "2:00 م", sub: "الوصول ممكن من الساعة 10:30 صباحاً" },
        checkOut: { label: "تسجيل المغادرة", value: "12:00 ظ", sub: "متأخر ممكن بالطلب" },
        dinner: { label: "العشاء في الرياض", value: "20€/شخص", sub: "4 أشخاص على الأقل · الأطفال دون 12: 12€، دون 4: مجاناً · احجز قبل يوم واحد" },
        water: { label: "الماء", value: "20 درهماً", sub: "للزجاجة · المطبخ متاح" },
      },
      excursionsList: {
        agafay: { subtitle: "دراجات رباعية · جمال · عشاء · عرض ناري", price: "الباقة A ‏30€ · الباقة B ‏55€" },
        "ourika-valley": { subtitle: "الأطلس · شلالات · قرى أمازيغية · 9:00–17:00", price: "20€ · 27€ مع وجبة" },
        essaouira: { subtitle: "مدينة اليونسكو القديمة · الساحل الأطلسي · 8:00–20:00", price: "25€ / شخص" },
        "city-tour": { subtitle: "المدينة القديمة · الأسواق · أماكن خفية", price: "65€ / مجموعة (1–4 أشخاص)" },
      },
    },
    survey: {
      checkOut: "تسجيل المغادرة",
      howWasStay: "كيف كانت إقامتك،",
      overallRating: "الإقامة العامة",
      roomsRating: "الغرف",
      foodRating: "الطعام",
      staffRating: "الموظفون",
      cleanlinessRating: "النظافة",
      conciergeRating: "كونسيرج الذكاء الاصطناعي",
      comments: "أي تعليقات؟",
      optional: "(اختياري)",
      commentsPlaceholder: "أخبرنا عن تجربتك…",
      cancel: "إلغاء",
      submitting: "جارٍ الإرسال…",
      complete: "إتمام تسجيل المغادرة",
      thankYou: "شكراً،",
      farewellTitle: "شكراً لإقامتك معنا! ✨",
      farewellMessage: "تفقد واتساب — لقد أرسلنا لك رسالة وداع صغيرة.",
      alreadyCheckedOut: "لقد تم تسجيل مغادرتك بالفعل — شكراً مجدداً على إقامتك. نأمل أن نرحب بك مرة أخرى قريباً!",
      signingOut: "جارٍ تسجيل الخروج…",
      pleaseRate: "يرجى تقييم",
      beforeSubmitting: "قبل الإرسال.",
      sessionExpired: "انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.",
      failedToSubmit: "فشل إرسال الاستبيان. يرجى المحاولة مرة أخرى.",
      checkoutFailed: "حدث خطأ أثناء تسجيل المغادرة. لم يتم تسجيل خروجك — يرجى المحاولة مرة أخرى.",
      phoneInvalid: "يرجى إدخال رقم هاتفك الكامل مع رمز البلد في ملفك الشخصي (مثال: +212 6XX XXX XXX أو +33 6 XX XX XX XX) ثم المحاولة مرة أخرى.",
      retry: "إعادة المحاولة",
    },
    concierge: {
      title: "الكونسيرج الشخصي الخاص بك",
      subtitle: "أسئلة؟ حجوزات؟ راسلنا على واتساب — نرد عليك بلغتك، على مدار الساعة.",
      chatButton: "تحدث معنا على واتساب",
      fabLabel: "تحدث معنا على واتساب",
      prefill: "مرحباً! أنا نزيل في رياض دار دار ولدي سؤال.",
    },
    common: {
      loading: "جارٍ التحميل…",
      close: "إغلاق",
      success: "نجاح",
      toggleMenu: "إظهار/إخفاء القائمة",
      logout: "تسجيل الخروج",
      lastUpdated: "آخر تحديث: يونيو 2026",
      cityLine: "المدينة القديمة، مراكش 40000، المغرب",
    },
    home: {
      riad19Intro: "يقع رياض دار دار 19 في قلب مدينة مراكش القديمة، بشارع 19 درب زمران، باب دكالة. ملاذ للفن المغربي والعمارة والضيافة الخالدة.",
      riad141Intro: "يقع رياض دار دار 141 في قلب مدينة مراكش القديمة، بشارع 141 درب عرصة أوزال، باب دكالة. ملاذ للفن المغربي والعمارة والضيافة الخالدة.",
      signInForRooms: "سجّل الدخول لعرض غرف رياضك",
      rooms19: {
        terrasseLulu: "جناح ساحر بشرفة خاصة تطل على فناء النافورة، يمزج بين الزليج التقليدي والراحة العصرية.",
        africa: "درجات دافئة من الألوان الترابية، وأسقف من خشب الأرز المنحوت، وديكور دافئ مستوحى من الطراز الأفريقي يخلق ملاذاً لا يُنسى.",
        gazelle: "جناحنا العائلي الواسع بفسيفساء الزليج الأصلية، وأغطية فاخرة، ومساحة تكفي العائلة بأكملها.",
        frida: "ملاذ نابض بالحياة والفن، مستوحى من الألوان الجريئة والروح الإبداعية، مع وصول مباشر إلى الحديقة.",
        rosa: "ملاذ هادئ بدرجات وردية ناعمة، بأرضيات من الزليج وإطلالة على نافورة الفناء الداخلي.",
      },
      rooms141: {
        lexicon: "جناح مستوحى من الأدب بدرجات كهرمانية دافئة، وجدران من الجص المرسومة يدوياً، وسرير بأربعة أعمدة مكسو بالمنسوجات الأمازيغية.",
        mategot: "جدران تادلاكت بلون أزرق ليلي، وفوانيس نحاسية، وركن جلوس خاص في الفناء مستوحى من التصميم المغربي لمنتصف القرن.",
        chevrerie: "مغمور بالضوء الطبيعي، يمزج هذا الجناح بين السحر الريفي والوصول إلى السطح وحوض حمام مغربي تقليدي.",
        poupee: "تحفة من الفسيفساء — بلاط مقطوع يدوياً من الأرض إلى السقف وسرير كينغ من خشب الأرز المنحوت في أجواء خيالية.",
        zagora: "يستحضر جنوب الصحراء، بدرجات دافئة من الحجر الرملي وأنماط هندسية وشرفة خاصة.",
      },
      excursionsList: {
        agafayExpress: { name: "صحراء أكافاي — الباقة A السريعة", desc: "دراجة رباعية (40 دقيقة)، ركوب الجمال (10 دقائق)، عشاء، عرض ناري، مسبح والنقل مشمول.", price: "30€ / شخص" },
        agafayFull: { name: "صحراء أكافاي — الباقة B التجربة الكاملة", desc: "دراجة رباعية (ساعة)، ركوب الجمال (20 دقيقة)، عشاء، عرض ناري، مسبح والنقل مشمول.", price: "55€ / شخص" },
        essaouira: { name: "رحلة يوم إلى الصويرة", desc: "يوم كامل على الساحل الأطلسي — مدينة قديمة مدرجة لدى اليونسكو، الميناء والأسوار. الانطلاق 8:00، العودة 20:00.", price: "25€ / شخص" },
        ourika: { name: "وادي أوريكا", desc: "جبال الأطلس، شلالات وقرى أمازيغية. الانطلاق 9:00، العودة 17:00. ‏27€ مع وجبة.", price: "ابتداءً من 20€ / شخص" },
        cityDay: { name: "يوم بمرشد في المدينة", desc: "يوم كامل في مراكش برفقة مرشد محلي خبير — المدينة القديمة، الأسواق والأماكن الخفية.", price: "65€ / مجموعة (1–4)" },
      },
      servicesList: {
        breakfast: { name: "الإفطار", desc: "إفطار مغربي تقليدي يُقدَّم يومياً في الفناء المفتوح." },
        hammamSpa: { name: "الحمام والسبا", desc: "طقوس حمام أصيلة وعلاجات سبا منعشة في الموقع." },
        airportTransfer: { name: "نقل المطار", desc: "نقل خاص مكيف متاح على مدار الساعة حتى باب إقامتك." },
        rooftopTerrace: { name: "شرفة السطح", desc: "سطح حصري بإطلالة بانورامية على مدينة مراكش القديمة." },
        highSpeedWifi: { name: "واي فاي عالي السرعة", desc: "إنترنت مجاني عالي السرعة في كلا الرياضين." },
        concierge: { name: "الكونسيرج", desc: "كونسيرج مخصص لتنظيم كل تفاصيل إقامتك." },
      },
    },
    completeProfile: {
      heading: "أكمل ملفك الشخصي",
      saving: "جارٍ الحفظ…",
      continueToDashboard: "المتابعة إلى لوحة التحكم",
      saveFailed: "فشل حفظ الملف الشخصي. يرجى المحاولة مرة أخرى.",
      phone: "رقم الهاتف",
      phonePlaceholder: "مع رمز البلد، مثال: +212 6 00 00 00 00",
      phoneRequired: "يرجى إدخال رقم هاتفك.",
    },
    aboutPage: {
      ourStory: "قصتنا",
      title: "عن دار دار",
      heritageLabel: "الإرث",
      heading: "إرث حي في قلب مراكش",
      intro: "يقع رياض دار دار داخل الأسوار القديمة لمدينة مراكش العتيقة، وهو ملاذ للفن المغربي والعمارة والضيافة الخالدة. يعني الاسم «بيت الفن» — وكل ركن من العقار يعكس هذه الهوية.",
      riad19Welcome: "يسعدنا أن نرحب بك في رياض دار دار 19، الواقع بشارع 19 درب زمران، باب دكالة. شاهد على قرون من الحرفية الأندلسية — أفنية بالفسيفساء، وأقواس من خشب الأرز منحوتة يدوياً، وعطر زهر البرتقال.",
      riad141Welcome: "يسعدنا أن نرحب بك في رياض دار دار 141، الواقع بشارع 141 درب عرصة أوزال، باب دكالة. شاهد على قرون من الحرفية الأندلسية — أفنية بالفسيفساء، وأقواس من خشب الأرز منحوتة يدوياً، وعطر زهر البرتقال.",
      bothWelcome: "ندير عقارين تم ترميمهما بشكل رائع: رياض 19 بشارع 19 درب زمران ورياض 141 بشارع 141 درب عرصة أوزال. كل منهما شاهد على قرون من الحرفية الأندلسية — أفنية بالفسيفساء، وأقواس من خشب الأرز منحوتة يدوياً، وعطر زهر البرتقال.",
      mission: "مهمتنا هي تقديم تجربة مغربية أصيلة لضيوفنا دون التضحية بالراحة العصرية. لهذا السبب أنشأنا كونسيرجاً مدعوماً بالذكاء الاصطناعي يقدّم خدمة فاخرة لكل ضيف، في كل ساعة.",
      whatWeStandFor: "ما نؤمن به",
      ourValues: "قيمنا",
      values: {
        hospitality: { title: "الضيافة", desc: "يُستقبل كل ضيف كزائر عزيز. فلسفتنا القائمة على كلمة «دار» — أي المنزل — توجّه كل تفاعل." },
        authenticity: { title: "الأصالة", desc: "فسيفساء زليج أصلية، وخشب أرز منحوت يدوياً، ووصفات تقليدية محفوظة عبر الأجيال. لا شيء هنا نسخة مقلدة." },
        innovation: { title: "الابتكار", desc: "نمزج بين قرون من التقاليد ووسائل الراحة الحديثة — بما في ذلك كونسيرج ذكاء اصطناعي يتحدث لغتك ويعرف تفاصيل إقامتك." },
      },
      theProperties: "العقارات",
      yourRiad: "رياضك",
      twoRiads: "رياضان، روح واحدة",
      riad19Desc: "العقار الأصلي، يضم خمسة أجنحة ضيافة حميمية مرتبة حول فناء نافورة من الفسيفساء. معروف بزخارفه الأصلية من القرن السابع عشر وتراسه العلوي بإطلالة بانورامية على المدينة القديمة.",
      riad141Desc: "رياض تم ترميمه بشكل رائع يضم خمس غرف وأجنحة مميزة، وحماماً خاصاً، وحديقة داخلية غنّاء بأشجار الياسمين والبرتقال. مثالي للعائلات والمجموعات.",
      experienceItYourself: "جرّب بنفسك",
      ctaDesc: "هل أنت مستعد للإقامة معنا؟ تواصل معنا أو استكشف غرفنا.",
      viewRooms: "عرض الغرف",
    },
    contactPage: {
      reachOut: "تواصل معنا",
      ourLocations: "مواقعنا",
      directContact: "التواصل المباشر",
      whatsappLabel: "واتساب: ‎+212 709 086 496",
      hours: "ساعات العمل",
      deskHours: "الاستقبال متاح يومياً من 08:00 حتى 22:00",
      conciergeAvailable: "الكونسيرج الذكي متاح على مدار الساعة عبر",
      chatOnWhatsApp: "تواصل عبر واتساب",
      whatsappDesc: "أسرع طريقة للتواصل معنا — أسئلة وحجوزات وكل ما يخص إقامتك.",
      whatsappPrefill: "مرحباً! لدي سؤال حول رياض دار دار",
    },
    faqPage: {
      helpSupport: "المساعدة والدعم",
      title: "الأسئلة الشائعة",
      stillHaveQuestions: "هل لا تزال لديك أسئلة؟",
      chatWithConcierge: "تحدّث مع كونسيرجنا الذكي",
      ctaDesc: "كونسيرجك الشخصي متاح على مدار الساعة ويتحدث لغتك.",
      openConcierge: "فتح الكونسيرج",
      categories: [
        {
          category: "تسجيل الوصول والمغادرة",
          items: [
            { q: "ما هو موعد تسجيل الوصول والمغادرة؟", a: "الوصول ممكن من الساعة 10:30 صباحاً (نحتفظ بأمتعتك)؛ وتكون الغرف جاهزة من الساعة 14:00. وتكون المغادرة قبل الساعة 12:00 ظهراً. يمكن ترتيب تسجيل وصول مبكر أو مغادرة متأخرة حسب التوفر — فقط اسأل الكونسيرج الذكي أو تواصل معنا مسبقاً." },
            { q: "أين أستلم المفاتيح؟", a: "سيستقبلك فريقنا عند مدخل الرياض. بالنسبة للوصول المتأخر، يرجى إخبارنا بوقت وصولك المتوقع حتى نضمن وجود من يستقبلك." },
            { q: "هل يمكنني ترك الأمتعة قبل تسجيل الوصول أو بعد المغادرة؟", a: "نعم، يسعدنا تخزين أمتعتك يوم الوصول قبل جاهزية غرفتك، أو يوم المغادرة بعد تسجيل الخروج." },
          ],
        },
        {
          category: "الغرف والمرافق",
          items: [
            { q: "هل يتوفر واي فاي؟", a: "نعم، الواي فاي المجاني عالي السرعة مشمول في كلا الرياضين. تُقدَّم تفاصيل الاتصال عند تسجيل الوصول." },
            { q: "هل توجد تكييف هواء؟", a: "جميع الغرف مجهزة بالتكييف والتدفئة، لضمان الراحة على مدار العام في ظل مناخ مراكش المتغير." },
          ],
        },
        {
          category: "الخدمات",
          items: [
            { q: "ماذا يتضمن الإفطار؟", a: "نقدّم إفطاراً مغربياً تقليدياً يومياً في الفناء من 8:00 حتى 10:30 صباحاً — شاي، قهوة، فطائر مغربية، جبن، مربى، عسل، زبدة، سلطة فواكه، عصير برتقال طازج، خبز، كيك، طماطم كرزية، خيار، زيتون أسود وبيض حسب الطلب. تتغير القائمة يومياً. يتوفر إفطار سريع للمغادرات المبكرة (اطلبه في الليلة السابقة). لا يمكن ضمان الخلو من الغلوتين — ننصح بإحضار منتجاتك الخاصة." },
            { q: "هل توجد مسبح؟", a: "يضم رياض 141 مسبحاً صغيراً في فناء الحديقة، متاحاً لجميع الضيوف المقيمين في أي من العقارين." },
            { q: "كيف أحجز الحمام؟", a: "السبا مفتوح من 9:00 صباحاً حتى 9:00 مساءً. الحمام بسعر 20€ للشخص بحد أدنى شخصين؛ والمساج 30€ (30 دقيقة) أو 40€ (60 دقيقة). احجز قبل ساعتين على الأقل عبر واتساب أو الكونسيرج الذكي." },
          ],
        },
        {
          category: "الرحلات",
          items: [
            { q: "كيف أحجز رحلة؟", a: "يمكنك طلب أي رحلة عبر الكونسيرج الذكي أو عبر واتساب. نوصي بالحجز قبل 24 ساعة على الأقل للرحلات النهارية." },
            { q: "ما هي سياسة الإلغاء؟", a: "الإلغاء مجاني حتى 14 يوماً قبل وصولك. لأي تغيير بعد ذلك، يرجى التواصل مع فريقنا عبر واتساب." },
            { q: "هل يمكنكم تنظيم جولات خاصة مخصصة؟", a: "بالتأكيد. نعمل مع مرشدين محليين خبراء وسائقين خاصين لابتكار تجارب مصممة خصيصاً. تواصل معنا باهتماماتك وسنصمم لك شيئاً مميزاً." },
          ],
        },
        {
          category: "الكونسيرج الذكي",
          items: [
            { q: "بماذا يمكن للكونسيرج الذكي مساعدتي؟", a: "يمكن لكونسيرجك الذكي الإجابة عن أسئلة حول غرفتك، ومرافق الرياض، وأوقات الإفطار، والتوصيات المحلية، وطلبات حجز الرحلات، وأوقات تسجيل الوصول/المغادرة، وأكثر من ذلك بكثير. وهو متاح على مدار الساعة." },
            { q: "ما هي اللغات التي يتحدثها الكونسيرج؟", a: "يكتشف الكونسيرج الذكي لغتك تلقائياً ويرد بها. يدعم الإنجليزية والفرنسية والعربية والإسبانية والألمانية والإيطالية والعديد من اللغات الأخرى." },
            { q: "هل محادثاتي خاصة؟", a: "نعم. تتم معالجة رسائل الدردشة الخاصة بك بشكل آمن ولا تتم مشاركتها مع أطراف ثالثة. يرجى الاطلاع على سياسة الخصوصية لدينا لمزيد من التفاصيل." },
            { q: "هل يمكن للكونسيرج الذكي إجراء حجوزات فعلية؟", a: "حالياً، يقدّم الكونسيرج معلومات ويمكنه نقل الطلبات إلى فريقنا. بالنسبة للحجوزات المؤكدة (الرحلات، الحمام، النقل)، سيتابع موظفونا لإنهاء التفاصيل." },
          ],
        },
      ],
    },
    howItWorksPage: {
      gettingStarted: "البدء",
      subtitle: "من الحجز إلى الدردشة مع كونسيرجك الذكي في أربع خطوات بسيطة.",
      whyItMatters: "لماذا يهم هذا",
      aSmarterStay: "إقامة أكثر ذكاءً",
      ready: "هل أنت مستعد؟",
      startExperience: "ابدأ تجربتك",
      ctaDesc: "أنشئ حسابك المجاني في أقل من دقيقة.",
      steps: [
        { title: "احجز إقامتك", desc: "احجز غرفتك في رياض دار دار عبر موقعنا الإلكتروني أو Booking.com أو Airbnb." },
        { title: "أنشئ حسابك", desc: "سجّل مجاناً في أقل من دقيقة — فقط اسمك وبريدك الإلكتروني ورقم هاتفك والرياض الذي تقيم فيه." },
        { title: "استكشف بوابة الضيف", desc: "اعثر على كل ما يخص إقامتك في مكان واحد — غرفك والخدمات والرحلات والمعلومات العملية." },
        { title: "تحدّث على مدار الساعة", desc: "كونسيرجك الذكي متاح على مدار الساعة. اسأل عن أي شيء — أوقات الإفطار، حجوزات الرحلات، النصائح المحلية، والمزيد." },
      ],
      benefits: [
        { title: "متاح على مدار الساعة", desc: "لا داعي للانتظار في الاستقبال. احصل على إجابات لأسئلتك في أي ساعة، ليلاً أو نهاراً." },
        { title: "متعدد اللغات", desc: "يرد الكونسيرج تلقائياً بلغتك — الإنجليزية والفرنسية والعربية والإسبانية والمزيد." },
        { title: "مخصص لك", desc: "يعرف رياضك وغرفك وخدماتك. الإجابات خاصة بدار دار، وليست عامة." },
      ],
    },
    privacyPage: {
      legal: "قانوني",
      title: "سياسة الخصوصية",
      intro: "يقوم رياض دار دار («نحن» أو «لنا» أو «الخاصة بنا») بتشغيل منصة كونسيرج الضيوف هذه (dar-dart-saas.vercel.app). تصف سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية عند استخدامك لخدمتنا.",
      sections: [
        {
          title: "1. المعلومات التي نجمعها",
          body: `عند إنشاء حساب واستخدام منصة كونسيرج دار دار، نقوم بجمع المعلومات التالية:

**معلومات الحساب:** اسمك وعنوان بريدك الإلكتروني ورقم هاتفك والرياض الذي اخترته ولغتك المفضلة، المُقدَّمة أثناء التسجيل.

**رسائل الدردشة:** نص محادثاتك مع الكونسيرج الذكي. تُستخدم لتوليد الردود ولتحسين جودة الخدمة.

**بيانات الاستخدام:** تحليلات أساسية مثل الصفحات التي تمت زيارتها ومدة الجلسة. تُجمَّع هذه البيانات وتُخفى هويتها.`,
        },
        {
          title: "2. كيف نستخدم معلوماتك",
          body: `نستخدم المعلومات التي نجمعها من أجل:

- تقديم وتشغيل خدمة الكونسيرج الذكي
- المصادقة على حسابك والتحقق من صفتك كضيف
- معالجة طلباتك للكونسيرج ونقل استفسارات الحجز إلى فريقنا
- تحسين دقة وملاءمة ردود الذكاء الاصطناعي
- التواصل معك بشأن إقامتك أو حسابك

نحن لا نبيع بياناتك الشخصية لأطراف ثالثة.`,
        },
        {
          title: "3. الاحتفاظ بالبيانات",
          body: `يُحتفظ ببيانات الحساب طوال مدة إقامتك بالإضافة إلى 90 يوماً، وبعد ذلك تُحذف نهائياً ما لم تطلب حذفها مبكراً.

يُحتفظ بسجل محادثات الكونسيرج طوال مدة إقامتك ولمدة تصل إلى 12 شهراً بعدها لتحسين جودة الخدمة، وبعد ذلك قد يُحذف. يمكنك طلب حذف سجل محادثاتك في أي وقت من خلال التواصل معنا.`,
        },
        {
          title: "4. خدمات الأطراف الثالثة",
          body: `تعمل خدمة الكونسيرج لدينا عبر واتساب. تُعالَج المحادثات مع كونسيرج واتساب الخاص بنا بواسطة نظام الأتمتة لدينا ومزوّد ذكاء اصطناعي (Anthropic) للإجابة على أسئلتك. تعالج Anthropic هذه البيانات وفقاً لسياسة الخصوصية الخاصة بها. يُخزَّن سجل المحادثات لتحسين جودة الردود ودقتها.

منصتنا مستضافة على Vercel. تُخزَّن بياناتك وتُعالَج وفقاً لشروط معالجة البيانات الخاصة بـ Vercel.`,
        },
        {
          title: "5. حقوقك",
          body: `بموجب اللائحة العامة لحماية البيانات (GDPR) وقوانين حماية البيانات المعمول بها، يحق لك:

- **الوصول** إلى البيانات الشخصية التي نحتفظ بها عنك
- **تصحيح** البيانات غير الدقيقة أو غير المكتملة
- **حذف** حسابك وبياناتك الشخصية
- **الاعتراض** على معالجة بياناتك
- **قابلية النقل** — طلب نسخة من بياناتك بصيغة قابلة للقراءة آلياً

لممارسة أي من هذه الحقوق، يرجى التواصل معنا على contact@riaddartmarrakech.com. سنرد خلال 30 يوماً.`,
        },
        {
          title: "6. ملفات تعريف الارتباط (الكوكيز)",
          body: `نستخدم فقط ملفات تعريف الارتباط الأساسية اللازمة لإبقائك مسجلاً للدخول والحفاظ على جلستك. نحن لا نستخدم ملفات تعريف ارتباط إعلانية أو ملفات تتبع من أطراف ثالثة.`,
        },
        {
          title: "7. الأمان",
          body: `نطبّق إجراءات أمنية معيارية في هذه الصناعة لحماية بياناتك، بما في ذلك نقل البيانات المشفر (HTTPS) وتجزئة كلمات المرور الآمنة. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100%.`,
        },
        {
          title: "8. التواصل بخصوص مخاوف الخصوصية",
          body: `إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع بياناتك، يرجى التواصل معنا:

**البريد الإلكتروني:** contact@riaddartmarrakech.com
**العنوان:** 19 درب زمران، المدينة القديمة، مراكش 40000، المغرب`,
        },
      ],
    },
    termsPage: {
      legal: "قانوني",
      title: "شروط الخدمة",
      intro: "تحكم شروط الخدمة هذه استخدامك لمنصة كونسيرج الضيوف الخاصة بدار دار، التي يديرها رياض دار دار، الواقع في 19 درب زمران، مراكش، المغرب. يرجى قراءة هذه الشروط بعناية قبل استخدام خدمتنا.",
      sections: [
        {
          title: "1. قبول الشروط",
          body: `بإنشاء حساب واستخدام منصة كونسيرج الضيوف الخاصة بدار دار، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام الخدمة.

قد يتم تحديث هذه الشروط من وقت لآخر. يشكّل استمرار استخدام الخدمة بعد التغييرات قبولاً للشروط المعدَّلة.`,
        },
        {
          title: "2. الخدمة",
          body: `المنصة هي رفيق معلومات وكونسيرج مجاني لضيوف رياض دار دار. التسجيل مفتوح — يمكن لأي شخص يخطط لإقامة لدينا أو يستمتع بها إنشاء حساب.

بالتسجيل، فإنك تؤكد أن المعلومات التي تقدمها (الاسم والبريد الإلكتروني ورقم الهاتف) صحيحة وتخصك.`,
        },
        {
          title: "3. استخدام الخدمة",
          body: `توافق على استخدام المنصة فقط للأغراض المشروعة وبطريقة تتوافق مع هذه الشروط. يجب ألا:

- تستخدم الخدمة لنقل محتوى ضار أو مسيء أو غير قانوني
- تحاول الهندسة العكسية أو اختراق أو تعطيل المنصة
- تشارك بيانات اعتماد حسابك مع الآخرين
- تستخدم الخدمة بأي طريقة قد تضر بسمعة رياض دار دار`,
        },
        {
          title: "4. حدود الكونسيرج الذكي",
          body: `يقدّم الكونسيرج الذكي ردوداً معلوماتية بناءً على معرفة عامة حول رياض دار دار ومراكش. ردوده:

- لأغراض إعلامية فقط ولا تشكّل التزاماً تعاقدياً
- قد لا تكون دائماً دقيقة أو محدَّثة
- لا ينبغي الاعتماد عليها في القرارات الطبية أو القانونية أو الحرجة للسلامة

بالنسبة للحجوزات المؤكدة أو الترتيبات المحددة، يرجى التواصل مباشرة مع فريقنا.`,
        },
        {
          title: "5. حسابات المستخدمين",
          body: `أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك. يجب عليك إخطارنا فوراً إذا اشتبهت في وصول غير مصرح به إلى حسابك.

الحسابات شخصية ولا يجوز مشاركتها. يجوز لنا إلغاء تفعيل الحسابات بعد نهاية إقامتك وفقاً لسياسة الاحتفاظ بالبيانات لدينا.`,
        },
        {
          title: "6. الملكية الفكرية",
          body: `جميع المحتويات الموجودة على المنصة — بما في ذلك النصوص والصور والتصميم ونظام الكونسيرج الذكي — هي ملك لرياض دار دار أو الجهات المرخِّصة له ومحمية بموجب قوانين الملكية الفكرية المعمول بها.

لا يجوز لك نسخ أو توزيع أو إنشاء أعمال مشتقة من أي محتوى على المنصة دون موافقتنا الكتابية المسبقة.`,
        },
        {
          title: "7. تحديد المسؤولية",
          body: `إلى أقصى حد يسمح به القانون، لن يكون رياض دار دار مسؤولاً عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناشئة عن استخدامك للمنصة.

تُقدَّم الخدمة «كما هي» دون أي ضمانات من أي نوع. نحن لا نضمن دقة أو موثوقية أو توفر الكونسيرج الذكي في أي وقت معين.`,
        },
        {
          title: "8. التغييرات على الشروط",
          body: `نحتفظ بالحق في تعديل شروط الخدمة هذه في أي وقت. سنُخطر المستخدمين بالتغييرات الجوهرية من خلال تحديث تاريخ «آخر تحديث» في أعلى هذه الصفحة.`,
        },
        {
          title: "9. القانون الحاكم",
          body: `تخضع هذه الشروط لقوانين المملكة المغربية. أي نزاعات تنشأ عن هذه الشروط تخضع للاختصاص القضائي الحصري لمحاكم مراكش، المغرب.`,
        },
        {
          title: "10. التواصل",
          body: `للأسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:

**البريد الإلكتروني:** contact@riaddartmarrakech.com
**العنوان:** 19 درب زمران، المدينة القديمة، مراكش 40000، المغرب`,
        },
      ],
    },
  },

  de: {
    nav: {
      howItWorks: "So funktioniert es",
      about: "Über uns",
      faq: "FAQ",
      contact: "Kontakt",
      signIn: "Anmelden",
      signUp: "Registrieren",
      navigate: "Navigation",
      legal: "Rechtliches",
    },
    hero: {
      location: "Marrakesch, Marokko",
      title: "Riad Dar D'Art",
      tagline: "Ihr Luxusrückzugsort im Herzen von Marrakesch",
      exploreRooms: "Zimmer entdecken",
      contactUs: "Kontakt aufnehmen",
      scroll: "Scrollen",
    },
    about: {
      label: "Unsere Geschichte",
      heading: "Lebendiges Erbe in der Medina",
      body: "Eingebettet in die alten Mauern der Medina von Marrakesch ist das Riad Dar D'Art ein Heiligtum marokkanischer Kunst, Architektur und zeitloser Gastfreundschaft. Wir betreiben zwei wunderschön restaurierte Anwesen:",
      and: "und",
      each: "— jedes ein Zeugnis jahrhundertealter andalusischer Handwerkskunst. Mosaikhöfe, handgeschnitzte Zedernbögen und der Duft von Orangenblüten empfangen Sie in einer Welt abseits des Trubels, nur wenige Schritte von der lebendigen Seele der Stadt entfernt.",
    },
    rooms: {
      label: "Unterkunft",
      heading: "Zimmer & Suiten",
      suite: "Suite",
      viewRoom: "Zimmer ansehen",
    },
    services: {
      label: "Ausstattung",
      heading: "Dienstleistungen & Einrichtungen",
    },
    excursions: {
      label: "Erlebnisse",
      heading: "Kuratierte Ausflüge",
      inquire: "Anfragen",
    },
    contact: {
      label: "Kontakt aufnehmen",
      heading: "Kontakt & Reservierungen",
      viewOnMap: "Auf der Karte anzeigen →",
      whatsapp: "WhatsApp",
      emailUs: "E-Mail senden",
    },
    footer: {
      tagline: "Ein luxuriöses Riad-Erlebnis im Herzen der Medina von Marrakesch, begleitet von einem KI-Concierge, der immer erreichbar ist.",
      navigate: "Navigation",
      legal: "Rechtliches",
      contact: "Kontakt",
      copyright: "© 2026 Riad Dar D'Art — Marrakesch, Marokko",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
    },
    signIn: {
      conciergeAwaits: "Ihr persönlicher Concierge erwartet Sie",
      heading: "Willkommen zurück",
      email: "E-Mail",
      password: "Passwort",
      forgotPassword: "Passwort vergessen?",
      submit: "Anmelden",
      signingIn: "Anmeldung läuft…",
      continueWithGoogle: "Mit Google fortfahren",
      or: "oder",
      noAccount: "Neuer Gast?",
      createAccount: "Konto erstellen →",
      backHome: "← Zurück zur Startseite",
      resetHeading: "Passwort zurücksetzen",
      resetDesc: "Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts.",
      sendResetLink: "Link senden",
      resetEmailSent: "Prüfen Sie Ihren Posteingang — wir haben Ihnen einen Link zum Zurücksetzen des Passworts gesendet.",
      newPassword: "Neues Passwort",
      confirmPassword: "Passwort bestätigen",
      updatePassword: "Passwort aktualisieren",
      passwordUpdated: "Passwort aktualisiert. Sie werden zu Ihrem Dashboard weitergeleitet…",
      passwordMismatch: "Die Passwörter stimmen nicht überein.",
      passwordTooShort: "Das Passwort muss mindestens 6 Zeichen lang sein.",
      backToSignIn: "← Zurück zur Anmeldung",
    },
    signUp: {
      conciergeAwaits: "Ihr persönlicher Concierge erwartet Sie",
      heading: "Konto erstellen",
      subheading: "Erstellen Sie Ihr kostenloses Gästekonto, um auf Ihren persönlichen Concierge zuzugreifen.",
      firstName: "Vorname",
      lastName: "Nachname",
      nameOnReservation: "Name auf der Reservierung",
      namePlaceholder: "Geben Sie den Namen ein, der für Ihre Buchung verwendet wurde",
      email: "E-Mail",
      password: "Passwort",
      phone: "Telefonnummer",
      phonePlaceholder: "Mit Ländervorwahl, z. B. +49 151 23456789",
      phoneRequired: "Bitte geben Sie Ihre Telefonnummer ein.",
      whichRiad: "In welchem Riad übernachten Sie?",
      language: "Bevorzugte Sprache",
      languageRequired: "Bitte wählen Sie Ihre Sprache, um fortzufahren.",
      riadRequired: "Bitte wählen Sie Ihr Riad, um fortzufahren.",
      terms: "Ich stimme den",
      termsLink: "Nutzungsbedingungen",
      and: "und der",
      privacyLink: "Datenschutzrichtlinie",
      submit: "Konto erstellen",
      creatingAccount: "Konto wird erstellt…",
      signUpWithGoogle: "Mit Google registrieren",
      or: "oder",
      haveAccount: "Haben Sie bereits ein Konto?",
      signIn: "Anmelden →",
      backHome: "← Zurück zur Startseite",
      signUpFailedDefault: "Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.",
      profileSetupFailed: "Konto erstellt, aber die Profileinrichtung ist fehlgeschlagen. Bitte kontaktieren Sie den Support.",
      phoneInvalid: "Bitte geben Sie Ihre vollständige Telefonnummer mit Ländervorwahl ein (z. B. +212 6XX XXX XXX oder +33 6 XX XX XX XX).",
      confirmEmail: "Fast geschafft! Prüfen Sie Ihren Posteingang und bestätigen Sie Ihre E-Mail-Adresse, um Ihr Konto zu aktivieren.",
    },
    dashboard: {
      aiConcierge: "KI-Concierge",
      welcome: "Willkommen im",
      fallback: "Willkommen im Riad Dar D'Art",
      howCanIHelp: "Wie kann ich Ihnen heute helfen?",
      signOut: "Abmelden",
      welcomeGuest: "Willkommen, Gast",
      poweredBy: "Unterstützt von Claude AI · Antworten dienen nur zur Information",
      quickPrompts: [
        "Wann gibt es Frühstück?",
        "Ausflug buchen",
        "Zimmerservice anfordern",
        "Welche Ausflüge bieten Sie an?",
        "Wann ist der Check-out?",
      ],
      guestPortal: "Ihr persönliches Gästeportal",
      welcomeBack: "Herzlich willkommen zurück",
      yourStay: "Ihr Aufenthalt im",
      checkOut: "Check-out",
      accommodation: "Ihre Unterkunft",
      includedInStay: "In Ihrem Aufenthalt inbegriffen",
      servicesAmenities: "Dienstleistungen & Ausstattung",
      marrakechBeyond: "Marrakesch & Umgebung",
      excursionsHeading: "Ausflüge",
      goodToKnow: "Gut zu wissen",
      importantInfo: "Wichtige Informationen",
      endOfStay: "Aufenthaltsende",
      enjoyedStay: "Hat Ihnen Ihr Aufenthalt gefallen?",
      checkoutDesc: "Wir würden uns über Ihr Feedback freuen. Checken Sie aus und hinterlassen Sie eine Bewertung, um zukünftigen Gästen bei der Entdeckung von Dar D'Art zu helfen.",
      checkoutReview: "Check-out & Bewertung hinterlassen",
      stayEnded: "Ihr Aufenthalt ist beendet",
      stayEndedThanks: "Vielen Dank für Ihren Aufenthalt bei uns",
      backToHome: "Zurück zur Startseite",
      bookViaWhatsApp: "Über WhatsApp buchen",
      whatsappMessages: {
        hammam: "Hallo, ich möchte einen Hammam & Spa buchen",
        airportTransfer: "Hallo, ich möchte einen Flughafentransfer buchen",
        dinner: "Hallo, ich möchte ein Abendessen im Riad buchen",
        agafay: "Hallo, ich möchte die Agafay-Wüsten-Exkursion buchen",
        ourikaValley: "Hallo, ich möchte die Ourika-Tal-Exkursion buchen",
        essaouira: "Hallo, ich möchte den Tagesausflug nach Essaouira buchen",
        cityTour: "Hallo, ich möchte einen geführten Stadttag buchen",
      },
      services: {
        breakfast: {
          name: "Frühstück",
          detail: "8:00 – 10:30 Uhr · Inbegriffen",
          desc: "Traditionelles marokkanisches Frühstück im offenen Innenhof. Tee, Kaffee, marokkanische Pfannkuchen, frischer Orangensaft, Käse, Honig und Eier auf Wunsch. Express-Frühstück für frühe Abreisen verfügbar.",
        },
        hammam: {
          name: "Hammam & Spa",
          detail: "20€/Person · Min. 2 Personen",
          desc: "Authentisches Hammam-Ritual mit Peeling und Arganseife. Massage: 30 Min. 30€ · 60 Min. 40€. Geöffnet 9:00–21:00 Uhr — mindestens 2 Stunden im Voraus per WhatsApp reservieren.",
        },
        pool: {
          name: "Pool",
          detail: "Kostenlos · Handtücher bereitgestellt",
          desc: "Entspannen Sie sich in unserem privaten Innenhofpool. Handtücher werden bereitgestellt — bitte vor dem Eintritt duschen.",
        },
        airportTransfer: {
          name: "Flughafentransfer",
          detail: "20€ (1–4, 07:00–22:00) · 25€ (1–4, 23:00–06:00) · 30€ (5–7)",
          desc: "Private, klimatisierte Transfers. Per WhatsApp mindestens 2,5 Stunden vor Ihrem Flug buchen.",
        },
        wifi: {
          name: "WLAN",
          detail: "Inbegriffen",
          desc: "Kostenloses Hochgeschwindigkeits-WLAN im gesamten Riad. Die Zugangsdaten erhalten Sie beim Check-in.",
        },
        concierge: {
          name: "Concierge",
          detail: "WhatsApp +212 709 086 496 · 08:00–22:00",
          desc: "Unser Rezeptionsteam ist täglich von 08:00 bis 22:00 Uhr erreichbar, um alles zu arrangieren, was Sie benötigen — von Restaurantreservierungen bis hin zu Ausflügen. Der KI-Concierge in der App ist rund um die Uhr verfügbar.",
        },
      },
      info: {
        checkIn: { label: "Check-in", value: "14:00 Uhr", sub: "Ankunft ab 10:30 Uhr möglich" },
        checkOut: { label: "Check-out", value: "12:00 Uhr", sub: "Spätes Auschecken auf Anfrage" },
        dinner: { label: "Abendessen im Riad", value: "20€/Person", sub: "Min. 4 Personen · Kinder <12 12€, <4 gratis · 1 Tag im Voraus reservieren" },
        water: { label: "Wasser", value: "20 Dirham", sub: "Pro Flasche · Küche verfügbar" },
      },
      excursionsList: {
        agafay: { subtitle: "Quad · Kamel · Abendessen · Feuershow", price: "Pack A 30 € · Pack B 55 €" },
        "ourika-valley": { subtitle: "Atlas · Wasserfälle · Berberdörfer · 9:00–17:00", price: "20 € · 27 € mit Mahlzeit" },
        essaouira: { subtitle: "UNESCO-Medina · Atlantikküste · 8:00–20:00", price: "25 € / Person" },
        "city-tour": { subtitle: "Medina · Souks · Versteckte Orte", price: "65 € / Gruppe (1–4 Personen)" },
      },
    },
    survey: {
      checkOut: "Check-out",
      howWasStay: "Wie war Ihr Aufenthalt,",
      overallRating: "Gesamtaufenthalt",
      roomsRating: "Zimmer",
      foodRating: "Essen",
      staffRating: "Personal",
      cleanlinessRating: "Sauberkeit",
      conciergeRating: "KI-Concierge",
      comments: "Haben Sie Kommentare?",
      optional: "(optional)",
      commentsPlaceholder: "Erzählen Sie uns von Ihrer Erfahrung…",
      cancel: "Abbrechen",
      submitting: "Wird übermittelt…",
      complete: "Check-out abschließen",
      thankYou: "Danke,",
      farewellTitle: "Danke für Ihren Aufenthalt bei uns! ✨",
      farewellMessage: "Schauen Sie in Ihr WhatsApp — wir haben Ihnen einen kleinen Abschiedsgruß geschickt.",
      alreadyCheckedOut: "Ihr Check-out wurde bereits erfasst — nochmals vielen Dank für Ihren Aufenthalt. Wir hoffen, Sie bald wiederzusehen!",
      signingOut: "Abmelden…",
      pleaseRate: "Bitte bewerten Sie",
      beforeSubmitting: "vor dem Absenden.",
      sessionExpired: "Sitzung abgelaufen. Bitte melden Sie sich erneut an.",
      failedToSubmit: "Umfrage konnte nicht übermittelt werden. Bitte versuchen Sie es erneut.",
      checkoutFailed: "Beim Check-out ist etwas schiefgelaufen. Sie wurden nicht abgemeldet — bitte versuchen Sie es erneut.",
      phoneInvalid: "Bitte geben Sie in Ihrem Profil Ihre vollständige Telefonnummer mit Ländervorwahl ein (z. B. +212 6XX XXX XXX oder +33 6 XX XX XX XX) und versuchen Sie es erneut.",
      retry: "Erneut versuchen",
    },
    concierge: {
      title: "Ihr Persönlicher Concierge",
      subtitle: "Fragen? Buchungen? Schreiben Sie uns auf WhatsApp — wir antworten in Ihrer Sprache, rund um die Uhr.",
      chatButton: "Auf WhatsApp chatten",
      fabLabel: "Chatten Sie mit uns auf WhatsApp",
      prefill: "Hallo! Ich bin Gast im Riad Dar D'Art und habe eine Frage.",
    },
    common: {
      loading: "Laden…",
      close: "Schließen",
      success: "Erfolg",
      toggleMenu: "Menü ein-/ausblenden",
      logout: "Abmelden",
      lastUpdated: "Letzte Aktualisierung: Juni 2026",
      cityLine: "Medina Marrakesch 40000, Marokko",
    },
    home: {
      riad19Intro: "Im Herzen der Medina von Marrakesch gelegen, befindet sich das Riad Dar D'Art 19 in der 19 Derb Zemrane, Bab Doukkala. Ein Heiligtum marokkanischer Kunst, Architektur und zeitloser Gastfreundschaft.",
      riad141Intro: "Im Herzen der Medina von Marrakesch gelegen, befindet sich das Riad Dar D'Art 141 in der 141 Derb Arset Aouzal, Bab Doukkala. Ein Heiligtum marokkanischer Kunst, Architektur und zeitloser Gastfreundschaft.",
      signInForRooms: "Melden Sie sich an, um die Zimmer Ihres Riads zu sehen",
      rooms19: {
        terrasseLulu: "Eine charmante Suite mit privater Terrasse mit Blick auf den Brunnenhof, die traditionelles Zellige-Mosaik mit modernem Komfort verbindet.",
        africa: "Warme, erdige Töne, geschnitzte Zedernholzdecken und eine warme, afrikanisch inspirierte Dekoration schaffen einen unvergesslichen Rückzugsort.",
        gazelle: "Unsere geräumige Familiensuite mit originalen Zellige-Mosaiken, hochwertiger Bettwäsche und Platz für die ganze Familie.",
        frida: "Ein lebendiger, kunstvoller Rückzugsort inspiriert von kräftigen Farben und kreativem Geist, mit direktem Gartenzugang.",
        rosa: "Ein ruhiges Refugium in sanften Rosatönen mit Zellige-Böden und Blick auf den Brunnen des Innenhofs.",
      },
      rooms141: {
        lexicon: "Eine literarisch inspirierte Suite in warmen Bernsteintönen, handbemalten Gipswänden und einem Himmelbett mit Berberstoffen.",
        mategot: "Mitternachtsblaue Tadelakt-Wände, Messinglaternen und eine private Sitzecke im Innenhof, inspiriert vom marokkanischen Design der Jahrhundertmitte.",
        chevrerie: "Durchflutet von natürlichem Licht, verbindet diese Suite rustikalen Charme mit Dachterrassenzugang und einer traditionellen Hammam-Wanne.",
        poupee: "Ein Mosaikmeisterwerk — handgeschnittene Fliesen vom Boden bis zur Decke und ein Kingsize-Bett aus geschnitztem Zedernholz in verspielter Umgebung.",
        zagora: "Erinnert an den Wüstensüden, mit warmen Sandsteintönen, geometrischen Mustern und einer privaten Terrasse.",
      },
      excursionsList: {
        agafayExpress: { name: "Agafay-Wüste — Pack A Express", desc: "Quad (40 Min.), Kamelritt (10 Min.), Abendessen, Feuershow, Pool und Transport inklusive.", price: "30 € / Person" },
        agafayFull: { name: "Agafay-Wüste — Pack B Full Experience", desc: "Quad (1 Std.), Kamelritt (20 Min.), Abendessen, Feuershow, Pool und Transport inklusive.", price: "55 € / Person" },
        essaouira: { name: "Tagesausflug nach Essaouira", desc: "Ein ganzer Tag an der Atlantikküste — UNESCO-Medina, Hafen und Stadtmauern. Abfahrt 8:00, Rückkehr 20:00 Uhr.", price: "25 € / Person" },
        ourika: { name: "Ourika-Tal", desc: "Atlasgebirge, Wasserfälle und Berberdörfer. Abfahrt 9:00, Rückkehr 17:00 Uhr. 27 € inkl. Mahlzeit.", price: "Ab 20 € / Person" },
        cityDay: { name: "Geführter Stadttag", desc: "Ein ganzer Tag in Marrakesch mit einem erfahrenen lokalen Guide — Medina, Souks und versteckte Orte.", price: "65 € / Gruppe (1–4)" },
      },
      servicesList: {
        breakfast: { name: "Frühstück", desc: "Traditionelles marokkanisches Frühstück, täglich im Freiluft-Innenhof serviert." },
        hammamSpa: { name: "Hammam & Spa", desc: "Authentische Hammam-Rituale und erholsame Spa-Behandlungen vor Ort." },
        airportTransfer: { name: "Flughafentransfer", desc: "Private, klimatisierte Transfers rund um die Uhr direkt vor Ihre Tür." },
        rooftopTerrace: { name: "Dachterrasse", desc: "Exklusive Dachterrasse mit Panoramablick über die Medina von Marrakesch." },
        highSpeedWifi: { name: "Highspeed-WLAN", desc: "Kostenloses Highspeed-Internet in beiden Riads." },
        concierge: { name: "Concierge", desc: "Ein persönlicher Concierge, der jedes Detail Ihres Aufenthalts organisiert." },
      },
    },
    completeProfile: {
      heading: "Vervollständigen Sie Ihr Profil",
      saving: "Wird gespeichert…",
      continueToDashboard: "Weiter zum Dashboard",
      saveFailed: "Profil konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.",
      phone: "Telefonnummer",
      phonePlaceholder: "Mit Ländervorwahl, z. B. +49 151 23456789",
      phoneRequired: "Bitte geben Sie Ihre Telefonnummer ein.",
    },
    aboutPage: {
      ourStory: "Unsere Geschichte",
      title: "Über Dar D'Art",
      heritageLabel: "Erbe",
      heading: "Ein lebendiges Stück Marrakesch",
      intro: "Eingebettet in die alten Mauern der Medina von Marrakesch, ist Riad Dar D'Art ein Heiligtum marokkanischer Kunst, Architektur und zeitloser Gastfreundschaft. Der Name bedeutet „Haus der Kunst“ — und jeder Winkel des Anwesens spiegelt diese Identität wider.",
      riad19Welcome: "Wir freuen uns, Sie im Riad Dar D'Art 19 willkommen zu heißen, in der 19 Derb Zemrane, Bab Doukkala. Ein Zeugnis jahrhundertealter andalusischer Handwerkskunst — Mosaikhöfe, handgeschnitzte Zedernbögen und der Duft von Orangenblüten.",
      riad141Welcome: "Wir freuen uns, Sie im Riad Dar D'Art 141 willkommen zu heißen, in der 141 Derb Arset Aouzal, Bab Doukkala. Ein Zeugnis jahrhundertealter andalusischer Handwerkskunst — Mosaikhöfe, handgeschnitzte Zedernbögen und der Duft von Orangenblüten.",
      bothWelcome: "Wir betreiben zwei wunderschön restaurierte Anwesen: Riad 19 in der 19 Derb Zemrane und Riad 141 in der 141 Derb Arset Aouzal. Jedes ist ein Zeugnis jahrhundertealter andalusischer Handwerkskunst — Mosaikhöfe, handgeschnitzte Zedernbögen und der Duft von Orangenblüten.",
      mission: "Unsere Mission ist es, Gästen ein authentisches marokkanisches Erlebnis zu bieten, ohne auf modernen Komfort zu verzichten. Deshalb haben wir einen KI-gestützten Concierge geschaffen, der jedem Gast zu jeder Stunde luxuriösen Service bietet.",
      whatWeStandFor: "Wofür wir stehen",
      ourValues: "Unsere Werte",
      values: {
        hospitality: { title: "Gastfreundschaft", desc: "Jeder Gast wird als geschätzter Besucher willkommen geheißen. Unsere Philosophie des „dar“ — was Zuhause bedeutet — leitet jede Interaktion." },
        authenticity: { title: "Authentizität", desc: "Originale Zellige-Mosaike, handgeschnitztes Zedernholz und traditionelle Rezepte, die über Generationen bewahrt wurden. Nichts hier ist eine Nachbildung." },
        innovation: { title: "Innovation", desc: "Wir verbinden jahrhundertealte Tradition mit modernem Komfort — einschließlich eines KI-Concierge, der Ihre Sprache spricht und Ihren Aufenthalt kennt." },
      },
      theProperties: "Die Anwesen",
      yourRiad: "Ihr Riad",
      twoRiads: "Zwei Riads, eine Seele",
      riad19Desc: "Das ursprüngliche Anwesen mit fünf intimen Gästesuiten, die um einen Mosaik-Brunnenhof angeordnet sind. Bekannt für seine originalen Fliesen aus dem 17. Jahrhundert und die Dachterrasse mit Panoramablick auf die Medina.",
      riad141Desc: "Ein wunderschön restauriertes Riad mit fünf unverwechselbaren Zimmern und Suiten, einem privaten Hammam und einem üppigen Innengarten mit Jasmin und Orangenbäumen. Perfekt für Familien und Gruppen.",
      experienceItYourself: "Erleben Sie es selbst",
      ctaDesc: "Bereit, bei uns zu übernachten? Kontaktieren Sie uns oder entdecken Sie unsere Zimmer.",
      viewRooms: "Zimmer ansehen",
    },
    contactPage: {
      reachOut: "Kontaktieren Sie uns",
      ourLocations: "Unsere Standorte",
      directContact: "Direkter Kontakt",
      whatsappLabel: "WhatsApp: +212 709 086 496",
      hours: "Öffnungszeiten",
      deskHours: "Rezeption täglich verfügbar, 08:00 – 22:00 Uhr",
      conciergeAvailable: "KI-Concierge rund um die Uhr verfügbar über",
      chatOnWhatsApp: "Auf WhatsApp chatten",
      whatsappDesc: "Der schnellste Weg, uns zu erreichen — Fragen, Buchungen und alles rund um Ihren Aufenthalt.",
      whatsappPrefill: "Hallo! Ich habe eine Frage zum Riad Dar D'Art",
    },
    faqPage: {
      helpSupport: "Hilfe & Support",
      title: "Häufig gestellte Fragen",
      stillHaveQuestions: "Noch Fragen?",
      chatWithConcierge: "Chatten Sie mit unserem KI-Concierge",
      ctaDesc: "Ihr persönlicher Concierge ist rund um die Uhr verfügbar und spricht Ihre Sprache.",
      openConcierge: "Concierge öffnen",
      categories: [
        {
          category: "Check-in & Check-out",
          items: [
            { q: "Um wie viel Uhr sind Check-in und Check-out?", a: "Die Ankunft ist ab 10:30 Uhr möglich (wir bewahren Ihr Gepäck auf); die Zimmer sind ab 14:00 Uhr bezugsfertig. Der Check-out erfolgt bis 12:00 Uhr. Früher Check-in und später Check-out können je nach Verfügbarkeit arrangiert werden — fragen Sie einfach Ihren KI-Concierge oder kontaktieren Sie uns im Voraus." },
            { q: "Wo hole ich die Schlüssel ab?", a: "Unser Team empfängt Sie am Eingang des Riads. Bei später Ankunft teilen Sie uns bitte Ihre voraussichtliche Ankunftszeit mit, damit jemand da ist, um Sie willkommen zu heißen." },
            { q: "Kann ich Gepäck vor dem Check-in oder nach dem Check-out lassen?", a: "Ja, wir bewahren Ihr Gepäck gerne am Anreisetag auf, bevor Ihr Zimmer bereit ist, oder am Abreisetag nach dem Check-out." },
          ],
        },
        {
          category: "Zimmer & Ausstattung",
          items: [
            { q: "Ist WLAN verfügbar?", a: "Ja, kostenloses Highspeed-WLAN ist in beiden Riads inbegriffen. Die Zugangsdaten erhalten Sie beim Check-in." },
            { q: "Gibt es eine Klimaanlage?", a: "Alle Zimmer sind mit Klimaanlage und Heizung ausgestattet, um ganzjährigen Komfort im wechselhaften Klima Marrakeschs zu gewährleisten." },
          ],
        },
        {
          category: "Dienstleistungen",
          items: [
            { q: "Was ist im Frühstück enthalten?", a: "Wir servieren täglich von 8:00 bis 10:30 Uhr ein traditionelles marokkanisches Frühstück im Innenhof — Tee, Kaffee, marokkanische Pfannkuchen, Käse, Marmelade, Honig, Butter, Obstsalat, frischer Orangensaft, Brot, Kuchen, Kirschtomaten, Gurke, schwarze Oliven und Eier nach Wunsch. Das Menü variiert täglich. Für frühe Abreisen gibt es ein Express-Frühstück (am Vorabend anfragen). Glutenfrei kann nicht garantiert werden — wir empfehlen, eigene glutenfreie Produkte mitzubringen." },
            { q: "Gibt es einen Pool?", a: "Riad 141 verfügt über einen kleinen Tauchpool im Gartenhof, der allen Gästen beider Anwesen zur Verfügung steht." },
            { q: "Wie buche ich den Hammam?", a: "Das Spa ist von 9:00 bis 21:00 Uhr geöffnet. Der Hammam kostet 20 €/Person bei mindestens 2 Personen; Massagen kosten 30 € (30 Min.) oder 40 € (60 Min.). Reservieren Sie mindestens 2 Stunden im Voraus per WhatsApp oder über Ihren KI-Concierge." },
          ],
        },
        {
          category: "Ausflüge",
          items: [
            { q: "Wie buche ich einen Ausflug?", a: "Sie können jeden Ausflug über Ihren KI-Concierge oder per WhatsApp anfragen. Wir empfehlen, Tagesausflüge mindestens 24 Stunden im Voraus zu buchen." },
            { q: "Wie lautet die Stornierungsrichtlinie?", a: "Die Stornierung ist bis 14 Tage vor Ihrer Ankunft kostenlos. Für Änderungen danach kontaktieren Sie bitte unser Team per WhatsApp." },
            { q: "Können Sie individuelle Privattouren organisieren?", a: "Absolut. Wir arbeiten mit erfahrenen lokalen Guides und privaten Fahrern zusammen, um maßgeschneiderte Erlebnisse zu schaffen. Kontaktieren Sie uns mit Ihren Interessen, und wir gestalten etwas Besonderes." },
          ],
        },
        {
          category: "KI-Concierge",
          items: [
            { q: "Wobei kann mir der KI-Concierge helfen?", a: "Ihr KI-Concierge kann Fragen zu Ihrem Zimmer, den Riad-Einrichtungen, Frühstückszeiten, lokalen Empfehlungen, Ausflugsbuchungsanfragen, Check-in-/Check-out-Zeiten und vielem mehr beantworten. Er ist rund um die Uhr verfügbar." },
            { q: "Welche Sprachen spricht der Concierge?", a: "Der KI-Concierge erkennt automatisch Ihre Sprache und antwortet darin. Er unterstützt Englisch, Französisch, Arabisch, Spanisch, Deutsch, Italienisch und viele weitere." },
            { q: "Sind meine Gespräche privat?", a: "Ja. Ihre Chatnachrichten werden sicher verarbeitet und nicht an Dritte weitergegeben. Weitere Einzelheiten finden Sie in unserer Datenschutzrichtlinie." },
            { q: "Kann der KI-Concierge tatsächliche Buchungen vornehmen?", a: "Derzeit liefert der Concierge Informationen und kann Anfragen an unser Team weiterleiten. Für bestätigte Buchungen (Ausflüge, Hammam, Transfers) wird sich unser Personal melden, um die Details zu finalisieren." },
          ],
        },
      ],
    },
    howItWorksPage: {
      gettingStarted: "Erste Schritte",
      subtitle: "Von der Buchung bis zum Chat mit Ihrem KI-Concierge in vier einfachen Schritten.",
      whyItMatters: "Warum es wichtig ist",
      aSmarterStay: "Ein intelligenterer Aufenthalt",
      ready: "Bereit?",
      startExperience: "Starten Sie Ihr Erlebnis",
      ctaDesc: "Erstellen Sie Ihr kostenloses Konto in weniger als einer Minute.",
      steps: [
        { title: "Buchen Sie Ihren Aufenthalt", desc: "Reservieren Sie Ihr Zimmer im Riad Dar D'Art über unsere Website, Booking.com oder Airbnb." },
        { title: "Erstellen Sie Ihr Konto", desc: "Registrieren Sie sich kostenlos in weniger als einer Minute — nur Ihr Name, Ihre E-Mail, Ihre Telefonnummer und das Riad, in dem Sie übernachten." },
        { title: "Entdecken Sie Ihr Gästeportal", desc: "Alles zu Ihrem Aufenthalt an einem Ort — Ihre Zimmer, Dienstleistungen, Ausflüge und praktische Informationen." },
        { title: "Chatten Sie rund um die Uhr", desc: "Ihr KI-Concierge ist rund um die Uhr verfügbar. Fragen Sie alles — Frühstückszeiten, Ausflugsbuchungen, lokale Tipps und mehr." },
      ],
      benefits: [
        { title: "Rund um die Uhr verfügbar", desc: "Kein Warten an der Rezeption. Erhalten Sie zu jeder Stunde, Tag und Nacht, Antworten auf Ihre Fragen." },
        { title: "Mehrsprachig", desc: "Der Concierge antwortet automatisch in Ihrer Sprache — Englisch, Französisch, Arabisch, Spanisch und mehr." },
        { title: "Personalisiert", desc: "Kennt Ihr Riad, Ihre Zimmer und Ihre Dienstleistungen. Antworten sind spezifisch für Dar D'Art, nicht generisch." },
      ],
    },
    privacyPage: {
      legal: "Rechtliches",
      title: "Datenschutzrichtlinie",
      intro: "Riad Dar D'Art („wir“, „uns“ oder „unser“) betreibt diese Gäste-Concierge-Plattform (dar-dart-saas.vercel.app). Diese Datenschutzrichtlinie beschreibt, wie wir Ihre persönlichen Daten erheben, verwenden und schützen, wenn Sie unseren Dienst nutzen.",
      sections: [
        {
          title: "1. Informationen, die wir sammeln",
          body: `Wenn Sie ein Konto erstellen und die Dar D'Art Concierge-Plattform nutzen, erheben wir folgende Informationen:

**Kontoinformationen:** Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer, das gewählte Riad und Ihre bevorzugte Sprache, angegeben bei der Registrierung.

**Chat-Nachrichten:** Der Text Ihrer Gespräche mit dem KI-Concierge. Diese werden verwendet, um Antworten zu generieren und die Servicequalität zu verbessern.

**Nutzungsdaten:** Grundlegende Analysen wie besuchte Seiten und Sitzungsdauer. Diese Daten werden aggregiert und anonymisiert.`,
        },
        {
          title: "2. Wie wir Ihre Informationen verwenden",
          body: `Wir verwenden die von uns erhobenen Informationen, um:

- den KI-Concierge-Service bereitzustellen und zu betreiben
- Ihr Konto zu authentifizieren und Ihren Gaststatus zu überprüfen
- Ihre Concierge-Anfragen zu bearbeiten und Buchungsanfragen an unser Team weiterzuleiten
- die Genauigkeit und Relevanz der KI-Antworten zu verbessern
- mit Ihnen über Ihren Aufenthalt oder Ihr Konto zu kommunizieren

Wir verkaufen Ihre persönlichen Daten nicht an Dritte.`,
        },
        {
          title: "3. Datenspeicherung",
          body: `Kontodaten werden für die Dauer Ihres Aufenthalts plus 90 Tage gespeichert, danach werden sie dauerhaft gelöscht, sofern Sie keine frühere Löschung beantragen.

Der Gesprächsverlauf mit dem Concierge wird für die Dauer Ihres Aufenthalts und bis zu 12 Monate danach aufbewahrt, um die Servicequalität zu verbessern; danach kann er gelöscht werden. Sie können jederzeit die Löschung Ihres Chatverlaufs beantragen, indem Sie uns kontaktieren.`,
        },
        {
          title: "4. Dienste Dritter",
          body: `Unser Concierge-Service läuft über WhatsApp. Unterhaltungen mit unserem WhatsApp-Concierge werden von unserem Automatisierungssystem und einem KI-Anbieter (Anthropic) verarbeitet, um Ihre Fragen zu beantworten. Anthropic verarbeitet diese Daten gemäß seiner eigenen Datenschutzrichtlinie. Der Gesprächsverlauf wird gespeichert, um die Qualität und Genauigkeit der Antworten zu verbessern.

Unsere Plattform wird auf Vercel gehostet. Ihre Daten werden gemäß den Datenverarbeitungsbedingungen von Vercel gespeichert und verarbeitet.`,
        },
        {
          title: "5. Ihre Rechte",
          body: `Gemäß der DSGVO und den geltenden Datenschutzgesetzen haben Sie das Recht:

- **Zugriff** auf die personenbezogenen Daten zu erhalten, die wir über Sie speichern
- **Berichtigung** ungenauer oder unvollständiger Daten
- **Löschung** Ihres Kontos und Ihrer persönlichen Daten
- **Widerspruch** gegen die Verarbeitung Ihrer Daten einzulegen
- **Datenübertragbarkeit** — eine Kopie Ihrer Daten in einem maschinenlesbaren Format anzufordern

Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter contact@riaddartmarrakech.com. Wir antworten innerhalb von 30 Tagen.`,
        },
        {
          title: "6. Cookies",
          body: `Wir verwenden nur essenzielle Cookies, die erforderlich sind, um Sie angemeldet zu halten und Ihre Sitzung aufrechtzuerhalten. Wir verwenden keine Werbe-Cookies oder Tracking-Cookies von Drittanbietern.`,
        },
        {
          title: "7. Sicherheit",
          body: `Wir setzen branchenübliche Sicherheitsmaßnahmen zum Schutz Ihrer Daten ein, einschließlich verschlüsselter Datenübertragung (HTTPS) und sicherer Passwort-Hashing-Verfahren. Allerdings ist keine Übertragungsmethode über das Internet zu 100 % sicher.`,
        },
        {
          title: "8. Kontakt bei Datenschutzfragen",
          body: `Wenn Sie Fragen zu dieser Datenschutzrichtlinie oder zum Umgang mit Ihren Daten haben, kontaktieren Sie uns bitte:

**E-Mail:** contact@riaddartmarrakech.com
**Adresse:** 19 Derb Zemrane, Medina Marrakesch 40000, Marokko`,
        },
      ],
    },
    termsPage: {
      legal: "Rechtliches",
      title: "Nutzungsbedingungen",
      intro: "Diese Nutzungsbedingungen regeln Ihre Nutzung der Dar D'Art Gäste-Concierge-Plattform, betrieben von Riad Dar D'Art, mit Sitz in 19 Derb Zemrane, Marrakesch, Marokko. Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie unseren Dienst nutzen.",
      sections: [
        {
          title: "1. Annahme der Bedingungen",
          body: `Durch die Erstellung eines Kontos und die Nutzung der Dar D'Art Gäste-Concierge-Plattform erklären Sie sich damit einverstanden, an diese Nutzungsbedingungen gebunden zu sein. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie den Dienst bitte nicht.

Diese Bedingungen können von Zeit zu Zeit aktualisiert werden. Die fortgesetzte Nutzung des Dienstes nach Änderungen stellt die Annahme der überarbeiteten Bedingungen dar.`,
        },
        {
          title: "2. Der Dienst",
          body: `Die Plattform ist ein kostenloser Informations- und Concierge-Begleiter für Gäste von Riad Dar D'Art. Die Registrierung ist offen — jeder, der einen Aufenthalt bei uns plant oder genießt, kann ein Konto erstellen.

Mit der Registrierung bestätigen Sie, dass die von Ihnen angegebenen Informationen (Name, E-Mail, Telefonnummer) korrekt sind und Ihnen gehören.`,
        },
        {
          title: "3. Nutzung des Dienstes",
          body: `Sie erklären sich damit einverstanden, die Plattform nur für rechtmäßige Zwecke und in einer mit diesen Bedingungen übereinstimmenden Weise zu nutzen. Sie dürfen nicht:

- den Dienst nutzen, um schädliche, beleidigende oder illegale Inhalte zu übermitteln
- versuchen, die Plattform zurückzuentwickeln, zu hacken oder zu stören
- Ihre Kontodaten mit anderen teilen
- den Dienst auf eine Weise nutzen, die dem Ruf von Riad Dar D'Art schaden könnte`,
        },
        {
          title: "4. Einschränkungen des KI-Concierge",
          body: `Der KI-Concierge liefert informative Antworten basierend auf allgemeinem Wissen über Riad Dar D'Art und Marrakesch. Seine Antworten:

- dienen nur zu Informationszwecken und stellen keine vertragliche Verpflichtung dar
- sind möglicherweise nicht immer genau oder aktuell
- sollten nicht für medizinische, rechtliche oder sicherheitskritische Entscheidungen herangezogen werden

Für bestätigte Reservierungen, Buchungen oder spezifische Vereinbarungen kontaktieren Sie bitte direkt unser Team.`,
        },
        {
          title: "5. Benutzerkonten",
          body: `Sie sind für die Wahrung der Vertraulichkeit Ihrer Kontodaten verantwortlich. Sie müssen uns unverzüglich benachrichtigen, wenn Sie einen unbefugten Zugriff auf Ihr Konto vermuten.

Konten sind persönlich und dürfen nicht geteilt werden. Wir können Konten nach dem Ende Ihres Aufenthalts im Einklang mit unserer Datenaufbewahrungsrichtlinie deaktivieren.`,
        },
        {
          title: "6. Geistiges Eigentum",
          body: `Alle Inhalte auf der Plattform — einschließlich Texte, Bilder, Design und das KI-Concierge-System — sind Eigentum von Riad Dar D'Art oder seinen Lizenzgebern und durch geltendes Recht zum Schutz geistigen Eigentums geschützt.

Sie dürfen keine Inhalte der Plattform ohne unsere vorherige schriftliche Zustimmung vervielfältigen, verbreiten oder abgeleitete Werke daraus erstellen.`,
        },
        {
          title: "7. Haftungsbeschränkung",
          body: `Im gesetzlich zulässigen Umfang haftet Riad Dar D'Art nicht für indirekte, zufällige, besondere oder Folgeschäden, die aus Ihrer Nutzung der Plattform entstehen.

Der Dienst wird „wie besehen" ohne jegliche Gewährleistung bereitgestellt. Wir garantieren nicht die Genauigkeit, Zuverlässigkeit oder Verfügbarkeit des KI-Concierge zu einem bestimmten Zeitpunkt.`,
        },
        {
          title: "8. Änderungen der Bedingungen",
          body: `Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Wir werden Nutzer über wesentliche Änderungen informieren, indem wir das Datum „Letzte Aktualisierung" oben auf dieser Seite aktualisieren.`,
        },
        {
          title: "9. Anwendbares Recht",
          body: `Diese Bedingungen unterliegen den Gesetzen des Königreichs Marokko. Etwaige Streitigkeiten aus diesen Bedingungen unterliegen der ausschließlichen Zuständigkeit der Gerichte von Marrakesch, Marokko.`,
        },
        {
          title: "10. Kontakt",
          body: `Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns bitte:

**E-Mail:** contact@riaddartmarrakech.com
**Adresse:** 19 Derb Zemrane, Medina Marrakesch 40000, Marokko`,
        },
      ],
    },
  },

  it: {
    nav: {
      howItWorks: "Come funziona",
      about: "Chi siamo",
      faq: "FAQ",
      contact: "Contatti",
      signIn: "Accedi",
      signUp: "Registrati",
      navigate: "Naviga",
      legal: "Legale",
    },
    hero: {
      location: "Marrakech, Marocco",
      title: "Riad Dar D'Art",
      tagline: "Il tuo rifugio di lusso nel cuore di Marrakech",
      exploreRooms: "Esplora le camere",
      contactUs: "Contattaci",
      scroll: "Scorri",
    },
    about: {
      label: "La Nostra Storia",
      heading: "Un Patrimonio Vivente nella Medina",
      body: "Immerso nelle antiche mura della medina di Marrakech, il Riad Dar D'Art è un santuario di arte marocchina, architettura e ospitalità senza tempo. Gestiamo due splendide proprietà restaurate:",
      and: "e",
      each: "— ciascuna testimonianza di secoli di artigianato andaluso. Cortili a mosaico, archi di cedro scolpiti a mano e il profumo dei fiori d'arancio vi accolgono in un mondo a parte rispetto al trambusto esterno, eppure a pochi passi dall'anima vibrante della città.",
    },
    rooms: {
      label: "Alloggio",
      heading: "Camere & Suite",
      suite: "Suite",
      viewRoom: "Vedi camera",
    },
    services: {
      label: "Servizi",
      heading: "Servizi & Strutture",
    },
    excursions: {
      label: "Esperienze",
      heading: "Escursioni Selezionate",
      inquire: "Richiedi info",
    },
    contact: {
      label: "Contattaci",
      heading: "Contatti & Prenotazioni",
      viewOnMap: "Vedi sulla mappa →",
      whatsapp: "WhatsApp",
      emailUs: "Scrivici",
    },
    footer: {
      tagline: "Un'esperienza di riad di lusso nel cuore della medina di Marrakech, guidata da un concierge AI sempre disponibile.",
      navigate: "Naviga",
      legal: "Legale",
      contact: "Contatti",
      copyright: "© 2026 Riad Dar D'Art — Marrakech, Marocco",
      privacy: "Informativa sulla privacy",
      terms: "Termini di servizio",
    },
    signIn: {
      conciergeAwaits: "Il tuo concierge personale ti aspetta",
      heading: "Bentornato",
      email: "Email",
      password: "Password",
      forgotPassword: "Password dimenticata?",
      submit: "Accedi",
      signingIn: "Accesso in corso…",
      continueWithGoogle: "Continua con Google",
      or: "o",
      noAccount: "Nuovo ospite?",
      createAccount: "Crea un account →",
      backHome: "← Torna alla home",
      resetHeading: "Reimposta la tua password",
      resetDesc: "Inserisci la tua email e ti invieremo un link per reimpostare la password.",
      sendResetLink: "Invia il link",
      resetEmailSent: "Controlla la tua casella di posta — ti abbiamo inviato un link per reimpostare la password.",
      newPassword: "Nuova password",
      confirmPassword: "Conferma password",
      updatePassword: "Aggiorna password",
      passwordUpdated: "Password aggiornata. Ti stiamo portando alla tua dashboard…",
      passwordMismatch: "Le password non coincidono.",
      passwordTooShort: "La password deve contenere almeno 6 caratteri.",
      backToSignIn: "← Torna all'accesso",
    },
    signUp: {
      conciergeAwaits: "Il tuo concierge personale ti aspetta",
      heading: "Crea il tuo account",
      subheading: "Crea il tuo account ospite gratuito per accedere al tuo concierge personale.",
      firstName: "Nome",
      lastName: "Cognome",
      nameOnReservation: "Nome sulla prenotazione",
      namePlaceholder: "Inserisci il nome utilizzato per la tua prenotazione",
      email: "Email",
      password: "Password",
      phone: "Numero di telefono",
      phonePlaceholder: "Con prefisso internazionale, es. +39 312 345 6789",
      phoneRequired: "Inserisci il tuo numero di telefono.",
      whichRiad: "In quale riad alloggi?",
      language: "Lingua preferita",
      languageRequired: "Seleziona la tua lingua per continuare.",
      riadRequired: "Seleziona il tuo riad per continuare.",
      terms: "Accetto i",
      termsLink: "Termini di servizio",
      and: "e la",
      privacyLink: "Informativa sulla privacy",
      submit: "Crea account",
      creatingAccount: "Creazione account in corso…",
      signUpWithGoogle: "Registrati con Google",
      or: "o",
      haveAccount: "Hai già un account?",
      signIn: "Accedi →",
      backHome: "← Torna alla home",
      signUpFailedDefault: "Registrazione fallita. Riprova.",
      profileSetupFailed: "Account creato ma la configurazione del profilo è fallita. Contatta l'assistenza.",
      phoneInvalid: "Inserisci il tuo numero di telefono completo con il prefisso internazionale (es. +212 6XX XXX XXX o +33 6 XX XX XX XX).",
      confirmEmail: "Ci siamo quasi! Controlla la tua casella di posta e conferma il tuo indirizzo email per attivare l'account.",
    },
    dashboard: {
      aiConcierge: "Concierge AI",
      welcome: "Benvenuto al",
      fallback: "Benvenuto al Riad Dar D'Art",
      howCanIHelp: "Come posso aiutarti oggi?",
      signOut: "Esci",
      welcomeGuest: "Benvenuto, Ospite",
      poweredBy: "Powered by Claude AI · Le risposte sono solo informative",
      quickPrompts: [
        "A che ora è la colazione?",
        "Prenota un'escursione",
        "Richiedi il servizio in camera",
        "Quali escursioni offrite?",
        "A che ora è il check-out?",
      ],
      guestPortal: "Il tuo portale ospite personalizzato",
      welcomeBack: "Bentornato",
      yourStay: "Il tuo soggiorno a",
      checkOut: "Check-out",
      accommodation: "Il tuo alloggio",
      includedInStay: "Incluso nel tuo soggiorno",
      servicesAmenities: "Servizi & Comodità",
      marrakechBeyond: "Marrakech & Dintorni",
      excursionsHeading: "Escursioni",
      goodToKnow: "Buono a sapersi",
      importantInfo: "Informazioni importanti",
      endOfStay: "Fine del soggiorno",
      enjoyedStay: "Ti è piaciuto il tuo soggiorno?",
      checkoutDesc: "Ci piacerebbe sentirti. Fai il check-out e lasciaci una recensione per aiutare i futuri ospiti a scoprire Dar D'Art.",
      checkoutReview: "Check-out & Lascia una recensione",
      stayEnded: "Il tuo soggiorno è terminato",
      stayEndedThanks: "Grazie per essere stato con noi",
      backToHome: "Torna alla home",
      bookViaWhatsApp: "Prenota via WhatsApp",
      whatsappMessages: {
        hammam: "Ciao, vorrei prenotare un Hammam & Spa",
        airportTransfer: "Ciao, vorrei prenotare un trasferimento aeroportuale",
        dinner: "Ciao, vorrei prenotare una cena al riad",
        agafay: "Ciao, vorrei prenotare l'escursione nel deserto di Agafay",
        ourikaValley: "Ciao, vorrei prenotare l'escursione nella valle di Ourika",
        essaouira: "Ciao, vorrei prenotare la gita di un giorno a Essaouira",
        cityTour: "Ciao, vorrei prenotare una giornata guidata in città",
      },
      services: {
        breakfast: {
          name: "Colazione",
          detail: "8:00 – 10:30 · Inclusa",
          desc: "Colazione marocchina tradizionale nel cortile all'aperto. Tè, caffè, crêpes marocchine, succo d'arancia fresco, formaggio, miele e uova su richiesta. Colazione express disponibile per le partenze anticipate.",
        },
        hammam: {
          name: "Hammam & Spa",
          detail: "€20/persona · Min 2 persone",
          desc: "Rituale hammam autentico con esfoliazione e sapone all'argan. Massaggio: 30 min €30 · 60 min €40. Aperto 9:00–21:00 — prenota con almeno 2 ore di anticipo via WhatsApp.",
        },
        pool: {
          name: "Piscina",
          detail: "Gratuita · Asciugamani forniti",
          desc: "Rilassati nella nostra piscina privata nel cortile. Gli asciugamani sono forniti — si prega di fare la doccia prima di entrare.",
        },
        airportTransfer: {
          name: "Trasferimento aeroporto",
          detail: "€20 (1–4, 07:00–22:00) · €25 (1–4, 23:00–06:00) · €30 (5–7)",
          desc: "Trasferimenti privati con aria condizionata. Prenota via WhatsApp almeno 2h30 prima del volo.",
        },
        wifi: {
          name: "WiFi",
          detail: "Incluso",
          desc: "WiFi gratuito ad alta velocità in tutto il riad. I dettagli di connessione vengono forniti al check-in.",
        },
        concierge: {
          name: "Concierge",
          detail: "WhatsApp +212 709 086 496 · 08:00–22:00",
          desc: "Il nostro team di reception è disponibile tutti i giorni dalle 08:00 alle 22:00 per organizzare qualsiasi cosa — dalle prenotazioni al ristorante alle escursioni. Il concierge IA dell'app è disponibile 24/7.",
        },
      },
      info: {
        checkIn: { label: "Check-in", value: "14:00", sub: "Arrivo possibile dalle 10:30" },
        checkOut: { label: "Check-out", value: "12:00", sub: "Tardivo possibile su richiesta" },
        dinner: { label: "Cena al Riad", value: "€20/persona", sub: "Min 4 persone · Bambini <12 €12, <4 gratis · Prenota 1 giorno prima" },
        water: { label: "Acqua", value: "20 dirham", sub: "A bottiglia · Cucina disponibile" },
      },
      excursionsList: {
        agafay: { subtitle: "Quad · Cammello · Cena · Spettacolo di fuoco", price: "Pack A 30 € · Pack B 55 €" },
        "ourika-valley": { subtitle: "Atlante · Cascate · Villaggi berberi · 9:00–17:00", price: "20 € · 27 € con pasto" },
        essaouira: { subtitle: "Medina UNESCO · Costa atlantica · 8:00–20:00", price: "25 € / persona" },
        "city-tour": { subtitle: "Medina · Souk · Luoghi nascosti", price: "65 € / gruppo (1–4 persone)" },
      },
    },
    survey: {
      checkOut: "Check-out",
      howWasStay: "Com'è stato il tuo soggiorno,",
      overallRating: "Soggiorno complessivo",
      roomsRating: "Camere",
      foodRating: "Cibo",
      staffRating: "Personale",
      cleanlinessRating: "Pulizia",
      conciergeRating: "Concierge AI",
      comments: "Hai commenti?",
      optional: "(opzionale)",
      commentsPlaceholder: "Raccontaci la tua esperienza…",
      cancel: "Annulla",
      submitting: "Invio in corso…",
      complete: "Completa il check-out",
      thankYou: "Grazie,",
      farewellTitle: "Grazie per aver soggiornato da noi! ✨",
      farewellMessage: "Controlla WhatsApp — ti abbiamo inviato un piccolo saluto d'addio.",
      alreadyCheckedOut: "Il tuo check-out è già stato registrato — grazie ancora per il soggiorno. Speriamo di rivederti presto!",
      signingOut: "Disconnessione in corso…",
      pleaseRate: "Per favore valuta",
      beforeSubmitting: "prima di inviare.",
      sessionExpired: "Sessione scaduta. Per favore accedi di nuovo.",
      failedToSubmit: "Invio del sondaggio fallito. Riprova.",
      checkoutFailed: "Qualcosa è andato storto durante il check-out. La tua sessione non è stata chiusa — riprova.",
      phoneInvalid: "Inserisci nel tuo profilo il tuo numero di telefono completo con il prefisso internazionale (es. +212 6XX XXX XXX o +33 6 XX XX XX XX) e riprova.",
      retry: "Riprova",
    },
    concierge: {
      title: "Il Tuo Concierge Personale",
      subtitle: "Domande? Prenotazioni? Scrivici su WhatsApp — ti rispondiamo nella tua lingua, 24 ore su 24.",
      chatButton: "Chatta su WhatsApp",
      fabLabel: "Chatta con noi su WhatsApp",
      prefill: "Ciao! Sono ospite del Riad Dar D'Art e ho una domanda.",
    },
    common: {
      loading: "Caricamento…",
      close: "Chiudi",
      success: "Successo",
      toggleMenu: "Apri/chiudi il menu",
      logout: "Esci",
      lastUpdated: "Ultimo aggiornamento: giugno 2026",
      cityLine: "Medina di Marrakech 40000, Marocco",
    },
    home: {
      riad19Intro: "Immerso nel cuore della medina di Marrakech, il Riad Dar D'Art 19 si trova al 19 Derb Zemrane, Bab Doukkala. Un santuario di arte marocchina, architettura e ospitalità senza tempo.",
      riad141Intro: "Immerso nel cuore della medina di Marrakech, il Riad Dar D'Art 141 si trova al 141 Derb Arset Aouzal, Bab Doukkala. Un santuario di arte marocchina, architettura e ospitalità senza tempo.",
      signInForRooms: "Accedi per vedere le camere del tuo riad",
      rooms19: {
        terrasseLulu: "Una suite affascinante con terrazza privata affacciata sul cortile della fontana, che unisce il tradizionale zellige a un comfort moderno.",
        africa: "Toni caldi e terrosi, soffitti in cedro intagliato e un caldo arredamento di ispirazione africana creano un rifugio indimenticabile.",
        gazelle: "La nostra ampia suite familiare con mosaici zellige originali, biancheria di pregio e spazio per tutta la famiglia.",
        frida: "Un rifugio vibrante e artistico ispirato a colori audaci e spirito creativo, con accesso diretto al giardino.",
        rosa: "Un santuario sereno in tenui tonalità rosa con pavimenti in zellige e vista sulla fontana del cortile interno.",
      },
      rooms141: {
        lexicon: "Una suite di ispirazione letteraria dai caldi toni ambrati, pareti in gesso dipinte a mano e un letto a baldacchino drappeggiato con tessuti berberi.",
        mategot: "Pareti in tadelakt blu notte, lanterne in ottone e un'area salotto privata nel cortile ispirata al design marocchino della metà del secolo.",
        chevrerie: "Inondata di luce naturale, questa suite unisce il fascino rustico all'accesso al tetto e una vasca hammam tradizionale.",
        poupee: "Un capolavoro di mosaico — piastrelle tagliate a mano dal pavimento al soffitto e un letto king in cedro intagliato in un'ambientazione fantasiosa.",
        zagora: "Evocativa del sud desertico, con calde tonalità di arenaria, motivi geometrici e una terrazza privata.",
      },
      excursionsList: {
        agafayExpress: { name: "Deserto di Agafay — Pack A Express", desc: "Quad (40 min), giro in cammello (10 min), cena, spettacolo di fuoco, piscina e trasporto inclusi.", price: "30 € / persona" },
        agafayFull: { name: "Deserto di Agafay — Pack B Esperienza Completa", desc: "Quad (1 h), giro in cammello (20 min), cena, spettacolo di fuoco, piscina e trasporto inclusi.", price: "55 € / persona" },
        essaouira: { name: "Gita di un Giorno a Essaouira", desc: "Una giornata intera sulla costa atlantica — medina patrimonio UNESCO, porto e bastioni. Partenza 8:00, rientro 20:00.", price: "25 € / persona" },
        ourika: { name: "Valle dell'Ourika", desc: "Montagne dell'Atlante, cascate e villaggi berberi. Partenza 9:00, rientro 17:00. 27 € con pasto incluso.", price: "Da 20 € / persona" },
        cityDay: { name: "Giornata Guidata in Città", desc: "Una giornata intera a Marrakech con una guida locale esperta — medina, souk e luoghi nascosti.", price: "65 € / gruppo (1–4)" },
      },
      servicesList: {
        breakfast: { name: "Colazione", desc: "Colazione marocchina tradizionale servita ogni giorno nel cortile all'aperto." },
        hammamSpa: { name: "Hammam & Spa", desc: "Autentici rituali hammam e rigeneranti trattamenti spa in loco." },
        airportTransfer: { name: "Trasferimento Aeroporto", desc: "Trasferimenti privati con aria condizionata disponibili 24/7 fino alla tua porta." },
        rooftopTerrace: { name: "Terrazza sul Tetto", desc: "Terrazza esclusiva con vista panoramica sulla medina di Marrakech." },
        highSpeedWifi: { name: "WiFi ad Alta Velocità", desc: "Internet gratuito ad alta velocità in entrambi i riad." },
        concierge: { name: "Concierge", desc: "Un concierge dedicato per organizzare ogni dettaglio del tuo soggiorno." },
      },
    },
    completeProfile: {
      heading: "Completa il tuo Profilo",
      saving: "Salvataggio…",
      continueToDashboard: "Continua alla Dashboard",
      saveFailed: "Impossibile salvare il profilo. Riprova.",
      phone: "Numero di telefono",
      phonePlaceholder: "Con prefisso internazionale, es. +39 312 345 6789",
      phoneRequired: "Inserisci il tuo numero di telefono.",
    },
    aboutPage: {
      ourStory: "La Nostra Storia",
      title: "Chi Siamo — Dar D'Art",
      heritageLabel: "Eredità",
      heading: "Un Pezzo di Marrakech Ancora Vivo",
      intro: "Immerso nelle antiche mura della medina di Marrakech, il Riad Dar D'Art è un santuario di arte marocchina, architettura e ospitalità senza tempo. Il nome significa “Casa dell'Arte” — e ogni angolo della proprietà riflette questa identità.",
      riad19Welcome: "Siamo lieti di darti il benvenuto al Riad Dar D'Art 19, situato al 19 Derb Zemrane, Bab Doukkala. Una testimonianza di secoli di artigianato andaluso — cortili a mosaico, archi di cedro scolpiti a mano e il profumo dei fiori d'arancio.",
      riad141Welcome: "Siamo lieti di darti il benvenuto al Riad Dar D'Art 141, situato al 141 Derb Arset Aouzal, Bab Doukkala. Una testimonianza di secoli di artigianato andaluso — cortili a mosaico, archi di cedro scolpiti a mano e il profumo dei fiori d'arancio.",
      bothWelcome: "Gestiamo due proprietà splendidamente restaurate: Riad 19 al 19 Derb Zemrane e Riad 141 al 141 Derb Arset Aouzal. Ciascuna è testimonianza di secoli di artigianato andaluso — cortili a mosaico, archi di cedro scolpiti a mano e il profumo dei fiori d'arancio.",
      mission: "La nostra missione è offrire agli ospiti un'esperienza marocchina autentica senza rinunciare al comfort moderno. Per questo abbiamo creato un concierge basato sull'IA che offre un servizio di lusso a ogni ospite, a qualsiasi ora.",
      whatWeStandFor: "In Cosa Crediamo",
      ourValues: "I Nostri Valori",
      values: {
        hospitality: { title: "Ospitalità", desc: "Ogni ospite viene accolto come un visitatore prezioso. La nostra filosofia del 'dar' — che significa casa — guida ogni interazione." },
        authenticity: { title: "Autenticità", desc: "Mosaici zellige originali, cedro intagliato a mano e ricette tradizionali tramandate nelle generazioni. Qui nulla è una replica." },
        innovation: { title: "Innovazione", desc: "Uniamo secoli di tradizione ai comfort moderni — incluso un concierge IA che parla la tua lingua e conosce il tuo soggiorno." },
      },
      theProperties: "Le Proprietà",
      yourRiad: "Il Tuo Riad",
      twoRiads: "Due Riad, Un'Unica Anima",
      riad19Desc: "La proprietà originale, con cinque intime suite per gli ospiti disposte attorno a un cortile con fontana a mosaico. Nota per le sue piastrelle originali del XVII secolo e la terrazza sul tetto con vista panoramica sulla medina.",
      riad141Desc: "Un riad splendidamente restaurato con cinque camere e suite uniche, un hammam privato e un lussureggiante giardino interno con gelsomino e alberi d'arancio. Perfetto per famiglie e gruppi.",
      experienceItYourself: "Vivilo di Persona",
      ctaDesc: "Pronto a soggiornare da noi? Contattaci o esplora le nostre camere.",
      viewRooms: "Vedi le Camere",
    },
    contactPage: {
      reachOut: "Contattaci",
      ourLocations: "Le Nostre Sedi",
      directContact: "Contatto Diretto",
      whatsappLabel: "WhatsApp: +212 709 086 496",
      hours: "Orari",
      deskHours: "Reception disponibile tutti i giorni, dalle 08:00 alle 22:00",
      conciergeAvailable: "Concierge IA disponibile 24/7 tramite",
      chatOnWhatsApp: "Chatta su WhatsApp",
      whatsappDesc: "Il modo più veloce per raggiungerci — domande, prenotazioni e tutto ciò che riguarda il tuo soggiorno.",
      whatsappPrefill: "Ciao! Ho una domanda sul Riad Dar D'Art",
    },
    faqPage: {
      helpSupport: "Assistenza & Supporto",
      title: "Domande Frequenti",
      stillHaveQuestions: "Hai Ancora Domande?",
      chatWithConcierge: "Chatta con il Nostro Concierge IA",
      ctaDesc: "Il tuo concierge personale è disponibile 24/7 e parla la tua lingua.",
      openConcierge: "Apri il Concierge",
      categories: [
        {
          category: "Check-in & Check-out",
          items: [
            { q: "A che ora sono il check-in e il check-out?", a: "L'arrivo è possibile dalle 10:30 (custodiamo i tuoi bagagli); le camere sono pronte dalle 14:00. Il check-out è entro le 12:00. Check-in anticipato e check-out posticipato possono essere organizzati in base alla disponibilità — chiedi semplicemente al tuo concierge IA o contattaci in anticipo." },
            { q: "Dove ritiro le chiavi?", a: "Il nostro team ti accoglierà all'ingresso del riad. Per arrivi tardivi, comunicaci l'orario di arrivo previsto in modo da assicurarci che qualcuno sia presente per accoglierti." },
            { q: "Posso lasciare i bagagli prima del check-in o dopo il check-out?", a: "Sì, siamo lieti di custodire i tuoi bagagli il giorno dell'arrivo prima che la camera sia pronta, o il giorno della partenza dopo il check-out." },
          ],
        },
        {
          category: "Camere & Comfort",
          items: [
            { q: "È disponibile il Wi-Fi?", a: "Sì, il Wi-Fi gratuito ad alta velocità è incluso in entrambi i riad. I dettagli di connessione vengono forniti al check-in." },
            { q: "C'è l'aria condizionata?", a: "Tutte le camere sono dotate di aria condizionata e riscaldamento, garantendo comfort tutto l'anno nel clima variabile di Marrakech." },
          ],
        },
        {
          category: "Servizi",
          items: [
            { q: "Cosa include la colazione?", a: "Serviamo una colazione marocchina tradizionale ogni giorno nel cortile, dalle 8:00 alle 10:30 — tè, caffè, crêpes marocchine, formaggio, marmellata, miele, burro, macedonia, succo d'arancia fresco, pane, torta, pomodorini, cetriolo, olive nere e uova a richiesta. Il menù varia ogni giorno. È disponibile una colazione express per le partenze anticipate (richiedila la sera prima). Il senza glutine non può essere garantito — consigliamo di portare i propri prodotti." },
            { q: "C'è una piscina?", a: "Il Riad 141 dispone di una piccola piscina nel cortile del giardino, disponibile per tutti gli ospiti alloggiati in entrambe le proprietà." },
            { q: "Come prenoto l'hammam?", a: "La spa è aperta dalle 9:00 alle 21:00. L'hammam costa 20 €/persona con un minimo di 2 persone; i massaggi costano 30 € (30 min) o 40 € (60 min). Prenota con almeno 2 ore di anticipo via WhatsApp o con il tuo concierge IA." },
          ],
        },
        {
          category: "Escursioni",
          items: [
            { q: "Come prenoto un'escursione?", a: "Puoi richiedere qualsiasi escursione tramite il tuo concierge IA o via WhatsApp. Consigliamo di prenotare almeno 24 ore in anticipo per le gite di un giorno." },
            { q: "Qual è la politica di cancellazione?", a: "La cancellazione è gratuita fino a 14 giorni prima del tuo arrivo. Per qualsiasi modifica successiva, contatta il nostro team via WhatsApp." },
            { q: "Potete organizzare tour privati personalizzati?", a: "Assolutamente sì. Collaboriamo con guide locali esperte e autisti privati per creare esperienze su misura. Contattaci con i tuoi interessi e progetteremo qualcosa di speciale." },
          ],
        },
        {
          category: "Concierge IA",
          items: [
            { q: "Con cosa può aiutarmi il concierge IA?", a: "Il tuo concierge IA può rispondere a domande sulla tua camera, sulle strutture del riad, sugli orari della colazione, su consigli locali, su richieste di prenotazione escursioni, sugli orari di check-in/check-out e molto altro. È disponibile 24/7." },
            { q: "Quali lingue parla il concierge?", a: "Il concierge IA rileva automaticamente la tua lingua e risponde in essa. Supporta inglese, francese, arabo, spagnolo, tedesco, italiano e molte altre." },
            { q: "Le mie conversazioni sono private?", a: "Sì. I tuoi messaggi di chat vengono elaborati in modo sicuro e non vengono condivisi con terze parti. Consulta la nostra Informativa sulla Privacy per tutti i dettagli." },
            { q: "Il concierge IA può effettuare prenotazioni reali?", a: "Attualmente il concierge fornisce informazioni e può inoltrare richieste al nostro team. Per le prenotazioni confermate (escursioni, hammam, trasferimenti), il nostro personale ti ricontatterà per finalizzare i dettagli." },
          ],
        },
      ],
    },
    howItWorksPage: {
      gettingStarted: "Per Iniziare",
      subtitle: "Dalla prenotazione alla chat con il tuo concierge IA in quattro semplici passaggi.",
      whyItMatters: "Perché è Importante",
      aSmarterStay: "Un Soggiorno Più Intelligente",
      ready: "Pronto?",
      startExperience: "Inizia la Tua Esperienza",
      ctaDesc: "Crea il tuo account gratuito in meno di un minuto.",
      steps: [
        { title: "Prenota il Tuo Soggiorno", desc: "Prenota la tua camera al Riad Dar D'Art tramite il nostro sito web, Booking.com o Airbnb." },
        { title: "Crea il Tuo Account", desc: "Registrati gratis in meno di un minuto — solo il tuo nome, la tua email, il numero di telefono e il riad in cui soggiorni." },
        { title: "Esplora il Tuo Portale Ospite", desc: "Trova tutto il tuo soggiorno in un unico posto — le tue camere, i servizi, le escursioni e le informazioni pratiche." },
        { title: "Chatta 24/7", desc: "Il tuo concierge IA è disponibile a qualsiasi ora. Chiedi qualsiasi cosa — orari della colazione, prenotazioni di escursioni, consigli locali e altro ancora." },
      ],
      benefits: [
        { title: "Disponibile 24/7", desc: "Niente più attese alla reception. Ricevi risposte alle tue domande a qualsiasi ora, giorno e notte." },
        { title: "Multilingue", desc: "Il concierge risponde automaticamente nella tua lingua — inglese, francese, arabo, spagnolo e altro ancora." },
        { title: "Personalizzato", desc: "Conosce il tuo riad, le tue camere e i tuoi servizi. Le risposte sono specifiche per Dar D'Art, non generiche." },
      ],
    },
    privacyPage: {
      legal: "Legale",
      title: "Informativa sulla Privacy",
      intro: "Riad Dar D'Art (“noi”, “ci” o “nostro”) gestisce questa piattaforma di concierge per ospiti (dar-dart-saas.vercel.app). Questa Informativa sulla Privacy descrive come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali quando utilizzi il nostro servizio.",
      sections: [
        {
          title: "1. Informazioni che Raccogliamo",
          body: `Quando crei un account e utilizzi la piattaforma concierge Dar D'Art, raccogliamo le seguenti informazioni:

**Informazioni sull'account:** il tuo nome, indirizzo email, numero di telefono, riad scelto e lingua preferita, forniti durante la registrazione.

**Messaggi di chat:** il testo delle tue conversazioni con il concierge IA. Vengono utilizzati per generare risposte e migliorare la qualità del servizio.

**Dati di utilizzo:** analisi di base come le pagine visitate e la durata della sessione. Questi dati sono aggregati e resi anonimi.`,
        },
        {
          title: "2. Come Utilizziamo le Tue Informazioni",
          body: `Utilizziamo le informazioni raccolte per:

- Fornire e gestire il servizio di concierge IA
- Autenticare il tuo account e verificare il tuo status di ospite
- Elaborare le tue richieste al concierge e inoltrare le richieste di prenotazione al nostro team
- Migliorare l'accuratezza e la pertinenza delle risposte dell'IA
- Comunicare con te riguardo al tuo soggiorno o account

Non vendiamo i tuoi dati personali a terzi.`,
        },
        {
          title: "3. Conservazione dei Dati",
          body: `I dati dell'account vengono conservati per la durata del tuo soggiorno più 90 giorni, dopodiché vengono eliminati definitivamente a meno che tu non richieda una cancellazione anticipata.

La cronologia delle conversazioni con il concierge viene conservata per la durata del tuo soggiorno e fino a 12 mesi dopo per migliorare la qualità del servizio, dopodiché può essere eliminata. Puoi richiedere la cancellazione della cronologia chat in qualsiasi momento contattandoci.`,
        },
        {
          title: "4. Servizi di Terze Parti",
          body: `Il nostro servizio di concierge funziona su WhatsApp. Le conversazioni con il nostro concierge WhatsApp vengono elaborate dal nostro sistema di automazione e da un fornitore di IA (Anthropic) per rispondere alle tue domande. Anthropic elabora questi dati in conformità con la propria informativa sulla privacy. La cronologia delle conversazioni viene conservata per migliorare la qualità e la precisione delle risposte.

La nostra piattaforma è ospitata su Vercel. I tuoi dati sono conservati ed elaborati in conformità con i termini di elaborazione dei dati di Vercel.`,
        },
        {
          title: "5. I Tuoi Diritti",
          body: `Ai sensi del GDPR e delle leggi applicabili sulla protezione dei dati, hai il diritto di:

- **Accedere** ai dati personali che deteniamo su di te
- **Correggere** dati inesatti o incompleti
- **Eliminare** il tuo account e i tuoi dati personali
- **Opporti** al trattamento dei tuoi dati
- **Portabilità** — richiedere una copia dei tuoi dati in un formato leggibile da macchina

Per esercitare uno di questi diritti, contattaci a contact@riaddartmarrakech.com. Risponderemo entro 30 giorni.`,
        },
        {
          title: "6. Cookie",
          body: `Utilizziamo solo cookie essenziali necessari per mantenerti connesso e mantenere la tua sessione. Non utilizziamo cookie pubblicitari o cookie di tracciamento di terze parti.`,
        },
        {
          title: "7. Sicurezza",
          body: `Implementiamo misure di sicurezza standard del settore per proteggere i tuoi dati, tra cui la trasmissione dei dati crittografata (HTTPS) e l'hashing sicuro delle password. Tuttavia, nessun metodo di trasmissione su Internet è sicuro al 100%.`,
        },
        {
          title: "8. Contatti per Questioni di Privacy",
          body: `Se hai domande su questa Informativa sulla Privacy o su come trattiamo i tuoi dati, contattaci:

**Email:** contact@riaddartmarrakech.com
**Indirizzo:** 19 Derb Zemrane, Medina di Marrakech 40000, Marocco`,
        },
      ],
    },
    termsPage: {
      legal: "Legale",
      title: "Termini di Servizio",
      intro: "Questi Termini di Servizio regolano il tuo utilizzo della piattaforma di concierge per ospiti Dar D'Art gestita da Riad Dar D'Art, situato al 19 Derb Zemrane, Marrakech, Marocco. Ti preghiamo di leggere attentamente questi termini prima di utilizzare il nostro servizio.",
      sections: [
        {
          title: "1. Accettazione dei Termini",
          body: `Creando un account e utilizzando la piattaforma di concierge per ospiti Dar D'Art, accetti di essere vincolato da questi Termini di Servizio. Se non accetti questi termini, ti preghiamo di non utilizzare il servizio.

Questi termini possono essere aggiornati di volta in volta. L'uso continuato del servizio dopo le modifiche costituisce accettazione dei termini revisionati.`,
        },
        {
          title: "2. Il Servizio",
          body: `La piattaforma è un compagno gratuito di informazioni e concierge per gli ospiti del Riad Dar D'Art. La registrazione è aperta — chiunque stia pianificando o vivendo un soggiorno da noi può creare un account.

Registrandoti, confermi che le informazioni che fornisci (nome, email, numero di telefono) sono accurate e ti appartengono.`,
        },
        {
          title: "3. Utilizzo del Servizio",
          body: `Accetti di utilizzare la piattaforma solo per scopi legali e in un modo coerente con questi termini. Non devi:

- Utilizzare il servizio per trasmettere contenuti dannosi, offensivi o illegali
- Tentare di decompilare, violare o interrompere la piattaforma
- Condividere le credenziali del tuo account con altri
- Utilizzare il servizio in un modo che possa danneggiare la reputazione di Riad Dar D'Art`,
        },
        {
          title: "4. Limitazioni del Concierge IA",
          body: `Il concierge IA fornisce risposte informative basate su conoscenze generali su Riad Dar D'Art e Marrakech. Le sue risposte:

- Sono fornite solo a scopo informativo e non costituiscono un impegno contrattuale
- Potrebbero non essere sempre accurate o aggiornate
- Non devono essere utilizzate per decisioni mediche, legali o critiche per la sicurezza

Per prenotazioni confermate o accordi specifici, contatta direttamente il nostro team.`,
        },
        {
          title: "5. Account Utente",
          body: `Sei responsabile del mantenimento della riservatezza delle credenziali del tuo account. Devi informarci immediatamente se sospetti un accesso non autorizzato al tuo account.

Gli account sono personali e non possono essere condivisi. Potremmo disattivare gli account dopo la fine del tuo soggiorno, in linea con la nostra politica di conservazione dei dati.`,
        },
        {
          title: "6. Proprietà Intellettuale",
          body: `Tutti i contenuti della piattaforma — inclusi testi, immagini, design e il sistema di concierge IA — sono di proprietà di Riad Dar D'Art o dei suoi licenzianti e sono protetti dalle leggi applicabili sulla proprietà intellettuale.

Non puoi riprodurre, distribuire o creare opere derivate da qualsiasi contenuto della piattaforma senza il nostro previo consenso scritto.`,
        },
        {
          title: "7. Limitazione di Responsabilità",
          body: `Nella misura massima consentita dalla legge, Riad Dar D'Art non sarà responsabile per eventuali danni indiretti, incidentali, speciali o consequenziali derivanti dall'uso della piattaforma.

Il servizio è fornito "così com'è" senza garanzie di alcun tipo. Non garantiamo l'accuratezza, l'affidabilità o la disponibilità del concierge IA in un dato momento.`,
        },
        {
          title: "8. Modifiche ai Termini",
          body: `Ci riserviamo il diritto di modificare questi Termini di Servizio in qualsiasi momento. Informeremo gli utenti di modifiche sostanziali aggiornando la data "Ultimo aggiornamento" in cima a questa pagina.`,
        },
        {
          title: "9. Legge Applicabile",
          body: `Questi termini sono regolati dalle leggi del Regno del Marocco. Eventuali controversie derivanti da questi termini saranno soggette alla giurisdizione esclusiva dei tribunali di Marrakech, Marocco.`,
        },
        {
          title: "10. Contatti",
          body: `Per domande su questi Termini di Servizio, contattaci:

**Email:** contact@riaddartmarrakech.com
**Indirizzo:** 19 Derb Zemrane, Medina di Marrakech 40000, Marocco`,
        },
      ],
    },
  },
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Translations = any;

export function getT(lang: Lang): Translations {
  return (t as Record<string, unknown>)[lang] ?? t.en;
}
