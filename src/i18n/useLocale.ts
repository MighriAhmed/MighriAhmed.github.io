import { useEffect, useState } from 'react';
import { defaultLocale, type Locale } from './locales';
import { getStoredLocale, t as translateKey } from './runtime';
import type { TranslationKey } from './translations';

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window !== 'undefined' ? getStoredLocale() : defaultLocale,
  );

  useEffect(() => {
    setLocaleState(getStoredLocale());
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<{ locale: Locale }>).detail;
      setLocaleState(detail?.locale ?? getStoredLocale());
    };
    window.addEventListener('localechange', onChange);
    return () => window.removeEventListener('localechange', onChange);
  }, []);

  return {
    locale,
    t: (key: TranslationKey) => translateKey(key, locale),
  };
}
