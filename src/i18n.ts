// 多語路由與 hreflang 核心模組。
// 語言：zh（預設，位於 /）、en（/en/）、ja（/ja/）。
// 所有頁面邏輯路徑 → 各語實際路徑，都由這裡統一映射，避免散落硬編碼。

export const locales = ['zh', 'en', 'ja'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

// 每個語言的 <html lang> 與 og:locale，以及給語言切換器顯示的標籤。
export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; label: string }> = {
  zh: { htmlLang: 'zh-Hant-TW', ogLocale: 'zh_TW', label: '繁體中文' },
  en: { htmlLang: 'en', ogLocale: 'en_US', label: 'English' },
  ja: { htmlLang: 'ja', ogLocale: 'ja_JP', label: '日本語' },
};

// 邏輯頁面 → 各語路徑。新增頁面時只要在此加一組即可。
export type PageKey = 'home' | 'floors' | 'transport';

export const pagePaths: Record<PageKey, Record<Locale, string>> = {
  home: { zh: '/', en: '/en/', ja: '/ja/' },
  floors: { zh: '/floors/', en: '/en/floors/', ja: '/ja/floors/' },
  transport: { zh: '/transport/', en: '/en/transport/', ja: '/ja/transport/' },
};

// hreflang 屬性值（defaultLocale 用網站根，其餘用語言碼）。
export const hreflangCode: Record<Locale, string> = {
  zh: 'zh-Hant',
  en: 'en',
  ja: 'ja',
};

// 給定邏輯頁面與正式網域，回傳完整的 hreflang 交替連結陣列（含 x-default）。
export function alternates(page: PageKey, site: string): { hreflang: string; href: string }[] {
  const out = locales.map((l) => ({
    hreflang: hreflangCode[l],
    href: new URL(pagePaths[page][l], site).toString(),
  }));
  out.push({ hreflang: 'x-default', href: new URL(pagePaths[page][defaultLocale], site).toString() });
  return out;
}

// 語言切換器：回傳「同一邏輯頁面在其他語言的路徑」。
export function localizedPath(page: PageKey, locale: Locale): string {
  return pagePaths[page][locale];
}

// 子頁顯示名稱（麵包屑、語言切換、Explore 區塊共用）。
export const subpageLabel: Record<PageKey, Record<Locale, string>> = {
  home: { zh: '首頁', en: 'Home', ja: 'ホーム' },
  floors: { zh: '樓層導覽', en: 'Floors', ja: 'フロア' },
  transport: { zh: '交通與停車', en: 'Transport & Parking', ja: 'アクセスと駐車' },
};

