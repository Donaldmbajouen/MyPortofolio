import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const projects = [
  {
    title: "Bonne Année 2026",
    description: {
      fr: "Mini-site créatif et interactif conçu pour souhaiter la bonne année avec une expérience visuelle festive et responsive.",
      en: "A creative interactive mini-site built to celebrate the new year with a festive and responsive visual experience.",
    },
    technologies: ["Frontend", "Responsive", "Animations"],
    category: "showcase",
    live: "https://bonne-annee-2026.vercel.app/"
  },
  {
    title: "Mauly Cake",
    description: {
      fr: "Site vitrine premium pour une marque pâtissière avec produits phares, recettes, avis clients et univers visuel gourmand.",
      en: "A premium showcase website for a pastry brand featuring products, recipes, customer reviews, and a rich visual identity.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    category: "showcase",
    live: "https://mauly-cake.vercel.app/"
  },
  {
    title: "Biyem-Assi Connect",
    description: {
      fr: "Plateforme web institutionnelle pour une paroisse avec contenus multilingues, informations communautaires et pages de contact.",
      en: "An institutional web platform for a parish with multilingual content, community information, and contact pages.",
    },
    technologies: ["TypeScript", "React", "Tailwind"],
    category: "platform",
    live: "https://biyem-assi-connect.vercel.app/"
  },
  {
    title: "Restaurant Donald",
    description: {
      fr: "Application web pour restaurant avec présentation du menu, réservations, retours clients et parcours orienté conversion.",
      en: "A restaurant web application featuring menu presentation, reservations, customer feedback, and a conversion-oriented journey.",
    },
    technologies: ["TypeScript", "React", "PWA", "Tailwind"],
    category: "platform",
    live: "https://restaurant-donald.vercel.app/"
  },
  {
    title: "Electronique Boutique",
    description: {
      fr: "Boutique e-commerce moderne dédiée aux produits électroniques avec catalogue, promos, navigation par catégories et expérience d'achat fluide.",
      en: "A modern e-commerce store for electronics with catalog browsing, promotions, category navigation, and a smooth shopping experience.",
    },
    technologies: ["TypeScript", "React", "Tailwind", "E-commerce"],
    category: "ecommerce",
    live: "https://electronique-boutique.vercel.app/"
  },
  {
    title: "Laravel Bootcamp",
    description: {
      fr: "Projet d’apprentissage Laravel orienté pratique, structuré autour des bases solides du framework et du développement d’applications web.",
      en: "A hands-on Laravel learning project focused on mastering framework fundamentals and web application development.",
    },
    technologies: ["Laravel", "PHP", "Blade", "MySQL"],
    category: "platform",
    live: "https://laravel-bootcamp-three.vercel.app/"
  },
  {
    title: "Raoul Project",
    description: {
      fr: "Site vitrine full stack développé avec Laravel et Blade, avec identité graphique soignée, structure corporate et animations de scroll.",
      en: "A full stack showcase website built with Laravel and Blade, featuring a polished visual identity, corporate structure, and scroll animations.",
    },
    technologies: ["Laravel", "Blade", "PHP", "Tailwind"],
    category: "showcase",
    github: "https://github.com/Donaldmbajouen/raoul_project",
    live: "https://raoul-project.vercel.app"
  },
  {
    title: "Local Pro Connect",
    description: {
      fr: "Plateforme de mise en relation entre clients et professionnels, avec recherche, profils publics et espace dashboard pour les prestataires.",
      en: "A platform connecting clients with professionals, including search, public profiles, and a dashboard for service providers.",
    },
    technologies: ["TypeScript", "React", "Tailwind"],
    category: "platform",
    github: "https://github.com/Donaldmbajouen/local-pro-connect"
  },
  {
    title: "EduAI Backend",
    description: {
      fr: "Backend Laravel d’une plateforme d’apprentissage intelligente avec gestion des cours, exercices, suivi de progression et API REST prête pour l’IA.",
      en: "Laravel backend for an intelligent learning platform with course management, exercises, progress tracking, and an AI-ready REST API.",
    },
    technologies: ["Laravel", "PHP", "REST API", "AI"],
    category: "backend",
    github: "https://github.com/Donaldmbajouen/EduAI_back"
  },
  {
    title: "Dolicash",
    description: {
      fr: "Application mobile orientée gestion financière personnelle avec suivi des transactions et organisation budgétaire.",
      en: "A mobile app focused on personal finance management, transaction tracking, and budget organization.",
    },
    technologies: ["Flutter", "Dart", "Finance"],
    category: "mobile",
    github: "https://github.com/Donaldmbajouen/dolicash2"
  },
  {
    title: "Pharmacie App",
    description: {
      fr: "Application mobile de gestion de pharmacie pensée pour le suivi des produits, des ventes et de l’organisation quotidienne.",
      en: "A mobile pharmacy management app designed for product tracking, sales monitoring, and daily operations.",
    },
    technologies: ["Flutter", "Dart", "Gestion"],
    category: "mobile",
    github: "https://github.com/Donaldmbajouen/pharmacie2"
  },
  {
    title: "Farmlink",
    description: {
      fr: "Application mobile AgriTech pensée comme un réseau social pour agriculteurs afin de favoriser les échanges et la mise en relation.",
      en: "An AgriTech mobile app designed as a social network for farmers to encourage networking and collaboration.",
    },
    technologies: ["Flutter", "Dart", "AgriTech"],
    category: "mobile",
    github: "https://github.com/Donaldmbajouen/Farmlink"
  }
];

const ProjectsSection = () => {
  const { locale, t, messages } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const visibleProjects = showAll ? filtered : filtered.slice(0, 6);

  const categories = [
    { id: 'all', label: t('common.all') },
    { id: 'showcase', label: messages.projects.filters.showcase },
    { id: 'platform', label: messages.projects.filters.platform },
    { id: 'ecommerce', label: messages.projects.filters.ecommerce },
    { id: 'mobile', label: messages.projects.filters.mobile },
    { id: 'backend', label: messages.projects.filters.backend },
  ];

  const categoryLabels: Record<string, string> = {
    showcase: messages.projects.filters.showcase,
    platform: messages.projects.filters.platform,
    ecommerce: messages.projects.filters.ecommerce,
    mobile: messages.projects.filters.mobile,
    backend: messages.projects.filters.backend,
  };

  useEffect(() => {
    setShowAll(false);
  }, [filter]);

  return (
    <section id="projets" data-scroll-section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium mb-2">{t('projects.eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('projects.title')}</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        {/* Filter */}
        <motion.div
          className="mb-10 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filter === cat.id
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="text-xs">
                  {categoryLabels[project.category] ?? project.category}
                </Badge>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description[locale]}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length > 6 && (
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="outline" onClick={() => setShowAll((prev) => !prev)}>
              {showAll ? t('common.seeLess') : t('common.seeMore')}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
