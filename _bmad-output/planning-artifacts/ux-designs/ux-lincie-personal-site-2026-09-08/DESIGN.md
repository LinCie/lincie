---
name: LinCie Station House
status: partial
description: A warm Japanese rural station-house visual language for a personal world first and a portfolio second.
sources:
  - '_bmad-output/brainstorming/brainstorm-personal-website-vibe-direction-2026-09-08/brainstorm-intent.md'
  - '_bmad-output/brainstorming/brainstorm-personal-website-vibe-direction-2026-09-08/.memlog.md'
  - '_bmad-output/brainstorming/brainstorm-personal-website-content-routes-2026-09-08/.memlog.md'
updated: '2026-09-08'
colors:
  surface-sunlit: '#F7F2E8'
  surface-paper: '#FFFDF8'
  surface-station: '#E9DDC9'
  surface-field: '#DCE7C9'
  sky-morning: '#C9E0E2'
  ink-primary: '#2D332B'
  ink-secondary: '#5F665C'
  border-soft: '#C4B49D'
  field-green: '#6C895F'
  signal-terracotta: '#B8614B'
  signal-gold: '#D49A48'
typography:
  display-xl:
    fontFamily: 'Georgia, "Noto Serif", serif'
    fontSize: '56px'
    fontWeight: '400'
    lineHeight: '1.05'
    letterSpacing: '-0.02em'
  display-lg:
    fontFamily: 'Georgia, "Noto Serif", serif'
    fontSize: '40px'
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: '-0.015em'
  heading-md:
    fontFamily: 'Georgia, "Noto Serif", serif'
    fontSize: '28px'
    fontWeight: '400'
    lineHeight: '1.2'
  body-lg:
    fontFamily: '"Noto Sans", system-ui, sans-serif'
    fontSize: '18px'
    fontWeight: '400'
    lineHeight: '1.6'
  body:
    fontFamily: '"Noto Sans", system-ui, sans-serif'
    fontSize: '16px'
    fontWeight: '400'
    lineHeight: '1.6'
  label:
    fontFamily: '"Noto Sans", system-ui, sans-serif'
    fontSize: '13px'
    fontWeight: '600'
    lineHeight: '1.35'
    letterSpacing: '0.04em'
  meta:
    fontFamily: '"Noto Sans", system-ui, sans-serif'
    fontSize: '14px'
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: '6px'
  DEFAULT: '10px'
  md: '12px'
  lg: '20px'
  xl: '28px'
  full: '9999px'
spacing:
  '1': '4px'
  '2': '8px'
  '3': '12px'
  '4': '16px'
  '5': '20px'
  '6': '24px'
  '7': '32px'
  '8': '48px'
  '9': '64px'
  '10': '72px'
  gutter-mobile: '20px'
  gutter-desktop: '40px'
  content-max: '1152px'
  touch-target: '44px'
components:
  station-board:
    background: '{colors.surface-station}'
    foreground: '{colors.ink-primary}'
    border: '{colors.border-soft}'
    radius: '{rounded.lg}'
  route-sign:
    background: '{colors.surface-paper}'
    foreground: '{colors.ink-primary}'
    radius: '{rounded.md}'
  current-location:
    accent: '{colors.signal-terracotta}'
    text: '{colors.ink-primary}'
    radius: '{rounded.sm}'
  project-field:
    background: '{colors.surface-field}'
    foreground: '{colors.ink-primary}'
    radius: '{rounded.xl}'
  station-house:
    background: '{colors.surface-paper}'
    foreground: '{colors.ink-primary}'
    radius: '{rounded.lg}'
  discovery-object:
    background: '{colors.surface-station}'
    foreground: '{colors.ink-primary}'
    radius: '{rounded.md}'
  track-divider:
    color: '{colors.border-soft}'
  focus-ring:
    color: '{colors.signal-terracotta}'
---

# LinCie — Station House Design Spine

This document owns how LinCie's personal website looks. It is a visual contract for a warm Japanese rural train station and station house that acts as a personal world first and a portfolio second. The atmosphere is the heart; the work is encountered as part of a living journey.

