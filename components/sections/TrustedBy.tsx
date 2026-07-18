import { Container } from "@/components/ui/Container";
import { work } from "@/lib/content";

export function TrustedBy() {
  const names = [...work.map((w) => w.title), "Atlas Freight", "Nour & Co.", "Meridian Health", "Fielder"];

  return (
    <section className="border-y border-ink-950/8 py-10 dark:border-white/10">
      <Container>
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-ink-500 dark:text-white/40">
          Trusted by teams building the next thing
        </p>
      </Container>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-mist-50 to-transparent dark:from-[#1D3557]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-mist-50 to-transparent dark:from-[#1D3557]" />
        <div className="flex w-max animate-marquee gap-16">
          {[...names, ...names].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-2xl font-semibold text-ink-950/25 dark:text-white/20"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
