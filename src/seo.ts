export interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const BASE_URL = 'https://standcrawl.pt';

export const seoConfig: Record<string, SEOMeta> = {
  '/': {
    title: 'StandCrawl — Gestão Inteligente de Stands Automóveis com IA',
    description:
      'Software de gestão para stands automóveis com IA. Pricing automático, prospeção multi-agente, CRM com WhatsApp e análise de mercado em tempo real. Made in Portugal.',
    canonical: BASE_URL,
    ogImage: `${BASE_URL}/og-image.png`,
  },
  '/empresa': {
    title: 'A Empresa — StandCrawl | Tecnologia Automóvel Portuguesa',
    description:
      'Conheça a StandCrawlAI — empresa portuguesa de tecnologia que transforma digitalmente stands automóveis com inteligência artificial, automação e análise de mercado.',
    canonical: `${BASE_URL}/empresa`,
  },
  '/sobre': {
    title: 'Sobre Nós — StandCrawl | Equipa e Tecnologia',
    description:
      'A equipa e tecnologia por detrás do StandCrawl. IA de verdade para o mercado automóvel português — scraping de 3 plataformas, pricing ML, agentes autónomos.',
    canonical: `${BASE_URL}/sobre`,
  },
  '/legal': {
    title: 'Informação Legal — StandCrawl',
    description:
      'Informação legal, identificação da entidade e documentos legais da StandCrawlAI.',
    canonical: `${BASE_URL}/legal`,
  },
  '/termos': {
    title: 'Termos e Condições — StandCrawl',
    description:
      'Termos e condições de utilização da plataforma StandCrawl para gestão de stands automóveis.',
    canonical: `${BASE_URL}/termos`,
  },
  '/privacidade': {
    title: 'Política de Privacidade — StandCrawl',
    description:
      'Política de privacidade e proteção de dados pessoais da StandCrawlAI. Conformidade com RGPD.',
    canonical: `${BASE_URL}/privacidade`,
  },
  '/cookies': {
    title: 'Política de Cookies — StandCrawl',
    description:
      'Política de cookies da plataforma StandCrawl — tipos de cookies, consentimento e gestão.',
    canonical: `${BASE_URL}/cookies`,
  },
};

export const ROUTES = Object.keys(seoConfig);

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'StandCrawlAI',
  url: BASE_URL,
  logo: `${BASE_URL}/logotipo.png`,
  description:
    'Empresa portuguesa de tecnologia focada em transformar digitalmente o setor de stands automóveis com IA.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PT',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@standcrawl.pt',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'StandCrawl',
  url: BASE_URL,
  description:
    'Plataforma de gestão inteligente para stands automóveis com IA',
  inLanguage: 'pt-PT',
};

export const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'StandCrawl',
  description:
    'Plataforma de gestão inteligente para stands automóveis com IA — pricing automático, prospeção multi-agente, CRM e análise de mercado.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '0',
    highPrice: '199',
    offerCount: '3',
  },
  featureList: [
    'Gestão de Stock',
    'Pricing Inteligente com ML',
    'Prospeção Automática com Agentes IA',
    'CRM com WhatsApp',
    'Market Explorer',
    'Dashboard Analítico',
  ],
};

export const sitemapMeta: Record<string, { changefreq: string; priority: string }> = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/empresa': { changefreq: 'monthly', priority: '0.7' },
  '/sobre': { changefreq: 'monthly', priority: '0.7' },
  '/legal': { changefreq: 'yearly', priority: '0.3' },
  '/termos': { changefreq: 'yearly', priority: '0.3' },
  '/privacidade': { changefreq: 'yearly', priority: '0.3' },
  '/cookies': { changefreq: 'yearly', priority: '0.3' },
};

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
