import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/content";

// Self-hosted via next/font: no third-party request, no render-blocking CSS, no layout shift.
const display = localFont({
  src: "./fonts/bricolage.woff2",
  variable: "--font-display",
  weight: "200 800",
  display: "swap",
});
const sans = localFont({
  src: "./fonts/instrument-sans.woff2",
  variable: "--font-sans",
  weight: "400 700",
  display: "swap",
});
const mono = localFont({
  src: [
    { path: "./fonts/plex-mono-400.woff2", weight: "400" },
    { path: "./fonts/plex-mono-500.woff2", weight: "500" },
  ],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "ZKR is the independent studio of Zakariaa Adli. I design and build websites and digital products, working directly with each client.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.identity, template: "%s | ZKR" },
  description,
  authors: [{ name: site.founder }],
  openGraph: {
    type: "website",
    title: site.identity,
    description,
    siteName: "ZKR",
    // No url / canonical here: every page sets its own, so nothing inherits the homepage's.
    // The share image comes from app/opengraph-image.tsx (and work/[slug]/opengraph-image.tsx).
  },
  twitter: { card: "summary_large_image", site: site.twitterHandle, title: site.identity, description },
  icons: { icon: "/zkr.jpg", apple: "/zkr.jpg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-paper focus:px-4 focus:py-3 focus:font-semibold focus:text-night"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
