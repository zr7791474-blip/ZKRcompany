import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ResolvedImage } from "@/lib/project-images";

const isDev = process.env.NODE_ENV !== "production";

/** Simple labelled frame (portrait slot). Quiet in production, names the file in `next dev`. */
export function ImagePlaceholder({ className, hint, label = "Photo coming soon" }: { className?: string; hint?: string; label?: string }) {
  return (
    <div className={cn("flex items-end border border-fg/25 bg-surface/70 p-4 text-fg/70", className)}>
      <p className="t-meta leading-relaxed">
        {label}
        {isDev && hint && (
          <>
            <br />
            <span className="text-danger normal-case tracking-normal">add: {hint}</span>
          </>
        )}
      </p>
    </div>
  );
}

/**
 * Shown while a project has no screenshot yet. Deliberately NOT a fake screenshot:
 * the project number, category and an honest "coming soon" label.
 */
export function CoverFallback({ index, category, hint, className }: { index: string; category: string; hint?: string; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden border border-fg/25 bg-surface/70 text-fg", className)}>
      <span className="absolute left-5 top-0 h-1 w-14 bg-red sm:left-8" aria-hidden />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-[0.14em] -right-[0.03em] select-none font-semibold leading-none tracking-[-0.06em] opacity-[0.07] [font-stretch:125%]"
        style={{ fontSize: "min(46vw, 34rem)" }}
      >
        {index}
      </span>
      <div className="relative flex h-full flex-col justify-between p-5 pt-8 sm:p-8 sm:pt-10">
        <p className="t-meta opacity-80">{category}</p>
        <p className="t-meta opacity-80">
          Screenshots coming soon
          {isDev && hint && (
            <>
              <br />
              <span className="text-danger normal-case tracking-normal">add: {hint}</span>
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
  className,
  zoom = true,
}: {
  image?: ResolvedImage;
  aspect: string;
  sizes: string;
  priority?: boolean;
  fallback: { index: string; category: string; hint?: string };
  className?: string;
  zoom?: boolean;
}) {
  if (!image) return <CoverFallback {...fallback} className={cn(aspect, className)} />;
  return (
    <div className={cn("relative overflow-hidden border border-fg/25", zoom && "img-zoom", aspect, className)}>
      {/* Not lazy: lazy-loading treats content inside the reveal wipe (clip-path) as invisible, so it would only start
          downloading after the wipe began. Fetch early at LOW priority instead so it never competes with the hero. */}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        {...(priority ? {} : { loading: "eager" as const, fetchPriority: "low" as const })}
        className="object-cover object-top"
      />
    </div>
  );
}

/** Natural-ratio image with the file's real width/height (no layout shift, no cropping), with an editorial figure caption. */
export function NaturalImage({
  image,
  sizes,
  figure,
  className,
}: {
  image: ResolvedImage;
  sizes: string;
  /** e.g. "Fig. 02" — shown with the image's caption when it has one. */
  figure?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="img-zoom overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          loading="eager"
          fetchPriority="low"
          className="h-auto w-full border border-fg/25"
        />
      </div>
      {image.caption && (
        <figcaption className="t-meta mt-3 flex gap-3 text-fg/65">
          {figure && <span className="text-accent">{figure}</span>}
          <span>{image.caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
