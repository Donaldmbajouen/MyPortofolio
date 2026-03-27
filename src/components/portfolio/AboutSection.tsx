import { motion } from 'framer-motion';
import { Code, Smartphone, Server, Palette, Cpu, Globe } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const services = [
  { icon: Globe, title: "Développement Web", description: "Applications web modernes avec Laravel, Vue.js, Nuxt.js et React." },
  { icon: Smartphone, title: "Développement Mobile", description: "Apps cross-platform avec Flutter et Dart pour iOS et Android." },
  { icon: Server, title: "Backend & API", description: "APIs RESTful robustes avec Laravel, PHP, MySQL et PostgreSQL." },
  { icon: Palette, title: "Création & Design", description: "Prototypage Figma, conception UX/UI et retouche Photoshop." },
  { icon: Code, title: "Intégration Frontend", description: "Intégration pixel-perfect avec Tailwind CSS et frameworks modernes." },
  { icon: Cpu, title: "IoT & Systèmes", description: "Solutions embarquées, applications IoT et projets AgriTech." }
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary font-medium mb-2">Qui suis-je</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">À Propos De Moi</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Text - Left */}
            <div className="flex-1 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Jeune professionnel passionné par le développement web et mobile, doté d'une expérience concrète 
                dans la création d'applications complètes avec Laravel, Vue.js, Nuxt.js et Flutter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Proactif, adaptable, et engagé dans une démarche d'apprentissage continu. Ma détermination 
                et ma soif d'apprendre font de moi un développeur prometteur dans le domaine du numérique.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: '2+', label: "Années d'exp." },
                  { value: '10+', label: 'Projets' },
                  { value: '5+', label: 'Technologies' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-72 h-80 md:w-80 md:h-96 flex-shrink-0"
            >
              <img 
                src={heroImage} 
                alt="Donald Njemi" 
                className="w-full h-full object-cover object-top rounded-3xl"
              />
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
          <h3 className="text-2xl font-bold text-foreground mb-8">Ce Que Je Fais</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all group"
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
