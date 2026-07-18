import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 sm:pt-48 sm:pb-24">
      <div
        className="absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_30%,transparent_100%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(15 23 42 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42 / 0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-ember-500/15 blur-[110px]" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-950/10 bg-white/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-ember-600 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-amber-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
              {eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] text-ink-950 sm:text-5xl lg:text-6xl dark:text-white">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-500 dark:text-white/60">
                {description}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
