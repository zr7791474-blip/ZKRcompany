"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RevealGroup, revealVariants } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/content";

const categoryColor: Record<string, string> = {
  Strategy: "from-ember-500 to-amber-glow",
  Engineering: "from-moss-400 to-moss-600",
  Design: "from-amber-glow to-ember-600",
  SEO: "from-moss-300 to-moss-500",
  Studio: "from-ember-600 to-ember-400",
  AI: "from-ember-500 to-moss-500",
};

export function BlogGrid({ limit }: { limit?: number } = {}) {
  const posts = limit ? blogPosts.slice(0, limit) : blogPosts;
  return (
    <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
      {posts.map((post) => (
        <motion.a
          href="/contact"
          key={post.slug}
          variants={revealVariants}
          className="group flex flex-col overflow-hidden rounded-3xl border border-ink-950/8 bg-mist-100 dark:border-white/10 dark:bg-white/[0.03]"
        >
          <div className={`h-36 bg-gradient-to-br ${categoryColor[post.category] ?? "from-ember-500 to-amber-glow"}`} />
          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-500 dark:text-white/40">
              <span>{post.category}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink-950 dark:text-white">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-white/60">{post.excerpt}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-ink-500 dark:text-white/40">{post.date}</span>
              <ArrowUpRight className="h-4 w-4 text-ink-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-white" />
            </div>
          </div>
        </motion.a>
      ))}
    </RevealGroup>
  );
}
