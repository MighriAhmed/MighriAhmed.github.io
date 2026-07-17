import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { localeMeta, locales, type Locale } from '../../i18n/locales';
import { applyDocumentLocale, applyDomTranslations, getStoredLocale, setLocale, t } from '../../i18n/runtime';

function Flag({ code }: { code: 'fr' | 'gb' | 'tn' }) {
  if (code === 'fr') {
    return (
      <svg viewBox="0 0 24 16" className="h-3.5 w-5 overflow-hidden rounded-[2px] shadow-sm" aria-hidden="true">
        <rect width="8" height="16" fill="#002395" />
        <rect x="8" width="8" height="16" fill="#fff" />
        <rect x="16" width="8" height="16" fill="#ED2939" />
      </svg>
    );
  }
  if (code === 'gb') {
    return (
      <svg viewBox="0 0 24 16" className="h-3.5 w-5 overflow-hidden rounded-[2px] shadow-sm" aria-hidden="true">
        <rect width="24" height="16" fill="#012169" />
        <path d="M0 0 L24 16 M24 0 L0 16" stroke="#fff" strokeWidth="3" />
        <path d="M0 0 L24 16 M24 0 L0 16" stroke="#C8102E" strokeWidth="1.5" />
        <path d="M12 0 V16 M0 8 H24" stroke="#fff" strokeWidth="5" />
        <path d="M12 0 V16 M0 8 H24" stroke="#C8102E" strokeWidth="2.5" />
      </svg>
    );
  }

  // Tunisia flag — red field, white disc, red crescent, white star
  return (
    <svg viewBox="0 0 36 24" className="h-3.5 w-5 overflow-hidden rounded-[2px] shadow-sm" aria-hidden="true">
      <rect width="36" height="24" fill="#E70013" />
      <circle cx="18" cy="12" r="6.2" fill="#fff" />
      <circle cx="19.5" cy="12" r="4.7" fill="#E70013" />
      <path
        fill="#fff"
        d="M22.4 12l-1.35.44.26-1.45-.98-1.02 1.4-.2.67-1.3.67 1.3 1.4.2-.98 1.02.26 1.45z"
      />
    </svg>
  );
}

export default function LanguageSwitcher() {
  const [locale, setLocaleState] = useState<Locale>('fr');
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initial = getStoredLocale();
    setLocaleState(initial);
    applyDocumentLocale(initial);
    applyDomTranslations(initial);

    const onChange = (event: Event) => {
      const next = (event as CustomEvent<{ locale: Locale }>).detail?.locale ?? getStoredLocale();
      setLocaleState(next);
    };
    window.addEventListener('localechange', onChange);
    return () => window.removeEventListener('localechange', onChange);
  }, []);

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const current = localeMeta[locale];

  const choose = (next: Locale) => {
    setLocale(next);
    setLocaleState(next);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-sm text-white transition hover:border-[var(--color-accent)]/40 hover:bg-white/10"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('lang.switch', locale)}
        onClick={() => setOpen((value) => !value)}
      >
        <Flag code={current.flag} />
        <span className="hidden font-medium sm:inline">{current.short}</span>
        <ChevronDown className={`h-3.5 w-3.5 text-[var(--color-muted)] transition ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t('lang.label', locale)}
          className="absolute end-0 top-[calc(100%+0.5rem)] z-50 min-w-[11.5rem] overflow-hidden rounded-2xl border border-white/10 bg-[#0a1024]/95 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          {locales.map((code) => {
            const item = localeMeta[code];
            const selected = code === locale;
            return (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => choose(code)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                  selected
                    ? 'bg-[var(--color-accent)]/15 text-white'
                    : 'text-[var(--color-muted)] hover:bg-white/5 hover:text-white'
                }`}
              >
                <Flag code={item.flag} />
                <span className="flex-1 text-start font-medium">{item.label}</span>
                {selected && <Check className="h-3.5 w-3.5 text-[var(--color-accent-soft)]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
