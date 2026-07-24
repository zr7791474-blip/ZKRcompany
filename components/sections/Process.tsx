"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="relative bg-mist-100 py-28 sm:py-36 dark:bg-white/[0.02]">
      <Container>
        <SectionHeading
          eyebrow="How I work"
          title="A process built to remove surprises."
          description="Five stages, one team, full visibility from kickoff to launch and beyond."
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-ink-950/10 lg:block dark:bg-white/10" />
          <motion.div
            className="absolute left-0 top-6 hidden h-px bg-gradient-to-r from-ember-500 via-amber-glow to-moss-400 lg:block"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08} className="relative">
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ember-500 bg-mist-50 font-mono text-sm font-semibold text-ember-600 dark:bg-[#1D3557] dark:text-amber-glow">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink-950 lg:mt-5 dark:text-white">
                    {item.step}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 lg:mt-2 dark:text-white/60">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
