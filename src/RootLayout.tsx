import React, { useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";

type RouteParams = {
    lang: string;
};

const RootLayout: React.FC = () => {
    const { lang } = useParams<RouteParams>();
    const { i18n } = useTranslation();

    useEffect(() => {
        const supportedLangs = ['en', 'lv', 'ru'];

        if (lang && supportedLangs.includes(lang)) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    return (
        <div>
            <nav>
                <Link style={{ marginRight: '10px' }} to={`/${lang}`}>Home</Link>
                <Link to={`/${lang}/about`}>About</Link>
            </nav>
            <LanguageSwitcher />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
