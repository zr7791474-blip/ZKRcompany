import { Users, ShieldCheck, Gauge, Headset } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { whyUs } from "@/lib/content";

const icons = [Users, ShieldCheck, Gauge, Headset];

export function WhyUs() {
  return (
    <section className="py-28 sm:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Why ZKR"
            title="What you get that a freelancer or big agency won't."
          />

          <RevealGroup className="grid gap-px overflow-hidden rounded-3xl border border-ink-950/8 bg-ink-950/8 sm:grid-cols-2 dark:border-white/10 dark:bg-white/10">
            {whyUs.map((item, i) => {
              const Icon = icons[i];
              return (
                <Reveal
                  key={item.title}
                  delay={i * 0.06}
                  className="bg-mist-50 p-8 dark:bg-[#1D3557]"
                >
                  <Icon className="h-5 w-5 text-ember-600 dark:text-amber-glow" />
                  <h3 className="mt-4 font-display text-base font-semibold text-ink-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-white/60">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
