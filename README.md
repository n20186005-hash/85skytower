# 高雄85大樓單頁景點站

Astro + Tailwind CSS + TypeScript，靜態輸出後由 Cloudflare Workers Static Assets 部署。

## 網域設定

正式網域只在 `astro.config.ts` 的 `SITE_URL` 設定一次。留空也能建置；此時 canonical、`og:url`、本地 OG 圖絕對 URL 與 sitemap 都會自動省略。填入正式 `https://...` 後重新建置即可。

## 開發與檢查

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

## 圖片

實景照使用 Wikimedia Commons 可重用影像，授權詳見 `PHOTO_CREDITS.md`。目前 HTML 以 Wikimedia 圖片 URL 載入；如部署環境要求完全本地化，下載對應檔案至 `public/images/` 後替換三個 `<img>` 的 `src` 即可。

## 資料狀態

觀光署目前仍標示 85 大樓 37–85 樓整修、暫不開放；網站刻意不寫舊觀景台票價或舊營業時間。正式上線前若營運狀態有變，請同步更新首頁「現況先知道」與 JSON-LD。
