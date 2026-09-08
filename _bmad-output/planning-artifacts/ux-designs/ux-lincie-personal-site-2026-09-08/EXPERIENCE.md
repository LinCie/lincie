---
name: LinCie Station House Experience
status: partial
description: A welcoming, directly navigable personal-world experience where visitors can wander from a rural station into LinCie's home, work, curiosity, and future.
sources:
  - '_bmad-output/brainstorming/brainstorm-personal-website-vibe-direction-2026-09-08/brainstorm-intent.md'
  - '_bmad-output/brainstorming/brainstorm-personal-website-vibe-direction-2026-09-08/.memlog.md'
  - '_bmad-output/brainstorming/brainstorm-personal-website-content-routes-2026-09-08/.memlog.md'
updated: '2026-09-08'
---

# LinCie — Station House Experience Spine

This document owns how LinCie's personal website behaves. It pairs with `DESIGN.md`, which owns the visual identity and tokens. The site is a personal world first and a portfolio second: visitors arrive at a warm station, understand who LinCie is and that they are a software engineering trainee, then choose whether to rest, wander, meet LinCie, encounter projects, read thoughts, or make contact.

**Status vocabulary:** `[DECISION]` is explicit direction from LinCie or the request. `[PROPOSED]` is a route or treatment to validate later. `[ASSUMPTION]` is the smallest practical implementation default. `[OPEN QUESTION]` is missing content or product information, not permission to invent it.

## Foundation

- **Form factor:** `[ASSUMPTION]` responsive public website for phone, tablet, and desktop browsers. The existing Astro/Tailwind project can implement this as semantic content with progressive enhancement; the experience must remain understandable without client-side animation.
- **Visual reference:** `DESIGN.md` is the identity contract. Use `{colors.surface-sunlit}` as the calm base, `{colors.ink-primary}` for essential text, `{rounded.md}` and `{rounded.lg}` for place surfaces, and `{spacing.touch-target}` as the minimum interactive target.
- **Core posture:** welcoming, safe, comfortable, curious, playful, and free to wander. The station is home; the board is the living content index.
- **Navigation posture:** direct links and browser history are first-class. The metaphor is a presentation layer over predictable information architecture, not a puzzle or a sequence of gates.
- **Engineering posture:** route structure, focus behavior, states, and responses should be precise and intentional beneath the cozy surface. The technical quality is felt as care rather than announced as spectacle.
- `[ASSUMPTION]` There is no account, sign-up, or behavior tracking in the first release. An imaginary ticket, if used, is a visual-only session gesture and never a prerequisite for content.
- `[OPEN QUESTION]` Confirm whether the first release needs dark/night mode, audio, multilingual content, or any persistent personalization.

## Information Architecture

The following is the proposed route structure requested as the starting point. The five content branches are established priorities; the poetic place names, exact grouping, and launch order remain `[PROPOSED]` until the real content inventory is known.

### Route map

| Path | Place name | Literal label | Purpose | Status |
|---|---|---|---|---|
| `/station` | Platform and Station Board | Station Board / all destinations | Arrival, welcome, identity, vocation, current notices, and the living content index. | `[PROPOSED]` entry surface |
| `/about` | Station House | About Me | A highly personal visit through the bedroom nook, LinCie's bed, everyday comforts, a friendly pet, interests, and optional favorites. | `[DECISION]` branch; `[PROPOSED]` place treatment |
| `/projects` | Rice Fields | Projects | A cultivated index of projects, with each field or plot leading to a story-first project experience. | `[DECISION]` branch; `[PROPOSED]` place treatment |
| `/offers` | Workshop | Things LinCie offers | Situations LinCie may help with, followed by relevant capability, boundaries, and a route to connect. | `[DECISION]` branch; `[PROPOSED]` place treatment |
| `/thoughts` | Waiting Room | Personal Thoughts | Human-sized notes, observations, and reflections connected to a life and place rather than a content feed. | `[DECISION]` branch; `[PROPOSED]` place treatment |
| `/connect` | Letterbox | Ways to connect | Clear, low-pressure ways to say hello, discuss a project, or explore working together. | `[DECISION]` branch; `[PROPOSED]` place treatment |
| `/forest` | Forest Paths | Experiments and curiosity | Unexplored questions, experiments, learning, inner depth, and unfinished paths. | `[PROPOSED]` secondary destination |
| `/mountain` | Mountain Overlook | Future growth | Things LinCie is growing toward, learning, or hoping to explore. | `[PROPOSED]` secondary destination |
| `/map` | All Routes | Route map | A complete, literal index for visitors who want certainty or a direct overview. | `[PROPOSED]` support route |
| `/lost-platform` | Lost Platform | Unknown destinations | A warm, honest not-found state with recovery links. | `[PROPOSED]` error route |

