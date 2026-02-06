import { Code, Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Accueil', href: 'accueil' },
    { label: 'Projets', href: 'projets' },
    { label: 'Compétences', href: 'competences' },
    { label: 'À propos', href: 'apropos' },
    { label: 'Contact', href: 'contact' }
  ];

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: "https://github.com/Donaldmbajouen", label: "GitHub" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/donald-njemi-mbajouen-741889284/", label: "LinkedIn" },
    { icon: <Mail className="w-4 h-4" />, href: "mailto:mbajouend@gmail.com", label: "Email" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">Donald Mbajouen</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Développeur Full Stack spécialisé Laravel, Vue.js et Flutter.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary rounded-lg flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Navigation</h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Contact</h3>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <p>mbajouend@gmail.com</p>
              <p>+237 679 315 698</p>
              <p>Yaoundé, Cameroun</p>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-muted-foreground">Disponible</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Donald Mbajouen. Tous droits réservés.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>Fait avec</span>
            <Heart className="w-3 h-3 text-destructive" />
            <span>et</span>
            <span className="text-primary">☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;