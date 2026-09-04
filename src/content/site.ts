/**
 * Source of truth: Ahmed Mighri CV + LinkedIn (linkedin.com/in/ahmed-mighri)
 * When both sources conflict, the more recent / dated source is preferred.
 */

export const siteConfig = {
  name: 'Ahmed Mighri',
  shortName: 'AM',
  email: 'ahmedmighri0@gmail.com',
  phoneDisplay: '+216 25 243 423',
  phoneHref: 'tel:+21625243423',
  cvPath: '/MIGHRI_AHMED-CV.pdf',
  cvFileName: 'MIGHRI_AHMED CV.pdf',
  socials: {
    linkedin: 'https://www.linkedin.com/in/ahmed-mighri/',
    email: 'mailto:ahmedmighri0@gmail.com',
    whatsapp: 'https://wa.me/21625243423',
  },
} as const;

export const profile = {
  role: 'Ingénieur logiciel & Spécialiste Digital',
  currentRole: 'Ingénieur logiciel',
  /** CV / portfolio: ingénieur logiciel chez Dalinovate */
  currentCompany: 'Dalinovate',
  intro:
    'Diplômé d’un Master E-Business et d’une Licence en Business Computing à l’ESEN Manouba, je suis spécialisé en développement web full-stack, marketing digital et automatisation. Actuellement ingénieur logiciel chez Dalinovate, je pilote et contribue à des projets digitaux complets combinant développement web, SEO, automatisation (n8n), intelligence artificielle et création de contenu (vidéo & design).',
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
  { id: 'projects', value: 12, suffix: '', unit: '' },
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
    role: 'Ingénieur logiciel',
    start: '2024',
    end: 'Présent',
    current: true,
    source: 'cv',
    summary:
      'Ingénieur logiciel chez Dalinovate. Conception de sites et applications web sur mesure, solutions frontend/backend modernes, SEO, automatisation n8n, IA et applications mobiles Flutter.',
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
    | 'automation'
    | 'marketing'
    | 'design'
    | 'testing'
    | 'methods'
    | 'soft'
    | 'languages';
};

/** Skills displayed in the Compétences grid. */
export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'JavaScript (ES6+)', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React.js', category: 'frontend' },
  { name: 'Astro', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Material UI', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Responsive Design', category: 'frontend' },
  // Backend
  { name: 'Java', category: 'backend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'Spring Security', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'JWT Authentication', category: 'backend' },
  { name: 'Axios', category: 'backend' },
  { name: 'Swagger / OpenAPI', category: 'backend' },
  // Mobile
  { name: 'Flutter', category: 'mobile' },
  { name: 'Dart', category: 'mobile' },
  { name: 'Firebase', category: 'mobile' },
  // Database
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'SQLite', category: 'database' },
  { name: 'Database Design', category: 'database' },
  // DevOps & Tools
  { name: 'Git', category: 'devops' },
  { name: 'GitHub', category: 'devops' },
  { name: 'GitHub Actions', category: 'devops' },
  { name: 'Docker', category: 'devops' },
  { name: 'Vercel', category: 'devops' },
  { name: 'Netlify', category: 'devops' },
  { name: 'Linux', category: 'devops' },
  { name: 'VS Code', category: 'devops' },
  { name: 'Postman', category: 'devops' },
  // CMS
  { name: 'WordPress', category: 'cms' },
  { name: 'Shopify', category: 'cms' },
  { name: 'Elementor', category: 'cms' },
  { name: 'WooCommerce', category: 'cms' },
  // AI & Automation
  { name: 'OpenAI API', category: 'automation' },
  { name: 'n8n', category: 'automation' },
  { name: 'AI Agents', category: 'automation' },
  { name: 'Prompt Engineering', category: 'automation' },
  { name: 'Workflow Automation', category: 'automation' },
  { name: 'API Integration', category: 'automation' },
  { name: 'Chatbots', category: 'automation' },
  // Marketing & SEO
  { name: 'Technical SEO', category: 'marketing' },
  { name: 'On-Page SEO', category: 'marketing' },
  { name: 'Google Analytics', category: 'marketing' },
  { name: 'Google Search Console', category: 'marketing' },
  { name: 'Keyword Research', category: 'marketing' },
  { name: 'Email Automation', category: 'marketing' },
  { name: 'Social Media Management', category: 'marketing' },
  { name: 'Schema.org', category: 'marketing' },
  { name: 'Sitemap & Robots.txt', category: 'marketing' },
  // Design & Content
  { name: 'Figma', category: 'design' },
  { name: 'Photoshop', category: 'design' },
  { name: 'Canva', category: 'design' },
  { name: 'Adobe Illustrator', category: 'design' },
  { name: 'Video Editing', category: 'design' },
  // Testing & Quality
  { name: 'Unit Testing', category: 'testing' },
  { name: 'Integration Testing', category: 'testing' },
  { name: 'Debugging', category: 'testing' },
  { name: 'Performance Optimization', category: 'testing' },
  { name: 'Cross-Browser Testing', category: 'testing' },
  // Methods
  { name: 'Agile / Scrum', category: 'methods' },
  { name: 'UML', category: 'methods' },
  { name: 'Clean Architecture', category: 'methods' },
  { name: 'SOLID Principles', category: 'methods' },
  { name: 'MVC', category: 'methods' },
  { name: 'Clean Code', category: 'methods' },
  // Soft Skills
  { name: 'Problem Solving', category: 'soft' },
  { name: 'Teamwork', category: 'soft' },
  { name: 'Communication', category: 'soft' },
  { name: 'Project Management', category: 'soft' },
  { name: 'Leadership', category: 'soft' },
  { name: 'Time Management', category: 'soft' },
  { name: 'Adaptability', category: 'soft' },
  { name: 'Creativity', category: 'soft' },
  // Languages
  { name: 'Arabic (Native)', category: 'languages' },
  { name: 'French (Professional)', category: 'languages' },
  { name: 'English (Professional)', category: 'languages' },
];

