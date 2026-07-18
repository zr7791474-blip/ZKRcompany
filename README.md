# ZKR — Digital Solutions Studio (Next.js redesign)

A full multi-page redesign of the ZKR Company site: Next.js 16 (App Router) +
TypeScript + Tailwind CSS v4 + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

**Windows users:** if `npm run dev`/`build` fails with a `lightningcss` /
`.node` binary error, delete `node_modules` and `package-lock.json` and run
`npm install` again — see the "Windows install issues" section below.

## Site map

| Route | Purpose |
|---|---|
| `/` | Home — hero, condensed teasers for every section below, pricing, FAQ |
| `/services` | All 9 services in depth: benefits + process for each |
| `/work` | Portfolio with client-side category filtering |
| `/process` | Full 7-stage project process |
| `/technologies` | Stack, grouped by category |
| `/about` | Story, mission/vision, values, timeline, team |
| `/blog` | Insights grid (6 posts) |
| `/contact` | Contact form, company info, map placeholder |
| `/careers` | Culture, benefits, open roles |
| `/privacy`, `/terms` | Legal pages |

Navbar and footer are rendered once in `app/layout.tsx` and shared across
every route. Every nav link, footer link, and CTA button points at a real
page — nothing is a dead `#` anchor.

## Brand assets you need to add

Two files are referenced by the code but aren't included (I don't have
access to your actual logo or hero photo — see the `.md` placement notes
dropped into `public/` for exact instructions):

| File | Used in |
|---|---|
| `public/zkr.jpg` | Navbar, mobile menu, footer, loading screen, favicon, Open Graph / Twitter card |
| `public/hero/backgroud.jpg` (spelling matches the brief) | Homepage hero background |

Until you add them, the site falls back gracefully — a "Z" monogram for the
logo, a navy/blue gradient for the hero — instead of showing broken image
icons. Drop the two files in and everything picks them up automatically, no
code changes needed.

## Color system

The full 10-color palette from the brief is wired into `tailwind.config.ts`
under the same token names used throughout the components (so nothing had
to change file-by-file), mapped by role:

| Token | Hex | Role |
|---|---|---|
| `ember-500` | `#E63946` | Primary accent — CTAs, active states |
| `ember-400` | `#EC9A9A` | Soft red — subtle accents |
| `amber-glow` | `#A8DADC` | Cyan accent — highlights, glow |
| `amber-soft` | `#CDEAE5` | Soft aqua — background tints |
| `moss-400` / `moss-500` | `#77ABBD` / `#457B9D` | Blue — secondary sections, buttons |
| `moss-600` / `moss-700` | `#31587A` / `#1D3557` | Deep blue / navy — dark sections, contrast |
| `ink-950` | `#1D3557` | Navy — primary dark text & dark-mode background |
| `mist-50` / `mist-100` | `#F1FAEE` / `#E4F1EC` | Cream — light backgrounds |

## Icons

Every icon across the site is from `lucide-react` — no emoji, no Unicode
symbols. Check any component's imports for the full set in use.

## QA pass (latest)

A full audit was run: `npm run build`, `npm run lint`, and `tsc --noEmit`
all pass with zero errors. Every internal link/anchor was cross-referenced
against real routes and real `id` attributes (no dead links). All 11 routes
were smoke-tested for 200s, a genuinely invalid path was confirmed to 404,
and the contact API was tested for both success and validation-rejection.

Two real (not extension-noise) accessibility issues were found and fixed:
- `ink-500` (secondary/body text color) was `#457B9D`, which only hit
  4.30:1 contrast on the cream background — just under the 4.5:1 WCAG AA
  threshold for normal-size text. Darkened to `#3D6F8F` (5.08:1) with
  negligible visual difference.
- The hero headline's gradient text passed through pure `ember-500`
  (`#E63946`) as a midpoint, which only hit 2.97:1 against the navy
  overlay — a real failure. Simplified to a two-stop `ember-400 →
  amber-glow` gradient, which stays above 6.6:1 throughout.

**Note on the Hero:** it uses your `/hero/backgroud.jpg` photo with a navy
overlay, grid texture, and glow accents — there is no "star-trail" particle
effect in the current implementation. If you want one added, that's a new
visual feature rather than a bug fix, so flag it explicitly and I'll build
it without touching anything else.

## Content

Copy, stats, and contact details were pulled from your original
`index.html` / `about.html`, so those are real. Team member names, blog
posts, and case studies are illustrative placeholders written to feel real
rather than "Lorem ipsum" — swap them for your actual team/content in
`lib/content.ts`.

## Fonts

Fonts (Bricolage Grotesque, Inter, IBM Plex Mono) load via a `<link>` tag in
`app/layout.tsx` rather than `next/font/google` — this was a deliberate
choice because the sandbox this was built in can't reach
`fonts.googleapis.com` at build time. It works identically in the browser.
Swap to `next/font/google` for build-time optimization once you're building
somewhere with normal internet access.

## Contact form — important

`app/api/contact/route.ts` validates submissions and returns success, but it
only **logs** the message server-side — it doesn't send email or write to a
database yet. Wire it up to:

- A transactional email provider (Resend, Postmark, SendGrid), or
- A database (Postgres via Prisma, etc.), or
- Your existing PHP backend, via a server-to-server `fetch()` to `contact.php`

The admin login/dashboard from your original PHP project isn't reproduced
here — that's a separate app concern outside a marketing site.

## Windows install issue — fixed

This project originally used Tailwind CSS v4, which depends on a native
Rust binary (`lightningcss`) on every platform. That's what was causing
`Cannot find module '../lightningcss.win32-x64-msvc.node'` — not a bug in
this code, but a fragile native-binary install on Windows.

**Fix applied:** the project now runs on Tailwind CSS v3, which is pure
JavaScript/PostCSS with no native binaries in its CSS pipeline at all. That
whole class of error is no longer possible. Just run:

```bash
npm install
npm run dev
```

If you still have the old `node_modules` from before, delete it first:

```powershell
rmdir /s /q node_modules
npm install
```

(The only native binaries left in this project now are Next.js's own SWC
compiler — used successfully by essentially every Next.js Windows
install — and `sharp`, which is unused here since the site doesn't call
`next/image`.)

## Deploying

Standard Next.js app — deploys as-is to Vercel, or anywhere that runs
`next build && next start`.

## Structure

```
app/
  page.tsx                homepage
  {about,services,work,process,technologies,blog,contact,careers,
   privacy,terms}/page.tsx   one route each
  api/contact/route.ts    contact form endpoint
  layout.tsx               shared chrome: Loader, Navbar, Footer, fonts, SEO
  robots.ts, sitemap.ts
components/
  sections/                 homepage section components (also reused by sub-pages)
  ui/                        Container, Reveal, SectionHeading, PageHero, MagneticButton, etc.
  Navbar.tsx, Footer.tsx, Loader.tsx, theme-provider.tsx
lib/
  content.ts                 all copy/data — edit this to change site content
  utils.ts
```
