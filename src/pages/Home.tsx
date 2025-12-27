import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            {/* 'welcome' is the key defined in your i18n.ts file */}
            <h1>{t('welcome')}</h1>
            <p>This is the home page content.</p>
        </div>
    );
};

export default Home;
