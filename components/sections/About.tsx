import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { GrowthLine } from "@/components/ui/GrowthLine";
import { values } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="About ZKR"
              title="I started ZKR because most agency work looks the same."
              description="ZKR is my independent studio — built on the idea that people would rather work directly with the person building their project than get passed around a team."
            />
            <Reveal delay={0.2} className="mt-8 flex flex-col gap-4 max-w-md">
              <div className="rounded-2xl border border-ink-950/8 bg-mist-100 p-5 dark:border-white/10 dark:bg-white/5">
                <p className="font-display text-sm font-semibold text-ink-950 dark:text-white">My mission</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-white/60">
                  Deliver reliable, honestly-priced digital work — and be straight
                  about what's actually worth building.
                </p>
              </div>
              <div className="rounded-2xl border border-ink-950/8 bg-mist-100 p-5 dark:border-white/10 dark:bg-white/5">
                <p className="font-display text-sm font-semibold text-ink-950 dark:text-white">My approach</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-white/60">
                  Craft, transparency, and following through on what I say I'll do.
                </p>
              </div>
              <a
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 transition-colors hover:text-ember-600 dark:text-white dark:hover:text-amber-glow"
              >
                Read my full story →
              </a>
            </Reveal>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-[3px] top-2 bottom-2 w-px bg-gradient-to-b from-ember-500 via-amber-glow to-moss-400" />
            <RevealGroup className="flex flex-col gap-10">
              {values.map((v) => (
                <Reveal key={v.title} className="relative">
                  <span className="absolute -left-[35px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-mist-50 bg-ember-500 dark:border-[#1D3557]" />
                  <p className="mt-1 font-display text-lg font-semibold text-ink-950 dark:text-white">{v.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-white/60">{v.description}</p>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Container>
      <GrowthLine className="mt-24 h-16 opacity-60" />
    </section>
  );
}
