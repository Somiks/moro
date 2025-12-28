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
                    home_welcome: "Welcome",
                    home_slogan: "Your well-being is our priority.",
                    our_services: "Our Services",
                    services: [
                        {
                            name: "Back Massage (60 min)",
                            description: "Relaxing and therapeutic massage for back and neck muscles.",
                            price: "60 EUR"
                        },
                        {
                            name: "Full Body Massage (90 min)",
                            description: "Comprehensive relaxation for your entire body.",
                            price: "90 EUR"
                        },
                        {
                            name: "Sports Massage (45 min)",
                            description: "Targeted deep tissue work for muscle recovery and performance.",
                            price: "55 EUR"
                        },
                        {
                            name: "Aromatherapy Session (60 min)",
                            description: "Custom essential oil blend for stress relief and mood enhancement.",
                            price: "70 EUR"
                        }
                    ]
                }
            },
            lv: {
                translation: {
                    specialist_title: "Iepazīstieties ar mūsu speciālistu",
                    name: "Elīna Some",
                    role: "Sertificēta speciāliste",
                    description: "Nodrošina profesionālu un personalizētu aprūpi, koncentrējoties uz individuāliem veselības mērķiem un mūsdienīgu praksi.",
                    contact_me: "Sazināties",
                    home_welcome: "Laipni lūgti",
                    home_slogan: "Jūsu labklājība ir mūsu prioritāte.",
                    our_services: "Mūsu pakalpojumi",
                    services: [
                        {
                            name: "Muguras masāža (60 min)",
                            description: "Relaksējoša un terapeitiska masāža muguras un kakla muskuļiem.",
                            price: "60 EUR"
                        },
                        {
                            name: "Pilnas ķermeņa masāža (90 min)",
                            description: "Visaptveroša relaksācija visam jūsu ķermenim.",
                            price: "90 EUR"
                        },
                        {
                            name: "Sporta masāža (45 min)",
                            description: "Mērķtiecīgs dziļo audu darbs muskuļu atjaunošanai un veiktspējai.",
                            price: "55 EUR"
                        },
                        {
                            name: "Aromterapijas sesija (60 min)",
                            description: "Pielāgots ēterisko eļļu maisījums stresa mazināšanai un garastāvokļa uzlabošanai.",
                            price: "70 EUR"
                        }
                    ]
                }
            },
            ru: {
                translation: {
                    specialist_title: "Познакомьтесь с нашим специалистом",
                    name: "Elīna Some",
                    role: "Сертифицированный специалист",
                    description: "Профессиональный и персонализированный подход к каждому клиенту, уделяя внимание индивидуальным целям здоровья.",
                    contact_me: "Связаться со мной",
                    home_welcome: "Добро пожаловать",
                    home_slogan: "Ваше благополучие — наш приоритет.",
                    our_services: "Наши услуги",
                    services: [
                        {
                            name: "Массаж спины (60 мин)",
                            description: "Расслабляющий и терапевтический массаж мышц спины и шеи.",
                            price: "60 EUR"
                        },
                        {
                            name: "Массаж всего тела (90 мин)",
                            description: "Комплексное расслабление для всего тела.",
                            price: "90 EUR"
                        },
                        {
                            name: "Спортивный массаж (45 мин)",
                            description: "Целенаправленная глубокая проработка тканей для восстановления мышц и повышения производительности.",
                            price: "55 EUR"
                        },
                        {
                            name: "Сеанс ароматерапии (60 мин)",
                            description: "Индивидуальная смесь эфирных масел для снятия стресса и улучшения настроения.",
                            price: "70 EUR"
                        }
                    ]
                }
            }
        },
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    });
