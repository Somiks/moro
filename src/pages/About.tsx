import React from 'react';
import { useTranslation } from 'react-i18next';
import authorImg from '../assets/author.png';
import SEO from '../components/SEO';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="max-w-5xl mx-auto my-10 px-4">
            <SEO titleKey="seo_about_title" descriptionKey="seo_about_description" />
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch border border-gray-100">

                {/* Profile Image Section */}
                <div className="md:w-2/5 bg-blue-50 flex items-center justify-center p-10">
                    <div className="relative">
                        <img
                            className="h-72 w-72 object-cover rounded-2xl shadow-2xl ring-8 ring-white"
                            src={authorImg}
                            alt="Elīna Some"
                        />
                        {/* Decorative element */}
                        <div className="absolute -bottom-4 -right-4 bg-brand text-white p-4 rounded-xl shadow-lg">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
          <span className="text-brand font-bold uppercase tracking-widest text-sm mb-2">
            {t('role')}
          </span>
                    <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
                        {t('name')}
                    </h1>
                    <p className="text-gray-600 text-xl leading-relaxed mb-8">
                        {t('description')}
                    </p>

                    <div className="space-y-6">
                        {/* Phone Link */}
                        <a
                            href="tel:+37127404368"
                            className="inline-flex items-center gap-4 text-gray-800 hover:text-brand transition-colors group"
                        >
                            <div className="bg-blue-100 p-3 rounded-full group-hover:bg-brand group-hover:text-white transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold tracking-tight">+371 27 404 368</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
