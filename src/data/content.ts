// 全站多語文案：首頁（home）與兩個專題子頁（floors / transport）。
// 結構化後由 HomeContent.astro 與 SubpageContent.astro 渲染；改文案只動這裡。
// 實體事實（座標、評分、高度等）請見 src/data/site.ts，不要在此硬編碼。

export interface HomeContent {
  title: string;
  description: string;
  hero: {
    kicker: string;
    titleA: string;
    titleB: string;
    intro: string;
    badges: string[];
    ratingNote: string;
    ctaPrimary: string;
    ctaSecondary: string;
    figureCaption: string;
    coordLabel: string;
  };
  status: {
    kicker: string;
    title: string;
    lead: string;
    closedTitle: string;
    closedBody: string;
    ticketTitle: string;
    ticketBody: string;
    addressTitle: string;
    addressBody: string;
  };
  bestTime: {
    kicker: string;
    titleA: string;
    titleB: string;
    body: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
  };
  transport: {
    kicker: string;
    title: string;
    lead: string;
    cards: { icon: string; title: string; body: string }[];
    parkingKicker: string;
    parkingTitle: string;
    parkingBody: string;
    parkingTipTitle: string;
    parkingTips: { title: string; body: string }[];
  };
  route: {
    kicker: string;
    title: string;
    lead: string;
    stops: string[];
  };
  architecture: {
    kicker: string;
    title: string;
    body: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
  };
  around: {
    kicker: string;
    title: string;
    nearby: { name: string; desc: string }[];
    foodKicker: string;
    foodTitle: string;
    foodLead: string;
    food: { name: string; desc: string }[];
  };
  reviews: {
    kicker: string;
    title: string;
    lead: string;
  };
  mapSection: {
    title: string;
    note: string;
  };
  faq: { q: string; a: string }[];
  fieldNote: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
  };
  sources: {
    kicker: string;
    title: string;
    body: string[];
  };
}

export interface SubContent {
  title: string;
  description: string;
  intro: string;
  blocks: {
    kicker: string;
    title: string;
    body?: string;
    stats?: { value: string; label: string }[];
    list?: { name: string; desc: string }[];
  }[];
  faq: { q: string; a: string }[];
}

import type { Locale } from '../i18n';

// ---------------------------------------------------------------------------
// 首頁文案
// ---------------------------------------------------------------------------

