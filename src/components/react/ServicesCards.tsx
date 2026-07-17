import {
  Globe,
  Smartphone,
  Layout,
  Search,
  Workflow,
  Cable,
  Sparkles,
  Palette,
  Gauge,
  Megaphone,
  Clapperboard,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';
import { services } from '../../content/site';
import { useLocale } from '../../i18n/useLocale';
import type { TranslationKey } from '../../i18n/translations';

const icons: Record<string, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  layout: Layout,
  search: Search,
  workflow: Workflow,
  cable: Cable,
  sparkles: Sparkles,
  palette: Palette,
  gauge: Gauge,
  megaphone: Megaphone,
  clapperboard: Clapperboard,
  briefcase: Briefcase,
};

export default function ServicesCards() {
  const { t } = useLocale();

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" data-stagger>
      {services.map((service) => {
        const Icon = icons[service.icon] ?? Globe;
        const titleKey = `service.${service.id}.title` as TranslationKey;
        const descriptionKey = `service.${service.id}.description` as TranslationKey;
        return (
          <article
            key={service.id}
            data-stagger-item
            data-tilt
            className="glass glass-glow group rounded-[var(--radius-card)] p-6 transition duration-300 hover:-translate-y-1 md:p-8"
          >
            <div className="mb-4 inline-flex rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 p-3 text-[var(--color-accent-soft)] transition group-hover:shadow-[0_0_30px_rgba(0,122,255,0.25)]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">{t(titleKey)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              {t(descriptionKey)}
            </p>
          </article>
        );
      })}
    </div>
  );
}
