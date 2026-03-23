import { Link } from 'react-router-dom';

const footerLinks = {
  Produto: [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Preços', href: '#precos' },
    { label: 'FAQ', href: '#faq' },
  ],
  Empresa: [
    { label: 'Sobre nós', href: '/sobre', isRoute: true },
    { label: 'Empresa', href: '/empresa', isRoute: true },
  ],
  Legal: [
    { label: 'Legal', href: '/legal', isRoute: true },
    { label: 'Termos & Condições', href: '/termos', isRoute: true },
    { label: 'Privacidade', href: '/privacidade', isRoute: true },
    { label: 'Cookies', href: '/cookies', isRoute: true },
  ],
} as const;

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-white/5 bg-navy-dark/80 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logotipo.png" alt="StandCrawl" className="h-7 w-auto" loading="lazy" width={28} height={28} />
              <span className="text-lg font-bold text-off-white">StandCrawl</span>
            </div>
            <p className="text-sm text-muted max-w-xs">
              Gestão inteligente de stands automóveis com IA. Made in Portugal.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-off-white mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {'isRoute' in link && link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-sm text-muted hover:text-orange transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted hover:text-orange transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} StandCrawlAI. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted">Made in Portugal</p>
        </div>
      </div>
    </footer>
  );
}
