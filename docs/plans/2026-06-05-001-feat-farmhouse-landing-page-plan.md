---
title: "feat: Farmhouse hacker house summer landing page"
type: feat
status: active
created: 2026-06-05
depth: standard
---

# feat: Farmhouse Hacker House Summer Landing Page

## Summary

A single-page marketing site for **Farmhouse**, the Stanford hacker house running this
summer. The page introduces the house, profiles the seven founding members (pulled from
`Farmhouse Profiles.pdf`), and reserves an Events section that ships in a "coming soon"
state with a mailto suggestion button. The visual identity fuses two references: the
**red barn FARMHOUSE brand** from the profiles deck and the **green terminal / matrix
hacker aesthetic** from the supplied reference screenshot — barn red as the primary brand
color, terminal green as the futuristic accent, on a near-black background.

**Stack:** Next.js (App Router) + Tailwind CSS + TypeScript. Greenfield repo — this plan
includes project scaffolding.

---

## Problem Frame

The house needs a public-facing landing page to (1) establish its identity and
credibility, (2) showcase the caliber of the founding members and their companies, and
(3) tease the summer event programming while collecting event suggestions before the
schedule is finalized. There is no existing codebase — everything is built from scratch.

**In scope:** one responsive landing page, founder data, the red/green hacker visual
system, founder + company logos, an empty-but-styled Events section with a mailto CTA.

**Out of scope (this plan):** a real events calendar/CMS, an application/RSVP flow, a
blog, analytics, and a backend. The chosen Next.js App Router leaves room to grow into
these later, but none are built now.

---

## Goals & Success Criteria

- A reviewer loading the dev server sees a complete, polished single page: Hero → About →
  Founders → Events → Footer.
- All 7 founders render with name, role/company, school/affiliation, highlight bullets,
  photo, and associated org logos.
- The theme reads as intentional "futuristic hacker barn" — red brand, green terminal
  accents, monospace + bold display type, matrix/binary texture — not generic AI-slop.
- The Events section is visibly a deliberate "coming soon" state with a working
  `mailto:maxfan@stanford.edu` "Suggest an event" button.
- Fully responsive (mobile → desktop); passes basic a11y (alt text, color contrast on
  text, keyboard-reachable links).
- `npm run build` succeeds; `npm run dev` renders without console errors.

---

## Theme & Design System (reference for all UI units)

Carried into U1 as Tailwind tokens; every later unit references these rather than
hardcoding values.