`[ASSUMPTION]` A bare-domain `/` should render or redirect to `/station` so a visitor can arrive through the station even when they do not know the route. The implementation can choose between a server redirect and equivalent arrival rendering without changing this experience contract.

### Route hierarchy and URL rules

- The station board is a hub, not a gate. It may recommend a destination, but no destination requires visiting it first.
- Poetic names belong in headings and navigation labels alongside literal labels. URLs use stable, semantic, predictable segments.
- `[PROPOSED]` Project children use `/projects/[slug]` for the field gate/story hub, with `/projects/[slug]/atmosphere` and `/projects/[slug]/craft` as directly linkable depth routes. If implemented as sections instead, preserve the same visible labels and return paths.
- `[PROPOSED]` Individual thoughts, forest trails, mountain entries, and favorite notes may use literal child paths such as `/thoughts/[slug]`, `/forest/[slug]`, `/mountain/[slug]`, and `/about/favorites/[slug]`. Exact child routes depend on the content model.
- Deep links render the requested content immediately. They never require a visitor to restart at `/station` or follow an implied tour.
- Every route exposes a short path, optional depth, a current-location cue, and clear exits. `[PROPOSED]` A default three-exit pattern is: **Station Board**, the current branch index, and the immediate parent or context.
- Browser Back and Forward retain ordinary expectations. Route transitions must not replace history for ordinary navigation or trap the visitor in a scene.

### Station board contract

The board is the living content index. Every entry contains:

1. a poetic destination name;
2. a literal label;
3. a short description or current notice;
4. a direct URL; and
5. a current-location indicator when the entry represents the current place.

`[PROPOSED]` Grouping entries as departures, open rooms, seasonal notices, and quiet discoveries can give the board a sense of life. These are visual groupings, not required navigation steps. A plain route list and `/map` remain the complete alternative for visitors who do not want to interpret the scene.

“Living” means the board can reflect newly tended projects, thoughts, notices, or routes as content changes. `[ASSUMPTION]` It does not require real-time updates, accounts, or urgency cues.

## Voice and Tone

The station speaks like a real host: direct, friendly, sincere, reassuring, and unhurried. It offers care without pretending to know a visitor's story. The tone holds hope without denial: slow progress counts, what someone tends may become beautiful, and a difficult season is not the whole story.

### Microcopy rules

| Use | Prefer | Avoid |
|---|---|---|
| Arrival welcome | **“Welcome. You made it here. Take your time.”** `[DECISION]` | “Welcome to my portfolio.” |
| Current location | `[PROPOSED MICROCOPY]` “You are here: Station House / About Me.” | A breadcrumb made only of icons or scenery. |
| Depth choice | `[PROPOSED MICROCOPY]` “See the atmosphere” / “Inspect the craft.” | “Unlock the full case study.” |
| Quiet route | `[PROPOSED MICROCOPY]` “The room is quiet for now. You can return to the board or wander elsewhere.” | Fake entries or an apologetic dead end. |
| Unfinished path | `[PROPOSED MICROCOPY]` “This path is still growing.” | “Coming soon” with no context or promise. |
| Discovery | `[PROPOSED MICROCOPY]` “A small favorite, if you feel like looking.” | “Find all five.” or a reward/challenge. |
| Contact success | `[PROPOSED MICROCOPY]` “Your note has been placed in the letterbox.” Then state what happens next. | “Message sent!” without practical expectations. |
| Error | `[PROPOSED MICROCOPY]` “This train does not stop here.” Provide direct recovery links. | A joke that hides the 404 meaning. |

