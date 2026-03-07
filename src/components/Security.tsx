import { motion } from 'framer-motion';
import { Lock, ShieldCheck, KeyRound, Smartphone, Key, DatabaseBackup } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SecurityItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const items: SecurityItem[] = [
  { icon: Lock, title: 'Encriptação AES-256', description: 'Dados encriptados at-rest e in-transit' },
  { icon: ShieldCheck, title: 'Zero Trust', description: 'Cloudflare Zero Trust para acesso seguro' },
  { icon: KeyRound, title: 'Vault para Segredos', description: 'HashiCorp Vault para gestão de chaves' },
  { icon: Smartphone, title: 'PWA Instalável', description: 'Instale no telemóvel como app nativa' },
  { icon: Key, title: 'JWT Authentication', description: 'Tokens seguros com refresh automático' },
  { icon: DatabaseBackup, title: 'Backups Automáticos', description: 'Backups diários com retenção e recuperação rápida' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Security() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Segurança em primeiro lugar.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Os seus dados protegidos com encriptação de nível militar.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((sec) => (
            <motion.div
              key={sec.title}
              variants={item}
              className="flex items-start gap-4 rounded-xl border border-white/5 bg-navy-dark/30 p-5 hover:border-white/10 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center text-orange">
                <sec.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-off-white mb-1">{sec.title}</h3>
                <p className="text-sm text-muted">{sec.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
