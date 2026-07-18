"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
              <motion.a
                href="/contact"
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

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-sm text-ink-500 dark:text-white/50">
              No projects in this category yet — check back soon.
            </p>
          )}
        </Container>
    </section>
  );
}
