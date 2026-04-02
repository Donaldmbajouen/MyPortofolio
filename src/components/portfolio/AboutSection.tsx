import { motion } from 'framer-motion';
import { Code, Smartphone, Server, Palette, Cpu, Globe } from 'lucide-react';
import TechCube from './TechCube';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t, messages } = useLanguage();

  const services = [
    { icon: Globe, ...messages.about.services.web },
    { icon: Smartphone, ...messages.about.services.mobile },
    { icon: Server, ...messages.about.services.backend },
    { icon: Palette, ...messages.about.services.design },
    { icon: Code, ...messages.about.services.frontend },
    { icon: Cpu, ...messages.about.services.iot },
  ];

  return (
    <section id="apropos" data-scroll-section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary font-medium mb-2">{t('about.eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('about.title')}</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Text - Left */}
            <div className="flex-1 space-y-4">
              <p 
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('about.paragraph1').replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') }}
              />
              <p 
                className="text-muted-foreground leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: t('about.paragraph2').replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') }}
              />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: '2+', label: t('about.stats.years') },
                  { value: '10+', label: t('about.stats.projects') },
                  { value: '5+', label: t('about.stats.technologies') },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border shadow-premium transition-all hover:border-primary/30 hover:scale-[1.05] duration-300">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* TechCube - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center flex-shrink-0"
            >
              <TechCube />
            </motion.div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">{t('about.servicesTitle')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="p-6 rounded-xl border border-border bg-card shadow-premium hover:border-primary/40 hover:shadow-floating transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
