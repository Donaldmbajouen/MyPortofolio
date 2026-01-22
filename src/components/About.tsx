import { Target, Zap, Heart, Award, Coffee, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapidité",
      description: "Solutions développées avec efficacité et optimisation pour un time-to-market réduit."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Précision",
      description: "Code propre, maintenable et respectueux des best practices pour des projets durables."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Enthousiasme contagieux pour les nouvelles technologies et l'innovation digitale."
    }
  ];

  const stats = [
    { number: "1+", label: "Années d'expérience" },
    { number: "15+", label: "Projets réalisés" },
    { number: "05+", label: "Technologies maîtrisées" },
    { number: "100%", label: "Clients satisfaits" }
  ];

  return (
    <section id="apropos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                À propos de moi
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Développeur web passionné avec plus de 01 ans d'expérience dans la création 
                  d'applications modernes et performantes. Mon approche se concentre sur 
                  <span className="text-primary font-medium"> l'efficacité, la rapidité et l'innovation</span>.
                </p>
                <p>
                  Je développe des applications qui transforment les idées en produits digitaux concrets. 
                  Mon objectif : créer des expériences utilisateur exceptionnelles tout en maintenant 
                  une architecture technique robuste.
                </p>
                <p>
                  Quand je ne code pas, vous me trouverez en train d'explorer les dernières tendances tech, 
                  de contribuer à des projets open-source, ou de partager mes connaissances avec la communauté.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Mes valeurs</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 rounded-lg bg-background hover:bg-primary/5 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & Visual */}
          <div className="space-y-8 animate-slide-up">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="text-center p-6 card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional info cards */}
            <div className="space-y-4">
              <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Actuellement</h4>
                    <p className="text-sm text-muted-foreground">
                      Ouvert aux opportunités chez Bolt ou startups innovantes
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-blue-500/5 to-blue-500/10 border-blue-500/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Travail en équipe agile, communication transparente
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-purple-500/5 to-purple-500/10 border-purple-500/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Objectif</h4>
                    <p className="text-sm text-muted-foreground">
                      Contribuer à des solutions qui changent le quotidien
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;