**Status vocabulary:** `[DECISION]` records a direction explicitly chosen by LinCie or supplied as a requirement. `[PROPOSED]` is a useful starting treatment inherited from the route session, not a locked personal fact. `[ASSUMPTION]` fills an implementation gap and should be revisited if it conflicts with LinCie's taste. `[OPEN QUESTION]` identifies an input that is still missing.

## Brand & Style

### The visual premise

The page should feel like arriving at a small, cared-for rural station in warm morning light: a place to set out, return, rest, and notice how far one has traveled. It is cute, soft, warm, beautiful, calming, subtly alive, and spacious enough to breathe. The station is home. The station board is the living content index. The surrounding world is not scenery pasted behind a portfolio; it is the visual language through which LinCie's identity and work are met.

The emotional promise is the visual north star:

> **Welcome. You made it here. Take your time.**

The site should share happiness generously without asking visitors to perform, hurry, compare, or complete a tour. Gentle details—grass moving in a breeze, warm light, a distant sense of a train, a friendly living presence—should reward attention without competing with content. References such as *Yuru Camp* and *Non Non Biyori* are atmosphere references only: use their calm rural warmth as an inspiration, never their characters, scenes, or distinctive assets.

The engineered layer is quiet but exact. Alignment, route names, links, focus behavior, transitions, and content states should feel maintained and dependable beneath the cozy surface. Precision is a form of care, not a reason to add technical spectacle.

### Atmosphere and visual grammar

- **Station:** orientation, welcome, and home. The platform and station house establish the first frame.
- **Tracks and train:** continuity and movement. Use lines, thresholds, and directional relationships to connect places without implying a required order.
- **Rice fields:** cultivated projects. Projects should feel tended over time, not stacked as achievement cards.
- **Forest:** curiosity and unexplored paths. Its visual unknown is gentle and legible, never ominous or confusing.
- **Mountain:** patient future growth. It is a horizon, not a challenge meter or a promise list.
- **Cicadas:** persistent small voices of joy through changing seasons. They may be suggested through restrained ambient detail, not noisy decoration.

### Motion principles

Motion is optional atmosphere, never a prerequisite for understanding. The current direction is intentionally achievable with small CSS/Tailwind transitions; `[ASSUMPTION]` no GSAP choreography is needed for the first version.

- Let grass, foliage, light, or a distant train move slowly and at low amplitude. Motion should feel like breathing, not a show.
- Use short, intentional transitions for route changes, focus, and opening a discovery. Keep the destination readable during the transition.
- `[PROPOSED]` A subtle local response to pointer movement or focus may give the station a gentle gaze. It must read as recognition, never surveillance; it must not use a camera, tracking, or stored behavior.
- Never use a splash screen, countdown, forced wait, scroll hijack, or timed departure to control the visitor's route.
- Decorative motion must pause or disappear under reduced-motion preferences. The same information remains available as still content.
- Audio is not part of the visual contract. `[ASSUMPTION]` any wind, cicada, or train sound is off by default and remains optional.

## Colors

The following palette is an `[ASSUMPTION]` translated from the agreed sensory direction—warm morning light, fresh air, grass, rice fields, station wood, sky, and a small signal of welcome. Exact values and any dark-mode palette remain `[OPEN QUESTION]`.

- **Sunlit paper — `{colors.surface-sunlit}`** is the main canvas. It should feel like warm paper and morning air rather than a sterile white application background.
- **Clean paper — `{colors.surface-paper}`** is used for readable content surfaces, the station house, route notes, and text-first interiors. It gives content a quiet place to land.
- **Station wood — `{colors.surface-station}`** carries the board, small architectural surfaces, and tactile objects. Use it as a tonal layer, not as a heavy brown theme.
- **Field wash — `{colors.surface-field}`** identifies project terrain and cultivated work. It is a background cue, never the sole project-status signal.
- **Morning sky — `{colors.sky-morning}`** belongs to the open landscape and occasional atmospheric panels. It should not become a decorative blue UI chrome.
- **Deep moss ink — `{colors.ink-primary}`** is the default text and strongest structural color. Use it for all essential content and route labels.
- **Quiet ink — `{colors.ink-secondary}`** supports metadata and secondary explanations only when contrast remains legible. It must not carry essential information by itself.
- **Soft boundary — `{colors.border-soft}`** is a quiet divider for boards, tracks, fields, and controls. Keep it hairline-like and subordinate to space.
- **Field green — `{colors.field-green}`** suggests grass and cultivated growth. Use it for large decorative shapes, selected field cues, or paired labels; never rely on it alone to communicate state.
- **Station signal — `{colors.signal-terracotta}`** is a scarce action/focus/welcome accent. Pair it with text, shape, or a label so it is never the only state cue.
- **Warm glint — `{colors.signal-gold}`** is reserved for sunlight, a bell/light detail, or a small celebratory point of warmth. Do not use it for body text or dense UI decoration.

