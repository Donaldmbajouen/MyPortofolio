import { useState } from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import projectBoltride from '@/assets/project-boltride.jpg';
import projectEcodelivery from '@/assets/project-ecodelivery.jpg';
import projectDashboard from '@/assets/project-dashboard.jpg';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tous', icon: '🚀' },
    { id: 'web', name: 'Web', icon: '🌐' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
    { id: 'fullstack', name: 'Fullstack', icon: '⚡' }
  ];

  const projects = [
    {
      title: "EcoDelivery Platform",
      description: "Plateforme de livraison éco-responsable avec suivi carbone et options de transport vert. Interface admin complète et API robuste.",
      image: projectEcodelivery,
      technologies: ["Vue.js", "Nuxt.js", "Laravel", "MySQL", "Docker"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      date: "2024",
      category: "fullstack"
    },
    {
      title: "Smart Dashboard Analytics",
      description: "Tableau de bord analytique SPA avec visualisations de données en temps réel et KPIs business interactifs.",
      image: projectDashboard,
      technologies: ["Vue.js", "Chart.js", "Laravel API", "Redis"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      date: "2024",
      category: "web"
    },
    {
      title: "BoltRide Mobile App",
      description: "Application mobile de réservation de courses avec géolocalisation en temps réel et paiements intégrés.",
      image: projectBoltride,
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      date: "2024",
      category: "mobile"
    },
    {
      title: "GreenMarket API",
      description: "API REST pour marketplace de produits locaux avec système de paiement intégré et gestion avancée des vendeurs.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=300&fit=crop",
      technologies: ["Laravel", "PostgreSQL", "Redis", "Stripe API"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      date: "2023",
      category: "web"
    },
    {
      title: "TaskFlow Mobile",
      description: "Application mobile de gestion de tâches avec synchronisation temps réel et notifications push avancées.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Firebase", "Cloud Functions", "FCM"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      date: "2023",
      category: "mobile"
    },
    {
      title: "E-Learning Platform",
      description: "Plateforme d'apprentissage en ligne complète avec streaming vidéo, quiz interactifs et suivi de progression.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      technologies: ["Nuxt.js", "Laravel", "Vue.js", "MySQL", "AWS"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      date: "2023",
      category: "fullstack"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projets" className="py-20 bg-muted/30 relative">
      <div className="crypto-grid absolute inset-0 opacity-20"></div>
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-bounce-in">
            <span className="text-neon">Mes Projets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Découvrez mes réalisations en <span className="text-gradient font-semibold">développement web et mobile</span>, alliant innovation technique et design moderne.
          </p>
        </div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                hover-glow transition-all duration-500 
                ${selectedCategory === category.id 
                  ? 'btn-neon shadow-neon' 
                  : 'hover:border-primary hover:text-primary'
                }
              `}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={`${project.title}-${selectedCategory}`}
              className="card-hover card-3d overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute top-4 right-4 flex items-center space-x-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 animate-slide-up">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
                {/* Badge catégorie */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Badge className="bg-primary/90 text-primary-foreground animate-pulse-glow">
                    {categories.find(cat => cat.id === project.category)?.icon} {categories.find(cat => cat.id === project.category)?.name}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-semibold group-hover:text-gradient transition-all duration-500">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="tech-icon bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:shadow-glow"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn hover-lift"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 btn-primary group/btn"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
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
            className="btn-neon hover:shadow-neon"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Voir tous mes projets sur GitHub
            </a>
          </Button>
        </div>

        {/* Particles effect */}
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;