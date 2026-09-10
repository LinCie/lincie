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
      "Why studying business management and marketing didn't delay engineering: it gave database schemas, idempotency, and API contracts a human reason to exist.",
    excerpt:
      "Code does not exist in an empty room. When you've watched an operations team wrestle with fragile spreadsheets and manual reconciliation, an index scan isn't an abstract metric; it's someone's afternoon given back.",
    paragraphs: [
      "When people hear that I transitioned into software engineering after completing a degree in Marketing Management and Business Administration, they often assume it was an abrupt detour, a complete departure from one discipline into another. In practice, the opposite has been true.",
      "In business school, we studied supply chains, consumer psychology, and operational friction. We mapped bottlenecks where human hours were squandered manually fixing mismatched invoice numbers or waiting for slow inventory tallies. When I began writing Go and TypeScript and architecting relational schemas in PostgreSQL, I didn't see lines of code as syntax exercises; I saw them as operational pipelines.",
      "A database table is not just data storage; it is an organizational agreement about reality. A slow SQL query is not merely high latency on a dashboard; it is a warehouse worker waiting for a barcode scanner to beep before they can load the next truck. An idempotent API is not just a defensive distributed systems pattern; it is ensuring that a customer is never billed twice when a mobile connection flickers on a rural train.",
      "Entering Sea Labs Indonesia as a Software Engineering Trainee reinforced this perspective. Surrounded by distributed infrastructure and massive transaction volumes, technical rigor is non-negotiable. But the questions that guide my engineering choices remain human: Does this system fail gracefully? Does it protect the people depending on it? Is it simple enough that another engineer can maintain it with clarity at 2:00 AM?",
      "Engineering without empathy produces fragile complexity. Business empathy without engineering rigor produces good intentions that crash under load. Bridging the two is the work I care to do.",
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
      "Rejecting the frantic copy-paste velocity of modern software in favor of disciplined SQL schemas, measured concurrency, and quiet maintenance.",
    excerpt:
      "Rushing code creates an illusion of velocity that is paid for later in late-night incident reviews. Tending a backend takes the patience of a farmer: preparing the soil before planting the seed.",
    paragraphs: [
      "Much of modern software development is organized around frantic urgency. Frameworks promise full-stack applications in thirty seconds, AI tools emit reams of unreviewed boilerplate, and feature velocity is celebrated while architectural maintenance is treated as an afterthought.",
      "I prefer to think about software the way one tends land. You do not shout at rice seedlings to make them grow faster. You ensure the irrigation channels are unblocked, the soil has the right minerals, and the boundaries between plots are clearly trenched.",
      "In backend systems, 'soil' is your database schema and data models. If your relations are muddy, your constraints lax, and your transactions careless, no amount of clever application code will save you from corrupted states and sluggish queries. But when the schema is clean, normalized where needed, and indexed for actual access patterns, the rest of the application breathes easily.",
      "Writing clean Go or TypeScript backend services is an exercise in restraint. It means saying no to premature abstractions, avoiding three layers of indirection where a single function is crystal clear, and taking time to write deterministic tests that simulate real network failures.",
      "Quiet systems run unnoticed. When a backend is well-tended, nobody talks about it because it simply does its job day after day, steady as the morning train.",
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
      "Observations from navigating distributed systems, large engineering teams, and the discipline required when millions of transactions touch the database.",
    excerpt:
      "Currently being drafted at the corner desk. Observations on testing discipline, reading unfamiliar codebases with humility, and learning to measure twice before changing a schema.",
    paragraphs: [
      "Currently being penned at the station desk.",
      "Notes on navigating high-concurrency systems, learning from senior mentors at Sea Labs, and cultivating calm focus inside large-scale distributed architectures.",
    ],
    stationNote: "Draft in progress. Will be shared when the thoughts settle.",
  },
];
