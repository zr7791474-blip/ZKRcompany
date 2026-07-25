"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Mail, MessageCircle, X as XIcon, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GrowthLine } from "@/components/ui/GrowthLine";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/content";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services#web" },
      { label: "UI / UX Design", href: "/services#design" },
      { label: "Branding", href: "/services#brand" },
      { label: "SEO & Marketing", href: "/services#growth" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Process", href: "/process" },
      { label: "Technologies", href: "/technologies" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error ?? "Could not subscribe. Please try again.");
        return;
      }

      setSubscribed(true);
      setEmail("");
    } catch {
      setError("Could not subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-24 text-white">
      <GrowthLine className="absolute inset-x-0 top-0 h-16 opacity-30" />
      <Container>
        {/* CTA banner */}
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-10 text-center sm:p-16">
          <h2 className="font-display text-3xl font-semibold text-balance sm:text-4xl">
            Ready to build something that grows?
          </h2>
          <p className="max-w-lg text-white/60">
            Tell me about your project — I&apos;ll reply within one business day with next steps.
          </p>
          <MagneticButton href="/contact" className="bg-white text-ink-950 hover:bg-amber-glow">
            Start your project
          </MagneticButton>
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo size={34} showWordmark className="text-white" wordmarkClassName="text-white text-lg" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              An independent developer building websites, dashboards, and product interfaces for businesses and founders
              that want more than a template.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6 max-w-xs">
              <label htmlFor="newsletter" className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
                Newsletter
              </label>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-4">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  disabled={isSubmitting}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-ink-950 transition-colors hover:bg-amber-glow disabled:opacity-60"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-moss-300"
                >
                  You&apos;re on the list.
                </motion.p>
              )}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-ember-400"
                >
                  {error}
                </motion.p>
              )}
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-xs uppercase tracking-wider text-white/40">{col.title}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-amber-glow">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-xs text-white/40">© 2026 {site.fullName}. All rights reserved.</p>

          <div className="flex items-center gap-3 text-xs text-white/40">
            <a href="/privacy" className="hover:text-white/70">Privacy Policy</a>
            <span>·</span>
            <a href="/terms" className="hover:text-white/70">Terms of Service</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-amber-glow hover:text-amber-glow"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-amber-glow hover:text-amber-glow"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={site.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-amber-glow hover:text-amber-glow"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-amber-glow hover:text-ink-950"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
