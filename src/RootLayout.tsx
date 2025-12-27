import {useParams, Outlet, Link} from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const RootLayout = () => {
    const { lang } = useParams();
    const { i18n } = useTranslation();

    useEffect(() => {
        // List of supported languages
        const supportedLangs = ['en', 'es', 'fr'];

        if (supportedLangs.includes(lang)) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    return (
        <div>
            <nav>
                {/* Links must now include the current language prefix */}
                <Link to={`/${lang}`}>Home</Link> |
                <Link to={`/${lang}/about`}>About</Link>
            </nav>

            {/* Outlet renders the child routes (Home/About) */}
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
