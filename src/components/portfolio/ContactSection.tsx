import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import StarfieldBackground from './StarfieldBackground';
import donaldImage from '@/assets/donald1.png';

const ContactSection = () => {
  const { locale, t } = useLanguage();

  const contactInfo = [
    { icon: Phone, label: t('contact.phone'), value: '+237 679315698', href: 'tel:+237679315698' },
    { icon: Mail, label: t('contact.email'), value: 'mbajouend@gmail.com', href: 'mailto:mbajouend@gmail.com' },
    { icon: MapPin, label: t('contact.location'), value: t('contact.locationValue') },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const whatsappMessage = [
      t('contact.whatsappGreeting'),
      '',
      `${locale === 'fr' ? 'Nom' : 'Name'}: ${name || t('contact.notProvided')}`,
      `Email: ${email || t('contact.notProvided')}`,
      '',
      t('contact.whatsappMessage'),
      message || t('contact.noMessage'),
    ].join('\n');

    window.open(
      `https://wa.me/237679315698?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contact" data-scroll-section className="relative overflow-hidden py-20 md:py-28 bg-black">
      <StarfieldBackground />

      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={donaldImage}
          alt=""
          aria-hidden="true"
          className="absolute right-[3%] top-1/2 hidden max-w-none -translate-y-1/2 opacity-[0.25] saturate-0 md:block md:w-80 lg:w-[22rem] xl:right-[5%] xl:w-[26rem] mix-blend-screen"
        />
        {/* Subtle cyan glow on the image */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] hidden md:block" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium mb-2">{t('contact.eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('contact.title')}</h2>
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
            <p className="text-gray-300 leading-relaxed font-medium">{t('contact.description')}</p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-primary uppercase tracking-wider font-bold">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-white hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white">{item.value}</p>
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
            className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md space-y-5 shadow-2xl shadow-primary/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <Input name="name" placeholder={t('contact.namePlaceholder')} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50" />
            <Input name="email" type="email" placeholder={t('contact.emailPlaceholder')} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50" />
            <Textarea name="message" placeholder={t('contact.messagePlaceholder')} rows={5} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 resize-none" />
            <Button type="submit" className="w-full" size="lg">
              <Send className="w-4 h-4 mr-2" />
              {t('contact.submit')}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
