import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceRows } from "@/components/sections/Services";

const description =
  "Web development, UI/UX design, branding and SEO from Zakariaa Adli (ZKR). One person, from first idea to deployment.";

export const metadata: Metadata = pageMeta({ title: "Services", description: description, path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="02 / Services"
        title="What I do."
        description="Four areas, handled by one person. You talk to me from the first call to deployment."
      />
      <Container className="py-16 sm:py-24">
        <ServiceRows headingLevel="h2" />
        <div className="mt-16">
          <ButtonLink href="/contact">Start a project</ButtonLink>
        </div>
      </Container>
    </>
  );
}
