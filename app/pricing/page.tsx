import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { PricingRows, pricingNote } from "@/components/sections/Pricing";

const isDev = process.env.NODE_ENV !== "production";
const description =
  "Public starting prices for websites and web products by Zakariaa Adli (ZKR): Starter from $1,900, Growth from $4,500, Scale quoted per project.";

export const metadata: Metadata = pageMeta({ title: "Pricing", description: description, path: "/pricing" });

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="05 / Pricing"
        title="Prices on the page."
        description="Three starting points. Every project is scoped and priced with you before work begins."
      />
      <Container surface className="py-16 sm:py-24">
        <PricingRows detailed />
        <div className="mt-10 max-w-[62ch] border-l-2 border-fg pl-5">
          <p className="text-lg">{pricingNote}</p>
          {isDev && (
            <p className="mt-3 font-mono text-xs text-danger">
              [TODO(zakariaa): add a short “not included” list (e.g. hosting, domains) — only what is actually true — in lib/content.ts]
            </p>
          )}
        </div>
        <div className="mt-12">
          <ButtonLink href="/contact">Start a project</ButtonLink>
        </div>
      </Container>
    </>
  );
}
