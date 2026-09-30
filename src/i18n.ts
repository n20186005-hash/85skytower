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
  floors: { zh: '/floors', en: '/en/floors', ja: '/ja/floors' },
  transport: { zh: '/transport', en: '/en/transport', ja: '/ja/transport' },
};

// hreflang 屬性值（defaultLocale 用網站根，其餘用語言碼）。
const hreflangCode: Record<Locale, string> = {
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
    'footer.cookies': 'Cookie 設定',
    'footer.disclaimer': '本網站為非官方旅遊資訊頁，與 85 大樓、館內業者、政府機關或 Google 均無隸屬或授權關係；開放狀態、交通與店家資訊請以官方及現場最新公告為準。',
    'footer.photo': '照片授權詳見專案 PHOTO_CREDITS.md',
    'legal.privacy': '隱私說明',
    'legal.privacyBody': '本站不提供登入或會員功能。為了解頁面使用情況，使用 Google Analytics 4；相關資料處理由 Google 的服務與瀏覽器設定決定。',
    'legal.terms': '使用條款',
    'legal.termsBody': '本站內容供行程規劃參考，不保證即時性。涉及開放、費用、交通與營運資訊時，請於出發前向官方來源再次確認。',
    'legal.cookies': 'Cookie 設定',
    'legal.cookiesBody': '本站本身不建立會員 Cookie。GA4 可能依你的瀏覽器與 Google 設定使用分析相關技術；可透過瀏覽器封鎖第三方 Cookie 或追蹤功能。',
    'reviews.googleCount': '{n} 則 Google 地圖評論',
    'reviews.outOf': '5 分滿分 · {n} 則評論',
    'reviews.syncNote': '{note}，同步時間 {date}；版權歸原作者與 Google 地圖所有。',
    'hero.viewAll': '點擊查看全部評價↗',
    'og.imageAlt': '高雄85大樓（85 Sky Tower）夜景與城市天際線',
    'logo.alt': '高雄85大樓',
    'label.ticket': '門票',
    'label.address': '地址',
    'label.explore': '延伸閱讀',
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
    'footer.cookies': 'Cookie settings',
    'footer.disclaimer': 'This is an unofficial travel information page. It is not affiliated with or authorized by the 85 Sky Tower, its tenants, any government agency, or Google. Always confirm opening status, transport, and venue details with official and on-site sources before your visit.',
    'footer.photo': 'Photo credits: see PHOTO_CREDITS.md',
    'legal.privacy': 'Privacy',
    'legal.privacyBody': 'This site offers no login or membership features. Google Analytics 4 is used to understand page usage; how that data is processed depends on Google services and your browser settings.',
    'legal.terms': 'Terms',
    'legal.termsBody': 'Content is provided for trip planning reference and is not guaranteed to be up to date. For opening status, fees, transport and operating information, confirm with official sources before departure.',
    'legal.cookies': 'Cookie settings',
    'legal.cookiesBody': 'This site itself sets no membership cookies. GA4 may use analytics technologies depending on your browser and Google settings; you can block third-party cookies or tracking via your browser.',
    'reviews.googleCount': '{n} Google Maps reviews',
    'reviews.outOf': '{n} reviews out of 5',
    'reviews.syncNote': '{note}, synced {date}; copyright belongs to the original authors and Google Maps.',
    'hero.viewAll': 'View all reviews ↗',
    'og.imageAlt': '85 Sky Tower Kaohsiung at night with the city skyline',
    'logo.alt': '85 Sky Tower',
    'label.ticket': 'Ticket',
    'label.address': 'Address',
    'label.explore': 'Explore',
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
    'footer.cookies': 'Cookie 設定',
    'footer.disclaimer': '本サイトは非公式の観光案内ページです。85 大樓（85 スカイタワー）、館内テナント、政府機関、Google とは提携・公認関係にありません。営業状況・交通・店舗情報は公式発表および現地の最新案内をご確認ください。',
    'footer.photo': '写真クレジットは PHOTO_CREDITS.md を参照',
    'legal.privacy': 'プライバシー',
    'legal.privacyBody': '本サイトはログインや会員機能を提供しません。ページ利用状況の把握のため Google Analytics 4 を使用しています。データの取扱いは Google のサービスとブラウザ設定に依存します。',
    'legal.terms': '利用規約',
    'legal.termsBody': '本サイトの内容は旅程計画の参考用で、即時性を保証しません。営業状況・料金・交通・運営情報は出発前に公式情報源でご確認ください。',
    'legal.cookies': 'Cookie 設定',
    'legal.cookiesBody': '本サイト自体は会員 Cookie を作成しません。GA4 はブラウザと Google の設定により分析技術を使う場合があります。ブラウザでサードパーティ Cookie やトラッキングをブロックできます。',
    'reviews.googleCount': 'Google マップのレビュー {n} 件',
    'reviews.outOf': '5 点満点 · {n} 件のレビュー',
    'reviews.syncNote': '{note}、同期日時 {date}。著作権は原作者と Google マップに帰属。',
    'hero.viewAll': 'すべてのレビューを見る ↗',
    'og.imageAlt': '高雄 85 大樓（85スカイタワー）の夜景と街のスカイライン',
    'logo.alt': '85 大樓（85スカイタワー）',
    'label.ticket': 'チケット',
    'label.address': '住所',
    'label.explore': '関連ページ',
  },
};

export function t(locale: Locale, key: string): string {
  return ui[locale]?.[key] ?? ui[defaultLocale][key] ?? key;
}