Do not place long text over busy landscape artwork. The text and the background must remain separable at every viewport and zoom level. Accent colors should be tested against their surface before implementation; if they fail text contrast, use them only as decoration or pair them with `{colors.ink-primary}`.

## Typography

The typography ramp is an `[ASSUMPTION]` designed to balance a human, story-like voice with precise wayfinding. The exact display family is `[OPEN QUESTION]`; the fallback stack must remain available, and any chosen web font must support the site's languages and loading constraints.

- **Display (`{typography.display-xl}`, `{typography.display-lg}`):** a warm serif for the welcome, place names, and a small number of major story headings. It gives the station house a personal, literary presence without turning every sentence into decoration.
- **Section heading (`{typography.heading-md}`):** serif for room, field, trail, or note headings. Use it sparingly enough that hierarchy remains clear.
- **Body (`{typography.body-lg}`, `{typography.body}`):** a neutral, highly legible sans-serif for explanations, project story, technical craft, forms, and all route instructions.
- **Labels (`{typography.label}`):** concise station-style labels. Letter spacing is modest, not shouty; labels are not required to be all caps.
- **Metadata (`{typography.meta}`):** dates, status, route context, and quiet notes. Never use metadata styling to hide essential meaning.

Poetic place names always share a nearby literal label in body or label typography. Decorative lettering, untranslated Japanese text, or an image of a sign may supplement a label but cannot replace it. Do not use the serif display role for technical detail, long paragraphs, or every card title.

## Layout & Spacing

The layout is a responsive web composition built around arrival, orientation, and optional depth. `[ASSUMPTION]` the site is mobile-first and works from a narrow phone viewport through a wide desktop browser; the exact breakpoint values follow the existing Tailwind configuration.

### Arrival composition

The first view establishes the station, board, surrounding landscape, LinCie's identity, and vocation before asking for a choice. The welcome message should be visible without a hover, animation, or tour. The board is the primary content index, not a hidden menu.

On wide screens, the station can sit within an expansive landscape with the board as the clearest information object and tracks/paths connecting outward. On small screens, the scene may simplify or stack, but the board, welcome, route labels, and first content invitation come before atmospheric extras. There is no requirement to reproduce a detailed illustration when it would make the information hard to reach.

### Interior composition

- Keep a readable content column within `{spacing.content-max}` and use `{spacing.gutter-mobile}` / `{spacing.gutter-desktop}` as minimum side breathing room.
- Establish one clear focal region per route: the room, field, workshop, waiting room, letterbox, forest path, or mountain overlook.
- Use `{spacing.7}` to `{spacing.10}` between major sections so visitors can pause. Use `{spacing.2}` to `{spacing.4}` between a label and the content it qualifies.
- Let tracks, fences, windows, and field edges act as dividers. They should guide the eye, not become a diagram the visitor must decode.
- Prefer one strong scene plus text over a dense grid of equal cards. A project index may use several fields, but it must remain a landscape/content index rather than a dashboard.
- Keep navigation, current location, and exits in predictable positions. Atmosphere can vary around that structure.

### Responsive layout rules

