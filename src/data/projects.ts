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
    slug: "rantau",
    title: "Rantau: Jakarta Newcomer Survival Map",
    poeticTitle: "The City Compass",
    tagline:
      "My solo full-stack Sea Labs capstone: a Go and PostGIS REST API with a React and Leaflet map that helps Jakarta newcomers find affordable daily essentials and check sub-district flood, safety, and living-cost records.",
    role: "Solo Full-Stack Engineer (Sea Labs Indonesia Capstone)",
    timeline: "July 2026 to Present",
    status: "tended",
    statusLabel: "Currently Tended",
    summary:
      "A map web app for people moving to Jakarta, covering 16 essential place categories and kecamatan flood, safety, and daily-spending data. Backed by a Go and PostGIS API with 237 test functions and tuned for about 5x local throughput.",
    seoTitle: "Rantau | Jakarta Newcomer Survival Map by LinCie",
    seoDescription:
      "Rantau is a solo full-stack Sea Labs capstone built with Go, Chi, PostgreSQL/PostGIS, Redis, Garage S3, and React 19, tested with 237 Go test functions and tuned for about 5x local throughput.",
    metricsSummary:
      "237 Go test functions · ~5x local throughput (~1,660 req/s) · ~171 ms deployed P95 at 10 VUs",
    technologies: [
      "Go",
      "Chi",
      "PostgreSQL / PostGIS",
      "sqlx & pgx",
      "Redis",
      "Garage (S3)",
      "React 19",
      "TypeScript",
      "TanStack Router & Query",
      "Leaflet",
      "Docker Compose",
      "Nginx",
      "k6",
    ],
    whatIsThis: [
      "Rantau is my solo full-stack capstone for the Sea Labs Indonesia (Shopee) Software Engineering Bootcamp. It is a map-based web app that helps newcomers to Jakarta find affordable places across 16 categories and check each kecamatan's flood history, safety notes, and daily spending. Users can suggest new places and leave 1 to 5 star reviews, and admins verify suggestions before they go live.",
      "The backend is a Go REST API using Chi, PostgreSQL/PostGIS with sqlx and pgx, goose migrations, Redis, and Garage S3-compatible object storage, documented with OpenAPI and a Scalar reference. The frontend uses React 19, TypeScript, Vite, TanStack Router, Query, and Form, Leaflet, Zod, and Tailwind CSS.",
    ],
    whyItExisted: [
      "When you first move to Jakarta for work or training, you have to figure out where to eat cheaply, catch transit, or find a clinic while also learning which neighborhoods flood or fit your budget.",
      "Most of that local knowledge sits in scattered group chats and old forum threads. I built Rantau to put those 16 place categories and kecamatan-level flood, safety, and spending records on one map that residents can add to and admins can verify.",
    ],
    atmosphere:
      "Unfolding a marked-up street map at a station kiosk in a new city, with clear neighborhood borders and notes from people who already live there.",
    technicalCraft: {
      overview:
        "I split the Go backend into domain modules (auth, places, reviews, suggestions, sub-districts, storage cleanup) with separate handler, service, and repository layers. The full stack runs in Docker Compose behind Nginx, and I used pprof and k6 to find and fix performance bottlenecks.",
      highlights: [
        {
          label: "~5x local & ~3x deployed throughput",
          detail:
            "Profiling with pprof showed repeated PostgreSQL connection setup under load. Tuning the pool to 10 max open and 10 idle connections raised local k6 throughput from about 333 to 1,660 req/s. Turning on Nginx gzip (shrinking responses from about 10 KB to 2.6 KB on a 10 Mbps link) and upstream keepalive raised deployed throughput from about 71 to 226 req/s and cut P95 latency at 10 VUs from 495 ms to 171 ms.",
        },
        {
          label: "PostGIS viewport queries",
          detail:
            "Map viewport queries run against PostGIS GEOMETRY(Point, 4326) columns with a GiST index. Bounding-box filters work alongside category and keyword filters, capping responses at 1,000 places while returning the full match count.",
        },
        {
          label: "Concurrency-safe writes & storage cleanup",
          detail:
            "Concurrent requests stay consistent: one review per user per place with atomic rating updates, compensating deletes when a suggestion is approved twice at once, row-locked limits on pending suggestions, and a FOR UPDATE SKIP LOCKED worker that cleans up deleted files.",
        },
        {
          label: "237 Go test functions & route checks",
          detail:
            "Covered by 237 Go test functions across unit tests with gomock mocks, HTTP handler tests, database tests, and integration tests. A router test builds the real router and fails if any route is missing from or extra in the public, signed-in, and admin access table.",
        },
      ],
      deepDive: [
        "Authentication uses argon2id password hashing capped at 4 concurrent hashes to bound memory, HS256 JWT access tokens checked for algorithm, issuer, and expiry, and rotating refresh tokens in Redis consumed atomically with GETDEL and sent in HttpOnly, SameSite=Strict cookies.",
        "Image uploads go straight to Garage through presigned PUT URLs with a signed Content-Type, then pass server-side checks on key format, file size, and image type before promotion. A background worker drains a database deletion queue in batches of 100 using FOR UPDATE SKIP LOCKED and retries failures with exponential backoff from 15 minutes up to 24 hours, while a one-day bucket lifecycle rule clears abandoned uploads.",
        "The API uses a standard JSON envelope for successes and errors, an UPPER_SNAKE error catalogue, strict body decoding, Unicode-aware length limits, a 1 MiB body limit, server timeouts, startup config checks, slog structured logging, and 500 responses that keep SQL and driver errors private.",
      ],
    },
    fieldNote:
      "Running pprof before touching the code saved me a lot of wasted effort on Rantau. Once I saw how much time went into opening database connections and sending uncompressed JSON over a 10 Mbps link, the fixes were straightforward.",
  },
  {
    slug: "bearuang",
    title: "Bearuang",
    poeticTitle: "The Spring Furrow",
    tagline:
      "A multi-tenant POS and ERP on Bun, Elysia, and PostgreSQL that held 62.5 req/s at 205 ms P95 latency across 239K requests in a 64-minute k6 soak test.",
    role: "Creator & Full Stack Engineer",
    timeline: "March 2026 to July 2026",
    status: "harvested",
    statusLabel: "Harvested & Live",
    summary:
      "A multi-tenant POS and ERP web app in TypeScript (Elysia on Bun, Prisma, PostgreSQL, and React) with IndexedDB offline sync and zero stock errors across 239K soak-test requests.",
    seoTitle: "Bearuang | Multi-Tenant POS & ERP by LinCie",
    seoDescription:
      "Bearuang is a multi-tenant POS and ERP built with Bun, Elysia, Prisma, PostgreSQL, and React, tested in a 64-minute k6 soak run at 205 ms P95 latency across 239K requests with 0 errors.",
    metricsSummary:
      "62.5 req/s avg · 205 ms P95 (64-min k6 soak, 239K reqs, 0 errors) · 376/376 shipment races passed",
    technologies: [
      "TypeScript",
      "Bun",
      "Elysia",
      "Prisma",
      "PostgreSQL",
      "React",
      "Vite",
      "TanStack Router & Query",
      "Dexie / IndexedDB",
      "Nginx",
      "k6",
    ],
    liveUrl: "https://bearuang.lincie.me",
    repoUrl: "https://github.com/LinCie/bearuang",
    whatIsThis: [
      "Bearuang is a multi-tenant point-of-sale and ERP web app written in TypeScript. The backend runs Elysia on Bun with Prisma ORM and PostgreSQL, and the frontend uses React, Vite, TanStack Router, and TanStack Query behind Nginx.",
      "It isolates data by organization and checks role-based permissions across 30+ documented REST endpoints using session and API-key authentication. When a store loses internet, a Dexie/IndexedDB queue holds local changes until the connection comes back.",
    ],
    whyItExisted: [
      "Small retail teams need POS and inventory software that runs well on a cheap VPS, keeps stock numbers right when several people ship or sell items at once, and does not freeze the checkout counter when the internet drops.",
      "I chose Bun and Elysia for fast startup and standalone-executable builds, then wrote transactional stock rules in PostgreSQL and an IndexedDB sync queue in the browser.",
    ],
    atmosphere:
      "A tidy shop counter where the register responds right away, stock counts match what is on the shelf, and a brief internet drop does not hold up the line.",
    technicalCraft: {
      overview:
        "I deployed the multi-tenant API on a 2-vCPU, 4 GB VPS behind Nginx and ran a 64-minute k6 soak test against 1,000 seeded products to test both response times and stock accuracy under concurrent writes.",
      highlights: [
        {
          label: "64-minute k6 soak test on a 2-vCPU VPS",
          detail:
            "Held 62.5 HTTP req/s average throughput and 205 ms P95 API latency across 239K requests with 0 errors on a 2-vCPU, 4 GB VPS.",
        },
        {
          label: "376/376 concurrent shipment races passed",
          detail:
            "Every integrity check in the soak run passed through transactional inventory updates: zero negative stock and no duplicate deductions across 376 shipment races, each firing five concurrent shipment attempts.",
        },
        {
          label: "Offline queue & sync recovery",
          detail:
            "Keeps working during internet drops using a Dexie/IndexedDB mutation queue, batch sync, incremental data refresh, and retry and conflict handling.",
        },
        {
          label: "Multi-tenant RBAC across 30+ endpoints",
          detail:
            "Isolates each organization's data and checks configurable role permissions across 30+ documented REST endpoints with session and API-key auth.",
        },
      ],
      deepDive: [
        "The k6 soak workload ran over 1,000 seeded products, mixing read-heavy browsing across GET endpoints with order and inventory writes and periodic checks for negative stock or race conditions.",
        "Compiling the Elysia backend into a standalone Bun executable kept deployments small and memory usage steady behind Nginx on the 2-vCPU, 4 GB VPS.",
      ],
    },
    fieldNote:
      "Firing five concurrent shipment attempts at the same stock row 376 times during a 64-minute soak test gave me much more confidence in the transaction logic than unit tests alone.",
  },
  {
    slug: "haebot-erp",
    title: "Haebot Enterprise ERP Rewrite",
    poeticTitle: "The Rebuilt Terrace",
    tagline:
      "A ground-up rewrite of a legacy Laravel ERP into a TypeScript Hono API on MySQL for a 25-employee company, cutting product-listing latency from 2.5 s to 400 ms.",
    role: "Full Stack Engineer (PT Haebot Teknologi Indonesia)",
    timeline: "December 2024 to March 2026",
    status: "harvested",
    statusLabel: "Harvested & in Production",
    summary:
      "As the sole engineer at PT Haebot Teknologi Indonesia, I rewrote a legacy Laravel ERP into a TypeScript, Deno, Hono, and Kysely API on MySQL with a Next.js frontend for 20+ staff, 1,000+ SKUs, and 30 to 50 daily transactions.",
    seoTitle: "Haebot ERP Rewrite | Enterprise Backend by LinCie",
    seoDescription:
      "A ground-up ERP rewrite for PT Haebot Teknologi Indonesia in TypeScript, Deno, Hono, Kysely, MySQL, and Next.js, cutting product-listing latency from 2.5 s to 400 ms.",
    metricsSummary:
      "2.5 s to 400 ms listing latency · 20+ staff & 1,000+ SKUs · 30 to 50 daily transactions",
    technologies: [
      "TypeScript",
      "Deno",
      "Hono",
      "Kysely",
      "MySQL",
      "Next.js",
      "Docker Compose",
      "Nginx",
      "Cloudflare R2",
    ],
    liveUrl: "https://haebot.com",
    whatIsThis: [
      "At PT Haebot Teknologi Indonesia, I was the sole engineer on a ground-up rewrite of the company's legacy Laravel ERP into a TypeScript Hono API for a 25-employee business. More than 20 employees use it daily across Sales, Inventory, and Finance to handle 1,000+ products and SKUs and 30 to 50 transactions a day.",
      "I handled the whole stack from schema design to VPS deployment, building the Sales, Inventory, and Finance modules for stock, pricing, discounts, multi-role checkout, and role-based access control (RBAC) across 5 employee roles.",
    ],
    whyItExisted: [
      "Loading product listings in the old Laravel ERP took about 2.5 seconds because every request fetched and summed the product's stock-movement history on the fly. That lag slowed down staff across Sales, Inventory, and Finance all day.",
      "On top of that, weekly Sales and Finance reports were put together by hand in Google Sheets (taking 2 to 4 staff hours every week), redeploying updates took about an hour of manual terminal commands, and 3,000 product images were filling up the VPS disk.",
    ],
    atmosphere:
      "Staff used to wait on loading spinners just to check stock. Now product lists open in 400 ms and stock updates in a single transaction at checkout, like clearing a blocked irrigation channel.",
    technicalCraft: {
      overview:
        "I kept the existing MySQL database so we did not have to run a risky data migration, put all backend logic in a Hono API on Deno with Kysely, used Next.js only for the frontend UI, and containerized the stack with Docker Compose behind Nginx.",
      highlights: [
        {
          label: "Product-listing latency: 2.5 s to 400 ms",
          detail:
            "Cut product-listing response time by 84% by storing current stock directly on product rows instead of fetching and summing stock-movement history on every listing request.",
        },
        {
          label: "Row-locked stock transactions",
          detail:
            "Wrote product stock updates and stock-movement records in a single database transaction for sales, restocks, and returns, using SELECT ... FOR UPDATE row locks and availability checks at checkout.",
        },
        {
          label: "Redeployment: ~1 hr to ~5 to 10 min",
          detail:
            "Containerized the app with Docker Compose behind Nginx, turning an hour of manual VPS steps into a repeatable 5 to 10 minute deployment.",
        },
        {
          label: "Automated reports & Cloudflare R2 storage",
          detail:
            "Built automated weekly Sales and Finance reports to replace manual Google Sheets work (saving 2 to 4 staff hours a week) and moved 3,000 product images from the VPS disk to Cloudflare R2.",
        },
      ],
      deepDive: [
        "Keeping the existing MySQL database let the company switch from the legacy Laravel app to the new Hono and Kysely API without migrating live business data.",
        "All business rules and configurable RBAC for the 5 employee roles live in the Hono API on Deno, keeping Next.js strictly as a frontend client.",
      ],
    },
    fieldNote:
      "The best part of this project was watching coworkers get back the 2 to 4 hours a week they used to spend copying numbers into Google Sheets.",
  },
  {
    slug: "mika",
    title: "Mika Discord Music Bot",
    poeticTitle: "The Distant Broadcast",
    tagline:
      "A TypeScript and Bun Discord bot with 20+ slash commands, Lavalink/Shoukaku audio queues, SQLite playlists, and streaming AI chat across 6 community servers.",
    role: "Creator & System Operator",
    timeline: "November 2024 to Present",
    status: "tended",
    statusLabel: "Currently Tended",
    summary:
      "A TypeScript and Bun Discord bot running across 6 community servers with Lavalink/Shoukaku music playback, Prisma and SQLite/LibSQL user playlists, and streaming Gemini and OpenAI-compatible chat.",
    seoTitle: "Mika | Discord Music & AI Bot by LinCie",
    seoDescription:
      "Mika is a TypeScript and Bun Discord bot with 20+ slash commands, Lavalink/Shoukaku music playback, Prisma on SQLite/LibSQL playlists, and streaming AI chat across 6 servers.",
    metricsSummary:
      "20+ slash commands · 6 community servers · Running since Nov 2024",
    technologies: [
      "TypeScript",
      "Bun",
      "Discord.js",
      "Lavalink / Shoukaku",
      "Prisma",
      "SQLite / LibSQL",
      "Gemini & OpenAI APIs",
    ],
    liveUrl: "https://mika.lincie.me",
    repoUrl: "https://github.com/LinCie/mika",
    whatIsThis: [
      "Mika is a TypeScript and Bun Discord bot with 20+ slash commands that I have run across 6 community servers since November 2024.",
      "It handles music search and voice playback through Discord.js and Lavalink/Shoukaku, saves user playlists with Prisma on SQLite/LibSQL, and runs conversational AI chat with streaming responses.",
    ],
    whyItExisted: [
      "Public Discord music bots often lose the queue when a connection blips, lack saved playlists, or put basic queue controls behind a paywall.",
      "I built Mika so our friend groups and community servers could listen to music together with saved playlists, per-server queue controls, and an AI chat bot in the same place.",
    ],
    atmosphere:
      "A radio on the station bench playing music across the fields, picking right back up where it left off even if the line briefly drops.",
    technicalCraft: {
      overview:
        "Mika runs on TypeScript and Bun, using Discord.js and Lavalink/Shoukaku for per-server audio queues, Prisma on SQLite/LibSQL for saved playlists, and Gemini and OpenAI-compatible APIs for chat.",
      highlights: [
        {
          label: "Per-server Lavalink / Shoukaku queues",
          detail:
            "Music search and playback run through Discord.js and Lavalink/Shoukaku, with separate queues per server for looping, seeking, shuffling, and volume control.",
        },
        {
          label: "Session resumption & reconnects",
          detail:
            "Configured Lavalink/Shoukaku connection resumption and retry handling while keeping player state and queues isolated for each server.",
        },
        {
          label: "Saved playlists on SQLite / LibSQL",
          detail:
            "Stores user playlists with Prisma on SQLite/LibSQL so members can create playlists, edit tracks, save the current queue, and start playback with a slash command.",
        },
        {
          label: "Streaming AI chat",
          detail:
            "Connects to Gemini and OpenAI-compatible chat APIs with per-user conversation memory, selectable personalities, and streaming replies.",
        },
      ],
      deepDive: [
        "Each Discord server gets its own player state and queue instance, so a reconnect retry or queue change in one server does not touch playback in another.",
        "Playlist commands read and write through Prisma on SQLite/LibSQL, letting users save a live queue into a named playlist and load it again later.",
      ],
    },
    fieldNote:
      "Running Mika since late 2024 taught me that voice connections will drop sooner or later. Setting up Lavalink session resumption meant people could keep listening without rebuilding their queue.",
  },
  {
    slug: "lintas-nusa",
    title: "Lintas Nusa Logistics",
    poeticTitle: "The Archipelago Route",
    tagline:
      "A five-page Indonesian logistics website built with Astro, TypeScript, Tailwind CSS, GSAP, and Swup, scoring 99 Performance and 100 SEO on mobile PageSpeed Insights.",
    role: "Solo Frontend Engineer & Designer",
    timeline: "April 2026",
    status: "harvested",
    statusLabel: "Harvested & Live",
    summary:
      "A five-page website for a fictional Indonesian logistics company, featuring a hand-tuned 9-node SVG network diagram, a keyboard-accessible coverage explorer, and a 99 mobile PageSpeed Performance score.",
    seoTitle: "Lintas Nusa | Logistics Web Platform by LinCie",
    seoDescription:
      "A five-page logistics website built with Astro, TypeScript, Tailwind CSS, GSAP, and Swup, scoring 99 Performance, 96 Accessibility, 100 Best Practices, and 100 SEO on mobile PageSpeed Insights.",
    metricsSummary:
      "99 Perf / 96 A11y / 100 BP / 100 SEO (mobile PSI, 1.5 s LCP) · 5 pages · 9-node SVG map",
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Swup",
      "SVG Architecture",
      "JSON-LD",
      "Vercel",
    ],
    liveUrl: "https://lintasnusa.lincie.me",
    repoUrl: "https://github.com/LinCie/lintas-nusa",
    whatIsThis: [
      "Lintas Nusa is a solo frontend project: a five-page website for a fictional Indonesian logistics company where I handled the concept, visual design, page structure, code, and deployment from start to finish.",
      "I used Astro for static HTML output with client-side JavaScript only where needed, wrote the UI in TypeScript and Tailwind CSS, and deployed the site on Vercel.",
    ],
    whyItExisted: [
      "Many B2B logistics sites ship heavy JavaScript bundles for pages that are mostly text and tables, and their interactive maps often break on small screens or without a mouse.",
      "I built Lintas Nusa to put together a five-page site with an SVG network map, a searchable regional coverage explorer, and page transitions while keeping a 1.5 s Largest Contentful Paint on mobile and working without JavaScript.",
    ],
    atmosphere:
      "Navy blue, mist white, and signal teal give the pages the feel of a harbor dispatch board tracking freight across the archipelago at dawn.",
    technicalCraft: {
      overview:
        "The site outputs static HTML from Astro, uses hand-tuned SVG coordinates for its network diagram, keeps the coverage explorer usable without JavaScript, and cleans up GSAP animations on every Swup page transition.",
      highlights: [
        {
          label: "99 Mobile Performance & 1.5 s LCP",
          detail:
            "The homepage scores 99 Performance, 96 Accessibility, 100 Best Practices, and 100 SEO on mobile PageSpeed Insights, with a 1.5 s Largest Contentful Paint.",
        },
        {
          label: "Hand-tuned 9-node SVG network diagram",
          detail:
            "Built a responsive nine-node SVG network diagram across Indonesia, adjusting node coordinates by hand so labels and lines stay aligned on narrow mobile screens.",
        },
        {
          label: "Keyboard-accessible coverage explorer",
          detail:
            "Built a searchable regional coverage explorer with keyboard navigation, URL-linked region selection, service comparisons, and full content access when JavaScript is disabled.",
        },
        {
          label: "GSAP & Swup transitions with cleanup",
          detail:
            "Paired GSAP animations with Swup page transitions, respecting prefers-reduced-motion and cleaning up timelines when leaving a page.",
        },
      ],
      deepDive: [
        "Set up canonical URLs, social metadata, JSON-LD structured data, and an XML sitemap across all five pages.",
        "Used Codex to help brainstorm, plan, and draft parts of the implementation, reviewing the code before deploying to Vercel on a custom domain.",
      ],
    },
    fieldNote:
      "Adjusting the SVG node coordinates by hand and making sure the coverage explorer worked without JavaScript took extra time, but it kept the site fast and readable on mobile.",
  },
  {
    slug: "lincie-station",
    title: "LinCie Station",
    poeticTitle: "The Country Platform",
    tagline:
      "My personal website built with Astro, TypeScript, Tailwind CSS, and GSAP around a Japanese rural train station concept inspired by Non Non Biyori.",
    role: "Creator, Designer & Engineer",
    timeline: "August 2026",
    status: "harvested",
    statusLabel: "Harvested & Live",
    summary:
      "This website: built with Astro, TypeScript, Tailwind CSS, and GSAP, featuring four local-time atmosphere modes, train page transitions, a scroll-linked SVG railway, and 95/100/100/100 mobile PageSpeed scores.",
    seoTitle: "LinCie Station | Personal Website by LinCie",
    seoDescription:
      "LinCie Station is a personal website built with Astro, TypeScript, Tailwind CSS, and GSAP around a rural-station concept, scoring 95 Performance and 100 Accessibility, Best Practices, and SEO on mobile.",
    metricsSummary:
      "95 Perf / 100 A11y / 100 BP / 100 SEO (mobile PSI, 2.3 s LCP) · 4 atmosphere modes",
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "SVG Architecture",
      "JSON-LD",
      "Vercel",
    ],
    liveUrl: "https://lincie.me",
    repoUrl: "https://github.com/LinCie/lincie",
    whatIsThis: [
      "LinCie Station is my personal website, built with Astro, TypeScript, Tailwind CSS, and GSAP around a rural Japanese train station theme inspired by Non Non Biyori. It holds my project write-ups, notes, and contact details.",
      "I designed a shared set of station signs, illustrated room dioramas, typography, and color palettes that carry across the homepage, house, rice fields, workshop, waiting room, and letterbox.",
    ],
    whyItExisted: [
      "I wanted a personal site that felt like a place I actually enjoy spending time in, inspired by quiet countryside anime and train platforms.",
      "At the same time, I wanted the site to load quickly on mobile phones, work with a keyboard and screen reader, and clean up its animations properly as you move from page to page.",
    ],
    atmosphere:
      "Sunlight through wooden blinds, a local train passing rice fields, and a quiet bench on the platform across morning, midday, golden hour, and dusk.",
    technicalCraft: {
      overview:
        "Built with Astro static pages, typed project and note data, four time-of-day color modes, and GSAP train transitions and scroll-linked SVG railway animations.",
      highlights: [
        {
          label: "95 Perf & 100/100/100 on mobile PSI",
          detail:
            "The homepage scores 95 Performance and 100 in Accessibility, Best Practices, and SEO on mobile PageSpeed Insights, with a 2.3 s Largest Contentful Paint.",
        },
        {
          label: "4 local-time atmosphere modes",
          detail:
            "Built four atmosphere modes that match the visitor's local time of day, remember manual choices in the session, and support keyboard controls and screen-reader announcements.",
        },
        {
          label: "Train transitions & scroll-linked SVG railway",
          detail:
            "Built directional train page transitions and a scroll-linked SVG railway with GSAP, including reduced-motion fallbacks and animation cleanup across Astro navigation.",
        },
        {
          label: "Typed content & structured SEO",
          detail:
            "Generated project pages from typed data files and centralized canonical URLs, social metadata, JSON-LD structured data, and the XML sitemap.",
        },
      ],
      deepDive: [
        "Built and shipped the site end to end, using Pi to assist with planning and implementation and reviewing the code before deploying to Vercel on a custom domain.",
        "Drew custom SVG room dioramas and station signs that switch colors across all four time-of-day themes.",
      ],
    },
    fieldNote:
      "Building my own station let me put my backend habits and frontend craft in the same place, making sure every GSAP timeline cleans up on navigation and every interactive control works from the keyboard.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const tendedProjects = projects.filter((p) => p.status === "tended");
export const harvestedProjects = projects.filter(
  (p) => p.status === "harvested",
);
