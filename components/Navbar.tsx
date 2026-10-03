"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
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

  // Focus management: move focus into the menu on open; Escape closes and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      // Keep Tab inside [toggle button + menu links] while the menu is open.
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
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="surface-dark sticky top-0 z-50 border-b border-paper/15 bg-night text-paper">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="ZKR — home" className="-ml-1 flex min-h-11 items-center px-1">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn("u-nav text-[15px]", isActive(link.href) ? "text-paper" : "text-paper/75 hover:text-paper")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-sm bg-red px-5 text-[15px] font-semibold text-white transition-colors hover:bg-red-dark"
          >
            Start a project
          </Link>
        </nav>

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
      </Container>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="absolute inset-x-0 top-16 border-b border-paper/15 bg-night md:hidden"
      >
        <nav aria-label="Mobile">
          <Container className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className="flex min-h-12 items-center border-b border-paper/10 font-display text-2xl font-medium"
              >
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
