"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
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
            title="Projects I've designed and built."
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
            <motion.div
              key={project.title}
              variants={revealVariants}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink-950/8 bg-mist-100 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="relative h-44 overflow-hidden sm:h-48">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-105`} />
                <div
                  className="absolute inset-0 opacity-40 mix-blend-overlay"
                  suppressHydrationWarning
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, white 0%, transparent 45%), radial-gradient(circle at 80% 80%, black 0%, transparent 50%)",
                  }}
                />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 font-mono text-[11px] font-medium text-ink-950 backdrop-blur-sm">
                  {project.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-500 dark:text-white/40">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-white/60">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink-950/10 px-2.5 py-1 font-mono text-[11px] text-ink-500 dark:border-white/10 dark:text-white/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-5 flex items-center gap-4 border-t border-ink-950/8 pt-4 dark:border-white/10">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 transition-colors hover:text-ember-600 dark:text-white dark:hover:text-amber-glow"
                      >
                        Live demo
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 transition-colors hover:text-ember-600 dark:text-white dark:hover:text-amber-glow"
                      >
                        <Code2 className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
