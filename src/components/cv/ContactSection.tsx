import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: "+237 679315698", href: "tel:+237679315698" },
  { icon: Mail, label: "Email", value: "mbajouend@gmail.com", href: "mailto:mbajouend@gmail.com" },
  { icon: MapPin, label: "Localisation", value: "Yaoundé, Cameroun" },
  { icon: Linkedin, label: "LinkedIn", value: "Donald Njemi", href: "https://linkedin.com/in/donald-njemi" },
  { icon: Github, label: "GitHub", value: "Donaldmbajouen", href: "https://github.com/Donaldmbajouen" },
];

const ContactSection = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Contact</h1>
        <div className="w-16 h-1 bg-primary rounded-full mb-6" />
        <p className="text-muted-foreground mb-8">N'hésitez pas à me contacter pour discuter de vos projets</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-xl border border-border bg-card space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="font-semibold text-foreground mb-4">Envoyez-moi un message</h3>
          <Input placeholder="Votre nom" className="bg-background border-border" />
          <Input type="email" placeholder="Votre email" className="bg-background border-border" />
          <Textarea placeholder="Votre message..." rows={5} className="bg-background border-border resize-none" />
          <Button type="submit" className="w-full">
            <Send className="w-4 h-4 mr-2" />
            Envoyer
          </Button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactSection;
