import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import TiltCard from './TiltCard';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

const projects = [
  {
    title: "ProCAD",
    description: {
      fr: "Site de présentation professionnelle d'une entreprise de BTP moderne avec portfolio de services et réalisations, animations fluides et design responsive.",
      en: "A modern professional showcase website featuring services and project portfolio with smooth animations and responsive design.",
    },
    technologies: ["React", "TypeScript", "Tailwind", "Framer Motion", "shadcn/ui"],
    category: "showcase",
    github: "https://github.com/Donaldmbajouen/procad",
    live: "https://procad.vercel.app/",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop"
  },
  {
    title: "Bonne Année 2026",
    description: {
      fr: "Mini-site créatif et interactif conçu pour souhaiter la bonne année avec une expérience visuelle festive et responsive.",
      en: "A creative interactive mini-site built to celebrate the new year with a festive and responsive visual experience.",
    },
    technologies: ["Frontend", "Responsive", "Animations"],
    category: "showcase",
    live: "https://bonne-annee-2026.vercel.app/",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop"
  },
  {
    title: "Mauly Cake",
    description: {
      fr: "Site vitrine premium pour une marque pâtissière avec produits phares, recettes, avis clients et univers visuel gourmand.",
      en: "A premium showcase website for a pastry brand featuring products, recipes, customer reviews, and a rich visual identity.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    category: "showcase",
    live: "https://mauly-cake.vercel.app/",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=300&fit=crop"
  },
  {
    title: "Biyem-Assi Connect",
    description: {
      fr: "Plateforme web institutionnelle pour une paroisse avec contenus multilingues, informations communautaires et pages de contact.",
      en: "An institutional web platform for a parish with multilingual content, community information, and contact pages.",
    },
    technologies: ["TypeScript", "React", "Tailwind"],
    category: "platform",
    live: "https://biyem-assi-connect.vercel.app/",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
  },
  {
    title: "Restaurant Donald",
    description: {
      fr: "Application web pour restaurant avec présentation du menu, réservations, retours clients et parcours orienté conversion.",
      en: "A restaurant web application featuring menu presentation, reservations, customer feedback, and a conversion-oriented journey.",
    },
    technologies: ["TypeScript", "React", "PWA", "Tailwind"],
    category: "platform",
    live: "https://restaurant-donald.vercel.app/",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop"
  },
  {
    title: "Electronique Boutique",
    description: {
      fr: "Boutique e-commerce moderne dédiée aux produits électroniques avec catalogue, promos, navigation par catégories et expérience d'achat fluide.",
      en: "A modern e-commerce store for electronics with catalog browsing, promotions, category navigation, and a smooth shopping experience.",
    },
    technologies: ["TypeScript", "React", "Tailwind", "E-commerce"],
    category: "ecommerce",
    live: "https://electronique-boutique.vercel.app/",
    image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=300&fit=crop"
  },
  {
    title: "Laravel Bootcamp",
    description: {
      fr: "Projet d’apprentissage Laravel orienté pratique, structuré autour des bases solides du framework et du développement d’applications web.",
      en: "A hands-on Laravel learning project focused on mastering framework fundamentals and web application development.",
    },
    technologies: ["Laravel", "PHP", "Blade", "MySQL"],
    category: "platform",
    live: "https://laravel-bootcamp-three.vercel.app/",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
  },
  {
    title: "Tech Temple site",
    description: {
      fr: "Site vitrine proffessionnelle et full stack pour une startup informatique développé avec Laravel et Blade, avec identité graphique soignée, structure corporate et animations de scroll.",
      en: "A full stack showcase website built with Laravel and Blade, featuring a polished visual identity, corporate structure, and scroll animations.",
    },
    technologies: ["Laravel", "Blade", "PHP", "Tailwind"],
    category: "showcase",
    github: "https://github.com/Donaldmbajouen/raoul_project",
    live: "https://techtemple.site/",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e9482965?w=500&h=300&fit=crop"
  },
  {
    title: "Local Pro Connect",
    description: {
      fr: "Plateforme de mise en relation entre clients et professionnels, avec recherche, profils publics et espace dashboard pour les prestataires.",
      en: "A platform connecting clients with professionals, including search, public profiles, and a dashboard for service providers.",
    },
    technologies: ["TypeScript", "React", "Tailwind"],
    category: "platform",
    github: "https://github.com/Donaldmbajouen/local-pro-connect",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
  },
  {
    title: "EduAI Backend",
    description: {
      fr: "Backend Laravel d’une plateforme d’apprentissage intelligente avec gestion des cours, exercices, suivi de progression et API REST prête pour l’IA.",
      en: "Laravel backend for an intelligent learning platform with course management, exercises, progress tracking, and an AI-ready REST API.",
    },
    technologies: ["Laravel", "PHP", "REST API", "AI"],
    category: "backend",
    github: "https://github.com/Donaldmbajouen/EduAI_back",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=300&fit=crop"
  },
  {
    title: "Yuisy",
    description: {
      fr: "Backend d’une plateforme moderne de billetterie pour créer des événements, gérer plusieurs types de billets, suivre les ventes et contrôler l’accès via QR codes.",
      en: "Backend for a modern ticketing platform to create events, manage multiple ticket types, track sales, and control access with QR codes.",
    },
    technologies: ["Laravel", "PHP 8.2", "MySQL", "QR Code"],
    category: "backend",
    repositoryVisibility: "private",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
  },
  {
    title: "Yuisy Ticket",
    description: {
      fr: "Frontend de plateforme de billetterie en ligne permettant la découverte d’événements, la réservation de billets, le paiement multi-devises et la gestion organisateur en temps réel.",
      en: "Frontend for an online ticketing platform enabling event discovery, ticket booking, multi-currency payments, and real-time organizer management.",
    },
    technologies: ["Vue 3", "Vue I18n", "Axios", "Day.js"],
    category: "platform",
    repositoryVisibility: "private",
    image: "https://images.unsplash.com/photo-1499415479124-0e80d30c0cea?w=500&h=300&fit=crop"
  },
  {
    title: "AfriBusiness",
    description: {
      fr: "Application Flutter de gestion des ventes, du stock et des paiements, conçue pour fonctionner 100% hors ligne avec tableau de bord, statistiques et génération de factures PDF.",
      en: "A Flutter app for sales, inventory, and payment management, built to work 100% offline with a dashboard, analytics, and PDF invoice generation.",
    },
    technologies: ["Flutter", "Riverpod", "SQLite", "PDF"],
    category: "mobile",
    repositoryVisibility: "private",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
  },
  {
    title: "Dolicash",
    description: {
      fr: "Application mobile orientée gestion financière personnelle avec suivi des transactions et organisation budgétaire.",
      en: "A mobile app focused on personal finance management, transaction tracking, and budget organization.",
    },
    technologies: ["Flutter", "Dart", "Finance"],
    category: "mobile",
    github: "https://github.com/Donaldmbajouen/dolicash2",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop"
  },
  {
    title: "Pharmacie App",
    description: {
      fr: "Application mobile de gestion de pharmacie pensée pour le suivi des produits, des ventes et de l’organisation quotidienne.",
      en: "A mobile pharmacy management app designed for product tracking, sales monitoring, and daily operations.",
    },
    technologies: ["Flutter", "Dart", "Gestion"],
    category: "mobile",
    github: "https://github.com/Donaldmbajouen/pharmacie2",
    image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=500&h=300&fit=crop"
  },
  {
    title: "Farmlink",
    description: {
      fr: "Application mobile AgriTech pensée comme un réseau social pour agriculteurs afin de favoriser les échanges et la mise en relation.",
      en: "An AgriTech mobile app designed as a social network for farmers to encourage networking and collaboration.",
    },
    technologies: ["Flutter", "Dart", "AgriTech"],
    category: "mobile",
    github: "https://github.com/Donaldmbajouen/Farmlink",
    image: "https://images.unsplash.com/photo-1574943320219-553eb2f72a32?w=500&h=300&fit=crop"
  }
];

const ProjectsSection = () => {
  const { locale, t, messages } = useLanguage();
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [technologyFilter, setTechnologyFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const technologies = [...new Set(projects.flatMap((project) => project.technologies))].sort((a, b) => a.localeCompare(b));
  const filtered = projects.filter((project) => {
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
    const matchesTechnology = technologyFilter === 'all' || project.technologies.includes(technologyFilter);

    return matchesCategory && matchesTechnology;
  });
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

  const technologyFilterLabel = locale === 'fr' ? 'Technologie' : 'Technology';
  const technologyFilterPlaceholder = locale === 'fr' ? 'Toutes les technologies' : 'All technologies';
  const resetFiltersLabel = locale === 'fr' ? 'Réinitialiser' : 'Reset';
  const noProjectsLabel = locale === 'fr'
    ? 'Aucun projet ne correspond aux filtres sélectionnés.'
    : 'No projects match the selected filters.';

  useEffect(() => {
    setShowAll(false);
  }, [categoryFilter, technologyFilter]);

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

        {/* Filters */}
        <motion.div
          className="mb-10 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  categoryFilter === cat.id
                    ? 'bg-primary text-primary-foreground shadow-primary-glow scale-[1.02]'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 shadow-premium'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="w-full md:max-w-xs">
              <p className="mb-2 text-sm font-medium text-foreground">{technologyFilterLabel}</p>
              <Select value={technologyFilter} onValueChange={setTechnologyFilter}>
                <SelectTrigger className="h-11 rounded-xl border-border bg-card">
                  <SelectValue placeholder={technologyFilterPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{technologyFilterPlaceholder}</SelectItem>
                  {technologies.map((technology) => (
                    <SelectItem key={technology} value={technology}>
                      {technology}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {(categoryFilter !== 'all' || technologyFilter !== 'all') && (
              <Button
                variant="outline"
                onClick={() => {
                  setCategoryFilter('all');
                  setTechnologyFilter('all');
                }}
                className="w-full rounded-xl md:w-auto"
              >
                {resetFiltersLabel}
              </Button>
            )}
          </div>
        </motion.div>

        {/* Grid */}
        {visibleProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <TiltCard className="h-full overflow-hidden transition-all group flex flex-col p-6">
                  {project.image && (
                    <div className="w-[calc(100%+3rem)] h-48 overflow-hidden rounded-t-lg -mx-6 -mt-6 mb-4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4 relative z-10 pointer-events-auto" style={{ transform: "translateZ(50px)" }}>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          {categoryLabels[project.category] ?? project.category}
                        </Badge>
                        {project.repositoryVisibility === 'private' && (
                          <Badge variant="secondary" className="text-xs">
                            {locale === 'fr' ? 'Code privé' : 'Private code'}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2 relative z-20 pointer-events-auto">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all cursor-pointer hover:shadow-lg">
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all cursor-pointer hover:shadow-lg">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 
                      className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors"
                      style={{ transform: "translateZ(40px)" }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      {project.description[locale]}
                    </p>

                    <div className="flex flex-wrap gap-1.5" style={{ transform: "translateZ(20px)" }}>
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-card/50 px-6 py-12 text-center text-muted-foreground">
            {noProjectsLabel}
          </div>
        )}

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
