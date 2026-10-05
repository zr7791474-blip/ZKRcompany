import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { process, whyUs } from "@/lib/content";

export function HowIWork() {
  return (
    <section id="how-i-work" aria-labelledby="how-heading" className="bg-surface/70">
      <Container className="py-24 sm:py-32">
        <SectionLabel index="03">Why ZKR / How I work</SectionLabel>
        <div className="mt-6 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <h2
            id="how-heading"
            className="text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-[1.02] lg:col-span-6"
          >
            How I work.
          </h2>
          <ul className="lg:col-span-6">
            {whyUs.map((item) => (
              <li key={item.title} className="border-t border-fg/20 py-5 last:border-b">
                <Reveal>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2 max-w-[48ch] text-fg/75">{item.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <ol className="mt-20 grid border-t border-fg/20 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((p, i) => (
            <li key={p.step} className="border-b border-fg/20 py-6 sm:pr-6 lg:border-b-0 lg:border-r lg:pl-6 lg:first:pl-0 lg:last:border-r-0">
              <span className="font-mono text-xs text-fg/70">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-2xl">{p.step}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg/75">{p.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
