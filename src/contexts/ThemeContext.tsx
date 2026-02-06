import React, { createContext, useContext, useEffect, useState } from 'react';

export type LanguageTheme = 'react' | 'laravel' | 'vue' | 'flutter';
export type ColorMode = 'light' | 'dark';

interface ThemeContextType {
  languageTheme: LanguageTheme;
  colorMode: ColorMode;
  setLanguageTheme: (theme: LanguageTheme) => void;
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [languageTheme, setLanguageTheme] = useState<LanguageTheme>(() => {
    const saved = localStorage.getItem('language-theme');
    return (saved as LanguageTheme) || 'vue';
  });

  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    const saved = localStorage.getItem('color-mode');
    return (saved as ColorMode) || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('language-theme', languageTheme);
    localStorage.setItem('color-mode', colorMode);

    // Apply classes to document
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark', 'theme-react', 'theme-laravel', 'theme-vue', 'theme-flutter');
    
    // Add current theme classes
    root.classList.add(colorMode);
    root.classList.add(`theme-${languageTheme}`);
  }, [languageTheme, colorMode]);

  const toggleColorMode = () => {
    setColorMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{
      languageTheme,
      colorMode,
      setLanguageTheme,
      setColorMode,
      toggleColorMode
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
