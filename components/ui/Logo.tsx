"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Renders the ZKR Company logo from /public/zkr.jpg.
 *
 * Expects the file at: public/zkr.jpg
 * Falls back to a simple monogram if that file isn't present yet, so the
 * site never shows a broken-image icon — drop your logo in and this
 * component picks it up automatically, no code changes needed.
 */
export function Logo({
  size = 36,
  showWordmark = true,
  className,
  wordmarkClassName,
}: {
  size?: number;
  showWordmark?: boolean;
  className?: string;
  wordmarkClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span
        className="relative shrink-0 overflow-hidden rounded-xl ring-1 ring-ink-950/10 dark:ring-white/15"
        style={{ width: size, height: size }}
      >
        {failed ? (
          <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ember-500 to-amber-glow font-display text-sm font-bold text-white">
            Z
          </span>
        ) : (
          <Image
            src="/zkr.jpg"
            alt="ZKR Company logo"
            fill
            sizes={`${size}px`}
            className="object-cover"
            priority
            onError={() => setFailed(true)}
            // next/image's `fill` mode writes numeric 0 for left/top/right/bottom
            // client-side vs "0px" in the SSR'd HTML attribute — cosmetic-only
            // mismatch in Next.js itself, not app code. Safe to suppress here.
            suppressHydrationWarning
          />
        )}
      </span>
      {showWordmark && (
        <span
          className={cn(
            "font-display text-[15px] font-semibold tracking-tight text-ink-950 dark:text-white",
            wordmarkClassName
          )}
        >
          ZKR Company
        </span>
      )}
    </span>
  );
}
