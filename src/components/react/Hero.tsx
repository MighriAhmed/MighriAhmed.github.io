import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react';
import { LinkedInIcon } from './BrandIcons';
import { siteConfig, profile } from '../../content/site';
import { useLocale } from '../../i18n/useLocale';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    const root = portraitRef.current;
    if (!root) return;
    const spheres = root.querySelectorAll<HTMLElement>('[data-sphere]');
    let frame = 0;
    const tick = (tFrame: number) => {
      spheres.forEach((sphere, i) => {
        const offset = i * 1.2;
        const y = Math.sin(tFrame / 900 + offset) * 10;
        const x = Math.cos(tFrame / 1100 + offset) * 6;
        sphere.style.transform = `translate(${x}px, ${y}px)`;
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-10 sm:pb-12 md:pt-36 md:pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="blob left-[10%] top-[20%] h-72 w-72 bg-[var(--color-accent)]/30" />
        <div
          className="blob right-[8%] top-[30%] h-80 w-80 bg-[var(--color-accent-soft)]/20"
          style={{ animationDelay: '-4s' }}
        />
        <div
          className="blob bottom-[10%] left-[40%] h-64 w-64 bg-[var(--color-accent-deep)]/25"
          style={{ animationDelay: '-7s' }}
        />
      </div>

      <div className="container-site relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 min-w-0">
          <motion.div
            variants={item}
            className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[var(--color-muted)] sm:px-4 sm:text-sm"
          >
            <span className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-[var(--color-success)]" />
            <span className="min-w-0 break-words">
              {profile.currentRole} · {profile.currentCompany}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[2.15rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            {t('hero.headline')}{' '}
            <span className="block">
              <span className="text-white">Ahmed </span>
              <span className="text-accent-glow">MIGHRI</span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-base font-medium text-[var(--color-accent-soft)] sm:text-lg md:text-xl"
          >
            {t('hero.role')}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base md:text-lg"
          >
            {t('hero.intro')}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="/#contact" className="btn-primary w-full sm:w-auto" data-magnetic>
              <Send className="h-4 w-4" />
              {t('hero.contact')}
            </a>
            <a href="/#projects" className="btn-ghost w-full sm:w-auto" data-magnetic>
              {t('hero.projects')}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.cvPath}
              download={siteConfig.cvFileName}
              className="btn-ghost w-full sm:w-auto"
              data-magnetic
            >
              <Download className="h-4 w-4" />
              {t('hero.downloadCv')}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.socials.email}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <span className="inline-flex min-w-0 items-center gap-2 text-sm text-[var(--color-muted)]">
              <MapPin className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              <span className="break-words">{t('location')}</span>
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          ref={portraitRef}
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(12px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px]"
        >
          <div
            className="orbit-ring absolute inset-6 rounded-full border border-[var(--color-accent)]/25"
            data-parallax="12"
          />
          <div
            className="orbit-ring-reverse absolute inset-0 rounded-full border border-dashed border-[var(--color-accent-soft)]/20"
            data-parallax="8"
          />
          <div
            className="absolute inset-[12%] overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-[#0f1a3a] to-[#050816] shadow-[var(--shadow-glow)] sm:inset-[18%]"
            data-parallax="18"
          >
            <img
              src="/images/ahmed-mighri.png"
              alt="Ahmed Mighri — Software Engineer"
              className="h-full w-full object-cover object-[center_20%]"
              width={640}
              height={640}
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/45 via-transparent to-transparent" />
          </div>

          <span
            data-sphere
            className="absolute right-[8%] top-[18%] h-5 w-5 rounded-full bg-[var(--color-accent)] shadow-[0_0_20px_rgba(0,122,255,0.8)]"
          />
          <span
            data-sphere
            className="absolute bottom-[22%] left-[6%] h-3 w-3 rounded-full bg-[var(--color-accent-soft)] shadow-[0_0_16px_rgba(77,163,255,0.8)]"
          />
          <span
            data-sphere
            className="absolute right-[18%] bottom-[12%] h-4 w-4 rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.5)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
