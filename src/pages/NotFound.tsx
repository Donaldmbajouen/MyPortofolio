import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Home, SearchX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import donaldImage from '@/assets/donald1.png';

const copy = {
  fr: {
    badge: 'Erreur 404',
    title: 'Cette page n’existe pas',
    description:
      "Le lien que vous avez ouvert est peut-etre incorrect, ancien, ou la page a ete deplacee. Revenons a une section utile du portfolio.",
    home: 'Retour a l’accueil',
    back: 'Revenir en arriere',
  },
  en: {
    badge: '404 Error',
    title: 'This page does not exist',
    description:
      'The link you opened may be incorrect, outdated, or the page may have been moved. Let’s get you back to a useful part of the portfolio.',
    home: 'Back to home',
    back: 'Go back',
  },
} as const;

const NotFound = () => {
  const location = useLocation();
  const { locale } = useLanguage();
  const text = copy[locale];

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background px-6 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.14),transparent_28%),radial-gradient(circle_at_bottom_right,hsl(var(--primary)/0.1),transparent_26%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Badge variant="outline" className="mb-5 gap-2 border-primary/30 bg-primary/10 px-4 py-1.5 text-primary">
            <SearchX className="h-4 w-4" />
            {text.badge}
          </Badge>

          <p className="mb-3 text-6xl font-black leading-none text-primary/20 md:text-8xl">404</p>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-6xl">{text.title}</h1>
          <div className="mb-6 h-1 w-20 rounded-full bg-primary" />
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {text.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                {text.home}
              </Link>
            </Button>

            <Button size="lg" variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {text.back}
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
          <img
            src={donaldImage}
            alt="Donald Njemi"
            className="relative z-10 max-h-[34rem] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
