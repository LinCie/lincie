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
    label: "Arrival & Welcome",
    kanji: "停留所",
    desc: "Station entrance, arrival notice, and departure board.",
    footerLabel: "Platform Arrival",
  },
  {
    id: "about-me",
    href: "/about",
    place: "Station House",
    label: "About Me",
    kanji: "駅舎",
    desc: "Personal introduction, room corners, and everyday comforts.",
    footerLabel: "Station House (About Me)",
  },
  {
    id: "projects",
    href: "/projects",
    place: "Rice Fields",
    label: "Projects",
    kanji: "稲田",
    desc: "Cultivated software craft and deep project stories.",
    footerLabel: "Rice Fields (Projects)",
  },
  {
    id: "offers",
    href: "/workshop",
    place: "Workshop",
    label: "Offers",
    kanji: "工房",
    desc: "Confirmed situations where LinCie can help and build.",
    footerLabel: "The Workshop (Offers)",
  },
  {
    id: "thoughts",
    href: "/thoughts",
    place: "Waiting Room",
    label: "Thoughts",
    kanji: "待合室",
    desc: "Quiet reflections, learning notes, and wandering ideas.",
    footerLabel: "The Waiting Room (Thoughts)",
  },
  {
    id: "connect",
    href: "/connect",
    place: "Letterbox",
    label: "Connect",
    kanji: "郵便受け",
    desc: "Practical, low-pressure channels to send a letter.",
    footerLabel: "The Letterbox (Ways to connect)",
  },
];

export function routeById(id: string): StationRoute | undefined {
  return stationRoutes.find((route) => route.id === id);
}
