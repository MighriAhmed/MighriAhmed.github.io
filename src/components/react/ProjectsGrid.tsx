import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../content/site';
import { useLocale } from '../../i18n/useLocale';
import type { TranslationKey } from '../../i18n/translations';

export default function ProjectsGrid({
  featuredOnly = false,
}: {
  featuredOnly?: boolean;
}) {
  const { t } = useLocale();
  const list = featuredOnly ? projects.filter((p) => p.featured) : projects;

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" data-stagger>
        {list.map((project) => {
          const taglineKey = `project.${project.id}.tagline` as TranslationKey;
          return (
            <article
              key={project.id}
              data-stagger-item
              data-tilt
              className="group glass glass-glow overflow-hidden rounded-[var(--radius-card)] transition duration-500 hover:-translate-y-1"
            >
              <a
                href={project.liveUrl ?? `/projects/${project.slug}`}
                className="block"
                {...(project.liveUrl
                  ? { rel: 'noopener noreferrer' }
                  : {})}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${t('projects.preview')} ${project.name}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={800}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />
                  <span className="absolute end-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur transition group-hover:bg-[var(--color-accent)]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {t(taglineKey)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 px-2.5 py-1 text-xs text-[var(--color-accent-soft)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </article>
          );
        })}
      </div>

      {list.length === 0 && (
        <p className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-[var(--color-muted)]">
          {t('projects.empty')}
        </p>
      )}
    </div>
  );
}
