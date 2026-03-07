import { motion } from 'framer-motion';

const platforms = [
  {
    name: 'StandVirtual',
    color: '#00629B',
    initials: 'SV',
  },
  {
    name: 'OLX',
    color: '#5EB630',
    initials: 'OLX',
  },
  {
    name: 'PiscaPisca',
    color: '#FFB800',
    initials: 'PP',
  },
];

export default function Platforms() {
  return (
    <section className="py-20 sm:py-24 border-y border-white/5 bg-navy-dark/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Dados de 3 plataformas em tempo real.
          </h2>
          <p className="text-muted text-lg">
            Scraping inteligente com rate-limiting, cache e form discovery automático.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group flex flex-col items-center gap-3"
            >
              <div
                className="w-20 h-20 rounded-2xl border border-white/10 flex items-center justify-center text-xl font-bold grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:border-opacity-50"
                style={{ backgroundColor: p.color + '15', color: p.color, borderColor: p.color + '30' }}
              >
                {p.initials}
              </div>
              <span className="text-sm text-muted group-hover:text-off-white transition-colors">
                {p.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
