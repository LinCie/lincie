/**
 * The two benches the homepage summarises. Long-form bench copy lives on `/workshop`;
 * this is the board-level summary so the homepage never hand-writes it twice.
 */
export interface OfferBench {
  id: string;
  href: string;
  category: string;
  approach: string;
  title: string;
  summary: string;
}

export const offers: OfferBench[] = [
  {
    id: "backend",
    href: "/workshop#backend",
    category: "Backend development",
    approach: "Go & TypeScript",
    title: "Backend systems",
    summary:
      "I build REST and gRPC APIs with clear business logic and database schemas designed for performance. I keep the code straightforward to maintain.",
  },
  {
    id: "web-craft",
    href: "/workshop#web-craft",
    category: "Web development",
    approach: "AI-assisted, reviewed by hand",
    title: "Custom websites",
    summary:
      "I make fast, accessible websites with their own look. AI helps me iterate quickly; I review and refine the code and design by hand, including the SEO.",
  },
];
