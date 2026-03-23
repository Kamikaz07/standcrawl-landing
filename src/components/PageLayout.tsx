import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';
import SEOHead from './SEOHead';
import { breadcrumbJsonLd } from '../seo';

interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, children }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const breadcrumb = breadcrumbJsonLd([
    { name: 'StandCrawl', url: 'https://standcrawl.pt' },
    { name: title, url: `https://standcrawl.pt${pathname}` },
  ]);

  return (
    <>
      <SEOHead jsonLd={breadcrumb} />
      {/* Minimal nav */}
      <nav aria-label="Navegação secundária" className="fixed top-0 left-0 right-0 z-50 bg-navy/80 glass border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/favicon.svg" alt="StandCrawl" className="h-8 w-auto" width={32} height={32} fetchPriority="high" />
              <span className="text-lg font-bold text-off-white">StandCrawl</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm text-muted hover:text-orange transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero header */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
            {subtitle && (
              <p className="text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose-custom">{children}</div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
