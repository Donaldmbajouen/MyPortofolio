import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Locale, useLanguage } from '@/contexts/LanguageContext';
import { LanguageTheme, useTheme } from '@/contexts/ThemeContext';

const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934c0 .135-.073.26-.189.327l-9.03 5.206a.32.32 0 01-.066.027c-.008.003-.016.007-.025.01-.04.012-.08.012-.12 0-.009-.003-.018-.007-.027-.01a.316.316 0 01-.065-.027L.533 18.755a.375.375 0 01-.19-.326V5.53c0-.035.005-.07.014-.1.003-.012.01-.023.014-.035a.35.35 0 01.028-.053c.007-.012.018-.022.026-.033a.376.376 0 01.036-.035c.01-.008.022-.014.033-.022.013-.008.023-.018.036-.024L4.88 2.706a.375.375 0 01.38 0l4.35 2.506c.013.006.023.016.036.024.011.008.023.014.033.022a.376.376 0 01.036.035c.008.011.019.021.026.033.012.017.02.035.028.053.004.012.011.023.014.035a.364.364 0 01.014.1v9.652l3.761-2.166V7.654c0-.035.005-.07.014-.1.003-.012.01-.023.014-.035a.35.35 0 01.028-.053c.007-.012.018-.022.026-.033a.376.376 0 01.036-.035c.01-.008.022-.014.033-.022.013-.008.023-.018.036-.024l4.35-2.506a.375.375 0 01.38 0l4.35 2.506c.013.006.023.016.036.024.011.008.023.014.033.022z"/>
  </svg>
);

const VueIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78L24 1.61zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43L12 14.08z"/>
  </svg>
);

const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.471H21.7l-6.46-6.468 6.46-6.46h-7.372z"/>
  </svg>
);

const stackLabels: Record<LanguageTheme, string> = {
  laravel: 'Laravel',
  vue: 'Vue',
  flutter: 'Flutter',
};

const stackIcons: Record<LanguageTheme, ReactNode> = {
  laravel: <LaravelIcon />,
  vue: <VueIcon />,
  flutter: <FlutterIcon />,
};

const stackColors: Record<LanguageTheme, string> = {
  laravel: 'text-red-500',
  vue: 'text-emerald-500',
  flutter: 'text-sky-400',
};

const localeLabels: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const headerRef = useRef<HTMLElement>(null);
  const { languageTheme, setLanguageTheme, colorMode, toggleColorMode } = useTheme();
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { id: 'accueil', label: t('nav.home') },
    { id: 'apropos', label: t('nav.about') },
    { id: 'parcours', label: t('nav.journey') },
    { id: 'competences', label: t('nav.skills') },
    { id: 'projets', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(link => link.id);
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);

    if (!section) {
      setMobileOpen(false);
      return;
    }

    const headerHeight = headerRef.current?.offsetHeight ?? 88;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const targetTop = Math.max(sectionTop - headerHeight - 12, 0);

    setMobileOpen(false);

    window.setTimeout(() => {
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }, 120);
  };

  return (
    <motion.header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-card/80 shadow-sm backdrop-blur-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo('accueil')} className="text-xl font-bold text-foreground">
          Donald<span className="text-primary">.dev</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`rounded-lg px-4 py-2 text-sm transition-all duration-300 relative ${
                activeSection === link.id
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="active-nav-bg"
                  className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div className="flex gap-1 rounded-lg bg-muted p-1">
            {(Object.keys(localeLabels) as Locale[]).map((currentLocale) => (
              <button
                key={currentLocale}
                onClick={() => setLocale(currentLocale)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                  locale === currentLocale
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {localeLabels[currentLocale]}
              </button>
            ))}
          </div>

          <div className="flex gap-1 rounded-lg bg-muted p-1">
            {(Object.keys(stackLabels) as LanguageTheme[]).map((stack) => (
              <button
                key={stack}
                onClick={() => setLanguageTheme(stack)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                  languageTheme === stack
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {stackLabels[stack]}
              </button>
            ))}
          </div>

          <button
            onClick={toggleColorMode}
            className="rounded-lg bg-muted p-2 text-foreground transition-colors hover:bg-muted/80"
          >
            {colorMode === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center gap-1 rounded-lg bg-card/80 p-1 backdrop-blur">
            {(Object.keys(stackLabels) as LanguageTheme[]).map((stack) => (
              <button
                key={stack}
                onClick={() => setLanguageTheme(stack)}
                className={`rounded-md p-1.5 transition-all ${
                  languageTheme === stack
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground'
                }`}
                title={stackLabels[stack]}
                aria-label={stackLabels[stack]}
              >
                <span className={languageTheme === stack ? 'text-primary-foreground' : stackColors[stack]}>
                  {stackIcons[stack]}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={toggleColorMode}
            className="rounded-lg bg-card/80 p-2 text-foreground backdrop-blur"
            aria-label={colorMode === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {colorMode === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="p-2 text-foreground"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 top-[72px] z-40 bg-background/45 backdrop-blur-sm md:hidden"
              aria-label="Close mobile navigation"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="relative z-50 overflow-hidden border-b border-border bg-card md:hidden"
            >
              <div className="space-y-2 px-6 py-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`block w-full rounded-lg px-4 py-2.5 text-left text-sm transition-all border-l-2 ${
                      activeSection === link.id
                        ? 'bg-primary/5 border-primary text-primary font-semibold'
                        : 'text-muted-foreground border-transparent hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
