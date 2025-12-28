import React, {useEffect, useState} from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import logoUrl from './assets/logo.svg';
import {useTranslation} from "react-i18next";

const RootLayout: React.FC = () => {
    const { lang } = useParams<{ lang: string }>();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Navigation Bar */}
            <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">

                        {/* Left: Logo */}
                        <div className="shrink-0 flex items-center">
                            <Link to={`/${lang}`} className="flex items-center gap-3">
                                <img
                                    src={logoUrl}
                                    className="h-25 w-auto"
                                    alt="Moro logo"
                                />
                            </Link>
                        </div>

                        {/* Right: Desktop Nav & Lang */}
                        <div className="hidden md:flex items-center space-x-8">
                            <nav className="flex space-x-6 text-sm font-medium">
                                <Link to={`/${lang}`} className="hover:text-brand transition">Home</Link>
                                <Link to={`/${lang}/about`} className="hover:text-brand transition">About</Link>
                            </nav>
                            <div className="h-6 w-px bg-gray-300 mx-2"></div>
                            <LanguageSwitcher />
                        </div>

                        {/* Mobile: Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-600 hover:text-brand focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-4">
                        <nav className="flex flex-col space-y-4 text-base font-medium">
                            <Link onClick={() => setIsMenuOpen(false)} to={`/${lang}`}>Home</Link>
                            <Link onClick={() => setIsMenuOpen(false)} to={`/${lang}/about`}>About</Link>
                        </nav>
                        <div className="pt-4 border-t border-gray-100">
                            <LanguageSwitcher />
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
