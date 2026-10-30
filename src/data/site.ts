// 語言中立的實體事實（NAP、座標、評分、高度、樓層、地圖連結等）。
// 這些值不因語言改變，所有語言頁面共用同一份。改地址 / 電話 / 評分只動這裡。

export const facts = {
  // Google 地圖評價（僅作已註明日期的網頁快照，不寫入 aggregateRating）。
  rating: 4.1,
  reviewCount: 13296,
  reviewSync: '2026 年 10 月 30 日',
  reviewSyncEn: '30 October 2026',
  reviewSyncJa: '2026 年 10 月 30 日',

  // 建築實體事實。
  nameZh: '高雄85大樓',
  nameEn: '85 Sky Tower',
  nameJa: '85 大樓（85スカイタワー）',
  alternateNames: ['85 Sky Tower', 'Tuntex Sky Tower', '東帝士85國際廣場', '高雄85大樓', 'Kaohsiung 85 Sky Tower'],

  // 建築地標座標採交通部觀光署資料；不是已核實的特定入口。
  geo: { lat: 22.611047, lng: 120.30037 },
  // 觀光署正式地標地址為自強三路1號；地圖介面另列5號，不能據此保證入口或電梯互通。
  address: {
    street: '自強三路1號',
    locality: '苓雅區',
    region: '高雄市',
    postal: '802',
    country: 'TW',
    countryName: '台灣',
  },
  plusCode: 'J862+M3 意誠里 高雄市苓雅區',

  // 建築物理資訊。
  heightMeters: 347.5,
  floorsAbove: 85,
  floorsBelow: 5,

  mapUrl: 'https://maps.app.goo.gl/RUknnzQqELmLteJh6',
  govtTourismUrl: 'https://www.taiwan.net.tw/m1.aspx?id=9328&sNo=0001016',

  // 現況描述（語言中立的結構化狀態，前端各語翻譯）。
  statusNote: '37–85 樓整修中，觀景區暫不開放；外觀與周邊公共空間可依現場狀況參觀。',
};

// 各語的「景點名稱」與「SEO 站名」。站名格式：景點 + 城市 + 旅遊指南。
export const namesByLocale = {
  zh: { attraction: '高雄85大樓', siteName: '高雄85大樓旅遊指南' },
  en: { attraction: '85 Sky Tower', siteName: '85 Sky Tower Kaohsiung Travel Guide' },
  ja: { attraction: '85 大樓（85スカイタワー）', siteName: '高雄 85 大樓（85スカイタワー）観光ガイド' },
} as const;
