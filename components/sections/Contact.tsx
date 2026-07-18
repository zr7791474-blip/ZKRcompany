"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

export function Contact({ hideHeading = false }: { hideHeading?: boolean } = {}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="py-28 sm:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            {!hideHeading && (
              <SectionHeading
                eyebrow="Contact"
                title="Tell us about your project."
                description="Fill out the form or reach us directly — we typically reply within one business day."
              />
            )}

            <Reveal delay={0.2} className="mt-10 flex flex-col gap-4">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-ink-950/8 bg-mist-100 p-4 transition-colors hover:border-ember-500/40 dark:border-white/10 dark:bg-white/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-ember-600 shadow-sm dark:bg-white/10 dark:text-amber-glow">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-950 dark:text-white">Email</p>
                  <p className="text-sm text-ink-500 dark:text-white/60">{site.email}</p>
                </div>
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-ink-950/8 bg-mist-100 p-4 transition-colors hover:border-moss-500/40 dark:border-white/10 dark:bg-white/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-moss-600 shadow-sm dark:bg-white/10 dark:text-moss-300">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-950 dark:text-white">WhatsApp</p>
                  <p className="text-sm text-ink-500 dark:text-white/60">Fastest way to reach us</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-ink-950/8 bg-mist-100 p-4 dark:border-white/10 dark:bg-white/5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-ink-950 shadow-sm dark:bg-white/10 dark:text-white">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-950 dark:text-white">Based in</p>
                  <p className="text-sm text-ink-500 dark:text-white/60">{site.location}</p>
                </div>
              </div>
            </Reveal>

            {/* Map placeholder */}
            <Reveal delay={0.28} className="relative mt-6 h-40 overflow-hidden rounded-2xl border border-ink-950/8 dark:border-white/10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(15 23 42 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42 / 0.06) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-ember-500/10 via-transparent to-moss-400/10" />
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1">
                <MapPin className="h-6 w-6 text-ember-500" />
                <span className="font-mono text-xs text-ink-500 dark:text-white/50">Casablanca, MA</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-ink-950/8 bg-mist-100 p-8 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Jane Doe" required />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
              </div>
              <div className="mt-5">
                <Field label="Company (optional)" name="company" placeholder="Company Inc." />
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-medium text-ink-950 dark:text-white">
                  Project details
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you looking to build?"
                  className="w-full resize-none rounded-xl border border-ink-950/12 bg-white px-4 py-3 text-sm text-ink-950 outline-none transition-colors placeholder:text-ink-500/50 focus:border-ember-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileTap={{ scale: 0.98 }}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ember-600 disabled:opacity-70 dark:bg-white dark:text-ink-950 dark:hover:bg-amber-glow"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send message
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <p className="mt-3 text-center text-sm text-moss-600 dark:text-moss-300">
                  Thanks — we&apos;ll get back to you within one business day.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-center text-sm text-red-600 dark:text-red-400">{errorMsg}</p>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink-950 dark:text-white">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-950/12 bg-white px-4 py-3 text-sm text-ink-950 outline-none transition-colors placeholder:text-ink-500/50 focus:border-ember-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
      />
    </div>
  );
}
