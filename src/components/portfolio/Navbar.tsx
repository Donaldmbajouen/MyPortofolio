import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme, LanguageTheme } from '@/contexts/ThemeContext';

const navLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'apropos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];

const langLabels: Record<LanguageTheme, string> = {
  react: 'React',
  laravel: 'Laravel',
  vue: 'Vue',
  flutter: 'Flutter',
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { languageTheme, setLanguageTheme, colorMode, toggleColorMode } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-card/80 backdrop-blur-lg border-b border-border shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('accueil')} className="text-xl font-bold text-foreground">
          Donald<span className="text-primary">.dev</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Theme Controls */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language themes */}
          <div className="flex gap-1 p-1 bg-muted rounded-lg">
            {(Object.keys(langLabels) as LanguageTheme[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguageTheme(lang)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                  languageTheme === lang
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {langLabels[lang]}
              </button>
            ))}
          </div>
          {/* Dark/Light */}
          <button
            onClick={toggleColorMode}
            className="p-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors"
          >
            {colorMode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-foreground">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-all"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-1 pt-2">
                {(Object.keys(langLabels) as LanguageTheme[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguageTheme(lang)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      languageTheme === lang
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {langLabels[lang]}
                  </button>
                ))}
                <button onClick={toggleColorMode} className="p-1.5 rounded-md bg-muted text-foreground ml-auto">
                  {colorMode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
