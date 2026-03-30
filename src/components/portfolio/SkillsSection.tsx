import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Server, Wrench, Palette, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import TechIcon, { type TechIconName } from '@/components/portfolio/TechIcon';

const SkillsSection = () => {
  const { locale, t, messages } = useLanguage();

  type SkillItem = {
    name: string;
    icons: TechIconName[];
    detail?: string;
  };

  const domains = [
    {
      id: 'frontend',
      label: messages.skills.categories.frontend,
      icon: Globe,
      skills: [
        { name: 'Vue.js / Nuxt.js', icons: ['vue', 'nuxt'] },
        { name: 'React / TypeScript', icons: ['react', 'typescript'] },
        { name: 'HTML / CSS / JS', icons: ['html5', 'css3', 'javascript'] },
        { name: 'Tailwind CSS', icons: ['tailwind'] },
      ] satisfies SkillItem[],
    },
    {
      id: 'backend',
      label: messages.skills.categories.backend,
      icon: Server,
      skills: [
        { name: 'Laravel / PHP', icons: ['laravel', 'php'] },
        { name: 'MySQL / PostgreSQL', icons: ['mysql', 'postgresql'] },
        { name: 'API RESTful', icons: ['api'] },
        { name: 'Python', icons: ['python'] },
      ] satisfies SkillItem[],
    },
    {
      id: 'mobile',
      label: messages.skills.categories.mobile,
      icon: Smartphone,
      skills: [
        { name: 'Flutter / Dart', icons: ['flutter'] },
        { name: 'Firebase', icons: ['firebase'] },
        { name: 'Android / iOS', icons: ['android', 'ios'] },
      ] satisfies SkillItem[],
    },
    {
      id: 'tools',
      label: messages.skills.categories.tools,
      icon: Wrench,
      skills: [
        { name: 'Git / GitHub / GitLab', icons: ['git', 'github', 'gitlab'] },
        { name: 'Docker', icons: ['docker'] },
        { name: 'VS Code', icons: ['vscode'] },
        { name: 'Postman', icons: ['postman'] },
        { name: 'Trello', icons: ['trello'] },
      ] satisfies SkillItem[],
    },
    {
      id: 'ia',
      label: messages.skills.categories.ai,
      icon: Sparkles,
      skills: [
        { name: 'Cursor', icons: ['cursor'], detail: messages.skills.details.cursor },
        { name: locale === 'fr' ? 'Assistants IA de code' : 'AI Coding Assistants', icons: ['ai'], detail: messages.skills.details.aiCoding },
        { name: 'Prompt Engineering', icons: ['prompt'], detail: messages.skills.details.promptEngineering },
        { name: locale === 'fr' ? 'Prompts techniques structurés' : 'Structured Technical Prompts', icons: ['prompt-structured'], detail: messages.skills.details.structuredPrompts },
      ] satisfies SkillItem[],
    },
    {
      id: 'design',
      label: messages.skills.categories.design,
      icon: Palette,
      skills: [
        { name: 'Figma', icons: ['figma'] },
        { name: 'Photoshop', icons: ['photoshop'] },
        { name: 'UX / UI Design', icons: ['uxui'] },
      ] satisfies SkillItem[],
    },
  ];

  const [activeTab, setActiveTab] = useState('frontend');
  const activeDomain = domains.find(d => d.id === activeTab)!;

  return (
    <section id="competences" data-scroll-section className="py-20 md:py-28 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium mb-2">{t('skills.eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('skills.title')}</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* Tabs - Left */}
          <motion.div
            className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {domains.map((domain) => {
              const Icon = domain.icon;
              const isActive = activeTab === domain.id;
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveTab(domain.id)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {domain.label}
                </button>
              );
            })}
          </motion.div>

          {/* Content - Right */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {activeDomain.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all group"
                  >
                    <div className="flex max-w-[7rem] flex-wrap gap-2 pt-0.5">
                      {skill.icons.map((iconName) => (
                        <TechIcon key={`${skill.name}-${iconName}`} name={iconName} size="sm" />
                      ))}
                    </div>
                    <div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      {'detail' in skill && skill.detail && (
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {skill.detail}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
