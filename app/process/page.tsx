import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GrowthLine } from "@/components/ui/GrowthLine";
import { processFull } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Process",
  description: "How ZKR runs a project — from discovery through strategy, design, development, testing, launch, and growth.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="Seven stages. Zero surprises."
        description="Every engagement follows the same structure, so you always know what's happening and what's next."
      />

      <section className="pb-28 sm:pb-36">
        <Container className="max-w-3xl">
          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-ember-500 via-amber-glow to-moss-400" />
            <div className="flex flex-col gap-12">
              {processFull.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.05} className="relative pl-14">
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-ember-500 bg-mist-50 font-mono text-sm font-semibold text-ember-600 dark:bg-[#1D3557] dark:text-amber-glow">
                    0{i + 1}
                  </span>
                  <h2 className="font-display text-xl font-semibold text-ink-950 dark:text-white">{item.step}</h2>
                  <p className="mt-2 text-base leading-relaxed text-ink-500 dark:text-white/60">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} className="mt-20 flex flex-col items-center gap-6 rounded-3xl border border-ink-950/8 bg-mist-100 p-10 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">
              Ready to start Discovery?
            </h3>
            <p className="max-w-md text-ink-500 dark:text-white/60">
              A short call is all it takes to find out if we&apos;re the right fit for your project.
            </p>
            <MagneticButton href="/contact" icon={<ArrowUpRight className="h-4 w-4" />}>
              Book a discovery call
            </MagneticButton>
          </Reveal>
        </Container>
      </section>
      <GrowthLine className="h-16 opacity-40" />
    </>
  );
}
