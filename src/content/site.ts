/**
 * Source of truth: Ahmed Mighri CV + LinkedIn (linkedin.com/in/ahmed-mighri)
 * When both sources conflict, the more recent / dated source is preferred.
 */

export const siteConfig = {
  name: 'Ahmed Mighri',
  shortName: 'AM',
  email: 'ahmedmighri@esen.tn',
  phoneDisplay: '+216 25 243 423',
  phoneHref: 'tel:+21625243423',
  cvPath: '/Ahmed-Mighri-CV.pdf',
  socials: {
    linkedin: 'https://www.linkedin.com/in/ahmed-mighri/',
    email: 'mailto:ahmedmighri@esen.tn',
    whatsapp: 'https://wa.me/21625243423',
  },
} as const;

export const profile = {
  role: 'Développeur Web & Spécialiste Digital',
  currentRole: 'Software Engineer',
  /** CV / portfolio: Software Engineer chez Dalinovate */
  currentCompany: 'Dalinovate',
  intro:
    'Diplômé d’un Master E-Business et d’une Licence en Business Computing à l’ESEN Manouba, je suis spécialisé en développement web full-stack, marketing digital et automatisation. Actuellement Software Engineer chez Dalinovate, je pilote et contribue à des projets digitaux complets combinant développement web, SEO, automatisation (n8n), intelligence artificielle et création de contenu (vidéo & design).',
  /** LinkedIn About — complementary narrative */
  linkedInAbout:
    'With a strong foundation in IT and digital marketing, I bring a blend of technical expertise and strategic acumen. Experience spans customer-centric strategies, digital campaigns, SEO audits, and web development projects with technologies such as React.js and Spring Boot.',
  mission:
    'Concevoir des solutions digitales performantes qui allient excellence technique, visibilité SEO et automatisation intelligente pour accélérer la croissance des entreprises.',
  values: [
    {
      title: 'Excellence technique',
      description:
        'Des architectures web et mobiles modernes, maintenables et orientées performance.',
    },
    {
      title: 'Impact business',
      description:
        'Chaque livraison vise acquisition, conversion et efficacité opérationnelle mesurables.',
    },
    {
      title: 'Automatisation & IA',
      description:
        'Workflows n8n, intégrations API et outils d’IA pour supprimer le travail répétitif.',
    },
    {
      title: 'Créativité digitale',
      description:
        'Design, vidéo et social media pour une présence de marque cohérente et engageante.',
    },
  ],
  focuses: [
    'Web & Mobile (WordPress, React, Flutter)',
    'SEO technique & contenu',
    'Automatisation n8n & intégrations API',
    'Intelligence artificielle appliquée aux projets digitaux',
    'Gestion de projet & coordination d’équipes',
  ],
} as const;

/** Stats derived only from documented career data (CV + LinkedIn). Labels come from i18n. */
export const stats = [
  { id: 'experience', value: 2, suffix: '+', unit: 'ans' },
  { id: 'projects', value: 5, suffix: '', unit: '' },
  { id: 'education', value: 3, suffix: '', unit: 'diplômes' },
  { id: 'stack', value: 15, suffix: '+', unit: 'tech' },
] as const;

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  current: boolean;
  source: 'cv' | 'linkedin' | 'both';
  summary: string;
  responsibilities: string[];
};

/**
 * Experience timeline.
 * Dalinovate (CV, Present) + Carthage Transfer IT Manager (LinkedIn, Jun 2024–Present)
 * are both documented as current; Maryouli end date prefers LinkedIn (Jun 2024).
 */
