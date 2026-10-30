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
    description: '高雄85大樓（85 Sky Tower）最新旅遊指南：樓層導覽、37–85樓整修現況、建築高度 347.5 公尺、交通與停車、拍攝規劃、周邊景點與美食。',
    hero: {
      kicker: 'Kaohsiung · Harbor Skyline',
      titleA: '高雄85大樓',
      titleB: '出發前先看現況',
      intro: '高雄85大樓不只是「一棟高樓」。從三多商圈走向港邊時，它像一支垂直座標，把高雄的商業街區、亞洲新灣區與海港視線串在一起。',
      badges: [ '85層地標', '建築高度 347.5 m', '高雄苓雅區' ],
      ratingNote: 'Google地圖手動核對快照；非即時同步',
      ctaPrimary: '先看目前開放狀況',
      ctaSecondary: '規劃港灣散步',
      figureCaption: '本站繪製的符號示意，非實景照片 · CC0',
      coordLabel: '22.611°N · 120.300°E'
    },
    status: {
      kicker: 'Before you go',
      title: '現況先知道',
      lead: '本頁介紹建築地標，不是CTtraveller Suit或其他住宿業者的官網。原地圖連結帶有住宿名稱，但2026年10月30日介面顯示「高雄85大樓／公寓大廈」。不能由這個點位判定特定業者的身分、合法登記、樓層或營業狀態；訂房前逐一向該業者核對。',
      closedTitle: '37–85樓整修中，觀景區暫不開放',
      closedBody: '2026年10月30日核對：交通部觀光署景點頁仍標示37–85樓整修暫不開放。這是觀光參觀狀態，不能推論整棟停用，也不能證明任何一家旅宿、商店或辦公單位正在營業。未確認觀景台重開日期、現行票價或一般訪客入內時間。',
      ticketTitle: '沒有現行觀景台票價可列',
      ticketBody: '本頁沒有已核實的現行觀景台票價。館內各單位的入內權限、費用和營業時間分別處理，先向目的單位確認；不把大樓地址當通行證。',
      addressTitle: '地址來源與實際入口分開確認',
      addressBody: '地圖介面列自強三路5號，觀光署地標資料列自強三路1號。兩個來源的地址口徑不同，不能視為入口、櫃台或電梯可互通的保證；先向實際目的單位確認門牌、樓層及入口。'
    },
    bestTime: {
      kicker: 'Best light',
      titleA: '安排外觀觀察時段',
      titleB: '不是「上樓」，而是看城市變色',
      body: '攝影可依當日光線、天候與現場規則安排。日夜光線會影響外觀，但不保證傍晚人少、燈光一定開啟或某條夜間路線可安全通行。',
      stat1Value: '45–90 分',
      stat1Label: '粗略規劃估計，視實際開放、路線、天候和個人步速調整；不含未確認的入內參觀。',
      stat2Value: '2–3 小時',
      stat2Label: '粗略規劃估計，視實際開放、路線、天候和個人步速調整；不含未確認的入內參觀。'
    },
    transport: {
      kicker: 'Getting here',
      title: '詳細交通',
      lead: '85 大樓最適合用大眾運輸抵達，再把步行路線延伸到港灣。這樣不必繞回取車，也比較能感受到街區尺度的變化。',
      cards: [
        { icon: 'M', title: '捷運｜紅線 R8 三多商圈站', body: '觀光署鄰近交通清單列三多商圈站；這是位置線索，不是核實過的出口或步行時間。請先查高雄捷運當日服務、出口及所需協助。' },
        { icon: 'C', title: '輕軌｜高雄展覽館站', body: '觀光署列高雄展覽館站為鄰近站點。請查輕軌當日服務、路線和行人過街條件；不保證固定步行分鐘數。' },
        { icon: 'BUS', title: '公車｜85大樓站', body: '觀光署列「八五大樓」等鄰近公車站。路線編號、班距、末班及停靠變更請向公車營運方確認，本頁不把舊路線表當現行班表。' },
        { icon: 'CAR', title: '開車｜先確認目的入口', body: '以確認過的目的單位門牌和入口導航，先向司機或當地管理單位核對合法上下車及停車安排；不保證固定行車路線或抵達時間。' }
      ],
      parkingKicker: 'Parking',
      parkingTitle: '停車資訊',
      parkingBody: '觀光署周邊交通清單列有榮帝苓雅三多站、高興昌第二、實全中華路等停車場，只能作為查詢線索，不代表本日營業、合法上下車點、空位、費率或完整無障礙路線已核實。出發前向停車場或當地管理單位確認，不保證一定停得到。',
      parkingTipTitle: '出發前的確認清單',
      parkingTips: [
        { title: '合法上下車', body: '以確認過的目的單位門牌和入口導航，先向司機或當地管理單位核對合法上下車及停車安排；不保證固定行車路線或抵達時間。' },
        {
          title: '空位與費率',
          body: '觀光署周邊交通清單列有榮帝苓雅三多站、高興昌第二、實全中華路等停車場，只能作為查詢線索，不代表本日營業、合法上下車點、空位、費率或完整無障礙路線已核實。出發前向停車場或當地管理單位確認，不保證一定停得到。'
        },
        {
          title: '步行與協助',
          body: '三多商圈、85大樓外觀、總圖、展覽館與愛河灣可作為個別地點的規劃清單，不是已勘查的連續步道。各場館和公共空間的開放、過街、施工及天候條件需分別確認；不以夜景照片保證夜間安全。'
        }
      ]
    },
    route: {
      kicker: 'Harbor walk',
      title: '一條不必上樓的 85 散步線',
      lead: '三多商圈、85大樓外觀、總圖、展覽館與愛河灣可作為個別地點的規劃清單，不是已勘查的連續步道。各場館和公共空間的開放、過街、施工及天候條件需分別確認；不以夜景照片保證夜間安全。',
      stops: [ '三多商圈', '85大樓', '高雄市立圖書館總館', '高雄展覽館', '愛河灣' ]
    },
    architecture: {
      kicker: 'Architecture',
      title: '看見「高」之外的結構',
      body: '85 大樓的辨識度來自兩側量體托起中央主塔的構圖。它不是單一方盒，而是把基座、雙翼、鏤空區域與上方塔身疊成一個很有方向性的輪廓。從不同街角移動，建築的開口與翼部會不斷改變比例。',
      stat1Value: '347.5 m',
      stat1Label: '建築高度（Skyscraper Center）',
      stat2Value: '85 + 5',
      stat2Label: '地上 85 層、地下 5 層'
    },
    around: {
      kicker: 'Nearby places',
      title: '周邊景點',
      nearby: [
        { name: '高雄市立圖書館總館', desc: '玻璃量體與空中花園，是 85 大樓旁最適合一起看的現代建築。' },
        { name: '高雄展覽館', desc: '沿新光路往港邊走，很快就會從高樓街廓切換到港灣尺度。' },
        { name: '愛河灣·新光碼頭', desc: '黃昏散步的重點區域，適合回望 85 大樓在港區天際線中的比例。' },
        { name: '三多商圈', desc: '百貨、餐飲與城市機能密集，可作為抵達或離開前的補給站。' }
      ],
      foodKicker: 'Eat nearby',
      foodTitle: '周邊美食',
      foodLead: '不具名的飲食規劃選擇；先核對當日營業、位置、菜單與價格。',
      food: [
        { name: '早餐與飲品', desc: '先確認店家當日是否營業、位置、菜單及價格；這裡不推薦未核實的具名業者。' },
        { name: '正餐選擇', desc: '依自己的飲食需求詢問食材、份量及過敏原，確認價格後再決定。' },
        { name: '外帶與休息', desc: '核對公共空間飲食規則，不占用出入口、通道或無障礙設施。' }
      ]
    },
    reviews: { kicker: 'Google Maps', title: 'Google 地圖大樓評分快照', lead: 'Google地圖手動核對快照；非即時同步' },
    mapSection: {
      title: '位置與入口',
      note: '地圖介面列自強三路5號，觀光署地標資料列自強三路1號。兩個來源的地址口徑不同，不能視為入口、櫃台或電梯可互通的保證；先向實際目的單位確認門牌、樓層及入口。 本頁介紹建築地標，不是CTtraveller Suit或其他住宿業者的官網。原地圖連結帶有住宿名稱，但2026年10月30日介面顯示「高雄85大樓／公寓大廈」。不能由這個點位判定特定業者的身分、合法登記、樓層或營業狀態；訂房前逐一向該業者核對。'
    },
    faq: [
      { q: '高雄85大樓有多高？有幾層樓？', a: 'CTBUH/CVU建築資料列建築高度347.5公尺、最高尖端高度378公尺，地上85層、地下5層。建築高度口徑不包含天線等功能性設備；兩種高度不要混用。' },
      {
        q: '85大樓裡面有什麼？樓層怎麼分？',
        a: '專業建築資料把用途歸為旅館／辦公／零售的複合建築，這不是當日進駐或營業名單。低、中、高樓層的概念導覽也不等於可自由入內；每個單位的開放、樓層、訪客登記和電梯權限要分別確認。'
      },
      {
        q: '高雄85大樓目前還有營業嗎？現況為何？',
        a: '2026年10月30日核對：交通部觀光署景點頁仍標示37–85樓整修暫不開放。這是觀光參觀狀態，不能推論整棟停用，也不能證明任何一家旅宿、商店或辦公單位正在營業。未確認觀景台重開日期、現行票價或一般訪客入內時間。 本頁介紹建築地標，不是CTtraveller Suit或其他住宿業者的官網。原地圖連結帶有住宿名稱，但2026年10月30日介面顯示「高雄85大樓／公寓大廈」。不能由這個點位判定特定業者的身分、合法登記、樓層或營業狀態；訂房前逐一向該業者核對。'
      },
      { q: '參觀高雄85大樓需要買門票嗎？', a: '本頁沒有已核實的現行觀景台票價。館內各單位的入內權限、費用和營業時間分別處理，先向目的單位確認；不把大樓地址當通行證。' },
      {
        q: '搭捷運或輕軌怎麼去最方便？',
        a: '觀光署鄰近交通清單列三多商圈站；這是位置線索，不是核實過的出口或步行時間。請先查高雄捷運當日服務、出口及所需協助。 觀光署列高雄展覽館站為鄰近站點。請查輕軌當日服務、路線和行人過街條件；不保證固定步行分鐘數。'
      },
      { q: '什麼時間最適合拍85大樓？', a: '攝影可依當日光線、天候與現場規則安排。日夜光線會影響外觀，但不保證傍晚人少、燈光一定開啟或某條夜間路線可安全通行。' },
      {
        q: 'Google 地圖地址為什麼和觀光署地址不同？',
        a: '地圖介面列自強三路5號，觀光署地標資料列自強三路1號。兩個來源的地址口徑不同，不能視為入口、櫃台或電梯可互通的保證；先向實際目的單位確認門牌、樓層及入口。'
      }
    ],
    fieldNote: {
      kicker: 'Field note',
      title: '把 85 大樓當成一個「方向」，而不是一張舊觀景台門票。',
      body: '它最值得看的，是高雄如何從三多商圈一路打開到港邊。建議先確認現況，再把時間留給街區、建築與黃昏。',
      cta: '開始導航 ↗'
    },
    sources: {
      kicker: 'Sources',
      title: '資料來源',
      body: [
        'Google地圖手動核對快照；非即時同步',
        '2026年10月30日核對：交通部觀光署景點頁仍標示37–85樓整修暫不開放。這是觀光參觀狀態，不能推論整棟停用，也不能證明任何一家旅宿、商店或辦公單位正在營業。未確認觀景台重開日期、現行票價或一般訪客入內時間。'
      ]
    }
  },
  en: {
    title: '85 Sky Tower Kaohsiung Travel Guide | Floors, Observation Deck Status, Transport & Parking',
    description: 'The latest 85 Sky Tower (Kaohsiung) travel guide: floor guide, current 37–85F renovation status, 347.5 m height, MRT & LRT access, parking, photo planning, and nearby attractions.',
    hero: {
      kicker: 'Kaohsiung · Harbor Skyline',
      titleA: '85 Sky Tower',
      titleB: 'Kaohsiung',
      intro: "Kaohsiung's 85 Sky Tower is more than a tall building. Walking from Sanduo Shopping District toward the bay, it acts like a vertical coordinate tying the city's commercial blocks, Asia New Bay Area, and the harbor view together.",
      badges: [ '85-floor landmark', '347.5 m tall', 'Lingya, Kaohsiung' ],
      ratingNote: 'Manually checked Google Maps snapshot; not a live feed',
      ctaPrimary: 'Check current status first',
      ctaSecondary: 'Plan a harbor walk',
      figureCaption: 'Site-authored symbolic illustration, not a photograph · CC0',
      coordLabel: '22.611°N · 120.300°E'
    },
    status: {
      kicker: 'Before you go',
      title: 'Know the current status',
      lead: 'This guide covers the building landmark, not CTtraveller Suit or another lodging operator. The original map link carries a lodging name, but the interface displayed “85 Sky Tower / apartment building” on 30 October 2026. That listing does not verify a particular operator’s identity, registration, floor or trading status; check each with the operator before booking.',
      closedTitle: 'Floors 37–85 under renovation; observation area closed',
      closedBody: 'Checked 30 October 2026: the Tourism Administration attraction page still lists floors 37–85 as temporarily closed for renovation. This is visitor-attraction information, not proof that the whole building is unused or that any particular hotel, shop or office is operating. No reopening date, current deck ticket price or general indoor visiting hours has been confirmed.',
      ticketTitle: 'No current observation-deck ticket price to list',
      ticketBody: 'No current observation-deck ticket price is verified here. Each unit has separate indoor access, charges and opening conditions; confirm with the actual operator. A building address is not an entry pass.',
      addressTitle: 'Check the address and actual entrance separately',
      addressBody: 'Maps displays No. 5, Ziqiang 3rd Road, while the Tourism Administration landmark record lists No. 1. These are different source address labels, not a guarantee that entrances, reception desks or lifts connect. Confirm the actual unit’s street number, floor and entrance.'
    },
    bestTime: {
      kicker: 'Best light',
      titleA: 'Best time to visit',
      titleB: 'Not "going up", but watching the city change color',
      body: 'Plan photography around actual light, weather and site rules. Day and night change the view, but quiet evenings, lighting being switched on and a safe night route are not guaranteed.',
      stat1Value: '45–90 min',
      stat1Label: 'Rough planning estimate only; adjust for actual access, route, weather and personal pace. Unconfirmed indoor visits are not included.',
      stat2Value: '2–3 hrs',
      stat2Label: 'Rough planning estimate only; adjust for actual access, route, weather and personal pace. Unconfirmed indoor visits are not included.'
    },
    transport: {
      kicker: 'Getting here',
      title: 'Detailed transport',
      lead: 'The 85 Sky Tower is best reached by public transit, then extend your walk to the harbor. That way you avoid backtracking for your car and feel the change in block scale.',
      cards: [
        {
          icon: 'M',
          title: 'MRT | Red Line R8 Sanduo Shopping District',
          body: 'The Tourism Administration lists Sanduo Shopping District among nearby stations. This is a location lead, not a verified exit or walking time. Check current Kaohsiung MRT services, exits and assistance.'
        },
        {
          icon: 'C',
          title: 'LRT | Kaohsiung Exhibition Center Station',
          body: 'Kaohsiung Exhibition Center is listed as a nearby station. Check current LRT services, the route and pedestrian crossings; no fixed walking duration is guaranteed.'
        },
        {
          icon: 'BUS',
          title: 'Bus | 85 Sky Tower stop',
          body: 'The Tourism Administration lists nearby bus stops including 85 Sky Tower. Confirm current route numbers, intervals, last services and stop changes with the bus operator; old route lists are not treated as current timetables.'
        },
        {
          icon: 'CAR',
          title: 'Car | Confirm the actual entrance',
          body: 'Navigate using the confirmed unit address and entrance. Ask your driver or local authority about legal drop-off and parking; no fixed driving route or arrival time is guaranteed.'
        }
      ],
      parkingKicker: 'Parking',
      parkingTitle: 'Parking information',
      parkingBody: 'The Tourism Administration nearby-transport list names Rongdi Lingya Sanduo Station, Gaoxingchang 2nd and Shiquan Zhonghua Road parking. These are research leads, not verified current operation, legal drop-off, spaces, charges or complete accessible routes. Confirm with the parking operator or local authority before travel; availability is not guaranteed.',
      parkingTipTitle: 'Before driving',
      parkingTips: [
        {
          title: 'Legal drop-off',
          body: 'Navigate using the confirmed unit address and entrance. Ask your driver or local authority about legal drop-off and parking; no fixed driving route or arrival time is guaranteed.'
        },
        {
          title: 'Spaces and charges',
          body: 'The Tourism Administration nearby-transport list names Rongdi Lingya Sanduo Station, Gaoxingchang 2nd and Shiquan Zhonghua Road parking. These are research leads, not verified current operation, legal drop-off, spaces, charges or complete accessible routes. Confirm with the parking operator or local authority before travel; availability is not guaranteed.'
        },
        {
          title: 'Walking and assistance',
          body: 'Sanduo Shopping District, the tower exterior, Main Public Library, Exhibition Center and Love River Bay are separate places to consider, not an audited continuous footpath. Check each venue’s access, crossings, works and weather. Night photographs do not establish night-time safety.'
        }
      ]
    },
    route: {
      kicker: 'Harbor walk',
      title: 'An 85 walk that does not require going up',
      lead: 'Sanduo Shopping District, the tower exterior, Main Public Library, Exhibition Center and Love River Bay are separate places to consider, not an audited continuous footpath. Check each venue’s access, crossings, works and weather. Night photographs do not establish night-time safety.',
      stops: [
        'Sanduo Shopping District',
        '85 Sky Tower',
        'Kaohsiung Main Public Library',
        'Kaohsiung Exhibition Center',
        'Love River Bay'
      ]
    },
    architecture: {
      kicker: 'Architecture',
      title: 'See the structure beyond "tall"',
      body: 'The 85 Sky Tower is recognizable for its composition of two side masses lifting a central main tower. It is not a single box, but a layered outline of base, wings, voids and upper shaft. Moving around different street corners keeps changing the proportions of its openings and wings.',
      stat1Value: '347.5 m',
      stat1Label: 'Architectural height (Skyscraper Center)',
      stat2Value: '85 + 5',
      stat2Label: '85 floors above ground, 5 below'
    },
    around: {
      kicker: 'Nearby places',
      title: 'Nearby attractions',
      nearby: [
        {
          name: 'Kaohsiung Main Public Library',
          desc: 'A glass volume with sky gardens — the modern building best paired with the tower next door.'
        },
        {
          name: 'Kaohsiung Exhibition Center',
          desc: 'Walk from Xinguang Rd toward the bay and the high-rise blocks quickly give way to harbor scale.'
        },
        {
          name: 'Love River Bay · Xinguang Pier',
          desc: 'The key dusk-walk area, perfect for looking back at the tower’s proportion in the harbor skyline.'
        },
        {
          name: 'Sanduo Shopping District',
          desc: 'Dense malls, dining and urban function — a convenient supply stop on arrival or before leaving.'
        }
      ],
      foodKicker: 'Eat nearby',
      foodTitle: 'Nearby dining',
      foodLead: 'General food-planning options; check current operation, location, menus and prices.',
      food: [
        {
          name: 'Breakfast and drinks',
          desc: 'Check a venue’s current operation, location, menu and prices first; no unverified named operator is recommended.'
        },
        {
          name: 'Meals',
          desc: 'Ask about ingredients, portions and allergens for your needs, and confirm prices before deciding.'
        },
        {
          name: 'Takeaway and rest',
          desc: 'Check public-space food rules and keep entrances, paths and accessible facilities clear.'
        }
      ]
    },
    reviews: {
      kicker: 'Google Maps',
      title: 'Building listing rating snapshot',
      lead: 'Manually checked Google Maps snapshot; not a live feed'
    },
    mapSection: {
      title: 'Location & entrance',
      note: 'Maps displays No. 5, Ziqiang 3rd Road, while the Tourism Administration landmark record lists No. 1. These are different source address labels, not a guarantee that entrances, reception desks or lifts connect. Confirm the actual unit’s street number, floor and entrance. This guide covers the building landmark, not CTtraveller Suit or another lodging operator. The original map link carries a lodging name, but the interface displayed “85 Sky Tower / apartment building” on 30 October 2026. That listing does not verify a particular operator’s identity, registration, floor or trading status; check each with the operator before booking.'
    },
    faq: [
      {
        q: 'How tall is the 85 Sky Tower, and how many floors?',
        a: 'CTBUH/CVU lists architectural height 347.5 m and height to tip 378 m, with 85 floors above ground and 5 below. Architectural height excludes functional equipment such as antennae; do not mix the two height measurements.'
      },
      {
        q: 'What is inside the 85 Sky Tower? How are the floors divided?',
        a: 'The professional building record classifies the tower as hotel/office/retail mixed use, not a current tenant or trading directory. A conceptual floor guide does not mean free indoor access; confirm each unit’s opening, floor, visitor registration and lift permissions separately.'
      },
      {
        q: 'Is the 85 Sky Tower still open? What is the current status?',
        a: 'Checked 30 October 2026: the Tourism Administration attraction page still lists floors 37–85 as temporarily closed for renovation. This is visitor-attraction information, not proof that the whole building is unused or that any particular hotel, shop or office is operating. No reopening date, current deck ticket price or general indoor visiting hours has been confirmed. This guide covers the building landmark, not CTtraveller Suit or another lodging operator. The original map link carries a lodging name, but the interface displayed “85 Sky Tower / apartment building” on 30 October 2026. That listing does not verify a particular operator’s identity, registration, floor or trading status; check each with the operator before booking.'
      },
      {
        q: 'Do I need a ticket to visit the 85 Sky Tower?',
        a: 'No current observation-deck ticket price is verified here. Each unit has separate indoor access, charges and opening conditions; confirm with the actual operator. A building address is not an entry pass.'
      },
      {
        q: 'What is the easiest way by MRT or LRT?',
        a: 'The Tourism Administration lists Sanduo Shopping District among nearby stations. This is a location lead, not a verified exit or walking time. Check current Kaohsiung MRT services, exits and assistance. Kaohsiung Exhibition Center is listed as a nearby station. Check current LRT services, the route and pedestrian crossings; no fixed walking duration is guaranteed.'
      },
      {
        q: 'When is the best time to photograph the 85 Sky Tower?',
        a: 'Plan photography around actual light, weather and site rules. Day and night change the view, but quiet evenings, lighting being switched on and a safe night route are not guaranteed.'
      },
      {
        q: 'Why does the Google Maps address differ from the Tourism Administration address?',
        a: 'Maps displays No. 5, Ziqiang 3rd Road, while the Tourism Administration landmark record lists No. 1. These are different source address labels, not a guarantee that entrances, reception desks or lifts connect. Confirm the actual unit’s street number, floor and entrance.'
      }
    ],
    fieldNote: {
      kicker: 'Field note',
      title: 'Treat the 85 Sky Tower as a "direction", not an old observation-deck ticket.',
      body: 'What is most worth seeing is how Kaohsiung opens from Sanduo Shopping District all the way to the bay. Confirm the status first, then give your time to the blocks, the architecture and the dusk.',
      cta: 'Start navigation ↗'
    },
    sources: {
      kicker: 'Sources',
      title: 'Sources',
      body: [
        'Manually checked Google Maps snapshot; not a live feed',
        'Checked 30 October 2026: the Tourism Administration attraction page still lists floors 37–85 as temporarily closed for renovation. This is visitor-attraction information, not proof that the whole building is unused or that any particular hotel, shop or office is operating. No reopening date, current deck ticket price or general indoor visiting hours has been confirmed.'
      ]
    }
  },
  ja: {
    title: '高雄 85 大樓（85スカイタワー）観光ガイド｜フロア案内・展望台の状況・アクセス・駐車',
    description: '高雄 85 大樓（85 スカイタワー）最新観光ガイド：フロア案内、37–85 階の工事状況、高さ 347.5 m、MRT・LRT アクセス、駐車、撮影計画、周辺スポット。',
    hero: {
      kicker: 'Kaohsiung · Harbor Skyline',
      titleA: '高雄85大樓',
      titleB: '展望台とアクセス',
      intro: '高雄の 85 大樓（85 スカイタワー）は「高いビル」以上の存在です。三多商圈から港湾へ歩くと、商業街、アジア新湾区、港の景色を一本の垂直座標のようにつなぎます。',
      badges: [ '85 階のランドマーク', '高さ 347.5 m', '高雄・苓雅区' ],
      ratingNote: 'Googleマップの手動確認記録。リアルタイム同期ではありません',
      ctaPrimary: 'まずは現在の状況を確認',
      ctaSecondary: '港湾散歩を計画',
      figureCaption: '本ガイドのシンボル図。実景写真ではありません · CC0',
      coordLabel: '22.611°N · 120.300°E'
    },
    status: {
      kicker: 'Before you go',
      title: '事前に知っておく状況',
      lead: '本ガイドの対象は建築ランドマークで、CTtraveller Suitなどの宿泊事業者の公式サイトではありません。元の地図リンクには宿泊名が含まれますが、2026年10月30日の画面は「高雄85大樓／共同住宅」を表示しました。特定業者の身元、登録、階数、営業状況は確認できません。予約前に各業者へ個別に確認してください。',
      closedTitle: '37–85 階は工事中、展望エリアは休業中',
      closedBody: '2026年10月30日確認：観光署の観光スポットページは37–85階を工事のため一時非公開と掲載しています。観光見学の情報であり、建物全体が使われていないことや、特定の宿泊施設・店舗・事務所が営業していることを示すものではありません。展望台の再開日、現行料金、一般客の館内見学時間は未確認です。',
      ticketTitle: '現在掲載できる展望台の料金はありません',
      ticketBody: '現在の展望台料金は未確認です。館内の各施設で入館権限、料金、営業時間は別です。目的の運営者に確認し、建物の住所を通行許可と考えないでください。',
      addressTitle: '住所の資料と実際の入口を個別確認',
      addressBody: '地図は自強三路5号、観光署のランドマーク資料は1号です。出入口、受付、エレベーターが相互に使えるという保証ではありません。目的の施設に番地、階、入口を確認してください。'
    },
    bestTime: {
      kicker: 'Best light',
      titleA: '外観を見る時間を計画',
      titleB: '「上る」ことではなく、街の色づきを見る',
      body: '実際の光、天気、現地ルールに合わせて撮影を計画してください。昼夜で景色は変わりますが、夕方の空き具合、点灯、夜道の安全は保証しません。',
      stat1Value: '45–90 分',
      stat1Label: '大まかな計画上の目安です。実際の公開、経路、天候、歩く速さで調整し、未確認の館内見学は含めません。',
      stat2Value: '2–3 時間',
      stat2Label: '大まかな計画上の目安です。実際の公開、経路、天候、歩く速さで調整し、未確認の館内見学は含めません。'
    },
    transport: {
      kicker: 'Getting here',
      title: 'アクセス詳細',
      lead: '85 大樓は公共交通で行き、そこから港湾へ歩くのがベストです。車の回収に戻らず、街のスケールの変化を感じられます。',
      cards: [
        {
          icon: 'M',
          title: 'MRT｜紅線 R8 三多商圈駅',
          body: '観光署は近隣駅として三多商圈を掲載しています。位置の手がかりで、出口や徒歩分数を確認したものではありません。MRTの当日の運行、出口、必要な介助を確認してください。'
        },
        { icon: 'C', title: 'LRT｜高雄展示館駅', body: '高雄展示館駅は近隣駅として掲載されています。当日のLRT運行、経路、歩行者横断を確認し、固定の徒歩分数を前提にしないでください。' },
        {
          icon: 'BUS',
          title: 'バス｜85大樓駅',
          body: '観光署は「八五大樓」などの近隣バス停を掲載します。現行の系統、間隔、最終便、停留所変更は運営者に確認し、古い路線表を現行時刻表としないでください。'
        },
        {
          icon: 'CAR',
          title: '車｜目的の入口を確認',
          body: '目的施設に確認した番地と入口で経路を調べ、運転手や現地管理者へ合法的な乗降・駐車を確認してください。固定の走行経路や到着時刻は保証しません。'
        }
      ],
      parkingKicker: 'Parking',
      parkingTitle: '駐車情報',
      parkingBody: '観光署の周辺交通一覧には栄帝苓雅三多駅、高興昌第二、実全中華路などの駐車場名があります。調べる手がかりであり、当日の営業、合法的な乗降、空き、料金、全行程のバリアフリーを確認したものではありません。運営者や現地管理者へ確認し、空きがあると決めつけないでください。',
      parkingTipTitle: '運転前の確認',
      parkingTips: [
        { title: '合法的な乗降', body: '目的施設に確認した番地と入口で経路を調べ、運転手や現地管理者へ合法的な乗降・駐車を確認してください。固定の走行経路や到着時刻は保証しません。' },
        {
          title: '空きと料金',
          body: '観光署の周辺交通一覧には栄帝苓雅三多駅、高興昌第二、実全中華路などの駐車場名があります。調べる手がかりであり、当日の営業、合法的な乗降、空き、料金、全行程のバリアフリーを確認したものではありません。運営者や現地管理者へ確認し、空きがあると決めつけないでください。'
        },
        {
          title: '徒歩と介助',
          body: '三多商圈、建物外観、総図書館、展示センター、愛河湾は個々の候補地で、連続した歩道を実地確認したルートではありません。各施設の公開、横断、工事、天候を確認してください。夜景写真は夜間の安全を保証しません。'
        }
      ]
    },
    route: {
      kicker: 'Harbor walk',
      title: '上らなくていい 85 散歩ルート',
      lead: '三多商圈、建物外観、総図書館、展示センター、愛河湾は個々の候補地で、連続した歩道を実地確認したルートではありません。各施設の公開、横断、工事、天候を確認してください。夜景写真は夜間の安全を保証しません。',
      stops: [ '三多商圈', '85大樓', '高雄市立図書館総館', '高雄展示館', '愛河湾' ]
    },
    architecture: {
      kicker: 'Architecture',
      title: '「高さ」以外の構造を見る',
      body: '85 大樓の特徴は、両脇のボリュームが中央の主塔を持ち上げる構成にあります。単なる箱ではなく、基壇・翼・抜け・上部シャフトを重ねた方向性の強い輪郭です。街角を動くと、開口と翼の比率が絶えず変わります。',
      stat1Value: '347.5 m',
      stat1Label: '建築高さ（Skyscraper Center）',
      stat2Value: '85 + 5',
      stat2Label: '地上 85 階・地下 5 階'
    },
    around: {
      kicker: 'Nearby places',
      title: '周辺スポット',
      nearby: [
        { name: '高雄市立図書館総館', desc: 'ガラスの量体と空中庭園は、隣のタワーと一緒に見るのに最適な近代建築。' },
        { name: '高雄展示館', desc: '新光路から港湾へ歩くと、高層街から港のスケールへすぐ切り替わる。' },
        { name: '愛河湾・新光碼頭', desc: '夕暮れ散歩の要。港湾の天際線の中でのタワーの比率を振り返るのに最適。' },
        { name: '三多商圈', desc: '百貨・飲食・都市機能が密集し、到着前後の補給拠点に。' }
      ],
      foodKicker: 'Eat nearby',
      foodTitle: '周辺グルメ',
      foodLead: '一般的な食事計画の選択肢です。営業、場所、メニュー、料金を確認してください。',
      food: [
        { name: '朝食と飲み物', desc: '営業、場所、メニュー、料金を店舗に確認してください。未確認の実名店舗は推奨しません。' },
        { name: '食事', desc: '必要に応じて食材、量、アレルゲンを尋ね、料金を確認してから選んでください。' },
        { name: '持ち帰りと休憩', desc: '公共空間の飲食ルールを確認し、入口、通路、バリアフリー設備を塞がないでください。' }
      ]
    },
    reviews: { kicker: 'Google Maps', title: '建物の地図評価記録', lead: 'Googleマップの手動確認記録。リアルタイム同期ではありません' },
    mapSection: {
      title: '場所と入口',
      note: '地図は自強三路5号、観光署のランドマーク資料は1号です。出入口、受付、エレベーターが相互に使えるという保証ではありません。目的の施設に番地、階、入口を確認してください。 本ガイドの対象は建築ランドマークで、CTtraveller Suitなどの宿泊事業者の公式サイトではありません。元の地図リンクには宿泊名が含まれますが、2026年10月30日の画面は「高雄85大樓／共同住宅」を表示しました。特定業者の身元、登録、階数、営業状況は確認できません。予約前に各業者へ個別に確認してください。'
    },
    faq: [
      {
        q: '高雄 85 大樓はどのくらい高く、何階ありますか？',
        a: 'CTBUH/CVUは建築高さ347.5m、最高先端高さ378m、地上85階・地下5階と掲載しています。建築高さはアンテナなどの機能設備を含まない口径で、最高先端の高さと混同しないでください。'
      },
      {
        q: '85 大樓の中には何があり、フロアはどう分かれていますか？',
        a: '専門建築資料はホテル／オフィス／商業の複合用途と分類しますが、現在の入居・営業一覧ではありません。階層の概念案内も自由な館内見学を保証しません。各施設の営業、階、来訪登録、エレベーター権限を個別に確認してください。'
      },
      {
        q: '85 大樓は今も営業していますか？ 現在の状況は？',
        a: '2026年10月30日確認：観光署の観光スポットページは37–85階を工事のため一時非公開と掲載しています。観光見学の情報であり、建物全体が使われていないことや、特定の宿泊施設・店舗・事務所が営業していることを示すものではありません。展望台の再開日、現行料金、一般客の館内見学時間は未確認です。 本ガイドの対象は建築ランドマークで、CTtraveller Suitなどの宿泊事業者の公式サイトではありません。元の地図リンクには宿泊名が含まれますが、2026年10月30日の画面は「高雄85大樓／共同住宅」を表示しました。特定業者の身元、登録、階数、営業状況は確認できません。予約前に各業者へ個別に確認してください。'
      },
      { q: '85 大樓の入場チケットは必要ですか？', a: '現在の展望台料金は未確認です。館内の各施設で入館権限、料金、営業時間は別です。目的の運営者に確認し、建物の住所を通行許可と考えないでください。' },
      {
        q: 'MRT や LRT ならどこから行くのが便利？',
        a: '観光署は近隣駅として三多商圈を掲載しています。位置の手がかりで、出口や徒歩分数を確認したものではありません。MRTの当日の運行、出口、必要な介助を確認してください。 高雄展示館駅は近隣駅として掲載されています。当日のLRT運行、経路、歩行者横断を確認し、固定の徒歩分数を前提にしないでください。'
      },
      { q: '85 大樓を撮影するベスト時間は？', a: '実際の光、天気、現地ルールに合わせて撮影を計画してください。昼夜で景色は変わりますが、夕方の空き具合、点灯、夜道の安全は保証しません。' },
      {
        q: 'Google マップの住所と観光署の住所が違うのはなぜ？',
        a: '地図は自強三路5号、観光署のランドマーク資料は1号です。出入口、受付、エレベーターが相互に使えるという保証ではありません。目的の施設に番地、階、入口を確認してください。'
      }
    ],
    fieldNote: {
      kicker: 'Field note',
      title: '85 大樓を「方向」として捉え、古い展望台チケットとしてではなく。',
      body: '一番見る価値があるのは、三多商圈から港湾まで高雄がどう開けるか。まず状況を確認し、時間を街・建築・夕暮れに取ってください。',
      cta: 'ナビを開始 ↗'
    },
    sources: {
      kicker: 'Sources',
      title: '出典',
      body: [
        'Googleマップの手動確認記録。リアルタイム同期ではありません',
        '2026年10月30日確認：観光署の観光スポットページは37–85階を工事のため一時非公開と掲載しています。観光見学の情報であり、建物全体が使われていないことや、特定の宿泊施設・店舗・事務所が営業していることを示すものではありません。展望台の再開日、現行料金、一般客の館内見学時間は未確認です。'
      ]
    }
  }
};

