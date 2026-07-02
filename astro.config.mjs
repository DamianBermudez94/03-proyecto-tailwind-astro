// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';  // Usa la integración oficial de Astro

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://damianbermudezdev.net',

  vite: {
    plugins: [tailwind()]
  },

  integrations: [react(), sitemap()]
});;