import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'fr' | 'en';

const messages = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      journey: 'Parcours',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },
    common: {
      seeMore: 'Voir plus',
      seeLess: 'Voir moins',
      all: 'Tout',
      light: 'Clair',
      dark: 'Sombre',
      madeWith: 'Fait avec',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      role: 'Développeur Full Stack',
      description:
        'Passionné par le développement web et mobile avec Laravel, FastApi, Vue.js, React et Flutter. Je crée des applications modernes, performantes et élégantes.',
      contact: 'Me contacter',
      projects: 'Voir mes projets',
      resume: 'Télécharger mon CV',
    },
    about: {
      eyebrow: 'Qui suis-je',
      title: 'À Propos De Moi',
      paragraph1:
        "Développeur passionné basé au Cameroun, je conçois des solutions web et mobiles modernes avec une forte orientation vers l’impact réel. Spécialisé en **Laravel, FastApi, Vue.js, React et Flutter**, je développe des applications complètes, de l’idée jusqu’à la mise en production, en mettant l’accent sur la performance, l’expérience utilisateur et la scalabilité.",
      paragraph2:
        "Au-delà du code, je m’intéresse à la création de produits utiles et rentables, notamment en Afrique (SaaS, IA, solutions locales). Passionné par l’innovation comme la traduction vocale en temps réel, je combine technique et réflexion produit pour transformer des concepts en applications concrètes qui résolvent de vrais problèmes.",
      stats: {
        years: "Années d'exp.",
        projects: 'Projets',
        technologies: 'Technologies',
      },
      servicesTitle: 'Ce Que Je Fais',
      services: {
        web: {
          title: 'Développement Web',
          description: 'Applications web modernes avec Laravel, Vue.js, Nuxt.js et React.',
        },
        mobile: {
          title: 'Développement Mobile',
          description: 'Apps cross-platform avec Flutter et Dart pour iOS et Android.',
        },
        backend: {
          title: 'Backend & API',
          description: 'APIs RESTful robustes avec Laravel, PHP, MySQL et PostgreSQL.',
        },
        design: {
          title: 'Création & Design',
          description: 'Prototypage Figma, conception UX/UI et retouche Photoshop.',
        },
        frontend: {
          title: 'Intégration Frontend',
          description: 'Intégration pixel-perfect avec Tailwind CSS et frameworks modernes.',
        },
        iot: {
          title: 'IoT & Systèmes',
          description: 'Solutions embarquées, applications IoT et projets AgriTech.',
        },
      },
    },
    journey: {
      eyebrow: 'Mon évolution',
      title: 'Expériences, Parcours Académique & Diplômes',
      description:
        "Une vue d’ensemble de mon expérience terrain, de mon parcours académique et des diplômes qui structurent mon profil.",
      tabs: {
        experiences: 'Expériences Pro',
        academic: 'Parcours Académique',
        diplomas: 'Diplômes',
      },
      experiences: [
        {
          title: 'Développeur Full Stack & Intégrateur de Paiement',
          company: 'Saamaya Finance',
          period: 'Mai 2026 - Aujourd\'hui',
          summary: "Conception et intégration de solutions de paiement robustes, développement d'APIs performantes et déploiement d'applications modernes.",
          tasks: [
            'Intégration de passerelles de paiement (Stripe, PayDunya, CinetPay, Mobile Money) dans des applications web.',
            "Développement d'APIs RESTful performantes avec Node.js et FastAPI.",
            'Mise en cache et optimisation des performances applicatives avec Redis.',
            "Déploiement et maintenance de l'infrastructure applicative (CI/CD, Linux, Docker).",
            "Développement d'interfaces modernes et responsives connectées aux APIs de paiement.",
          ],
        },
        {
          title: 'Développeur Full Stack Laravel / Vue.js',
          company: 'EVERBLUE Solution',
          period: 'Juin 2025 - Mai 2026',
          summary: 'Participation au développement de solutions digitales orientées production et besoins clients.',
          tasks: [
            'Développement de solutions e-commerce adaptées aux besoins métiers.',
            "Contribution à l'analyse et au développement d'un projet web pour une agence de voyage.",
            "Participation à la réalisation d'un réseau social en cours de mise en production.",
          ],
        },
        {
          title: 'Stagiaire en Développement Web',
          company: 'MHTECH',
          period: 'Juin 2024 - Décembre 2024',
          summary: "Immersion pratique dans les tests, l’intégration et le développement de solutions web.",
          tasks: [
            "Participation aux tests des logiciels de l'entreprise.",
            "Contribution au développement d'une application web de tourisme.",
            'Réalisation de templates pour une solution de gestion scolaire.',
          ],
        },
      ],
      academic: [
        {
          title: 'Cycle professionnel en Génie Logiciel',
          school: 'IAI-CAMEROUN',
          period: '2024 - 2025',
          description:
            'Renforcement des compétences en conception logicielle, développement full stack, modélisation et gestion de projets numériques.',
        },
        {
          title: 'Formation supérieure orientée développement logiciel',
          school: 'IAI-CAMEROUN',
          period: '2023 - 2024',
          description:
            'Approfondissement des bases en algorithmique, bases de données, développement web et structuration d’applications.',
        },
        {
          title: 'Parcours scientifique',
          school: 'Lycée Bilingue de Penka-Michel',
          period: '2021 - 2022',
          description:
            'Base académique scientifique ayant consolidé la logique, la rigueur et la résolution de problèmes.',
        },
      ],
      diplomas: [
        {
          title: 'Licence Professionnelle en Génie Logiciel',
          school: 'IAI-CAMEROUN',
          period: '2024 - 2025',
        },
        {
          title: "Diplôme d'Ingénieur de Travaux en Génie Logiciel",
          school: 'IAI-CAMEROUN',
          period: '2024 - 2025',
        },
        {
          title: 'Diplôme de Technicien Supérieur (DTS)',
          school: 'IAI-CAMEROUN',
          period: '2023 - 2024',
        },
        {
          title: 'Baccalauréat C',
          school: 'Lycée Bilingue de Penka-Michel',
          period: '2021 - 2022',
        },
      ],
    },
    skills: {
      eyebrow: 'Mes compétences',
      title: 'Compétences',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile',
        tools: 'Outils',
        ai: 'IA & Prompting',
        design: 'Design',
      },
      details: {
        cursor: 'Utilisation pour accélérer l’écriture, la refactorisation et l’exploration du code.',
        aiCoding: 'Appui sur les outils IA pour générer des bases solides, corriger et documenter plus vite.',
        promptEngineering: 'Prompts clairs avec objectif, contexte, contraintes, format attendu et critères de qualité.',
        structuredPrompts: 'Capacité à guider l’IA pour le debugging, la génération de composants et la résolution ciblée.',
      },
    },
    projects: {
      eyebrow: 'Mes réalisations',
      title: 'Projets',
      filters: {
        showcase: 'Vitrine',
        platform: 'Plateforme',
        ecommerce: 'E-commerce',
        mobile: 'Mobile',
        backend: 'Backend',
      },
    },
    contact: {
      eyebrow: 'Restons en contact',
      title: 'Contact',
      description: "N'hésitez pas à me contacter pour discuter de vos projets ou pour toute collaboration.",
      phone: 'Téléphone',
      email: 'Email',
      location: 'Localisation',
      locationValue: 'Yaoundé, Cameroun',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'Votre email',
      messagePlaceholder: 'Votre message...',
      submit: 'Envoyer sur WhatsApp',
      whatsappGreeting: 'Bonjour Donald,',
      whatsappMessage: 'Message:',
      notProvided: 'Non renseigné',
      noMessage: 'Aucun message saisi.',
    },
    footer: {
      text: 'Fait avec',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      journey: 'Journey',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    common: {
      seeMore: 'See more',
      seeLess: 'See less',
      all: 'All',
      light: 'Light',
      dark: 'Dark',
      madeWith: 'Made with',
    },
    hero: {
      greeting: 'Hello, I am',
      role: 'Full Stack Developer',
      description:
        'Passionate about web and mobile development with Laravel, Vue.js, Nuxt.js, and Flutter. I build modern, high-performance, and elegant applications.',
      contact: 'Contact me',
      projects: 'View my projects',
      resume: 'Download my resume',
    },
    about: {
      eyebrow: 'Who I am',
      title: 'About Me',
      paragraph1:
        "A passionate developer based in Cameroon, I design modern web and mobile solutions with a strong focus on real-world impact. Specialized in **Laravel, Vue.js, and Flutter**, I develop complete applications from idea to production, emphasizing performance, user experience, and scalability.",
      paragraph2:
        "Beyond code, I focus on creating useful and profitable products, especially in Africa (SaaS, AI, local solutions). Driven by innovation like real-time voice translation, I combine technical skills with product thinking to turn concepts into concrete applications that solve real problems.",
      stats: {
        years: 'Years exp.',
        projects: 'Projects',
        technologies: 'Technologies',
      },
      servicesTitle: 'What I Do',
      services: {
        web: {
          title: 'Web Development',
          description: 'Modern web applications built with Laravel, Vue.js, Nuxt.js, and React.',
        },
        mobile: {
          title: 'Mobile Development',
          description: 'Cross-platform apps with Flutter and Dart for iOS and Android.',
        },
        backend: {
          title: 'Backend & API',
          description: 'Robust RESTful APIs with Laravel, PHP, MySQL, and PostgreSQL.',
        },
        design: {
          title: 'Creation & Design',
          description: 'Figma prototyping, UX/UI design, and Photoshop editing.',
        },
        frontend: {
          title: 'Frontend Integration',
          description: 'Pixel-perfect integration with Tailwind CSS and modern frameworks.',
        },
        iot: {
          title: 'IoT & Systems',
          description: 'Embedded solutions, IoT applications, and AgriTech projects.',
        },
      },
    },
    journey: {
      eyebrow: 'My growth',
      title: 'Professional Experience, Academic Path & Degrees',
      description:
        'An overview of my field experience, academic journey, and the qualifications shaping my profile.',
      tabs: {
        experiences: 'Work Experience',
        academic: 'Academic Path',
        diplomas: 'Degrees',
      },
      experiences: [
        {
          title: 'Full Stack Developer & Payment Integrator',
          company: 'Freelance',
          period: 'May 2026 - Present',
          summary: 'Design and integration of robust payment solutions, development of high-performance APIs, and deployment of modern applications.',
          tasks: [
            'Integration of payment gateways (Stripe, PayDunya, CinetPay, Mobile Money) into web applications.',
            'Development of high-performance RESTful APIs with Node.js and FastAPI.',
            'Cache management and application performance optimization with Redis.',
            'Deployment and maintenance of application infrastructure (CI/CD, Linux, Docker).',
            'Development of modern, responsive interfaces connected to payment APIs.',
          ],
        },
        {
          title: 'Full Stack Developer Laravel / Vue.js',
          company: 'EVERBLUE Solution',
          period: 'June 2025 - Present',
          summary: 'Contributing to production-oriented digital solutions aligned with client needs.',
          tasks: [
            'Development of e-commerce solutions tailored to business needs.',
            'Contribution to the analysis and development of a web project for a travel agency.',
            'Participation in the implementation of a social network nearing production.',
          ],
        },
        {
          title: 'Web Development Intern',
          company: 'MHTECH',
          period: 'June 2024 - December 2024',
          summary: 'Hands-on experience in testing, integration, and web solution development.',
          tasks: [
            "Participation in the company's software testing activities.",
            'Contribution to the development of a tourism web application.',
            'Creation of templates for a school management solution.',
          ],
        },
      ],
      academic: [
        {
          title: 'Professional Software Engineering Cycle',
          school: 'IAI-CAMEROUN',
          period: '2024 - 2025',
          description:
            'Strengthened skills in software design, full stack development, modeling, and digital project management.',
        },
        {
          title: 'Higher Education in Software Development',
          school: 'IAI-CAMEROUN',
          period: '2023 - 2024',
          description:
            'Deeper foundations in algorithms, databases, web development, and application architecture.',
        },
        {
          title: 'Scientific Academic Track',
          school: 'Lycée Bilingue de Penka-Michel',
          period: '2021 - 2022',
          description:
            'Scientific academic background that strengthened logic, rigor, and problem-solving skills.',
        },
      ],
      diplomas: [
        {
          title: 'Professional Bachelor in Software Engineering',
          school: 'IAI-CAMEROUN',
          period: '2024 - 2025',
        },
        {
          title: 'Assistant Engineering Degree in Software Engineering',
          school: 'IAI-CAMEROUN',
          period: '2024 - 2025',
        },
        {
          title: 'Higher National Diploma (HND)',
          school: 'IAI-CAMEROUN',
          period: '2023 - 2024',
        },
        {
          title: 'Scientific Baccalaureate C',
          school: 'Lycée Bilingue de Penka-Michel',
          period: '2021 - 2022',
        },
      ],
    },
    skills: {
      eyebrow: 'My skills',
      title: 'Skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile',
        tools: 'Tools',
        ai: 'AI & Prompting',
        design: 'Design',
      },
      details: {
        cursor: 'Used to accelerate writing, refactoring, and code exploration.',
        aiCoding: 'Leverages AI coding tools to generate solid foundations, fix issues, and document faster.',
        promptEngineering: 'Clear prompts with objective, context, constraints, expected format, and quality criteria.',
        structuredPrompts: 'Ability to guide AI for debugging, component generation, and targeted problem-solving.',
      },
    },
    projects: {
      eyebrow: 'My work',
      title: 'Projects',
      filters: {
        showcase: 'Showcase',
        platform: 'Platform',
        ecommerce: 'E-commerce',
        mobile: 'Mobile',
        backend: 'Backend',
      },
    },
    contact: {
      eyebrow: 'Let’s stay in touch',
      title: 'Contact',
      description: 'Feel free to contact me to discuss your projects or any collaboration opportunity.',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      locationValue: 'Yaounde, Cameroon',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message...',
      submit: 'Send on WhatsApp',
      whatsappGreeting: 'Hello Donald,',
      whatsappMessage: 'Message:',
      notProvided: 'Not provided',
      noMessage: 'No message entered.',
    },
    footer: {
      text: 'Made with',
    },
  },
} as const;

