import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/donald.png';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-3">Bonjour, je suis</p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Donald<br />
            <span className="text-primary">Njemi Mbajouen</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Développeur Full Stack
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Passionné par le développement web et mobile avec Laravel, Vue.js, Nuxt.js et Flutter. 
            Je crée des applications modernes, performantes et élégantes.
          </p>

          <div className="flex items-center gap-4">
            <Button size="lg" onClick={() => scrollTo('contact')}>
              Me contacter
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo('projets')}>
              Voir mes projets
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mt-8">
            <a href="https://github.com/Donaldmbajouen" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/donald-njemi" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl shadow-primary/10">
              <img src={profilePhoto} alt="Donald Njemi" className="w-full h-full object-cover" />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 scale-[1.15] animate-[spin_20s_linear_infinite]" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('apropos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
