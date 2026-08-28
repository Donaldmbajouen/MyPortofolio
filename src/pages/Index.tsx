import { useRef } from 'react';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import TrustedBySection from '@/components/portfolio/TrustedBySection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import FloatingBackground from '@/components/portfolio/FloatingBackground';
import FloatingWhatsApp from '@/components/portfolio/FloatingWhatsApp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(pageRef);

  return (
    <div ref={pageRef} className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <FloatingBackground />
      <div className="relative z-10">
        <Navbar />
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <TrustedBySection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
