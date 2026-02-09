import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const experiences = [
  {
    title: "Développeur Fullstack Laravel/VueJS",
    company: "EVERBLUE Solution",
    period: "JUILLET 2025 - ACTUEL",
    tasks: [
      "Developpement des solutions E-Commerces",
      "Assistant a l'Analyse et Developpement d'un projet web pour une Agence de voyage",
      "Assistant a la Réalisation d'un réseau Social bientôt en production"
    ]
  },
  {
    title: "Stagiaire en Developpement web",
    company: "MHTECH",
    period: "JUIN 2024 - OCTOBRE 2024",
    tasks: [
      "Participation aux tests des Logiciels de l'Entreprise",
      "Participation au Developpement d'une Solution pour une Application web de Tourisme",
      "Réalisation des Templates pour un solution de Gestion scolaire"
    ]
  }
];

const formations = [
  {
    title: "Licence Proffessionnelle en Genie Logiciel",
    school: "IAI-CAMEROUN",
    period: "2024-2025"
  },
  {
    title: "Diplome Ingenieurs de Travaux en Genie Logiciel",
    school: "IAI-CAMEROUN",
    period: "2024-2025"
  },
  {
    title: "Diplome de Technicien Superieur (DTS)",
    school: "IAI-CAMEROUN",
    period: "2023-2024"
  },
  {
    title: "Baccalaureat C",
    school: "Lycée Bilingue de Penka-Michel",
    period: "2021-2022"
  }
];

const ExperienceSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Tabs defaultValue="experiences" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="experiences" className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Expériences
          </TabsTrigger>
          <TabsTrigger value="formations" className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Formations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="experiences" className="space-y-0">
          <h3 className="text-lg font-bold text-foreground mb-4 tracking-wide">
            EXPÉRIENCES PROFESSIONNELLES
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative pl-6 border-l-2 border-primary"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                
                <div>
                  <h4 className="font-semibold text-foreground text-sm">
                    {exp.title} - <span className="text-primary">{exp.company}</span>
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                  <ul className="space-y-1">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="formations" className="space-y-0">
          <h3 className="text-lg font-bold text-foreground mb-4 tracking-wide">
            FORMATIONS
          </h3>
          <div className="space-y-5">
            {formations.map((formation, index) => (
              <motion.div 
                key={index}
                className="relative pl-6 border-l-2 border-primary"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                
                <div>
                  <h4 className="font-semibold text-foreground text-sm">
                    {formation.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{formation.period}</p>
                  <p className="text-sm text-primary">{formation.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </motion.section>
  );
};

export default ExperienceSection;
