import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Building2, CalendarDays } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';

const TimelineCard = ({
  title,
  subtitle,
  period,
  description,
  items,
}: {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  items?: string[];
}) => (
  <div className="relative pl-8">
    <div className="absolute left-0 top-0 h-full w-px bg-border" />
    <div className="absolute -left-2 top-2 h-4 w-4 rounded-full border-4 border-background bg-primary shadow-md shadow-primary/30" />

    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-1 flex items-center gap-2 text-sm font-medium text-primary">
            <Building2 className="h-4 w-4" />
            {subtitle}
          </p>
        </div>
        <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <CalendarDays className="h-3.5 w-3.5" />
          {period}
        </p>
      </div>

      {description && <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>}

      {items && (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const ExperienceSection = () => {
  const { messages } = useLanguage();
  const experiences = messages.journey.experiences;
  const academicPath = messages.journey.academic;
  const diplomas = messages.journey.diplomas;

  return (
    <section id="parcours" data-scroll-section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-2 font-medium text-primary">{messages.journey.eyebrow}</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{messages.journey.title}</h2>
          <div className="mb-6 h-1 w-16 rounded-full bg-primary" />
          <p className="max-w-3xl text-muted-foreground">{messages.journey.description}</p>
        </motion.div>

        <Tabs defaultValue="experiences" className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-1 gap-2 rounded-2xl bg-muted/70 p-2 md:grid-cols-3">
            <TabsTrigger value="experiences" className="gap-2 rounded-xl py-3">
              <Briefcase className="h-4 w-4" />
              {messages.journey.tabs.experiences}
            </TabsTrigger>
            <TabsTrigger value="academique" className="gap-2 rounded-xl py-3">
              <GraduationCap className="h-4 w-4" />
              {messages.journey.tabs.academic}
            </TabsTrigger>
            <TabsTrigger value="diplomes" className="gap-2 rounded-xl py-3">
              <Award className="h-4 w-4" />
              {messages.journey.tabs.diplomas}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experiences" className="mt-8">
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <TimelineCard
                    title={experience.title}
                    subtitle={experience.company}
                    period={experience.period}
                    description={experience.summary}
                    items={experience.tasks}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="academique" className="mt-8">
            <div className="space-y-6">
              {academicPath.map((step, index) => (
                <motion.div
                  key={`${step.title}-${step.period}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <TimelineCard
                    title={step.title}
                    subtitle={step.school}
                    period={step.period}
                    description={step.description}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="diplomes" className="mt-8">
            <div className="grid gap-5 md:grid-cols-2">
              {diplomas.map((diploma, index) => (
                <motion.div
                  key={`${diploma.title}-${diploma.period}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{diploma.title}</h3>
                  <p className="mb-2 text-sm font-medium text-primary">{diploma.school}</p>
                  <p className="text-sm text-muted-foreground">{diploma.period}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
