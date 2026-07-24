import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { techCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Technologies",
  description: "The frontend, backend, cloud, and design tools ZKR builds with — chosen for the job, not the résumé.",
};

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="My Stack"
        title="Modern tools, chosen for the job."
        description="I pick technology based on what your project actually needs — not what's trending this quarter."
      />

      <section className="pb-28 sm:pb-36">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {techCategories.map((cat, i) => (
              <Reveal
                key={cat.category}
                delay={i * 0.06}
                className="rounded-3xl border border-ink-950/8 bg-mist-100 p-8 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-600 dark:text-amber-glow">
                  {cat.category}
                </p>
                <RevealGroup className="mt-5 flex flex-wrap gap-2" stagger={0.03}>
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 rounded-full border border-ink-950/8 bg-white px-4 py-2 text-sm text-ink-950/80 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-moss-400" />
                      {item}
                    </span>
                  ))}
                </RevealGroup>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
