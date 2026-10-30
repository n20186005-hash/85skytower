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
- Google Maps大樓介面評分4.1／13,296為2026年10月30日手動快照，非特定旅宿評價，且不寫入aggregateRating；無評論全文複製或即時同步宣稱。

## 入口驗證

程式canonical保持`https://85skytower.org`。HTTP與www屬既有入口，canonical標籤和HSTS本身不能證明已完成伺服器跳轉。部署後必須實測Host／協定／路徑／query與GET／HEAD；本次不更改DNS、安全或託管設定，也不把受限的網路請求當作已驗證可用。

## 圖片

正文目前使用有明確標示的本地符號插畫，非實景、精確重建或樓層圖；既有SVG社交圖以已安裝的Sharp匯出PNG。原外部照片的逐檔來源與授權紀錄保留在`PHOTO_CREDITS.md`，但不再向外請求未完成像素核實的檔案。公開署名與來源位於各頁可見來源區。

## 資料狀態

觀光署目前仍標示 85 大樓 37–85 樓整修、暫不開放；網站刻意不寫舊觀景台票價或舊營業時間。正式上線前若營運狀態有變，請同步更新首頁「現況先知道」與 JSON-LD（位於 `src/data/content.ts` 與 `src/data/site.ts`）。

## 現況與隱私

保留三語九個內容路由及純靜態架構，樓層與交通頁使用與原有網址相容的尾斜線版本。37–85樓參觀整修公告不等於整棟停用或任何旅宿仍營業。地址1號與地圖5號的來源及實際入口需分別確認。建築高度347.5m與最高尖端378m依專業資料庫分開表述。

既有GA自動載入保留，修正原先字面量識別碼。三語說明GA、地圖、Cloudflare託管邊緣與可能的beacon，沒有虛構站內開關。服務工作執行緒只退役85skytower-前綴的舊快取，不攔截請求或刪除其他快取。無天氣API小工具，也未新增代理或快取架構。