// 共享 UI 標籤字典（導覽、頁尾、語言切換等跨頁共用的短語）。
export const ui: Record<Locale, Record<string, string>> = {
  zh: {
    'nav.status': '現況',
    'nav.transport': '交通',
    'nav.around': '周邊',
    'nav.reviews': '評價',
    'nav.faq': 'FAQ',
    'nav.floors': '樓層',
    'nav.map': '地圖',
    'nav.home': '首頁',
    'cta.map': 'Google 地圖 ↗',
    'lang.switch': '語言',
    'footer.privacy': '隱私說明',
    'footer.terms': '使用條款',
    'footer.cookies': 'Cookie說明',
    'footer.disclaimer': '本網站為非官方旅遊資訊頁，與 85 大樓、館內業者、政府機關或 Google 均無隸屬或授權關係；開放狀態、交通與店家資訊請以官方及現場最新公告為準。',
    'footer.photo': '插畫與來源',
    'legal.privacy': '隱私說明',
    'legal.privacyBody': '本站沒有會員登入。Google Analytics 4會自動載入並設定量測識別碼，可能處理頁面瀏覽、裝置與瀏覽器資訊及分析Cookie；實際事件傳送未在本次核實。嵌入地圖也會連接Google並提供連線資料。Cloudflare提供託管、傳輸與安全服務，處理請求及連線技術資料；邊緣統計與GA分開。託管設定可能插入Cloudflare Web Analytics瀏覽器beacon，用於訪問、頁面及效能量測，運行時可能涉及頁面／來源、國家、瀏覽器、裝置及作業系統。本次未能確認正式頁面的beacon注入、執行或資料傳送。原始CSP未允許該外部script網域及Cloudflare跨源連線，若政策原樣送達，預期會阻擋該腳本與相關傳送；這不代表停用託管邊緣統計。本站沒有GA或託管量測開關。',
    'legal.terms': '使用條款',
    'legal.termsBody': '本站內容供行程規劃參考，不保證即時性。涉及開放、費用、交通與營運資訊時，請於出發前向官方來源再次確認。',
    'legal.cookies': 'Cookie說明',
    'legal.cookiesBody': '可使用瀏覽器的隱私工具限制請求或Cookie。這不是本站內的選擇功能，也不保證移除已載入的腳本、刪除所有Google Cookie或停止託管端統計。',
    'reviews.googleCount': '{n} 則 Google 地圖評論',
    'reviews.outOf': '5 分滿分 · {n} 則評論',
    'reviews.syncNote': '{note} · 手動核對日期 {date}，未複製評論全文。',
    'hero.viewAll': '點擊查看全部評價↗',
    'og.imageAlt': '高樓與港灣符號插畫，非實景照片',
    'logo.alt': '高雄85大樓',
    'label.ticket': '門票',
    'label.address': '地址',
    'label.explore': '延伸閱讀'
  },
  en: {
    'nav.status': 'Status',
    'nav.transport': 'Getting here',
    'nav.around': 'Around',
    'nav.reviews': 'Reviews',
    'nav.faq': 'FAQ',
    'nav.floors': 'Floors',
    'nav.map': 'Map',
    'nav.home': 'Home',
    'cta.map': 'Google Maps ↗',
    'lang.switch': 'Language',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.cookies': 'Cookie information',
    'footer.disclaimer': 'This is an unofficial travel information page. It is not affiliated with or authorized by the 85 Sky Tower, its tenants, any government agency, or Google. Always confirm opening status, transport, and venue details with official and on-site sources before your visit.',
    'footer.photo': 'Illustrations and sources',
    'legal.privacy': 'Privacy',
    'legal.privacyBody': 'This guide has no member login. Google Analytics 4 loads and configures a measurement ID automatically; it may process page views, device/browser information and analytics cookies. Actual event transmission was not verified in this review. Embedded Maps also contacts Google and provides connection data. Cloudflare hosts, delivers and protects the site, processing technical request/connection data; edge statistics are separate from GA. Hosting settings may insert a Cloudflare Web Analytics browser beacon for visits, page views and performance, with page/referrer, country, browser, device and operating-system dimensions when it runs. Production beacon injection, execution and transmission could not be confirmed here. The source CSP excludes that external script domain and Cloudflare cross-origin connections; if delivered unchanged, it is expected to block that script and related sends. This does not disable hosting edge statistics. There is no on-site GA or hosting-measurement switch.',
    'legal.terms': 'Terms',
    'legal.termsBody': 'Content is provided for trip planning reference and is not guaranteed to be up to date. For opening status, fees, transport and operating information, confirm with official sources before departure.',
    'legal.cookies': 'Cookie information',
    'legal.cookiesBody': 'Browser privacy tools can restrict requests or cookies. This is not an on-site choice feature and does not guarantee removal of loaded scripts, deletion of all Google cookies or cessation of hosting statistics.',
    'reviews.googleCount': '{n} Google Maps reviews',
    'reviews.outOf': 'Rated out of 5 · {n} reviews',
    'reviews.syncNote': '{note} · checked {date}; no review text copied.',
    'hero.viewAll': 'View all reviews ↗',
    'og.imageAlt': 'Symbolic tower and harbor illustration, not a photograph',
    'logo.alt': '85 Sky Tower',
    'label.ticket': 'Ticket',
    'label.address': 'Address',
    'label.explore': 'Explore'
  },
  ja: {
    'nav.status': '現況',
    'nav.transport': 'アクセス',
    'nav.around': '周辺',
    'nav.reviews': '評価',
    'nav.faq': 'よくある質問',
    'nav.floors': 'フロア',
    'nav.map': '地図',
    'nav.home': 'ホーム',
    'cta.map': 'Google マップ ↗',
    'lang.switch': '言語',
    'footer.privacy': 'プライバシー',
    'footer.terms': '利用規約',
    'footer.cookies': 'Cookieについて',
    'footer.disclaimer': '本サイトは非公式の観光案内ページです。85 大樓（85 スカイタワー）、館内テナント、政府機関、Google とは提携・公認関係にありません。営業状況・交通・店舗情報は公式発表および現地の最新案内をご確認ください。',
    'footer.photo': '図と出典',
    'legal.privacy': 'プライバシー',
    'legal.privacyBody': '会員ログイン機能はありません。Google Analytics 4は自動で読み込まれ、計測IDを設定します。ページ閲覧、端末・ブラウザー情報、解析Cookieを処理する場合があります。実際のイベント送信は本確認では検証していません。埋め込み地図もGoogleへ接続情報を送ります。Cloudflareは配信・保護・ホスティングのためリクエストと接続の技術情報を処理し、エッジ統計はGAとは別です。ホスティング設定によりCloudflare Web Analyticsのブラウザーbeacon参照が挿入される場合があり、動作時には訪問・ページ・性能と、ページ／参照元、国、ブラウザー、端末、OSなどを計測し得ます。公開ページへの挿入・実行・送信は未確認です。ソースのCSPはその外部scriptドメインとCloudflareへの外部接続を許可しないため、そのまま届けば脚本と関連送信を遮断すると予想されますが、エッジ統計が止まる意味ではありません。サイト内にGAやホスティング計測のスイッチはありません。',
    'legal.terms': '利用規約',
    'legal.termsBody': '本サイトの内容は旅程計画の参考用で、即時性を保証しません。営業状況・料金・交通・運営情報は出発前に公式情報源でご確認ください。',
    'legal.cookies': 'Cookieについて',
    'legal.cookiesBody': 'ブラウザーのプライバシー設定でリクエストやCookieを制限できます。サイト内の選択機能ではなく、読込済み脚本や全Google Cookieの削除、ホスティング統計の停止を保証しません。',
    'reviews.googleCount': 'Google マップのレビュー {n} 件',
    'reviews.outOf': '5 点満点 · {n} 件のレビュー',
    'reviews.syncNote': '{note} · 確認日 {date}。レビュー本文は転載しません。',
    'hero.viewAll': 'すべてのレビューを見る ↗',
    'og.imageAlt': '高層ビルと港のシンボル図。実景写真ではありません',
    'logo.alt': '85 大樓（85スカイタワー）',
    'label.ticket': 'チケット',
    'label.address': '住所',
    'label.explore': '関連ページ'
  }
};

export function t(locale: Locale, key: string): string {
  return ui[locale]?.[key] ?? ui[defaultLocale][key] ?? key;
}
