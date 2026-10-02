import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/content";

export function ServiceRows({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ol className="border-t border-night/20">
      {services.map((s, i) => (
        <li key={s.id} className="border-b border-night/20 py-8 sm:py-10">
          <Reveal className="grid gap-4 lg:grid-cols-12 lg:gap-10">
            <span className="font-mono text-xs text-night/70 lg:col-span-1 lg:pt-3">{String(i + 1).padStart(2, "0")}</span>
            <H className="text-3xl font-semibold leading-tight sm:text-4xl lg:col-span-4">{s.title}</H>
            <p className="max-w-[46ch] text-lg leading-relaxed text-night/80 lg:col-span-4">{s.description}</p>
            <ul className="text-[15px] text-night/80 lg:col-span-3">
              {s.points.map((p) => (
                <li key={p} className="border-t border-night/10 py-2 first:border-t-0 first:pt-0 lg:first:pt-1">
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="border-t border-night/15">
      <Container className="py-24 sm:py-32">
        <SectionLabel index="02">Services</SectionLabel>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <h2 id="services-heading" className="max-w-3xl text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-none">
            What I do
          </h2>
          <Link href="/services" className="u-link group inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold">
            Services in detail <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
        <div className="mt-14">
          <ServiceRows />
        </div>
      </Container>
    </section>
  );
}
