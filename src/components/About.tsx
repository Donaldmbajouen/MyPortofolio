import { motion } from 'framer-motion';
import { Target, Zap, Heart, Award, Coffee, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Rapidité",
      description: "Développement efficace pour un time-to-market réduit."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Précision",
      description: "Code propre, maintenable et évolutif."
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Passion",
      description: "Enthousiasme pour l'innovation digitale."
    }
  ];

  const stats = [
    { number: "3+", label: "Années d'exp." },
    { number: "20+", label: "Projets" },
    { number: "15+", label: "Clients" },
    { number: "100%", label: "Satisfaction" }
  ];

  return (
    <section id="apropos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                À propos de moi
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Développeur Full Stack passionné avec plus de 3 ans d'expérience. 
                  Spécialisé en <span className="text-primary font-medium">Laravel, Vue.js, Nuxt.js et Flutter</span>.
                </p>
                <p>
                  Je crée des applications web et mobiles modernes, performantes et évolutives. 
                  Mon objectif : transformer vos idées en produits digitaux concrets.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid gap-3">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-4 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{value.title}</h4>
                    <p className="text-xs text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats & Cards */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center p-4 card-hover">
                    <CardContent className="p-0">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Info cards */}
            <div className="space-y-3">
              <Card className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Actuellement</h4>
                    <p className="text-xs text-muted-foreground">
                      Ouvert aux opportunités freelance et CDI
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Collaboration</h4>
                    <p className="text-xs text-muted-foreground">
                      Travail en équipe agile, communication transparente
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Objectif</h4>
                    <p className="text-xs text-muted-foreground">
                      Contribuer à des solutions qui changent le quotidien
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;