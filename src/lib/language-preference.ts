import { locales, type Locale } from './localized-routes';

export const LANGUAGE_COOKIE = 'jedroplus_language';
export const LANGUAGE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function isLocale(value: string | undefined): value is Locale {
  return locales.some(locale => locale === value);
}

/** Choose the best supported browser language, respecting quality and region tags. */
export function browserLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage?.trim()) return 'sl';
  const preferences = acceptLanguage.split(',').map((entry, order) => {
    const [tag, ...parameters] = entry.trim().toLowerCase().split(';');
    const qualityParameter = parameters.find(parameter => parameter.trim().startsWith('q='));
    const quality = qualityParameter ? Number(qualityParameter.trim().slice(2)) : 1;
    return { locale: tag.split('-')[0], quality, order };
  }).filter(item => Number.isFinite(item.quality) && item.quality > 0 && item.quality <= 1)
    .sort((a, b) => b.quality - a.quality || a.order - b.order);
  const match = preferences.find(item => isLocale(item.locale));
  if (match) return match.locale as Locale;
  return preferences.some(item => item.locale !== '*') ? 'en' : 'sl';
}

/** Persist an explicit choice as a functional preference, independent of tracking. */
export function saveLanguagePreference(value: string) {
  if (!isLocale(value)) return;
  document.cookie = `${LANGUAGE_COOKIE}=${value}; Path=/; Max-Age=${LANGUAGE_COOKIE_MAX_AGE}; SameSite=Lax${window.location.protocol === 'https:' ? '; Secure' : ''}`;
}
