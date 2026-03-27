import { motion } from 'framer-motion';
import { Code, Smartphone, Server, Palette, Cpu, Globe } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Développement Web",
    description: "Création d'applications web modernes et performantes avec Laravel, Vue.js, Nuxt.js et React."
  },
  {
    icon: Smartphone,
    title: "Développement Mobile",
    description: "Applications mobiles cross-platform avec Flutter (Dart), iOS et Android depuis un seul codebase."
  },
  {
    icon: Server,
    title: "Backend & API",
    description: "Conception d'APIs RESTful robustes avec Laravel, PHP, MySQL et PostgreSQL."
  },
  {
    icon: Palette,
    title: "Création & Design",
    description: "Prototypage Figma, conception collaborative UX/UI, retouche Photoshop et mise en valeur visuelle."
  },
  {
    icon: Code,
    title: "Intégration Frontend",
    description: "Intégration pixel-perfect avec HTML, CSS, JavaScript, Tailwind CSS et frameworks modernes."
  },
  {
    icon: Cpu,
    title: "IoT & Systèmes",
    description: "Développement de solutions embarquées, applications IoT et projets AgriTech innovants."
  }
];

const AboutSection = () => {
  return (
    <div>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          À Propos De Moi
        </h1>
        <div className="w-16 h-1 bg-primary rounded-full mb-6" />
        
        <p className="text-muted-foreground leading-relaxed mb-3">
          Jeune professionnel passionné par le développement web et mobile, doté d'une expérience concrète 
          dans la création d'applications complètes avec Laravel, Vue.js, Nuxt.js et Flutter.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Proactif, adaptable, et engagé dans une démarche d'apprentissage continu. Ma détermination 
          et ma soif d'apprendre font de moi un développeur prometteur dans le domaine du numérique.
        </p>
      </motion.div>

      {/* Ce Que Je Fais */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-foreground mb-6">Ce Que Je Fais</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.08 }}
              className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all flex-shrink-0">
                  <service.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