interface TranslationTree {
  nav: {
    home: string;
    about: string;
    journey: string;
    skills: string;
    projects: string;
    contact: string;
  };
  common: {
    seeMore: string;
    seeLess: string;
    all: string;
    light: string;
    dark: string;
    madeWith: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    contact: string;
    projects: string;
    resume: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    stats: {
      years: string;
      projects: string;
      technologies: string;
    };
    servicesTitle: string;
    services: {
      web: { title: string; description: string };
      mobile: { title: string; description: string };
      backend: { title: string; description: string };
      design: { title: string; description: string };
      frontend: { title: string; description: string };
      iot: { title: string; description: string };
    };
  };
  journey: {
    eyebrow: string;
    title: string;
    description: string;
    tabs: {
      experiences: string;
      academic: string;
      diplomas: string;
    };
    experiences: ReadonlyArray<{
      readonly title: string;
      readonly company: string;
      readonly period: string;
      readonly summary: string;
      readonly tasks: ReadonlyArray<string>;
    }>;
    academic: ReadonlyArray<{
      readonly title: string;
      readonly school: string;
      readonly period: string;
      readonly description: string;
    }>;
    diplomas: ReadonlyArray<{
      readonly title: string;
      readonly school: string;
      readonly period: string;
    }>;
  };
  skills: {
    eyebrow: string;
    title: string;
    categories: {
      frontend: string;
      backend: string;
      mobile: string;
      tools: string;
      ai: string;
      design: string;
    };
    details: {
      cursor: string;
      aiCoding: string;
      promptEngineering: string;
      structuredPrompts: string;
    };
  };
  projects: {
    eyebrow: string;
    title: string;
    filters: {
      showcase: string;
      platform: string;
      ecommerce: string;
      mobile: string;
      backend: string;
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    phone: string;
    email: string;
    location: string;
    locationValue: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    whatsappGreeting: string;
    whatsappMessage: string;
    notProvided: string;
    noMessage: string;
  };
  footer: {
    text: string;
  };
}
type TranslationKey =
  | 'nav.home'
  | 'nav.about'
  | 'nav.journey'
  | 'nav.skills'
  | 'nav.projects'
  | 'nav.contact'
  | 'common.seeMore'
  | 'common.seeLess'
  | 'common.all'
  | 'common.madeWith'
  | 'hero.greeting'
  | 'hero.role'
  | 'hero.description'
  | 'hero.contact'
  | 'hero.projects'
  | 'hero.resume'
  | 'about.eyebrow'
  | 'about.title'
  | 'about.paragraph1'
  | 'about.paragraph2'
  | 'about.stats.years'
  | 'about.stats.projects'
  | 'about.stats.technologies'
  | 'about.servicesTitle'
  | 'skills.eyebrow'
  | 'skills.title'
  | 'projects.eyebrow'
  | 'projects.title'
  | 'contact.eyebrow'
  | 'contact.title'
  | 'contact.description'
  | 'contact.phone'
  | 'contact.email'
  | 'contact.location'
  | 'contact.locationValue'
  | 'contact.namePlaceholder'
  | 'contact.emailPlaceholder'
  | 'contact.messagePlaceholder'
  | 'contact.submit'
  | 'contact.whatsappGreeting'
  | 'contact.whatsappMessage'
  | 'contact.notProvided'
  | 'contact.noMessage'
  | 'footer.text';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
  messages: TranslationTree;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getValue = (locale: Locale, key: TranslationKey): string => {
  const value = key.split('.').reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === 'object' && segment in acc) {
      return (acc as Record<string, unknown>)[segment];
    }

    return undefined;
  }, messages[locale]);

  return typeof value === 'string' ? value : key;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem('portfolio-locale');
    return saved === 'en' ? 'en' : 'fr';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: TranslationKey) => getValue(locale, key),
      messages: messages[locale],
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