export const experience: ExperienceItem[] = [
  {
    id: 'dalinovate',
    company: 'Dalinovate',
    role: 'Software Engineer',
    start: '2024',
    end: 'Présent',
    current: true,
    source: 'cv',
    summary:
      'Software Engineer chez Dalinovate. Conception de sites et applications web sur mesure, solutions frontend/backend modernes, SEO, automatisation n8n, IA et applications mobiles Flutter.',
    responsibilities: [
      'Conception de sites et applications web sur mesure avec WordPress et stacks frontend/backend modernes',
      'Développement d’applications mobiles avec Flutter',
      'Optimisation SEO (technique et contenu)',
      'Mise en place d’automatisations n8n (workflows, CRM, API, notifications)',
      'Intégration de solutions d’intelligence artificielle dans des projets digitaux',
      'Création de contenus visuels (Photoshop, montage vidéo)',
      'Gestion et animation des réseaux sociaux pour des projets clients',
    ],
  },
  {
    id: 'carthage-transfer-role',
    company: 'Carthage Transfer',
    role: 'IT Manager',
    location: 'Hybrid',
    start: 'Juin 2024',
    end: 'Présent',
    current: true,
    source: 'linkedin',
    summary:
      'IT Manager chez Carthage Transfer (transport & logistique). Pilotage des projets digitaux et de l’infrastructure IT au service d’une offre premium de transferts et chauffeur privé en Tunisie.',
    responsibilities: [
      'Pilotage IT et contribution aux projets digitaux de l’entreprise',
      'Alignement des solutions techniques avec les besoins métier (réservations, opérations, expérience client)',
    ],
  },
  {
    id: 'maryouli',
    company: 'Maryouli.com',
    role: 'Stagiaire Responsable Marketing Digital',
    location: 'Bardo, Tunis, Tunisie',
    start: 'Fév. 2024',
    end: 'Juin 2024',
    current: false,
    source: 'both',
    summary:
      'Pilotage de la stratégie marketing digitale de A à Z : inbound, outbound et performance.',
    responsibilities: [
      'Élaboration et mise en œuvre d’une stratégie marketing digitale globale',
      'Définition et suivi des KPIs (acquisition, conversion, fidélisation)',
      'Audits et optimisation SEO (technique et éditorial)',
      'Gestion des réseaux sociaux (Facebook, Instagram, TikTok) et création de contenus (Reels, Stories, vidéos courtes)',
      'Conception de visuels et production vidéo',
      'Campagnes emailing automatisées (newsletters, nurturing, relances)',
      'Analyse via Google Analytics et Search Console, A/B testing',
      'Coordination des équipes internes et prestataires, veille digitale',
    ],
  },
  {
    id: 'trivaw',
    company: 'Trivaw',
    role: 'Stagiaire Développeur Web Full-Stack',
    location: 'Remote',
    start: 'Fév. 2022',
    end: 'Juin 2022',
    current: false,
    source: 'both',
    summary:
      'Développement d’une application de réservation de maisons d’hôtes en méthodologie Agile.',
    responsibilities: [
      'Interfaces responsive avec React.js, Material UI et Tailwind CSS',
      'Back-end Spring Boot : APIs REST sécurisées et persistance MySQL',
      'Intégration full-stack (React + Spring Boot) avec Axios et Spring Security',
      'Modélisation UML de l’architecture logicielle',
      'Collaboration produit et gestion Agile (backlog, sprints bimensuels)',
    ],
  },
];

export type EducationItem = {
  id: string;
  school: string;
  degree: string;
  specialty?: string;
  start: string;
  end: string;
  status?: string;
};

/** Education — ESEN Manouba + Baccalauréat */
export const education: EducationItem[] = [
  {
    id: 'master',
    school: 'ESEN Manouba',
    degree: 'Master E-Business',
    start: '2022',
    end: '2024',
    status: 'Diplômé',
  },
  {
    id: 'licence',
    school: 'ESEN Manouba',
    degree: 'Licence en Business Computing',
    start: '2019',
    end: '2022',
  },
  {
    id: 'bac',
    school: 'Tunisie',
    degree: 'Baccalauréat en Informatique',
    start: '2017',
    end: '2018',
    status: 'Diplômé',
  },
];

export type Skill = {
  name: string;
  category:
    | 'frontend'
    | 'backend'
    | 'mobile'
    | 'database'
    | 'devops'
    | 'cms'
    | 'marketing'
    | 'automation'
    | 'design'
    | 'soft'
    | 'languages';
};

/** Skills extracted from CV + LinkedIn only. */
export const skills: Skill[] = [
  { name: 'React.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Material UI', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'Responsive Design', category: 'frontend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Spring Security', category: 'backend' },
  { name: 'Axios', category: 'backend' },
  { name: 'Flutter', category: 'mobile' },
  { name: 'MySQL', category: 'database' },
  { name: 'WordPress', category: 'cms' },
  { name: 'n8n', category: 'automation' },
  { name: 'APIs & intégration', category: 'automation' },
  { name: 'Intelligence artificielle (outils & automatisation)', category: 'automation' },
  { name: 'SEO (technique & contenu)', category: 'marketing' },
  { name: 'Google Analytics', category: 'marketing' },
  { name: 'Search Console', category: 'marketing' },
  { name: 'Emailing & automation', category: 'marketing' },
  { name: 'Social Media Management', category: 'marketing' },
  { name: 'A/B Testing', category: 'marketing' },
  { name: 'Photoshop', category: 'design' },
  { name: 'Montage vidéo', category: 'design' },
  { name: 'UML', category: 'devops' },
  { name: 'Agile / Scrum', category: 'devops' },
  { name: 'Gestion de projet', category: 'soft' },
  { name: 'Travail en équipe', category: 'soft' },
  { name: 'Autonomie', category: 'soft' },
  { name: 'Créativité', category: 'soft' },
  { name: 'Français', category: 'languages' },
  { name: 'English', category: 'languages' },
];

