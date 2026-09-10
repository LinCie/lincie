---
version: 1
slug: "src-pages-connect-astro"
primary_target: "src/pages/connect.astro"
related_targets:
  - "src/pages/letterbox.astro"
---

# Letterbox page surface brief

- **Scope / mode:** The `/connect` route (aliased by `/letterbox`). Operate + Experience mode. The Letterbox is the station's dedicated correspondence desk where visitors leave notes or reach out.
- **Audience / job / outcome:** Passersby, engineers, founders, and potential collaborators who wish to contact LinCie. They select from three clear intents (Say Hello, Project & Craft Inquiry, Open Question), view a tailored letter blueprint, and reach out via semantic mailto or direct channels (`contact@lincie.me`, GitHub) with zero friction and honest response expectations.
- **Constraints / content:** 100% resilient zero-JS fallback, progressive enhancement, semantic HTML, visible focus states (`#b8614b`), minimum 44px touch targets, accessible live region for clipboard feedback. No backend database required, no marketing funnels, no urgency timers or false SLAs.

## Direction contract

THESIS: The Letterbox is a peaceful, sunlit station writing desk rather than an impersonal contact form or corporate inbox: intentions are clear, correspondence is human and unhurried, and boundaries are transparent.

OWN-WORLD: Sunlit paper (#F7F2E8), clean paper (#FFFDF8), station wood (#E9DDC9), deep moss ink (#2D332B), quiet ink (#5F665C), soft boundary dividers (#C4B49D), and scarce terracotta signals (#B8614B); Georgia/Noto Serif for place titles, Noto Sans for wayfinding and dispatch specifics.

STORY: A visitor steps into the Letterbox, chooses their intent from three clear station cards, reviews the prepared dispatch blueprint with thought starters, opens their mail client or copies the address with one click, and understands LinCie's honest correspondence rhythm.

FIRST VIEWPORT: Station signpost ("Station Platform / The Letterbox"), literary serif title, atmospheric intro, and an active desk status badge.

FORM: The Station Desk Blueprint, built code-led with responsive progressive enhancement.

FINISH: Full validation through Prettier, ESLint, and Astro check.
