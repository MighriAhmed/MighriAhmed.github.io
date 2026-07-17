// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { seoConfig } from './src/seo/config.ts';

// https://astro.build/config
export default defineConfig({
  site: seoConfig.url,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        return !seoConfig.sitemapExclude.some((excluded) => {
          const clean = excluded.replace(/\/$/, '') || '/';
          return path === clean || path.startsWith(`${clean}/`);
        });
      },
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        if (path === '/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        if (path === '/projects' || path.startsWith('/projects/')) {
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        }
        if (['/about', '/skills', '/experience', '/services', '/contact'].includes(path)) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        return item;
      },
    }),
  ],
  compressHTML: true,
});
