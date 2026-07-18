import type { Metadata } from "next";
import { Code2, Palette, Sparkles, TrendingUp, Layers, ShoppingCart, Smartphone, Bot, Wrench, Check, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { serviceDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, SaaS, e-commerce, UI/UX design, mobile, AI solutions, custom software, branding, and SEO — all under one accountable team.",
};

const icons: Record<string, typeof Code2> = {
  web: Code2,
  design: Palette,
  brand: Sparkles,
  growth: TrendingUp,
  "saas-development": Layers,
  ecommerce: ShoppingCart,
  "mobile-development": Smartphone,
  "ai-solutions": Bot,
  "custom-software": Wrench,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Nine disciplines. One accountable team."
        description="No hand-offs between vendors — the team that scopes your project designs, builds, and ships it."
      />

      <section className="pb-28 sm:pb-36">
        <Container>
          <div className="flex flex-col gap-24">
            {serviceDetails.map((service, i) => {
              const Icon = icons[service.id] ?? Code2;
              const reversed = i % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <Reveal className={reversed ? "lg:order-2" : ""}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ember-500 to-amber-glow text-white shadow-lg shadow-ember-500/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 font-display text-2xl font-semibold text-ink-950 sm:text-3xl dark:text-white">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-500 dark:text-white/60">
                      {service.summary}
                    </p>
                    <ul className="mt-6 flex flex-col gap-3">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-ink-950/80 dark:text-white/70">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <MagneticButton href="/contact" variant="outline" className="mt-8" icon={<ArrowUpRight className="h-4 w-4" />}>
                      Discuss this project
                    </MagneticButton>
                  </Reveal>

                  <Reveal delay={0.1} className={reversed ? "lg:order-1" : ""}>
                    <div className="rounded-3xl border border-ink-950/8 bg-mist-100 p-8 dark:border-white/10 dark:bg-white/[0.03]">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-600 dark:text-amber-glow">
                        How it runs
                      </p>
                      <ol className="mt-6 flex flex-col gap-5">
                        {service.process.map((step, idx) => (
                          <li key={step} className="flex items-start gap-4">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-ember-500 font-mono text-xs font-semibold text-ember-600 dark:text-amber-glow">
                              {idx + 1}
                            </span>
                            <span className="pt-1 text-sm font-medium text-ink-950 dark:text-white">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
