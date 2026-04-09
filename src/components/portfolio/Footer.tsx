import { Github, Linkedin, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import seoConfig from '@/config/seo';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          © {new Date().getFullYear()} Donald.dev — {t('footer.text')} <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> 🥲
        </p>
        <div className="flex gap-3">
          <a href={seoConfig.social.github} target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href={seoConfig.social.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
