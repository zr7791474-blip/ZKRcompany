"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// A generous, *positive* viewport margin so the reveal triggers well before
// an element is actually visible on screen — this gives the animation time
// to finish before a real (or automated/fast-scrolling) viewer ever sees it.
// A negative margin here would do the opposite: delay the trigger until the
// element is already deep in view, which is exactly what caused cards to
// show up still invisible (stuck at opacity: 0) in fast automated scroll
// captures (e.g. Mockvid) — the capture reached the card before the
// animation had a chance to start.
const VIEWPORT = { once: true, margin: "0px 0px 200px 0px" } as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  // With reduced motion (real user preference, or an automated capture
  // tool emulating it) skip the hidden phase entirely — render the final,
  // fully-visible state immediately so content is never caught invisible.
  if (reduceMotion) {
    return (
      <motion.div className={cn(className)} initial="show" animate="show" variants={variants}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduceMotion = useReducedMotion();

  const groupVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };

  if (reduceMotion) {
    // Children rely on inheriting the "show" variant from this element via
    // Framer Motion's context propagation (they only set `variants`, not
    // their own initial/animate) — so this stays a motion.div, just pinned
    // straight to "show" instead of animating in on scroll.
    return (
      <motion.div className={cn(className)} initial="show" animate="show" variants={groupVariants}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={groupVariants}
    >
      {children}
    </motion.div>
  );
}

export { variants as revealVariants };
