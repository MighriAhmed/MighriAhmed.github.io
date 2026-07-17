import {
  defaultLocale,
  isLocale,
  localeMeta,
  LOCALE_STORAGE_KEY,
  type Locale,
} from './locales';
import { translate, type TranslationKey } from './translations';

export function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return isLocale(stored) ? stored : defaultLocale;
}

export function setLocale(locale: Locale) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  applyDocumentLocale(locale);
  applyDomTranslations(locale);
  window.dispatchEvent(new CustomEvent('localechange', { detail: { locale } }));
}

export function applyDocumentLocale(locale: Locale) {
  const meta = localeMeta[locale];
  const root = document.documentElement;
  root.lang = meta.code;
  root.dir = meta.dir;
  root.dataset.locale = meta.code;
  root.classList.toggle('font-arabic', locale === 'ar');
}

export function t(key: TranslationKey, locale?: Locale): string {
  const active = locale ?? (typeof window !== 'undefined' ? getStoredLocale() : defaultLocale);
  return translate(active, key);
}

export function applyDomTranslations(locale: Locale = getStoredLocale()) {
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n as TranslationKey | undefined;
    if (!key) return;
    const value = translate(locale, key);
    if (!value || value === key) return;
    el.textContent = value;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria as TranslationKey | undefined;
    if (!key) return;
    el.setAttribute('aria-label', translate(locale, key));
  });

  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder as TranslationKey | undefined;
    if (!key) return;
    el.placeholder = translate(locale, key);
  });
}
