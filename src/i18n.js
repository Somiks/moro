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
                    specialist_title: "Meet our Specialist",
                    name: "Elīna Some",
                    role: "Certified Specialist",
                    description: "Providing professional and personalized care with a focus on individual health goals and modern practices.",
                    contact_me: "Get in touch"
                }
            },
            lv: {
                translation: {
                    specialist_title: "Iepazīstieties ar mūsu speciālistu",
                    name: "Elīna Some",
                    role: "Sertificēta speciāliste",
                    description: "Nodrošina profesionālu un personalizētu aprūpi, koncentrējoties uz individuāliem veselības mērķiem un mūsdienīgu praksi.",
                    contact_me: "Sazināties"
                }
            },
            ru: {
                translation: {
                    specialist_title: "Познакомьтесь с нашим специалистом",
                    name: "Elīna Some",
                    role: "Сертифицированный специалист",
                    description: "Профессиональный и персонализированный подход к каждому клиенту, уделяя внимание индивидуальным целям здоровья.",
                    contact_me: "Связаться со мной"
                }
            }
        },
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    });
