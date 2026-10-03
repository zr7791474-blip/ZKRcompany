import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ResolvedImage } from "@/lib/project-images";

const isDev = process.env.NODE_ENV !== "production";

/** Simple labelled frame (used for the portrait slot). Quiet in production, names the file in `next dev`. */
export function ImagePlaceholder({ className, hint, label = "Photo coming soon" }: { className?: string; hint?: string; label?: string }) {
  return (
    <div className={cn("flex items-end border border-night/20 bg-paper-deep p-4 text-night/70", className)}>
      <p className="font-mono text-xs leading-relaxed">
        {label}
        {isDev && hint && (
          <>
            <br />
            <span className="text-red-dark">add: {hint}</span>
          </>
        )}
      </p>
    </div>
  );
}

/**
 * Shown while a project has no screenshot yet. It is deliberately NOT a fake screenshot:
 * just the project's number, category and an honest "coming soon" label on a brand-coloured field.
 */
export function CoverFallback({
  index,
  category,
  dark,
  hint,
  className,
}: {
  index: string;
  category: string;
  dark?: boolean;
  hint?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border",
        dark ? "border-paper/20 bg-night-2 text-paper" : "border-night/20 bg-paper-deep text-night",
        className
      )}
    >
      <span className={cn("absolute left-5 top-0 h-1 w-14 sm:left-8", "bg-red")} aria-hidden />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[0.14em] -right-[0.03em] select-none font-display font-semibold leading-none tracking-[-0.06em] opacity-[0.07]"
        style={{ fontSize: "min(46vw, 34rem)" }}
      >
        {index}
      </span>
      <div className="relative flex h-full flex-col justify-between p-5 pt-8 sm:p-8 sm:pt-10">
        <p className="font-mono text-xs opacity-80">{category}</p>
        <p className="font-mono text-xs opacity-80">
          Screenshots coming soon
          {isDev && hint && (
            <>
              <br />
              <span className={dark ? "text-red-bright" : "text-red-dark"}>add: {hint}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

/** Fixed-aspect cropped image (cards, hero). `fill` + `sizes` so the browser only fetches what it needs. */
export function CoverImage({
  image,
  aspect,
  sizes,
  priority = false,
  fallback,
  dark,
  className,
  zoom = true,
}: {
  image?: ResolvedImage;
  aspect: string;
  sizes: string;
  priority?: boolean;
  fallback: { index: string; category: string; hint?: string };
  dark?: boolean;
  className?: string;
  zoom?: boolean;
}) {
  if (!image) return <CoverFallback {...fallback} dark={dark} className={cn(aspect, className)} />;
  return (
    <div className={cn("relative overflow-hidden border", dark ? "border-paper/20" : "border-night/20", zoom && "img-zoom", aspect, className)}>
      <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
    </div>
  );
}

/** Natural-ratio image with the file's real width/height (no layout shift, no cropping). */
export function NaturalImage({ image, sizes, dark, className }: { image: ResolvedImage; sizes: string; dark?: boolean; className?: string }) {
  return (
    <div className={cn("img-zoom overflow-hidden", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        loading="lazy"
        className={cn("h-auto w-full border", dark ? "border-paper/20" : "border-night/20")}
      />
    </div>
  );
}