Do not use pressure, scarcity, achievement language, engagement bait, false intimacy, or polished marketing claims. Do not write unconfirmed biography, availability, services, pet details, favorites, project outcomes, or response times. The actual content for those items is `[OPEN QUESTION]` until LinCie supplies it.

## Component Patterns

Behavioral rules are below; visual anatomy and token choices live in `DESIGN.md.Components`.

### Arrival platform

- Land visitors on a quiet arrival view, not an animated splash or a forced choice.
- Show the welcome, the station/landscape, the station board, and a plain statement of LinCie's identity and software engineering trainee role before or alongside any invitation to explore.
- Offer three equally valid gestures `[PROPOSED]`: look at the board, pause with the welcome, or enter the station house. Do not rank them as a funnel.
- A station light, bell, breeze, or gentle gaze may acknowledge presence, but no interaction is required to continue.
- The board's textual route list remains available when artwork, motion, audio, or JavaScript is unavailable.

### Station board and route entry

- Each route entry is a real link with a stable `href`; the whole labeled entry is clickable/tappable, not only a tiny icon or hotspot.
- Show the poetic name and literal label together. The literal label explains the destination before activation.
- The current entry uses visible text plus `aria-current="page"`; `{colors.signal-terracotta}` is supplementary, never the only cue.
- `[PROPOSED]` A current notice can highlight recently tended content, but it must not become a notification counter, urgency signal, or moving target.
- On interior pages, provide a compact, predictable link back to the board and a visible route rail or breadcrumb.

### Current-location cue and exits

Every interior route begins or ends its first content block with a readable current-location cue. The cue identifies both place and literal content type. `[PROPOSED]` A concrete three-exit pattern provides:

- **Station Board** — return to the main index;
- **Branch index** — return to projects, thoughts, offers, or another relevant collection; and
- **Immediate parent/context** — return to the room, field, trail, or note from which the visitor came.

The proposed exits may be combined when two destinations are the same page, but every route must still provide clear ways to return to the station, return to its branch, and step back one level wherever those contexts differ.

### Station House / About Me

The route is a personal visit, not a résumé scan. Its short path introduces LinCie and leads visitors into the established bedroom nook, with LinCie's bed as the emotional anchor. Additional content can be encountered through everyday comforts, bedside details, the friendly pet, and meaningful interests.

- Keep a readable introduction and the existence of key content visible; do not require object hunting to learn that About Me exists.
- The pet may greet visitors or offer a small nonessential response. It is never a gatekeeper, quiz, or required click.
- Optional favorites can be hidden in meaningful objects, but each favorite also has a visible non-discovery path.
- The first known discovery is Stardew Valley. Its note must explain that it matters because of the freedom to build, style, and play creatively.
- The exact pet, room objects, everyday comforts, interests, and favorites beyond Stardew Valley are `[OPEN QUESTION]`.

### Rice Fields / Projects

The project index is a landscape of cultivated work. It should support browsing without becoming a progress dashboard.

- A project entry names the project literally and provides a short human invitation.
- `[PROPOSED]` Field appearance, growth stage, or harvest language can communicate a supplied project state, but it cannot substitute for words or imply status LinCie has not defined.
- The collection can distinguish current, growing, or harvested work only when those states are real and supplied.
- Keep related work and a return to the field map available from project detail.

### Project experience

The default project experience preserves this five-part structure:

1. **What is this?** — a plain explanation of the project;
2. **Why did it need to exist?** — the need, context, or motivation;
3. **Atmosphere / feeling** — how the project should feel and what experience it creates;
4. **Technical craft** — implementation, constraints, decisions, and engineering details;
5. **Return** — the project fields, related work, or station board.

The story questions come first in the visual and reading order. Visitors may then choose atmosphere or technical craft; the structure does not require them to read every section. Depth links are optional, equal in status, and directly linkable. If a project has no atmosphere or craft content yet, state that honestly rather than displaying an empty shell.

### Workshop / Things LinCie offers

