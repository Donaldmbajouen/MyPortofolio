import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const projects = [
  {
    title: "EcoDelivery Platform",
    description: "Plateforme web de livraison éco-responsable avec suivi carbone et tableau de bord admin complet.",
    technologies: ["Vue.js", "Nuxt.js", "Laravel", "MySQL"],
    category: "web"
  },
  {
    title: "BoltRide App",
    description: "Application mobile de réservation de courses avec géolocalisation temps réel et notifications push.",
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps"],
    category: "mobile"
  },
  {
    title: "Smart Dashboard",
    description: "Tableau de bord analytique SaaS avec visualisations de données en temps réel et exports.",
    technologies: ["Vue.js", "Chart.js", "Laravel", "PostgreSQL"],
    category: "web"
  },
  {
    title: "GreenMarket API",
    description: "API REST pour marketplace de produits locaux avec système de paiement intégré.",
    technologies: ["Laravel", "PostgreSQL", "Redis", "Stripe"],
    category: "web"
  },
  {
    title: "AgriTech IoT",
    description: "Application IoT pour le monitoring agricole avec capteurs et dashboard temps réel.",
    technologies: ["Flutter", "Arduino", "Firebase", "MQTT"],
    category: "mobile"
  },
  {
    title: "School Manager",
    description: "Solution de gestion scolaire complète avec gestion des notes, absences et emplois du temps.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
    category: "web"
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
                  <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </a>
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