/** Category order for the skills grid. Labels come from i18n (`skill.cat.*`). */
export const skillCategories: Skill['category'][] = [
  'frontend',
  'backend',
  'mobile',
  'database',
  'devops',
  'cms',
  'automation',
  'marketing',
  'design',
  'testing',
  'methods',
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
    tagline:
      'Carthage Transfer (Tunisie) — site web, SEO et automatisation pour un service de transferts VIP et navettes aéroport.',
    description:
      'Carthage Transfer est un service de transport premium en Tunisie (transferts VIP et navettes aéroport). Développement et gestion du site web, maintenance et évolution des fonctionnalités, optimisation SEO et performances, plus automatisations n8n (réservations, emails, gestion client et workflows) pour fluidifier les opérations.',
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
    tagline:
      'Amiris Group (Allemagne) — site vitrine premium pour une société immobilière : biens, courtage, investissement et conseil.',
    description:
      'Amiris Group est une société immobilière allemande (administration de biens, courtage, investissement et conseil). Conception et développement de son site vitrine premium : identité soignée, navigation claire et présentation des services pour renforcer crédibilité et conversion. Live : amirisgroup.com.',
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
    id: 'amiris-badsanierung',
    slug: 'amiris-badsanierung',
    name: 'Amiris Badsanierung',
    tagline:
      'Amiris Badsanierung (Allemagne) — site web premium pour la rénovation de salles de bains : planification, artisanat et conversion.',
    description:
      'Amiris Badsanierung est une entreprise allemande spécialisée dans la rénovation premium de salles de bains (sanitaires, douches walk-in, carrelage, accessibilité). Conception et développement du site vitrine : présentation des prestations, projets avant/après, parcours client en 5 étapes, avis et formulaire de conseil gratuit. Live : amiris-badsanierung.de.',
    role: 'Développement web, SEO & conversion',
    technologies: ['Web', 'SEO', 'UI/UX', 'Content'],
    features: [
      'Site vitrine premium orienté rénovation de salles de bains',
      'Pages prestations : sanitaires, walk-in, carrelage, accessibilité',
      'Galerie avant/après et parcours client structuré',
      'Formulaire de conseil gratuit et preuves sociales',
    ],
    challenges: [
      'Traduire une offre artisanale premium en expérience web claire et rassurante',
      'Convertir les visiteurs vers une demande de conseil sans friction',
    ],
    results: [
      'Présence digitale professionnelle pour Amiris Badsanierung',
      'Site live : amiris-badsanierung.de',
    ],
    liveUrl: 'https://amiris-badsanierung.de/',
    image: '/images/projects/amiris-badsanierung.png',
    featured: true,
  },
  {
    id: 'fensterio',
    slug: 'fensterio',
    name: 'Fensterio',
    tagline:
      'Fensterio (Allemagne) — site web et marketing digital pour un spécialiste fenêtres, portes, volets et protection solaire.',
    description:
      'Fensterio est un spécialiste allemand des fenêtres, portes, volets et solutions de protection solaire. Contribution au développement web, SEO et contenus marketing : le site met en avant le savoir-faire, les produits et le parcours client de la planification à la pose. Live : fensterio.com.',
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
    tagline:
      'Djerba Airport Transfers (Tunisie) — plateforme de réservation de transferts privés depuis l’aéroport Djerba-Zarzis.',
    description:
      'Djerba Airport Transfers propose des transferts privés depuis l’aéroport Djerba-Zarzis (Tunisie). Développement et optimisation d’une plateforme de réservation en ligne : flotte, parcours de booking et preuves de confiance pour convertir les voyageurs. Live : djerba-airport-transfers.com.',
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
    tagline:
      'Airport Transfers Tunisia — site de réservation pour transferts privés et navettes entre Tunis, Enfidha et Hammamet.',
    description:
      'Airport Transfers Tunisia dessert les transferts privés et navettes entre Tunis, Enfidha et Hammamet. Création et optimisation du site : réservation en ligne, présentation de flotte et contenus SEO pour la demande touristique et business. Live : airporttransfertunisia.com.',
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
  {
    id: 'carthage-dmc',
    slug: 'carthage-dmc',
    name: 'Carthage DMC',
    tagline:
      'Carthage DMC (Tunisie) — site web pour une DMC : tours, transferts aéroport, MICE et logistique B2B à Tunis.',
    description:
      'Carthage DMC est une destination management company basée à Montplaisir, Tunis. Conception et développement du site vitrine : présentation des services (transferts TUN / Enfidha / Monastir, hôtels, circuits, MICE, incentive), régions de Tunisie, témoignages partenaires et formulaire de devis B2B. Live : carthage-dmc.com.',
    role: 'Développement web, SEO & conversion B2B',
    technologies: ['Web', 'SEO', 'UI/UX', 'Content'],
    features: [
      'Site vitrine orienté agences, tour-opérateurs et entreprises',
      'Pages services : transferts, hôtels, tours, MICE et incentive',
      'Présentation des destinations et régions de Tunisie',
      'Formulaire de devis et parcours contact B2B',
    ],
    challenges: [
      'Clarifier une offre DMC complète pour un public B2B international',
      'Structurer services, destinations et preuves sociales pour convertir en devis',
    ],
    results: [
      'Présence digitale professionnelle pour Carthage DMC',
      'Site live : carthage-dmc.com',
    ],
    liveUrl: 'https://carthage-dmc.com/',
    image: '/images/projects/carthage-dmc.png',
    featured: true,
  },
  {
    id: 'carthage-global-services',
    slug: 'carthage-global-services',
    name: 'Carthage Global Services',
    tagline:
      'Carthage Global Services (USA / international) — site web MICE & event management pour des entreprises dans 100+ pays.',
    description:
      'Carthage Global Services est une société d’event management et de solutions MICE (siège Wyoming, USA) opérant à l’international. Conception et développement du site corporate : services (hébergement, conférences, travel, AV, interprétation), présence mondiale, RSE et formulaire de proposition. Live : carthage-global-services.com.',
    role: 'Développement web, SEO & site corporate',
    technologies: ['Web', 'SEO', 'UI/UX', 'Content'],
    features: [
      'Site corporate orienté MICE et event management international',
      'Présentation des services : lodging, conferences, travel, AV, interprétation',
      'Section présence mondiale (100+ pays) et responsabilité sociale',
      'Formulaire de contact / demande de proposition',
    ],
    challenges: [
      'Positionner une offre MICE mondiale de façon claire et crédible',
      'Allier image premium, preuves sociales et conversion en leads B2B',
    ],
    results: [
      'Présence digitale internationale pour Carthage Global Services',
      'Site live : carthage-global-services.com',
    ],
    liveUrl: 'https://carthage-global-services.com/',
    image: '/images/projects/carthage-global-services.png',
    featured: true,
  },
  {
    id: 'curakissen',
    slug: 'curakissen',
    name: 'CuraKissen',
    tagline:
      'CuraKissen (Allemagne) — boutique e-commerce pour des oreillers ergonomiques Memory Foam : catalogue, SEO et conversion.',
    description:
      'CuraKissen® est une marque allemande d’oreillers ergonomiques et orthopédiques (Memory Foam, Öko-Tex). Conception et développement du site e-commerce : catalogue produits, avantages et preuves scientifiques, avis clients, FAQ et parcours d’achat (panier, livraison, paiement). Live : curakissen.de.',
    role: 'Développement web, SEO & e-commerce',
    technologies: ['Web', 'E-commerce', 'SEO', 'UI/UX'],
    features: [
      'Boutique e-commerce orientée produits ergonomiques',
      'Fiches produits, comparaison et preuves sociales',
      'Parcours panier / checkout et réassurance (essai 30 nuits)',
      'SEO et contenus pour l’acquisition organique en Allemagne',
    ],
    challenges: [
      'Convertir une offre produit santé/confort en expérience d’achat claire',
      'Structurer catalogue, preuves et FAQ pour rassurer et vendre',
    ],
    results: [
      'Présence e-commerce professionnelle pour CuraKissen',
      'Site live : curakissen.de',
    ],
    liveUrl: 'https://curakissen.de/',
    image: '/images/projects/curakissen.png?v=2',
    featured: true,
  },
  {
    id: 'tunisiafeed',
    slug: 'tunisiafeed',
    name: 'tunisiafeed.com',
    tagline:
      'tunisiafeed.com (Tunisie) — magazine digital multilingue : tech, design, culture, business et destinations tunisiennes.',
    description:
      'tunisiafeed.com est un magazine digital imaginé depuis la Tunisie. Conception et développement du site éditorial : articles, interviews, section Tunisia / 2060, destinations, FAQ, newsletter Future Digest et interface multilingue (FR, EN, DE, AR, IT, ES). Live : tunisiafeed.com.',
    role: 'Développement web, SEO & éditorial digital',
    technologies: ['Web', 'SEO', 'UI/UX', 'Content', 'i18n'],
    features: [
      'Magazine digital avec rubriques Discover, Blog, Interviews et Tunisia',
      'Contenus tech, design, culture, business et travel',
      'Section destinations et interviews de profils tunisiens',
      'Newsletter Future Digest et navigation multilingue',
    ],
    challenges: [
      'Structurer un magazine riche en contenus sans surcharge de navigation',
      'Allier identité éditoriale premium et SEO multilingue',
    ],
    results: [
      'Présence digitale éditoriale pour tunisiafeed.com',
      'Site live : tunisiafeed.com',
    ],
    liveUrl: 'https://tunisiafeed.com/',
    image: '/images/projects/tunisiafeed.png',
    featured: true,
  },
  {
    id: 'amiris-leckortung',
    slug: 'amiris-leckortung',
    name: 'Amiris Leckortung',
    tagline:
      'Amiris Leckortung (Allemagne) — site web pour la détection de fuites d’eau : services, mesures et conversion B2C.',
    description:
      'Amiris Leckortung est une entreprise allemande spécialisée dans la détection de fuites et l’ortung de dégâts des eaux (acoustique, thermographie, humidité). Conception et développement du site vitrine : services, méthodes, projets référencés, parcours client et formulaire de contact. Live : amiris-leckortung.de.',
    role: 'Développement web, SEO & conversion',
    technologies: ['Web', 'SEO', 'UI/UX', 'Content'],
    features: [
      'Site vitrine orienté Leckortung et Wasserschadenortung',
      'Présentation des méthodes : acoustique, humidité, thermographie, tracer-gas',
      'Galerie projets et témoignages clients',
      'Parcours contact et FAQ pour demandes urgentes',
    ],
    challenges: [
      'Expliquer une offre technique de manière claire pour propriétaires et assureurs',
      'Convertir les demandes urgentes via confiance et réassurance',
    ],
    results: [
      'Présence digitale professionnelle pour Amiris Leckortung',
      'Site live : amiris-leckortung.de',
    ],
    liveUrl: 'https://amiris-leckortung.de/',
    image: '/images/projects/amiris-leckortung.png',
    featured: true,
  },
  {
    id: 'autoglas-meister',
    slug: 'autoglas-meister',
    name: 'Autoglas Meister',
    tagline:
      'Autoglas Meister (Allemagne) — site web pour le remplacement mobile de vitres auto à Francfort : services, urgence et prise de rendez-vous.',
    description:
      'Autoglas Meister est une entreprise allemande spécialisée dans le Scheibenwechsel mobile (remplacement de pare-brise et vitres) à Francfort et environs. Conception et développement du site vitrine : prestations PKW/LKW/luxe, parcours de réservation, avis clients, FAQ et formulaire de contact. Live : autoglas-meister.de.',
    role: 'Développement web, SEO & conversion',
    technologies: ['Web', 'SEO', 'UI/UX', 'Content'],
    features: [
      'Site vitrine orienté Scheibenwechsel mobile et Notdienst',
      'Prestations pour PKW, LKW, sport et véhicules de luxe',
      'Parcours de réservation, avis Google et FAQ',
      'Contact et conversion pour demandes urgentes',
    ],
    challenges: [
      'Mettre en avant le service mobile et la rapidité sans surcharger le message',
      'Convertir les urgences (casse, steinschlag) vers un rendez-vous clair',
    ],
    results: [
      'Présence digitale professionnelle pour Autoglas Meister',
      'Site live : autoglas-meister.de',
    ],
    liveUrl: 'https://autoglas-meister.de/',
    image: '/images/projects/autoglas-meister.png',
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