Enter through a visitor situation rather than a skill list `[PROPOSED]`: what someone is carrying, making, or trying to understand. Then show only confirmed ways LinCie can help, relevant examples, boundaries, and a low-pressure path to connect. The actual offers, fit criteria, availability, pricing, and boundaries are `[OPEN QUESTION]`; the site must not imply them.

### Waiting Room / Personal Thoughts

Present personal thoughts as notes left at the station: a single note is a human-sized reading experience, and a literal title/context comes before its poetic setting. A recent index and literal topics preserve findability. `[PROPOSED]` Weather, season, or emotional texture can be a secondary browse mode if LinCie has enough real notes to support it. It must not turn into a streak, publishing calendar, or engagement feed.

### Forest Paths and Mountain Overlook

Forest paths contain curiosity, experiments, learning, inner depth, and paths not yet taken. Mark an experiment as active, quiet, or unfinished only when that state is truthful. A quiet trail explains its state and links elsewhere; it is not a fake dead end.

The mountain is an overlook for future growth and patient aspiration. Show what LinCie is learning or growing toward only when supplied. Do not turn it into a roadmap, promise list, countdown, or achievement ladder.

### Letterbox / Ways to connect

Offer clear intents `[PROPOSED]` such as saying hello, discussing a project, exploring collaboration, or writing an open note. Each intent should lead to the simplest appropriate channel. If a form is used, label it plainly, preserve its contents on error, and explain what happens after submission. The actual channels and response expectation are `[OPEN QUESTION]`.

### All Routes and Lost Platform

- `/map` lists every public destination, including optional discovery areas, with poetic and literal labels and direct links. It is the certainty-first alternative to visual wandering.
- `/lost-platform` returns a real not-found status while explaining the recovery in station language. Provide links to `/station`, `/map`, and the five core branches. Do not redirect every unknown path silently to the home page.

## State Patterns

| State | Behavior and content |
|---|---|
| First arrival | Render the welcome, station identity, board, and landscape without a full-screen loader or timed animation. The first meaningful heading and links are available immediately. |
| Slow load or JavaScript unavailable | Preserve semantic headings and ordinary links. Decorative scene layers may arrive later or remain absent; the route must still be usable. `[ASSUMPTION]` Content is primarily static or server-rendered. |
| Current route | Mark the route with readable `You are here` text and `aria-current`. Keep the board/branch index and clear exits visible. |
| Quiet or empty room | Say what is actually quiet and offer neighboring routes. Never create invented thoughts, projects, favorites, offers, or future goals to fill space. |
| Unfinished forest/project depth | Name the unfinished or unavailable layer honestly, retain the story that exists, and offer the field, parent, board, or related route. |
| Closed discovery | The ordinary About/favorites path remains visible. The object is an optional enhancement, not a missing-content state. |
| Open discovery | Reveal the favorite note in context, including why it matters, and provide a direct close/back route. Do not track completion or show collection counts. |
| Contact validation error | Keep entered values, identify the affected field in text, move focus appropriately, and explain how to correct it. Do not replace the note with a reset form. |
| Contact submission success | Confirm the note was accepted only when the channel actually confirms it. State the next step and expected timing when known; otherwise say that timing is `[OPEN QUESTION]` rather than guessing. |
| Contact/network failure | Keep the message available for retry and provide an alternate confirmed contact route if one exists. Do not imply that a message was sent when it was not. |
| Not found | Use `/lost-platform`, an HTTP 404 response, a clear literal explanation, and direct recovery links. |
| Reduced motion / quiet mode | Remove or freeze decorative motion and keep all route links, copy, current-location cues, and content available. `[PROPOSED]` A quiet-mode control may reduce ambient decoration further without changing IA. |

## Interaction Primitives

### Navigation and reading

- Prefer native links, headings, lists, and browser behavior over custom scene navigation.
- A route change may have a small fade or track-like transition, but it must never delay reading or intercept Back/Forward.
- The first screen has no forced linear tour. “Next” can be offered as an optional suggestion, never as the sole exit.
- Use visible text for place, destination, and action. Icons or illustrations supplement, not replace, labels.
- Keep the default reading path short. Put optional depth after the story or beside it so skimmers and wanderers are equally considered.

