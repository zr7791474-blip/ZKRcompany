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
    // Text below was written from what is visible in the supplied screenshots (navigation, sections, "Order now").
    // TODO(zakariaa): check it, and add the real story (challenge, approach, decisions, technical, outcome).
    description:
      "A website for ZKR Coffee, a coffee brand in Casablanca: menu, brand story and an order button, designed and built by me.",
    role: ["Design", "Development"], // TODO(zakariaa): add "Direction" etc. if true
    stack: [], // TODO(zakariaa): only technologies actually used
    heroImage: "/projects/zkr-coffee/cover.webp",
    images: [
      "/projects/zkr-coffee/desktop-01.webp",
      "/projects/zkr-coffee/desktop-02.webp",
      "/projects/zkr-coffee/desktop-03.webp",
      "/projects/zkr-coffee/desktop-04.webp",
    ],
    alts: {
      cover: "ZKR Coffee homepage hero: espresso pouring from a machine, the brand name and an Order now button.",
      "desktop-01": "ZKR Coffee “Curated Coffee Selection” section with coffee cards, descriptions and prices.",
      "desktop-02": "ZKR Coffee “The ZKRCoffee Difference” section: fresh beans, barista art and premium machines.",
      "desktop-03": "ZKR Coffee about section, “Where Craft Meets Devotion”, with the brand story and a bag of beans.",
      "desktop-04": "ZKR Coffee “From Farm to Cup” timeline of the steps from farm to serving.",
    },
    overview: "ZKR Coffee is a coffee brand based in Casablanca. This is its website, which I designed and built.",
    built:
      "A dark, warm-toned site with a full-screen hero, a curated coffee selection with prices in MAD, a section on what makes the coffee different, the brand story, and a farm-to-cup timeline. The navigation covers Home, Menu, Coffee, About, Gallery, Testimonials, FAQ and Contact, with an Order now button.",
    // year, liveUrl, githubUrl — TODO(zakariaa): only if real
  },
  {
    slug: "zkr-festival",
    title: "ZKR Festival",
    category: "Festival · Event Platform / Web",
    status: "Real project",
    variant: "energetic",
    // Text below was written from what is visible in the supplied screenshots. TODO(zakariaa): check it and add the real story.
    description:
      "A website for ZKR Festival: lineup, experience, schedule, tickets and gallery in one place, with a Buy Tickets button, designed and built by me.",
    role: ["Design", "Development"],
    stack: [], // TODO(zakariaa)
    heroImage: "/projects/zkr-festival/cover.webp",
    images: [
      "/projects/zkr-festival/desktop-01.webp",
      "/projects/zkr-festival/desktop-02.webp",
      "/projects/zkr-festival/desktop-03.webp",
    ],
    alts: {
      cover: "ZKR Festival homepage hero: a concert crowd under purple stage lights, the festival name and a Get Tickets button.",
      "desktop-01": "ZKR Festival “Meet the Lineup” section: a grid of artist cards with genre tags and stages.",
      "desktop-02": "ZKR Festival “The Experience” section: a large stage photo with a thumbnail carousel.",
      "desktop-03": "ZKR Festival “The Gallery” section: a masonry grid of festival photos.",
    },
    overview: "ZKR Festival is a festival and event platform website that I designed and built.",
    built:
      "A dark, high-contrast event site with a full-screen concert hero, an artist lineup grid, an experience carousel and a photo gallery. The navigation covers Home, Lineup, Experience, Schedule, Tickets, Gallery, FAQ and Contact, with a Buy Tickets button.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
