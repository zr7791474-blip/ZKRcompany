"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Code2, Palette, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { highlights } from "@/lib/content";

const floatingCards = [
  { icon: Code2, label: "Web Development", offset: "left-[2%] top-[18%]", delay: 0 },
  { icon: Palette, label: "UI / UX Design", offset: "right-[0%] top-[8%]", delay: 0.15 },
  { icon: TrendingUp, label: "Performance-first", offset: "right-[4%] bottom-[10%]", delay: 0.3 },
];

export function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-4, 4]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative isolate overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36"
    >
      {/*
        Hero background photo — expects the file at: public/hero/backgroud.jpg
        (filename matches the brief exactly, including the given spelling).
        Uses next/image with `fill` + `priority` since this is the LCP element.
        Falls back to a rich gradient if the file isn't present yet.
      */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-ink-950 via-moss-600 to-ink-950">
        {!photoFailed && (
          <Image
            src="/hero/backgroud.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            onError={() => setPhotoFailed(true)}
            // See components/ui/Logo.tsx — same next/image `fill` cosmetic quirk.
            suppressHydrationWarning
          />
        )}
      </div>

      {/* Navy gradient overlay — guarantees contrast for text regardless of photo content */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-ink-950/90 via-ink-950/80 to-ink-950/95" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />

      {/* Grid texture on top of the overlay for depth */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]"
        suppressHydrationWarning
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255 255 255 / 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Subtle brand-color glow accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 grain">
        <motion.div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-ember-500/25 blur-[110px] animate-drift" />
        <motion.div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-amber-glow/20 blur-[120px] animate-drift-delay" />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-mono text-xs tracking-wide text-white/70 backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-glow opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-glow" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.04] text-balance text-white sm:text-6xl lg:text-7xl"
          >
I&apos;m ZKR — a developer who builds
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-ember-400 to-amber-glow bg-clip-text text-transparent">
                fast, well-built web products
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/70"
          >
            I design and build websites, dashboards, and product interfaces
            for small businesses and founders who want something sharper than
            a template — end to end, with no hand-offs along the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <MagneticButton href="/contact" icon={<ArrowUpRight className="h-4 w-4" />}>
              Start your project
            </MagneticButton>
            <MagneticButton
              href="/services"
              variant="outline"
              className="border-white/25 text-white hover:border-amber-glow hover:text-amber-glow"
            >
              Explore services
            </MagneticButton>
          </motion.div>

          {/* Floating glass cards + orbit, desktop only */}
          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="relative mt-20 hidden h-72 w-full max-w-3xl md:block"
          >
            {floatingCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 + card.delay, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute ${card.offset} flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] backdrop-blur-xl`}
                >
                  <motion.span
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-amber-glow text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.span>
                  <span className="whitespace-nowrap text-sm font-medium text-white">
                    {card.label}
                  </span>
                </motion.div>
              );
            })}

            {/* orbit rings */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]" />
            <div
              className="absolute left-1/2 top-1/2 h-3 w-3 animate-orbit-slow rounded-full bg-gradient-to-br from-ember-500 to-amber-glow shadow-[0_0_20px_4px_rgba(230,57,70,0.5)]"
              style={{ ["--r" as string]: "128px" }}
            />
            <div
              className="absolute left-1/2 top-1/2 h-2 w-2 animate-orbit-slow-reverse rounded-full bg-moss-400 shadow-[0_0_16px_3px_rgba(119,171,189,0.5)]"
              style={{ ["--r" as string]: "192px" }}
            />
          </motion.div>

          {/* Highlights — honest, qualitative signals rather than invented numbers */}
          <div className="mt-20 flex w-full max-w-3xl flex-wrap items-center justify-center gap-3 border-t border-white/15 pt-10">
            {highlights.map((h) => (
              <span
                key={h.label}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs text-white/60"
              >
                {h.label}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
