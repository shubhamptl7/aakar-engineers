# Aakar Engineers: website demo (Phase 1)

Next.js 16 (App Router) · TypeScript · Tailwind 4 · fully static export (`out/`).

## Site structure (54 pages)
The full planned site is defined in `src/content/sitemap.ts`. That one file drives the navbar menus, breadcrumbs, the footer, the HTML sitemap (`/site-map/`) and the "being prepared" pages.

| Section | Pages |
|---|---|
| Home | 1 |
| Products: hub, 5 categories, 25 product pages | 31 |
| Solutions: hub + 6 | 7 |
| Industries: hub + 4 | 5 |
| Company: About, Group Companies, Leadership, Mission/Vision/Values, Clients, Careers | 6 |
| Contact, Privacy Policy, Image Credits, Sitemap | 4 |

**Live with full content (7):** Home, Products, FRP Cooling Towers, Round Bottle Cooling Tower, Contact, Image Credits, Sitemap.
**All other pages** render a professional "page in preparation" layout through `src/app/[...path]/page.tsx`. Those pages are `noindex` and excluded from `sitemap.xml`.
To publish a page: create its route under `src/app/` (a real route overrides the catch-all) and set `live: true` in `sitemap.ts`.

## Design basis
The v2 design follows patterns observed on 15 competitor sites (Paharpur, Thermax, Ion Exchange, Towertech, Delta, SPX, BAC, EVAPCO, and others). See `docs/research/DESIGN-RESEARCH.md` and the screenshots in `docs/research/screenshots/`.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Deploy to Netlify
1. Push this folder to a Git repo and "Import from Git" in Netlify (build command and publish dir are in `netlify.toml`), **or** run `npm run build` and drag the `out/` folder into Netlify Drop.
2. **Enquiry forms:** two Netlify Forms, `enquiry` (full form) and `callback` (short hero/sidebar form). After the first deploy, open *Site → Forms → enquiry* and add an email notification (Forms → Settings & usage → Form notifications) so enquiries reach Aakar. It only works on Netlify, not locally. Locally it shows the "could not send" fallback.
3. The demo is `noindex` and `robots.txt` disallows all, so it cannot compete with the live site. At launch set `NEXT_PUBLIC_INDEXABLE=true` and `SITE_URL=https://<final-domain>`.

## Env flags
| Variable | Effect |
|---|---|
| `NEXT_PUBLIC_INDEXABLE=true` | allow search engines (launch only) |
| `NEXT_PUBLIC_DEMO_NOTES=true` | show dashed "Confirm before launch" tags beside unverified content |
| `SITE_URL` | canonical / sitemap base URL |

## Content rules
All copy comes from aakarengineers.com (see `src/content/site.ts`). No invented statistics, certifications, testimonials or project claims. Items needing Aakar's confirmation are listed in the research blueprint, Part 15, and shown with `NEXT_PUBLIC_DEMO_NOTES=true`.