export const floorsPage: Record<Locale, SubContent> = {
  zh: {
    title: '高雄85大樓樓層導覽｜高度、樓層分佈與營業現況',
    description: '高雄85大樓樓層導覽：建築高度 347.5 公尺、地上 85 層地下 5 層、37–85 樓整修現況、低樓層商場與辦公空間說明。',
    intro: '專業建築資料把用途歸為旅館／辦公／零售的複合建築，這不是當日進駐或營業名單。低、中、高樓層的概念導覽也不等於可自由入內；每個單位的開放、樓層、訪客登記和電梯權限要分別確認。',
    blocks: [
      {
        kicker: 'At a glance',
        title: '先記住兩個數字',
        stats: [ { value: '347.5 m', label: '建築高度347.5m；最高尖端另列378m' }, { value: '85 + 5', label: '地上 85 層、地下 5 層' } ]
      },
      {
        kicker: 'Floor guide',
        title: '樓層怎麼分？',
        list: [
          {
            name: '複合用途的建築資料',
            desc: '專業建築資料把用途歸為旅館／辦公／零售的複合建築，這不是當日進駐或營業名單。低、中、高樓層的概念導覽也不等於可自由入內；每個單位的開放、樓層、訪客登記和電梯權限要分別確認。'
          },
          {
            name: '一般訪客與私人單位',
            desc: '本頁介紹建築地標，不是CTtraveller Suit或其他住宿業者的官網。原地圖連結帶有住宿名稱，但2026年10月30日介面顯示「高雄85大樓／公寓大廈」。不能由這個點位判定特定業者的身分、合法登記、樓層或營業狀態；訂房前逐一向該業者核對。'
          },
          {
            name: '原觀景區與高樓層',
            desc: '2026年10月30日核對：交通部觀光署景點頁仍標示37–85樓整修暫不開放。這是觀光參觀狀態，不能推論整棟停用，也不能證明任何一家旅宿、商店或辦公單位正在營業。未確認觀景台重開日期、現行票價或一般訪客入內時間。'
          }
        ],
        body: '專業建築資料把用途歸為旅館／辦公／零售的複合建築，這不是當日進駐或營業名單。低、中、高樓層的概念導覽也不等於可自由入內；每個單位的開放、樓層、訪客登記和電梯權限要分別確認。'
      },
      {
        kicker: 'Current status',
        title: '目前營業現況',
        body: '2026年10月30日核對：交通部觀光署景點頁仍標示37–85樓整修暫不開放。這是觀光參觀狀態，不能推論整棟停用，也不能證明任何一家旅宿、商店或辦公單位正在營業。未確認觀景台重開日期、現行票價或一般訪客入內時間。 本頁介紹建築地標，不是CTtraveller Suit或其他住宿業者的官網。原地圖連結帶有住宿名稱，但2026年10月30日介面顯示「高雄85大樓／公寓大廈」。不能由這個點位判定特定業者的身分、合法登記、樓層或營業狀態；訂房前逐一向該業者核對。'
      }
    ],
    faq: [
      { q: '高雄85大樓有多高？有幾層樓？', a: 'CTBUH/CVU建築資料列建築高度347.5公尺、最高尖端高度378公尺，地上85層、地下5層。建築高度口徑不包含天線等功能性設備；兩種高度不要混用。' },
      {
        q: '85大樓裡面有什麼？樓層怎麼分？',
        a: '專業建築資料把用途歸為旅館／辦公／零售的複合建築，這不是當日進駐或營業名單。低、中、高樓層的概念導覽也不等於可自由入內；每個單位的開放、樓層、訪客登記和電梯權限要分別確認。'
      },
      {
        q: '高雄85大樓目前還有營業嗎？',
        a: '2026年10月30日核對：交通部觀光署景點頁仍標示37–85樓整修暫不開放。這是觀光參觀狀態，不能推論整棟停用，也不能證明任何一家旅宿、商店或辦公單位正在營業。未確認觀景台重開日期、現行票價或一般訪客入內時間。 本頁介紹建築地標，不是CTtraveller Suit或其他住宿業者的官網。原地圖連結帶有住宿名稱，但2026年10月30日介面顯示「高雄85大樓／公寓大廈」。不能由這個點位判定特定業者的身分、合法登記、樓層或營業狀態；訂房前逐一向該業者核對。'
      }
    ]
  },
  en: {
    title: '85 Sky Tower Kaohsiung Floors Guide | Height, Floor Layout & Current Status',
    description: '85 Sky Tower Kaohsiung floor guide: 347.5 m height, 85 floors above / 5 below, the 37–85F renovation status, and lower-floor mall and office spaces.',
    intro: 'The professional building record classifies the tower as hotel/office/retail mixed use, not a current tenant or trading directory. A conceptual floor guide does not mean free indoor access; confirm each unit’s opening, floor, visitor registration and lift permissions separately.',
    blocks: [
      {
        kicker: 'At a glance',
        title: 'Two numbers to remember',
        stats: [
          { value: '347.5 m', label: 'Architectural height 347.5 m; height to tip 378 m' },
          { value: '85 + 5', label: '85 floors above ground, 5 below' }
        ]
      },
      {
        kicker: 'Floor guide',
        title: 'How are the floors divided?',
        list: [
          {
            name: 'Mixed-use building record',
            desc: 'The professional building record classifies the tower as hotel/office/retail mixed use, not a current tenant or trading directory. A conceptual floor guide does not mean free indoor access; confirm each unit’s opening, floor, visitor registration and lift permissions separately.'
          },
          {
            name: 'Visitors and private premises',
            desc: 'This guide covers the building landmark, not CTtraveller Suit or another lodging operator. The original map link carries a lodging name, but the interface displayed “85 Sky Tower / apartment building” on 30 October 2026. That listing does not verify a particular operator’s identity, registration, floor or trading status; check each with the operator before booking.'
          },
          {
            name: 'Former deck and upper floors',
            desc: 'Checked 30 October 2026: the Tourism Administration attraction page still lists floors 37–85 as temporarily closed for renovation. This is visitor-attraction information, not proof that the whole building is unused or that any particular hotel, shop or office is operating. No reopening date, current deck ticket price or general indoor visiting hours has been confirmed.'
          }
        ],
        body: 'The professional building record classifies the tower as hotel/office/retail mixed use, not a current tenant or trading directory. A conceptual floor guide does not mean free indoor access; confirm each unit’s opening, floor, visitor registration and lift permissions separately.'
      },
      {
        kicker: 'Current status',
        title: 'Current operating status',
        body: 'Checked 30 October 2026: the Tourism Administration attraction page still lists floors 37–85 as temporarily closed for renovation. This is visitor-attraction information, not proof that the whole building is unused or that any particular hotel, shop or office is operating. No reopening date, current deck ticket price or general indoor visiting hours has been confirmed. This guide covers the building landmark, not CTtraveller Suit or another lodging operator. The original map link carries a lodging name, but the interface displayed “85 Sky Tower / apartment building” on 30 October 2026. That listing does not verify a particular operator’s identity, registration, floor or trading status; check each with the operator before booking.'
      }
    ],
    faq: [
      {
        q: 'How tall is the 85 Sky Tower, and how many floors?',
        a: 'CTBUH/CVU lists architectural height 347.5 m and height to tip 378 m, with 85 floors above ground and 5 below. Architectural height excludes functional equipment such as antennae; do not mix the two height measurements.'
      },
      {
        q: 'What is inside the 85 Sky Tower? How are the floors divided?',
        a: 'The professional building record classifies the tower as hotel/office/retail mixed use, not a current tenant or trading directory. A conceptual floor guide does not mean free indoor access; confirm each unit’s opening, floor, visitor registration and lift permissions separately.'
      },
      {
        q: 'Is the 85 Sky Tower still open?',
        a: 'Checked 30 October 2026: the Tourism Administration attraction page still lists floors 37–85 as temporarily closed for renovation. This is visitor-attraction information, not proof that the whole building is unused or that any particular hotel, shop or office is operating. No reopening date, current deck ticket price or general indoor visiting hours has been confirmed. This guide covers the building landmark, not CTtraveller Suit or another lodging operator. The original map link carries a lodging name, but the interface displayed “85 Sky Tower / apartment building” on 30 October 2026. That listing does not verify a particular operator’s identity, registration, floor or trading status; check each with the operator before booking.'
      }
    ]
  },
  ja: {
    title: '高雄 85 大樓 フロア案内｜高さ・階層配置・営業状況',
    description: '高雄 85 大樓（85 スカイタワー）フロア案内：高さ 347.5 m、地上 85 階・地下 5 階、37–85 階の工事状況、下層の商業・オフィス空間。',
    intro: '専門建築資料はホテル／オフィス／商業の複合用途と分類しますが、現在の入居・営業一覧ではありません。階層の概念案内も自由な館内見学を保証しません。各施設の営業、階、来訪登録、エレベーター権限を個別に確認してください。',
    blocks: [
      {
        kicker: 'At a glance',
        title: '覚えておく二つの数字',
        stats: [ { value: '347.5 m', label: '建築高さ347.5m、最高先端378m' }, { value: '85 + 5', label: '地上 85 階・地下 5 階' } ]
      },
      {
        kicker: 'Floor guide',
        title: '階層はどう分かれている？',
        list: [
          {
            name: '複合用途の建築資料',
            desc: '専門建築資料はホテル／オフィス／商業の複合用途と分類しますが、現在の入居・営業一覧ではありません。階層の概念案内も自由な館内見学を保証しません。各施設の営業、階、来訪登録、エレベーター権限を個別に確認してください。'
          },
          {
            name: '一般客と私有施設',
            desc: '本ガイドの対象は建築ランドマークで、CTtraveller Suitなどの宿泊事業者の公式サイトではありません。元の地図リンクには宿泊名が含まれますが、2026年10月30日の画面は「高雄85大樓／共同住宅」を表示しました。特定業者の身元、登録、階数、営業状況は確認できません。予約前に各業者へ個別に確認してください。'
          },
          {
            name: 'かつての展望台と上層階',
            desc: '2026年10月30日確認：観光署の観光スポットページは37–85階を工事のため一時非公開と掲載しています。観光見学の情報であり、建物全体が使われていないことや、特定の宿泊施設・店舗・事務所が営業していることを示すものではありません。展望台の再開日、現行料金、一般客の館内見学時間は未確認です。'
          }
        ],
        body: '専門建築資料はホテル／オフィス／商業の複合用途と分類しますが、現在の入居・営業一覧ではありません。階層の概念案内も自由な館内見学を保証しません。各施設の営業、階、来訪登録、エレベーター権限を個別に確認してください。'
      },
      {
        kicker: 'Current status',
        title: '現在の営業状況',
        body: '2026年10月30日確認：観光署の観光スポットページは37–85階を工事のため一時非公開と掲載しています。観光見学の情報であり、建物全体が使われていないことや、特定の宿泊施設・店舗・事務所が営業していることを示すものではありません。展望台の再開日、現行料金、一般客の館内見学時間は未確認です。 本ガイドの対象は建築ランドマークで、CTtraveller Suitなどの宿泊事業者の公式サイトではありません。元の地図リンクには宿泊名が含まれますが、2026年10月30日の画面は「高雄85大樓／共同住宅」を表示しました。特定業者の身元、登録、階数、営業状況は確認できません。予約前に各業者へ個別に確認してください。'
      }
    ],
    faq: [
      {
        q: '高雄 85 大樓はどのくらい高く、何階ありますか？',
        a: 'CTBUH/CVUは建築高さ347.5m、最高先端高さ378m、地上85階・地下5階と掲載しています。建築高さはアンテナなどの機能設備を含まない口径で、最高先端の高さと混同しないでください。'
      },
      {
        q: '85 大樓の中には何があり、階層はどう分かれていますか？',
        a: '専門建築資料はホテル／オフィス／商業の複合用途と分類しますが、現在の入居・営業一覧ではありません。階層の概念案内も自由な館内見学を保証しません。各施設の営業、階、来訪登録、エレベーター権限を個別に確認してください。'
      },
      {
        q: '85 大樓は今も営業していますか？',
        a: '2026年10月30日確認：観光署の観光スポットページは37–85階を工事のため一時非公開と掲載しています。観光見学の情報であり、建物全体が使われていないことや、特定の宿泊施設・店舗・事務所が営業していることを示すものではありません。展望台の再開日、現行料金、一般客の館内見学時間は未確認です。 本ガイドの対象は建築ランドマークで、CTtraveller Suitなどの宿泊事業者の公式サイトではありません。元の地図リンクには宿泊名が含まれますが、2026年10月30日の画面は「高雄85大樓／共同住宅」を表示しました。特定業者の身元、登録、階数、営業状況は確認できません。予約前に各業者へ個別に確認してください。'
      }
    ]
  }
};

