import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Technologies } from "@/components/sections/Technologies";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { FAQ } from "@/components/sections/FAQ";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZKR Company",
  url: "https://zkrcompany.com",
  email: "zr7791474@gmail.com",
  description:
    "ZKR is a digital solutions studio building websites, products, brands, and growth strategy for ambitious businesses.",
  sameAs: ["https://x.com/Zkr_ad"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyUs />
      <Work />
      <Process />
      <Technologies />
      <About />
      <Testimonials />
      <Pricing />
      <BlogTeaser />
      <FAQ />
    </>
  );
}
