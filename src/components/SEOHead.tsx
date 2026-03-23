import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '../seo';

interface Props {
  jsonLd?: object | object[];
}

export default function SEOHead({ jsonLd }: Props) {
  const { pathname } = useLocation();
  const meta = seoConfig[pathname] ?? seoConfig['/']!;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="StandCrawl" />
      <meta property="og:locale" content="pt_PT" />
      {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />

      {/* JSON-LD Structured Data */}
      {jsonLd &&
        (Array.isArray(jsonLd)
          ? jsonLd.map((ld, i) => (
              <script key={i} type="application/ld+json">
                {JSON.stringify(ld)}
              </script>
            ))
          : (
              <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
              </script>
            ))}
    </Helmet>
  );
}
