import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ember-600 dark:text-amber-glow",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] text-balance text-ink-950 sm:text-4xl lg:text-[2.75rem] dark:text-white">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg dark:text-white/60">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
