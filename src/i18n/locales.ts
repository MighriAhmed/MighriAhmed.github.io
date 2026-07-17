export const locales = ['fr', 'en', 'ar', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';
export const LOCALE_STORAGE_KEY = 'am-portfolio-locale';

export type LocaleMeta = {
  code: Locale;
  label: string;
  short: string;
  dir: 'ltr' | 'rtl';
  flag: 'fr' | 'gb' | 'tn' | 'de';
};

export const localeMeta: Record<Locale, LocaleMeta> = {
  fr: { code: 'fr', label: 'Français', short: 'FR', dir: 'ltr', flag: 'fr' },
  en: { code: 'en', label: 'English', short: 'EN', dir: 'ltr', flag: 'gb' },
  ar: { code: 'ar', label: 'العربية', short: 'AR', dir: 'rtl', flag: 'tn' },
  de: { code: 'de', label: 'Deutsch', short: 'DE', dir: 'ltr', flag: 'de' },
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
