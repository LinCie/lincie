export interface SiteConfig {
  url: string;
  name: string;
  title: string;
  description: string;
  locale: string;
  language: string;
  author: {
    name: string;
    alternateName: string;
    jobTitle: string;
    organization: string;
    github: string;
  };
  ogImage: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}

export const site: SiteConfig = {
  url: "https://lincie.me",
  name: "LinCie Station",
  title: "LinCie — Software Engineering Trainee & Backend Developer",
  description:
    "LinCie is a software engineering trainee at Sea Labs Indonesia building Go and TypeScript backends, careful PostgreSQL schemas, and handcrafted websites.",
  locale: "en_US",
  language: "en",
  author: {
    name: "LinCie",
    alternateName: "Lincie",
    jobTitle: "Software Engineering Trainee",
    organization: "Sea Labs Indonesia",
    github: "https://github.com/LinCie",
  },
  ogImage: {
    url: "/images/lincie-countryside-arrival.webp",
    width: 1376,
    height: 768,
    alt: "Morning light across the quiet countryside surrounding LinCie Station",
  },
};

/** Absolute URL for a site-relative path, used for canonicals, Open Graph and structured data. */
export function absoluteUrl(path: string): string {
  return new URL(path, site.url).href;
}

/** Directory-format builds serve every route with a trailing slash, so canonicals match that shape. */
export function canonicalUrl(pathname: string): string {
  return absoluteUrl(`${pathname.replace(/\/+$/, "")}/`);
}
