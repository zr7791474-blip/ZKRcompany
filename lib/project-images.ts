import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";
import type { Project } from "./projects";

/**
 * Build-time screenshot resolver (server only).
 *
 * For every path listed in the project (cover + 4 screenshots) we check that the
 * file really exists in /public and read its true pixel size, so next/image gets
 * correct width/height. WebP is expected, but a .avif/.jpg/.jpeg/.png with the
 * same base name is accepted too (handy while you're still exporting).
 * Missing/empty/unreadable files resolve to `undefined`, so the UI never renders
 * a broken image.
 *
 * Pages are static: after adding screenshots restart `npm run dev` or rebuild.
 */

const ALT_EXTENSIONS = ["webp", "avif", "jpg", "jpeg", "png"];
const PUBLIC_DIR = path.join(process.cwd(), "public");

export type ResolvedImage = { src: string; width: number; height: number; alt: string };

function resolveOne(src: string, alt: string): ResolvedImage | undefined {
  const base = src.replace(/\.[a-z0-9]+$/i, "");
  for (const ext of [src.split(".").pop() ?? "webp", ...ALT_EXTENSIONS]) {
    const candidate = `${base}.${ext}`;
    try {
      const file = path.join(PUBLIC_DIR, candidate);
      if (!fs.existsSync(file) || fs.statSync(file).size === 0) continue;
      const { width, height } = imageSize(fs.readFileSync(file));
      if (width && height) return { src: candidate, width, height, alt };
    } catch {
      /* unreadable → try next / treat as missing */
    }
  }
  return undefined;
}

export type ProjectImages = {
  cover?: ResolvedImage;
  desktop: ResolvedImage[];
  mobile: ResolvedImage[];
};

const nameOf = (src: string) => path.basename(src).replace(/\.[a-z0-9]+$/i, "");

export function resolveProjectImages(project: Project): ProjectImages {
  const alt = (src: string, fallback: string) => project.alts?.[nameOf(src)] ?? fallback;
  const cover = resolveOne(project.heroImage, alt(project.heroImage, `${project.title} — cover screenshot`));

  const desktop: ResolvedImage[] = [];
  const mobile: ResolvedImage[] = [];
  project.images.forEach((src) => {
    const n = nameOf(src);
    const label = n.startsWith("mobile") ? "mobile screenshot" : "desktop screenshot";
    const num = n.match(/\d+/)?.[0];
    const img = resolveOne(src, alt(src, `${project.title} — ${label}${num ? ` ${Number(num)}` : ""}`));
    if (img) (n.startsWith("mobile") ? mobile : desktop).push(img);
  });
  return { cover, desktop, mobile };
}

/** Optional founder portrait: public/founder/portrait.(webp|avif|jpg|jpeg|png). */
export function resolveFounderPortrait(alt: string): ResolvedImage | undefined {
  return resolveOne("/founder/portrait.webp", alt);
}
