import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundLayers } from "@/components/BackgroundLayers";
import { ScrollVeil } from "@/components/ScrollVeil";
import { site } from "@/lib/content";

// Self-hosted via next/font: no third-party request, no render-blocking CSS, no layout shift.
// ONE family does display, headings and body: Archivo, variable in weight AND width (the width axis is the display voice).
// DM Mono is used only at micro size, for metadata.
const sans = localFont({
  src: "./fonts/archivo.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});
const mono = localFont({
  src: [
    { path: "./fonts/dm-mono-400.woff2", weight: "400" },
    { path: "./fonts/dm-mono-500.woff2", weight: "500" },
  ],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "I'm Zakariaa Adli, an independent developer. I design and build websites and digital products under the ZKR name, working directly with each client.";

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
  // Icons come from the file conventions in /app (favicon.ico, icon.png, apple-icon.png), all derived from the ZKR logo.
  // No manual `icons` entry: it would duplicate / conflict with them.
  // Tells the browser UI (address bar, scrollbars) which colour scheme the page supports.
  other: { "color-scheme": "dark light" },
  robots: { index: true, follow: true },
};

// Runs before first paint: applies the saved theme (or the system preference; default dark) and the initial veil strength.
const themeScript = `(function(){try{var d=document.documentElement,t=localStorage.getItem("zkr-theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}d.classList.toggle("dark",t==="dark");d.style.setProperty("--veil-a",innerWidth>=768?"0.28":"0.5")}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} dark`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <BackgroundLayers />
        <ScrollVeil />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-bg focus:px-4 focus:py-3 focus:font-semibold focus:text-fg"
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
