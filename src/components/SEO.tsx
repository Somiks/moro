import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    titleKey: string;
    descriptionKey: string;
    type?: string;
    name?: string;
}

const SEO: React.FC<SEOProps> = ({ titleKey, descriptionKey, type = 'website', name = 'Moro' }) => {
    const { t } = useTranslation();

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{t(titleKey)}</title>
            <meta name='description' content={t(descriptionKey)} />

            {/* End standard metadata tags */}
            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={t(titleKey)} />
            <meta property="og:description" content={t(descriptionKey)} />
            {/* End Facebook tags */}
            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={t(titleKey)} />
            <meta name="twitter:description" content={t(descriptionKey)} />
            {/* End Twitter tags */}
        </Helmet>
    );
};

export default SEO;
