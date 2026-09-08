# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience is passersby: people who encounter the public site and want to get a human sense of LinCie, explore what they have made and care about, and decide whether to continue wandering or make contact.

## Product Purpose

LinCie is a public personal website that introduces LinCie as a software engineering trainee through a personal world first and a portfolio second. It should help visitors feel welcomed, understand the person behind the work, freely explore personal interests, projects, thoughts, curiosity, and future growth, and find a low-pressure way to connect.

## Positioning

The site presents professional work and personal context as one directly navigable personal world rather than as a résumé-first portfolio or project grid. Its rural station-house structure gives passersby a place to arrive, pause, wander, return, and choose their own depth.

## Operating Context

- The site is a public, responsive experience for phone, tablet, and desktop browsers.
- Visitors may arrive through the station, a direct route, a bookmark, or a shared deep link.
- Direct links, browser history, Back/Forward behavior, and predictable URLs are first-class ways to move through the site.
- Visitors may pause or choose any destination; no guided tour, required sequence, or completion path is part of the product.

## Capabilities and Constraints

- The following destinations are in first-release scope:
  - `/station` — arrival, welcome, identity, notices, and the complete station board.
  - `/about` — a personal introduction through the Station House.
  - `/projects` — cultivated project index and project stories.
  - `/offers` — confirmed situations in which LinCie may help.
  - `/thoughts` — personal notes and reflections.
  - `/connect` — practical ways to contact LinCie.
  - `/forest` — experiments, learning, and curiosity.
  - `/mountain` — future growth and patient aspirations.
  - `/map` — a literal index of every public route.
  - `/lost-platform` — a real 404 recovery surface for unknown destinations.
- Route entries and navigation pair expressive place names with literal labels, stable links, readable current-location cues, and clear return paths.
- The station board is a complete navigation list and must remain usable without artwork, animation, audio, or client-side JavaScript.
- Project stories begin with what a project is and why it needed to exist, then offer optional atmosphere/feeling and technical-craft depth.
- Discoveries and playful details are optional enhancements. Essential identity, project, offer, thought, and contact information must have ordinary labeled routes.
- The experience should preserve semantic HTML, progressive enhancement, visible focus, keyboard access, touch access, readable states, and browser-native navigation.
- Content must be honest. Do not invent biography, pet details, favorites, project outcomes, services, availability, contact channels, privacy treatment, or response timing.
- `[OPEN QUESTION]` Confirm whether the first release includes Japanese or other languages, dark/night mode, audio, quiet mode, or a “Surprise me” action.
- `[OPEN QUESTION]` Confirm the real contact channels, any form backend, privacy treatment, response expectation, and the factual content inventory for each route.

## Brand Commitments

- The product is named LinCie.
- LinCie is identified plainly as a software engineering trainee.
- The voice is direct, friendly, sincere, reassuring, and unhurried.
- The site welcomes visitors without pressure, scarcity, false intimacy, achievement language, or marketing claims that have not been supplied.
- The personal-world-before-portfolio position is preserved across future work.

## Evidence on Hand

- `_bmad-output/planning-artifacts/ux-designs/ux-lincie-personal-site-2026-09-08/DESIGN.md` — visual identity contract.
- `_bmad-output/planning-artifacts/ux-designs/ux-lincie-personal-site-2026-09-08/EXPERIENCE.md` — information architecture, behavioral contracts, flows, and accessibility floor.
- `src/pages/index.astro`, `src/components/layout/MainLayout.astro`, and `src/styles/global.css` — the current Astro/Tailwind scaffold; the implementation does not yet contain the planned route content.
- `[OPEN QUESTION]` The repository does not yet contain the factual About, Projects, Offers, Thoughts, Forest, Mountain, or Contact content and supporting assets needed to populate the routes.

## Product Principles

1. Welcome visitors without evaluating, rushing, or funneling them.
2. Let a specific person and their context come before résumé conventions.
3. Make wandering expressive but keep every destination direct, literal, and recoverable.
4. Show work as cultivated stories with human reasons, not scores, rankings, or achievement meters.
5. Make warmth trustworthy through precise, accessible behavior and honest content states.

## Accessibility & Inclusion

`[ASSUMPTION]` Target WCAG 2.2 AA behavior across supported browsers. Preserve keyboard and touch access, visible focus, screen-reader-readable route labels, zoom and reflow, forced-color compatibility, reduced-motion behavior, and text equivalents for all visual discoveries. Confirm language and localization requirements before adding multilingual content.
