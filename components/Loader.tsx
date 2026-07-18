"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logoFailed, setLogoFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + (100 - p) * 0.14 + 1.2;
        return next >= 100 ? 100 : next;
      });
    }, 60);

    const timeout = setTimeout(() => setVisible(false), 1900);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [reduceMotion]);

  const shouldShow = visible && !reduceMotion;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-mist-50 dark:bg-[#1D3557]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          <div className="relative flex h-20 w-20 items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-[28%]"
              suppressHydrationWarning
              style={{
                background: "conic-gradient(from 0deg, #E63946, #A8DADC, #31587A, #E63946)",
              }}
              animate={{ rotate: 360, borderRadius: ["28%", "50%", "28%"] }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                borderRadius: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            <div className="absolute inset-[3px] flex items-center justify-center overflow-hidden rounded-[26%] bg-mist-50 font-display text-lg font-bold text-ink-950 dark:bg-[#1D3557] dark:text-white">
              {logoFailed ? (
                "ZKR"
              ) : (
                <Image
                  src="/zkr.jpg"
                  alt="ZKR"
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority
                  onError={() => setLogoFailed(true)}
                  // See components/ui/Logo.tsx — same next/image `fill` cosmetic quirk.
                  suppressHydrationWarning
                />
              )}
            </div>
          </div>

          <div className="mt-8 h-px w-40 overflow-hidden rounded-full bg-ink-950/10 dark:bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-ember-500 via-amber-glow to-moss-400"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 font-mono text-[11px] tracking-[0.2em] text-ink-500 dark:text-white/50">
            LOADING EXPERIENCE
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
