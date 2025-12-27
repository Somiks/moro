import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { lang } = useParams<{ lang: string }>();
    const { i18n } = useTranslation();

    const changeLanguage = (newLang: string) => {
        i18n.changeLanguage(newLang);

        const currentPath = location.pathname;
        const newPath = currentPath.replace(`/${lang}`, `/${newLang}`);

        navigate(newPath);
    };

    return (
        <div className="language-switcher">
            <button
                disabled={lang === 'en'}
                onClick={() => changeLanguage('en')}
            >
                English
            </button>
            <button
                disabled={lang === 'lv'}
                onClick={() => changeLanguage('lv')}
            >
                Latviešu
            </button>
            <button
                disabled={lang === 'ru'}
                onClick={() => changeLanguage('ru')}
            >
                Русский
            </button>
        </div>
    );
};

export default LanguageSwitcher;
