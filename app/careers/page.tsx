import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { site, cultureValues, benefits, openRoles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at ZKR — a small, remote-first, senior-only digital studio based in Casablanca.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work on real projects, from day one."
        description="We're a small, remote-first studio — no bench, no busywork, and your work is always visible."
      />

      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Culture" title="How we work as a team." align="center" className="mx-auto" />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-3" stagger={0.08}>
            {cultureValues.map((c) => (
              <Reveal key={c.title} className="rounded-2xl border border-ink-950/8 bg-mist-100 p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-white/60">{c.description}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-mist-100 py-24 sm:py-28 dark:bg-white/[0.02]">
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="Benefits" title="What you get, beyond the paycheck." align="center" className="mx-auto" />
          <Reveal delay={0.1} className="mt-10 grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-2.5 rounded-xl border border-ink-950/8 bg-white p-4 text-sm text-ink-950/80 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss-500" />
                {b}
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Open roles" title="Current openings." align="center" className="mx-auto" />
          <RevealGroup className="mt-14 flex flex-col gap-4" stagger={0.06}>
            {openRoles.map((role) => (
              <Reveal
                key={role.title}
                className="flex flex-col gap-4 rounded-2xl border border-ink-950/8 bg-mist-100 p-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div>
                  <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">{role.title}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ember-600 dark:text-amber-glow">
                    {role.type}
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-500 dark:text-white/60">
                    {role.description}
                  </p>
                </div>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(role.title + " — Application")}`}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ink-950/15 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:border-ember-500 hover:text-ember-600 dark:border-white/20 dark:text-white dark:hover:border-amber-glow dark:hover:text-amber-glow"
                >
                  Apply
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Reveal>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-ink-950/8 bg-mist-100 p-10 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="font-display text-xl font-semibold text-ink-950 dark:text-white">
              Don&apos;t see the right role?
            </h3>
            <p className="max-w-md text-sm text-ink-500 dark:text-white/60">
              We&apos;re always open to hearing from strong people. Send us a note anyway.
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
