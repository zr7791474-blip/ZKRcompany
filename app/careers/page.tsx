import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description: "ZKR is an independent, one-person studio — not currently hiring, but always open to hearing from people.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="It's just me, for now."
        description="ZKR is an independent, one-person studio — there's no team to join yet, but that could change."
      />

      <section className="py-24 sm:py-28">
        <Container className="max-w-2xl">
          <Reveal className="flex flex-col items-center gap-4 rounded-3xl border border-ink-950/8 bg-mist-100 p-10 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="font-display text-xl font-semibold text-ink-950 dark:text-white">
              Not hiring right now
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-ink-500 dark:text-white/60">
              I run ZKR solo, so there are no open roles at the moment. If that
              changes, or if you&apos;re a developer or designer interested in
              collaborating on a project, feel free to reach out anyway.
            </p>
            <MagneticButton href={`mailto:${site.email}`} variant="outline" icon={<ArrowUpRight className="h-4 w-4" />}>
              Get in touch
            </MagneticButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
