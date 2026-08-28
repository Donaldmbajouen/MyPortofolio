import { useEffect, useState } from 'react';
import { RefreshCcw, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import donaldImage from '@/assets/donald1.png';

const content = {
  fr: {
    offlineBadge: 'Connexion indisponible',
    offlineTitle: 'Votre connexion semble coupee',
    offlineDescription:
      "Impossible de charger correctement le portfolio pour le moment. Verifiez votre connexion internet puis reessayez.",
    retry: 'Reessayer',
  },
  en: {
    offlineBadge: 'Connection unavailable',
    offlineTitle: 'Your connection seems offline',
    offlineDescription:
      'The portfolio cannot load properly right now. Please check your internet connection and try again.',
    retry: 'Retry',
  },
} as const;

const ConnectionStatusGate = ({ children }: { children: React.ReactNode }) => {
  const { locale } = useLanguage();
  const [isOffline, setIsOffline] = useState(() => !navigator.onLine);

  useEffect(() => {
    const sync = () => setIsOffline(!navigator.onLine);

    window.addEventListener('online', sync);
    window.addEventListener('offline', sync);

    return () => {
      window.removeEventListener('online', sync);
      window.removeEventListener('offline', sync);
    };
  }, []);

  const copy = content[locale];

  return (
    <>
      {children}
      {isOffline && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-background/95 px-6 backdrop-blur-xl">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
            <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-gradient-to-l from-primary/10 to-transparent lg:block" />

            <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="relative z-10">
                <Badge variant="outline" className="mb-5 gap-2 border-primary/30 bg-primary/10 px-4 py-1.5 text-primary">
                  <WifiOff className="h-5 w-5" />
                  {copy.offlineBadge}
                </Badge>

                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">{copy.offlineTitle}</h2>
                <div className="mb-6 h-1 w-20 rounded-full bg-primary" />

                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {copy.offlineDescription}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => window.location.reload()}>
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    {copy.retry}
                  </Button>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
                <img
                  src={donaldImage}
                  alt="Donald Njemi"
                  className="relative z-10 max-h-[30rem] w-auto object-contain opacity-85"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectionStatusGate;
