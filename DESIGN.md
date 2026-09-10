---
name: LinCie Station House
description: A warm Japanese rural station-house visual language for a personal world first and a portfolio second.
colors:
  surface-sunlit: "#F7F2E8"
  surface-paper: "#FFFDF8"
  surface-station: "#E9DDC9"
  surface-field: "#DCE7C9"
  sky-morning: "#C9E0E2"
  ink-primary: "#2D332B"
  ink-secondary: "#5F665C"
  border-soft: "#C4B49D"
  field-green: "#6C895F"
  signal-terracotta: "#B8614B"
  signal-gold: "#D49A48"
typography:
  display-xl:
    fontFamily: 'Georgia, "Noto Serif", serif'
    fontSize: "56px"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  display-lg:
    fontFamily: 'Georgia, "Noto Serif", serif'
    fontSize: "40px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  heading-md:
    fontFamily: 'Georgia, "Noto Serif", serif'
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.2
  body-lg:
    fontFamily: '"Noto Sans", system-ui, sans-serif'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: '"Noto Sans", system-ui, sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: '"Noto Sans", system-ui, sans-serif'
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.04em"
  meta:
    fontFamily: '"Noto Sans", system-ui, sans-serif'
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  sm: "6px"
  DEFAULT: "10px"
  md: "12px"
  lg: "20px"
  xl: "28px"
  full: "9999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "7": "32px"
  "8": "48px"
  "9": "64px"
  "10": "72px"
  gutter-mobile: "20px"
  gutter-desktop: "40px"
  content-max: "1152px"
  touch-target: "44px"
components:
  station-board:
    backgroundColor: "{colors.surface-station}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.lg}"
  route-sign:
    backgroundColor: "{colors.surface-paper}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.md}"
  current-location:
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.sm}"
  project-field:
    backgroundColor: "{colors.surface-field}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.xl}"
  station-house:
    backgroundColor: "{colors.surface-paper}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.lg}"
  discovery-object:
    backgroundColor: "{colors.surface-station}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.md}"
---

# Design System: LinCie Station House

## Overview

**Creative North Star: "The Station House in Morning Light"**

LinCie's visual world should feel like arriving at a small, cared-for rural station in warm morning light: a place to set out, return, rest, and notice how far one has traveled. It is soft, warm, calming, spacious, and subtly alive. The station is home, the station board is the living content index, and the surrounding landscape is the language through which a person and their work are encountered.

Warmth is paired with quiet precision. Alignment, readable labels, direct routes, visible focus, and dependable states should feel maintained beneath the cozy surface. The interface shares happiness without asking visitors to hurry, compare, perform, or complete a tour. Rural anime references are atmosphere references only; the world must belong to LinCie rather than copy recognizable characters, scenes, or assets.

The display and body families, dark/night palette, and final illustration or photography treatment remain implementation decisions. Until they are resolved, preserve the fallback stacks and the warm morning world rather than inventing additional identity systems.

**Key Characteristics:**

- Warm paper, station wood, field, sky, and moss-ink layers.
- A station, board, tracks, fields, forest, and mountain as a coherent visual grammar.
- Literary serif display type balanced by precise, highly readable sans-serif wayfinding.
- Spacious scenes with restrained environmental detail and no decorative barrier to content.
- A personal world first, with portfolio work encountered as cultivated journeys.

## Colors

The palette is a quiet rural morning: low-saturation surfaces create air and warmth, deep moss ink carries meaning, and terracotta, green, and gold appear as scarce signals rather than a loud UI theme.

### Primary

- **Station Signal** (`{colors.signal-terracotta}`): Use sparingly for welcome, action, focus, and current-location emphasis. Always pair it with text, shape, or another cue; it must never be the only state signal.
- **Deep Moss Ink** (`{colors.ink-primary}`): The primary structural color for essential text, route labels, and strong contrast.

### Secondary

