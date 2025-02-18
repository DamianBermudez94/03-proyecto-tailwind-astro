// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';  // Usa la integración oficial de Astro

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwind()]
  },

  integrations: [react()]
});