- **Small screens:** collapse the visual board into a semantic, vertically ordered route list; stack scene and content; keep touch targets at least `{spacing.touch-target}`. Do not hide route depth or essential copy behind tiny hotspots.
- **Medium screens:** allow a board/scene relationship and modest two-column compositions where reading order remains obvious.
- **Large screens:** use open landscape space and asymmetry carefully; never let decorative distance push the first meaningful heading below the fold without a reason.
- **All screens:** no horizontal scrolling for content, no text baked into images, and no layout that depends on a pointer.

## Elevation & Depth

Depth comes from warm tonal layering, whitespace, framing, and the relationship between architecture and landscape. `{colors.surface-station}`, `{colors.surface-field}`, and `{colors.surface-paper}` should distinguish places without making every element a card.

Use shadows rarely: a broad, low-opacity ambient shadow may suggest a physical board or object, but hierarchy should come from position, type, and tone. Avoid glossy panels, hard black drop shadows, neon glow, glassmorphism, and 3D depth that makes the station feel like a game interface. Borders use `{colors.border-soft}` at the lightest legible weight; tracks and dividers should not become cages around content.

## Shapes

The shape language joins quiet station architecture with soft countryside forms.

- Use `{rounded.sm}` for small controls, route markers, and compact labels.
- Use `{rounded.md}` for route signs, notes, and discovery objects.
- Use `{rounded.lg}` and `{rounded.xl}` for the station board, house, and broad field shapes.
- Reserve `{rounded.full}` for a small dot, bell, sun, pet detail, or status marker—not for every button or content container.
- Combine straight or gently rounded architectural edges with organic field, grass, cloud, and mountain silhouettes. Organic shapes are background language, not interactive puzzles.
- Keep hit areas larger than the visible ornament. A tiny bell or seed packet may look small, but its interactive wrapper must meet `{spacing.touch-target}`.

## Components

These are visual contracts. Behavioral contracts live in `EXPERIENCE.md`.

### Station arrival scene

The arrival scene contains the platform/station, the board, a welcoming line, a calm landscape, and a restrained living detail such as grass or light. The station and board must remain visually identifiable when artwork is simplified. The software-engineering-trainee identity is stated plainly in the content layer, while the system's polish carries capability quietly.

The scene is a threshold, not a splash screen. Leave room around the welcome and make the first action feel like an invitation rather than a conversion prompt.

### Station board

The board is the most important index component and uses `{components.station-board.background}`, `{components.station-board.foreground}`, `{components.station-board.border}`, and `{components.station-board.radius}`. Each entry has:

1. a poetic destination name;
2. a clear literal label;
3. a concise invitation or current notice; and
4. a visible indication of the current place when relevant.

`[PROPOSED]` Board groupings such as departures, open rooms, seasonal notices, and quiet discoveries may help the index feel alive. They are optional presentation, not a new information hierarchy. The board must remain useful as a simple list.

### Route sign and route rail

A route sign uses `{components.route-sign.background}`, `{components.route-sign.foreground}`, and `{components.route-sign.radius}`. Place names can be expressive, but the literal label and destination relationship remain visually adjacent. A route rail or breadcrumb uses track-like lines and `{components.track-divider.color}` without making the line the only navigation cue.

### Current-location marker

The `You are here` marker uses `{components.current-location.accent}` as a small signal beside explicit text in `{components.current-location.text}`. It should look like a friendly acknowledgement, not a warning, score, or progress meter. `aria-current` and text provide the semantic state.

### Station house / About Me

The station house should feel lived-in, intimate, and specific to LinCie rather than like a profile template. A bedroom nook is the emotional anchor, with LinCie's bed as the visual center. Surrounding objects can hold everyday comforts, meaningful interests, optional favorites, and a friendly pet. The exact pet, objects, routines, and additional favorites are `[OPEN QUESTION]` and must not be filled with invented facts.

Use `{components.station-house.background}`, `{components.station-house.foreground}`, and `{components.station-house.radius}` for the primary room surface. Keep object illustrations or photographs subordinate to the note they open. The room should still communicate its essential introduction without requiring visitors to click every object.

### Discovery object and favorite note

