import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { HowIWork } from "@/components/sections/HowIWork";
import { About } from "@/components/sections/About";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { site } from "@/lib/content";

const description =
  "I'm Zakariaa Adli, an independent developer. I design and build websites and digital products under the ZKR name, working directly with each client.";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", title: site.identity, description, siteName: "ZKR" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.founder,
  jobTitle: site.role,
  url: site.url,
  email: site.email,
  worksFor: { "@type": "Organization", name: "ZKR", url: site.url },
  sameAs: [site.portfolioUrl],
  description,
  address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
};

// Proof first: Hero → Work → Services → How I work → About → Pricing → FAQ → Contact
export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Work />
      <Services />
      <HowIWork />
      <About />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