### Pointer, touch, and keyboard

- Tap/click a labeled route entry to navigate. Hover can add warmth or reveal a nonessential detail, but no essential action is hover-only.
- Interactive wrappers meet `{spacing.touch-target}` even when the visible object is a small bell, seed packet, pet, or sign.
- Tab order follows the reading order: skip link, page navigation/board, current location, main content, optional depth, and exits.
- `Enter` or `Space` activates native controls; `Escape` closes a discovery disclosure or optional overlay without navigating away. Avoid custom keyboard shortcuts in the first release `[ASSUMPTION]`.
- Do not use drag, precision clicking, device tilt, pointer tracking, or a visual hotspot as the only way to find a route.

### Discovery and playful details

Discovery is noticing, not solving. A meaningful object may open a note, but the note is also reachable through an ordinary labeled link. Any local gaze or response is ephemeral, decorative, and disabled under reduced motion; it never observes, profiles, or stores the visitor. Optional `[PROPOSED]` “Surprise me” can choose from meaningful, available destinations, but it must be clearly labeled, nonrandom in its safety implications, and never required.

### Motion and sound

- Use restrained opacity/transform transitions and gentle environmental movement in line with `DESIGN.md`.
- Do not autoplay cicadas, wind, bells, or trains. `[ASSUMPTION]` if sound is added, it starts off, has a visible keyboard-accessible control, and does not carry essential information.
- Respect `prefers-reduced-motion` and provide the same route and content without movement.
- Never use a countdown, delayed departure, scroll hijack, or animation lock to make the visitor wait.

### Forms and external links

- A contact form, if supplied, uses explicit labels, input purpose, plain validation, and a confirmation state.
- External social/contact links identify where they go and open according to normal browser expectations; do not hide external destinations behind station metaphors.
- Do not add an imaginary ticket, newsletter capture, cookie prompt, or account wall merely to make the world feel more real.

## Accessibility Floor

The cozy visual layer must have an equally complete semantic layer. The target is `[ASSUMPTION]` WCAG 2.2 AA behavior across supported browsers; visual contrast is governed by `DESIGN.md`.

- Use landmarks (`header`, `nav`, `main`, and `footer`) and a logical heading hierarchy. The station board is an accessible navigation list, not an image map or canvas-only control.
- Provide a skip link to main content. Every link and control has an accessible, visible-enough name; poetic labels are accompanied by literal labels.
- Use `{colors.ink-primary}` for essential text and verify all text/background pairs before implementation. Never communicate current route, project state, availability, or errors by color alone.
- Keep focus visible with `{components.focus-ring.color}` or an equivalent contrast-safe treatment. Focus must not be removed for pointer polish. No keyboard trap; `Escape` returns from any temporary disclosure or overlay.
- Support keyboard navigation, screen readers, touch, zoom, and high-contrast or forced-color modes. The board, map, route rail, project depth, discoveries, and error recovery all have text equivalents.
- Use `aria-current="page"` for the active route and `aria-expanded` only for an actual collapsible disclosure. Prefer native HTML over redundant ARIA.
- Decorative grass, light, scenery, and sound controls are hidden or labeled appropriately. Meaningful illustrations have concise alt text; text baked into an image is repeated in HTML.
- Interactive targets are at least `{spacing.touch-target}` on their visual hit area. Do not place essential text inside tiny decorative objects.
- Respect `prefers-reduced-motion`. Do not make arrival recognition, a pet response, a moving train, or a discovery animation necessary to understand or activate content.
- If a form exists, associate labels and errors with fields, identify invalid fields in text, preserve values, and announce submission status without stealing context.
- Do not time out reading, discovery, or contact actions. If a session-only surprise action exists, visitors can leave it at any time.
- Honor browser text scaling and reflow. At large text sizes, preserve full route labels, exits, project questions, and contact instructions without truncation.
- `[OPEN QUESTION]` Confirm whether the site will include Japanese or other languages. If so, define language switching, translated literal labels, and appropriate `lang` attributes before content implementation.

## Responsive & Platform

