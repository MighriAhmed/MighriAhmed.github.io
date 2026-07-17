import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, ChevronDown } from 'lucide-react';
import { localeMeta, locales, type Locale } from '../../i18n/locales';
import { applyDocumentLocale, applyDomTranslations, getStoredLocale, setLocale, t } from '../../i18n/runtime';

function Flag({ code }: { code: 'fr' | 'gb' | 'tn' }) {
  if (code === 'fr') {
    return (
      <svg viewBox="0 0 24 16" className="h-3.5 w-5 shrink-0 overflow-hidden rounded-[2px] shadow-sm" aria-hidden="true">
        <rect width="8" height="16" fill="#002395" />
        <rect x="8" width="8" height="16" fill="#fff" />
        <rect x="16" width="8" height="16" fill="#ED2939" />
      </svg>
    );
  }
  if (code === 'gb') {
    return (
      <svg viewBox="0 0 24 16" className="h-3.5 w-5 shrink-0 overflow-hidden rounded-[2px] shadow-sm" aria-hidden="true">
        <rect width="24" height="16" fill="#012169" />
        <path d="M0 0 L24 16 M24 0 L0 16" stroke="#fff" strokeWidth="3" />
        <path d="M0 0 L24 16 M24 0 L0 16" stroke="#C8102E" strokeWidth="1.5" />
        <path d="M12 0 V16 M0 8 H24" stroke="#fff" strokeWidth="5" />
        <path d="M12 0 V16 M0 8 H24" stroke="#C8102E" strokeWidth="2.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 36 24" className="h-3.5 w-5 shrink-0 overflow-hidden rounded-[2px] shadow-sm" aria-hidden="true">
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

const MENU_WIDTH = 184;
const MENU_GAP = 8;
const VIEWPORT_PAD = 12;

export default function LanguageSwitcher() {
  const [locale, setLocaleState] = useState<Locale>('fr');
  const [open, setOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const updateMenuPosition = useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const width = Math.min(MENU_WIDTH, window.innerWidth - VIEWPORT_PAD * 2);
    // Prefer aligning the menu's right edge with the button's right edge
    let left = rect.right - width;
    left = Math.max(VIEWPORT_PAD, Math.min(left, window.innerWidth - width - VIEWPORT_PAD));
    const top = rect.bottom + MENU_GAP;

    setMenuPos({ top, left });
  }, []);

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

  useLayoutEffect(() => {
    if (!open) return;
    updateMenuPosition();
  }, [open, locale, updateMenuPosition]);

  useEffect(() => {
    if (!open) return;

    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (rootRef.current?.contains(target)) return;
      const menu = document.getElementById('language-menu');
      if (menu?.contains(target)) return;
      setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onReposition = () => updateMenuPosition();

    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onReposition);
    window.addEventListener('scroll', onReposition, true);

    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onReposition);
      window.removeEventListener('scroll', onReposition, true);
    };
  }, [open, updateMenuPosition]);

  const current = localeMeta[locale];

  const choose = (next: Locale) => {
    setLocale(next);
    setLocaleState(next);
    setOpen(false);
  };

  const menu = open
    ? createPortal(
        <div
          id="language-menu"
          role="listbox"
          aria-label={t('lang.label', locale)}
          style={{
            position: 'fixed',
            top: menuPos.top,
            left: menuPos.left,
            width: Math.min(MENU_WIDTH, typeof window !== 'undefined' ? window.innerWidth - VIEWPORT_PAD * 2 : MENU_WIDTH),
            zIndex: 80,
          }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a1024]/95 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl"
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
                {selected && <Check className="h-3.5 w-3.5 shrink-0 text-[var(--color-accent-soft)]" />}
              </button>
            );
          })}
        </div>,
        document.body,
      )
    : null;

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-0 text-sm text-white transition hover:border-[var(--color-accent)]/40 hover:bg-white/10 sm:h-10 sm:w-auto sm:px-3"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('lang.switch', locale)}
        onClick={() => setOpen((value) => !value)}
      >
        <Flag code={current.flag} />
        <span className="hidden font-medium sm:inline">{current.short}</span>
        <ChevronDown
          className={`hidden h-3.5 w-3.5 text-[var(--color-muted)] transition sm:block ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {menu}
    </div>
  );
}
