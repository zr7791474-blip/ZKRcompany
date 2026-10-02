import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Contact } from "@/components/sections/Contact";

const description =
  "Start a project with Zakariaa Adli (ZKR): email, WhatsApp or the project form. You'll hear back from me directly.";

export const metadata: Metadata = pageMeta({ title: "Contact", description: description, path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="07 / Contact"
        title="Let's talk about your project."
        description="Use the form or reach me directly. The more detail you share, the more useful my first reply will be."
      />
      <Contact standalone />
    </>
  );
}