`[ASSUMPTION]` Use the project's responsive web conventions; the ranges below describe behavior rather than locking exact CSS breakpoints.

| Surface | Layout and interaction behavior |
|---|---|
| Small phone | Stack station, welcome, and board. Replace any illustrated board composition with a clearly ordered route list. Keep `{spacing.gutter-mobile}` breathing room, direct text labels, all depth links, and no horizontal scrolling. |
| Tablet / small laptop | Allow the station scene and board to share space when reading order remains clear. Keep the board and current-location cue prominent; do not let atmospheric artwork consume the route. |
| Large desktop | Use the expansive landscape, station-house framing, and track relationships. Keep the primary content within `{spacing.content-max}` and retain a visible route index/return path. Asymmetry is decorative, not an information barrier. |
| Touch or coarse pointer | Use full labeled targets, no hover-only content, and no precision hotspot requirements. |
| Fine pointer | Hover may add a slight `{rounded.md}` route-sign lift or environmental response, but focus and click behavior remain complete without it. |
| Zoom / reflow | Content reflows into one column when necessary. The board, literal labels, current location, project structure, and exits remain available before decorative detail. |
| Reduced motion / forced colors | Freeze or remove atmosphere effects while preserving semantic content, focus, borders, labels, and route relationships. |

Use standard browser back/forward, links, bookmarks, and deep links. Do not make the website behave like a native app by hijacking scroll, disabling context actions, or hiding URLs.

## Inspiration & Anti-patterns

### Inspiration to keep

- The calm rural warmth and everyday observation associated with *Yuru Camp* and *Non Non Biyori*, treated as emotional references rather than source material.
- A Japanese rural station as a threshold: people can begin, return, pause, and recognize their journey.
- A lived-in station house where small details communicate a person more honestly than a résumé.
- A maintained railway system as a metaphor for precise engineering beneath a soft surface.
- Fields, forest, mountain, and cicadas as a coherent portrait of cultivated work, curiosity, future growth, and persistent joy.

### Anti-patterns to reject

- Generic portfolio hero, résumé-first landing page, project dashboard, service funnel, or repeated case-study template.
- Forced guided tour, linear progress, countdown, “complete your visit” prompt, or a next-page-only route.
- Essential information hidden behind easter eggs, visual hotspots, hover, sound, or animation.
- Gamification: badges, scores, collections, streaks, unlocks, or rewards for exploring personal details.
- Noisy decoration, autoplay audio, aggressive parallax, glitch effects, excessive scroll choreography, or surprise motion.
- Surveillance-like personalization, camera access, stored gaze behavior, or an account wall for a public visit.
- Invented biography, generic filler, fake project detail, or polished claims that LinCie has not supplied.

## Key Flows

The protagonists below are fictional visitors used to make the contract concrete. They do not add facts about LinCie.

### Flow 1 — Arrive and choose freely: Mina at the station

1. Mina opens `/station` from a direct link during a short break.
2. The first view shows the welcome, the station, the surrounding landscape, the board, and a plain statement that LinCie is a software engineering trainee.
3. She can read the welcome, look at the board, or enter the station house. None is presented as the correct first step.
4. She selects a board entry. Its poetic destination name, literal label, short invitation, and stable URL make the destination understandable before navigation.
5. On the destination, `You are here` and clear exits show how to return or branch.
6. **Climax:** Mina feels acknowledged rather than evaluated, and knows she can pause or wander without getting lost.

Failure path: if decoration or JavaScript is delayed, the semantic welcome and route list still provide the same first decision.

### Flow 2 — Meet the person: Jun visits About Me

1. Jun chooses `/about` from the station board because he wants a human introduction rather than a résumé.
2. The Station House opens with a short, direct introduction and a clear route into the established bedroom nook.
3. LinCie's bed anchors the room's emotional context. Jun reads about confirmed everyday comforts and encounters the friendly pet without needing to activate it.
4. An optional object or visible favorites route leads him to the Stardew Valley note.
5. The note explains the established reason it matters: freedom to build, style, and play creatively.
6. Jun returns through the About route, station board, or immediate room context; no room-by-room tour is required.
7. **Climax:** Jun leaves with a specific sense of a person and their warmth, not a generic personal-brand summary.

