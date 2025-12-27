import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    welcome: "Welcome to our app",
                    description: "This is a multi-language site."
                }
            },
            lv: {
                translation: {
                    welcome: "Labdien",
                    description: "Paldies"
                }
            },
            ru: {
                translation: {
                    welcome: "Добрый день",
                    description: "Спасибо"
                }
            }
        },
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    });

export default i18n;
