import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologies } from "@/lib/content";

export function Technologies() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Stack"
          title="Modern tools, chosen for the job, not the résumé."
          align="center"
          className="mx-auto"
        />
      </Container>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-mist-50 to-transparent dark:from-[#1D3557]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-mist-50 to-transparent dark:from-[#1D3557]" />
        <div className="flex w-max animate-marquee gap-4">
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex items-center gap-2 rounded-full border border-ink-950/8 bg-mist-100 px-5 py-2.5 font-mono text-sm text-ink-950/80 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-moss-400" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
