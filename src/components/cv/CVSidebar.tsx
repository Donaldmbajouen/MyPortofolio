import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Globe
} from 'lucide-react';
import heroPortrait from '@/assets/hero-portrait.jpg';

const skills = {
  langages: ['HTML/CSS/JS', 'PHP/Laravel', 'VueJS & React', 'Flutter', 'Python (Base)', 'Java (Base)', 'UML, SQL'],
  outils: ['VsCode', 'Postman', 'Github/Gitlab', 'Docker', 'Trello'],
  langues: ['Français (maternelle)', 'Anglais (courant)'],
  interets: ['Lecture', 'Mangas', 'Jeux Vidéos', 'Actualités Tech']
};

const CVSidebar = () => {
  return (
    <aside className="w-full lg:w-72 bg-primary text-primary-foreground flex-shrink-0">
      {/* Profile Photo */}
      <div className="p-8 flex justify-center">
        <motion.div 
          className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-primary-foreground/30 shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          <img 
            src={heroPortrait} 
            alt="Njemi Donald" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Sections */}
      <div className="px-6 pb-8 space-y-6">
        {/* Informations */}
        <Section title="INFORMATIONS" delay={0.3}>
          <ContactItem icon={<Phone className="w-4 h-4" />} text="+237 679315698" />
          <ContactItem icon={<Mail className="w-4 h-4" />} text="mbajouend@gmail.com" />
          <ContactItem icon={<Linkedin className="w-4 h-4" />} text="donald Njemi Mbajouen" />
          <ContactItem icon={<MapPin className="w-4 h-4" />} text="Yaoundé, Jouvence" />
        </Section>

        {/* Langages et Framework */}
        <Section title="LANGAGES ET FRAMEWORK" delay={0.4}>
          <ul className="space-y-1">
            {skills.langages.map((skill, i) => (
              <li key={i} className="text-sm text-primary-foreground/90 text-center">
                {skill}
              </li>
            ))}
          </ul>
        </Section>

        {/* Logiciels et Outils */}
        <Section title="LOGICIEL ET OUTILS" delay={0.5}>
          <ul className="space-y-1">
            {skills.outils.map((tool, i) => (
              <li key={i} className="text-sm text-primary-foreground/90 text-center">
                {tool}
              </li>
            ))}
          </ul>
        </Section>

        {/* Langues */}
        <Section title="LANGUES" delay={0.6}>
          <ul className="space-y-1">
            {skills.langues.map((lang, i) => (
              <li key={i} className="text-sm text-primary-foreground/90 text-center">
                {lang}
              </li>
            ))}
          </ul>
        </Section>

        {/* Intérêts */}
        <Section title="INTÉRÊTS" delay={0.7}>
          <ul className="space-y-1">
            {skills.interets.map((interet, i) => (
              <li key={i} className="text-sm text-primary-foreground/90 text-center">
                {interet}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </aside>
  );
};

const Section = ({ 
  title, 
  children, 
  delay = 0 
}: { 
  title: string; 
  children: React.ReactNode; 
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
  >
    <h3 className="text-sm font-bold tracking-wider text-center mb-3 border-b border-primary-foreground/20 pb-2">
      {title}
    </h3>
    {children}
  </motion.div>
);

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/90 mb-1.5">
    {icon}
    <span>{text}</span>
  </div>
);

export default CVSidebar;
