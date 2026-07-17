import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useLocale } from '../../i18n/useLocale';
import type { TranslationKey } from '../../i18n/translations';

const faqKeys = [0, 1, 2, 3] as const;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { t } = useLocale();

  return (
    <div className="divide-y divide-white/10 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03]">
      {faqKeys.map((index) => {
        const isOpen = open === index;
        const qKey = `faq.${index}.q` as TranslationKey;
        const aKey = `faq.${index}.a` as TranslationKey;
        return (
          <div key={index}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start md:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-medium text-white">{t(qKey)}</span>
              {isOpen ? (
                <Minus className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              ) : (
                <Plus className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              )}
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--color-muted)] md:px-6">
                    {t(aKey)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
