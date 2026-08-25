// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const base = process.env.BASE || '/';

export default defineConfig({
  site: process.env.SITE || 'https://sixshoes.github.io',
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
