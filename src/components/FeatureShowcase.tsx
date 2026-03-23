import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Bot, Search, Users, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
}

const tabs: Tab[] = [
  {
    id: 'pricing',
    label: 'Pricing IA',
    icon: TrendingUp,
    title: 'Pricing com IA',
    description: 'LLM analisa 50k+ preços do mercado para posicionar o seu veículo no percentil ideal.',
    bullets: [
      'Recomendação ML com XGBoost',
      'Análise profunda com Gemini',
      'Ajuste automático por aging',
      'Gestão de vendas nos portais',
    ],
  },
  {
    id: 'acquisitions',
    label: 'Aquisições',
    icon: Bot,
    title: 'Aquisições Inteligentes',
    description: '4 agentes autónomos analisam o mercado 24/7 para encontrar as melhores oportunidades de compra.',
    bullets: [
      'Scout varre 3 plataformas',
      'Analyst calcula deal scores',
      'Valuator avalia com IA',
      'Recommender sugere compras',
    ],
  },
  {
    id: 'market',
    label: 'Market Explorer',
    icon: Search,
    title: 'Exploração de Mercado',
    description: 'Pesquise qualquer veículo no mercado português. Dados de 3 plataformas em tempo real.',
    bullets: [
      'Scraping multi-plataforma',
      'Progresso em tempo real',
      'Histórico de pesquisas',
      'Filtros avançados',
    ],
  },
  {
    id: 'crm',
    label: 'CRM',
    icon: Users,
    title: 'CRM & Pipeline de Vendas',
    description: 'Pipeline visual completo do primeiro contacto ao fecho de venda, com scoring por IA.',
    bullets: [
      'Kanban com drag & drop',
      'Lead scoring inteligente',
      'WhatsApp integrado',
      'Relatórios automáticos',
    ],
  },
];

