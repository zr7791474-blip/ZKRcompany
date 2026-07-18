import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell ZKR about your project — email, WhatsApp, or the form below. We typically reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about your project."
        description="Fill out the form below or reach us directly — we typically reply within one business day."
      />
      <Contact hideHeading />
    </>
  );
}
