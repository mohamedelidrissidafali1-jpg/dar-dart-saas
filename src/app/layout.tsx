import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import WhatsAppFab from "@/components/WhatsAppFab";

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
      </body>
    </html>
  );
}
