import { useState, useRef, useCallback, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Shield } from 'lucide-react';

const API_URL = import.meta.env.PROD
  ? 'https://app.standcrawl.pt/api/v1/contact'
  : 'http://localhost:8000/api/v1/contact';

const PLANS = ['Starter', 'Professional', 'Enterprise', 'Outro'] as const;

interface FormData {
  name: string;
  email: string;
  phone: string;
  standName: string;
  plan: string;
  message: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function FinalCTA() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    standName: '',
    plan: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const mountedAt = useRef(Date.now());
  const lastSubmit = useRef(0);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setErrorMsg('');

      // Client-side rate limit: 30s between submissions
      if (Date.now() - lastSubmit.current < 30_000 && lastSubmit.current > 0) {
        setErrorMsg('Aguarde antes de enviar novamente.');
        setStatus('error');
        return;
      }

      // Basic validation
      if (!form.name.trim() || !form.email.trim()) {
        setErrorMsg('Nome e email são obrigatórios.');
        setStatus('error');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        setErrorMsg('Formato de email inválido.');
        setStatus('error');
        return;
      }

      setStatus('sending');
      lastSubmit.current = Date.now();

      try {
        const hpEl = document.getElementById('website') as HTMLInputElement | null;

        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            stand_name: form.standName.trim(),
            plan: form.plan,
            message: form.message.trim(),
            // Anti-bot fields
            _hp: hpEl?.value ?? '',
            _t: mountedAt.current,
          }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => null);
          throw new Error(data?.detail ?? `Erro ${res.status}`);
        }

        setStatus('success');
        setForm({ name: '', email: '', phone: '', standName: '', plan: '', message: '' });
      } catch (err) {
        setErrorMsg(err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.');
        setStatus('error');
      }
    },
    [form],
  );

  return (
    <section id="contacto" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Pronto para modernizar o seu stand?
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Deixe os seus dados e entraremos em contacto em menos de 24h. Sem compromisso.
          </p>
        </motion.div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center glass border border-success/20 rounded-2xl p-10 space-y-4"
          >
            <CheckCircle size={48} className="text-success mx-auto" />
            <h3 className="text-xl font-bold text-off-white">Mensagem enviada!</h3>
            <p className="text-muted">
              Obrigado pelo interesse. Entraremos em contacto brevemente.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="text-sm text-orange hover:underline underline-offset-4"
            >
              Enviar outra mensagem
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto glass border border-white/10 rounded-2xl p-6 sm:p-10 space-y-6"
          >
            {/* Honeypot — invisible to humans */}
            <div aria-hidden="true" className="absolute -left-[9999px]">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-sm font-medium text-off-white">
                  Nome <span className="text-orange">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={set('name')}
                  placeholder="João Silva"
                  className="w-full rounded-lg border border-white/10 bg-navy-medium/30 px-4 py-2.5 text-off-white placeholder:text-muted/50 focus:border-orange/50 focus:ring-1 focus:ring-orange/30 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm font-medium text-off-white">
                  Email <span className="text-orange">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={200}
                  value={form.email}
                  onChange={set('email')}
                  placeholder="joao@stand.pt"
                  className="w-full rounded-lg border border-white/10 bg-navy-medium/30 px-4 py-2.5 text-off-white placeholder:text-muted/50 focus:border-orange/50 focus:ring-1 focus:ring-orange/30 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="phone" className="block text-sm font-medium text-off-white">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  maxLength={20}
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="+351 912 345 678"
                  className="w-full rounded-lg border border-white/10 bg-navy-medium/30 px-4 py-2.5 text-off-white placeholder:text-muted/50 focus:border-orange/50 focus:ring-1 focus:ring-orange/30 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="standName" className="block text-sm font-medium text-off-white">
                  Nome do Stand
                </label>
                <input
                  id="standName"
                  type="text"
                  maxLength={100}
                  value={form.standName}
                  onChange={set('standName')}
                  placeholder="Auto Silva, Lda."
                  className="w-full rounded-lg border border-white/10 bg-navy-medium/30 px-4 py-2.5 text-off-white placeholder:text-muted/50 focus:border-orange/50 focus:ring-1 focus:ring-orange/30 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="plan" className="block text-sm font-medium text-off-white">
                Plano de interesse
              </label>
              <select
                id="plan"
                value={form.plan}
                onChange={set('plan')}
                className="w-full rounded-lg border border-white/10 bg-navy-medium/30 px-4 py-2.5 text-off-white focus:border-orange/50 focus:ring-1 focus:ring-orange/30 outline-none transition-all appearance-none"
              >
                <option value="" className="bg-navy">Selecionar...</option>
                {PLANS.map((p) => (
                  <option key={p} value={p} className="bg-navy">{p}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-sm font-medium text-off-white">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={3}
                maxLength={1000}
                value={form.message}
                onChange={set('message')}
                placeholder="Conte-nos sobre o seu stand e o que procura..."
                className="w-full rounded-lg border border-white/10 bg-navy-medium/30 px-4 py-2.5 text-off-white placeholder:text-muted/50 focus:border-orange/50 focus:ring-1 focus:ring-orange/30 outline-none transition-all resize-none"
              />
            </div>

            {status === 'error' && errorMsg && (
              <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2.5">
                <AlertCircle size={16} className="shrink-0" />
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-base font-semibold text-white shadow-glow hover:shadow-[0_0_60px_rgba(247,127,0,0.35)] hover:scale-[1.01] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  A enviar...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar Mensagem
                </>
              )}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-muted">
              <Shield size={12} />
              Os seus dados estão protegidos e nunca serão partilhados.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
