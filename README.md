# Pho 99 Grill

Marketing landing page for **Pho 99 Grill**, a family-run Vietnamese phở + grill restaurant.

> Slow-simmered phở and flame-grilled Vietnamese classics.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript + Turbopack
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first; tokens in `app/globals.css`)
- ESLint (`eslint-config-next`)
- `next/font` for Google Fonts (Cormorant Garamond + Inter)
- `next/image` with Unsplash placeholders (swap for real assets later)

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Then open [http://localhost:3000](http://localhost:3000).

### Scripts

| Script          | What it does                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the Turbopack dev server     |
| `npm run build` | Production build                   |
| `npm run start` | Run the production build           |
| `npm run lint`  | ESLint                             |

## Project layout

```
app/
  layout.tsx                   fonts + global nav
  page.tsx                     section composition
  globals.css                  design tokens (Tailwind v4 @theme)
  _components/
    NavRoot.tsx                NavProvider + Header + SideNav
    Header.tsx                 fixed, hide-on-scroll
    SideNav.tsx                right-side drawer w/ accordion
    ParallaxImage.tsx          JS-driven background parallax
    SectionBreak.tsx           breaker strip between sections
    Footer.tsx
    sections/                  Hero, Story, Signature, Fresh, Events,
                               JoinTeam, Newsletter
  _lib/
    nav-context.tsx            drawer state
    useScrollDirection.ts      scroll-aware header
.cursor/rules/                 project conventions for Cursor agents
AGENTS.md                      single source of truth for AI agents
```

Underscore-prefixed folders (`_components`, `_lib`) are excluded from the App Router route tree.

## Design

- Warm-beige / brown / red palette inspired by upscale Vietnamese & Japanese restaurant sites; tokens in [`app/globals.css`](app/globals.css).
- Fixed scroll-aware header (hide on scroll-down, reveal on scroll-up) with a right-side accordion drawer.
- Full-bleed sections separated by a hairline section breaker.
- True background parallax via a single rAF-throttled scroll handler in [`ParallaxImage`](app/_components/ParallaxImage.tsx) — works in every modern browser.
- Respects `prefers-reduced-motion`.

See [`AGENTS.md`](AGENTS.md) for the full design system, component conventions, and accessibility notes.

## Customizing

All copy and image URLs live inside the section components under `app/_components/sections/`. Each section is self-contained — edit one file to change one section. Hours, address, phone live in [`Footer.tsx`](app/_components/Footer.tsx).

To swap the placeholder Unsplash images for real photos, drop them in `public/` and update the `image` prop in each section. The `images.remotePatterns` whitelist for Unsplash lives in [`next.config.ts`](next.config.ts).

## License

Code in this repository is the property of Pho 99 Grill. Reference HTML in `Inspo/` (untracked) belongs to its respective owners and is for design study only — never bundled or served.
