import type { APIRoute } from "astro";
import { canonicalUrl } from "../data/site";
import { projects } from "../data/projects";
import { thoughts } from "../data/thoughts";

interface SitemapEntry {
  path: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
  lastmod?: string;
}

// Redirect stubs (/offers, /letterbox, /waiting-room) are intentionally excluded:
// search engines should only index the canonical destination of each route.
const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/projects", changefreq: "weekly", priority: "0.9" },
  ...projects.map((project) => ({
    path: `/projects/${project.slug}`,
    changefreq: "monthly" as const,
    priority: "0.7",
  })),
  { path: "/workshop", changefreq: "monthly", priority: "0.9" },
  { path: "/thoughts", changefreq: "weekly", priority: "0.8" },
  ...thoughts
    .filter((thought) => thought.status === "published")
    .map((thought) => ({
      path: `/thoughts/${thought.slug}`,
      changefreq: "monthly" as const,
      priority: "0.6",
      lastmod: thought.isoDate,
    })),
  { path: "/connect", changefreq: "yearly", priority: "0.7" },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = () => {
  const urls = entries
    .map((entry) =>
      [
        `  <url>`,
        `    <loc>${escapeXml(canonicalUrl(entry.path))}</loc>`,
        entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : null,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
        `  </url>`,
      ]
        .filter(Boolean)
        .join("\n"),
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
