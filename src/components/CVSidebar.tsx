import { motion } from 'framer-motion';
import { 
  Home, 
  FolderKanban, 
  Wrench, 
  User, 
  Mail, 
  Sun, 
  Moon,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Download
} from 'lucide-react';
import { useTheme, LanguageTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import heroPortrait from '@/assets/hero-portrait.jpg';

// Custom SVG icons for languages
const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934c0 .135-.073.26-.189.327l-9.03 5.206a.32.32 0 01-.066.027c-.008.003-.016.007-.025.01-.04.012-.08.012-.12 0-.009-.003-.018-.007-.027-.01a.316.316 0 01-.065-.027L.533 18.755a.375.375 0 01-.19-.326V5.53c0-.035.005-.07.014-.1.003-.012.01-.023.014-.035a.35.35 0 01.028-.053c.007-.012.018-.022.026-.033a.376.376 0 01.036-.035c.01-.008.022-.014.033-.022.013-.008.023-.018.036-.024L4.88 2.706a.375.375 0 01.38 0l4.35 2.506c.013.006.023.016.036.024.011.008.023.014.033.022a.376.376 0 01.036.035c.008.011.019.021.026.033.012.017.02.035.028.053.004.012.011.023.014.035a.364.364 0 01.014.1v9.652l3.761-2.166V7.654c0-.035.005-.07.014-.1.003-.012.01-.023.014-.035a.35.35 0 01.028-.053c.007-.012.018-.022.026-.033a.376.376 0 01.036-.035c.01-.008.022-.014.033-.022.013-.008.023-.018.036-.024l4.35-2.506a.375.375 0 01.38 0l4.35 2.506c.013.006.023.016.036.024.011.008.023.014.033.022z"/>
  </svg>
);

const VueIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78L24 1.61zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43L12 14.08z"/>
  </svg>
);

const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.471H21.7l-6.46-6.468 6.46-6.46h-7.372z"/>
  </svg>
);

const languageIcons: Record<LanguageTheme, { icon: React.ReactNode; label: string; color: string }> = {
  laravel: { icon: <LaravelIcon />, label: 'Laravel', color: 'text-red-500' },
  vue: { icon: <VueIcon />, label: 'Vue.js', color: 'text-emerald-500' },
  flutter: { icon: <FlutterIcon />, label: 'Flutter', color: 'text-sky-400' }
};

const navItems = [
  { id: 'accueil', icon: Home, label: 'Accueil' },
  { id: 'projets', icon: FolderKanban, label: 'Projets' },
  { id: 'competences', icon: Wrench, label: 'Compétences' },
  { id: 'apropos', icon: User, label: 'À propos' },
  { id: 'contact', icon: Mail, label: 'Contact' }
];

const CVSidebar = () => {
  const { languageTheme, setLanguageTheme, colorMode, toggleColorMode } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-sidebar-background border-r border-sidebar-border flex flex-col z-50 overflow-y-auto">
      {/* Profile Section */}
      <div className="p-6 text-center border-b border-sidebar-border">
        <motion.div 
          className="relative mx-auto w-28 h-28 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        >
          <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-primary/30 glow">
            <img 
              src={heroPortrait} 
              alt="Donald Mbajouen" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse" />
          </div>
        </motion.div>

        <motion.h1 
          className="text-xl font-bold text-foreground mb-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Donald Mbajouen
        </motion.h1>
        <motion.p 
          className="text-sm text-primary font-medium mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Développeur Full Stack
        </motion.p>

        {/* Contact Info */}
        <motion.div 
          className="space-y-2 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-3 h-3" />
            <span>Cameroun</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-3 h-3" />
            <span>contact@donald.dev</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-3 h-3" />
            <span>+237 6XX XXX XXX</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-3 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="https://github.com/Donaldmbajouen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <p className="text-xs uppercase text-muted-foreground font-semibold mb-3 px-2">Navigation</p>
        <ul className="space-y-1">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-primary/10 hover:text-primary transition-all group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Theme Selectors */}
      <div className="p-4 border-t border-sidebar-border">
        {/* Language Theme Icons */}
        <p className="text-xs uppercase text-muted-foreground font-semibold mb-3 px-2">Thème</p>
        <div className="flex justify-center gap-2 mb-4">
          {(Object.keys(languageIcons) as LanguageTheme[]).map((lang) => (
            <motion.button
              key={lang}
              onClick={() => setLanguageTheme(lang)}
              className={`p-2.5 rounded-lg transition-all ${
                languageTheme === lang 
                  ? 'bg-primary text-primary-foreground glow' 
                  : 'bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={languageIcons[lang].label}
            >
              {languageIcons[lang].icon}
            </motion.button>
          ))}
        </div>

        {/* Dark/Light Toggle */}
        <motion.button
          onClick={toggleColorMode}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-all"
          whileTap={{ scale: 0.98 }}
        >
          {colorMode === 'dark' ? (
            <>
              <Sun className="w-4 h-4" />
              <span className="text-sm">Mode Clair</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4" />
              <span className="text-sm">Mode Sombre</span>
            </>
          )}
        </motion.button>

        {/* Download CV Button */}
        <Button className="w-full mt-4 btn-primary" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Télécharger CV
        </Button>
      </div>
    </aside>
  );
};

export default CVSidebar;
