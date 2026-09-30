# 高雄85大樓多語景點站

Astro + Tailwind CSS + TypeScript，靜態輸出後由 Cloudflare Workers Static Assets 部署。

## 網域設定

正式網域只在 `astro.config.ts` 的 `SITE_URL` 設定一次。留空也能建置；此時 canonical、`og:url`、本地 OG 圖絕對 URL 與 sitemap 都會自動省略。填入正式 `https://...` 後重新建置即可。

## 多語架構

三語：`zh`（預設，位於 `/`）、`en`（`/en/`）、`ja`（`/ja/`）。

- `src/i18n.ts` — 語言清單、`<html lang>` / `og:locale`、hreflang 交替連結、邏輯頁面→各語路徑映射、共享 UI 標籤。
- `src/data/site.ts` — 語言中立的實體事實（評分、座標、地址、高度、樓層、地圖連結）。
- `src/data/content.ts` — 全站多語文案（首頁 `home` 與兩個子頁 `floors` / `transport`）。
- `src/lib/schema.ts` — JSON-LD 構造（TouristAttraction / FAQPage / BreadcrumbList）。
- `src/layouts/BaseLayout.astro` — 統一輸出 TDK、canonical、OG、hreflang、JSON-LD、GA4、Service Worker，以及頁首導覽與語言切換器。
- `src/components/HomeContent.astro` / `SubpageContent.astro` — 依語言渲染首頁與子頁區塊。
- `src/pages/` — `index.astro`（zh）、`en/index.astro`、`ja/index.astro`，子頁 `floors.astro` / `transport.astro` 各三語。

新增語言：在 `src/i18n.ts` 的 `locales` / `localeMeta` / `pagePaths` / `subpageLabel` / `ui` 加入，並在 `src/data/content.ts` 三處字典補齊該語文案；`astro.config.ts` 的 sitemap `i18n.locales` 也要加對應 hreflang 碼。

## 開發與檢查

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

## SEO 重點

- canonical 已固定為 `https://85skytower.org`（不含 www）。
- 每個邏輯頁面都輸出 hreflang（zh-Hant / en / ja + x-default 指向中文版）。
- 首頁與子頁皆含 TouristAttraction + FAQPage 結構化資料；子頁另含 BreadcrumbList。
- 評分 4.1 / 13,285 僅用於網頁展示與 JSON-LD 的 aggregateRating（同步自 Google 地圖，非官方站，已於頁尾與來源區聲明）。

## 部署前必做（Cloudflare 控制台）

Workers Static Assets **不支援**在 `public/_redirects` 做網域級重導向，因此下列項目必須在 Cloudflare 控制台設定，純程式碼無法完成：

1. **Always Use HTTPS**：強制 http→https 301（解決 GSC 目前收錄 `http://` 版本的問題）。
2. **Redirect Rules**：`www.85skytower.org` → `https://85skytower.org`（www→apex 統一規範網址）。
3. 在 Google Search Console 建立 `https://85skytower.org` 資源並重新提交 sitemap。

`public/_headers` 已下發 HSTS 與基本安全標頭作為第二層防護。

## 圖片

實景照使用 Wikimedia Commons 可重用影像，授權詳見 `PHOTO_CREDITS.md`。目前 HTML 以 Wikimedia 圖片 URL 載入；如部署環境要求完全本地化，下載對應檔案至 `public/images/` 後替換 `<img>` 的 `src` 即可。

## 資料狀態

觀光署目前仍標示 85 大樓 37–85 樓整修、暫不開放；網站刻意不寫舊觀景台票價或舊營業時間。正式上線前若營運狀態有變，請同步更新首頁「現況先知道」與 JSON-LD（位於 `src/data/content.ts` 與 `src/data/site.ts`）。
