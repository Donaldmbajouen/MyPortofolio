import { motion } from 'framer-motion';
import { Sun, Moon, Download } from 'lucide-react';
import { useTheme, LanguageTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

// Custom SVG icons for languages
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <circle cx="12" cy="12" r="2.5"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
  </svg>
);

const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934c0 .135-.073.26-.189.327l-9.03 5.206a.32.32 0 01-.066.027c-.008.003-.016.007-.025.01-.04.012-.08.012-.12 0-.009-.003-.018-.007-.027-.01a.316.316 0 01-.065-.027L.533 18.755a.375.375 0 01-.19-.326V5.53c0-.035.005-.07.014-.1.003-.012.01-.023.014-.035a.35.35 0 01.028-.053c.007-.012.018-.022.026-.033a.376.376 0 01.036-.035c.01-.008.022-.014.033-.022.013-.008.023-.018.036-.024L4.88 2.706a.375.375 0 01.38 0l4.35 2.506c.013.006.023.016.036.024.011.008.023.014.033.022a.376.376 0 01.036.035c.008.011.019.021.026.033.012.017.02.035.028.053.004.012.011.023.014.035a.364.364 0 01.014.1v9.652l3.761-2.166V7.654c0-.035.005-.07.014-.1.003-.012.01-.023.014-.035a.35.35 0 01.028-.053c.007-.012.018-.022.026-.033a.376.376 0 01.036-.035c.01-.008.022-.014.033-.022.013-.008.023-.018.036-.024l4.35-2.506a.375.375 0 01.38 0l4.35 2.506c.013.006.023.016.036.024.011.008.023.014.033.022z"/>
  </svg>
);

const VueIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78L24 1.61zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43L12 14.08z"/>
  </svg>
);

const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.471H21.7l-6.46-6.468 6.46-6.46h-7.372z"/>
  </svg>
);

const languageIcons: Record<LanguageTheme, { icon: React.ReactNode; label: string }> = {
  react: { icon: <ReactIcon />, label: 'React' },
  laravel: { icon: <LaravelIcon />, label: 'Laravel' },
  vue: { icon: <VueIcon />, label: 'Vue.js' },
  flutter: { icon: <FlutterIcon />, label: 'Flutter' }
};

const ThemeControls = () => {
  const { languageTheme, setLanguageTheme, colorMode, toggleColorMode } = useTheme();

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      {/* Language Theme Buttons */}
      <div className="flex gap-1.5 p-2 bg-card border border-border rounded-xl shadow-lg">
        {(Object.keys(languageIcons) as LanguageTheme[]).map((lang) => (
          <motion.button
            key={lang}
            onClick={() => setLanguageTheme(lang)}
            className={`p-2 rounded-lg transition-all ${
              languageTheme === lang 
                ? 'bg-primary text-primary-foreground shadow-md' 
                : 'bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={languageIcons[lang].label}
          >
            {languageIcons[lang].icon}
          </motion.button>
        ))}
      </div>

      {/* Color Mode & Download */}
      <div className="flex gap-1.5 p-2 bg-card border border-border rounded-xl shadow-lg">
        <motion.button
          onClick={toggleColorMode}
          className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-all"
          whileTap={{ scale: 0.95 }}
          title={colorMode === 'dark' ? 'Mode Clair' : 'Mode Sombre'}
        >
          {colorMode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </motion.button>
        
        <motion.button
          className="p-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all"
          whileTap={{ scale: 0.95 }}
          title="Télécharger CV"
        >
          <Download className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ThemeControls;
