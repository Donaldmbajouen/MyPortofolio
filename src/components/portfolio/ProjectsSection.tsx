import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const projects = [
  {
    title: "Raoul Project",
    description: "Site web professionnel d'entreprise développé avec Laravel et Blade, design moderne et responsive.",
    technologies: ["Laravel", "Blade", "PHP", "Tailwind"],
    category: "web",
    github: "https://github.com/Donaldmbajouen/raoul_project",
    live: "https://raoul-project.vercel.app"
  },
  {
    title: "Fusion Fitness",
    description: "Site web complet pour une salle de sport complexe avec réservation et gestion des abonnements.",
    technologies: ["TypeScript", "React", "Tailwind"],
    category: "web",
    github: "https://github.com/Donaldmbajouen/fusion_fitness",
    live: "https://fusion-fitness.vercel.app"
  },
  {
    title: "Power Fitness",
    description: "Plateforme web pour salle de sport avec programmes d'entraînement et suivi de progression.",
    technologies: ["TypeScript", "React", "Tailwind"],
    category: "web",
    github: "https://github.com/Donaldmbajouen/power_fitness",
    live: "https://power-fitness.vercel.app"
  },
  {
    title: "EduAI",
    description: "Application d'apprentissage adaptatif et personnalisé basée sur l'intelligence artificielle.",
    technologies: ["Laravel", "PHP", "MySQL", "AI"],
    category: "web",
    github: "https://github.com/Donaldmbajouen/EduAI_back"
  },
  {
    title: "Application RDV",
    description: "Application mobile de prise de rendez-vous pour prestataires de services avec notifications.",
    technologies: ["Flutter", "Dart", "Firebase"],
    category: "mobile",
    github: "https://github.com/Donaldmbajouen/application_rdv"
  },
  {
    title: "Dolicash",
    description: "Application mobile de gestion financière avec suivi des transactions et tableau de bord.",
    technologies: ["Flutter", "Dart", "Firebase"],
    category: "mobile",
    github: "https://github.com/Donaldmbajouen/Dolicash"
  },
  {
    title: "Pharmacie App",
    description: "Application mobile de gestion de pharmacie avec inventaire et suivi des ventes.",
    technologies: ["Flutter", "Dart"],
    category: "mobile",
    github: "https://github.com/Donaldmbajouen/pharmacie2"
  },
  {
    title: "Event Gate Hub",
    description: "Plateforme de gestion d'événements avec billetterie et contrôle d'accès.",
    technologies: ["TypeScript", "React", "Tailwind"],
    category: "web",
    github: "https://github.com/Donaldmbajouen/event-gate-hub"
  },
  {
    title: "Traducteur Laravel",
    description: "Outil de traduction automatisé pour applications Laravel multi-langues.",
    technologies: ["Laravel", "PHP"],
    category: "web",
    github: "https://github.com/Donaldmbajouen/Traducteur-Laravel"
  }
];

const categories = [
  { id: 'all', label: 'Tout' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projets" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium mb-2">Mes réalisations</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projets</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        {/* Filter */}
        <motion.div
          className="flex gap-2 mb-10"
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
          {filtered.map((project, index) => (
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
                <Badge variant="outline" className="text-xs capitalize">{project.category}</Badge>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all">
                    <Github className="w-4 h-4" />
                  </a>
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
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
