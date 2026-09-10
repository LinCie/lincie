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
    category: "Developer Service",
    approach: "Go & TypeScript",
    title: "Backend & Systems",
    summary:
      "Reliable REST/gRPC APIs, schema design, and clean business logic. Built for performance and zero-headache maintenance.",
  },
  {
    id: "web-craft",
    href: "/workshop#web-craft",
    category: "Web Craft",
    approach: "AI-Augmented & Hand-Tuned",
    title: "Crafted Websites",
    summary:
      "Distinct, accessible, and fast websites. AI handles rapid iteration while human engineering ensures zero slop, high SEO, and deep craft.",
  },
];
