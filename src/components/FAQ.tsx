import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'O que é o StandCrawl?',
    a: 'Uma plataforma de gestão para stands automóveis que combina IA, automação e análise de mercado para otimizar stock, preços e vendas.',
  },
  {
    q: 'Preciso de conhecimentos técnicos?',
    a: 'Não. A plataforma é desenhada para ser intuitiva. O setup inicial demora menos de 5 minutos.',
  },
  {
    q: 'Que plataformas são suportadas?',
    a: 'Agregamos dados de StandVirtual, OLX e PiscaPisca automaticamente.',
  },
  {
    q: 'Como funciona o agente de aquisições?',
    a: '4 agentes IA trabalham em conjunto: o Scout encontra veículos, o Analyst filtra por potencial, o Valuator avalia em profundidade com IA, e o Recommender sugere compras inteligentes.',
  },
  {
    q: 'Os meus dados estão seguros?',
    a: 'Sim. Usamos encriptação AES-256, Vault para segredos, JWT para autenticação e Cloudflare Zero Trust.',
  },
  {
    q: 'Posso experimentar antes de comprar?',
    a: 'Sim! Oferecemos acesso demo gratuito. Clique em "Experimentar Grátis" para começar.',
  },
  {
    q: 'Quanto tempo demora o setup?',
    a: 'Menos de 5 minutos. Basta criar conta, configurar a chave de API e começar a adicionar veículos.',
  },
  {
    q: 'Funciona no telemóvel?',
    a: 'Sim. O StandCrawl é uma Progressive Web App (PWA), instalável no telemóvel como uma app nativa.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left py-5 group"
      >
        <span className="text-base font-medium text-off-white group-hover:text-orange transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-muted transition-transform duration-300 ${
            open ? 'rotate-180 text-orange' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
