import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link, useParams} from 'react-router-dom';
import heroImage from '../assets/hero-home.png';
import SEO from '../components/SEO';

const Home: React.FC = () => {
    const {t} = useTranslation();
    const {lang} = useParams<{ lang: string }>();

    const services = t('services', {returnObjects: true}) as {
        name: string;
        price: string;
        duration: string;
    }[];

    return (
        <div className="min-h-screen bg-white">
            <SEO titleKey="seo_home_title" descriptionKey="seo_home_description" />
            {/* Hero Section */}
            <section className="relative h-[35vh] flex items-center justify-center text-white overflow-hidden">
                <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.3em] mb-2">
                        {t('home_welcome')}
                    </h1>
                    <p className="text-sm md:text-base font-light tracking-widest uppercase opacity-80">
                        {t('home_slogan')}
                    </p>
                </div>
            </section>

            <section className="w-full py-10 md:px-6">
                <div className="w-full">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50/50 transition-colors group"
                        >
                            {/* Left: Service Name (Smaller Font) */}
                            <div className="flex-1">
                <span
                    className="text-base md:text-lg font-medium text-gray-700 transition-colors">
                  {service.name}
                </span>
                            </div>

                            {/* Right: Duration & Price */}
                            <div className="flex items-center gap-8 text-right">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-tighter tabular-nums">
                  {service.duration}
                </span>
                                <span className="text-lg md:text-xl font-bold text-brand w-20">
                  {service.price}
                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        to={`/${lang}/about`}
                        className="inline-block border-2 border-brand text-brand hover:bg-brand hover:text-white px-10 py-3 rounded-full font-bold text-sm transition-all uppercase tracking-widest active:scale-95"
                    >
                        {t('contact_me')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
