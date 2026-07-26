"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// IMPORTANT: opacity is intentionally NOT animated here anymore. Content
// must always be visible on first paint, full stop — no dependency on
// scroll timing, IntersectionObserver firing in time, or a third-party
// capture tool (e.g. Mockvid) rendering JS/animations the way a normal
// browser does. Only a small, purely cosmetic vertical offset is animated,
// so worst case (JS never runs at all) the content is still 100% visible,
// just without the subtle slide-up polish.
const variants: Variants = {
  hidden: { y: 20 },
  show: {
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

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

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
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
    // Children only set `variants` (no initial/animate of their own) and
    // rely on inheriting "show" from this element via Framer Motion's
    // context propagation — so this stays a motion.div, pinned to "show".
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
