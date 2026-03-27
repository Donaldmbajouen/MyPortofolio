import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: "+237 679315698", href: "tel:+237679315698" },
  { icon: Mail, label: "Email", value: "mbajouend@gmail.com", href: "mailto:mbajouend@gmail.com" },
  { icon: MapPin, label: "Localisation", value: "Yaoundé, Cameroun" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium mb-2">Restons en contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground leading-relaxed">
              N'hésitez pas à me contacter pour discuter de vos projets ou pour toute collaboration.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-4">
              <a href="https://github.com/Donaldmbajouen" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/donald-njemi" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="p-8 rounded-2xl border border-border bg-card space-y-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
          >
            <Input placeholder="Votre nom" className="bg-background" />
            <Input type="email" placeholder="Votre email" className="bg-background" />
            <Textarea placeholder="Votre message..." rows={5} className="bg-background resize-none" />
            <Button type="submit" className="w-full" size="lg">
              <Send className="w-4 h-4 mr-2" />
              Envoyer le message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
