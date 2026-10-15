/**
 * The canonical station route table. Every surface that lists destinations reads from
 * here so a route is added, renamed, or relabelled in exactly one place.
 *
 * `place` is the poetic station name, `label` the literal meaning that must always sit
 * beside it. `footerLabel` is the colophon's own phrasing of the same destination.
 */
export interface StationRoute {
  id: string;
  href: string;
  place: string;
  label: string;
  kanji: string;
  desc: string;
  footerLabel: string;
}

export const stationRoutes: StationRoute[] = [
  {
    id: "platform",
    href: "/",
    place: "Platform",
    label: "Arrival & welcome",
    kanji: "停留所",
    desc: "Station entrance, arrival notice, and departure board.",
    footerLabel: "Platform arrival",
  },
  {
    id: "about-me",
    href: "/about",
    place: "Station House",
    label: "About me",
    kanji: "駅舎",
    desc: "My background, a look around my room, and the things I enjoy.",
    footerLabel: "Station House (About me)",
  },
  {
    id: "projects",
    href: "/projects",
    place: "Rice Fields",
    label: "Projects",
    kanji: "稲田",
    desc: "What I’ve built and the decisions behind each project.",
    footerLabel: "Rice Fields (Projects)",
  },
  {
    id: "offers",
    href: "/workshop",
    place: "Workshop",
    label: "Where I can help",
    kanji: "工房",
    desc: "Backend development and websites I can help you build.",
    footerLabel: "The Workshop (Where I can help)",
  },
  {
    id: "thoughts",
    href: "/thoughts",
    place: "Waiting Room",
    label: "Thoughts",
    kanji: "待合室",
    desc: "Notes on engineering and what I’m learning.",
    footerLabel: "The Waiting Room (Thoughts)",
  },
  {
    id: "connect",
    href: "/connect",
    place: "Letterbox",
    label: "Connect",
    kanji: "郵便受け",
    desc: "Send a project inquiry, ask a question, or say hello.",
    footerLabel: "The Letterbox (Ways to connect)",
  },
];

export function routeById(id: string): StationRoute | undefined {
  return stationRoutes.find((route) => route.id === id);
}
