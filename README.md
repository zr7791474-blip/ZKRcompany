# ZKR — Zakariaa Adli, Independent Developer

Next.js 16 · React 19 · Tailwind 3. Static site, no animation library, self-hosted fonts via `next/font`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npx tsc --noEmit && npm run build
```

## Where things live

| What | Where |
|---|---|
| Name, contact, services, pricing, FAQ | `lib/content.ts` (founder name = `site.founder`) |
| The two featured projects + case-study text | `lib/projects.ts` |
| Screenshots | `public/projects/zkr-coffee/` and `public/projects/zkr-festival/` (see README in each) |
| Founder photo (optional) | `public/founder/portrait.webp` |
| Hero background | `public/hero/hero.webp` (the palette in `tailwind.config.ts` is taken from this photo) |
| Official portfolio link | `site.portfolioUrl` in `lib/content.ts` → https://zkrportfolio.vercel.app/ |
| Colours / fonts | `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx` |

## Screenshots

```
public/projects/zkr-coffee/    cover.webp  desktop-01.webp  desktop-02.webp  mobile-01.webp  mobile-02.webp
public/projects/zkr-festival/  cover.webp  desktop-01.webp  desktop-02.webp  mobile-01.webp  mobile-02.webp
```

Missing files never break a page. Recommended sizes are in each folder's README.
`npm run images:optimize` optionally converts PNG/JPG to WebP (originals untouched).

## Contact form

`/api/contact` sends through [Resend](https://resend.com) and only reports success if Resend accepts the email.
Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`. Without it the form says the message was **not** sent
and offers direct email instead.

## Content rule

Nothing is invented: no metrics, clients, testimonials or results. Unknown facts are `TODO(zakariaa)` in
`lib/content.ts` / `lib/projects.ts` and stay hidden on the live site until filled.

## Deploying to Vercel

Framework preset: Next.js. Build command: `npm run build`. Node 20.9+ (set in `engines`).

Environment variables (Project → Settings → Environment Variables):

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Only if you want the form to deliver email | Resend API key. Without it the form says delivery is unavailable and shows the contact email instead. |
| `CONTACT_TO` | No | Recipient. Defaults to the email in `lib/content.ts`. |
| `CONTACT_FROM` | No | Sender. Defaults to `ZKR Contact <onboarding@resend.dev>`. Use a verified-domain address in production. |

**Updating an existing repo:** replace the repository contents with this project. Do not copy it over the old files:
leftover `app/blog`, `app/process`, `app/technologies`, `components/sections/BlogGrid.tsx`, `components/ui/GrowthLine.tsx`,
`components/ui/MagneticButton.tsx` etc. import an animation package that is no longer a dependency, and will break the build.
Also delete any local `.next/` folder.
