import type { MetadataRoute } from "next";

// Web App Manifest — makes Dar D'Art installable ("Add to Home Screen").
// Served at /manifest.webmanifest via Next's Metadata API.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Riad Dar D'Art",
    short_name: "Dar D'Art",
    description:
      "Your guest concierge and companion for Riad Dar D'Art in Marrakech — rooms, curated excursions, checkout, and a 24/7 WhatsApp concierge.",
    // Logged-out guests (arriving via QR) land on the home page.
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    // Warm sand splash with the zellige-teal status bar / theme.
    background_color: "#F4EFE7",
    theme_color: "#1E4D45",
    lang: "en",
    dir: "auto",
    categories: ["travel", "lifestyle"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
