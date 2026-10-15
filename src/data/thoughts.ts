export interface Thought {
  slug: string;
  title: string;
  poeticContext: string;
  sensoryWeather: string;
  topic: string;
  date: string;
  /** ISO 8601 date for structured data and sitemap freshness. Month precision is intentional: only the month is known. */
  isoDate: string;
  status: "published" | "in-preparation";
  statusLabel: string;
  summary: string;
  excerpt: string;
  paragraphs: string[];
  stationNote?: string;
}

export const thoughts: Thought[] = [
  {
    slug: "from-business-to-backend",
    title: "Carrying a Business Degree into Backend Engineering",
    poeticContext: "First train · Morning mist",
    sensoryWeather: "Cool dawn air drifting through open timber windows",
    topic: "Journey & Craft",
    date: "March 2026",
    isoDate: "2026-03",
    status: "published",
    statusLabel: "Passenger Note #1",
    summary:
      "How studying business management and marketing shaped the way I think about database schemas, idempotency, and API contracts.",
    excerpt:
      "I’ve watched operations teams lose afternoons to fragile spreadsheets and manual reconciliation. That experience shapes how I think about query performance and the time a faster system can give back.",
    paragraphs: [
      "People often assume my move into software engineering was an abrupt detour after a degree in Marketing Management and Business Administration. I’ve found that much of what I studied still helps me build software.",
      "In business school, we studied supply chains, consumer psychology, and the things that slow operations down. We mapped bottlenecks where people spent hours fixing mismatched invoice numbers by hand or waiting for inventory tallies. When I began writing Go and TypeScript and designing relational schemas in PostgreSQL, I thought about how the code could help those operations run.",
      "A database table records what an organization agrees is true. If a SQL query is slow, a warehouse worker may have to wait for a barcode scanner to beep before loading the next truck. Idempotency matters because a customer whose mobile connection flickers on a rural train should never be billed twice.",
      "Joining Sea Labs Indonesia as a Software Engineering Trainee reinforced this view. Working with distributed infrastructure and large transaction volumes requires technical rigor. I keep asking: Does this system fail gracefully? Does it protect the people depending on it? Could another engineer understand and maintain it at 2:00 AM?",
      "I want to build systems that account for the people using them and hold up under load. Ignoring either side leaves people with software they can’t depend on.",
    ],
    stationNote:
      "Written at the station desk before the morning departure. Tended with care in Jakarta.",
  },
  {
    slug: "tending-systems-like-fields",
    title: "Tending Systems Like Fields: On Unhurried Code Craft",
    poeticContext: "Noon sun · Rice paddy wind",
    sensoryWeather:
      "Warm breeze over green stalks, sun warming the timber floor",
    topic: "Engineering Philosophy",
    date: "February 2026",
    isoDate: "2026-02",
    status: "published",
    statusLabel: "Passenger Note #2",
    summary:
      "Why I take time over SQL schemas, concurrency, and maintenance, even when there’s pressure to ship quickly.",
    excerpt:
      "Time saved by rushing code can turn into late-night incident reviews. I’d rather spend that time on the schema and failure cases before they become problems in production.",
    paragraphs: [
      "Software development often feels hurried. Frameworks promise full-stack applications in thirty seconds. AI tools produce pages of boilerplate that nobody has reviewed. Shipping features gets more attention than maintaining the architecture behind them.",
      "I like the comparison with tending a field. Rice seedlings need clear irrigation channels, the right minerals in the soil, and well-defined boundaries between plots. Rushing them won’t help.",
      "The database schema and data models need that preparation too. Unclear relationships, weak constraints, and careless transactions can leave you with corrupted data and slow queries that application code alone can’t fix. I try to keep schemas clear, normalize where needed, and choose indexes for the queries the application actually runs.",
      "When writing Go or TypeScript services, I avoid abstractions until I need them. I’d rather use one clear function than three layers of indirection. I also take time to write deterministic tests that simulate real network failures.",
      "A backend that reliably does its job each day rarely gets much attention. I’m happy with that.",
    ],
    stationNote: "Left on the passenger bench beside the open field view.",
  },
  {
    slug: "what-sea-labs-teaches-about-scale",
    title: "What Trainee Life at Sea Labs Teaches About Quiet Scale",
    poeticContext: "Dusk light · Distant signal bell",
    sensoryWeather: "Amber light across the platform, evening quiet settles in",
    topic: "Sea Labs Trainee",
    date: "April 2026 (Upcoming)",
    isoDate: "2026-04",
    status: "in-preparation",
    statusLabel: "Resting on the desk · In preparation",
    summary:
      "What I’m learning about distributed systems, working in a large engineering team, and handling millions of database transactions.",
    excerpt:
      "I’m drafting notes on testing, finding my way through unfamiliar codebases, and checking assumptions before changing a schema.",
    paragraphs: [
      "I’m still drafting this at the station desk.",
      "It covers working with high-concurrency systems, learning from senior mentors at Sea Labs, and staying focused when working on large distributed systems.",
    ],
    stationNote: "Draft in progress. I’ll share it when it’s ready.",
  },
];