export const home: Record<Locale, HomeContent> = {
  zh: {
    title: '高雄85大樓旅遊指南｜樓層導覽、觀景台現況、交通停車與周邊散步',
    description:
      '高雄85大樓（85 Sky Tower）最新旅遊指南：樓層導覽、37–85樓整修現況、建築高度 347.5 公尺、交通與停車、最佳拍攝時段、周邊景點與美食。',
    hero: {
      kicker: 'Kaohsiung · Harbor Skyline',
      titleA: '城市往上',
      titleB: '港灣向前',
      intro:
        '高雄85大樓不只是「一棟高樓」。從三多商圈走向港邊時，它像一支垂直座標，把高雄的商業街區、亞洲新灣區與海港視線串在一起。',
      badges: ['85層地標', '建築高度 347.5 m', '高雄苓雅區'],
      ratingNote: '評分與評價數同步自 Google 地圖用戶評價',
      ctaPrimary: '先看目前開放狀況',
      ctaSecondary: '規劃港灣散步',
      figureCaption: '實景照：Suicasmo / Wikimedia Commons / CC BY-SA 4.0',
      coordLabel: '22.611°N · 120.300°E',
    },
    status: {
      kicker: 'Before you go',
      title: '現況先知道',
      lead: '這一段比「打卡攻略」更重要：舊網路文章常提到高樓層觀景台，但目前並不適用。',
      closedTitle: '37–85樓整修中，觀景區暫不開放',
      closedBody:
        '交通部觀光署目前仍以此狀態標示 85 大樓。本站不沿用舊的 74／75 樓觀景台票價與開放時間，以免誤導行程。',
      ticketTitle: '沒有現行觀景台票價可列',
      ticketBody:
        '從外部欣賞建築、走訪周邊街區本身不收景點門票；館內個別營運單位若有費用，以其公告為準。',
      addressTitle: '1號與5號，都是同一座建築範圍',
      addressBody:
        '本頁 Google 點位為自強三路5號；觀光署景點資料列自強三路1號。前往特定入口時，依你的目的地點位導航即可。',
    },
    bestTime: {
      kicker: 'Best light',
      titleA: '最佳游覽時段',
      titleB: '不是「上樓」，而是看城市變色',
      body:
        '如果目標是建築與城市攝影，傍晚到入夜最有層次：先在新光路一帶看玻璃帷幕收進最後的日光，再往港邊走，回頭看 85 大樓在燈光與海港之間形成高雄最容易辨認的輪廓。',
      stat1Value: '45–90 分',
      stat1Label: '只看建築外觀＋附近街區的建議停留',
      stat2Value: '2–3 小時',
      stat2Label: '加入總圖、展覽館與愛河灣散步',
    },
    transport: {
      kicker: 'Getting here',
      title: '詳細交通',
      lead: '85 大樓最適合用大眾運輸抵達，再把步行路線延伸到港灣。這樣不必繞回取車，也比較能感受到街區尺度的變化。',
      cards: [
        { icon: 'M', title: '捷運｜紅線 R8 三多商圈站', body: '由 1 號出口沿三多四路方向步行，市府新灣區交通資訊估計約 8 分鐘可到 85 大樓周邊。' },
        { icon: 'C', title: '輕軌｜高雄展覽館站', body: '下車後沿新光路步行，市府資訊約 3 分鐘可達；很適合直接串聯高雄展覽館、總圖與愛河灣。' },
        { icon: 'BUS', title: '公車｜85大樓站', body: '市府新灣區交通資訊列有 100、黃1、綠1、83 等路線可抵達 85 大樓站；實際班次請以高雄公車即時資訊為準。' },
        { icon: 'CAR', title: '開車｜國道1號中正交流道方向', body: '可循中正路、三多路進市區，再轉自強三路。尖峰時段建議預留市中心壅塞與找車位時間。' },
      ],
      parkingKicker: 'Parking',
      parkingTitle: '停車資訊',
      parkingBody:
        '觀光署交通資料列出的附近停車選項包含榮帝苓雅三多站停車場、高興昌第二停車場與實全中華路停車場。費率與空位變動快，本站不寫死價格。',
      parkingTipTitle: '如果你是為了拍夜景，建議這樣選：',
      parkingTips: [
        { title: '短停', body: '先找自強路／三多路周邊停車場，再步行繞大樓一圈。' },
        { title: '長停', body: '若要走總圖、展覽館、港邊，停一次後全程步行或搭輕軌更順。' },
        { title: '週末', body: '展覽活動可能影響新灣區車流，提早抵達通常比繞場找位更省時間。' },
      ],
    },
    route: {
      kicker: 'Harbor walk',
      title: '一條不必上樓的 85 散步線',
      lead: '建議從「城市」走向「港口」：三多商圈 → 85 大樓 → 高雄市立圖書館總館 → 高雄展覽館 → 愛河灣。黃昏出發最容易看到空間與光線一起變化。',
      stops: ['三多商圈', '85大樓', '高雄市立圖書館總館', '高雄展覽館', '愛河灣'],
    },
    architecture: {
      kicker: 'Architecture',
      title: '看見「高」之外的結構',
      body:
        '85 大樓的辨識度來自兩側量體托起中央主塔的構圖。它不是單一方盒，而是把基座、雙翼、鏤空區域與上方塔身疊成一個很有方向性的輪廓。從不同街角移動，建築的開口與翼部會不斷改變比例。',
      stat1Value: '347.5 m',
      stat1Label: '建築高度（Skyscraper Center）',
      stat2Value: '85 + 5',
      stat2Label: '地上 85 層、地下 5 層',
    },
    around: {
      kicker: 'Nearby places',
      title: '周邊景點',
      nearby: [
        { name: '高雄市立圖書館總館', desc: '玻璃量體與空中花園，是 85 大樓旁最適合一起看的現代建築。' },
        { name: '高雄展覽館', desc: '沿新光路往港邊走，很快就會從高樓街廓切換到港灣尺度。' },
        { name: '愛河灣·新光碼頭', desc: '黃昏散步的重點區域，適合回望 85 大樓在港區天際線中的比例。' },
        { name: '三多商圈', desc: '百貨、餐飲與城市機能密集，可作為抵達或離開前的補給站。' },
      ],
      foodKicker: 'Eat nearby',
      foodTitle: '周邊美食',
      foodLead: '店家營業資訊容易變動，這裡只做方向性選擇，不硬寫可能過期的營業時間與價格。',
      food: [
        { name: '興中夜市／苓雅夜市一帶', desc: '小吃密度高，適合把 85 大樓夜景與在地晚餐排成同一段行程。' },
        { name: '好小子碳烤三明治', desc: '位於自強路、三多路一帶，適合作為快速小吃選項。' },
        { name: 'MICASITA 米卡希達 墨西哥料理', desc: '鄰近街區的異國料理選擇，適合想坐下來用餐的人。' },
        { name: 'Rawat Indian Kitchen', desc: '周邊可找到的印度料理選項；營業時段與座位狀況建議出發前再確認。' },
      ],
    },
    reviews: {
      kicker: 'Guest ratings',
      title: '來自 Google 地圖的旅客評價',
      lead: '評分與評價數同步自 Google 地圖（Google Maps）使用者評價，僅作為旅程參考；實際體驗仍以現場與官方公告為準。',
    },
    mapSection: {
      title: '位置與入口',
      note: '地圖以你提供的 Google Maps 點位座標（自強三路5號）顯示；觀光署景點資料的正式地標地址為自強三路1號。',
    },
    faq: [
      { q: '高雄85大樓有多高？有幾層樓？', a: '高雄 85 大樓（又稱東帝士 85 國際廣場）建築高度約 347.5 公尺（含尖頂結構），地上 85 層、地下 5 層，是高雄市第一高樓、臺灣指標性的超高層建築之一。' },
      { q: '85大樓裡面有什麼？樓層怎麼分？', a: '大樓由下而上大致分為：低樓層為大廳與商場空間，中樓層為辦公與住宅型單位，高樓層原規劃為觀景與旅宿設施。具體進駐與用途會隨營運調整，前往前請以現場或各單位公告為準。' },
      { q: '高雄85大樓目前還有營業嗎？現況為何？', a: '大樓本體持續營運，低樓層仍有辦公、店家與周邊設施；但交通部觀光署目前仍標示 37–85 樓因整修暫不開放，因此不要依照舊資料安排高樓層觀景行程。' },
      { q: '參觀高雄85大樓需要買門票嗎？', a: '目前沒有可列出的現行觀景台票價。從外部欣賞建築與走訪周邊街區不需要景點門票；館內個別營運空間如有收費，則依各單位公告。' },
      { q: '搭捷運或輕軌怎麼去最方便？', a: '可從捷運紅線三多商圈站步行前往，也可搭輕軌至高雄展覽館站後沿新光路步行。兩條路線都適合串聯總圖、展覽館與愛河灣。' },
      { q: '什麼時間最適合拍85大樓？', a: '外觀攝影建議選傍晚到入夜，能同時捕捉天色漸層、玻璃帷幕與城市燈光。白天則更適合看建築輪廓與港區尺度。' },
      { q: 'Google 地圖地址為什麼和觀光署地址不同？', a: '這個 Google 地圖點位標示自強三路5號，較接近特定入口或住宿型點位；交通部觀光署的 85 大樓景點資料則列自強三路1號。兩者位於同一大樓範圍，導航時可依實際要前往的入口選擇。' },
    ],
    fieldNote: {
      kicker: 'Field note',
      title: '把 85 大樓當成一個「方向」，而不是一張舊觀景台門票。',
      body: '它最值得看的，是高雄如何從三多商圈一路打開到港邊。建議先確認現況，再把時間留給街區、建築與黃昏。',
      cta: '開始導航 ↗',
    },
    sources: {
      kicker: 'Sources',
      title: '資料來源',
      body: [
        '評價同步自 Google 地圖（Google Maps）用戶評價；版權歸原作者與 Google 地圖所有。',
        '位置、開放狀態、交通與周邊資訊以交通部觀光署及高雄市政府最新公告為準；店家營業資訊請以現場為準。',
      ],
    },
  },

  en: {
    title: '85 Sky Tower Kaohsiung Travel Guide | Floors, Observation Deck Status, Transport & Parking',
    description:
      'The latest 85 Sky Tower (Kaohsiung) travel guide: floor guide, current 37–85F renovation status, 347.5 m height, MRT & LRT access, parking, best photo time, and nearby attractions.',
    hero: {
      kicker: 'Kaohsiung · Harbor Skyline',
      titleA: 'City goes up',
      titleB: 'Harbor moves forward',
      intro:
        "Kaohsiung's 85 Sky Tower is more than a tall building. Walking from Sanduo Shopping District toward the bay, it acts like a vertical coordinate tying the city's commercial blocks, Asia New Bay Area, and the harbor view together.",
      badges: ['85-floor landmark', '347.5 m tall', 'Lingya, Kaohsiung'],
      ratingNote: 'Rating and review count synced from Google Maps user reviews',
      ctaPrimary: 'Check current status first',
      ctaSecondary: 'Plan a harbor walk',
      figureCaption: 'Photo: Suicasmo / Wikimedia Commons / CC BY-SA 4.0',
      coordLabel: '22.611°N · 120.300°E',
    },
    status: {
      kicker: 'Before you go',
      title: 'Know the current status',
      lead: 'This matters more than a checklist: older articles often mention a high-floor observation deck, but it does not currently apply.',
      closedTitle: 'Floors 37–85 under renovation; observation area closed',
      closedBody:
        'Taiwan’s Tourism Administration still lists the 85 Sky Tower this way. We do not repeat the old 74F/75F observation deck pricing or hours, to avoid misleading your trip planning.',
      ticketTitle: 'No current observation-deck ticket price to list',
      ticketBody:
        'Viewing the building from outside and walking the surrounding blocks costs no attraction ticket. Individual operators inside may charge; follow their on-site notices.',
      addressTitle: 'No. 1 or No. 5 — same building footprint',
      addressBody:
        'Our Google Maps point shows No. 5, Zihciang 3rd Rd; the Tourism Administration lists No. 1. Both sit within the same building footprint — navigate to the entrance you actually need.',
    },
    bestTime: {
      kicker: 'Best light',
      titleA: 'Best time to visit',
      titleB: 'Not "going up", but watching the city change color',
      body:
        'For architecture and city photography, late afternoon to night has the most depth: catch the glass curtain wall in the last daylight around Xinguang Rd, then walk toward the bay and look back as the tower becomes Kaohsiung’s most recognizable silhouette against the lights and harbor.',
      stat1Value: '45–90 min',
      stat1Label: 'Suggested stop if you only view the exterior + nearby blocks',
      stat2Value: '2–3 hrs',
      stat2Label: 'Add the Main Library, Exhibition Center and Love River Bay',
    },
    transport: {
      kicker: 'Getting here',
      title: 'Detailed transport',
      lead: 'The 85 Sky Tower is best reached by public transit, then extend your walk to the harbor. That way you avoid backtracking for your car and feel the change in block scale.',
      cards: [
        { icon: 'M', title: 'MRT | Red Line R8 Sanduo Shopping District', body: 'Exit 1 toward Sanduo 4th Rd; city transit info estimates about an 8-minute walk to the tower area.' },
        { icon: 'C', title: 'LRT | Kaohsiung Exhibition Center Station', body: 'After alighting, walk along Xinguang Rd; city info estimates about 3 minutes. Great for chaining the Exhibition Center, Main Library and Love River Bay.' },
        { icon: 'BUS', title: 'Bus | 85 Sky Tower stop', body: 'City transit lists routes 100, Yellow 1, Green 1, 83 and others to the 85 Sky Tower stop; check Kaohsiung real-time bus info for actual schedules.' },
        { icon: 'CAR', title: 'Car | From National Freeway 1 Zhongzheng Interchange', body: 'Take Zhongzheng Rd and Sanduo Rd into the city, then turn onto Zihciang 3rd Rd. Allow extra time for downtown congestion and parking during peak hours.' },
      ],
      parkingKicker: 'Parking',
      parkingTitle: 'Parking information',
      parkingBody:
        'Nearby parking options listed by transit data include Rongdi Lingya Sanduo Station Parking, Gaoxingchang 2nd Parking and Shiquan Zhonghua Rd Parking. Rates and availability change quickly, so we do not hard-code prices.',
      parkingTipTitle: 'If you are here to photograph the night view, choose like this:',
      parkingTips: [
        { title: 'Short stop', body: 'Find a lot near Zihciang/Sanduo Rd first, then walk a loop around the tower.' },
        { title: 'Long stay', body: 'If you will walk the Library, Exhibition Center and bay, park once and go on foot or by LRT.' },
        { title: 'Weekends', body: 'Exhibition events can affect new-bay traffic; arriving early usually beats circling for a spot.' },
      ],
    },
    route: {
      kicker: 'Harbor walk',
      title: 'An 85 walk that does not require going up',
      lead: 'Go from "city" to "harbor": Sanduo Shopping District → 85 Sky Tower → Kaohsiung Main Public Library → Kaohsiung Exhibition Center → Love River Bay. Start at dusk to catch space and light shifting together.',
      stops: ['Sanduo Shopping District', '85 Sky Tower', 'Kaohsiung Main Public Library', 'Kaohsiung Exhibition Center', 'Love River Bay'],
    },
    architecture: {
      kicker: 'Architecture',
      title: 'See the structure beyond "tall"',
      body:
        'The 85 Sky Tower is recognizable for its composition of two side masses lifting a central main tower. It is not a single box, but a layered outline of base, wings, voids and upper shaft. Moving around different street corners keeps changing the proportions of its openings and wings.',
      stat1Value: '347.5 m',
      stat1Label: 'Architectural height (Skyscraper Center)',
      stat2Value: '85 + 5',
      stat2Label: '85 floors above ground, 5 below',
    },
    around: {
      kicker: 'Nearby places',
      title: 'Nearby attractions',
      nearby: [
        { name: 'Kaohsiung Main Public Library', desc: 'A glass volume with sky gardens — the modern building best paired with the tower next door.' },
        { name: 'Kaohsiung Exhibition Center', desc: 'Walk from Xinguang Rd toward the bay and the high-rise blocks quickly give way to harbor scale.' },
        { name: 'Love River Bay · Xinguang Pier', desc: 'The key dusk-walk area, perfect for looking back at the tower’s proportion in the harbor skyline.' },
        { name: 'Sanduo Shopping District', desc: 'Dense malls, dining and urban function — a convenient supply stop on arrival or before leaving.' },
      ],
      foodKicker: 'Eat nearby',
      foodTitle: 'Nearby dining',
      foodLead: 'Restaurant hours change often; we only give directional choices, not possibly outdated hours or prices.',
      food: [
        { name: 'Xingzhong Night Market / Lingya Night Market area', desc: 'High density of street food — pair the tower night view with a local dinner in one trip.' },
        { name: 'Haoxiaozi Charcoal Sandwich', desc: 'Near Zihciang/Sanduo Rd, a quick bite option.' },
        { name: 'MICASITA Mexican Cuisine', desc: 'A nearby international option for those who want to sit down and eat.' },
        { name: 'Rawat Indian Kitchen', desc: 'An Indian option in the area; confirm hours and seating before you go.' },
      ],
    },
    reviews: {
      kicker: 'Guest ratings',
      title: 'Traveler reviews from Google Maps',
      lead: 'Ratings and review counts are synced from Google Maps user reviews and provided for trip reference only; actual experience depends on the site and official notices.',
    },
    mapSection: {
      title: 'Location & entrance',
      note: 'The map shows your provided Google Maps point (No. 5, Zihciang 3rd Rd); the Tourism Administration’s official landmark address is No. 1, Zihciang 3rd Rd.',
    },
    faq: [
      { q: 'How tall is the 85 Sky Tower, and how many floors?', a: 'The 85 Sky Tower (also Tuntex Sky Tower / T&C Tower) is about 347.5 m tall including its spire, with 85 floors above ground and 5 below — one of Kaohsiung’s and Taiwan’s signature skyscrapers.' },
      { q: 'What is inside the 85 Sky Tower? How are the floors divided?', a: 'From bottom to top it roughly splits into a lobby and mall space on lower floors, office and residence-style units in the middle, and previously observation and lodging facilities on upper floors. Specific tenants and uses change with operations — check on-site or official notices before visiting.' },
      { q: 'Is the 85 Sky Tower still open? What is the current status?', a: 'The building itself keeps operating, with offices, shops and surrounding facilities on lower floors; but the Tourism Administration still lists floors 37–85 as closed for renovation, so do not plan a high-floor observation visit based on old info.' },
      { q: 'Do I need a ticket to visit the 85 Sky Tower?', a: 'There is no current observation-deck ticket price to list. Viewing the building from outside and walking nearby blocks costs no attraction ticket; individual operators inside may charge per their notices.' },
      { q: 'What is the easiest way by MRT or LRT?', a: 'Walk from MRT Red Line Sanduo Shopping District Station, or take the LRT to Kaohsiung Exhibition Center Station then walk along Xinguang Rd. Both chain well with the Library, Exhibition Center and Love River Bay.' },
      { q: 'When is the best time to photograph the 85 Sky Tower?', a: 'For exterior shots, late afternoon to night captures the gradient sky, glass curtain wall and city lights together. Daytime better shows the architectural outline and harbor scale.' },
      { q: 'Why does the Google Maps address differ from the Tourism Administration address?', a: 'The Google Maps point shows No. 5, Zihciang 3rd Rd (closer to a specific entrance or lodging point); the Tourism Administration lists No. 1. Both are within the same building footprint — navigate to the entrance you need.' },
    ],
    fieldNote: {
      kicker: 'Field note',
      title: 'Treat the 85 Sky Tower as a "direction", not an old observation-deck ticket.',
      body: 'What is most worth seeing is how Kaohsiung opens from Sanduo Shopping District all the way to the bay. Confirm the status first, then give your time to the blocks, the architecture and the dusk.',
      cta: 'Start navigation ↗',
    },
    sources: {
      kicker: 'Sources',
      title: 'Sources',
      body: [
        'Ratings synced from Google Maps user reviews; copyright belongs to the original authors and Google Maps.',
        'Location, opening status, transport and surrounding info follow the latest notices from the Tourism Administration and Kaohsiung City Government; restaurant info is subject to on-site confirmation.',
      ],
    },
  },

  ja: {
    title: '高雄 85 大樓（85スカイタワー）観光ガイド｜フロア案内・展望台の状況・アクセス・駐車',
    description:
      '高雄 85 大樓（85 スカイタワー）最新観光ガイド：フロア案内、37–85 階の工事状況、高さ 347.5 m、MRT・LRT アクセス、駐車、ベスト撮影時間、周辺スポット。',
    hero: {
      kicker: 'Kaohsiung · Harbor Skyline',
      titleA: '街が上へ',
      titleB: '港が前へ',
      intro:
        '高雄の 85 大樓（85 スカイタワー）は「高いビル」以上の存在です。三多商圈から港湾へ歩くと、商業街、アジア新湾区、港の景色を一本の垂直座標のようにつなぎます。',
      badges: ['85 階のランドマーク', '高さ 347.5 m', '高雄・苓雅区'],
      ratingNote: '評価と件数は Google マップのユーザーレビューと同期',
      ctaPrimary: 'まずは現在の状況を確認',
      ctaSecondary: '港湾散歩を計画',
      figureCaption: '写真：Suicasmo / Wikimedia Commons / CC BY-SA 4.0',
      coordLabel: '22.611°N · 120.300°E',
    },
    status: {
      kicker: 'Before you go',
      title: '事前に知っておく状況',
      lead: 'チェックリストより大切な点：古い記事には高層階の展望台がよく出ますが、現在は該当しません。',
      closedTitle: '37–85 階は工事中、展望エリアは休業中',
      closedBody:
        '交通部観光署は現在も 85 大樓をこの状態で掲載しています。古い 74／75 階展望台の料金や営業時間は引用せず、旅程を誤らせないようにしています。',
      ticketTitle: '現在掲載できる展望台の料金はありません',
      ticketBody:
        '外観を眺めたり周辺を歩くだけなら入場料はかかりません。館内の各施設が有料の場合は、各単位の案内に従ってください。',
      addressTitle: '1 号と 5 号、どちらも同じ建物内',
      addressBody:
        '当ページの Google マップ地点は「自強三路 5 号」、観光署の景点資料は「自強三路 1 号」。同じ建物範囲内なので、行きたい入口に合わせてナビしてください。',
    },
    bestTime: {
      kicker: 'Best light',
      titleA: 'ベストな訪問時間',
      titleB: '「上る」ことではなく、街の色づきを見る',
      body:
        '建築と街の撮影なら、夕方から夜が一番階調豊かです。新光路周辺でガラスカーテンウォールが最後の日差しを吸い込むのを見てから港湾へ歩き、振り返ると 85 大樓が高雄で一番見分けやすいシルエットになります。',
      stat1Value: '45–90 分',
      stat1Label: '外観＋周辺ブロックだけ見る場合の目安',
      stat2Value: '2–3 時間',
      stat2Label: '総図書館・展示センター・愛河湾を加えた散歩',
    },
    transport: {
      kicker: 'Getting here',
      title: 'アクセス詳細',
      lead: '85 大樓は公共交通で行き、そこから港湾へ歩くのがベストです。車の回収に戻らず、街のスケールの変化を感じられます。',
      cards: [
        { icon: 'M', title: 'MRT｜紅線 R8 三多商圈駅', body: '1 番出口から三多四路方向へ徒歩、市の交通情報でタワー周辺まで約 8 分。' },
        { icon: 'C', title: 'LRT｜高雄展示館駅', body: '下車後新光路を徒歩、市の情報で約 3 分。展示センター・総図書館・愛河湾への連携に便利。' },
        { icon: 'BUS', title: 'バス｜85大樓駅', body: '市の交通情報に 100・黄 1・緑 1・83 などが 85大樓駅に。実際の便は高雄リアルタイムバス情報で確認を。' },
        { icon: 'CAR', title: '車｜国道 1 号中正インターチェンジ方面', body: '中正路・三多路で市街地へ入り、自強三路へ。ラッシュ時は渋滞と駐車場探しの時間を確保して。' },
      ],
      parkingKicker: 'Parking',
      parkingTitle: '駐車情報',
      parkingBody:
        '交通情報が挙げる近隣駐車場は栄帝苓雅三多駅駐車場、高興昌第二駐車場、実全中華路駐車場など。料金と空きは変動が早いため、価格は固定して書きません。',
      parkingTipTitle: '夜景撮影ならこんな選び方：',
      parkingTips: [
        { title: '短停', body: 'まず自強路／三多路周辺の駐車場に停めて、タワーを一周徒歩で。' },
        { title: '長停', body: '総図書館・展示センター・港湾を回るなら、一度停めて徒歩か LRT が楽。' },
        { title: '週末', body: '展示イベントで新湾区の渋滞が出やすい。早めの到着が駐車場探しより早いことも。' },
      ],
    },
    route: {
      kicker: 'Harbor walk',
      title: '上らなくていい 85 散歩ルート',
      lead: '「街」から「港」へ：三多商圈 → 85 大樓 → 高雄市立図書館総館 → 高雄展示館 → 愛河湾。夕暮れに出発すると、空間と光の変化を一緒に見られます。',
      stops: ['三多商圈', '85大樓', '高雄市立図書館総館', '高雄展示館', '愛河湾'],
    },
    architecture: {
      kicker: 'Architecture',
      title: '「高さ」以外の構造を見る',
      body:
        '85 大樓の特徴は、両脇のボリュームが中央の主塔を持ち上げる構成にあります。単なる箱ではなく、基壇・翼・抜け・上部シャフトを重ねた方向性の強い輪郭です。街角を動くと、開口と翼の比率が絶えず変わります。',
      stat1Value: '347.5 m',
      stat1Label: '建築高さ（Skyscraper Center）',
      stat2Value: '85 + 5',
      stat2Label: '地上 85 階・地下 5 階',
    },
    around: {
      kicker: 'Nearby places',
      title: '周辺スポット',
      nearby: [
        { name: '高雄市立図書館総館', desc: 'ガラスの量体と空中庭園は、隣のタワーと一緒に見るのに最適な近代建築。' },
        { name: '高雄展示館', desc: '新光路から港湾へ歩くと、高層街から港のスケールへすぐ切り替わる。' },
        { name: '愛河湾・新光碼頭', desc: '夕暮れ散歩の要。港湾の天際線の中でのタワーの比率を振り返るのに最適。' },
        { name: '三多商圈', desc: '百貨・飲食・都市機能が密集し、到着前後の補給拠点に。' },
      ],
      foodKicker: 'Eat nearby',
      foodTitle: '周辺グルメ',
      foodLead: '店の営業情報は変わりやすいため、方向性だけを示し、古い営業時間や価格は書きません。',
      food: [
        { name: '興中夜市／苓雅夜市エリア', desc: '屋台密度が高く、85 大樓の夜景と地元ディナーを同一行程に。' },
        { name: '好小子炭焼サンドイッチ', desc: '自強路・三多路周辺の軽食オプション。' },
        { name: 'MICASITA メキシコ料理', desc: '近隣の異国料理。座って食べたい人向け。' },
        { name: 'Rawat Indian Kitchen', desc: '周辺のインド料理。営業時間と席は出発前に要確認。' },
      ],
    },
    reviews: {
      kicker: 'Guest ratings',
      title: 'Google マップの旅行者評価',
      lead: '評価と件数は Google マップのユーザーレビューと同期し、旅程の参考としてのみ提供。実際の体験は現地と公式案内に依存します。',
    },
    mapSection: {
      title: '場所と入口',
      note: '地図はご提供いただいた Google マップ地点（自強三路 5 号）を表示。観光署の公式ランドマーク住所は自強三路 1 号です。',
    },
    faq: [
      { q: '高雄 85 大樓はどのくらい高く、何階ありますか？', a: '85 大樓（Tuntex Sky Tower／東帝士 85 国際広場とも）は尖塔を含め高さ約 347.5 m、地上 85 階・地下 5 階で、高雄および台湾を代表する超高層ビルの一つです。' },
      { q: '85 大樓の中には何があり、フロアはどう分かれていますか？', a: '下層がロビーと商業空間、中層がオフィスと住宅型ユニット、上層がかつて展望・宿泊施設として計画されていました。具体的な入居と用途は運営で変わるため、現地または各単位の案内を確認してください。' },
      { q: '85 大樓は今も営業していますか？ 現在の状況は？', a: '建物自体は稼働しており、下層にオフィス・店舗・周辺施設があります。ただし観光署は 37–85 階を工事休業として掲載中のため、古い情報で高層階展望を計画しないでください。' },
      { q: '85 大樓の入場チケットは必要ですか？', a: '現在掲載できる展望台の料金はありません。外観を眺めたり周辺を歩くだけなら入場料は不要。館内の各施設が有料の場合は各案内に従ってください。' },
      { q: 'MRT や LRT ならどこから行くのが便利？', a: 'MRT 紅線三多商圈駅から徒歩、または LRT 高雄展示館駅下車後新光路を徒歩。どちらも総図書館・展示センター・愛河湾とつなぎやすいです。' },
      { q: '85 大樓を撮影するベスト時間は？', a: '外観なら夕方から夜が一番。空のグラデーション、ガラスカーテンウォール、街の灯りを同時に捉えられます。昼間は建築の輪郭と港湾のスケールが見やすいです。' },
      { q: 'Google マップの住所と観光署の住所が違うのはなぜ？', a: 'Google マップ地点は自強三路 5 号（特定の入口や宿泊型地点に近い）、観光署は自強三路 1 号。どちらも同じ建物範囲内です。行く入口に合わせてナビしてください。' },
    ],
    fieldNote: {
      kicker: 'Field note',
      title: '85 大樓を「方向」として捉え、古い展望台チケットとしてではなく。',
      body: '一番見る価値があるのは、三多商圈から港湾まで高雄がどう開けるか。まず状況を確認し、時間を街・建築・夕暮れに取ってください。',
      cta: 'ナビを開始 ↗',
    },
    sources: {
      kicker: 'Sources',
      title: '出典',
      body: [
        '評価は Google マップのユーザーレビューと同期。著作権は原作者と Google マップに帰属。',
        '場所・営業状況・交通・周辺情報は交通部観光署と高雄市の最新案内に準拠。店舗情報は現地確認を。',
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// 子頁：樓層導覽與營業現況（floors）
// ---------------------------------------------------------------------------

export const floorsPage: Record<Locale, SubContent> = {
  zh: {
    title: '高雄85大樓樓層導覽｜高度、樓層分佈與營業現況',
    description:
      '高雄85大樓樓層導覽：建築高度 347.5 公尺、地上 85 層地下 5 層、37–85 樓整修現況、低樓層商場與辦公空間說明。',
    intro:
      '很多人搜尋「85大樓裡面有什麼」「85大樓有幾層」，這一頁把樓層分佈、高度與目前營運狀況一次說清楚，避免用舊的觀景台資訊安排行程。',
    blocks: [
      {
        kicker: 'At a glance',
        title: '先記住兩個數字',
        stats: [
          { value: '347.5 m', label: '建築高度（含尖頂結構）' },
          { value: '85 + 5', label: '地上 85 層、地下 5 層' },
        ],
      },
      {
        kicker: 'Floor guide',
        title: '樓層怎麼分？',
        list: [
          { name: '低樓層（大廳與商場）', desc: '入口大廳、商業與服務空間集中於建築基部，是一般訪客最容易接觸的區域。' },
          { name: '中樓層（辦公與住宅型單位）', desc: '中段以辦公室與住宅型單元為主，不對外開放參觀。' },
          { name: '高樓層（原觀景與旅宿設施）', desc: '上層曾規劃觀景台與旅宿；目前 37–85 樓整修中，觀景區暫不開放。' },
        ],
      },
      {
        kicker: 'Current status',
        title: '目前營業現況',
        body:
          '大樓本體持續營運，低樓層仍有辦公、店家與周邊設施；但交通部觀光署目前仍標示 37–85 樓因整修暫不開放，因此不要依照舊資料安排高樓層觀景行程。館內個別營運單位如有收費或開放，以其現場公告為準。',
      },
    ],
    faq: [
      { q: '高雄85大樓有多高？有幾層樓？', a: '高雄 85 大樓建築高度約 347.5 公尺（含尖頂結構），地上 85 層、地下 5 層，是高雄市第一高樓。' },
      { q: '85大樓裡面有什麼？樓層怎麼分？', a: '由下而上大致為大廳與商場、中層辦公與住宅型單位、上層原觀景與旅宿設施；具體進駐隨營運調整。' },
      { q: '高雄85大樓目前還有營業嗎？', a: '低樓層持續營運，但 37–85 樓整修中、觀景區暫不開放；以現場與官方最新公告為準。' },
    ],
  },
  en: {
    title: '85 Sky Tower Kaohsiung Floors Guide | Height, Floor Layout & Current Status',
    description:
      '85 Sky Tower Kaohsiung floor guide: 347.5 m height, 85 floors above / 5 below, the 37–85F renovation status, and lower-floor mall and office spaces.',
    intro:
      'Many search "what is inside the 85 Sky Tower" or "how many floors". This page lays out the floor distribution, height and current operating status in one place, so you don’t plan around outdated observation-deck info.',
    blocks: [
      {
        kicker: 'At a glance',
        title: 'Two numbers to remember',
        stats: [
          { value: '347.5 m', label: 'Architectural height (incl. spire)' },
          { value: '85 + 5', label: '85 floors above ground, 5 below' },
        ],
      },
      {
        kicker: 'Floor guide',
        title: 'How are the floors divided?',
        list: [
          { name: 'Lower floors (lobby & mall)', desc: 'The entrance lobby, commercial and service spaces sit at the building base — the areas most visitors can access.' },
          { name: 'Mid floors (office & residence units)', desc: 'The middle section is mostly offices and residence-style units, not open for public tours.' },
          { name: 'Upper floors (former observation & lodging)', desc: 'Upper levels once planned observation and lodging; floors 37–85 are now under renovation and the observation area is closed.' },
        ],
      },
      {
        kicker: 'Current status',
        title: 'Current operating status',
        body:
          'The building keeps operating, with offices, shops and surrounding facilities on lower floors; but the Tourism Administration still lists floors 37–85 as closed for renovation, so do not plan a high-floor observation visit on old info. Individual operators’ fees or opening hours follow their on-site notices.',
      },
    ],
    faq: [
      { q: 'How tall is the 85 Sky Tower, and how many floors?', a: 'The 85 Sky Tower is about 347.5 m tall including its spire, with 85 floors above ground and 5 below — Kaohsiung’s tallest building.' },
      { q: 'What is inside the 85 Sky Tower? How are the floors divided?', a: 'From bottom to top: lobby and mall, mid-floor offices and residence units, and upper former observation and lodging facilities; specific tenants change with operations.' },
      { q: 'Is the 85 Sky Tower still open?', a: 'Lower floors keep operating, but floors 37–85 are under renovation and the observation area is closed; follow on-site and official latest notices.' },
    ],
  },
  ja: {
    title: '高雄 85 大樓 フロア案内｜高さ・階層配置・営業状況',
    description:
      '高雄 85 大樓（85 スカイタワー）フロア案内：高さ 347.5 m、地上 85 階・地下 5 階、37–85 階の工事状況、下層の商業・オフィス空間。',
    intro:
      '「85 大樓の中には何があるか」「何階あるか」を検索する人向けに、階層配置・高さ・現在の運営状況をまとめました。古い展望台情報で旅程を組まないようご注意を。',
    blocks: [
      {
        kicker: 'At a glance',
        title: '覚えておく二つの数字',
        stats: [
          { value: '347.5 m', label: '建築高さ（尖塔含む）' },
          { value: '85 + 5', label: '地上 85 階・地下 5 階' },
        ],
      },
      {
        kicker: 'Floor guide',
        title: '階層はどう分かれている？',
        list: [
          { name: '下層（ロビーと商業）', desc: '入口ロビー、商業・サービス空間は建物基壇に集中し、一般客が最も触れやすい領域。' },
          { name: '中層（オフィスと住宅型ユニット）', desc: '中層は主にオフィスと住宅型ユニットで、一般公開の見学はなし。' },
          { name: '上層（かつての展望・宿泊）', desc: '上層はかつて展望と宿泊を計画。現在 37–85 階は工事中で展望エリアは休業。' },
        ],
      },
      {
        kicker: 'Current status',
        title: '現在の営業状況',
        body:
          '建物は稼働を続け、下層にオフィス・店舗・周辺施設があります。ただし観光署は 37–85 階を工事休業として掲載中。古い情報で高層階展望を計画せず、各施設の料金・営業は現地案内に従ってください。',
      },
    ],
    faq: [
      { q: '高雄 85 大樓はどのくらい高く、何階ありますか？', a: '尖塔を含め高さ約 347.5 m、地上 85 階・地下 5 階で、高雄で最も高いビルです。' },
      { q: '85 大樓の中には何があり、階層はどう分かれていますか？', a: '下からロビーと商業、中層オフィスと住宅型ユニット、上層のかつての展望・宿泊施設。具体的な入居は運営で変わります。' },
      { q: '85 大樓は今も営業していますか？', a: '下層は稼働していますが、37–85 階は工事中で展望エリアは休業。現地と公式の最新案内に従ってください。' },
    ],
  },
};

// ---------------------------------------------------------------------------
// 子頁：交通與停車（transport）
// ---------------------------------------------------------------------------

export const transportPage: Record<Locale, SubContent> = {
  zh: {
    title: '高雄85大樓交通與停車｜捷運、輕軌、公車、開車怎麼去',
    description:
      '高雄85大樓交通與停車完整攻略：捷運紅線三多商圈站、輕軌高雄展覽館站、公車 85大樓站、開車路線與周邊停車場選擇。',
    intro:
      '85 大樓最適合用大眾運輸抵達，再把步行路線延伸到港灣。這一頁集中所有交通方式與停車建議，方便你排行程。',
    blocks: [
      {
        kicker: 'By transit',
        title: '四種抵達方式',
        list: [
          { name: '捷運｜紅線 R8 三多商圈站', desc: '1 號出口沿三多四路步行，市府資訊估約 8 分鐘到塔樓周邊。' },
          { name: '輕軌｜高雄展覽館站', desc: '沿新光路步行約 3 分鐘，可串聯總圖、展覽館與愛河灣。' },
          { name: '公車｜85大樓站', desc: '100、黃1、綠1、83 等路線可達；實際班次以高雄公車即時資訊為準。' },
          { name: '開車｜國道1號中正交流道', desc: '中正路、三多路進市區轉自強三路；尖峰預留壅塞與車位時間。' },
        ],
      },
      {
        kicker: 'Parking',
        title: '停車怎麼選',
        body:
          '觀光署交通資料列出的附近停車選項包含榮帝苓雅三多站停車場、高興昌第二停車場與實全中華路停車場。費率與空位變動快，本站不寫死價格。',
        list: [
          { name: '短停', desc: '先找自強路／三多路周邊停車場，再步行繞大樓一圈。' },
          { name: '長停', desc: '要走總圖、展覽館、港邊，停一次後全程步行或搭輕軌更順。' },
          { name: '週末', desc: '展覽活動可能影響新灣區車流，提早抵達通常更省時。' },
        ],
      },
    ],
    faq: [
      { q: '搭捷運或輕軌怎麼去高雄85大樓最方便？', a: '可從捷運紅線三多商圈站步行前往，也可搭輕軌至高雄展覽館站後沿新光路步行，兩條路線都適合串聯總圖、展覽館與愛河灣。' },
      { q: '高雄85大樓附近有停車場嗎？', a: '觀光署資料列有榮帝苓雅三多站、高興昌第二、實全中華路等停車場；實際空位與費率請以現場為準。' },
      { q: '開車怎麼去？', a: '可循國道1號中正交流道，經中正路、三多路進市區再轉自強三路；尖峰時段建議預留找車位時間。' },
    ],
  },
  en: {
    title: '85 Sky Tower Kaohsiung Transport & Parking | MRT, LRT, Bus, Driving',
    description:
      '85 Sky Tower Kaohsiung transport and parking guide: MRT Red Line Sanduo Shopping District, LRT Exhibition Center, bus 85 Sky Tower stop, driving route and nearby parking.',
    intro:
      'The 85 Sky Tower is best reached by public transit, then extend your walk to the harbor. This page gathers all transport modes and parking tips for trip planning.',
    blocks: [
      {
        kicker: 'By transit',
        title: 'Four ways to arrive',
        list: [
          { name: 'MRT | Red Line R8 Sanduo Shopping District', desc: 'Exit 1 toward Sanduo 4th Rd; city info estimates about 8 minutes to the tower area.' },
          { name: 'LRT | Kaohsiung Exhibition Center', desc: 'Walk along Xinguang Rd about 3 minutes; chains the Library, Exhibition Center and Love River Bay.' },
          { name: 'Bus | 85 Sky Tower stop', desc: 'Routes 100, Yellow 1, Green 1, 83 and others; check Kaohsiung real-time bus info for schedules.' },
          { name: 'Car | Freeway 1 Zhongzheng Interchange', desc: 'Zhongzheng/Sanduo Rd into the city then Zihciang 3rd Rd; allow time for congestion and parking at peak.' },
        ],
      },
      {
        kicker: 'Parking',
        title: 'How to choose parking',
        body:
          'Nearby parking listed by transit data includes Rongdi Lingya Sanduo Station, Gaoxingchang 2nd and Shiquan Zhonghua Rd lots. Rates and availability change quickly, so we do not hard-code prices.',
        list: [
          { name: 'Short stop', desc: 'Find a lot near Zihciang/Sanduo Rd first, then walk a loop around the tower.' },
          { name: 'Long stay', desc: 'If walking the Library, Exhibition Center and bay, park once and go on foot or by LRT.' },
          { name: 'Weekends', desc: 'Exhibition events can affect new-bay traffic; arriving early usually saves time.' },
        ],
      },
    ],
    faq: [
      { q: 'What is the easiest MRT or LRT route to the 85 Sky Tower?', a: 'Walk from MRT Red Line Sanduo Shopping District Station, or take the LRT to Kaohsiung Exhibition Center then walk Xinguang Rd; both chain well with the Library, Exhibition Center and Love River Bay.' },
      { q: 'Are there parking lots near the 85 Sky Tower?', a: 'Transit data lists Rongdi Lingya Sanduo Station, Gaoxingchang 2nd and Shiquan Zhonghua Rd lots; check on-site for actual availability and rates.' },
      { q: 'How do I drive there?', a: 'From Freeway 1 Zhongzheng Interchange via Zhongzheng/Sanduo Rd into the city, then Zihciang 3rd Rd; allow extra time for parking at peak hours.' },
    ],
  },
  ja: {
    title: '高雄 85 大樓 アクセスと駐車｜MRT・LRT・バス・車',
    description:
      '高雄 85 大樓（85 スカイタワー）アクセスと駐車ガイド：MRT 紅線三多商圈駅、LRT 高雄展示館駅、バス 85大樓駅、車でのルートと近隣駐車場。',
    intro:
      '85 大樓は公共交通で行き、そこから港湾へ歩くのがベスト。このページは全アクセス手段と駐車のヒントをまとめました。',
    blocks: [
      {
        kicker: 'By transit',
        title: '四つの到着方法',
        list: [
          { name: 'MRT｜紅線 R8 三多商圈駅', desc: '1 番出口から三多四路へ徒歩、市の情報でタワー周辺まで約 8 分。' },
          { name: 'LRT｜高雄展示館駅', desc: '新光路を徒歩約 3 分。総図書館・展示センター・愛河湾と連携。' },
          { name: 'バス｜85大樓駅', desc: '100・黄 1・緑 1・83 など。実際の便は高雄リアルタイムバス情報で。' },
          { name: '車｜国道 1 号中正インターチェンジ', desc: '中正路・三多路で市街地へ、自強三路へ。ラッシュ時は駐車時間を確保。' },
        ],
      },
      {
        kicker: 'Parking',
        title: '駐車の選び方',
        body:
          '交通情報が挙げる近隣駐車場は栄帝苓雅三多駅、高興昌第二、実全中華路など。料金と空きは変動が早いため固定して書きません。',
        list: [
          { name: '短停', desc: 'まず自強路／三多路周辺に停めて、タワーを一周徒歩で。' },
          { name: '長停', desc: '総図書館・展示センター・港湾を回るなら一度停めて徒歩か LRT が楽。' },
          { name: '週末', desc: '展示イベントで新湾区が渋滞しやすい。早めの到着が早いことも。' },
        ],
      },
    ],
    faq: [
      { q: '85 大樓へは MRT や LRT のどこから行くのが便利？', a: 'MRT 紅線三多商圈駅から徒歩、または LRT 高雄展示館駅から新光路を徒歩。どちらも総図書館・展示センター・愛河湾とつなぎやすいです。' },
      { q: '85 大樓近くに駐車場はありますか？', a: '交通情報には栄帝苓雅三多駅、高興昌第二、実全中華路などの駐車場が。実際の空きと料金は現地で。' },
      { q: '車でどう行きますか？', a: '国道 1 号中正インターチェンジから中正路・三多路で市街地へ、自強三路へ。ラッシュ時は駐車時間を多めに。' },
    ],
  },
};