- **Field Green** (`{colors.field-green}`): Suggests grass and cultivated growth in landscape shapes, selected field cues, and paired labels. It is never the sole carrier of meaning.

### Tertiary

- **Morning Sky** (`{colors.sky-morning}`): An open-landscape and atmospheric-panel color, not general-purpose interface chrome.
- **Warm Glint** (`{colors.signal-gold}`): A small point of sunlight, bell, or celebration. Keep it out of body text and dense decoration.

### Neutral

- **Sunlit Paper** (`{colors.surface-sunlit}`): The main canvas; warm paper and morning air instead of sterile white.
- **Clean Paper** (`{colors.surface-paper}`): Readable content interiors, the station house, route notes, and text-first surfaces.
- **Station Wood** (`{colors.surface-station}`): Boards, small architectural surfaces, and tactile objects as a tonal layer.
- **Field Wash** (`{colors.surface-field}`): Project terrain and cultivated work; never the sole project-status signal.
- **Quiet Ink** (`{colors.ink-secondary}`): Metadata and secondary explanations only when contrast remains legible.
- **Soft Boundary** (`{colors.border-soft}`): Hairline dividers, tracks, board edges, and quiet control boundaries.

**The Rare Signal Rule.** Accent colors are most welcoming when they remain scarce. Use them to point, focus, or acknowledge—not to fill every card, label, and surface.

**The Quiet Ground Rule.** Long text must sit on a separable, calm surface. Never place essential copy over busy landscape artwork.

## Typography

**Display Font:** `{typography.display-xl}` and `{typography.display-lg}`

**Body Font:** `{typography.body-lg}` and `{typography.body}`

**Label/Meta Font:** `{typography.label}` and `{typography.meta}`

**Character:** The serif voice gives place names, welcomes, and major story headings a warm, human presence. The sans-serif voice carries explanations, technical craft, forms, route instructions, and other information that must be scanned confidently.

### Hierarchy

- **Display:** `{typography.display-xl}` for the welcome, arrival statement, and a small number of major story headings.
- **Headline:** `{typography.display-lg}` for route and place headings that need a clear literary presence.
- **Title:** `{typography.heading-md}` for rooms, fields, trails, notes, and subsection headings.
- **Body:** `{typography.body-lg}` and `{typography.body}` for introductions, project stories, technical detail, forms, and route guidance. Keep reading columns comfortably narrow.
- **Label:** `{typography.label}` for station-style labels and compact wayfinding. Letter spacing is modest; all caps are not required.
- **Meta:** `{typography.meta}` for dates, route context, statuses, and quiet notes. Metadata must never hide essential meaning.

Poetic place names always sit beside a literal label in the sans-serif voice. Decorative lettering, untranslated Japanese text, or text inside an image may supplement a label but cannot replace it. Do not use the display role for technical detail, long paragraphs, or every card title.

**The Two-Voice Rule.** Serif establishes place and story; sans-serif makes the route, meaning, and craft unmistakable.

## Layout

The spatial model is responsive, mobile-first, and built around arrival, orientation, and optional depth. Keep readable content within `{spacing.content-max}` with at least `{spacing.gutter-mobile}` on small screens and `{spacing.gutter-desktop}` on wide screens. Use the existing responsive conventions rather than inventing a second breakpoint system.

### Arrival composition

The first view establishes the station, board, surrounding landscape, LinCie's identity, and vocation before asking for a choice. The welcome is visible without hover, animation, or a tour. The board is the clearest content object and remains a complete, semantic route list when scenery or enhancement layers are absent.

On wide screens, the station may sit in an expansive landscape with tracks or paths connecting outward. On small screens, simplify or stack the scene so the welcome, board, route labels, and first content invitation come before atmospheric extras. Decorative distance must never push the first meaningful heading below the fold without a reason.

### Interior composition