/** Category order for the skills grid. Labels come from i18n (`skill.cat.*`). */
export const skillCategories: Skill['category'][] = [
  'frontend',
  'backend',
  'mobile',
  'database',
  'cms',
  'automation',
  'marketing',
  'design',
  'devops',
  'soft',
  'languages',
];

export type Project = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  results: string[];
  github?: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
};

/** Projects from CV only — no invented case-study metrics. */
export const projects: Project[] = [
  {
    id: 'carthage-transfer',
    slug: 'carthage-transfer',
    name: 'Carthage Transfer',
    tagline: 'Site web, SEO et automatisation pour un service de transport premium',
    description:
      'Développement et gestion du site web, incluant la maintenance et l’évolution des fonctionnalités. Optimisation SEO et des performances afin d’améliorer la visibilité et l’expérience utilisateur. Mise en place d’automatisations des processus avec n8n (réservations, envoi d’emails, gestion client et workflows) pour fluidifier et optimiser les opérations de l’entreprise.',
    role: 'Développement web, SEO, automatisation & IT',
    technologies: ['WordPress', 'SEO', 'n8n', 'Automatisation', 'Email'],
    features: [
      'Développement et évolution du site web',
      'Maintenance continue des fonctionnalités',
      'Optimisation SEO technique et contenu',
      'Automatisations n8n : réservations, emails, gestion client et workflows',
    ],
    challenges: [
      'Fluidifier les opérations métier (réservations, suivi client) via l’automatisation',
      'Améliorer la visibilité organique et les performances du site',
    ],
    results: [
      'Processus métier automatisés avec n8n',
      'Site maintenu et optimisé pour la performance et le SEO',
    ],
    liveUrl: 'https://carthage-transfer.com/',
    image: '/images/projects/carthage-transfer.png',
    featured: true,
  },
  {
    id: 'amiris-group',
    slug: 'amiris-group',
    name: 'Amiris Group',
    tagline: 'Site web premium pour une société immobilière allemande',
    description:
      'Conception et développement du site Amiris Group, une plateforme digitale professionnelle dédiée à l’immobilier : administration de biens, courtage, investissement et conseil. L’expérience met en avant une identité premium, une navigation claire et une présentation soignée des services pour renforcer la crédibilité et la conversion.',
    role: 'Développement web & design digital',
    technologies: ['Astro', 'Web Design', 'SEO', 'UI/UX'],
    features: [
      'Site vitrine premium orienté conversion',
      'Présentation claire des services immobiliers',
      'Parcours utilisateur fluide (services, biens, contact)',
      'Optimisation des performances et du référencement',
    ],
    challenges: [
      'Traduire une offre immobilière complète en une expérience web élégante et lisible',
      'Assurer une image de marque premium sur desktop et mobile',
    ],
    results: [
      'Présence digitale professionnelle pour Amiris Group',
      'Site live : amirisgroup.com',
    ],
    liveUrl: 'https://amirisgroup.com/',
    image: '/images/projects/amiris-group.png',
    featured: true,
  },
  {
    id: 'fensterio',
    slug: 'fensterio',
    name: 'Fensterio',
    tagline: 'Site web et marketing digital pour un spécialiste fenêtres & portes',
    description:
      'Contribution au développement web, à l’optimisation SEO et à la création de contenus marketing pour Fensterio, spécialiste allemand des fenêtres, portes, volets et solutions de protection solaire. Le site met en avant le savoir-faire technique, les produits et le parcours client de la planification à la pose.',
    role: 'Marketing digital, SEO & développement web',
    technologies: ['SEO', 'Photoshop', 'Vidéo', 'Social Media', 'Web'],
    features: [
      'Création de contenus marketing (visuels, vidéos, social media)',
      'Optimisation SEO technique et éditoriale',
      'Contribution au développement et à l’évolution du site web',
      'Mise en valeur des produits et du process d’installation',
    ],
    challenges: [
      'Allier production de contenus engageants et objectifs SEO',
      'Soutenir le développement web en parallèle des livrables créatifs',
    ],
    results: [
      'Présence digitale renforcée via contenu et SEO',
      'Site live : fensterio.com',
    ],
    liveUrl: 'https://fensterio.com/',
    image: '/images/projects/fensterio.png',
    featured: true,
  },
  {
    id: 'djerba-airport-transfers',
    slug: 'djerba-airport-transfers',
    name: 'Djerba Airport Transfers',
    tagline: 'Site de réservation pour transferts aéroport à Djerba',
    description:
      'Développement et optimisation du site Djerba Airport Transfers, une plateforme de réservation en ligne pour des transferts fiables depuis l’aéroport de Djerba-Zarzis. Le site met en avant la flotte, le parcours de booking et la confiance client pour convertir les voyageurs en réservations.',
    role: 'Développement web, SEO & expérience de réservation',
    technologies: ['WordPress', 'SEO', 'Booking', 'UX'],
    features: [
      'Parcours de réservation en ligne (trajet, véhicule, confirmation)',
      'Présentation de la flotte et des services aéroport',
      'Optimisation SEO locale orientée Djerba / transferts',
      'Mise en avant des avis clients et de la crédibilité',
    ],
    challenges: [
      'Simplifier la réservation tout en présentant une offre de flotte complète',
      'Renforcer la conversion et la confiance pour un service local',
    ],
    results: [
      'Site live orienté conversion et réservation',
      'Présence digitale claire pour Airport Transfers Djerba',
    ],
    liveUrl: 'https://djerba-airport-transfers.com/',
    image: '/images/projects/djerba-airport-transfers.png',
    featured: true,
  },
  {
    id: 'airport-transfers-tunisia',
    slug: 'airport-transfers-tunisia',
    name: 'Airport Transfers Tunisia',
    tagline: 'Plateforme de transferts aéroport vers Hammamet et Enfidha',
    description:
      'Création et optimisation du site Airport Transfers Tunisia, dédié aux transferts privés et navettes entre Tunis, Enfidha et Hammamet. L’expérience combine réservation en ligne, présentation de flotte et contenus SEO pour capter la demande touristique et business.',
    role: 'Développement web, SEO & conversion',
    technologies: ['WordPress', 'SEO', 'Booking', 'Content'],
    features: [
      'Réservation en ligne (trajet, durée horaire, type de transfert)',
      'Pages services orientées Hammamet / Enfidha / Tunis',
      'SEO et contenus pour l’acquisition organique',
      'Mise en avant flotte, process et preuves sociales',
    ],
    challenges: [
      'Structurer une offre multi-destinations lisible et convertible',
      'Optimiser le référencement local et transactionnel',
    ],
    results: [
      'Site live prêt pour la réservation et le SEO',
      'Présence digitale renforcée pour Airport Transfers Tunisia',
    ],
    liveUrl: 'https://airporttransfertunisia.com/',
    image: '/images/projects/airport-transfers-tunisia.png',
    featured: true,
  },
];

