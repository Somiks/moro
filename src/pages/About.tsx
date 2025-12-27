import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('description')}</h1>
            <p>Learn more about our multi-language application here.</p>
        </div>
    );
};

export default About;
