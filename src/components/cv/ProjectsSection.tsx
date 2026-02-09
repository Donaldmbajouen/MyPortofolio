import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "EcoDelivery Platform",
    description: "Plateforme web de livraison éco-responsable avec suivi carbone et tableau de bord admin.",
    technologies: ["Vue.js", "Nuxt.js", "Laravel", "MySQL"],
    category: "Web"
  },
  {
    title: "BoltRide App",
    description: "Application mobile de réservation de courses avec géolocalisation temps réel.",
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps"],
    category: "Mobile"
  },
  {
    title: "Smart Dashboard",
    description: "Tableau de bord analytique SaaS avec visualisations de données en temps réel.",
    technologies: ["Vue.js", "Chart.js", "Laravel", "PostgreSQL"],
    category: "Web"
  },
  {
    title: "GreenMarket API",
    description: "API REST pour marketplace de produits locaux avec système de paiement Stripe.",
    technologies: ["Laravel", "PostgreSQL", "Redis", "Stripe"],
    category: "Backend"
  }
];

const ProjectsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h3 className="text-lg font-bold text-foreground mb-4 tracking-wide">
        PROJETS RÉALISÉS
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-lg border border-border bg-muted/30 hover:border-primary/50 transition-colors group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <Badge variant="outline" className="text-[10px] mt-1">
                  {project.category}
                </Badge>
              </div>
              <div className="flex gap-1.5">
                <a href="#" className="p-1.5 rounded-md bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="p-1.5 rounded-md bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech, i) => (
                <Badge 
                  key={i} 
                  variant="secondary" 
                  className="text-[10px] px-1.5 py-0"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View more link */}
      <motion.div 
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a 
          href="https://github.com/Donaldmbajouen" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <Github className="w-4 h-4" />
          Voir tous mes projets sur GitHub
        </a>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
