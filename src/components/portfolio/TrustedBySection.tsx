import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import saamayaLogo from '@/assets/logos/saamaya-finance.jpeg';
import everblueLogo from '@/assets/logos/everblue.png';
import votareaLogo from '@/assets/logos/votarea.png';
import sofitoulLogo from '@/assets/logos/sofitoul.png';
import layoLogo from '@/assets/logos/layo-glam-care.webp';
import techlogo from '@/assets/logos/TT.png';
import appcevLogo from '@/assets/logos/appcev.png';
import mhTechnologieLogo from '@/assets/logos/mhtech.jpeg';

const collaborators = [
  {
    name: 'Saamaya Finance Fintech',
    role: {
      fr: 'Expérience professionnelle',
      en: 'Professional experience',
    },
    logo: saamayaLogo,
    url: 'https://saamayapay.com/',
  },
  {
    name: 'Everblue Solution',
    role: {
      fr: 'Expérience professionnelle',
      en: 'Professional experience',
    },
    logo: everblueLogo,
    url: 'https://everblue.xyz/',
  },
   {
    name: 'MH-Technologie',
    role: {
      fr: 'Expérience professionnelle',
      en: 'Professional experience',
    },
    logo:   mhTechnologieLogo,
    url: 'https://mh-technologie.com/',
  },
  {
    name: 'Votarea',
    role: {
      fr: 'Projet digital',
      en: 'Digital project',
    },
    logo: votareaLogo,
    url: 'https://votarea.com/',
  },
  {
    name: 'Sofitoul S.A',
    role: {
      fr: 'Collaboration métier',
      en: 'Business collaboration',
    },
    logo: sofitoulLogo,
    url: 'https://sofitoul.com/',
  },
  {
    name: 'Layo Glam Care',
    role: {
      fr: 'E-commerce beauté',
      en: 'Beauty e-commerce',
    },
    logo: layoLogo,
    url: 'https://layoglamcare.com/',
  },
   {
    name: 'Tech Temple',
    role: {
      fr: 'Site Entreprise Tech',
      en: 'Tech Company Website',
    },
    logo: techlogo,
    url: 'https://techtemple.site/',
  },
  {
    name: 'APPCEV Africa',
    role: {
      fr: 'Plateforme associative',
      en: 'NGO platform',
    },
    logo: appcevLogo,
    url: 'https://appcev-africaorg.org/',
  },
];

const TrustedBySection = () => {
  const { locale } = useLanguage();

  const copy = {
    eyebrow: locale === 'fr' ? 'Collaborations' : 'Collaborations',
    title: locale === 'fr' ? "Ils m'ont fait confiance" : 'Trusted Collaborations',
    description:
      locale === 'fr'
        ? "Entre expériences en entreprise, missions techniques et projets livrés, ces structures ont compté dans mon parcours et dans ma pratique du développement."
        : 'Across professional roles, technical missions, and shipped projects, these organizations have shaped my work and trusted my development practice.',
  };

  return (
    <section id="collaborations" data-scroll-section className="py-16 md:py-24 bg-card/35">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="mb-2 font-medium text-primary">{copy.eyebrow}</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{copy.title}</h2>
          <div className="mb-6 h-1 w-16 rounded-full bg-primary" />
          <p className="max-w-3xl text-muted-foreground">{copy.description}</p>
        </motion.div>

        <div
          className="group/marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        >
          <div className="flex w-max animate-marquee items-center gap-6 group-hover/marquee:[animation-play-state:paused]">
            {[...collaborators, ...collaborators].map((collaborator, index) => (
              <a
                key={`${collaborator.name}-${index}`}
                href={collaborator.url}
                target="_blank"
                rel="noopener noreferrer"
                title={collaborator.name}
                className="flex h-24 w-40 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-floating"
              >
                <img
                  src={collaborator.logo}
                  alt={`${collaborator.name} logo`}
                  className="max-h-16 w-full object-contain"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
