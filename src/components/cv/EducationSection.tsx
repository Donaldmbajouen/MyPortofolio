import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const formations = [
  {
    diplome: "Licence Professionnelle en Génie Logiciel",
    ecole: "IAI-CAMEROUN",
    periode: "2024 - 2025",
    description: "Formation approfondie en développement logiciel et gestion de projets informatiques."
  },
  {
    diplome: "Diplôme d'Ingénieur de Travaux en Génie Logiciel",
    ecole: "IAI-CAMEROUN",
    periode: "2024 - 2025",
    description: "Spécialisation en conception et développement d'applications web et mobiles."
  },
  {
    diplome: "Diplôme de Technicien Supérieur (DTS)",
    ecole: "IAI-CAMEROUN",
    periode: "2023 - 2024",
    description: "Formation technique en programmation et bases de données."
  },
  {
    diplome: "Baccalauréat C",
    ecole: "Lycée Bilingue de Penka-Michel",
    periode: "2021 - 2022",
    description: "Baccalauréat scientifique avec spécialisation en mathématiques."
  }
];

const EducationSection = () => {
  return (
    <div className="h-full overflow-y-auto pr-2">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Formation Académique</h2>
        <p className="text-muted-foreground">Mon parcours éducatif</p>
      </div>

      <div className="space-y-4">
        {formations.map((formation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-muted/30 rounded-xl p-5 border border-border hover:border-primary/30 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all flex-shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground mb-1 leading-tight">
                  {formation.diplome}
                </h3>
                
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{formation.ecole}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formation.periode}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {formation.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
