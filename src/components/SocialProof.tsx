import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const metrics = [
  { value: 500, suffix: '+', label: 'Veículos Geridos' },
  { value: 3, suffix: '', label: 'Plataformas' },
  { value: 50, suffix: 'k+', label: 'Preços Analisados' },
  { value: 24, suffix: '/7', label: 'Automação' },
];

function MetricItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="flex flex-col items-center gap-1 px-6 py-4">
      <span className="text-3xl sm:text-4xl font-extrabold text-orange font-mono">
        {count}{suffix}
      </span>
      <span className="text-sm text-muted font-medium">{label}</span>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="relative border-y border-white/5 bg-navy-dark/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl px-4 py-8 sm:py-12"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white/5">
          {metrics.map((m) => (
            <MetricItem key={m.label} {...m} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
