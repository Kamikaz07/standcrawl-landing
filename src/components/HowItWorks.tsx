import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Settings, Cpu, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  num: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    num: 1,
    icon: Settings,
    title: 'Configure',
    description: 'Adicione o seu stock e defina os seus critérios de compra.',
  },
  {
    num: 2,
    icon: Cpu,
    title: 'Automatize',
    description: 'Os agentes IA monitorizam o mercado 24/7 por si.',
  },
  {
    num: 3,
    icon: Rocket,
    title: 'Venda mais',
    description: 'Receba alertas, recomendações de preço e oportunidades de compra.',
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} id="como-funciona" className="py-24 sm:py-32 relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Como funciona?
          </h2>
          <p className="text-lg text-muted">
            Três passos simples para transformar o seu stand.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="hidden sm:block absolute top-12 left-[16.6%] right-[16.6%] h-[2px] bg-gradient-to-r from-orange/20 via-orange to-orange/20 origin-left"
          />

          <div className="grid sm:grid-cols-3 gap-10 sm:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full border-2 border-orange/20 bg-navy-dark flex items-center justify-center">
                    <step.icon size={32} className="text-orange" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-orange text-white text-xs font-bold flex items-center justify-center">
                    {step.num}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted text-sm max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
