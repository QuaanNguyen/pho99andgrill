<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Pho 99 Grill — Agent Guide

Marketing landing page for **Pho 99 Grill**, a family-run Vietnamese phở + grill restaurant. Single-page Next.js site, no backend.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript + Turbopack
- Tailwind CSS v4 (CSS-first; tokens in `app/globals.css` via `@theme inline`)
- ESLint (`eslint-config-next`); `next/font`; `next/image`
- Path alias: `@/*` → project root

## Brand & copy

- Wordmark: **`phở 99`** lowercase, accent on "phở" (the `99` is `text-accent`).
- Voice: warm, family-run, ingredient-driven; "slow-simmered phở and flame-grilled Vietnamese classics."
- All copy is **placeholder** (hours, address, phone, dishes). When the owner provides real content, swap inside the section component, not in `page.tsx`.

## Design references — DO NOT SHIP

`Inspo/` holds saved HTML of two reference sites for visual inspiration only. It's in `.gitignore`. **Never** import, fetch, or copy verbatim from it.

- **Cafe Avalaun** → reference for full-bleed scrolling section structure with parallax.
- **Uchi** → reference for the header/nav (fixed, scroll-aware, lowercase, slide-out drawer) and the warm beige palette.

Only non-copyrightable design patterns (palette hex values, layout structure, scroll behavior) are reused. Code and copy are original.

## Layout

```
app/
  layout.tsx                  fonts + <NavRoot/>
  page.tsx                    section composition
  globals.css                 tokens + @theme inline
  _components/
    NavRoot.tsx               (client) NavProvider + Header + SideNav
    Header.tsx                (client) fixed, hide-on-scroll
    SideNav.tsx               (client) right drawer w/ accordion
    ParallaxImage.tsx         (client) JS-driven background parallax
    SectionBreak.tsx          breaker strip between sections
    Footer.tsx
    sections/
      Section.tsx             shared full-bleed primitive
      Hero, Story, Signature, Fresh, Events, JoinTeam, Newsletter
  _lib/
    nav-context.tsx           (client) drawer state
    useScrollDirection.ts     (client) scroll show/hide
```

Underscore-prefixed folders are excluded from the route tree.

## Design tokens (`app/globals.css`)

Exposed to Tailwind via `@theme inline` — use the utility, not raw hex.

| Token       | Hex       | Tailwind        | Use                                  |
| ----------- | --------- | --------------- | ------------------------------------ |
| `--bg`      | `#F2E8DE` | `bg-bg`         | page background (warm beige)         |
| `--cream`   | `#FAF4EB` | `bg-cream`      | lifted surface (Newsletter)          |
| `--text`    | `#3C2E22` | `text-text`     | body copy                            |
| `--link`    | `#7D623F` | `text-link`     | links, secondary text                |
| `--accent`  | `#AD473B` | `text-accent`   | red accent (`99`, CTAs)              |
| `--border`  | `#C39367` | `border-border` | hairlines, button outlines           |
| `--dark`    | `#2A1F17` | `bg-dark`       | overlays, footer                     |

Custom easing for nav: `cubic-bezier(0.355, 0.82, 0.335, 1)` → `ease-uchi`.

## Typography (`app/layout.tsx`, `next/font`)

- Display: **Cormorant Garamond** → `var(--font-display)` (headlines)
- Body: **Inter** → `var(--font-body)` (everything else)
- Nav links are always `lowercase tracking-wide`.

## Header behavior (Uchi-style)

Implemented in [`Header.tsx`](app/_components/Header.tsx) + [`useScrollDirection.ts`](app/_lib/useScrollDirection.ts).

- Fixed `top-0 left-0 w-full z-50`. **Single** height: 70px mobile / 96px desktop. **No** "scrolled/compact" state — only one animated property: `transform`.
- Always opaque on `bg-bg` with `border-b border-border/80`.
- **Hide on scroll-down**, **reveal on scroll-up**. Threshold: don't hide before ~120px scroll, ignore deltas < 6px (anti-flicker). When the side drawer is open, the bar stays visible.
- Layout: logo left, lowercase inline nav (hidden under `lg`), bordered "reservations" CTA right, hamburger under `lg`.

## Side drawer

[`SideNav.tsx`](app/_components/SideNav.tsx) — right-side panel with accordion sections (`reservations`, `order online`, `locations + menus`). State is shared via [`nav-context.tsx`](app/_lib/nav-context.tsx); opens via header buttons; closes on overlay click or `Escape`. Locks body scroll while open.

## Sections (full-bleed scroll + parallax)

Each full-bleed section uses the [`Section`](app/_components/sections/Section.tsx) primitive. Sections scroll **normally** (no `position: sticky`), separated by a [`SectionBreak`](app/_components/SectionBreak.tsx) on the warm-beige strip.

The image is rendered by [`ParallaxImage`](app/_components/ParallaxImage.tsx):

- Single rAF-throttled scroll handler measures the **section's** `getBoundingClientRect()` (not the wrapper's — would feedback on its own transform) and translates the wrapper opposite to scroll at `intensity` (default `0.35`).
- Wrapper is `absolute inset-x-0 -top-[30%] h-[160%]` so the ±~30vh translate never exposes seams. Don't shrink the wrapper without lowering `intensity`.
- Skips work when section is far outside the viewport.
- Respects `prefers-reduced-motion: reduce`.
- Pure JS — works in every browser. Don't reach for `animation-timeline: view()` (Safari/Firefox don't support it yet).

Section markup:

```tsx
<section className="relative isolate flex min-h-screen w-full items-center overflow-hidden text-bg">
  <ParallaxImage src={...} alt="" />
  <div className="absolute inset-0 -z-10 bg-dark/55" />
  <div className="mx-auto w-full max-w-3xl px-6 text-center">
    <h2 className="font-display text-5xl md:text-7xl">...</h2>
  </div>
</section>
```

**Don't** add `overflow: hidden` on `html`/`body`/`<main>` — kills the parallax math when the body is the scroller.

## Components conventions

- Default to **server components**; add `"use client"` only when you need browser APIs (refs, `useState`, event handlers).
- Currently client-only: `NavRoot`, `Header`, `SideNav`, `ParallaxImage`, `Newsletter`.
- One default export per file; PascalCase filename matches export.
- `next/image` for every image (never `<img>`); `next/link` for internal nav.
- Use design tokens (`bg-bg`, `text-accent`, ...), not raw hex.
- No narrating comments (`// render hero`). Comments only for non-obvious intent.
- Section components are self-contained — they own their copy and image URL; `page.tsx` just composes.

## Accessibility

- Header buttons that open the drawer use `aria-controls="side-nav"` and `aria-expanded`.
- Drawer is `role="dialog" aria-modal="true"`, traps Escape, locks body scroll.
- Hamburger has `aria-label="open menu"` and a `<span class="sr-only">`.
- Decorative images: `alt=""`. Content images: meaningful `alt`.

## Buttons

- **Bordered (CTA):** `border border-border text-text hover:bg-dark hover:text-bg transition-colors px-6 py-2 lowercase tracking-wide`
- **Underline link (sections):** the [`SectionLink`](app/_components/sections/Section.tsx) component — animated bottom border, hover swaps to accent color.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000 (Turbopack)
npm run lint
npm run build
```

`next.config.ts` whitelists `images.unsplash.com` for placeholder hero images and pins `turbopack.root` to this directory (silences a warning when there's a parent lockfile).
