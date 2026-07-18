"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, revealVariants } from "@/components/ui/Reveal";
import { work } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className="py-28 sm:py-36">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Work"
            title="Recent projects, real outcomes."
            className="max-w-xl"
          />
          <a
            href="/work"
            className="group mb-1 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 transition-colors hover:text-ember-600 dark:text-white dark:hover:text-amber-glow"
          >
            View all work
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2" stagger={0.1}>
          {work.map((project) => (
            <motion.a
              href="/work"
              key={project.title}
              variants={revealVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative block overflow-hidden rounded-3xl border border-ink-950/8 bg-mist-100 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <motion.div
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                />
                <div
                  className="absolute inset-0 opacity-40 mix-blend-overlay"
                  suppressHydrationWarning
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, white 0%, transparent 45%), radial-gradient(circle at 80% 80%, black 0%, transparent 50%)",
                  }}
                />
                <motion.span
                  variants={{ rest: { opacity: 0, scale: 0.8 }, hover: { opacity: 1, scale: 1 } }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-950 shadow-lg"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </motion.span>
                <span className="absolute bottom-5 left-5 rounded-full bg-white/85 px-3 py-1 font-mono text-[11px] font-medium text-ink-950 backdrop-blur-sm">
                  {project.metric}
                </span>
              </div>

              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-500 dark:text-white/40">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-white/60">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
