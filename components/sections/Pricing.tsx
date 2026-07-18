"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, revealVariants } from "@/components/ui/Reveal";
import { pricing } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Straightforward pricing, no surprise invoices."
          description="Every engagement starts with a scoped estimate. These are typical ranges — your quote comes after a short discovery call."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3" stagger={0.1}>
          {pricing.map((plan) => (
            <motion.div
              key={plan.name}
              variants={revealVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={cn(
                "relative flex flex-col rounded-3xl border p-8",
                plan.popular
                  ? "border-ember-500/40 bg-gradient-to-b from-ember-500/[0.06] to-transparent shadow-[0_30px_60px_-25px_rgba(235,94,40,0.35)] dark:from-ember-500/10"
                  : "border-ink-950/8 bg-mist-100 dark:border-white/10 dark:bg-white/[0.03]"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-ember-500 to-amber-glow px-3 py-1 font-mono text-[11px] font-semibold text-white">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-ink-950 dark:text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-ink-500 dark:text-white/60">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-bold text-ink-950 dark:text-white">{plan.price}</span>
                <span className="text-sm text-ink-500 dark:text-white/50">{plan.period}</span>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-950/80 dark:text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold transition-colors",
                  plan.popular
                    ? "bg-ink-950 text-white hover:bg-ember-600 dark:bg-white dark:text-ink-950 dark:hover:bg-amber-glow"
                    : "border border-ink-950/15 text-ink-950 hover:border-ember-500 hover:text-ember-600 dark:border-white/20 dark:text-white"
                )}
              >
                {plan.price === "Custom" ? "Request a quote" : "Get started"}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
