import { useEffect, useMemo, useState } from 'react';
import { AlertTriangle, RefreshCcw, Wifi, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import donaldImage from '@/assets/donald1.png';

type NetworkQuality = 'ok' | 'slow' | 'offline';

type ConnectionLike = {
  downlink?: number;
  effectiveType?: string;
  saveData?: boolean;
  addEventListener?: (type: string, listener: EventListenerOrEventListenerObject) => void;
  removeEventListener?: (type: string, listener: EventListenerOrEventListenerObject) => void;
};

const content = {
  fr: {
    offlineBadge: 'Connexion indisponible',
    slowBadge: 'Connexion lente detectee',
    offlineTitle: 'Votre connexion semble coupee',
    slowTitle: 'Votre connexion semble lente',
    offlineDescription:
      "Impossible de charger correctement le portfolio pour le moment. Verifiez votre connexion internet puis reessayez.",
    slowDescription:
      "Le chargement peut prendre plus de temps que prevu. Vous pouvez patienter ou continuer avec une experience degradee.",
    retry: 'Reessayer',
    continue: 'Continuer quand meme',
  },
  en: {
    offlineBadge: 'Connection unavailable',
    slowBadge: 'Slow connection detected',
    offlineTitle: 'Your connection seems offline',
    slowTitle: 'Your connection seems slow',
    offlineDescription:
      'The portfolio cannot load properly right now. Please check your internet connection and try again.',
    slowDescription:
      'Loading may take longer than expected. You can wait a bit or continue with a reduced experience.',
    retry: 'Retry',
    continue: 'Continue anyway',
  },
} as const;

const getConnection = (): ConnectionLike | undefined => {
  return (navigator as Navigator & { connection?: ConnectionLike }).connection;
};

const getNetworkQuality = (): NetworkQuality => {
  if (!navigator.onLine) {
    return 'offline';
  }

  const connection = getConnection();
  const effectiveType = connection?.effectiveType ?? '';
  const downlink = connection?.downlink ?? 10;

  if (connection?.saveData || effectiveType === 'slow-2g' || effectiveType === '2g' || downlink < 1) {
    return 'slow';
  }

  return 'ok';
};

const ConnectionStatusGate = ({ children }: { children: React.ReactNode }) => {
  const { locale } = useLanguage();
  const [networkQuality, setNetworkQuality] = useState<NetworkQuality>(() => getNetworkQuality());
  const [dismissSlow, setDismissSlow] = useState(false);

  useEffect(() => {
    const sync = () => {
      setNetworkQuality(getNetworkQuality());
    };

    const connection = getConnection();

    window.addEventListener('online', sync);
    window.addEventListener('offline', sync);
    connection?.addEventListener?.('change', sync);

    return () => {
      window.removeEventListener('online', sync);
      window.removeEventListener('offline', sync);
      connection?.removeEventListener?.('change', sync);
    };
  }, []);

  useEffect(() => {
    if (networkQuality !== 'slow') {
      setDismissSlow(false);
    }
  }, [networkQuality]);

  const copy = content[locale];
  const shouldShow = networkQuality === 'offline' || (networkQuality === 'slow' && !dismissSlow);

  const statusConfig = useMemo(() => {
    if (networkQuality === 'offline') {
      return {
        badge: copy.offlineBadge,
        title: copy.offlineTitle,
        description: copy.offlineDescription,
        icon: <WifiOff className="h-5 w-5" />,
      };
    }

    return {
      badge: copy.slowBadge,
      title: copy.slowTitle,
      description: copy.slowDescription,
      icon: <Wifi className="h-5 w-5" />,
    };
  }, [copy, networkQuality]);

  return (
    <>
      {children}
      {shouldShow && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-background/95 px-6 backdrop-blur-xl">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
            <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-gradient-to-l from-primary/10 to-transparent lg:block" />

            <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="relative z-10">
                <Badge variant="outline" className="mb-5 gap-2 border-primary/30 bg-primary/10 px-4 py-1.5 text-primary">
                  {statusConfig.icon}
                  {statusConfig.badge}
                </Badge>

                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">{statusConfig.title}</h2>
                <div className="mb-6 h-1 w-20 rounded-full bg-primary" />

                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {statusConfig.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => window.location.reload()}>
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    {copy.retry}
                  </Button>

                  {networkQuality === 'slow' && (
                    <Button size="lg" variant="outline" onClick={() => setDismissSlow(true)}>
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      {copy.continue}
                    </Button>
                  )}
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
