import { motion } from 'framer-motion';
import { Database, Globe, Smartphone, Server, Palette, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "Vue.js", level: 90 },
        { name: "Nuxt.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript/TypeScript", level: 85 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Laravel", level: 90 },
        { name: "PHP", level: 88 },
        { name: "API REST", level: 85 },
        { name: "Node.js", level: 70 }
      ]
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "Flutter", level: 80 },
        { name: "Dart", level: 78 },
        { name: "Firebase", level: 75 }
      ]
    },
    {
      title: "Base de données",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 82 },
        { name: "Redis", level: 70 }
      ]
    },
    {
      title: "DevOps",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "CI/CD", level: 70 }
      ]
    },
    {
      title: "Design",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Figma", level: 75 },
        { name: "UI/UX", level: 72 }
      ]
    }
  ];

  return (
    <section id="competences" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mes Compétences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une expertise technique axée sur Laravel, Vue.js, Nuxt.js et Flutter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="card-hover group h-full bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional technologies */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Autres Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "HTML5", "CSS3", "SASS", "Webpack", "Vite", 
              "Stripe", "Firebase", "Supabase", "REST API", 
              "GraphQL", "Socket.io", "PWA", "Livewire"
            ].map((tech, index) => (
              <motion.span 
                key={index}
                className="px-3 py-1.5 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full text-sm font-medium transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;