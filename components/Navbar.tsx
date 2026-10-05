"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu when the route changes (state adjusted during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Focus management: move focus into the menu on open; Escape closes and returns focus to the toggle; Tab stays inside.
  useEffect(() => {
    if (!open) return;
    // The panel is still `visibility:hidden` on the first frame of its open transition, and hidden elements can't
    // take focus, so wait a beat before moving focus into the menu.
    const focusTimer = window.setTimeout(() => panelRef.current?.querySelector<HTMLElement>("a")?.focus(), 40);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const items = [buttonRef.current, ...Array.from(panelRef.current?.querySelectorAll<HTMLElement>("a") ?? [])].filter(
        Boolean
      ) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-nav sticky top-0 z-50 border-b border-fg/15">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="ZKR — home" className="-ml-1 flex min-h-11 items-center px-1">
          <Logo />
        </Link>

        <div className="flex items-center gap-1 md:gap-5 lg:gap-8">
          <nav aria-label="Main" className="hidden items-center gap-5 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn("u-nav text-[15px]", isActive(link.href) ? "text-fg" : "text-fg/70 hover:text-fg")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden min-h-11 items-center whitespace-nowrap rounded-sm bg-red px-4 text-[15px] font-semibold text-white transition-colors hover:bg-red-dark md:inline-flex lg:px-5"
          >
            Start a project
          </Link>

          <button
            ref={buttonRef}
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </Container>

      {/* Always mounted so it can animate; `inert` + `invisible` keep it out of the tab order and the a11y tree while closed. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        inert={!open}
        className={cn(
          "absolute inset-x-0 top-16 border-b border-fg/15 bg-bg/95 transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none md:hidden",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        )}
      >
        <nav aria-label="Mobile">
          <Container className="flex flex-col py-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className="flex min-h-14 items-baseline gap-4 border-b border-fg/10 py-3 text-3xl font-medium [font-stretch:112%]"
              >
                <span className="t-meta w-6 text-fg/55">{String(i + 1).padStart(2, "0")}</span>
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-sm bg-red px-5 font-semibold text-white"
            >
              Start a project
            </Link>
          </Container>
        </nav>
      </div>
    </header>
  );
}
