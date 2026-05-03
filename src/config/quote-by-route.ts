import { quotes } from './Quote';

/** Stable quote index per main pathname so the footer verse is not random and differs by page. */
const QUOTE_INDEX_BY_PATH: Record<string, number> = {
  '/': 0,
  '/work-experience': 1,
  '/open-source': 2,
  '/projects': 3,
  '/contact': 4,
  '/journey': 5,
  '/journey/certificates': 6,
  '/gears': 7,
  '/resume': 8,
  '/setup': 9,
};

function fnv1aHash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function getQuoteIndexForPathname(pathname: string): number {
  const normalized = pathname.replace(/\/$/, '') || '/';
  const fixed = QUOTE_INDEX_BY_PATH[normalized];
  if (fixed !== undefined) return fixed;
  return fnv1aHash(normalized) % quotes.length;
}

export function getQuoteForPathname(pathname: string) {
  return quotes[getQuoteIndexForPathname(pathname)];
}
