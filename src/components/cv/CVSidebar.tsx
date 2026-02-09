import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github
} from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const skills = {
  langages: ['HTML/CSS/JS', 'PHP/Laravel', 'VueJS & React', 'Flutter', 'Python', 'Java', 'SQL'],
  outils: ['VsCode', 'Postman', 'Github/Gitlab', 'Docker', 'Trello'],
  langues: ['Français (maternelle)', 'Anglais (courant)']
};

const CVSidebar = () => {
  return (
    <aside className="w-72 bg-primary text-primary-foreground flex-shrink-0 flex flex-col h-full overflow-y-auto">
      {/* Profile Photo */}
      <div className="p-6 flex justify-center flex-shrink-0">
        <motion.div 
          className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary-foreground/30 shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          <img 
            src={profilePhoto} 
            alt="Njemi Donald" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Name & Title */}
      <div className="px-6 pb-4 text-center flex-shrink-0">
        <h2 className="text-xl font-bold mb-1">Njemi Donald</h2>
        <p className="text-sm text-primary-foreground/80">Développeur Full Stack</p>
      </div>

      {/* Sections */}
      <div className="flex-1 px-4 pb-6 space-y-4 overflow-y-auto">
        {/* Contact */}
        <Section title="CONTACT" delay={0.3}>
          <ContactItem icon={<Phone className="w-3.5 h-3.5" />} text="+237 679315698" />
          <ContactItem icon={<Mail className="w-3.5 h-3.5" />} text="mbajouend@gmail.com" />
          <ContactItem icon={<Linkedin className="w-3.5 h-3.5" />} text="Donald Njemi" />
          <ContactItem icon={<MapPin className="w-3.5 h-3.5" />} text="Yaoundé, Cameroun" />
        </Section>

        {/* Compétences */}
        <Section title="COMPÉTENCES" delay={0.4}>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {skills.langages.map((skill, i) => (
              <span 
                key={i} 
                className="text-xs bg-primary-foreground/10 px-2 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>

        {/* Outils */}
        <Section title="OUTILS" delay={0.5}>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {skills.outils.map((tool, i) => (
              <span 
                key={i} 
                className="text-xs bg-primary-foreground/10 px-2 py-1 rounded-md"
              >
                {tool}
              </span>
            ))}
          </div>
        </Section>

        {/* Langues */}
        <Section title="LANGUES" delay={0.6}>
          <ul className="space-y-1">
            {skills.langues.map((lang, i) => (
              <li key={i} className="text-xs text-primary-foreground/90 text-center">
                {lang}
              </li>
            ))}
          </ul>
        </Section>

        {/* Social Links */}
        <div className="flex justify-center gap-3 pt-2">
          <a 
            href="https://github.com/Donaldmbajouen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://linkedin.com/in/donald-njemi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
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
    className="bg-primary-foreground/5 rounded-xl p-3"
  >
    <h3 className="text-xs font-bold tracking-wider text-center mb-2 text-primary-foreground/70">
      {title}
    </h3>
    {children}
  </motion.div>
);

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-xs text-primary-foreground/90 mb-1.5">
    {icon}
    <span className="truncate">{text}</span>
  </div>
);

export default CVSidebar;
