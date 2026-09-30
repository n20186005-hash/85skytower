// JSON-LD 結構化資料構造器。所有函式接受「本頁 canonical 絕對 URL」與語言，
// 回傳可直送 <script type="application/ld+json"> 的物件。
// 實體事實集中在 src/data/site.ts 的 facts / namesByLocale。

import { facts, namesByLocale } from '../data/site';
import type { Locale } from '../i18n';
import type { HomeContent, SubContent } from '../data/content';

// 同一座建築在不同語言頁面用同一個 @id（指向網站根 #attraction），讓搜尋引擎視為同一實體。
export function attractionJsonLd(canonical: string, locale: Locale) {
  const name = namesByLocale[locale].attraction;
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${canonical}#attraction`,
    name,
    alternateName: facts.alternateNames,
    description: '',
    image: [`${new URL('/images/og-cover.svg', canonical).toString()}`],
    url: canonical,
    address: {
      '@type': 'PostalAddress',
      streetAddress: facts.address.street,
      addressLocality: facts.address.locality,
      addressRegion: facts.address.region,
      postalCode: facts.address.postal,
      addressCountry: facts.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: facts.geo.lat,
      longitude: facts.geo.lng,
    },
    publicAccess: true,
    isAccessibleForFree: true,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: facts.rating,
      reviewCount: facts.reviewCount,
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: '建築高度',
        value: `${facts.heightMeters} 公尺`,
      },
      {
        '@type': 'PropertyValue',
        name: '樓層',
        value: `地上 ${facts.floorsAbove} 層、地下 ${facts.floorsBelow} 層`,
      },
    ],
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[], canonical: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: `${canonical}#faq`,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

// 子頁麵包屑（首頁 → 子頁）。
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// 首頁 JSON-LD 組合（TouristAttraction + FAQPage）。
export function homeJsonLd(content: HomeContent, canonical: string, locale: Locale) {
  const attr = attractionJsonLd(canonical, locale);
  attr.description = content.description;
  return [attr, faqJsonLd(content.faq, canonical)];
}

// 子頁 JSON-LD 組合（TouristAttraction + FAQPage + BreadcrumbList）。
export function subpageJsonLd(
  content: SubContent,
  canonical: string,
  locale: Locale,
  breadcrumb: { name: string; url: string }[],
) {
  const attr = attractionJsonLd(canonical, locale);
  attr.description = content.description;
  return [attr, faqJsonLd(content.faq, canonical), breadcrumbJsonLd(breadcrumb)];
}