export const transportPage: Record<Locale, SubContent> = {
  zh: {
    title: '高雄85大樓交通與停車｜捷運、輕軌、公車、開車怎麼去',
    description: '高雄85大樓交通與停車完整攻略：捷運紅線三多商圈站、輕軌高雄展覽館站、公車 85大樓站、開車路線與周邊停車場選擇。',
    intro: '85 大樓最適合用大眾運輸抵達，再把步行路線延伸到港灣。這一頁集中所有交通方式與停車建議，方便你排行程。',
    blocks: [
      {
        kicker: 'By transit',
        title: '四種抵達方式',
        list: [
          { name: '捷運｜紅線 R8 三多商圈站', desc: '觀光署鄰近交通清單列三多商圈站；這是位置線索，不是核實過的出口或步行時間。請先查高雄捷運當日服務、出口及所需協助。' },
          { name: '輕軌｜高雄展覽館站', desc: '觀光署列高雄展覽館站為鄰近站點。請查輕軌當日服務、路線和行人過街條件；不保證固定步行分鐘數。' },
          { name: '公車｜85大樓站', desc: '觀光署列「八五大樓」等鄰近公車站。路線編號、班距、末班及停靠變更請向公車營運方確認，本頁不把舊路線表當現行班表。' },
          { name: '開車｜先確認目的入口', desc: '以確認過的目的單位門牌和入口導航，先向司機或當地管理單位核對合法上下車及停車安排；不保證固定行車路線或抵達時間。' }
        ]
      },
      {
        kicker: 'Parking',
        title: '停車怎麼選',
        body: '觀光署周邊交通清單列有榮帝苓雅三多站、高興昌第二、實全中華路等停車場，只能作為查詢線索，不代表本日營業、合法上下車點、空位、費率或完整無障礙路線已核實。出發前向停車場或當地管理單位確認，不保證一定停得到。',
        list: [
          { name: '合法上下車', desc: '以確認過的目的單位門牌和入口導航，先向司機或當地管理單位核對合法上下車及停車安排；不保證固定行車路線或抵達時間。' },
          {
            name: '空位與費率',
            desc: '觀光署周邊交通清單列有榮帝苓雅三多站、高興昌第二、實全中華路等停車場，只能作為查詢線索，不代表本日營業、合法上下車點、空位、費率或完整無障礙路線已核實。出發前向停車場或當地管理單位確認，不保證一定停得到。'
          },
          {
            name: '步行與協助',
            desc: '三多商圈、85大樓外觀、總圖、展覽館與愛河灣可作為個別地點的規劃清單，不是已勘查的連續步道。各場館和公共空間的開放、過街、施工及天候條件需分別確認；不以夜景照片保證夜間安全。'
          }
        ]
      }
    ],
    faq: [
      {
        q: '搭捷運或輕軌怎麼去高雄85大樓最方便？',
        a: '觀光署鄰近交通清單列三多商圈站；這是位置線索，不是核實過的出口或步行時間。請先查高雄捷運當日服務、出口及所需協助。 觀光署列高雄展覽館站為鄰近站點。請查輕軌當日服務、路線和行人過街條件；不保證固定步行分鐘數。'
      },
      {
        q: '高雄85大樓附近有停車場嗎？',
        a: '觀光署周邊交通清單列有榮帝苓雅三多站、高興昌第二、實全中華路等停車場，只能作為查詢線索，不代表本日營業、合法上下車點、空位、費率或完整無障礙路線已核實。出發前向停車場或當地管理單位確認，不保證一定停得到。'
      },
      { q: '開車怎麼去？', a: '以確認過的目的單位門牌和入口導航，先向司機或當地管理單位核對合法上下車及停車安排；不保證固定行車路線或抵達時間。' }
    ]
  },
  en: {
    title: '85 Sky Tower Kaohsiung Transport & Parking | MRT, LRT, Bus, Driving',
    description: '85 Sky Tower Kaohsiung transport and parking guide: MRT Red Line Sanduo Shopping District, LRT Exhibition Center, bus 85 Sky Tower stop, driving route and nearby parking.',
    intro: 'The 85 Sky Tower is best reached by public transit, then extend your walk to the harbor. This page gathers all transport modes and parking tips for trip planning.',
    blocks: [
      {
        kicker: 'By transit',
        title: 'Four ways to arrive',
        list: [
          {
            name: 'MRT | Red Line R8 Sanduo Shopping District',
            desc: 'The Tourism Administration lists Sanduo Shopping District among nearby stations. This is a location lead, not a verified exit or walking time. Check current Kaohsiung MRT services, exits and assistance.'
          },
          {
            name: 'LRT | Kaohsiung Exhibition Center',
            desc: 'Kaohsiung Exhibition Center is listed as a nearby station. Check current LRT services, the route and pedestrian crossings; no fixed walking duration is guaranteed.'
          },
          {
            name: 'Bus | 85 Sky Tower stop',
            desc: 'The Tourism Administration lists nearby bus stops including 85 Sky Tower. Confirm current route numbers, intervals, last services and stop changes with the bus operator; old route lists are not treated as current timetables.'
          },
          {
            name: 'Car | Confirm the actual entrance',
            desc: 'Navigate using the confirmed unit address and entrance. Ask your driver or local authority about legal drop-off and parking; no fixed driving route or arrival time is guaranteed.'
          }
        ]
      },
      {
        kicker: 'Parking',
        title: 'How to choose parking',
        body: 'The Tourism Administration nearby-transport list names Rongdi Lingya Sanduo Station, Gaoxingchang 2nd and Shiquan Zhonghua Road parking. These are research leads, not verified current operation, legal drop-off, spaces, charges or complete accessible routes. Confirm with the parking operator or local authority before travel; availability is not guaranteed.',
        list: [
          {
            name: 'Legal drop-off',
            desc: 'Navigate using the confirmed unit address and entrance. Ask your driver or local authority about legal drop-off and parking; no fixed driving route or arrival time is guaranteed.'
          },
          {
            name: 'Spaces and charges',
            desc: 'The Tourism Administration nearby-transport list names Rongdi Lingya Sanduo Station, Gaoxingchang 2nd and Shiquan Zhonghua Road parking. These are research leads, not verified current operation, legal drop-off, spaces, charges or complete accessible routes. Confirm with the parking operator or local authority before travel; availability is not guaranteed.'
          },
          {
            name: 'Walking and assistance',
            desc: 'Sanduo Shopping District, the tower exterior, Main Public Library, Exhibition Center and Love River Bay are separate places to consider, not an audited continuous footpath. Check each venue’s access, crossings, works and weather. Night photographs do not establish night-time safety.'
          }
        ]
      }
    ],
    faq: [
      {
        q: 'What is the easiest MRT or LRT route to the 85 Sky Tower?',
        a: 'The Tourism Administration lists Sanduo Shopping District among nearby stations. This is a location lead, not a verified exit or walking time. Check current Kaohsiung MRT services, exits and assistance. Kaohsiung Exhibition Center is listed as a nearby station. Check current LRT services, the route and pedestrian crossings; no fixed walking duration is guaranteed.'
      },
      {
        q: 'Are there parking lots near the 85 Sky Tower?',
        a: 'The Tourism Administration nearby-transport list names Rongdi Lingya Sanduo Station, Gaoxingchang 2nd and Shiquan Zhonghua Road parking. These are research leads, not verified current operation, legal drop-off, spaces, charges or complete accessible routes. Confirm with the parking operator or local authority before travel; availability is not guaranteed.'
      },
      {
        q: 'How do I drive there?',
        a: 'Navigate using the confirmed unit address and entrance. Ask your driver or local authority about legal drop-off and parking; no fixed driving route or arrival time is guaranteed.'
      }
    ]
  },
  ja: {
    title: '高雄 85 大樓 アクセスと駐車｜MRT・LRT・バス・車',
    description: '高雄 85 大樓（85 スカイタワー）アクセスと駐車ガイド：MRT 紅線三多商圈駅、LRT 高雄展示館駅、バス 85大樓駅、車でのルートと近隣駐車場。',
    intro: '85 大樓は公共交通で行き、そこから港湾へ歩くのがベスト。このページは全アクセス手段と駐車のヒントをまとめました。',
    blocks: [
      {
        kicker: 'By transit',
        title: '四つの到着方法',
        list: [
          {
            name: 'MRT｜紅線 R8 三多商圈駅',
            desc: '観光署は近隣駅として三多商圈を掲載しています。位置の手がかりで、出口や徒歩分数を確認したものではありません。MRTの当日の運行、出口、必要な介助を確認してください。'
          },
          { name: 'LRT｜高雄展示館駅', desc: '高雄展示館駅は近隣駅として掲載されています。当日のLRT運行、経路、歩行者横断を確認し、固定の徒歩分数を前提にしないでください。' },
          { name: 'バス｜85大樓駅', desc: '観光署は「八五大樓」などの近隣バス停を掲載します。現行の系統、間隔、最終便、停留所変更は運営者に確認し、古い路線表を現行時刻表としないでください。' },
          {
            name: '車｜目的の入口を確認',
            desc: '目的施設に確認した番地と入口で経路を調べ、運転手や現地管理者へ合法的な乗降・駐車を確認してください。固定の走行経路や到着時刻は保証しません。'
          }
        ]
      },
      {
        kicker: 'Parking',
        title: '駐車の選び方',
        body: '観光署の周辺交通一覧には栄帝苓雅三多駅、高興昌第二、実全中華路などの駐車場名があります。調べる手がかりであり、当日の営業、合法的な乗降、空き、料金、全行程のバリアフリーを確認したものではありません。運営者や現地管理者へ確認し、空きがあると決めつけないでください。',
        list: [
          { name: '合法的な乗降', desc: '目的施設に確認した番地と入口で経路を調べ、運転手や現地管理者へ合法的な乗降・駐車を確認してください。固定の走行経路や到着時刻は保証しません。' },
          {
            name: '空きと料金',
            desc: '観光署の周辺交通一覧には栄帝苓雅三多駅、高興昌第二、実全中華路などの駐車場名があります。調べる手がかりであり、当日の営業、合法的な乗降、空き、料金、全行程のバリアフリーを確認したものではありません。運営者や現地管理者へ確認し、空きがあると決めつけないでください。'
          },
          {
            name: '徒歩と介助',
            desc: '三多商圈、建物外観、総図書館、展示センター、愛河湾は個々の候補地で、連続した歩道を実地確認したルートではありません。各施設の公開、横断、工事、天候を確認してください。夜景写真は夜間の安全を保証しません。'
          }
        ]
      }
    ],
    faq: [
      {
        q: '85 大樓へは MRT や LRT のどこから行くのが便利？',
        a: '観光署は近隣駅として三多商圈を掲載しています。位置の手がかりで、出口や徒歩分数を確認したものではありません。MRTの当日の運行、出口、必要な介助を確認してください。 高雄展示館駅は近隣駅として掲載されています。当日のLRT運行、経路、歩行者横断を確認し、固定の徒歩分数を前提にしないでください。'
      },
      {
        q: '85 大樓近くに駐車場はありますか？',
        a: '観光署の周辺交通一覧には栄帝苓雅三多駅、高興昌第二、実全中華路などの駐車場名があります。調べる手がかりであり、当日の営業、合法的な乗降、空き、料金、全行程のバリアフリーを確認したものではありません。運営者や現地管理者へ確認し、空きがあると決めつけないでください。'
      },
      { q: '車でどう行きますか？', a: '目的施設に確認した番地と入口で経路を調べ、運転手や現地管理者へ合法的な乗降・駐車を確認してください。固定の走行経路や到着時刻は保証しません。' }
    ]
  }
};
