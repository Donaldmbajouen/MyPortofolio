import { Github, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import projectBoltride from '@/assets/project-boltride.jpg';
import projectEcodelivery from '@/assets/project-ecodelivery.jpg';
import projectDashboard from '@/assets/project-dashboard.jpg';

const Projects = () => {
  const projects = [
    {
      title: "BoltRide App",
      description: "Application de réservation de courses inspirée de l'écosystème Bolt. Interface moderne avec géolocalisation en temps réel.",
      image: projectBoltride,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Mapbox"],
      githubUrl: "https://github.com/Donaldmbajouen",
      demoUrl: "https://demo.com",
      date: "2024"
    },
    {
      title: "EcoDelivery Platform",
      description: "Plateforme de livraison éco-responsable avec suivi carbone et options de transport vert.",
      image: projectEcodelivery,
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
      githubUrl: "https://github.com/Donaldmbajouen",
      demoUrl: "https://demo.com",
      date: "2024"
    },
    {
      title: "Smart Dashboard",
      description: "Tableau de bord analytique pour startups avec visualisations de données en temps réel et KPIs business.",
      image: projectDashboard,
      technologies: ["React", "Chart.js", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/Donaldmbajouen",
      demoUrl: "https://demo.com",
      date: "2023"
    },
    {
      title: "GreenMarket API",
      description: "API REST pour marketplace de produits locaux avec système de paiement intégré et gestion des vendeurs.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=300&fit=crop",
      technologies: ["Laravel", "PostgreSQL", "Redis", "Stripe"],
      githubUrl: "https://github.com/Donaldmbajouen",
      demoUrl: "https://demo.com",
      date: "2023"
    },
    {
      title: "DevTools Extension",
      description: "Extension Chrome pour développeurs avec outils de debugging avancés et analyseur de performance.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "Chrome API", "Webpack", "CSS3"],
      githubUrl: "https://github.com/Donaldmbajouen",
      demoUrl: "https://demo.com",
      date: "2023"
    },
    {
      title: "Task Automation Bot",
      description: "Bot Slack/Discord pour automatiser les tâches récurrentes d'équipe et notifications de projet.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      technologies: ["Python", "Discord.py", "PostgreSQL", "Heroku"],
      githubUrl: "https://github.com/Donaldmbajouen",
      demoUrl: "https://demo.com",
      date: "2022"
    }
  ];

  return (
    <section id="projets" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes, alliant innovation technique et design moderne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-hover overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex items-center space-x-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 btn-primary group/btn"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Démo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="btn-outline"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Voir tous mes projets sur GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;