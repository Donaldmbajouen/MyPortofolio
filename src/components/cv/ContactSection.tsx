import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: "+237 679315698", href: "tel:+237679315698" },
  { icon: Mail, label: "Email", value: "mbajouend@gmail.com", href: "mailto:mbajouend@gmail.com" },
  { icon: MapPin, label: "Localisation", value: "Yaoundé, Jouvence, Cameroun" },
  { icon: Linkedin, label: "LinkedIn", value: "Donald Njemi Mbajouen", href: "https://linkedin.com/in/donald-njemi" },
  { icon: Github, label: "GitHub", value: "Donaldmbajouen", href: "https://github.com/Donaldmbajouen" },
];

const ContactSection = () => {
  return (
    <div className="h-full overflow-y-auto pr-2">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Me Contacter</h2>
        <p className="text-muted-foreground">N'hésitez pas à me contacter pour discuter de vos projets</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="space-y-3">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border hover:border-primary/30 hover:bg-muted/50 transition-all group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
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
          transition={{ delay: 0.3 }}
          className="bg-muted/30 rounded-xl p-5 border border-border space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission
          }}
        >
          <div className="space-y-3">
            <Input 
              placeholder="Votre nom" 
              className="bg-background border-border"
            />
            <Input 
              type="email" 
              placeholder="Votre email" 
              className="bg-background border-border"
            />
            <Textarea 
              placeholder="Votre message..." 
              rows={4}
              className="bg-background border-border resize-none"
            />
          </div>
          
          <Button type="submit" className="w-full">
            <Send className="w-4 h-4 mr-2" />
            Envoyer le message
          </Button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactSection;
