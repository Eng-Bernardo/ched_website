import React, { createContext, useState, useContext } from 'react';
import { translations } from '@/utils/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState('EN');

    const t = translations[currentLang];

    const setLanguage = (langCode) => {
        if (translations[langCode]) {
            setCurrentLang(langCode);
        }
    };

    return (
        <LanguageContext.Provider value={{ currentLang, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
