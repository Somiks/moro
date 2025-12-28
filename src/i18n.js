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
                    home_welcome: "Wellness & Balance",
                    home_slogan: "Professional Care by Elīna Some",
                    contact_me: "Book an Appointment",
                    role: "Certified Specialist",
                    name: "Elīna Some",
                    description: "Providing professional and personalized care with a focus on individual health goals.",
                    services: [
                        { name: "Back Massage", duration: "30 min", price: "30 EUR" },
                        { name: "Full Body Massage", duration: "60 min", price: "55 EUR" },
                        { name: "Deep Tissue Massage", duration: "90 min", price: "75 EUR" },
                        { name: "Neck & Shoulder Massage", duration: "20 min", price: "20 EUR" },
                        { name: "Hot Stone Therapy", duration: "60 min", price: "65 EUR" }
                    ]
                }
            },
            lv: {
                translation: {
                    home_welcome: "Labsajūta un Līdzsvars",
                    home_slogan: "Profesionāla aprūpe – Elīna Some",
                    contact_me: "Pieteikt vizīti",
                    role: "Sertificēta speciāliste",
                    name: "Elīna Some",
                    description: "Nodrošina profesionālu un personalizētu aprūpi, koncentrējoties uz individuāliem mērķiem.",
                    services: [
                        { name: "Muguras masāža", duration: "30 min", price: "30 EUR" },
                        { name: "Pilna ķermeņa masāža", duration: "60 min", price: "55 EUR" },
                        { name: "Dziļo audu masāža", duration: "90 min", price: "75 EUR" },
                        { name: "Apkakles zonas masāža", duration: "20 min", price: "20 EUR" },
                        { name: "Karsto akmeņu terapija", duration: "60 min", price: "65 EUR" }
                    ]
                }
            },
            ru: {
                translation: {
                    home_welcome: "Здоровье и Баланс",
                    home_slogan: "Профессиональный уход от Элины Соме",
                    contact_me: "Записаться на прием",
                    role: "Сертифицированный специалист",
                    name: "Элина Соме",
                    description: "Профессиональный и персонализированный подход к каждому клиенту.",
                    services: [
                        { name: "Массаж спины", duration: "30 мин", price: "30 EUR" },
                        { name: "Массаж всего тела", duration: "60 мин", price: "55 EUR" },
                        { name: "Глубокий массаж тканей", duration: "90 мин", price: "75 EUR" },
                        { name: "Массаж воротниковой зоны", duration: "20 мин", price: "20 EUR" },
                        { name: "Терапия горячими камнями", duration: "60 мин", price: "65 EUR" }
                    ]
                }
            }
        },
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    });
