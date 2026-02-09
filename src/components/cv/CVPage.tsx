import { motion } from 'framer-motion';
import CVSidebar from './CVSidebar';
import CVMainContent from './CVMainContent';
import ThemeControls from './ThemeControls';

const CVPage = () => {
  return (
    <div className="min-h-screen bg-muted/30 py-8 px-4 md:py-12 md:px-8 lg:py-16 lg:px-12">
      {/* Theme Controls - Floating */}
      <ThemeControls />

      {/* CV Container - Centered with visible borders like PDF */}
      <motion.div 
        className="max-w-5xl mx-auto bg-card rounded-3xl shadow-2xl overflow-hidden border border-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Sidebar */}
          <CVSidebar />
          
          {/* Main Content */}
          <CVMainContent />
        </div>
      </motion.div>
    </div>
  );
};

export default CVPage;
