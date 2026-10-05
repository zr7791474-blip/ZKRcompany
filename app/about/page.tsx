import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { PortfolioLink } from "@/components/ui/PortfolioLink";
import { PortraitSlot } from "@/components/sections/About";
import { founder, whyUs } from "@/lib/content";

const isDev = process.env.NODE_ENV !== "production";
const description =
  "I'm Zakariaa Adli, an independent developer. ZKR is the name I work under: you work with the person who designs and builds the product.";

export const metadata: Metadata = pageMeta({ title: "About", description: description, path: "/about" });

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="04 / About"
        title={<>I&apos;m {founder.name}, the developer behind ZKR.</>}
        description="ZKR is the name I work under as an independent developer. I handle design, development and deployment myself."
      />

      <Container surface className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="w-full max-w-[13rem] sm:max-w-xs lg:col-span-4 lg:max-w-sm">
            <PortraitSlot />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="font-mono text-xs text-fg/70">
              {founder.role} · {founder.location}
            </p>
            {founder.bio.length > 0 ? (
              <div className="mt-6 flex max-w-[60ch] flex-col gap-5 text-lg leading-relaxed text-fg/85">
                {founder.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            ) : (
              <div className="mt-6 max-w-[60ch] text-lg leading-relaxed text-fg/85">
                <p>
                  I started ZKR to work directly with businesses and founders who care about the quality of what they put online.
                </p>
                {isDev && (
                  <p className="mt-4 font-mono text-xs text-danger">
                    [TODO(zakariaa): add your real bio in founder.bio — lib/content.ts. Only true facts.]
                  </p>
                )}
              </div>
            )}
            <div className="mt-8 border-t border-fg/20 pt-5">
              <p className="font-mono text-xs text-fg/70">Personal portfolio</p>
              <PortfolioLink className="mt-1" />
            </div>
            {founder.facts.length > 0 && (
              <dl className="mt-8 max-w-md border-t border-fg/20">
                {founder.facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-[8rem_1fr] gap-4 border-b border-fg/20 py-3">
                    <dt className="font-mono text-xs text-fg/70">{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </Container>

      <section aria-labelledby="working-heading" className="border-t border-fg/15 bg-surface">
        <Container className="py-16 sm:py-24">
          <h2 id="working-heading" className="text-[clamp(2rem,4vw,3rem)] leading-none">
            Working with me
          </h2>
          <ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {whyUs.map((w) => (
              <li key={w.title} className="border-t border-fg/20 py-5">
                <h3 className="text-xl">{w.title}</h3>
                <p className="mt-2 max-w-[44ch] text-fg/75">{w.description}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink href="/contact">Start a project</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
