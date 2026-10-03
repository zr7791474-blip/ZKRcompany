"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * One restrained entrance: content rises slightly, images wipe open.
 * - Plays once, never loops.
 * - Without JS (or with reduced motion) CSS leaves everything visible.
 * - Don't wrap the hero headline in this (it is the LCP element).
 */
export function Reveal({
  children,
  className,
  variant = "rise",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "rise" | "image";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(variant === "image" ? "reveal-img" : "reveal", className)}
      style={delay ? ({ "--d": `${delay}s` } as React.CSSProperties) : undefined}
    >
      {variant === "image" ? <div className="reveal-img-inner">{children}</div> : children}
    </div>
  );
}