/**
 * Services inferred strictly from documented experience (CV + LinkedIn).
 * Copy lives in i18n (`service.${id}.*`); this list drives order + icons only.
 */
export const services = [
  { id: 'web', icon: 'globe' },
  { id: 'mobile', icon: 'smartphone' },
  { id: 'wordpress', icon: 'layout' },
  { id: 'seo', icon: 'search' },
  { id: 'automation', icon: 'workflow' },
  { id: 'api', icon: 'cable' },
  { id: 'ai', icon: 'sparkles' },
  { id: 'ui', icon: 'palette' },
  { id: 'performance', icon: 'gauge' },
  { id: 'marketing', icon: 'megaphone' },
  { id: 'content', icon: 'clapperboard' },
  { id: 'consulting', icon: 'briefcase' },
] as const;

export const navLinks = [
  { href: '/#home', labelKey: 'nav.home' as const },
  { href: '/#about', labelKey: 'nav.about' as const },
  { href: '/#projects', labelKey: 'nav.projects' as const },
  { href: '/#experience', labelKey: 'nav.experience' as const },
  { href: '/#skills', labelKey: 'nav.skills' as const },
  { href: '/#services', labelKey: 'nav.services' as const },
  { href: '/#contact', labelKey: 'nav.contact' as const },
] as const;

const footerLabelKeys = [
  'nav.about',
  'nav.projects',
  'nav.services',
  'nav.contact',
] as const;

export const footerLinks = navLinks.filter((link) =>
  (footerLabelKeys as readonly string[]).includes(link.labelKey),
);
