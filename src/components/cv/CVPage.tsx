import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CVSidebar from './CVSidebar';
import ThemeControls from './ThemeControls';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import { Home, Briefcase, GraduationCap, FolderKanban, Mail } from 'lucide-react';

type Section = 'accueil' | 'experiences' | 'formations' | 'projets' | 'contact';

const navItems: { id: Section; icon: React.ElementType; label: string }[] = [
  { id: 'accueil', icon: Home, label: 'Accueil' },
  { id: 'experiences', icon: Briefcase, label: 'Expériences' },
  { id: 'formations', icon: GraduationCap, label: 'Formations' },
  { id: 'projets', icon: FolderKanban, label: 'Projets' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const CVPage = () => {
  const [activeSection, setActiveSection] = useState<Section>('accueil');

  const renderSection = () => {
    switch (activeSection) {
      case 'accueil':
        return <AccueilSection />;
      case 'experiences':
        return <ExperienceSection />;
      case 'formations':
        return <EducationSection />;
      case 'projets':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AccueilSection />;
    }
  };

  return (
    <div className="min-h-screen h-screen bg-muted/30 flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden">
      {/* Theme Controls - Floating */}
      <ThemeControls />

      {/* Main Container - Floating Card */}
      <motion.div 
        className="w-full max-w-6xl h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] bg-card rounded-3xl shadow-2xl overflow-hidden border border-border flex"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Sidebar */}
        <CVSidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navigation Tabs */}
          <nav className="flex-shrink-0 px-6 pt-6 pb-4 border-b border-border bg-card">
            <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Content Area - No scroll on desktop */}
          <div className="flex-1 p-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Accueil Section Component
const AccueilSection = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Bonjour, je suis{' '}
          <span className="text-primary">Donald</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
          Développeur Web Full Stack
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Je suis un jeune passionné de programmation et d'intelligence artificielle, 
          constamment curieux des dernières innovations technologiques. Ma détermination 
          et ma soif d'apprendre font de moi un futur innovateur prometteur dans le 
          domaine du numérique.
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center p-4 bg-muted/50 rounded-xl">
            <div className="text-3xl font-bold text-primary mb-1">2+</div>
            <div className="text-sm text-muted-foreground">Années d'exp.</div>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-xl">
            <div className="text-3xl font-bold text-primary mb-1">10+</div>
            <div className="text-sm text-muted-foreground">Projets</div>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-xl">
            <div className="text-3xl font-bold text-primary mb-1">5+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CVPage;
