// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { site } from './src/data/site.ts';

// https://astro.build/config
export default defineConfig({
  // Single source of truth: `src/data/site.ts` also drives canonicals, Open Graph and JSON-LD.
  site: site.url,
  integrations: [
    sitemap({
      filter: (page) =>
        !['/offers', '/letterbox', '/waiting-room'].includes(
          new URL(page).pathname.replace(/\/$/, ''),
        ),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});