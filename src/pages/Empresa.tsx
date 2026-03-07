import PageLayout from '../components/PageLayout';
import { Building2, Target, Lightbulb, Heart, MapPin, Calendar, Users, Rocket } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Usamos inteligência artificial de última geração para resolver problemas reais do setor automóvel.',
  },
  {
    icon: Heart,
    title: 'Paixão',
    description: 'Somos apaixonados por automóveis e tecnologia. Cada feature é pensada para quem vive o setor.',
  },
  {
    icon: Target,
    title: 'Impacto',
    description: 'Cada decisão é guiada pelo impacto direto que tem na rentabilidade dos nossos clientes.',
  },
  {
    icon: Users,
    title: 'Proximidade',
    description: 'Trabalhamos lado a lado com os nossos clientes. O vosso feedback molda o nosso roadmap.',
  },
];

const milestones = [
  { year: '2024', event: 'Início do projeto — primeira versão do scraper de plataformas automóveis' },
  { year: '2024', event: 'Lançamento do sistema multi-agente de aquisição com IA' },
  { year: '2025', event: 'Integração WhatsApp bidireccional e CRM completo' },
  { year: '2025', event: 'Sistema de pricing inteligente com machine learning' },
  { year: '2026', event: 'Lançamento público da plataforma StandCrawl' },
];

export default function Empresa() {
  return (
    <PageLayout
      title="A Empresa"
      subtitle="Tecnologia portuguesa a revolucionar o setor automóvel."
    >
      <div className="info-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
            <Building2 size={20} className="text-orange" />
          </div>
          <h3 className="!mt-0 !mb-0">Quem Somos</h3>
        </div>
        <p>
          A <strong>StandCrawlAI</strong> é uma empresa de tecnologia portuguesa focada em transformar
          digitalmente o setor de stands automóveis. Combinamos inteligência artificial avançada,
          automação e design intuitivo para criar ferramentas que realmente fazem a diferença no
          dia-a-dia de quem gere um stand.
        </p>
        <p>
          Nascemos da frustração de ver um setor inteiro preso a processos manuais, folhas de Excel
          e decisões baseadas em intuição. Acreditamos que cada stand — grande ou pequeno — merece
          ter acesso às mesmas ferramentas tecnológicas que as grandes concessionárias utilizam.
        </p>
      </div>

      <h2>A Nossa Missão</h2>
      <p>
        Democratizar o acesso à inteligência artificial e automação no setor automóvel português.
        Queremos que cada stand tenha um copiloto digital — que encontre oportunidades, analise o
        mercado, defina preços justos e comunique com clientes de forma automática e personalizada.
      </p>

      <h2>A Nossa Visão</h2>
      <p>
        Ser a plataforma de referência para gestão inteligente de stands automóveis na Península
        Ibérica, expandindo para toda a Europa. Imaginamos um futuro onde cada decisão de compra,
        venda e pricing é informada por dados em tempo real e modelos de IA treinados
        especificamente para o mercado automóvel.
      </p>

      <h2>Os Nossos Valores</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {values.map((v) => (
          <div key={v.title} className="info-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center">
                <v.icon size={18} className="text-orange" />
              </div>
              <h3 className="!mt-0 !mb-0">{v.title}</h3>
            </div>
            <p className="!mb-0">{v.description}</p>
          </div>
        ))}
      </div>

      <h2>Cronologia</h2>
      <div className="relative mt-6 mb-8">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/5" />
        {milestones.map((m, i) => (
          <div key={i} className="relative flex gap-6 mb-6 last:mb-0">
            <div className="relative z-10 w-8 h-8 rounded-full bg-navy-dark border border-orange/30 flex items-center justify-center shrink-0">
              <Calendar size={14} className="text-orange" />
            </div>
            <div className="pt-1">
              <span className="text-xs font-bold text-orange">{m.year}</span>
              <p className="!mb-0 text-sm">{m.event}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Onde Estamos</h2>
      <div className="info-card">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center">
            <MapPin size={18} className="text-orange" />
          </div>
          <h3 className="!mt-0 !mb-0">Portugal</h3>
        </div>
        <p className="!mb-0">
          100% remoto, 100% português. A nossa equipa trabalha distribuída por Portugal, com uma
          cultura de autonomia, responsabilidade e foco em resultados.
        </p>
      </div>

      <h2>O Futuro</h2>
      <div className="info-card">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-success/10 flex items-center justify-center">
            <Rocket size={18} className="text-success" />
          </div>
          <h3 className="!mt-0 !mb-0">Roadmap 2026</h3>
        </div>
        <ul className="!mb-0">
          <li>Expansão para o mercado espanhol</li>
          <li>App móvel nativa iOS e Android</li>
          <li>Marketplace integrado entre stands</li>
          <li>API pública para integrações de terceiros</li>
          <li>Modelos de IA específicos por região e segmento</li>
        </ul>
      </div>
    </PageLayout>
  );
}
