import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Calendar
} from 'lucide-react';
import profilePhoto from '@/assets/donald.png';

const CVSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-card border-r border-border flex flex-col z-40 overflow-y-auto">
      {/* Profile Photo */}
      <div className="p-8 flex justify-center flex-shrink-0">
        <motion.div 
          className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-xl"
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
      <div className="px-6 pb-6 text-center flex-shrink-0">
        <motion.h1 
          className="text-xl font-bold text-foreground mb-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Njemi Donald
        </motion.h1>
        <motion.p 
          className="text-sm text-primary font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Développeur Full Stack
        </motion.p>

        {/* Language/Framework badges */}
        <motion.div 
          className="flex justify-center gap-1.5 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          {['Laravel', 'Vue.js', 'Flutter'].map((tech) => (
            <span key={tech} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mx-6 border-t border-border" />

      {/* Contact Info */}
      <motion.div 
        className="px-6 py-6 space-y-4 flex-shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ContactItem icon={<Mail className="w-4 h-4" />} label="E-MAIL" value="mbajouend@gmail.com" />
        <ContactItem icon={<Phone className="w-4 h-4" />} label="TÉLÉPHONE" value="+237 679315698" />
        <ContactItem icon={<Calendar className="w-4 h-4" />} label="DATE DE NAISSANCE" value="XX XXX XXXX" />
        <ContactItem icon={<MapPin className="w-4 h-4" />} label="LOCALISATION" value="Yaoundé, Cameroun" />
      </motion.div>

      {/* Divider */}
      <div className="mx-6 border-t border-border" />

      {/* Compétences */}
      <motion.div 
        className="px-6 py-6 flex-shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-xs font-bold tracking-wider text-muted-foreground mb-3 uppercase">Compétences</h3>
        <div className="flex flex-wrap gap-1.5">
          {['HTML/CSS/JS', 'PHP/Laravel', 'VueJS', 'React', 'Flutter', 'Python', 'Java', 'SQL', 'NuxtJS'].map((skill) => (
            <span 
              key={skill} 
              className="text-xs bg-muted px-2.5 py-1 rounded-md text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <div className="mx-6 border-t border-border" />

      {/* Outils */}
      <motion.div 
        className="px-6 py-6 flex-shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
      >
        <h3 className="text-xs font-bold tracking-wider text-muted-foreground mb-3 uppercase">Outils</h3>
        <div className="flex flex-wrap gap-1.5">
          {['VsCode', 'Postman', 'GitHub', 'GitLab', 'Docker', 'Trello'].map((tool) => (
            <span 
              key={tool} 
              className="text-xs bg-muted px-2.5 py-1 rounded-md text-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <div className="mx-6 border-t border-border" />

      {/* Langues */}
      <motion.div 
        className="px-6 py-6 flex-shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h3 className="text-xs font-bold tracking-wider text-muted-foreground mb-3 uppercase">Langues</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-foreground">Français</span>
            <span className="text-xs text-muted-foreground">Maternelle</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-foreground">Anglais</span>
            <span className="text-xs text-muted-foreground">Courant</span>
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <div className="mt-auto px-6 py-6 border-t border-border flex justify-center gap-3">
        <SocialLink href="https://github.com/Donaldmbajouen" icon={<Github className="w-4 h-4" />} />
        <SocialLink href="https://linkedin.com/in/donald-njemi" icon={<Linkedin className="w-4 h-4" />} />
      </div>
    </aside>
  );
};

const ContactItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-3">
    <div className="text-primary mt-0.5">{icon}</div>
    <div>
      <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">{label}</p>
      <p className="text-sm text-foreground">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2.5 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all"
  >
    {icon}
  </a>
);

export default CVSidebar;
