import PageLayout from '../components/PageLayout';
import { Code, Brain, TrendingUp, Shield, Zap, Globe } from 'lucide-react';

const stack = [
  { icon: Code, name: 'Frontend', tech: 'React · TypeScript · Tailwind CSS' },
  { icon: Brain, name: 'IA & ML', tech: 'Google Gemini · scikit-learn · Agentes autónomos' },
  { icon: TrendingUp, name: 'Backend', tech: 'FastAPI · PostgreSQL · Redis · Celery' },
  { icon: Shield, name: 'Segurança', tech: 'Vault · Zero Trust · AES-256 · JWT' },
  { icon: Zap, name: 'Infraestrutura', tech: 'Docker · Cloudflare · CI/CD automatizado' },
  { icon: Globe, name: 'Integrações', tech: 'WhatsApp · Telegram · Email · Webhooks' },
];

export default function Sobre() {
  return (
    <PageLayout
      title="Sobre Nós"
      subtitle="A equipa e a tecnologia por detrás do StandCrawl."
    >
      <h2>A Nossa História</h2>
      <p>
        O StandCrawl nasceu de uma observação simples: os stands automóveis em Portugal passam horas
        a pesquisar manualmente em múltiplas plataformas, a fazer cálculos em Excel e a tomar
        decisões de compra baseadas mais em intuição do que em dados.
      </p>
      <p>
        Começámos por construir um scraper que agregava anúncios de várias plataformas. Rapidamente
        percebemos que a verdadeira oportunidade estava em ir mais longe — não só agregar dados, mas
        transformá-los em inteligência acionável. Assim nasceu o sistema multi-agente de aquisição,
        o pricing inteligente com machine learning e toda a plataforma que hoje é o StandCrawl.
      </p>

      <h2>O Que Nos Diferencia</h2>
      <div className="info-card">
        <h3>Feito para Portugal</h3>
        <p>
          Não somos uma tradução de um produto americano. O StandCrawl foi construído de raiz para o
          mercado automóvel português — com integração nativa ao StandVirtual, OLX e PiscaPisca,
          preços em euros, legislação portuguesa e comunicação em português.
        </p>
      </div>
      <div className="info-card">
        <h3>IA de Verdade, Não Marketing</h3>
        <p>
          Quando dizemos IA, falamos de 4 agentes autónomos que trabalham 24/7, modelos de machine
          learning treinados com dados reais do mercado português, e análise com LLMs de última
          geração. Cada feature é validada com dados reais e feedback de stands.
        </p>
      </div>
      <div className="info-card">
        <h3>Segurança sem Compromissos</h3>
        <p>
          Os dados dos nossos clientes são tratados com encriptação AES-256, acesso via Cloudflare
          Zero Trust, gestão de segredos com HashiCorp Vault e backups automáticos diários. Não
          vendemos nem partilhamos dados com terceiros — nunca.
        </p>
      </div>

      <h2>A Nossa Stack Tecnológica</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {stack.map((s) => (
          <div key={s.name} className="info-card flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
              <s.icon size={20} className="text-orange" />
            </div>
            <div>
              <h3 className="!mt-0 !mb-1">{s.name}</h3>
              <p className="!mb-0 text-sm">{s.tech}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Números que Importam</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        {[
          { value: '3', label: 'Plataformas monitorizadas' },
          { value: '4', label: 'Agentes IA autónomos' },
          { value: '2h', label: 'Ciclo de scraping' },
          { value: '24/7', label: 'Monitorização contínua' },
        ].map((stat) => (
          <div key={stat.label} className="info-card text-center">
            <div className="text-2xl font-bold text-orange mb-1">{stat.value}</div>
            <p className="!mb-0 text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      <h2>A Nossa Abordagem</h2>
      <p>
        Acreditamos em <strong>produto primeiro, marketing depois</strong>. Cada funcionalidade é
        testada com utilizadores reais antes de ser lançada. O nosso roadmap é guiado pelo feedback
        direto dos nossos clientes — não por tendências de mercado ou pressão de investidores.
      </p>
      <p>
        Trabalhamos com ciclos curtos de desenvolvimento, deploy contínuo e uma cultura de "ship
        fast, iterate faster". Os nossos clientes recebem melhorias semanais, não atualizações
        trimestrais.
      </p>

      <h2>Contacto</h2>
      <p>
        Tem perguntas, sugestões ou quer saber mais? Entre em contacto connosco através do
        formulário na <a href="/#contacto">página principal</a> ou envie um email para{' '}
        <strong>info@standcrawl.pt</strong>.
      </p>
    </PageLayout>
  );
}
