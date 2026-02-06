import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const Hero = () => {
  const { languageTheme } = useTheme();

  const scrollToProjects = () => {
    const element = document.getElementById('projets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getThemeLabel = () => {
    const labels = {
      react: 'React & Next.js',
      laravel: 'Laravel & PHP',
      vue: 'Vue.js & Nuxt',
      flutter: 'Flutter & Dart'
    };
    return labels[languageTheme];
  };

  return (
    <section 
      id="accueil" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Spécialiste {getThemeLabel()}</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Salut, je suis{' '}
            <span className="text-gradient">Donald Mbajouen</span>
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-3xl text-muted-foreground font-light mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Développeur Full Stack
          </motion.h2>

          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Passionné par les solutions tech rapides et efficaces. 
            Je crée des applications web et mobiles modernes qui transforment vos idées en réalité digitale.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-6 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-xs text-muted-foreground">Années exp.</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-xs text-muted-foreground">Projets</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card border border-border">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-xs text-muted-foreground">Clients</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              onClick={scrollToContact}
              className="btn-primary group"
              size="lg"
            >
              Me Contacter
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg"
              className="btn-outline group"
            >
              <Code2 className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              Voir mes projets
            </Button>
          </motion.div>

          {/* Tech stack hint */}
          <motion.div 
            className="flex items-center gap-2 mt-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span>Laravel • Vue.js • Nuxt.js • Flutter</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;