import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import saamayaLogo from '@/assets/logos/saamaya-finance.jpeg';
import everblueLogo from '@/assets/logos/everblue.png';
import votareaLogo from '@/assets/logos/votarea.png';
import sofitoulLogo from '@/assets/logos/sofitoul.png';
import layoLogo from '@/assets/logos/layo-glam-care.webp';
import techlogo from '@/assets/logos/TT.png';
import appcevLogo from '@/assets/logos/appcev.png';

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
    linkLabel: locale === 'fr' ? 'Voir le site' : 'View site',
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

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {collaborators.map((collaborator, index) => {
            const content = (
              <>
                <div className="flex h-24 w-full items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <img
                    src={collaborator.logo}
                    alt={`${collaborator.name} logo`}
                    className="max-h-16 w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="min-h-[3.75rem]">
                  <h3 className="text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {collaborator.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {collaborator.role[locale]}
                  </p>
                </div>
                {collaborator.url && (
                  <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                    {copy.linkLabel}
                    <ExternalLink className="h-3 w-3" />
                  </span>
                )}
              </>
            );

            return (
              <motion.div
                key={collaborator.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                {collaborator.url ? (
                  <a
                    href={collaborator.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full min-h-[218px] flex-col gap-4 rounded-xl border border-border bg-background/70 p-4 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-floating"
                  >
                    {content}
                  </a>
                ) : (
                  <article className="group flex h-full min-h-[218px] flex-col gap-4 rounded-xl border border-border bg-background/70 p-4 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-floating">
                    {content}
                  </article>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
