import CVLayout from '@/layouts/CVLayout';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <CVLayout>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </CVLayout>
  );
};

export default Index;
