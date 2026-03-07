import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Activity, BarChart3, Car, Clock, RefreshCw } from 'lucide-react';

const platforms = [
  {
    name: 'StandVirtual',
    color: '#00629B',
    initials: 'SV',
    description: 'O maior marketplace automóvel de Portugal',
  },
  {
    name: 'OLX',
    color: '#5EB630',
    initials: 'OLX',
    description: 'Classificados generalistas com forte presença auto',
  },
  {
    name: 'PiscaPisca',
    color: '#FFB800',
    initials: 'PP',
    description: 'Plataforma especializada em viaturas usadas',
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

function PulsingDot({ color }: { color: string }) {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
        style={{ backgroundColor: color }}
      />
      <span
        className="relative inline-flex h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: color }}
      />
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
            Dados de <span className="text-orange">3 plataformas</span> em tempo real
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Scraping inteligente com rate-limiting, cache e form discovery automático.
            Milhares de anúncios monitorizados continuamente.
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

        {/* Platform cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/5 bg-[#1e2a45]/50 p-6 hover:border-white/10 transition-all duration-500"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                style={{ backgroundColor: p.color + '10' }}
              />

              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: p.color + '15', color: p.color }}
                  >
                    {p.initials}
                  </div>
                  <div>
                    <h3 className="text-off-white font-semibold">{p.name}</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <PulsingDot color={p.color} />
                      <span className="text-[11px] text-muted">A monitorizar</span>
                    </div>
                  </div>
                </div>
                <Activity className="w-4 h-4 text-muted group-hover:text-green-400 transition-colors" />
              </div>

              {/* Description */}
              <p className="text-sm text-muted">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
