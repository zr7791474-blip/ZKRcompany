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
