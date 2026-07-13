import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import WhatsAppFab from "@/components/WhatsAppFab";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import InstallPrompt from "@/components/InstallPrompt";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Elegant serif for headings
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Arabic-capable heading face for RTL
const notoKufi = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Riad Dar D'Art — AI Concierge | Luxury Riad in Marrakech",
  description:
    "Riad Dar D'Art offers a luxury stay in the heart of Marrakech's medina with a 24/7 AI concierge. Explore our rooms, services, and curated excursions.",
  applicationName: "Riad Dar D'Art",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Dar D'Art",
    // Sand-tinted status bar that blends into the app on iOS.
    statusBarStyle: "black-translucent",
  },
  other: {
    // Next emits the modern `mobile-web-app-capable`; keep the legacy Apple key
    // too so standalone mode also works on older iOS versions.
    "apple-mobile-web-app-capable": "yes",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  // Status-bar / PWA chrome colour — brand teal in light, deep navy in dark.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1E4D45" },
    { media: "(prefers-color-scheme: dark)", color: "#12212F" },
  ],
  width: "device-width",
  initialScale: 1,
  // Let installed app content flow under the notch/home-indicator area.
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${notoKufi.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
        <WhatsAppFab />
        <InstallPrompt />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