A seed packet, book, postcard, shelf item, or other meaningful object may act as an optional discovery. `[PROPOSED]` This is a noticing interaction, not a puzzle or collection system. Use `{components.discovery-object.background}`, `{components.discovery-object.foreground}`, and `{components.discovery-object.radius}`. The revealed note should be beside or immediately associated with the object and explain why the favorite matters.

The first known favorite is Stardew Valley. Its note should preserve the established reason: it offers freedom to build, style, and play creatively. The note must also have a visible, ordinary route so discovering the object is never the only way to learn it.

### Rice field / project tile

Projects are represented as fields or plots using `{components.project-field.background}`, `{components.project-field.foreground}`, and `{components.project-field.radius}`. A field may show a restrained growth or harvest cue `[PROPOSED]`, but no crop stage should imply a business status unless LinCie supplies that meaning. A field sign carries the project's literal title and short story invitation. Avoid metrics, ranking, badges, or a uniform case-study card grid.

### Project story gate and depth fork

The project opening should visually resemble a field-side sign or gate. It presents `What is this?` and `Why did it need to exist?` before deeper material. A simple, balanced fork can lead to atmosphere/feeling and technical craft. The fork is a choice of depth, not a completion step.

### Workshop, waiting room, and letterbox

These places share the same visual grammar but keep distinct atmospheres:

- **Workshop:** useful tools, benches, and clear situations LinCie may help with; avoid a generic services grid.
- **Waiting room:** paper, notebooks, window views, or small notices for personal thoughts; avoid a content-factory feed.
- **Letterbox:** a calm, practical contact surface with enough room for intent, expectations, and a simple note.

The actual offerings, notes, contact channels, and response expectations are `[OPEN QUESTION]`.

### Forest, mountain, map, and lost platform

Forest paths use layered greens, trail marks, and open space for experiments and curiosity. Mountain views use horizon and distance for future growth. Neither should use locks, progress bars, or ominous darkness to manufacture stakes.

The map is a clear, complete route index with the same poetic/literal pairing as the station board. The lost platform is a warm error surface: spacious, legible, and oriented toward a return rather than a joke that obscures recovery.

### Notices and quiet states

A notice looks like a small posted paper or station announcement, not a notification badge. Empty, unfinished, and unavailable content uses the same warm surfaces and honest language. Never simulate personal content merely to make a quiet route look full.

## Do's and Don'ts

| Do | Don't |
|---|---|
| Make the station, board, landscape, and welcome visible on arrival. | Open with a conventional portfolio hero, résumé pitch, or performance claim. |
| Pair every poetic place name with a literal label and stable route. | Make visitors decode metaphor before they can navigate. |
| Let the station feel like home and the work feel cultivated in fields. | Turn the world into a dashboard, achievement grid, or generic case-study template. |
| Use warm space, soft tonal layers, and a few carefully crafted details. | Fill every surface with decoration, saturated color, or competing motion. |
| Use precise spacing, links, states, and transitions as quiet evidence of engineering care. | Announce technical sophistication with terminal chrome, glitch effects, or needless complexity. |
| Keep discoveries optional, meaningful, and text-equivalent. | Hide essential identity, project, offer, or contact information in easter eggs. |
| Let the visitor pause, return, and choose any destination. | Force a linear tour, timed departure, countdown, or “complete the experience” meter. |
| Use real, direct, friendly host language. | Use polished marketing language, pressure, fake intimacy, or invented personal details. |
| Preserve the same readable design when motion, sound, or pointer effects are removed. | Depend on hover, autoplay audio, parallax, or animation to explain the site. |
| Treat rural/anime references as mood references and create a world that belongs to LinCie. | Copy recognizable characters, scenes, assets, or a generic “cozy Japan” stereotype. |

### Visual open questions

- `[OPEN QUESTION]` Which exact display and body font families, if any, should be loaded rather than using the fallback stacks?
- `[OPEN QUESTION]` Should the first release support a dark/night palette in addition to the warm morning palette?
- `[OPEN QUESTION]` Will the world use original illustration, photography, CSS shapes, or a combination?
- `[OPEN QUESTION]` What are the actual pet details, everyday comforts, additional favorites, offerings, contact channels, and project inventory that will populate the components?
