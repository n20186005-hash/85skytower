import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 網域唯一設定處：確定正式網域後，只需在此填入完整 https URL（例如 https://your-domain.tw）。
// 留空時仍可正常建置；canonical / OG URL 會優雅省略，sitemap 亦不啟用。
const SITE_URL = '';

export default defineConfig({
  site: SITE_URL || undefined,
  integrations: SITE_URL ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
