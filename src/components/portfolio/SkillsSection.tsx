import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Langages & Frameworks',
    skills: [
      { name: 'Laravel / PHP', level: 90 },
      { name: 'Vue.js / Nuxt.js', level: 85 },
      { name: 'Flutter / Dart', level: 80 },
      { name: 'React', level: 70 },
      { name: 'HTML / CSS / JS', level: 95 },
      { name: 'Python', level: 65 },
      { name: 'Java', level: 60 },
      { name: 'SQL', level: 80 },
    ]
  },
  {
    title: 'Outils & Plateformes',
    skills: [
      { name: 'Git / GitHub / GitLab', level: 85 },
      { name: 'Docker', level: 65 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Figma', level: 70 },
      { name: 'Trello', level: 80 },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="competences" className="py-20 md:py-28 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium mb-2">Mes compétences</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Compétences</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 * index }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
