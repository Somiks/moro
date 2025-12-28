import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const LanguageSwitcher: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { lang } = useParams<{ lang: string }>();

    const languages = [
        { code: 'lv', label: 'LV' },
        { code: 'en', label: 'EN' },
        { code: 'ru', label: 'RU' }
    ];

    const handleLangChange = (newLang: string) => {
        // Get the current path segments (e.g., ["", "en", "about"])
        const pathSegments = location.pathname.split('/');

        // Replace the language segment (index 1) with the new language
        pathSegments[1] = newLang;

        // Join them back together
        const newPath = pathSegments.join('/');

        navigate(newPath);
    };

    return (
        <div className="flex gap-2">
            {languages.map((l) => (
                <button
                    key={l.code}
                    onClick={() => handleLangChange(l.code)}
                    className={`px-2 py-1 text-xs font-bold rounded border transition-all
            ${lang === l.code
                        ? 'bg-brand text-white border-brand'
                        : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                    }`}
                >
                    {l.label}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
