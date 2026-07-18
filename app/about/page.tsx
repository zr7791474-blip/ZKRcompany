import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GrowthLine } from "@/components/ui/GrowthLine";
import { stats, values, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "ZKR is a small, senior digital studio based in Casablanca — our story, mission, values, and the team behind the work.",
};

const milestones = [
  { year: "2021", label: "Founded", description: "Started as a two-person studio taking on freelance builds." },
  { year: "2022", label: "First 50 clients", description: "Grew a repeat-client base through referrals alone." },
  { year: "2024", label: "Full-service studio", description: "Added in-house design, SEO, and growth marketing." },
  { year: "2026", label: "150+ projects shipped", description: "Working with businesses across three continents." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ZKR"
        title="We started ZKR because most agency work looks the same."
        description="ZKR was founded on a simple bet: businesses would rather work with a small, senior team that treats their project like a product, than a large shop that treats it like a ticket."
      />

      {/* Stats */}
      <section className="pb-4">
        <Container>
          <div className="grid grid-cols-2 gap-8 border-y border-ink-950/8 py-10 sm:grid-cols-4 dark:border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-semibold text-ink-950 sm:text-4xl dark:text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-xs text-ink-500 sm:text-sm dark:text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission / vision */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal className="rounded-3xl border border-ink-950/8 bg-mist-100 p-8 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="font-display text-lg font-semibold text-ink-950 dark:text-white">Our mission</p>
              <p className="mt-3 text-base leading-relaxed text-ink-500 dark:text-white/60">
                Deliver reliable, scalable, and honestly-priced digital work that creates measurable business growth
                for every client we take on.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="rounded-3xl border border-ink-950/8 bg-mist-100 p-8 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="font-display text-lg font-semibold text-ink-950 dark:text-white">Our vision</p>
              <p className="mt-3 text-base leading-relaxed text-ink-500 dark:text-white/60">
                To be the studio ambitious businesses call first — known for craft, transparency, and following
                through on what we say we&apos;ll do.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-mist-100 py-24 sm:py-28 dark:bg-white/[0.02]">
        <Container>
          <SectionHeading eyebrow="What we value" title="Four things we don't compromise on." align="center" className="mx-auto" />
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

      {/* Timeline */}
      <section className="py-24 sm:py-28">
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="Our story" title="From two people to a full-service studio." align="center" className="mx-auto" />
          <div className="relative mt-14 pl-8">
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
        </Container>
      </section>

      {/* Team */}
      <section className="bg-mist-100 py-24 sm:py-28 dark:bg-white/[0.02]">
        <Container>
          <SectionHeading eyebrow="The team" title="Small on purpose." description="Every project is run by senior people — no bench, no hand-offs." align="center" className="mx-auto" />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {team.map((member) => (
              <Reveal key={member.name} className="rounded-2xl border border-ink-950/8 bg-white p-6 text-center dark:border-white/10 dark:bg-white/[0.03]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-ember-500 to-amber-glow font-display text-lg font-semibold text-white">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-950 dark:text-white">{member.name}</h3>
                <p className="text-sm text-ember-600 dark:text-amber-glow">{member.role}</p>
                <p className="mt-1 text-xs text-ink-500 dark:text-white/50">{member.focus}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <GrowthLine className="h-16 opacity-40" />
    </>
  );
}
