"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // eslint-disable-next-line react-hooks/set-state-in-effect -- standard next-themes hydration-safe mount check
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500",
            scrolled
              ? "border-ink-950/8 bg-white/70 shadow-[0_4px_30px_-10px_rgba(15,23,42,0.15)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
              : "border-transparent bg-transparent"
          )}
        >
          <Link href="/" className="pl-1.5">
            <Logo size={34} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-950 dark:text-white/60 dark:hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0 h-px origin-left scale-x-0 bg-ember-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle dark mode"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-ink-950/5 hover:text-ink-950 dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <a
              href="/contact"
              className="hidden items-center gap-1.5 rounded-full bg-ink-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ember-600 sm:inline-flex dark:bg-white dark:text-ink-950 dark:hover:bg-amber-glow"
            >
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-950 hover:bg-ink-950/5 lg:hidden dark:text-white dark:hover:bg-white/10"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-ink-950/8 bg-white/95 p-4 shadow-xl backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-[#1D3557]/95"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-950 hover:bg-ink-950/5 dark:text-white dark:hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink-950 px-4 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-ink-950"
              >
                Start a project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