export default function FeatureShowcase() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const [paused, setPaused] = useState(false);
  const active = tabs.find((t) => t.id === activeId)!;

  const next = useCallback(() => {
    setActiveId((prev) => {
      const idx = tabs.findIndex((t) => t.id === prev);
      return tabs[(idx + 1) % tabs.length].id;
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="py-24 sm:py-32 bg-navy-dark/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeId === tab.id
                  ? 'bg-orange/10 text-orange border border-orange/20'
                  : 'text-muted hover:text-off-white border border-transparent'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="grid lg:grid-cols-2 gap-12 items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Mockup */}
            <div className="perspective-1000 relative order-2 lg:order-1">
              <div className="absolute -inset-6 bg-orange/5 blur-2xl rounded-full pointer-events-none" />
              <div className="relative rounded-xl border border-white/10 bg-navy-dark shadow-xl overflow-hidden tilt-3d">
                <div className="flex items-center gap-2 px-4 py-2 bg-navy-medium/50 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-6">
                    <div className="rounded bg-navy/60 px-2 py-0.5 text-[11px] text-muted text-center font-mono">
                      standcrawl/{active.id}
                    </div>
                  </div>
                </div>
                <div className="aspect-[16/10] bg-gradient-to-br from-navy to-navy-dark p-4 overflow-hidden">
                  {active.id === 'pricing' && (
                    <div className="space-y-2.5">
                      <div className="text-[9px] font-medium text-off-white">Pricing IA — BMW 320d 2021</div>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[{ l: 'ML Recomenda', v: '€27.800', c: 'text-success' }, { l: 'Preço Atual', v: '€28.500', c: 'text-off-white' }, { l: 'Mercado', v: '€28.200', c: 'text-orange' }].map((k) => (
                          <div key={k.l} className="rounded bg-navy-medium/30 border border-white/5 p-2 text-center">
                            <div className="text-[7px] text-muted">{k.l}</div>
                            <div className={`text-xs font-bold ${k.c}`}>{k.v}</div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded bg-navy-medium/20 border border-white/5 p-2">
                        <div className="text-[7px] text-muted mb-1">Distribuição de Preços</div>
                        <div className="h-10 rounded bg-gradient-to-r from-success/20 via-orange/25 to-red-500/20 relative">
                          <div className="absolute top-0 bottom-0 left-[45%] w-0.5 bg-orange" />
                          <div className="absolute -top-2 left-[45%] -translate-x-1/2 text-[7px] text-orange font-bold">P50</div>
                        </div>
                      </div>
                      <div className="rounded bg-success/5 border border-success/20 p-2">
                        <div className="text-[7px] text-success flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-success/20 shrink-0" />
                          Gemini: Preço bem posicionado. Considere reduzir €700 para acelerar venda.
                        </div>
                      </div>
                    </div>
                  )}
                  {active.id === 'acquisitions' && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="text-[9px] font-medium text-off-white">Pipeline de Aquisição</div>
                        <div className="flex gap-1">
                          {[{ n: 'Scout', c: '#3b82f6' }, { n: 'Analyst', c: '#8b5cf6' }, { n: 'Valuator', c: '#f77f00' }, { n: 'Rec', c: '#22c55e' }].map((a) => (
                            <div key={a.n} className="px-1.5 py-0.5 rounded text-[6px] font-medium" style={{ backgroundColor: a.c + '20', color: a.c }}>{a.n}</div>
                          ))}
                        </div>
                      </div>
                      {[
                        { c: 'BMW 520d', p: '€19.900', s: 98, t: 'Top Pick' },
                        { c: 'Audi A4 Avant', p: '€17.500', s: 92, t: 'Oportunidade' },
                        { c: 'VW Passat', p: '€14.900', s: 85, t: 'Bom Negócio' },
                        { c: 'Seat Leon', p: '€12.200', s: 78, t: 'Analisar' },
                      ].map((r) => (
                        <div key={r.c} className="flex items-center justify-between p-2 rounded bg-navy-medium/30 border border-white/5">
                          <div>
                            <div className="text-[8px] text-off-white font-medium">{r.c}</div>
                            <div className="text-[7px] text-muted">{r.p}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-1.5 rounded-full bg-navy-medium overflow-hidden"><div className="h-full rounded-full bg-success" style={{ width: `${r.s}%` }} /></div>
                            <span className="text-[7px] text-success font-bold">{r.s}</span>
                            <span className="text-[6px] px-1.5 py-0.5 rounded bg-success/10 text-success">{r.t}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {active.id === 'market' && (
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="flex-1 rounded bg-navy-medium/30 border border-white/5 px-2 py-1.5 text-[8px] text-muted">BMW 320d 2020-2023</div>
                        <div className="rounded bg-orange px-2 py-1.5 text-[7px] text-white font-medium">Pesquisar</div>
                      </div>
                      <div className="flex gap-1.5">
                        {[{ name: 'StandVirtual', c: '#00629B' }, { name: 'OLX', c: '#5EB630' }, { name: 'PiscaPisca', c: '#FFB800' }].map((p) => (
                          <div key={p.name} className="flex items-center gap-1 rounded bg-navy-medium/40 px-1.5 py-0.5 border border-white/5"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.c }} /><span className="text-[7px] text-muted">{p.name}</span></div>
                        ))}
                      </div>
                      <div className="rounded bg-navy-medium/20 border border-white/5 p-2">
                        <div className="h-1.5 rounded-full bg-navy-medium overflow-hidden mb-1"><div className="h-full w-full rounded-full bg-success"/></div>
                        <div className="text-[7px] text-success mb-1.5">142 resultados encontrados</div>
                        {[{ c: 'BMW 320d Touring', y: '2021', p: '€27.900', dot: '#00629B' }, { c: 'BMW 320d Sport', y: '2022', p: '€25.400', dot: '#5EB630' }, { c: 'BMW 320d M Sport', y: '2020', p: '€24.500', dot: '#FFB800' }].map((r) => (
                          <div key={r.c} className="flex items-center justify-between py-1 border-t border-white/5 text-[7px]">
                            <span className="flex items-center gap-1 text-off-white/80"><span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: r.dot }} />{r.c}</span>
                            <span className="text-muted">{r.y}</span>
                            <span className="text-off-white font-medium">{r.p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {active.id === 'crm' && (
                    <div className="space-y-2.5">
                      <div className="text-[9px] font-medium text-off-white">Pipeline de Vendas</div>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { s: 'Novo Lead', n: 5, c: 'border-blue-500/30' },
                          { s: 'Contactado', n: 3, c: 'border-purple-500/30' },
                          { s: 'Negociação', n: 2, c: 'border-orange/30' },
                          { s: 'Fechado', n: 4, c: 'border-success/30' },
                        ].map((col) => (
                          <div key={col.s} className={`rounded bg-navy-medium/20 border-t-2 ${col.c} p-1.5`}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[7px] text-muted">{col.s}</span>
                              <span className="text-[7px] text-off-white font-bold">{col.n}</span>
                            </div>
                            {[...Array(Math.min(col.n, 2))].map((_, i) => (
                              <div key={i} className="rounded bg-navy-medium/40 border border-white/5 p-1 mb-1">
                                <div className="h-1.5 w-12 rounded bg-white/10 mb-0.5" />
                                <div className="h-1 w-8 rounded bg-white/5" />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="rounded bg-navy-medium/20 border border-white/5 p-2">
                        <div className="text-[7px] text-muted mb-1">Leads Recentes</div>
                        {[{ n: 'João Silva', v: 'BMW 320d', s: 85 }, { n: 'Maria Santos', v: 'Audi A3', s: 72 }].map((l) => (
                          <div key={l.n} className="flex items-center justify-between py-1 border-t border-white/5 text-[7px]">
                            <span className="text-off-white">{l.n}</span>
                            <span className="text-muted">{l.v}</span>
                            <div className="flex items-center gap-1">
                              <div className="w-6 h-1 rounded-full bg-navy-medium overflow-hidden"><div className="h-full rounded-full bg-orange" style={{ width: `${l.s}%` }}/></div>
                              <span className="text-orange text-[6px]">{l.s}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{active.title}</h3>
              <p className="text-muted text-lg mb-6">{active.description}</p>
              <ul className="space-y-3">
                {active.bullets.map((bullet, i) => (
                  <motion.li
                    key={bullet}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="flex items-center gap-3 text-off-white"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange/10 flex items-center justify-center">
                      <Check size={12} className="text-orange" />
                    </div>
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
