import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GrowthLine } from "@/components/ui/GrowthLine";
import { values, founder } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "ZKR is an independent developer studio — the story, mission, and values behind the work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ZKR"
        title="I started ZKR because most agency work looks the same."
        description="ZKR is my independent studio, built on a simple bet: people would rather work directly with the person building their project than get passed around a team."
      />

      {/* Mission / vision */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal className="rounded-3xl border border-ink-950/8 bg-mist-100 p-8 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="font-display text-lg font-semibold text-ink-950 dark:text-white">My mission</p>
              <p className="mt-3 text-base leading-relaxed text-ink-500 dark:text-white/60">
                Deliver reliable, honestly-priced digital work — and be straight with clients about
                what's actually worth building.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="rounded-3xl border border-ink-950/8 bg-mist-100 p-8 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="font-display text-lg font-semibold text-ink-950 dark:text-white">My approach</p>
              <p className="mt-3 text-base leading-relaxed text-ink-500 dark:text-white/60">
                Craft, transparency, and following through on what I say I'll do — no matter the size
                of the project.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-mist-100 py-24 sm:py-28 dark:bg-white/[0.02]">
        <Container>
          <SectionHeading eyebrow="What I value" title="Four things I don't compromise on." align="center" className="mx-auto" />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {values.map((v) => (
              <Reveal key={v.title} className="rounded-2xl border border-ink-950/8 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-white/60">{v.description}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Founder */}
      <section className="py-24 sm:py-28">
        <Container className="max-w-md">
          <SectionHeading eyebrow="Behind ZKR" title="Just one developer, for now." align="center" className="mx-auto" />
          <Reveal delay={0.1} className="mt-14 rounded-2xl border border-ink-950/8 bg-mist-100 p-6 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-ember-500 to-amber-glow font-display text-lg font-semibold text-white">
              {founder.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-ink-950 dark:text-white">{founder.name}</h3>
            <p className="text-sm text-ember-600 dark:text-amber-glow">{founder.role}</p>
            <p className="mt-1 text-xs text-ink-500 dark:text-white/50">{founder.focus}</p>
          </Reveal>
        </Container>
      </section>

      <GrowthLine className="h-16 opacity-40" />
    </>
  );
}
