"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Sparkles, TrendingUp, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, revealVariants } from "@/components/ui/Reveal";
import { services } from "@/lib/content";

const icons = { web: Code2, design: Palette, brand: Sparkles, growth: TrendingUp };

export function Services() {
  return (
    <section id="services" className="relative bg-mist-100 py-28 sm:py-36 dark:bg-white/[0.02]">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Everything a growing business needs, under one roof."
          description="No hand-offs between vendors. One person, one accountable roadmap, from first sketch to shipped product."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2" stagger={0.1}>
          {services.map((service) => {
            const Icon = icons[service.id as keyof typeof icons];
            return (
              <motion.div
                key={service.id}
                variants={revealVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative overflow-hidden rounded-3xl border border-ink-950/8 bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_30px_60px_-20px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-ember-500/10 to-amber-glow/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ember-500 to-amber-glow text-white shadow-lg shadow-ember-500/20">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-ink-950 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-white/60">
                  {service.description}
                </p>

                <ul className="mt-5 flex flex-col gap-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-ink-950/80 dark:text-white/70">
                      <Check className="h-3.5 w-3.5 shrink-0 text-moss-500" />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href={`/services#${service.id}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 transition-colors group-hover:text-ember-600 dark:text-white dark:group-hover:text-amber-glow"
                >
                  Get started
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
