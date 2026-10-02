import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ResolvedImage } from "@/lib/project-images";

const isDev = process.env.NODE_ENV !== "production";

/** Shown only when a screenshot file doesn't exist yet. In `next dev` it names the file to add. */
export function ImagePlaceholder({
  className,
  hint,
  dark,
}: {
  className?: string;
  hint?: string;
  dark?: boolean;
}) {
  const line = dark ? "rgb(243 239 231 / 0.10)" : "rgb(13 20 36 / 0.10)";
  return (
    <div
      className={cn(
        "flex items-center justify-center border border-dashed",
        dark ? "border-paper/30 bg-night-2 text-paper/70" : "border-night/30 bg-paper-deep text-night/70",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    >
      <p className="max-w-[30ch] px-4 text-center font-mono text-xs leading-relaxed">
        Screenshot coming soon
        {isDev && hint && (
          <>
            <br />
            <span className={dark ? "text-red-bright" : "text-red"}>add: {hint}</span>
          </>
        )}
      </p>
    </div>
  );
}

/** Fixed-aspect cropped image (cards, hero). Uses `fill` + sizes so the browser only fetches what it needs. */
export function CoverImage({
  image,
  aspect,
  sizes,
  priority = false,
  hint,
  dark,
  className,
  zoom = true,
}: {
  image?: ResolvedImage;
  aspect: string;
  sizes: string;
  priority?: boolean;
  hint?: string;
  dark?: boolean;
  className?: string;
  zoom?: boolean;
}) {
  if (!image) return <ImagePlaceholder className={cn(aspect, className)} hint={hint} dark={dark} />;
  return (
    <div
      className={cn(
        "relative overflow-hidden border",
        dark ? "border-paper/20" : "border-night/20",
        zoom && "img-zoom",
        aspect,
        className
      )}
    >
      <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
    </div>
  );
}

/** Natural-ratio image with the file's real width/height (no layout shift, no cropping). */
export function NaturalImage({
  image,
  sizes,
  dark,
  className,
}: {
  image: ResolvedImage;
  sizes: string;
  dark?: boolean;
  className?: string;
}) {
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
