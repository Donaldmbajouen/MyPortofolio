import { motion } from 'framer-motion';

const CVHeader = () => {
  return (
    <header className="p-6 md:p-8 border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          NJEMI DONALD
        </h1>
        <h2 className="text-lg md:text-xl text-primary font-semibold mt-1 tracking-wide">
          DEVELOPPEUR WEB
        </h2>
      </motion.div>

      <motion.p 
        className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Je suis un jeune passionné de programmation et d'intelligence artificielle constamment 
        curieux des dernières innovations technologiques. Ma détermination et ma soif d'apprendre 
        font de moi un futur innovateur prometteur dans le domaine du numérique.
      </motion.p>
    </header>
  );
};

export default CVHeader;
