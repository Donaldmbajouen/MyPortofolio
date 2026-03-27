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
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Portfolio</h1>
        <div className="w-16 h-1 bg-primary rounded-full mb-6" />
      </motion.div>

      {/* Filter Tabs */}
      <motion.div 
        className="flex gap-2 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === cat.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((project, index) => (
          <motion.div
            key={project.title}
            className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <Badge variant="outline" className="text-[10px] mt-1 capitalize">
                  {project.category}
                </Badge>
              </div>
              <div className="flex gap-1.5">
                <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
