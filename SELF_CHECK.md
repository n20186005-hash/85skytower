# 交付前檢查紀錄

## 已完成的靜態檢查

- `package.json` 所有 dependencies / devDependencies 均為精確版本，未使用 `latest`、`*`、`^`、`~`。
- 未建立 `pnpm-workspace.yaml`。
- 原始專案已 grep：未發現 `example.com`、`localhost`、`chrome-extension://`。
- 已確認頁面包含 GA4 `G-HXM22WWPKP`、TouristAttraction / LocalBusiness JSON-LD、FAQPage、繁中 Google Maps 參數、周邊美食、交通、停車、門票／費用與最佳時段內容。
- Astro `site` 只有 `astro.config.ts` 一處設定；預設留空，sitemap 只在有 site 時載入。

## 本執行環境無法完成的網路型檢查

嘗試執行：

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
```

執行環境無法解析 `registry.npmjs.org`，Corepack 在下載 `pnpm-12.4.2.tgz` 前即以 `getaddrinfo EAI_AGAIN` 結束，因此本環境無法繼續跑 `pnpm check` 與 `pnpm build`。同一網路限制也阻止把 Wikimedia Commons 的 JPG 二進位檔下載到專案，因此正文暫以 Commons 授權圖片 URL 載入，來源與授權已列於 `PHOTO_CREDITS.md`。

> 注意：目前的 `pnpm-lock.yaml` 僅保留精確 importer 鎖定資訊，因無法連到 npm registry 產生完整 transitive snapshots；在有網路的開發環境中，請先執行一次 `corepack pnpm install --lockfile-only` 產生完整 lockfile，再執行使用者要求的 frozen-lockfile 驗證流程。不要把本檔視為已通過 frozen install 的證明。
