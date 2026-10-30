---
name: bungee-landing
description: Build or adapt a dark editorial creative-studio website inspired by bungee.framer.website. Use when creating a new client landing, refreshing an agency site, or adding Bungee-style sections, project cards, custom cursor, marquee, and scroll reveal.
---

# Bungee-style studio landing

Use this project as a repeatable base. Build client identity, do not clone Bungee copy or branding.

## First read

1. Read `site.config.ts`. It is client content source.
2. Inspect `public/img/` before choosing images.
3. Keep five routes: `/`, `/works`, `/about`, `/blog`, `/contact` unless client asks otherwise.
4. Reuse existing components before adding files.

## Visual system

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#1e1e1e` | page background |
| `surface` | `#2e353b` | cards, contrast sections |
| `muted` | `#8a919b` | body/supporting copy |
| `line` | `#343a40` | 1px dividers |
| display | `Inter Tight` | headings |
| body | `Inter` | prose |
| mono | `Chivo Mono` | labels, nav numbering |

Keep sharp corners, generous empty space, thin dividers, photo-first project cards. Never add gradients, pill UI, rounded cards, stock dashboard visuals, or oversized decorative icons.

## Home section order

```tsx
<Hero />
<LatestProjects />
<Services />
<Statement />
<Stats />
<Testimonials />
<Faq />
<Newsletter />
```

Each section rules:

- Hero: short studio claim, local clock, direct CTA, ticker.
- Projects: 2-col desktop / 1-col mobile. Use `ProjectCard`.
- Services: numbered rows. One heading, one short description, arrow.
- Statement: big one-paragraph studio belief on `surface`.
- Stats: 4-cell grid. No charts.
- Testimonials: 3 text cards.
- FAQ: native `<details>`, not dependency.
- Footer/newsletter: large email/project CTA.

## Primitives

```tsx
import Reveal from "@/app/components/primitives/Reveal";
import Label from "@/app/components/primitives/Label";
import ProjectCard from "@/app/components/primitives/ProjectCard";
import SectionHeading from "@/app/components/primitives/SectionHeading";

<Reveal>
  <SectionHeading title="Latest Projects." meta="( _©26 )" href="/works" />
</Reveal>
```

- `Reveal`: one scroll-in animation per section/card. Do not stack GSAP effects.
- `ProjectCard`: optional `video` field plays on hover. Keep still fallback.
- `.label`: only for metadata/navigation.
- `.line-hover`: default inline-link effect. Prefer CSS over JS.

## New-client swap checklist

1. Replace all client copy, navigation, contact, social links, project data, services, FAQs in `site.config.ts`.
2. Put image assets in `public/img/`; update only paths in `site.config.ts`.
3. Add hover video to `public/video/` and its `project.video` field only if client provides compressed MP4/WebM.
4. Change font only in `app/layout.tsx`, then adjust `--font-*` tokens in `app/globals.css` if needed.
5. Check project/image names match exact case. `next/image` paths must exist.
6. Run `npm run build`.

## Motion rules

- Respect `prefers-reduced-motion`.
- Keep cursor hidden for `(pointer: coarse)`.
- Use CSS for hover, underline, ticker.
- Use GSAP only for scroll reveal and pointer follower.
- Never add jQuery, Framer Motion, GSAP plugins, or another animation package unless client explicitly requires it.

## Common failures

| Symptom | Check |
| --- | --- |
| Cursor invisible | `Cursor` lives in root layout; hidden on touch is expected. |
| Project image fails | `/img/...` path must point inside `public/`; add `sizes` to `next/image`. |
| Animation does not fire | Component needs `"use client"`; use `Reveal`, not new ad-hoc `ScrollTrigger`. |
| Ticker jumps | Duplicate text exactly twice; animation moves `-50%`. |
| Layout looks template-like | Reduce copy, remove extra UI, make spacing larger. |

## Verify

```bash
npm run build
npm run dev
```

Check desktop and 390px mobile: header, cards, route links, hover state, ticker, FAQ, form validation, custom cursor desktop only.
