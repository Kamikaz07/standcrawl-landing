import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BarChart3, Brain, Lightbulb, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface Agent {
  icon: LucideIcon;
  name: string;
  role: string;
  color: string;
  description: string;
  output: () => ReactNode;
}

const agents: Agent[] = [
  {
    icon: Search,
    name: 'Scout',
    role: 'Scan',
    color: '#3b82f6',
    description: 'Varre 3 plataformas a cada 2h e filtra oportunidades.',
    output: () => (
      <div className="space-y-1.5">
        {[
          { src: 'StandVirtual', n: 12 },
          { src: 'OLX', n: 8 },
          { src: 'PiscaPisca', n: 5 },
        ].map((s) => (
          <div key={s.src} className="flex items-center justify-between text-[11px]">
            <span className="text-muted">{s.src}</span>
            <span className="text-off-white font-medium">{s.n} novos</span>
          </div>
        ))}
        <div className="pt-1.5 border-t border-white/5 flex justify-between text-[11px]">
          <span className="text-muted">Total filtrado</span>
          <span className="text-[#3b82f6] font-bold">25 anúncios</span>
        </div>
      </div>
    ),
  },
  {
    icon: BarChart3,
    name: 'Analyst',
    role: 'Score',
    color: '#8b5cf6',
    description: 'Calcula deal scores com estatística de mercado.',
    output: () => (
      <div className="space-y-1.5">
        {[
          { car: 'BMW 320d', score: 94, color: '#22c55e' },
          { car: 'Audi A3 TDI', score: 78, color: '#f77f00' },
          { car: 'VW Golf 8', score: 65, color: '#6b7280' },
        ].map((v) => (
          <div key={v.car} className="flex items-center gap-2 text-[11px]">
            <span className="text-muted flex-1">{v.car}</span>
            <div className="w-16 h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${v.score}%`, backgroundColor: v.color }} />
            </div>
            <span className="font-bold w-6 text-right" style={{ color: v.color }}>{v.score}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Brain,
    name: 'Valuator',
    role: 'Avalia',
    color: '#f77f00',
    description: 'Análise profunda com LLM para avaliação justa.',
    output: () => (
      <div className="space-y-1.5">
        <div className="flex justify-between text-[11px]">
          <span className="text-muted">Preço anúncio</span>
          <span className="text-off-white font-medium">€18.900</span>
        </div>
        <div className="flex justify-between text-[11px]">
          <span className="text-muted">Valor mercado</span>
          <span className="text-off-white font-medium">€22.400</span>
        </div>
        <div className="pt-1.5 border-t border-white/5 flex justify-between text-[11px]">
          <span className="text-muted">Veredicto IA</span>
          <span className="text-[#f77f00] font-bold">Abaixo do mercado</span>
        </div>
      </div>
    ),
  },
  {
    icon: Lightbulb,
    name: 'Recommender',
    role: 'Sugere',
    color: '#22c55e',
    description: 'Recomenda compras com base no seu perfil e margens.',
    output: () => (
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-[11px]">
          <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="text-off-white font-medium">BMW 320d · €18.900</span>
        </div>
        <div className="flex justify-between text-[11px]">
          <span className="text-muted">Margem estimada</span>
          <span className="text-[#22c55e] font-bold">+€3.500</span>
        </div>
        <div className="pt-1.5 border-t border-white/5 text-[11px] text-muted flex items-center justify-between">
          <span>Notificação enviada</span>
          <CheckCircle size={12} className="text-[#22c55e]" />
        </div>
      </div>
    ),
  },
];

export default function AcquisitionAgent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const runSequence = useCallback(() => {
    setActiveIndex(-1);

    agents.forEach((_, i) => {
      setTimeout(() => setActiveIndex(i), (i + 1) * 1000);
    });
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runSequence();
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [runSequence]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-dark/40 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-orange/10 border border-orange/20 px-4 py-1.5 text-sm font-medium text-orange mb-6">
            <Brain size={16} />
            Multi-Agent AI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            4 Agentes IA a trabalhar por si.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            O primeiro sistema multi-agente para stands automóveis em Portugal.
            Cada agente tem uma especialidade — juntos encontram as melhores oportunidades.
          </p>
        </motion.div>

        {/* Agent cards — equal height grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {agents.map((agent, i) => {
            const isActive = i <= activeIndex;

            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col rounded-2xl border p-5 transition-all duration-500"
                style={{
                  borderColor: isActive ? agent.color + '30' : 'rgba(255,255,255,0.05)',
                  backgroundColor: isActive ? 'rgba(15,23,41,0.8)' : 'rgba(15,23,41,0.4)',
                  boxShadow: isActive ? `0 0 30px ${agent.color}10` : 'none',
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500"
                    style={{
                      backgroundColor: isActive ? agent.color + '18' : 'rgba(45,58,85,0.4)',
                      color: isActive ? agent.color : '#4b5563',
                    }}
                  >
                    <agent.icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-off-white leading-tight">{agent.name}</div>
                    <div
                      className="text-[11px] font-medium transition-colors duration-500"
                      style={{ color: isActive ? agent.color : '#6b7280' }}
                    >
                      {agent.role}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[13px] text-muted leading-relaxed mb-4">
                  {agent.description}
                </p>

                {/* Output preview — appears when active */}
                <div className="mt-auto">
                  <div
                    className="rounded-xl border p-3 min-h-[88px] flex flex-col justify-center transition-all duration-500"
                    style={{
                      borderColor: isActive ? agent.color + '20' : 'rgba(255,255,255,0.03)',
                      backgroundColor: isActive ? agent.color + '06' : 'rgba(255,255,255,0.01)',
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.div
                          key="active"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.35 }}
                        >
                          {agent.output()}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center gap-1.5 py-2"
                        >
                          <div className="w-1 h-1 rounded-full bg-white/10" />
                          <div className="w-1 h-1 rounded-full bg-white/10" />
                          <div className="w-1 h-1 rounded-full bg-white/10" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final result — appears when all agents complete */}
        <AnimatePresence>
          {activeIndex === agents.length - 1 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mx-auto rounded-2xl border border-success/20 bg-navy-dark/60 p-5 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-success/15 flex items-center justify-center">
                  <Lightbulb size={16} className="text-success" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-off-white">Oportunidade Encontrada</div>
                  <div className="text-[11px] text-muted">Recomendação do agente — há 2 min</div>
                </div>
                <div className="ml-auto px-2.5 py-1 rounded-full bg-success/10 text-success text-xs font-bold">
                  Score 94
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                {[
                  { label: 'Veículo', value: 'BMW 320d' },
                  { label: 'Preço', value: '€18.900' },
                  { label: 'Mercado', value: '€22.400' },
                  { label: 'Margem', value: '+€3.500' },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg bg-white/[0.03] border border-white/5 p-2.5">
                    <div className="text-[10px] text-muted mb-0.5">{item.label}</div>
                    <div className="text-sm font-bold text-off-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
