"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const subscribe = (cb: () => void) => {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => mo.disconnect();
};
const isDarkNow = () => document.documentElement.classList.contains("dark");

/**
 * Light/dark switch. The <html class="dark"> state is the single source of truth (set before first paint by the
 * inline script in layout.tsx), the choice is persisted in localStorage, and the icon shows the mode you will
 * switch TO (moon while the site is light, sun while it is dark). The accessible name describes the action.
 */
export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, isDarkNow, () => true);
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  function toggle() {
    const root = document.documentElement;
    root.classList.add("theme-fade"); // short colour cross-fade (disabled for reduced motion in CSS)
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("zkr-theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable: the choice just won't persist */
    }
    window.setTimeout(() => root.classList.remove("theme-fade"), 450);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="relative flex h-11 w-11 items-center justify-center rounded-sm border border-transparent text-fg/80 transition-colors hover:border-fg/30 hover:text-fg"
    >
      <span className="relative block h-[18px] w-[18px]" aria-hidden>
        <Moon className="absolute inset-0 h-full w-full transition-all duration-300 motion-reduce:transition-none dark:-rotate-90 dark:scale-50 dark:opacity-0" />
        <Sun className="absolute inset-0 h-full w-full rotate-90 scale-50 opacity-0 transition-all duration-300 motion-reduce:transition-none dark:rotate-0 dark:scale-100 dark:opacity-100" />
      </span>
    </button>
  );
}
