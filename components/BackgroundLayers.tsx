import { getImageProps } from "next/image";

/**
 * Site-wide fixed background. One photograph, art-directed per viewport (landscape ≥768px, portrait crop below),
 * served through next/image (responsive srcset, WebP). Layers, back to front:
 *   photo → veil (theme colour; strength follows scroll, see ScrollVeil) → scrim (keeps the reading side calm).
 * In light mode the photo is inverted in CSS (globals.css) instead of shipping a second image.
 */
export function BackgroundLayers() {
  const common = { alt: "", fill: true, sizes: "100vw", priority: true } as const; // `fill` only so next/image builds the responsive srcset
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: "/hero/hero.webp" });
  const {
    props: { srcSet: mobile, src, sizes, loading, decoding, fetchPriority },
  } = getImageProps({ ...common, src: "/hero/hero-mobile.webp" });

  return (
    <div aria-hidden className="site-bg">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        {/* art direction via <picture>; srcset is built by next/image (getImageProps) */}
        {/* Only the attributes that matter. next/image's inline `fill` style is deliberately NOT spread: .site-bg img in
            globals.css already positions/sizes it, and an inline style is what browser extensions (e.g. Dark Reader)
            rewrite before hydration. */}
        <img src={src} srcSet={mobile} sizes={sizes} loading={loading} decoding={decoding} fetchPriority={fetchPriority} alt="" />
      </picture>
      <div className="site-bg__veil" />
      <div className="site-bg__scrim" />
    </div>
  );
}