Content guard: actual objects, pet details, comforts, and favorites beyond Stardew Valley remain open until supplied.

### Flow 3 — Understand a project at two depths: Rhea in the rice fields

1. Rhea lands directly on `/projects/[slug]` from a shared project link.
2. The field gate identifies the project literally and shows `What is this?` followed by `Why did it need to exist?`.
3. She reads the short human story without being asked to inspect implementation details.
4. She chooses either atmosphere/feeling or technical craft. The other path remains available but is not required.
5. If she opens technical craft, she encounters only confirmed constraints, decisions, implementation, and lessons. If a layer is quiet, the page says so and keeps the story intact.
6. The final area offers the project fields, related work, and station board rather than only a single next project.
7. **Climax:** Rhea understands both the reason the project exists and, if she chooses, the care in how it was engineered—without being pushed through a case-study funnel.

### Flow 4 — Find a possible fit: Sol at the Workshop

1. Sol opens `/offers` because they want to understand how LinCie might help.
2. The Workshop begins with visitor situations `[PROPOSED]`, not an unexplained list of tools or claims.
3. Sol chooses a situation and sees only confirmed capabilities, examples, boundaries, and fit information.
4. If the fit is unclear, the page offers a low-pressure route to `/connect`; it does not pressure Sol to submit a message.
5. Sol can return to the station board or visit a relevant project for evidence.
6. **Climax:** Sol knows what conversation would be appropriate and what LinCie has or has not offered, with no sales pressure.

Content guard: actual offerings, availability, and boundaries are open questions and must be populated before this flow is treated as factual.

### Flow 5 — Wander through thought, curiosity, and future: Aya between trains

1. Aya enters `/thoughts` and reads one personal note in a quiet waiting-room context.
2. She uses the literal topic or recent index to choose another note, or follows an optional sensory/seasonal path `[PROPOSED]`.
3. From the station board or an explicit link, she visits `/forest` and opens an experiment or unfinished trail.
4. The trail names its state honestly and offers a route to `/mountain` or back to the board without pretending that curiosity has a finish line.
5. At the Mountain Overlook, Aya reads supplied future-growth material as an invitation to watch, not a promise or commitment.
6. **Climax:** Aya experiences the site as a living personal world—thoughtful, curious, and still becoming—rather than a frozen list of accomplishments.

### Flow 6 — Leave a safe, practical note: Amara at the Letterbox

1. Amara opens `/connect` from a project or the station board.
2. She sees clear contact intents `[PROPOSED]`: say hello, talk about a project, explore working together, or another open note.
3. She chooses the simplest confirmed channel. If it is a form, labels and expectations are visible before she writes.
4. On validation failure, her note remains in place and the affected field is explained in text.
5. On confirmed submission, the Letterbox states what happened and what comes next. Unknown response timing is not invented.
6. **Climax:** Amara knows whether her note went through and what to expect, so warmth is supported by practical trust.

### Flow 7 — Recover and orient: Niko follows an unknown route

1. Niko opens an outdated or mistyped URL.
2. `/lost-platform` returns a real 404 with a plain explanation and a warm station framing.
3. Keyboard focus lands on the recovery content or its first useful link; the page offers `/station`, `/map`, and the five core branches.
4. Niko opens `/map` and sees every public route with poetic and literal labels, including optional discovery paths.
5. Niko chooses a destination directly and can use browser Back to return.
6. **Climax:** The metaphor makes the error gentler without making recovery ambiguous; Niko is never punished for not knowing the station.

### Experience open questions

- `[OPEN QUESTION]` Which proposed secondary routes (`/forest`, `/mountain`, `/map`) are in the first release, and which are later additions?
- `[OPEN QUESTION]` What confirmed content populates About Me, Projects, Offers, Thoughts, Forest, and Mountain?
- `[OPEN QUESTION]` What contact channels, form backend, privacy treatment, and response expectation are real?
- `[OPEN QUESTION]` Will optional sound, a quiet-mode control, a “Surprise me” action, or a dark/night mode ship? Defaults remain off or absent until decided.
