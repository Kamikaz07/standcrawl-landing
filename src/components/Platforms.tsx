import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { BarChart3, Brain, Car, Clock, Globe, RefreshCw, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const capabilities: Capability[] = [
  {
    icon: Globe,
    title: 'Multi-Plataforma',
    description: 'Agregação automática das principais plataformas de automóveis em Portugal, num único painel.',
    color: '#00629B',
  },
  {
    icon: Brain,
    title: 'Análise Inteligente',
    description: 'Deduplicação, tracking de histórico de preços e deteção de alterações em tempo real.',
    color: '#5EB630',
  },
  {
    icon: Zap,
    title: 'Alertas Instantâneos',
    description: 'Notificações automáticas quando surgem oportunidades que correspondem aos seus critérios.',
    color: '#FFB800',
  },
];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString('pt-PT')}{suffix}
    </span>
  );
}


export default function Platforms() {
  return (
    <section className="py-20 sm:py-28 border-y border-white/5 bg-navy-dark/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            O mercado automóvel numa <span className="text-orange">só plataforma</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Agregamos e analisamos milhares de anúncios das principais plataformas
            de automóveis em Portugal — automaticamente e em tempo real.
          </p>
        </motion.div>

        {/* Aggregate stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-14 mb-16"
        >
          {[
            { value: 85000, suffix: '+', label: 'Anúncios monitorizados', icon: Car },
            { value: 2, suffix: 'h', label: 'Ciclo de atualização', icon: RefreshCw },
            { value: 24, suffix: '/7', label: 'Monitorização contínua', icon: Clock },
            { value: 15, suffix: '+', label: 'Data points por anúncio', icon: BarChart3 },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <stat.icon className="w-4 h-4 text-orange" />
                <span className="text-2xl sm:text-3xl font-bold text-off-white">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <span className="text-xs text-muted">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Capability cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/5 bg-[#1e2a45]/50 p-6 hover:border-white/10 transition-all duration-500"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                style={{ backgroundColor: cap.color + '10' }}
              />

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: cap.color + '15', color: cap.color }}
                >
                  <cap.icon size={24} />
                </div>
                <h3 className="text-off-white font-semibold text-lg">{cap.title}</h3>
              </div>

              <p className="text-sm text-muted leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