- Give each route one clear focal region: a room, field, workshop, waiting room, letterbox, forest path, or mountain overlook.
- Use `{spacing.7}` through `{spacing.10}` between major sections so visitors can pause.
- Use `{spacing.2}` through `{spacing.4}` between a label and the content it qualifies.
- Let tracks, fences, windows, and field edges act as light dividers, not diagrams visitors must decode.
- Prefer one strong scene plus text over a dense grid of equal cards. Project indexes can contain several fields but should not read as dashboards.
- Keep navigation, current location, and exits in predictable positions while allowing atmosphere to vary around them.

### Responsive behavior

- **Small screens:** Stack scene and content; replace illustrated board compositions with a vertically ordered route list; keep all labels, depth choices, and exits visible.
- **Medium screens:** Allow a board and scene relationship or a modest two-column composition when reading order remains obvious.
- **Large screens:** Use open landscape space and careful asymmetry without making atmosphere an information barrier.
- **All screens:** Avoid horizontal scrolling, text baked into images, pointer-dependent layouts, and essential content hidden in tiny hotspots.

## Elevation & Depth

Depth comes from warm tonal layering, whitespace, framing, and the relationship between architecture and landscape. Use `{colors.surface-station}`, `{colors.surface-field}`, and `{colors.surface-paper}` to distinguish places without turning every element into a card. Shadows are rare and broad: they may gently situate a physical board or object, but hierarchy should come from position, type, space, and tone.

Keep borders quiet with `{colors.border-soft}`. Avoid glossy panels, hard black drop shadows, neon glow, glassmorphism, and game-like 3D depth. Tracks and dividers should connect places without caging content.

**The Flat-by-Default Rule.** Surfaces rest quietly; depth is earned by architecture, tonal change, whitespace, or a restrained state response.

## Shapes

The form language joins quiet station architecture with soft countryside forms. Use `{rounded.sm}` for compact controls, route markers, and labels; `{rounded.md}` for route signs, notes, and discovery objects; and `{rounded.lg}` or `{rounded.xl}` for boards, station houses, and broad field shapes.

Reserve `{rounded.full}` for a small dot, bell, sun, pet detail, or status marker—not for every button or content container. Combine straight or gently rounded architectural edges with organic field, grass, cloud, and mountain silhouettes. Organic shapes belong to the background language, not to interactive puzzles.

The visible ornament may be small, but its interactive wrapper must meet `{spacing.touch-target}`. Focus remains visible with the station signal or another contrast-safe treatment; the focus treatment must not depend on pointer styling.

## Components

The visual contracts below describe the recurring places and objects. Their behavioral equivalents must remain directly navigable, text-labeled, keyboard accessible, and usable without motion or artwork.

### Station arrival scene

The arrival scene combines platform or station architecture, the board, a welcoming line, a calm landscape, and one restrained living detail such as grass or light. The station and board remain identifiable when illustration is simplified. The scene is a threshold, not a splash screen: leave room around the welcome and make the first action an invitation rather than a conversion prompt.

### Station board

The station board is the primary index surface. Use `{components.station-board.background}`, `{components.station-board.textColor}`, and `{components.station-board.rounded}`, with `{colors.border-soft}` as a quiet edge when a boundary is needed. Each entry shows a poetic destination name, a clear literal label, a concise invitation or notice, and a visible current-place indication when relevant.

The board may use groupings such as departures, open rooms, seasonal notices, or quiet discoveries, but these are presentation layers rather than a new hierarchy. On small screens it becomes a straightforward list.

### Route sign and route rail

A route sign uses `{components.route-sign.background}`, `{components.route-sign.textColor}`, and `{components.route-sign.rounded}`. Place names can be expressive, but the literal label and destination relationship remain adjacent. A route rail or breadcrumb uses track-like lines and `{colors.border-soft}` without making the line the only navigation cue.

### Current-location marker

The `You are here` marker uses `{components.current-location.rounded}` with `{colors.signal-terracotta}` as a small visual signal beside explicit current-location text. It should feel like friendly acknowledgement, never a warning, score, or progress meter. Color is supplementary; readable text carries the state.

