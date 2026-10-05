"use client";

import { useEffect } from "react";

/**
 * Drives two CSS variables:
 *  --nav-a  : 0 at the very top, 1 once content can scroll under the navbar (makes the bar solid).
 *  --veil-a : how much theme colour covers the fixed photograph:
 * light at the top of every page so the photo reads as the opening scene, settling to a calm level
 * after ~one screen so body text always has strong contrast. Passive listener + rAF, no React state.
 * This stays on for reduced-motion users too: it is an opacity value mapped straight to scroll position (nothing moves,
 * nothing plays by itself), and without it the photograph — the identity of the site — would be almost invisible.
 * What reduced motion does remove is the veil's own colour cross-fade (see globals.css).
 */
export function ScrollVeil() {
  useEffect(() => {
    const root = document.documentElement;
    const wide = window.matchMedia("(min-width: 768px)");
    let raf = 0;
    let navState = "";

    const update = () => {
      raf = 0;
      const top = wide.matches ? 0.28 : 0.5;
      const settled = 0.82;
      const t = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.85)));
      const eased = t * t * (3 - 2 * t);
      root.style.setProperty("--veil-a", (top + (settled - top) * eased).toFixed(3));
      const nav = window.scrollY > 24 ? "1" : "0";
      if (nav !== navState) {
        navState = nav;
        root.style.setProperty("--nav-a", nav);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
