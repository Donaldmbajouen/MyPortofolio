import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai rapidement.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, title: "Email", content: "mbajouend@gmail.com", href: "mailto:mbajouend@gmail.com" },
    { icon: <Phone className="w-4 h-4" />, title: "Téléphone", content: "+237 679315698", href: "tel:+237679315698" },
    { icon: <MapPin className="w-4 h-4" />, title: "Localisation", content: "Yaoundé, Cameroun", href: "#" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contactez-moi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une idée de projet ? Je suis toujours ouvert aux nouveaux défis !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Discutons de votre projet
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Que vous soyez une startup ou une entreprise établie, 
                je transforme vos idées en solutions digitales.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{info.title}</h4>
                    <p className="text-xs text-muted-foreground">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-4">
              <h4 className="font-medium text-foreground mb-3 text-sm">Suivez-moi</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Donaldmbajouen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/donald-njemi-mbajouen-741889284/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Disponible</h4>
                    <p className="text-xs text-muted-foreground">Réponse sous 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold">Envoyez-moi un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1.5">
                        Nom
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                        className="h-9"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1.5">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        required
                        className="h-9"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-1.5">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Sujet du message"
                      required
                      className="h-9"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet..."
                      rows={4}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Envoi..."
                    ) : (
                      <>
                        Envoyer
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;