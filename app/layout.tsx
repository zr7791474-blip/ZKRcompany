import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const siteUrl = "https://zkrcompany.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ZKR — Digital Solutions Studio",
    template: "%s | ZKR",
  },
  description:
    "ZKR is a digital solutions studio building websites, products, brands, and growth strategy for ambitious businesses.",
  keywords: [
    "web development",
    "web design agency",
    "UI UX design",
    "branding studio",
    "SEO",
    "digital marketing",
    "Next.js development",
  ],
  authors: [{ name: "ZKR Company" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "ZKR — Digital Solutions Studio",
    description:
      "Websites, products, brands, and growth strategy for ambitious businesses.",
    siteName: "ZKR",
    images: [{ url: "/zkr.jpg", width: 512, height: 512, alt: "ZKR Company logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZKR — Digital Solutions Studio",
    description:
      "Websites, products, brands, and growth strategy for ambitious businesses.",
    site: "@Zkr_ad",
    images: ["/zkr.jpg"],
  },
  icons: {
    icon: "/zkr.jpg",
    apple: "/zkr.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/*
          Tells the Dark Reader browser extension this site already has its
          own dark mode (via next-themes) and to leave the DOM alone. Without
          this, Dark Reader rewrites every icon's stroke/color inline style
          before React hydrates, causing a cosmetic (but noisy) hydration
          warning in dev tools for any visitor who has the extension.
        */}
        <meta name="darkreader-lock" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- root layout applies globally, not a single page */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Loader />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
