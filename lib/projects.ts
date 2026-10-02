/**
 * Featured projects — the single source of truth.
 *
 * Only facts supplied by Zakariaa Adli are filled in (category, "real project",
 * "designed and built"). Everything else is intentionally empty and marked
 * TODO(zakariaa). Case-study text sections render automatically as soon as you
 * fill the matching field; empty ones are simply not shown.
 *
 * SCREENSHOTS need no code: put the standard filenames in
 * public/projects/<slug>/ (see the README there).
 */

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  /** "warm" = light editorial case study, "energetic" = dark, bolder case study. */
  variant: "warm" | "energetic";
  description: string;
  role?: string[];
  stack: string[];
  year?: string;
  heroImage: string;
  /** Order matters: desktop-01, desktop-02, mobile-01, mobile-02. */
  images: string[];
  /** Optional alt text overrides keyed by file name without extension (e.g. "desktop-01"). */
  alts?: Record<string, string>;
  overview?: string;
  challenge?: string;
  approach?: string;
  decisions?: string;
  built?: string;
  technical?: string;
  /** Only real, known outcomes. If nothing is measured, describe what shipped. */
  outcome?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "zkr-coffee",
    title: "ZKR Coffee",
    category: "Coffee · Brand + Web",
    status: "Real project",
    variant: "warm",
    description: "A coffee brand and its website, designed and built by me.", // TODO(zakariaa): make this specific (one real sentence)
    role: ["Design", "Development"], // from "I've designed and built" — TODO(zakariaa): add "Direction" etc. if true
    stack: [], // TODO(zakariaa): only technologies actually used
    heroImage: "/projects/zkr-coffee/cover.webp",
    images: [
      "/projects/zkr-coffee/desktop-01.webp",
      "/projects/zkr-coffee/desktop-02.webp",
      "/projects/zkr-coffee/mobile-01.webp",
      "/projects/zkr-coffee/mobile-02.webp",
    ],
    // year: "", liveUrl: "", githubUrl: "",                       // TODO(zakariaa): only if real
    // overview, challenge, approach, decisions, built, technical, outcome — TODO(zakariaa): real text only
  },
  {
    slug: "zkr-festival",
    title: "ZKR Festival",
    category: "Festival · Event Platform / Web",
    status: "Real project",
    variant: "energetic",
    description: "A festival event platform and website, designed and built by me.", // TODO(zakariaa): make this specific
    role: ["Design", "Development"],
    stack: [], // TODO(zakariaa)
    heroImage: "/projects/zkr-festival/cover.webp",
    images: [
      "/projects/zkr-festival/desktop-01.webp",
      "/projects/zkr-festival/desktop-02.webp",
      "/projects/zkr-festival/mobile-01.webp",
      "/projects/zkr-festival/mobile-02.webp",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
