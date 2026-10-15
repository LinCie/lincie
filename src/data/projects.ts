export interface Project {
  slug: string;
  title: string;
  poeticTitle: string;
  tagline: string;
  role: string;
  timeline: string;
  status: "tended" | "harvested";
  statusLabel: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  metricsSummary: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  whatIsThis: string[];
  whyItExisted: string[];
  atmosphere: string;
  technicalCraft: {
    overview: string;
    highlights: {
      label: string;
      detail: string;
    }[];
    deepDive: string[];
  };
  fieldNote: string;
}

export const projects: Project[] = [
  {
    slug: "bearuang",
    title: "Bearuang",
    poeticTitle: "The Spring Furrow",
    tagline:
      "A point-of-sale and ERP API verified at 2,000+ requests per minute against 1M+ seeded database rows.",
    role: "Backend / Full Stack Architect",
    timeline: "March 2026 – Present",
    status: "tended",
    statusLabel: "Currently Tended",
    summary:
      "A modular POS and ERP backend for retail workflows. Docker makes setup quick, and database queries maintain their performance as the data grows.",
    seoTitle: "Bearuang | POS & ERP Backend by LinCie",
    seoDescription:
      "Bearuang is a modular POS and ERP backend in TypeScript and PostgreSQL, verified at 2,000+ requests per minute against a million-row database.",
    metricsSummary:
      "30+ REST endpoints · 2,000+ req/min (~33 RPS) · 1M+ seeded products",
    technologies: [
      "TypeScript",
      "Kysely",
      "PostgreSQL",
      "Docker",
      "REST APIs",
      "Redis",
    ],
    liveUrl: "https://bearuang.lincie.me",
    repoUrl: "https://github.com/LinCie",
    whatIsThis: [
      "Bearuang is a point-of-sale and Enterprise Resource Planning backend for complex retail operations. I built it to stay fast without adding unnecessary complexity.",
      "It has over 30 documented REST endpoints for checkout, catalog and stock management, order fulfillment, and automated reconciliation.",
    ],
    whyItExisted: [
      "ERP software for small and medium businesses often gets slower as data grows. Heavy ORMs can make queries harder to control, and fragile setup scripts can take hours to configure.",
      "I built Bearuang to keep the software small, its behavior predictable, and deployment quick. A fresh development or staging instance starts in seconds, with complete schema migrations and realistic seed data.",
    ],
    atmosphere:
      "I picture a sunlit workshop bench with every tool in its place. That’s the feel I wanted from the backend: fast responses, clear HTTP semantics, and queries that don’t keep you waiting.",
    technicalCraft: {
      overview:
        "I optimized the SQL queries and containerized the infrastructure to handle concurrent retail workloads without resource spikes.",
      highlights: [
        {
          label: "Load-tested under 2,000+ req/min",
          detail:
            "Automated load scripts sent ~33 requests per second against PostgreSQL with 1M+ seeded product records. Query latency stayed below a second throughout.",
        },
        {
          label: "Instant setup via Docker & Kysely",
          detail:
            "Cut development environment setup from hours to seconds with automated Docker Compose services and type-safe Kysely migrations and seeders.",
        },
        {
          label: "30+ production REST endpoints",
          detail:
            "Separated POS transactions, inventory tracking, role-based operations, and automated financial rollups into distinct domains.",
        },
      ],
      deepDive: [
        "Replaced untyped database queries with explicit Kysely query builders for compile-time type safety. The SQL execution plans remain visible, and the queries can use the intended indexes.",
        "Structured the database schema around composite indexes tailored to frequent POS queries: stock level lookups, product barcode scanning, and multi-tenant ledger entries.",
      ],
    },
    fieldNote:
      "I pay attention to disk I/O and query execution plans before writing application code. Getting a query over a million rows down to milliseconds means less waiting for the people running the business.",
  },
  {
    slug: "haebot-erp",
    title: "Haebot Enterprise ERP Rewrite",
    poeticTitle: "The Rebuilt Terrace",
    tagline:
      "An ERP rebuild for a 25-employee company, cutting query latency from ~2.5s to <400ms (>84%) and setup from ~1hr to <5min.",
    role: "Full Stack Engineer (PT Haebot Teknologi Indonesia)",
    timeline: "December 2024 – March 2026",
    status: "harvested",
    statusLabel: "Harvested & in Production",
    summary:
      "I rewrote the system with explicit Kysely queries to address slow database calls. The rewrite also containerized the infrastructure and automated workflows across Sales, Inventory, and Finance.",
    seoTitle: "Haebot ERP Rewrite | Enterprise Backend by LinCie",
    seoDescription:
      "A ground-up ERP rewrite for PT Haebot Teknologi Indonesia: query latency cut from 2.5s to under 400ms and setup time from an hour to under five minutes.",
    metricsSummary:
      ">84% latency cut (2.5s to <400ms) · >90% faster setup · 25 employees served",
    technologies: [
      "TypeScript",
      "Kysely",
      "PostgreSQL",
      "Docker Compose",
      "Cloudflare R2",
      "REST APIs",
    ],
    liveUrl: "https://haebot.com",
    whatIsThis: [
      "A ground-up rewrite of the ERP used for daily Sales, Inventory, and Finance operations at PT Haebot Teknologi Indonesia.",
      "The system handles real-time stock allocation, multi-role checkout, financial ledger generation, and asset management for a 25-employee business and a catalog of 1,000+ products.",
    ],
    whyItExisted: [
      "Inefficient ORM queries in the old ERP meant financial reports and inventory lookups took ~2.5 seconds. Those delays were slowing daily operations.",
      "Local setup and update deployments took nearly an hour of manual dependency installation. Daily reporting required hours of error-prone spreadsheet work. High-resolution product media was also filling up the VPS disk.",
    ],
    atmosphere:
      "Staff used to wait for loading indicators. Now the figures update as soon as a transaction completes, which feels like clearing a blocked irrigation channel.",
    technicalCraft: {
      overview:
        "I led the full rewrite, auditing database query plans and containerizing deployments. I also moved media storage off the server and into the cloud.",
      highlights: [
        {
          label: "Query latency: 2.5s → <400ms (>84% reduction)",
          detail:
            "Replaced deeply nested Eloquent queries with explicit Kysely queries optimized to use PostgreSQL indexes.",
        },
        {
          label: "Environment setup: ~1hr → <5min (>90% reduction)",
          detail:
            "Used Docker Compose to containerize the rebuilt ERP stack. One repeatable command replaced the manual configuration steps.",
        },
        {
          label: "Automated business workflows",
          detail:
            "Replaced spreadsheet tracking for 25 staff across Sales, Inventory, and Finance. Transaction rollups run automatically in real time, and financial figures are available immediately.",
        },
        {
          label: "Cloudflare R2 media offload",
          detail:
            "Moved business files and media for 1,000+ products, each with 3+ images, from the VPS disk to Cloudflare R2 to free up server storage.",
        },
      ],
      deepDive: [
        "Analyzed PostgreSQL EXPLAIN ANALYZE traces on slow production transactions, eliminating full table scans on historical ledger tables and adding compound B-tree indexes.",
        "Shipped weekly releases with zero downtime and added configurable role-based access control (RBAC) for 5+ employee tiers defined by the business.",
      ],
    },
    fieldNote:
      "The part I was happiest about was seeing colleagues get back the hours they’d spent reconciling spreadsheets by hand. I want software to make their day less tiring.",
  },
  {
    slug: "lintas-nusa",
    title: "Lintas Nusa Logistics",
    poeticTitle: "The Archipelago Route",
    tagline:
      "A logistics website built with Astro, GSAP, Tailwind CSS, and Swup.",
    role: "Frontend Architect & Creative Developer",
    timeline: "2026",
    status: "harvested",
    statusLabel: "Harvested & Live",
    summary:
      "A company profile for a fictional nationwide Indonesian logistics operator, with page transitions, custom SVG network diagrams, and GSAP scroll animations.",
    seoTitle: "Lintas Nusa | Logistics Web Platform by LinCie",
    seoDescription:
      "A logistics website built with Astro, GSAP, and Tailwind CSS, with five pages, an interactive nine-node SVG network map, and smooth page transitions.",
    metricsSummary:
      "5 pages · 9-node interactive SVG map · Swup page transitions",
    technologies: [
      "Astro",
      "GSAP",
      "Tailwind CSS",
      "Swup",
      "SVG Architecture",
      "TypeScript",
    ],
    liveUrl: "https://lintasnusa.lincie.me/",
    whatIsThis: [
      "Lintas Nusa is a website and company profile for a fictional digital logistics operator serving Indonesia nationwide.",
      "Its five pages (Beranda, Layanan, Jangkauan, Platform, and Tentang) present operational metrics, service SLA tiers, dashboard concepts for different roles, and a national distribution network.",
    ],
    whyItExisted: [
      "I find that B2B logistics websites often rely on stock photos and jargon without showing how the supply chain operates.",
      "I wanted Lintas Nusa to feel credible through specific details. I used vector network maps and operational figures (97.9% scan compliance, 247 active cities), with smooth page transitions. Those figures belong to the fictional operator.",
    ],
    atmosphere:
      "Maritime navy, mist white, teal beacons, and geometric lines give it the feel of a logistics control tower coordinating freight across the islands at dawn.",
    technicalCraft: {
      overview:
        "Built with Astro’s zero-JavaScript-by-default architecture. GSAP handles scroll animations, and Swup handles client-side page transitions.",
      highlights: [
        {
          label: "Fluid Swup page transitions",
          detail:
            "Built page transitions with custom veils and beams. They preserve client state and keep Astro’s static-build performance.",
        },
        {
          label: "Interactive 9-node network map",
          detail:
            "Drew a responsive SVG map of the Indonesian archipelago, connecting the Cikarang national control tower to 8 regional gateways with animated route pulses.",
        },
        {
          label: "GSAP scroll-linked choreography",
          detail:
            "Built responsive reveal sequences, hover interactions, and animated metric disclosures with accessibility support and respect for prefers-reduced-motion.",
        },
      ],
      deepDive: [
        "Created shared design tokens for the maritime colors (Navy #0F2742, Mist, Signal Teal, Signal Orange) and type scales.",
        "Built FAQ disclosures, multi-tier service filters, and mobile drawer navigation. Each supports keyboard access without layout shifts.",
      ],
    },
    fieldNote:
      "I wanted the site to feel dependable at first glance. Keeping the map, typography, and transitions precise worked better for me than adding more decoration.",
  },
  {
    slug: "mika",
    title: "Mika Discord Music Bot",
    poeticTitle: "The Distant Broadcast",
    tagline:
      "A Discord audio bot with normalized streaming from multiple sources, running in production for 2+ years across 6 servers.",
    role: "Creator & System Operator",
    timeline: "November 2024 – Present",
    status: "harvested",
    statusLabel: "Harvested & Running",
    summary:
      "A community music bot with smooth audio streaming and automatic failover between providers. It also supports AI chat that keeps track of the conversation.",
    seoTitle: "Mika | Discord Music Bot by LinCie",
    seoDescription:
      "A Discord music bot in TypeScript and Node.js with multi-source audio streaming, automatic source failover, and over two years of continuous uptime.",
    metricsSummary: "2+ years uptime · 6 servers · 1,000+ community members",
    technologies: [
      "TypeScript",
      "Node.js",
      "Discord API",
      "Audio Streaming",
      "Cloudflare",
    ],
    liveUrl: "https://mika.lincie.me",
    repoUrl: "https://github.com/LinCie",
    whatIsThis: [
      "A Discord bot with responsive music playback and conversational AI for over 1,000 members across 6 active community servers.",
      "Supports 20+ slash commands, real-time voice streaming, dynamic audio queue management, and concurrent voice playback sessions.",
    ],
    whyItExisted: [
      "Public Discord music bots frequently crash or hit provider rate limits. Unmaintained dependencies can also cause playback to break mid-song.",
      "I built Mika so our community could listen together without interruptions, with reliable playback from multiple sources.",
    ],
    atmosphere:
      "I think of Mika as a vintage radio on the station bench, playing acoustic music across the fields without skipping a note.",
    technicalCraft: {
      overview:
        "I normalized the audio sources behind a shared interface and added automatic fallback routing and stream buffering to keep playback steady.",
      highlights: [
        {
          label: "Multi-source audio normalization",
          detail:
            "Unified stream extraction for YouTube, SoundCloud, and Spotify. When a primary source hits a rate limit, playback falls back to SoundCloud automatically.",
        },
        {
          label: "2+ years continuous operation",
          detail:
            "Kept Mika running in production across 6 active servers and 1,000+ members, with consistent uptime and responsive voice packet delivery.",
        },
        {
          label: "AI chat integration",
          detail:
            "Processes approximately 50 conversational AI interactions daily with lightweight session caching and rate limiting.",
        },
      ],
      deepDive: [
        "Added adaptive audio jitter buffering to prevent packet drops and distortion during brief server network interruptions.",
        "Used voice connection heartbeats and automatic voice channel reconnection to recover from Discord gateway disconnects.",
      ],
    },
    fieldNote:
      "I expect providers and network connections to fail, so I try to recover without interrupting listeners. That approach has kept Mika running for two years.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const tendedProjects = projects.filter((p) => p.status === "tended");
export const harvestedProjects = projects.filter(
  (p) => p.status === "harvested",
);
