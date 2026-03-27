import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CVSidebar from './CVSidebar';
import ThemeControls from './ThemeControls';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import { User, Briefcase, FolderKanban, Mail } from 'lucide-react';

type Section = 'apropos' | 'cv' | 'portfolio' | 'contact';

const navItems: { id: Section; icon: React.ElementType; label: string }[] = [
  { id: 'apropos', icon: User, label: 'À propos' },
  { id: 'cv', icon: Briefcase, label: 'CV' },
  { id: 'portfolio', icon: FolderKanban, label: 'Portfolio' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const CVPage = () => {
  const [activeSection, setActiveSection] = useState<Section>('apropos');

  const renderSection = () => {
    switch (activeSection) {
      case 'apropos':
        return <AboutSection />;
      case 'cv':
        return <ExperienceSection />;
      case 'portfolio':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen h-screen bg-background flex overflow-hidden">
      {/* Theme Controls - Floating */}
      <ThemeControls />

      {/* Left Sidebar - Fixed */}
      <CVSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-72 flex flex-col h-screen overflow-hidden">
        {/* Top Navigation Bar */}
        <nav className="flex-shrink-0 px-8 py-4 border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 md:p-12 max-w-5xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
