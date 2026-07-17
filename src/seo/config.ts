/**
 * Single source of truth for portfolio SEO.
 * All page metadata, defaults, and crawl rules live here.
 */

export const seoConfig = {
  siteName: 'Ahmed Mighri',
  siteTitle: 'Ahmed Mighri — Portfolio',
  author: 'Ahmed Mighri',
  jobTitle: 'Software Engineer & Full-Stack Developer',
  url: 'https://ahmedmighri.com',
  defaultLocale: 'fr_TN',
  defaultLanguage: 'fr',
  availableLanguages: ['fr', 'en', 'ar'] as const,
  alternateLocales: ['en_US', 'ar_TN'] as const,
  themeColor: '#050816',
  defaultImage: '/og-default.png',
  defaultImageAlt: 'Ahmed Mighri — Software Engineer & Full-Stack Developer',
  defaultImageWidth: 1200,
  defaultImageHeight: 630,
  twitterHandle: '',
  socials: {
    linkedin: 'https://www.linkedin.com/in/ahmed-mighri/',
    email: 'mailto:ahmedmighri@esen.tn',
    whatsapp: 'https://wa.me/21625243423',
  },
  contact: {
    email: 'ahmedmighri@esen.tn',
    phone: '+216 25 243 423',
    locality: 'Soukra',
    region: 'Ariana',
    country: 'TN',
  },
  defaultTitle:
    'Ahmed Mighri — Développeur Web & Spécialiste Digital | Software Engineer',
  defaultDescription:
    'Portfolio d’Ahmed Mighri, Software Engineer et développeur full-stack web & mobile. WordPress, React, Flutter, SEO, automatisation n8n et intégration IA. Basé à Soukra, Tunisie.',
  defaultKeywords: [
    'Ahmed Mighri',
    'Software Engineer',
    'Développeur Web',
    'Full-Stack',
    'React',
    'Flutter',
    'WordPress',
    'SEO',
    'n8n',
    'Astro',
    'Tunisie',
    'Soukra',
  ],
  /** Paths excluded from sitemap.xml */
  sitemapExclude: ['/blog', '/testimonials', '/certificates', '/404'],
} as const;

export type PageSeoId =
  | 'home'
  | 'about'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'services'
  | 'contact'
  | 'blog'
  | 'testimonials'
  | 'certificates'
  | 'notFound';

export type PageSeoEntry = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  ogImage?: string;
  breadcrumbs?: { name: string; path: string }[];
};

export const pagesSeo: Record<PageSeoId, PageSeoEntry> = {
  home: {
    path: '/',
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    keywords: [...seoConfig.defaultKeywords],
    type: 'website',
    breadcrumbs: [{ name: 'Accueil', path: '/' }],
  },
  about: {
    path: '/about',
    title: `À propos — ${seoConfig.siteName} | Software Engineer`,
    description:
      'Parcours, mission et valeurs d’Ahmed Mighri, Software Engineer et développeur web & mobile full-stack basé à Soukra, Tunisie.',
    keywords: [
      'Ahmed Mighri',
      'À propos',
      'Software Engineer',
      'ESEN Manouba',
      'Full-Stack',
      'Tunisie',
    ],
    type: 'profile',
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'À propos', path: '/about' },
    ],
  },
  projects: {
    path: '/projects',
    title: `Projets — ${seoConfig.siteName} | Portfolio web & digital`,
    description:
      'Projets web, SEO et automatisation réalisés par Ahmed Mighri : Carthage Transfer, Amiris Group, Fensterio, Djerba Airport Transfers et Airport Transfers Tunisia.',
    keywords: [
      'Projets',
      'Portfolio',
      'Carthage Transfer',
      'Amiris Group',
      'Fensterio',
      'WordPress',
      'SEO',
    ],
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Projets', path: '/projects' },
    ],
  },
  skills: {
    path: '/skills',
    title: `Compétences — ${seoConfig.siteName} | Stack technique`,
    description:
      'Compétences techniques d’Ahmed Mighri : React, Flutter, WordPress, Spring Boot, SEO, n8n, automatisation, IA et soft skills.',
    keywords: [
      'Compétences',
      'React',
      'Flutter',
      'WordPress',
      'n8n',
      'SEO',
      'Full-Stack',
    ],
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Compétences', path: '/skills' },
    ],
  },
  experience: {
    path: '/experience',
    title: `Expérience — ${seoConfig.siteName} | Parcours professionnel`,
    description:
      'Parcours professionnel d’Ahmed Mighri : Dalinovate, Carthage Transfer, Maryouli.com et Trivaw — développement web, SEO et marketing digital.',
    keywords: [
      'Expérience',
      'Dalinovate',
      'Carthage Transfer',
      'Software Engineer',
      'IT Manager',
    ],
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Expérience', path: '/experience' },
    ],
  },
  services: {
    path: '/services',
    title: `Services — ${seoConfig.siteName} | Web, mobile, SEO & automatisation`,
    description:
      'Services proposés par Ahmed Mighri : développement web et mobile, WordPress, SEO, automatisation n8n, intégrations API/IA et marketing digital.',
    keywords: [
      'Services',
      'Développement Web',
      'Flutter',
      'SEO',
      'n8n',
      'WordPress',
    ],
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Services', path: '/services' },
    ],
  },
  contact: {
    path: '/contact',
    title: `Contact — ${seoConfig.siteName} | Discutons de votre projet`,
    description:
      'Contactez Ahmed Mighri pour un projet web, mobile, SEO ou automatisation. Email, téléphone et formulaire disponibles.',
    keywords: ['Contact', 'Ahmed Mighri', 'Freelance', 'Développeur Tunisie'],
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  blog: {
    path: '/blog',
    title: `Blog — ${seoConfig.siteName}`,
    description: 'Articles et notes techniques d’Ahmed Mighri — bientôt disponibles.',
    noindex: true,
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  testimonials: {
    path: '/testimonials',
    title: `Témoignages — ${seoConfig.siteName}`,
    description: 'Témoignages clients d’Ahmed Mighri.',
    noindex: true,
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Témoignages', path: '/testimonials' },
    ],
  },
  certificates: {
    path: '/certificates',
    title: `Certifications — ${seoConfig.siteName}`,
    description: 'Certifications et formations d’Ahmed Mighri.',
    noindex: true,
    breadcrumbs: [
      { name: 'Accueil', path: '/' },
      { name: 'Certifications', path: '/certificates' },
    ],
  },
  notFound: {
    path: '/404',
    title: `Page introuvable — ${seoConfig.siteName}`,
    description: 'La page demandée n’existe pas ou a été déplacée.',
    noindex: true,
  },
};

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('http')
    ? path
    : new URL(path.startsWith('/') ? path : `/${path}`, seoConfig.url).href;
  return normalized;
}

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed || '/';
}
