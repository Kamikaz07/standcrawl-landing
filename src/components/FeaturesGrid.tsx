import { motion } from 'framer-motion';
import { Car, TrendingUp, Search, Bot, Users, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Car,
    title: 'Gestão de Stock',
    description: 'Inventário completo com tracking de aging, alertas automáticos para veículos parados >60 dias, e histórico de preços.',
  },
  {
    icon: TrendingUp,
    title: 'Pricing Inteligente',
    description: 'Recomendações de preço com Machine Learning e análise profunda com LLM. Bom base nos dados de mercado e características do veículo.',
  },
  {
    icon: Search,
    title: 'Market Explorer',
    description: 'Pesquise o mercado em tempo real. Scraping de StandVirtual, OLX e PiscaPisca com progresso ao vivo via WebSocket.',
  },
  {
    icon: Bot,
    title: 'Agente de Aquisições',
    description: '4 agentes autónomos (Scout → Analyst → Valuator → Recommender) que encontram, analisam e recomendam compras 24/7.',
  },
  {
    icon: Users,
    title: 'CRM & Leads',
    description: 'Pipeline completo de vendas: novo → contactado → qualificado → test drive → negociação → fechado. Scoring com IA.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integrado',
    description: 'Comunicação bidirecional, templates automáticos, lembretes de agendamento e criação automática de leads.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function FeaturesGrid() {
  return (
    <section id="funcionalidades" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tudo o que precisa para gerir o seu stand.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Do scraping de mercado à venda final, o StandCrawl automatiza cada passo.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group rounded-2xl border border-white/5 bg-navy-dark/50 p-6 hover:-translate-y-1 hover:shadow-lg hover:border-orange/20 transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange/10 text-orange group-hover:bg-orange/20 transition-colors">
                <f.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-off-white">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
