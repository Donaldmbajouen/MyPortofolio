import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const experiences = [
  {
    title: "Développeur Fullstack Laravel/VueJS",
    company: "EVERBLUE Solution",
    period: "JUILLET 2025 - ACTUEL",
    tasks: [
      "Développement des solutions E-Commerces",
      "Assistant à l'Analyse et Développement d'un projet web pour une Agence de voyage",
      "Assistant à la Réalisation d'un réseau Social bientôt en production"
    ]
  },
  {
    title: "Stagiaire en Développement web",
    company: "MHTECH",
    period: "JUIN 2024 - OCTOBRE 2024",
    tasks: [
      "Participation aux tests des Logiciels de l'Entreprise",
      "Participation au Développement d'une Solution pour une Application web de Tourisme",
      "Réalisation des Templates pour une solution de Gestion scolaire"
    ]
  }
];

const formations = [
  {
    title: "Licence Professionnelle en Génie Logiciel",
    school: "IAI-CAMEROUN",
    period: "2024-2025"
  },
  {
    title: "Diplôme Ingénieur de Travaux en Génie Logiciel",
    school: "IAI-CAMEROUN",
    period: "2024-2025"
  },
  {
    title: "Diplôme de Technicien Supérieur (DTS)",
    school: "IAI-CAMEROUN",
    period: "2023-2024"
  },
  {
    title: "Baccalauréat C",
    school: "Lycée Bilingue de Penka-Michel",
    period: "2021-2022"
  }
];

const ExperienceSection = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">CV</h1>
        <div className="w-16 h-1 bg-primary rounded-full mb-6" />
      </motion.div>

      <Tabs defaultValue="experiences" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="experiences" className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Expériences
          </TabsTrigger>
          <TabsTrigger value="formations" className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Formations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="experiences">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative pl-8 border-l-2 border-primary/30"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary shadow-md shadow-primary/30" />
                
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                  <ul className="space-y-1.5">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="formations">
          <div className="space-y-6">
            {formations.map((formation, index) => (
              <motion.div 
                key={index}
                className="relative pl-8 border-l-2 border-primary/30"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary shadow-md shadow-primary/30" />
                
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground">{formation.title}</h3>
                  <p className="text-sm text-primary font-medium">{formation.school}</p>
                  <p className="text-xs text-muted-foreground">{formation.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExperienceSection;
