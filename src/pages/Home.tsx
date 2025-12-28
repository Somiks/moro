import React from 'react';
import { useTranslation } from 'react-i18next';
import heroImage from '../assets/hero-home.png'; // Ensure this image exists

const Home: React.FC = () => {
    const { t } = useTranslation();

    // Access the services array from translations
    const services = t('services', { returnObjects: true }) as { name: string; description: string; price: string }[];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center bg-no-repeat h-125 flex items-center justify-center text-white text-center rounded-b-3xl shadow-lg"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-40 rounded-b-3xl"></div>
                <div className="relative z-10 px-6 max-w-2xl">
                    <h1 className="text-6xl font-extrabold mb-4 animate-fade-in-up">
                        {t('home_welcome')}
                    </h1>
                    <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up delay-100">
                        {t('home_slogan')}
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
                    {t('our_services')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-3">{service.name}</h3>
                                <p className="text-gray-600 text-lg mb-4">{service.description}</p>
                            </div>
                            <div className="text-right">
                                <span className="text-brand text-4xl font-extrabold">{service.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Optional: Add a call to action or another section */}
            <section className="py-16 text-center bg-blue-50">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to feel better?</h2>
                <p className="text-xl text-gray-700 mb-8">Book an appointment with Elīna Some today.</p>
                <button className="px-10 py-4 bg-gray-900 text-white font-bold rounded-full text-lg shadow-xl hover:bg-brand transition">
                    Book Now
                </button>
            </section>
        </div>
    );
};

export default Home;