### Station house / About Me

The station house is lived-in, intimate, and specific rather than a profile template. A bedroom nook and bed can provide the emotional anchor, while everyday comforts, meaningful interests, optional favorites, and a friendly pet remain subordinate to a readable introduction. Object illustrations or photographs open a note; they do not carry the whole introduction or hide essential facts.

Use `{components.station-house.background}`, `{components.station-house.textColor}`, and `{components.station-house.rounded}` for the primary room surface. Keep room details warm and tactile without making visitors hunt through the scene to understand the person.

### Discovery object and favorite note

A seed packet, book, postcard, shelf item, or other meaningful object may act as an optional discovery. Use `{components.discovery-object.background}`, `{components.discovery-object.textColor}`, and `{components.discovery-object.rounded}`. The revealed note stays beside or immediately associated with the object and has an ordinary, visible route as well. Discovery is noticing, not a puzzle, collection, or completion system.

### Rice field / project tile

Projects appear as cultivated fields or plots using `{components.project-field.background}`, `{components.project-field.textColor}`, and `{components.project-field.rounded}`. A field sign carries the literal project title and a short story invitation. Growth or harvest cues remain restrained and only describe supplied meaning; do not turn fields into metrics, rankings, badges, or uniform case-study cards.

### Project story gate and depth fork

The project opening can resemble a field-side sign or gate. It gives `What is this?` and `Why did it need to exist?` visual priority, then offers balanced paths into atmosphere or technical craft. The fork is a choice of depth, not a completion step; both paths remain readable and directly reachable.

### Workshop, waiting room, and letterbox

These places share the visual grammar while retaining distinct moods: useful tools and benches for the Workshop, paper and window light for the Waiting Room, and a calm practical surface for the Letterbox. Keep the atmosphere spacious and specific without turning offers into a generic services grid, thoughts into a content feed, or contact into a pressure funnel.

### Forest, mountain, map, and lost platform

Forest paths use layered greens, trail marks, and open space for experiments and curiosity. Mountain views use horizon and distance for patient growth. The map is a clear route index with the same poetic/literal pairing as the board. The lost platform is a warm, spacious error surface oriented toward a return rather than a joke that obscures recovery.

## Do's and Don'ts

### Do:

- **Do** make the station, board, landscape, and welcome visible on arrival.
- **Do** pair every poetic place name with a literal label and a stable, readable route.
- **Do** use warm space, soft tonal layers, and a few carefully crafted details.
- **Do** let the station feel like home and the work feel cultivated in fields.
- **Do** preserve semantic equivalents for scenery, motion, discoveries, and route relationships.
- **Do** keep focus, touch targets, current location, and exits visually clear beneath the atmosphere.
- **Do** let visitors pause, return, and choose any destination without visual pressure.

### Don't:

- **Don't** open with a conventional portfolio hero, résumé pitch, performance claim, or dashboard.
- **Don't** make visitors decode metaphor before they can navigate.
- **Don't** hide essential identity, project, offer, thought, or contact information in easter eggs, hover, sound, or animation.
- **Don't** fill every surface with decoration, saturated color, competing motion, or heavy cards.
- **Don't** use terminal chrome, glitch effects, neon, glossy glass, or needless technical spectacle.
- **Don't** force a linear tour, timed departure, countdown, completion meter, or scroll hijack.
- **Don't** copy recognizable rural-anime characters, scenes, or assets; keep references atmospheric only.
- **Don't** invent personal details, project outcomes, services, or visual states merely to make a quiet route look full.
- **Don't** let motion, audio, pointer response, or a tiny hotspot become necessary for understanding or access.

## Asset provenance

- `public/images/lincie-countryside-arrival.webp` — original countryside arrival scene generated for LinCie with Gemini 3 Pro Image, then converted to WebP with `ffmpeg`; no external source imagery or text assets are included.