| Token | Value (directional) | Use |
|---|---|---|
| `barn-red` | ~`#C8102E` | FARMHOUSE wordmark, primary headings, brand accents, the `01`–`07` founder numerals |
| `terminal-green` | ~`#39FF14` | terminal text, glow, primary CTA, prompt carets, links |
| `ink` | ~`#0A0A0A` | page background |
| `panel` | ~`#111316` | terminal window / card surfaces |
| `fog` | ~`#C9CDD2` | body copy on dark |
| Display font | bold condensed (e.g. a heavy sans like the deck's blocky FARMHOUSE) | wordmark, section titles |
| Mono font | JetBrains Mono / IBM Plex Mono | terminal text, bullets, labels |

Motifs reused across sections (defined once in U2): a **terminal window chrome** (traffic-light
dots / min-max-close glyphs, monospace prompt lines), a **binary/matrix background texture**,
**green glow** on interactive elements, and a **scanline/CRT** subtle overlay.

> The hex values and fonts above are directional guidance for review, not exact spec —
> the implementer should tune for contrast and taste, keeping barn-red primary and
> terminal-green as accent.

---

## Output Structure

```
farmhouse/
├── app/
│   ├── layout.tsx              # root layout, fonts, metadata
│   ├── page.tsx                # composes all sections
│   └── globals.css             # Tailwind + CSS vars, scanline/glow utilities
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Founders.tsx
│   │   ├── Events.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── TerminalWindow.tsx   # reusable terminal-chrome frame
│   │   ├── MatrixBackground.tsx # binary/matrix texture
│   │   ├── LogoChip.tsx         # founder org-logo pill
│   │   └── FounderCard.tsx
│   └── Nav.tsx
├── data/
│   └── founders.ts             # typed founder records
├── public/
│   ├── founders/               # 7 founder photos
│   ├── logos/                  # company/org logos
│   └── farmhouse-barn.png      # barn render from the deck
├── tailwind.config.ts
├── package.json
└── ... (next config, tsconfig, vitest config)
```

The tree is a scope declaration, not a constraint — the implementer may adjust layout if
implementation reveals a cleaner structure. Per-unit **Files** lists are authoritative.

---

## Key Technical Decisions

1. **Next.js App Router over single HTML** *(user choice)* — leaves room to grow into
   `/apply` or `/blog` later; SSR/SEO-friendly for a public marketing page.
2. **Founder data lives in `data/founders.ts`, not inline JSX** — a typed array consumed
   by a single `FounderCard` component keeps the 7 profiles consistent and editable in one
   place.
3. **Org logos referenced by path from each founder record** — logos are real third-party
   marks (Telomis, BASES, ISEF, Cardinal Ventures, Nonlinear, 0studio, ASES, TreeHacks,
   Context, Caladan, MSL, Phinity Labs). Sourcing the actual image files is an
   execution-time task (U8); the data layer just references `public/logos/*`.
4. **Events ships empty by design** — a styled "Summer 2026 schedule loading…" terminal
   state plus a `mailto:maxfan@stanford.edu` button, rather than placeholder event cards.
The blinking cursor uses `@media (prefers-reduced-motion: reduce) { animation: none; }` —
it renders as a static `_` so the section keeps the page's reduced-motion posture.
5. **Light test setup (Vitest + React Testing Library)** — this is a presentational site;
   tests target the few pieces with actual logic (mailto href, founder data→card mapping,
   nav anchors) rather than styling.

---

## Implementation Units

### U1. Scaffold Next.js project + design tokens

**Goal:** Stand up a working Next.js + Tailwind + TS app with the red/green hacker design
tokens and global styles wired in.

**Requirements:** Foundation for all goals; enables `npm run dev`/`build`.

**Dependencies:** none.

**Files:**
- `package.json`, `tsconfig.json`, `next.config.ts`, `.gitignore`
- `tailwind.config.ts` (color tokens, font families from the design system table)
- `app/layout.tsx` (load display + mono fonts via `next/font`, base metadata placeholder)
- `app/globals.css` (Tailwind layers; utilities for green glow, scanline/CRT overlay, matrix text)
- `app/page.tsx` (empty shell that will compose sections)

**Approach:** Use `create-next-app` (App Router, TS, Tailwind) as the base, then replace
the default theme with the tokens from the Theme table. Define reusable CSS utilities for
the recurring motifs (glow, scanline) so later units stay declarative.

**Patterns to follow:** Standard Next.js App Router conventions; CSS custom properties +
Tailwind `theme.extend` for the palette.

**Test scenarios:** No behavioral tests — scaffolding/config only. Verification is the
build and dev server succeeding (see Verification).

**Verification:** `npm run dev` serves a blank themed page with no console errors;
`npm run build` passes.

---

### U2. Shared UI primitives (terminal chrome, matrix bg, logo chip)

**Goal:** Build the reusable visual building blocks every section depends on.

**Requirements:** Enables the consistent "hacker" aesthetic across Hero/About/Events.

**Dependencies:** U1.

**Files:**
- `components/ui/TerminalWindow.tsx` — framed panel with window chrome (dots/min-max-close)
  and optional monospace prompt header; accepts children.
- `components/ui/MatrixBackground.tsx` — subtle animated/!static binary texture layer.
- `components/ui/LogoChip.tsx` — small pill rendering an org logo (image + accessible label).
- `components/Nav.tsx` — fixed top nav: FARMHOUSE wordmark + anchor links (Home, About,
  Founders, Events) + a Contact button.

**Approach:** Keep primitives presentational and prop-driven. `TerminalWindow` mirrors the
reference screenshot's hero frame. `MatrixBackground` should be CSS/canvas-light enough to
not hurt performance; respect `prefers-reduced-motion`.

**Test scenarios:**
- `LogoChip` renders an `<img>` with the provided `alt` text (a11y).
- `Nav` renders one anchor per section with correct `href="#section-id"`.
- `TerminalWindow` renders its children and the prompt header text when provided.

**Verification:** Primitives render in isolation; `Nav` links scroll to matching section IDs.

---

### U3. Hero section

**Goal:** The above-the-fold identity moment — FARMHOUSE brand, terminal hero, tagline, CTAs.

**Requirements:** Goal 1 (identity/credibility), theme legibility.

**Dependencies:** U2.

**Files:**
- `components/sections/Hero.tsx`
- uses `public/farmhouse-barn.png` (from U8)

**Approach:** Echo the reference screenshot: a `TerminalWindow` containing a monospace
prompt line (e.g. `[founder@farmhouse ~]$ ./summer-2026`), a bold barn-red **FARMHOUSE**
wordmark with green sub-tagline ("Stanford Hacker House · Summer 2026 · Code the Farm"),
a one-paragraph intro, and two CTAs ("Meet the Founders" → `#founders`, "Suggest an Event"
→ Events). Place the barn render as a complementary visual. Matrix background behind.

**Patterns to follow:** Reference screenshot hero composition; reuse `TerminalWindow` +
`MatrixBackground` from U2.

**Test scenarios:**
- Renders the FARMHOUSE wordmark and tagline text.
- "Meet the Founders" CTA has `href="#founders"`; secondary CTA targets the events anchor.

**Verification:** Hero fills the viewport on desktop and stacks cleanly on mobile.

---

### U4. About / "The House" section

**Goal:** A short narrative on what Farmhouse is — a Stanford hacker house where founders
build together over the summer.

**Requirements:** Goal 1.

**Dependencies:** U2.

**Files:** `components/sections/About.tsx`

**Approach:** Concise copy (2–3 short blocks or a stat strip) framed in the terminal motif —
e.g. what the house is, the "Code the Farm" ethos, and a few credibility stats derived from
the cohort (companies founded, Cardinal Ventures-backed startups, patents, TreeHacks wins).
Keep copy editable and clearly marked where the user may want to revise voice.

**Test scenarios:** Test expectation: none — pure presentational copy. Verified visually.

**Verification:** Section reads coherently and matches theme; no layout overflow.

---

### U5. Founders section

**Goal:** Render all 7 founding members as cards with bios and org logos.

**Requirements:** Goal 1 + the "founders" and "logos where necessary" asks.

**Dependencies:** U2; founder photos + logos from U8.

**Files:**
- `data/founders.ts` — typed `Founder[]` (number 01–07, name, role line, school,
  affiliations, bullet highlights, photo path, `logos: {name, src}[]`).
- `components/ui/FounderCard.tsx` — renders one founder, mirroring the deck layout
  (big barn-red numeral, name, red-accented role line, school, bullets, `LogoChip` row).
- `components/sections/Founders.tsx` — maps `founders` → `FounderCard`.

**Founder data to encode** (from `Farmhouse Profiles.pdf`):
- 01 **Andrzej Bachleda-Curus** — CEO of Telomis; Stanford CS/AI + Math; Stanford BASES VP. Logos: Telomis, BASES.
- 02 **Filip Buscu** — Cofounder & CTO of Oculta (Cardinal Ventures); Stanford Aerospace + EE. Logos: Regeneron ISEF, Cardinal Ventures.
- 03 **Andrew Jenkins** — Founding Engineer @ Nonlinear; Stanford CS (AI); BASES VP. Logos: Nonlinear, BASES.
- 04 **Max Fan** — CTO @ 0studio (Cardinal Ventures); Stanford CS & Physics; ASES VP. Logos: ASES, Cardinal Ventures.
- 05 **Oliver Sin** — Founding Ops Engineer @ Context; Stanford CS (AI) & Philosophy; TreeHacks Sponsorships Director, ASES Director. Logos: TreeHacks, Context, ASES.
- 06 **Matthew Kim** — Co-Founder @ Caladan; Stanford CS + Econ. Logos: Caladan, MSL, ASES.
- 07 **Nathaniel Laurent** — ML Research Engineer @ Phinity Labs; Stanford Physics & CS (AI); BASES VP. Logos: BASES.

**Approach:** Single source of truth in `founders.ts`; the section is a `.map`. Card
mirrors the deck's two-column (photo / text) layout, responsive to a single column on
mobile. Role/company name in barn red, bullets in monospace green-tinted.

**Patterns to follow:** The deck's per-founder slide layout; reuse `LogoChip`.

**Test scenarios:**
- `Founders` renders exactly 7 `FounderCard`s (one per `data/founders.ts` entry).
- A `FounderCard` renders the founder's name, role line, and one `LogoChip` per logo entry.
- Each founder photo `<img>` has non-empty `alt` (founder name).

**Verification:** All 7 cards present, ordered 01–07, logos visible, responsive.

---

### U6. Events section (coming-soon + mailto CTA)

**Goal:** A deliberately empty Events section with a "Suggest an event" mailto button.

**Requirements:** Goal 3 (tease events + collect suggestions). Per user: leave blank for now.

**Dependencies:** U2.

**Files:** `components/sections/Events.tsx`

**Approach:** A `TerminalWindow` showing a "loading" state — e.g. a blinking-cursor line
like `> fetching summer-2026 schedule...` / `# status: coming soon` — and a prominent
green-glow button **"Suggest an Event"** linking to
`mailto:maxfan@stanford.edu?subject=Farmhouse%20Summer%20Event%20Suggestion`. No event
cards. Make the empty state feel intentional, not unfinished.

**Test scenarios:**
- Renders the "Suggest an Event" button with `href` starting `mailto:maxfan@stanford.edu`.
- The mailto includes a subject query param.
- Renders the coming-soon status text.

**Verification:** Clicking the button opens the user's mail client to maxfan@stanford.edu.

---

### U7. Footer, metadata, and SEO polish

**Goal:** Close the page and make it shareable.

**Requirements:** Goals (shareable, professional finish).

**Dependencies:** U2 (wordmark), all sections present.

**Files:**
- `components/sections/Footer.tsx` (wordmark, "Stanford Hacker House · Summer 2026",
  contact `mailto:maxfan@stanford.edu`, anchor links, "Code the Farm" tag).
- `app/layout.tsx` (metadata: title, description, Open Graph image, theme color).
- `app/page.tsx` (compose Nav + all sections in order).
- `public/favicon` / OG image (from U8).

**Approach:** Fill in Next.js `metadata` export (title "Farmhouse — Stanford Hacker House",
description, OG image). Compose the final page. Footer mirrors nav anchors.

**Test scenarios:**
- `page.tsx` renders all five sections in order (Hero, About, Founders, Events, Footer).
- Footer contact link is `mailto:maxfan@stanford.edu`.

**Verification:** Sharing the URL shows a proper OG preview; full page scrolls top-to-bottom.

---

### U8. Asset pipeline (photos, logos, barn render)

**Goal:** Get the real images into `public/` so cards and hero aren't broken.

**Requirements:** Supports U3, U5, U7.

**Dependencies:** none (can run in parallel), but U3/U5/U7 visually depend on it.

**Files:**
- `public/founders/*.{jpg,png}` — 7 founder headshots (extractable from the PDF / provided by founders).
- `public/logos/*.{svg,png}` — org logos: Telomis, BASES, Regeneron ISEF, Cardinal
  Ventures, Nonlinear, 0studio, ASES, TreeHacks, Context, Caladan, MSL, Phinity Labs.
- `public/farmhouse-barn.png` — the red barn render from the deck cover.
- `public/og-image.png`, `public/favicon.ico`.

**Approach:** Founder photos and the barn render can be exported from `Farmhouse
Profiles.pdf`. Company logos should be sourced from official brand assets where available;
where a clean logo isn't readily available, fall back to a styled text `LogoChip`.
Optimize images (web-sized) before committing.

> **Execution-time note:** exact logo files and final image crops are discovered during
> implementation — the data layer (U5) references stable paths so assets can be dropped in
> without code changes. Missing logos degrade gracefully to a text chip rather than a broken
> image.

**Test scenarios:** Test expectation: none — static assets. Verified by sections rendering
without broken-image icons.

**Verification:** No 404s in the network tab; all founder/hero/logo images load.

---

## Implementation Order

```
U1 ─► U2 ─► U3 ─┐
            U4 ─┤
            U5 ─┼─► U7
            U6 ─┘
U8 (parallel; assets needed before U3/U5/U7 look complete)
```

U1 → U2 are strictly sequential foundations. U3–U6 are independent sections that can be
built in any order once U2 exists. U7 composes everything last. U8 (assets) runs alongside
and must land before U3/U5/U7 are visually verified.

---

## Scope Boundaries

**In scope:** the single landing page, founder data + cards, red/green hacker design
system, empty Events section with mailto CTA, responsive + basic a11y, asset pipeline.

### Deferred to Follow-Up Work
- Real events calendar / schedule data once finalized (swap the U6 coming-soon state for
  event cards).
- Application / RSVP flow (`/apply` route) — App Router leaves room for it.
- Blog, analytics, contact form backend.
- Animated matrix-rain richness beyond a tasteful static/light texture, if performance
  budget allows later.

---

## Risks & Mitigations

- **Red + green clashing / low contrast** → enforce barn-red as primary and green as
  accent (not 50/50); verify text contrast on near-black; reserve green for interactive
  elements and code/terminal text.
- **Third-party logos unavailable or inconsistent sizing** → `LogoChip` degrades to a
  styled text chip; normalize chip height so mismatched logos still align.
- **Third-party logo usage rights** → most listed companies are early-stage startups with
  no public brand kit; some marks (Regeneron ISEF, Cardinal Ventures, Stanford-affiliated
  orgs) carry usage/non-endorsement policies. Confirm with the user which logos may be
  displayed, and default to text chips for any org without clear permission or a clean asset.
- **Founder photo rights / quality from PDF extraction** → prefer founder-supplied
  headshots; PDF extraction is a fallback. Flag to the user before shipping.
- **"AI-slop" generic look** → lean hard into the specific motifs (terminal chrome,
  `01`–`07` numerals, monospace bullets, barn render, "Code the Farm") that make it feel
  authored, per the reference deck and screenshot.

---

## Open Questions (non-blocking)

- Final About-section copy / voice — placeholder copy ships; user refines.
- Whether to use founder LinkedIn/company links on each card (not requested; easy to add later).
- Custom domain / deploy target (Vercel assumed; not part of this plan).
