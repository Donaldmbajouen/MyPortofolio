import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "mbajouend@gmail.com",
      href: "mailto:mbajouend@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Téléphone",
      content: "+237 679315698",
      href: "tel:+237679315698"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Localisation",
      content: "Yaoundé, Cameroun",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      href: "https://github.com/Donaldmbajouen",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/donald-njemi-mbajouen-741889284/",
      color: "hover:text-blue-600"
    }
    
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contactez-moi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une idée de projet ? Une opportunité ? N'hésitez pas à me contacter. 
            Je suis toujours ouvert aux nouveaux défis !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Discutons de votre projet
              </h3>
              <p className="text-muted-foreground mb-8">
                Que vous soyez une startup ambitieuse ou une entreprise établie, 
                je suis là pour transformer vos idées en solutions digitales performantes.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-muted hover:bg-primary/5 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{info.title}</h4>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-8">
              <h4 className="font-medium text-foreground mb-4">Suivez-moi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Disponible pour de nouveaux projets</h4>
                    <p className="text-sm text-muted-foreground">
                      Temps de réponse moyen : 24h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
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
                      className="transition-all duration-300 focus:shadow-glow"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sujet de votre message"
                    required
                    className="transition-all duration-300 focus:shadow-glow"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={6}
                    required
                    className="transition-all duration-300 focus:shadow-glow resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-primary group"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;