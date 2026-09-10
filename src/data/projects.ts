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
      "High-throughput Point-of-Sale and ERP API verified under 2,000+ req/min load against 1M+ seeded database rows.",
    role: "Backend / Full Stack Architect",
    timeline: "March 2026 – Present",
    status: "tended",
    statusLabel: "Currently Tended",
    summary:
      "A fast, modular POS and ERP backend designed for retail workflows, instant Docker environment setup, and zero-degradation database queries at scale.",
    seoTitle: "Bearuang — POS & ERP Backend by LinCie",
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
      "Bearuang is an end-to-end POS and Enterprise Resource Planning backend built to manage complex retail operations without the usual bloat or sluggish response times.",
      "It provides over 30 thoroughly documented REST endpoints covering point-of-sale checkout, catalog and stock management, order fulfillment, and automated reconciliation.",
    ],
    whyItExisted: [
      "Most ERP software for small-to-medium businesses suffers from creeping query latency, bloated object-relational mapping, and fragile development setup scripts that take hours to configure.",
      "Bearuang was engineered to prove that enterprise software can be lean, deterministic, and instant to deploy. A fresh developer or staging instance spins up in seconds with complete schema migrations and realistic seed datasets.",
    ],
    atmosphere:
      "A quiet, sunlit workshop bench where every tool is sharp and rests in its groove. Fast responses, clear HTTP semantics, and database queries that return without friction.",
    technicalCraft: {
      overview:
        "Engineered with strict SQL query optimization and containerized infrastructure to handle realistic retail concurrency without resource spikes.",
      highlights: [
        {
          label: "Load-tested under 2,000+ req/min",
          detail:
            "Benchmarked with automated scripted load testing at ~33 requests per second against a PostgreSQL database seeded with 1M+ product records, maintaining sub-second query latency throughout.",
        },
        {
          label: "Instant setup via Docker & Kysely",
          detail:
            "Reduced fresh development environment setup from hours to seconds using automated Docker Compose services paired with type-safe Kysely database migrations and seeders.",
        },
        {
          label: "30+ production REST endpoints",
          detail:
            "Implemented clean domain boundaries for POS transactions, inventory tracking, role-based operations, and automated financial rollups.",
        },
      ],
      deepDive: [
        "Replaced loose, untyped database queries with explicit Kysely query builders, giving the backend compile-time type safety while ensuring raw SQL execution plans remain transparent and index-friendly.",
        "Structured the database schema around composite indexes tailored to frequent POS queries: stock level lookups, product barcode scanning, and multi-tenant ledger entries.",
      ],
    },
    fieldNote:
      "Tending a database at scale is about respecting disk I/O and query execution plans before writing code. When a million rows query in milliseconds, the machinery fades into the background and the business simply works.",
  },
  {
    slug: "haebot-erp",
    title: "Haebot Enterprise ERP Rewrite",
    poeticTitle: "The Rebuilt Terrace",
    tagline:
      "Core enterprise ERP rebuild cutting query latency from ~2.5s to <400ms (>84%) and setup from ~1hr to <5min for a 25-employee company.",
    role: "Full Stack Engineer (PT Haebot Teknologi Indonesia)",
    timeline: "December 2024 – March 2026",
    status: "harvested",
    statusLabel: "Harvested & in Production",
    summary:
      "A complete system rewrite replacing legacy query bottlenecks with explicit Kysely queries, containerizing infrastructure, and automating workflows across Sales, Inventory, and Finance.",
    seoTitle: "Haebot ERP Rewrite — Enterprise Backend by LinCie",
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
      "A ground-up rewrite and modernization of the core enterprise ERP powering daily operations across Sales, Inventory, and Finance for PT Haebot Teknologi Indonesia.",
      "The system handles real-time stock allocation, multi-role checkout, financial ledger generation, and asset management for a 25-employee business and a catalog of 1,000+ products.",
    ],
    whyItExisted: [
      "The legacy ERP system had become a severe operational bottleneck: core financial reporting and inventory lookup queries suffered from ~2.5 second latencies due to inefficient ORM query patterns.",
      "Setting up a local environment or deploying updates required nearly an hour of manual dependency installation. Meanwhile, employee daily reporting depended on hours of fragile spreadsheet work, and local VPS disk storage was steadily running out due to high-resolution product media.",
    ],
    atmosphere:
      "The quiet relief of a long-clogged waterway clearing into open morning fields. Where staff once stared at spinning loading indicators, figures now update instantly upon transaction completion.",
    technicalCraft: {
      overview:
        "Led the ERP rewrite end-to-end with a focus on database query plan audits, containerized deployments, and decoupled cloud media storage.",
      highlights: [
        {
          label: "Query latency: 2.5s → <400ms (>84% reduction)",
          detail:
            "Replaced sluggish, deeply-nested legacy Eloquent query paths with hand-optimized, explicit Kysely queries that properly utilize PostgreSQL indexes.",
        },
        {
          label: "Environment setup: ~1hr → <5min (>90% reduction)",
          detail:
            "Containerized the rebuilt ERP stack using Docker Compose, turning multi-step manual configuration into a single repeatable command.",
        },
        {
          label: "Automated business workflows",
          detail:
            "Replaced spreadsheet-based tracking for 25 staff across Sales, Inventory, and Finance with automated real-time transaction rollups and instant financial retrieval.",
        },
        {
          label: "Cloudflare R2 media offload",
          detail:
            "Migrated media storage for 1,000+ products (each with 3+ images) and business files off the local VPS disk to Cloudflare R2, safeguarding host disk capacity.",
        },
      ],
      deepDive: [
        "Analyzed PostgreSQL EXPLAIN ANALYZE traces on slow production transactions, eliminating full table scans on historical ledger tables and adding compound B-tree indexes.",
        "Shipped continuous weekly releases while maintaining zero downtime, introducing configurable role-based access control (RBAC) across 5+ business-defined employee tiers.",
      ],
    },
    fieldNote:
      "Software should remove human fatigue, not multiply it. Watching colleagues reclaim hours of their day from manual spreadsheet reconciliations was the truest confirmation of this rewrite.",
  },
  {
    slug: "lintas-nusa",
    title: "Lintas Nusa Logistics",
    poeticTitle: "The Archipelago Route",
    tagline:
      "A premium enterprise logistics web platform engineered with Astro, GSAP, Tailwind CSS, and Swup.",
    role: "Frontend Architect & Creative Developer",
    timeline: "2026",
    status: "harvested",
    statusLabel: "Harvested & Live",
    summary:
      "An authoritative enterprise company profile and interactive digital experience for a nationwide Indonesian logistics operator, featuring fluid page transitions, custom SVG network schematics, and GSAP scroll choreography.",
    seoTitle: "Lintas Nusa — Logistics Web Platform by LinCie",
    seoDescription:
      "An enterprise logistics web platform built with Astro, GSAP, and Tailwind CSS — five pages, an interactive nine-node SVG network map, and fluid transitions.",
    metricsSummary:
      "5 core enterprise pages · 9-node interactive SVG map · Fluid Swup transitions",
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
      "Lintas Nusa is a premium, enterprise-grade web platform and company profile crafted for a fictional nationwide digital logistics operator across Indonesia.",
      "The platform spans five deeply architected pages—Beranda, Layanan, Jangkauan, Platform, and Tentang—presenting operational proof layers, service SLA hierarchies, multi-role dashboard concepts, and a national distribution network.",
    ],
    whyItExisted: [
      "Most enterprise B2B logistics websites are generic marketing brochures buried in stock photos and superficial jargon, failing to convey the actual operational discipline needed to run supply chains.",
      "Lintas Nusa was built to demonstrate how high-craft frontend engineering can command immediate authority: replacing decorative fluff with precise vector network maps, measured operational metrics (97.9% scan compliance, 247 active cities), and buttery-smooth page transitions.",
    ],
    atmosphere:
      "Deep maritime navy, crisp mist white, signal teal beacons, and quiet geometric lines. The calm, focused pulse of a nationwide logistics control tower coordinating freight movements across the islands at dawn.",
    technicalCraft: {
      overview:
        "Engineered with Astro's zero-JS-by-default architecture, complemented by GSAP scroll choreography and Swup for seamless client-side page transitions.",
      highlights: [
        {
          label: "Fluid Swup page transitions",
          detail:
            "Implemented seamless multi-page transitions with custom transition veils and beams, maintaining client state without sacrificing Astro's static build performance.",
        },
        {
          label: "Interactive 9-node network map",
          detail:
            "Handcrafted a responsive SVG schematic of the Indonesian archipelago connecting the Cikarang national control tower to 8 regional gateways with animated route pulses.",
        },
        {
          label: "GSAP scroll-linked choreography",
          detail:
            "Orchestrated responsive reveal sequences, interactive hover states, and smooth metric disclosures adhering to strict accessibility and prefers-reduced-motion standards.",
        },
      ],
      deepDive: [
        "Structured a unified design token system with custom maritime colors (Navy #0F2742, Mist, Signal Teal, Signal Orange) and balanced type scales.",
        "Built accessible FAQ disclosure components, multi-tier service filter tabs, and mobile drawer navigation with zero layout shift and complete keyboard accessibility.",
      ],
    },
    fieldNote:
      "Designing for enterprise logistics taught me that restraint creates far more authority than visual noise. When the network map, typography, and page transitions move with mechanical precision, the platform feels dependable before you read a single word.",
  },
  {
    slug: "mika",
    title: "Mika Discord Music Bot",
    poeticTitle: "The Distant Broadcast",
    tagline:
      "Production Discord audio bot with multi-source normalized streaming, running stably for 2+ years across 6 servers.",
    role: "Creator & System Operator",
    timeline: "November 2024 – Present",
    status: "harvested",
    statusLabel: "Harvested & Running",
    summary:
      "A long-running community music bot delivering stutter-free audio streaming, multi-provider source failover, and contextual AI chat interactions.",
    seoTitle: "Mika — Discord Music Bot by LinCie",
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
      "A dedicated Discord audio bot delivering responsive music playback and conversational AI interactions for over 1,000 members across 6 active community servers.",
      "Supports 20+ slash commands, real-time voice streaming, dynamic audio queue management, and concurrent voice playback sessions.",
    ],
    whyItExisted: [
      "Public Discord music bots frequently suffer from crashes, upstream provider rate limits, and unmaintained dependencies that break mid-song.",
      "Mika was created to provide our community with an unhurried, rock-solid listening lounge featuring seamless multi-source playback that never drops out.",
    ],
    atmosphere:
      "A vintage radio humming peacefully on the station bench, broadcasting warm acoustic melodies across open fields without missing a note.",
    technicalCraft: {
      overview:
        "Engineered with normalized audio abstractions, automatic fallback routing, and resilient stream buffering.",
      highlights: [
        {
          label: "Multi-source audio normalization",
          detail:
            "Unified stream extraction across YouTube, SoundCloud, and Spotify, with automated fallback routing to SoundCloud whenever primary sources encounter rate limits.",
        },
        {
          label: "2+ years continuous operation",
          detail:
            "Operated in production across 6 active servers and 1,000+ members with consistent uptime and responsive voice packet delivery.",
        },
        {
          label: "AI chat integration",
          detail:
            "Processes approximately 50 conversational AI interactions daily with lightweight session caching and rate limiting.",
        },
      ],
      deepDive: [
        "Implemented adaptive audio jitter buffering to prevent packet drops and audio distortion during transient server network blips.",
        "Managed voice connection heartbeats and automatic voice channel reconnection to recover seamlessly from Discord gateway disconnects.",
      ],
    },
    fieldNote:
      "Reliability in distributed bot systems comes down to expecting upstream volatility and handling failures silently. Mika has run for two years because it never assumes a network connection is permanent.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const tendedProjects = projects.filter((p) => p.status === "tended");
export const harvestedProjects = projects.filter(
  (p) => p.status === "harvested",
);
