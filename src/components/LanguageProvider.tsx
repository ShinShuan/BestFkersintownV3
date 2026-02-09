import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Récupérer la langue depuis localStorage ou utiliser le français par défaut
    const savedLanguage = localStorage.getItem('bestfkersintown_language') as Language;
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // Détecter la langue du navigateur
    const browserLanguage = navigator.language.split('-')[0];
    return browserLanguage === 'en' ? 'en' : 'fr';
  });

  const toggleLanguage = () => {
    setLanguageState(prevLanguage => prevLanguage === 'fr' ? 'en' : 'fr');
  };

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  // Sauvegarder la langue dans localStorage
  useEffect(() => {
    localStorage.setItem('bestfkersintown_language', language);
  }, [language]);

  const value: LanguageContextType = {
    language,
    toggleLanguage,
    setLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
