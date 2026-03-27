import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import donaldPhoto from '@/assets/donald.png';
import cvPdf from '@/assets/NJEMI DONALD.pdf';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" data-scroll-section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          className="flex flex-col items-center text-center md:items-start md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-3">{t('hero.greeting')}</p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Donald<br />
            <span className="text-primary">Njemi Mbajouen</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">{t('hero.role')}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            {t('hero.description')}
          </p>

          <div className="flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => scrollTo('contact')}>
              {t('hero.contact')}
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => scrollTo('projets')}>
              {t('hero.projects')}
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <a href={cvPdf} download="Donald-Njemi-CV.pdf">
                <Download className="w-4 h-4 mr-2" />
                {t('hero.resume')}
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center gap-3 md:justify-start">
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

        {/* Photo - Large portrait, no border */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-80 h-[28rem] md:w-96 md:h-[32rem]">
            <img 
              src={donaldPhoto} 
              alt="Donald Njemi" 
              className="w-full h-full object-cover object-top rounded-3xl"
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/60 to-transparent rounded-b-3xl" />
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
