// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import { site } from './src/data/site.ts';

// https://astro.build/config
export default defineConfig({
  // Single source of truth: `src/data/site.ts` also drives canonicals, Open Graph and JSON-LD.
  site: site.url,
  vite: {
    plugins: [tailwindcss()]
  }
});