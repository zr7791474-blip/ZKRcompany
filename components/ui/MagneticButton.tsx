"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  icon?: React.ReactNode;
};

export function MagneticButton({ href, children, variant = "primary", className, icon }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLSpanElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-colors duration-300 select-none";

  const styles = {
    primary:
      "bg-ink-950 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset] hover:bg-ember-600 dark:bg-white dark:text-ink-950 dark:hover:bg-amber-glow",
    outline:
      "border border-ink-950/15 text-ink-950 hover:border-ember-500 hover:text-ember-600 dark:border-white/20 dark:text-white dark:hover:border-amber-glow dark:hover:text-amber-glow",
    ghost: "text-ink-950 hover:text-ember-600 dark:text-white dark:hover:text-amber-glow",
  };

  const content = (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
      className={cn(base, styles[variant], className)}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-ember-500 to-amber-glow opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-amber-glow dark:to-ember-400" />
      )}
      {children}
      {icon}
    </motion.span>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}
