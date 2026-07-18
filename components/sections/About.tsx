import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { GrowthLine } from "@/components/ui/GrowthLine";

const milestones = [
  { year: "2021", label: "Founded", description: "Started as a two-person studio taking on freelance builds." },
  { year: "2022", label: "First 50 clients", description: "Grew a repeat-client base through referrals alone." },
  { year: "2024", label: "Full-service studio", description: "Added in-house design, SEO, and growth marketing." },
  { year: "2026", label: "150+ projects shipped", description: "Working with businesses across three continents." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="About ZKR"
              title="We started ZKR because most agency work looks the same."
              description="ZKR was founded on a simple bet: businesses would rather work with a small, senior team that treats their project like a product, than a large shop that treats it like a ticket."
            />
            <Reveal delay={0.2} className="mt-8 flex flex-col gap-4 max-w-md">
              <div className="rounded-2xl border border-ink-950/8 bg-mist-100 p-5 dark:border-white/10 dark:bg-white/5">
                <p className="font-display text-sm font-semibold text-ink-950 dark:text-white">Our mission</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-white/60">
                  Deliver reliable, scalable, and honestly-priced digital work that creates
                  measurable business growth.
                </p>
              </div>
              <div className="rounded-2xl border border-ink-950/8 bg-mist-100 p-5 dark:border-white/10 dark:bg-white/5">
                <p className="font-display text-sm font-semibold text-ink-950 dark:text-white">Our vision</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-white/60">
                  To be the studio ambitious businesses call first — known for craft,
                  transparency, and following through.
                </p>
              </div>
              <a
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 transition-colors hover:text-ember-600 dark:text-white dark:hover:text-amber-glow"
              >
                Read our full story →
              </a>
            </Reveal>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-[3px] top-2 bottom-2 w-px bg-gradient-to-b from-ember-500 via-amber-glow to-moss-400" />
            <RevealGroup className="flex flex-col gap-10">
              {milestones.map((m) => (
                <Reveal key={m.year} className="relative">
                  <span className="absolute -left-[35px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-mist-50 bg-ember-500 dark:border-[#1D3557]" />
                  <p className="font-mono text-xs tracking-widest text-ember-600 dark:text-amber-glow">{m.year}</p>
                  <p className="mt-1 font-display text-lg font-semibold text-ink-950 dark:text-white">{m.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-white/60">{m.description}</p>
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
