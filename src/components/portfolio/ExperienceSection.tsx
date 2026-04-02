import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView, animate } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Building2, CalendarDays, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';

const YearCounter = ({ value }: { value: string }) => {
  const years = value.match(/\d{4}/g);
  if (!years) return <span>{value}</span>;

  // We'll replace the years in the text with animated versions
  return (
    <span>
      {value.split(/(\d{4})/).map((part, i) => {
        const isYear = /\d{4}/.test(part);
        if (!isYear) return part;
        
        return <CounterValue key={i} value={parseInt(part)} />;
      })}
    </span>
  );
};

const CounterValue = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) ref.current.textContent = Math.round(latest).toString();
        }
      });
    }
  }, [isInView, value]);

  return <span ref={ref}>0</span>;
};

const TimelineCard = ({
  title,
  subtitle,
  period,
  description,
  items,
  index,
}: {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  items?: ReadonlyArray<string>;
  index: number;
}) => (
  <motion.div 
    className="relative pl-8 pb-12 last:pb-0"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {/* Animated Dot */}
    <motion.div 
      className="absolute -left-2 top-2 h-4 w-4 rounded-full border-4 border-background bg-primary z-10"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, delay: 0.2 + index * 0.1 }}
    />

    <motion.div 
      className="group relative rounded-2xl border border-border bg-card p-6 shadow-premium transition-all duration-300 hover:border-primary/40 hover:shadow-floating cursor-default overflow-hidden"
      whileHover={{ y: -8, scale: 1.01 }}
    >
      {/* Hover Glow Effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{title}</h3>
            <p className="mt-1 flex items-center gap-2 text-sm font-medium text-primary/80">
              <Building2 className="h-4 w-4" />
              {subtitle}
            </p>
          </div>
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary shadow-sm border border-primary/20">
            <CalendarDays className="h-3.5 w-3.5" />
            <YearCounter value={period} />
          </p>
        </div>

        {description && <p className="mb-4 text-sm leading-relaxed text-muted-foreground italic">{description}</p>}

        {items && (
          <ul className="space-y-2.5">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const ExperienceSection = () => {
  const { messages } = useLanguage();
  const experiences = messages.journey.experiences;
  const academicPath = messages.journey.academic;
  const diplomas = messages.journey.diplomas;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="parcours" data-scroll-section className="py-20 md:py-28" ref={containerRef}>
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

          <TabsContent value="experiences" className="mt-8 outline-none">
            <div className="relative space-y-0">
              {/* Vertical Timeline Track */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-border/50" />
              
              {/* Animated Inner Track (The Light) */}
              <motion.div 
                className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/50 to-primary origin-top"
                style={{ scaleY }}
              />
              
              {experiences.map((experience, index) => (
                <TimelineCard
                  key={experience.title}
                  title={experience.title}
                  subtitle={experience.company}
                  period={experience.period}
                  description={experience.summary}
                  items={experience.tasks}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="academique" className="mt-8 outline-none">
            <div className="relative space-y-0">
              {/* Vertical Timeline Track */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-border/50" />

              {/* Animated Inner Track (The Light) */}
              <motion.div 
                className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/50 to-primary origin-top"
                style={{ scaleY }}
              />
              
              {academicPath.map((step, index) => (
                <TimelineCard
                  key={`${step.title}-${step.period}`}
                  title={step.title}
                  subtitle={step.school}
                  period={step.period}
                  description={step.description}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="diplomes" className="mt-8 outline-none">
            <div className="grid gap-5 md:grid-cols-2">
              {diplomas.map((diploma, index) => (
                <motion.div
                  key={`${diploma.title}-${diploma.period}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  className="group relative rounded-2xl border border-border bg-card p-6 shadow-premium transition-all duration-300 hover:border-primary/40 hover:shadow-floating cursor-default overflow-hidden"
                >
                  <div className="absolute -inset-px bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{diploma.title}</h3>
                    <p className="mb-2 text-sm font-medium text-primary/80">{diploma.school}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                       <CalendarDays className="h-3 w-3" />
                       <YearCounter value={diploma.period} />
                    </div>
                  </div>
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
