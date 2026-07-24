"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup, revealVariants } from "@/components/ui/Reveal";
import { workAll } from "@/lib/content";

const filters = ["All", "Web Platform", "E-commerce", "Brand + Web", "Product Design", "AI Feature"];

function matchesFilter(category: string, filter: string) {
  if (filter === "All") return true;
  return category.toLowerCase().includes(filter.toLowerCase());
}

export function WorkClient() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => workAll.filter((p) => matchesFilter(p.category, active)),
    [active]
  );

  return (
    <section className="pb-28 sm:pb-36">
      <Container>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active === f
                    ? "border-ink-950 bg-ink-950 text-white dark:border-white dark:bg-white dark:text-ink-950"
                    : "border-ink-950/12 text-ink-500 hover:border-ink-950/30 hover:text-ink-950 dark:border-white/15 dark:text-white/60 dark:hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <RevealGroup key={active} className="mt-10 grid gap-6 sm:grid-cols-2" stagger={0.08}>
            {filtered.map((project) => (
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

                  <p className="mt-4 text-sm leading-relaxed text-ink-950/80 dark:text-white/70">
                    <span className="font-semibold text-ink-950 dark:text-white">Built: </span>
                    {project.built}
                  </p>

                  <ul className="mt-3 flex flex-col gap-1.5">
                    {project.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink-950/80 dark:text-white/70">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-moss-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

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

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-sm text-ink-500 dark:text-white/50">
              No projects in this category yet — check back soon.
            </p>
          )}
        </Container>
    </section>
  );
}
