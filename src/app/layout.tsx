import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
