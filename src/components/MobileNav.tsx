import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  FolderKanban, 
  Wrench, 
  User, 
  Mail,
  Sun,
  Moon,
  Code
} from 'lucide-react';
import { useTheme, LanguageTheme } from '@/contexts/ThemeContext';

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <circle cx="12" cy="12" r="2.5"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
  </svg>
);

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

const languageIcons: Record<LanguageTheme, { icon: React.ReactNode; label: string }> = {
  react: { icon: <ReactIcon />, label: 'React' },
  laravel: { icon: <LaravelIcon />, label: 'Laravel' },
  vue: { icon: <VueIcon />, label: 'Vue.js' },
  flutter: { icon: <FlutterIcon />, label: 'Flutter' }
};

const navItems = [
  { id: 'accueil', icon: Home, label: 'Accueil' },
  { id: 'projets', icon: FolderKanban, label: 'Projets' },
  { id: 'competences', icon: Wrench, label: 'Compétences' },
  { id: 'apropos', icon: User, label: 'À propos' },
  { id: 'contact', icon: Mail, label: 'Contact' }
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { languageTheme, setLanguageTheme, colorMode, toggleColorMode } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-background/95 backdrop-blur-md border-b border-border z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground">DONALD</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Theme toggles */}
          <button
            onClick={toggleColorMode}
            className="p-2 rounded-lg bg-secondary text-foreground"
          >
            {colorMode === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-secondary text-foreground"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 bottom-0 bg-background z-40 overflow-y-auto"
          >
            <div className="p-4">
              {/* Navigation */}
              <nav className="mb-6">
                <p className="text-xs uppercase text-muted-foreground font-semibold mb-3">Navigation</p>
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Language Theme Selector */}
              <div>
                <p className="text-xs uppercase text-muted-foreground font-semibold mb-3">Thème Langage</p>
                <div className="grid grid-cols-4 gap-2">
                  {(Object.keys(languageIcons) as LanguageTheme[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguageTheme(lang)}
                      className={`p-3 rounded-lg flex flex-col items-center gap-1 transition-all ${
                        languageTheme === lang
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      {languageIcons[lang].icon}
                      <span className="text-xs">{languageIcons[lang].label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
