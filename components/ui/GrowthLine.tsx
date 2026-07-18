"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * The site's signature device: a hand-drawn-feeling ascending line that
 * stands in for "growth" — reused as a section divider, in the hero
 * background, and in the footer. Draws itself in on scroll.
 */
export function GrowthLine({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)} aria-hidden>
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        preserveAspectRatio="none"
        className={cn("h-full w-full", flip && "-scale-y-100")}
      >
        <motion.path
          d="M0 100 C 150 100, 180 60, 300 65 C 420 70, 460 20, 600 30 C 740 40, 780 10, 900 12 C 1020 14, 1060 45, 1200 15"
          stroke="url(#growthGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <defs>
          <linearGradient id="growthGradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E63946" stopOpacity="0" suppressHydrationWarning />
            <stop offset="15%" stopColor="#E63946" suppressHydrationWarning />
            <stop offset="55%" stopColor="#A8DADC" suppressHydrationWarning />
            <stop offset="100%" stopColor="#31587A" suppressHydrationWarning />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
