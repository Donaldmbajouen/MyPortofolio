import { motion } from 'framer-motion';
import CVHeader from './CVHeader';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';

const CVMainContent = () => {
  return (
    <main className="flex-1 bg-card">
      {/* Header with name and title */}
      <CVHeader />

      {/* Content sections */}
      <div className="p-6 md:p-8 space-y-8">
        {/* Experience & Education Tabs */}
        <ExperienceSection />

        {/* Projects */}
        <ProjectsSection />
      </div>
    </main>
  );
};

export default CVMainContent;
