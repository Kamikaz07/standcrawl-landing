import PageLayout from '../components/PageLayout';
import { Scale, FileText, Shield, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const legalPages = [
  {
    icon: FileText,
    title: 'Termos & Condições',
    description: 'Condições gerais de utilização da plataforma StandCrawl, incluindo direitos, obrigações e limitações de responsabilidade.',
    href: '/termos',
  },
  {
    icon: Shield,
    title: 'Política de Privacidade',
    description: 'Como recolhemos, utilizamos, armazenamos e protegemos os seus dados pessoais, em conformidade com o RGPD.',
    href: '/privacidade',
  },
  {
    icon: Cookie,
    title: 'Política de Cookies',
    description: 'Informações sobre os cookies que utilizamos, as suas finalidades e como os pode gerir ou desativar.',
    href: '/cookies',
  },
];

export default function Legal() {
  return (
    <PageLayout
      title="Informação Legal"
      subtitle="Transparência e conformidade com a legislação portuguesa e europeia."
    >
      <div className="info-card mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
            <Scale size={20} className="text-orange" />
          </div>
          <h3 className="!mt-0 !mb-0">Compromisso Legal</h3>
        </div>
        <p>
          A <strong>StandCrawlAI</strong> opera em total conformidade com a legislação portuguesa e
          europeia aplicável, incluindo o Regulamento Geral sobre a Proteção de Dados (RGPD), a Lei
          de Comércio Eletrónico e a Lei das Comunicações Eletrónicas.
        </p>
        <p className="!mb-0">
          Acreditamos que a transparência é fundamental para construir confiança. Nesta secção
          encontra toda a informação legal relativa à utilização da nossa plataforma.
        </p>
      </div>

      <h2>Documentos Legais</h2>
      <div className="grid gap-4 mt-6">
        {legalPages.map((page) => (
          <Link key={page.href} to={page.href} className="block !no-underline">
            <div className="info-card hover:border-orange/20 transition-colors cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                  <page.icon size={20} className="text-orange" />
                </div>
                <div>
                  <h3 className="!mt-0 !mb-1 text-off-white">{page.title}</h3>
                  <p className="!mb-0 text-sm">{page.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2>Identificação da Entidade</h2>
      <div className="info-card">
        <ul className="!mb-0">
          <li><strong>Denominação:</strong> StandCrawlAI</li>
          <li><strong>Sede:</strong> Portugal</li>
          <li><strong>Email:</strong> info@standcrawl.pt</li>
          <li><strong>Website:</strong> standcrawl.pt</li>
        </ul>
      </div>

      <h2>Resolução de Litígios</h2>
      <p>
        Em caso de litígio, o consumidor pode recorrer à plataforma europeia de resolução de
        litígios em linha (RLL), disponível em{' '}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          ec.europa.eu/consumers/odr
        </a>. Pode também recorrer às entidades de resolução alternativa de litígios de consumo (RAL)
        previstas na legislação portuguesa.
      </p>

      <h2>Legislação Aplicável</h2>
      <p>
        Toda a relação entre a StandCrawlAI e os seus utilizadores rege-se pela legislação
        portuguesa. Para qualquer questão judicial, serão competentes os tribunais da comarca
        portuguesa aplicável.
      </p>
    </PageLayout>
  );
}
