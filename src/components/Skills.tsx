import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "text-blue-500",
      skills: [
        { name: "React", level: 60 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "text-green-500",
      skills: [
        { name: "Laravel/PHP", level: 87 },
        { name: "Python/Django", level: 40 },
        { name: "API REST", level: 85 }
      ]
    },
    {
      title: "Base de données",
      icon: <Database className="w-6 h-6" />,
      color: "text-purple-500",
      skills: [
        { name: "MySQL/PostgreSQL", level: 85 },
        { name: "Redis", level: 75 },
      ]
    },
    {
      title: "DevOps & Outils",
      icon: <Code className="w-6 h-6" />,
      color: "text-orange-500",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git/GitHub", level: 90 },
      ]
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      color: "text-pink-500",
      skills: [
        { name: "Flutter/Dart", level: 70 },
      ]
    },
    
  ];

  const getProgressColor = (level: number) => {
    if (level >= 85) return "bg-primary";
    if (level >= 75) return "bg-blue-500";
    if (level >= 65) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <section id="competences" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mes Compétences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une expertise technique diversifiée pour créer des solutions complètes et performantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-hover group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors duration-300 mx-auto mb-4`}>
                  <div className={`${category.color} group-hover:text-primary transition-colors duration-300`}>
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${getProgressColor(skill.level)}`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 100) + (skillIndex * 200)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional skills badges */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "HTML5", "CSS3", "JavaScript", "SASS", "Webpack", "Vite", "Jest", 
              "Cypress", "Stripe", "PayPal", "Firebase", "Supabase", "Prisma", 
              "GraphQL", "Socket.io", "WebRTC", "PWA", "Electron"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full text-sm font-medium transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;