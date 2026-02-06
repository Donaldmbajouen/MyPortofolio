import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Calendar, Globe, Smartphone, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import projectBoltride from '@/assets/project-boltride.jpg';
import projectEcodelivery from '@/assets/project-ecodelivery.jpg';
import projectDashboard from '@/assets/project-dashboard.jpg';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'backend';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  date: string;
  category: ProjectCategory;
}

const projects: Project[] = [
  {
    title: "BoltRide App",
    description: "Application mobile de réservation de courses inspirée de Bolt. Interface Flutter avec géolocalisation temps réel.",
    image: projectBoltride,
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps"],
    githubUrl: "https://github.com/Donaldmbajouen",
    demoUrl: "https://demo.com",
    date: "2024",
    category: "mobile"
  },
  {
    title: "EcoDelivery Platform",
    description: "Plateforme web de livraison éco-responsable avec suivi carbone et tableau de bord admin.",
    image: projectEcodelivery,
    technologies: ["Vue.js", "Nuxt.js", "Laravel", "MySQL"],
    githubUrl: "https://github.com/Donaldmbajouen",
    demoUrl: "https://demo.com",
    date: "2024",
    category: "web"
  },
  {
    title: "Smart Dashboard",
    description: "Tableau de bord analytique SaaS avec visualisations de données en temps réel et KPIs.",
    image: projectDashboard,
    technologies: ["Vue.js", "Chart.js", "Laravel", "PostgreSQL"],
    githubUrl: "https://github.com/Donaldmbajouen",
    demoUrl: "https://demo.com",
    date: "2024",
    category: "web"
  },
  {
    title: "GreenMarket API",
    description: "API REST pour marketplace de produits locaux avec système de paiement Stripe intégré.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=300&fit=crop",
    technologies: ["Laravel", "PostgreSQL", "Redis", "Stripe"],
    githubUrl: "https://github.com/Donaldmbajouen",
    demoUrl: "https://demo.com",
    date: "2023",
    category: "backend"
  },
  {
    title: "HealthTracker Mobile",
    description: "Application mobile de suivi santé avec rappels médicaments et graphiques de progression.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
    technologies: ["Flutter", "Dart", "SQLite", "Charts"],
    githubUrl: "https://github.com/Donaldmbajouen",
    demoUrl: "https://demo.com",
    date: "2023",
    category: "mobile"
  },
  {
    title: "E-Commerce Backend",
    description: "Backend complet pour e-commerce avec gestion stocks, commandes et notifications.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["Laravel", "MySQL", "Redis", "AWS S3"],
    githubUrl: "https://github.com/Donaldmbajouen",
    demoUrl: "https://demo.com",
    date: "2023",
    category: "backend"
  }
];

const categories: { id: ProjectCategory; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'Tous', icon: <Globe className="w-4 h-4" /> },
  { id: 'web', label: 'Web', icon: <Globe className="w-4 h-4" /> },
  { id: 'mobile', label: 'Mobile', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projets" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes réalisations en développement web, mobile et backend.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
              className={activeCategory === cat.id ? 'btn-primary' : 'btn-outline'}
            >
              {cat.icon}
              <span className="ml-2">{cat.label}</span>
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="card-hover overflow-hidden group h-full bg-card">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary/90 text-primary-foreground text-xs">
                        {categories.find(c => c.id === project.category)?.label}
                      </Badge>
                    </div>

                    {/* Date */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded">
                      <Calendar className="w-3 h-3" />
                      <span>{project.date}</span>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="secondary" className="flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1 btn-primary" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Démo
                        </a>
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="text-xs bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub Link */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="btn-outline"
            asChild
          >
            <a href="https://github.com/Donaldmbajouen" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Voir tous mes projets sur GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;