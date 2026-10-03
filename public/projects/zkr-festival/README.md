# ZKR Festival — screenshots

**Put the screenshots in this folder:**

```
public/projects/zkr-festival/
```

Currently in this folder: `cover.webp` + the desktop screenshots. **Mobile screenshots (`mobile-01/02.webp`) are not added yet** — they are optional and simply hidden until you add them.

The site finds them by filename — no code changes needed. Missing files are skipped
(no broken images; in `npm run dev` a labelled "Screenshot coming soon" frame names the missing file).

| File | What it is | Recommended size | Where it appears |
|---|---|---|---|
| `cover.webp` | Main screenshot | **2400 × 1350 px** (16:9) | Case-study hero, homepage + /work card |
| `desktop-01.webp` | Desktop screenshot 1 | **1800 px wide** (e.g. 1800 × 1125), natural ratio | Case-study screens |
| `desktop-02.webp` | Desktop screenshot 2 | **1800 px wide**, natural ratio | Case-study screens |
| `desktop-03.webp` | Extra desktop screenshot | **1900 px wide**, natural ratio | "Screens" section |
| `mobile-01.webp` | Mobile screenshot 1 | **780 × 1688 px** (phone portrait) | Case-study screens |
| `mobile-02.webp` | Mobile screenshot 2 | **780 × 1688 px** (phone portrait) | Case-study screens |

All files are optional. Keep each under ~250 KB. Real screenshots only: no mockups, no stock images.

## Formats

WebP is preferred (AVIF also works). For convenience, a `.jpg`, `.jpeg` or `.png` with the **same name**
(e.g. `cover.png`) is also accepted while you're still exporting. To convert PNG/JPG to WebP safely
(originals are never deleted or overwritten):

```bash
npm run images:optimize -- zkr-festival
```

Keep full-size originals **outside** `public/` — everything in `public/` is downloadable by visitors.

## After adding images

Pages are statically generated: restart `npm run dev` (or rebuild) so they're picked up.
Extra desktop screenshots must also be listed in `images` in `lib/projects.ts` (already done for the ones above). Update `alts` there to describe each image for screen readers.

## Also fill in (lib/projects.ts → "zkr-festival")

Everything marked `TODO(zakariaa)`: specific description, stack, year, live URL, GitHub URL, and the
write-up fields (overview, challenge, approach, decisions, built, technical, outcome). Sections appear
automatically once filled. Only real facts — if there is no measured result, describe what shipped.
