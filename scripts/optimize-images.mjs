// Converts PNG/JPG screenshots to WebP in place (originals are left untouched).
//   npm run images:optimize                 -> all project folders + founder portrait
//   npm run images:optimize -- zkr-coffee   -> one project
//   add --force to overwrite existing .webp files
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.join(process.cwd(), "public");
const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));

const dirs = [];
const projects = path.join(root, "projects");
if (fs.existsSync(projects)) {
  for (const d of fs.readdirSync(projects, { withFileTypes: true })) {
    if (d.isDirectory() && (only.length === 0 || only.includes(d.name))) dirs.push(path.join(projects, d.name));
  }
}
if (only.length === 0 && fs.existsSync(path.join(root, "founder"))) dirs.push(path.join(root, "founder"));

let converted = 0;
for (const dir of dirs) {
  for (const file of fs.readdirSync(dir)) {
    const { name, ext } = path.parse(file);
    if (![".png", ".jpg", ".jpeg"].includes(ext.toLowerCase())) continue;
    const out = path.join(dir, `${name}.webp`);
    if (fs.existsSync(out) && !force) {
      console.log(`skip   ${path.relative(process.cwd(), out)} (exists, use --force)`);
      continue;
    }
    const maxWidth = name.startsWith("mobile") ? 1200 : name === "portrait" ? 1000 : name === "cover" ? 2400 : 2000;
    await sharp(path.join(dir, file)).rotate().resize({ width: maxWidth, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
    const kb = Math.round(fs.statSync(out).size / 1024);
    console.log(`webp   ${path.relative(process.cwd(), out)}  ${kb} KB`);
    converted++;
  }
}
console.log(converted ? `Done: ${converted} file(s) converted.` : "Nothing to convert.");
