import { motion } from 'framer-motion';
import { Check, ArrowRight, Minus } from 'lucide-react';

interface Plan {
  name: string;
  popular?: boolean;
  price: string;
  priceNote: string;
  description: string;
  features: { text: string; included: boolean }[];
  cta: string;
  ctaStyle: 'outline' | 'primary';
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: 'Brevemente',
    priceNote: 'Ideal para começar',
    description: 'Para stands pequenos que querem organizar o negócio.',
    features: [
      { text: 'Gestão de stock de veículos', included: true },
      { text: 'Dashboard & Analytics', included: true },
      { text: 'CRM & Pipeline de vendas', included: true },
      { text: 'Market Explorer (5 pesquisas/dia)', included: true },
      { text: '1 utilizador', included: true },
      { text: 'Pricing IA', included: false },
      { text: 'Agente de Aquisições', included: false },
      { text: 'WhatsApp', included: false },
    ],
    cta: 'Quero Saber Mais',
    ctaStyle: 'outline',
  },
  {
    name: 'Professional',
    popular: true,
    price: 'Brevemente',
    priceNote: 'O mais completo',
    description: 'Para stands que querem crescer com inteligência artificial.',
    features: [
      { text: 'Tudo do Starter', included: true },
      { text: 'Pricing com IA', included: true },
      { text: 'Agente de Aquisições (4 agentes IA)', included: true },
      { text: 'WhatsApp integrado', included: true },
      { text: 'Notificações via Email', included: true },
      { text: 'Relatórios automáticos', included: true },
      { text: 'Market Explorer ilimitado', included: true },
      { text: 'Gestão de vendas', included: true },
      { text: 'Acesso a todas as futuras atualizações', included: true },
      { text: 'Até 3 utilizadores', included: true },
    ],
    cta: 'Quero Saber Mais',
    ctaStyle: 'primary',
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    priceNote: 'Para grupos',
    description: 'Para grupos com múltiplos stands e necessidades específicas.',
    features: [
      { text: 'Tudo do Professional', included: true },
      { text: 'Gestão multi-stand (Dealers)', included: true },
      { text: 'Suporte prioritário dedicado', included: true },
      { text: 'Utilizadores ilimitados', included: true },
      { text: 'Onboarding personalizado', included: true },
    ],
    cta: 'Fale Connosco',
    ctaStyle: 'outline',
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="py-24 sm:py-32 bg-navy-dark/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Escolha o plano certo para o seu stand.
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Preços disponíveis em breve. Licença única, mensal ou anual — sem surpresas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl border p-6 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? 'border-orange/30 bg-navy-dark/80 scale-[1.02] shadow-glow-sm'
                  : 'border-white/5 bg-navy-dark/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange px-3 py-0.5 text-xs font-bold text-white">
                  Recomendado
                </div>
              )}

              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <p className="text-xs text-muted mt-1">{plan.priceNote}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    className={`flex items-center gap-2 text-sm ${
                      f.included ? 'text-off-white/80' : 'text-muted/40'
                    }`}
                  >
                    {f.included ? (
                      <Check size={16} className="text-orange flex-shrink-0" />
                    ) : (
                      <Minus size={16} className="text-muted/30 flex-shrink-0" />
                    )}
                    <span className={f.included ? '' : 'line-through'}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`flex items-center justify-center gap-2 w-full rounded-xl py-3 font-semibold text-sm transition-all ${
                  plan.ctaStyle === 'primary'
                    ? 'bg-orange text-white shadow-glow-sm hover:shadow-glow hover:scale-[1.02]'
                    : 'border border-white/10 text-off-white hover:border-white/20 hover:bg-white/5'
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
