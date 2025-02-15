// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';  // Usa la integración oficial de Astro

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwind()]
  }
});