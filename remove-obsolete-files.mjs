// Run ONCE from the root of your repository (the folder with package.json):
//   node remove-obsolete-files.mjs
// Deletes files/folders from the old template that no longer exist in the new project and that import
// deleted dependencies (framer-motion, next-themes) or deleted exports. Only the exact paths below are touched.
import fs from "node:fs";
import path from "node:path";

if (!fs.existsSync("package.json") || !fs.existsSync("app")) {
  console.error("Run this from the repository root (the folder containing package.json and app/).");
  process.exit(1);
}

const obsolete = [
  // routes
  "app/blog", "app/careers", "app/process", "app/technologies", "app/api/newsletter", "app/work/WorkClient.tsx",
  // components
  "components/Loader.tsx", "components/theme-provider.tsx",
  "components/sections/BlogGrid.tsx", "components/sections/BlogTeaser.tsx", "components/sections/Process.tsx",
  "components/sections/Technologies.tsx", "components/sections/WhyUs.tsx",
  "components/ui/AnimatedCounter.tsx", "components/ui/GrowthLine.tsx", "components/ui/MagneticButton.tsx",
  "components/ui/SectionHeading.tsx",
  // legacy static site / PHP / SQL
  "index.html", "about.html", "contact.html", "services.html", "login.html", "success.html",
  "assets", "backend", "sql",
  // old public assets and placeholders
  "public/hero", "public/screens", "public/images", "public/PLACE_LOGO_HERE.md",
  // stale build output
  ".next", "tsconfig.tsbuildinfo",
];

let removed = 0;
for (const p of obsolete) {
  if (fs.existsSync(p)) {
    fs.rmSync(p, { recursive: true, force: true });
    console.log("removed  ", p);
    removed++;
  }
}
console.log(removed ? `\nDone: ${removed} obsolete item(s) removed.` : "Nothing to remove. The repository is already clean.");
console.log("Next: npm install && npm run lint && npx tsc --noEmit && npm run build");
