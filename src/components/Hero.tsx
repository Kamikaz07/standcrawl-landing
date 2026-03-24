import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Bot, Mail, ShieldCheck, Clock, Lock } from 'lucide-react';

const line1 = ['O', 'seu', 'stand', 'automóvel,'];
const line2 = ['automatizado', 'com', 'IA.'];
const WORD_DELAY = 0.08;
const BASE_DELAY = 0.3;

const trustBadges = [
  { icon: ShieldCheck, label: 'Encriptação AES-256' },
  { icon: Clock, label: 'Setup em 5 min' },
  { icon: Lock, label: 'Infraestrutura segura' },
];

const chartData = [
  { m: 'Set', stock: 62, vendas: 28 },
  { m: 'Out', stock: 55, vendas: 35 },
  { m: 'Nov', stock: 70, vendas: 30 },
  { m: 'Dez', stock: 48, vendas: 42 },
  { m: 'Jan', stock: 65, vendas: 38 },
  { m: 'Fev', stock: 58, vendas: 45 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh animate-mesh pointer-events-none" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text with parallax */}
          <motion.div style={{ y: textY }} className="flex flex-col gap-6">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 w-fit rounded-full bg-orange/10 border border-orange/20 px-4 py-1.5 text-sm font-medium text-orange"
            >
              <Bot size={16} />
              Powered by AI
            </motion.div>

            {/* Heading — word-by-word reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
              {line1.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.5, delay: BASE_DELAY + i * WORD_DELAY, ease: [0.25, 0.4, 0.25, 1] }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden sm:block" />
              {line2.map((word, i) => (
                <motion.span
                  key={`g-${i}`}
                  initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.5, delay: BASE_DELAY + (line1.length + i) * WORD_DELAY, ease: [0.25, 0.4, 0.25, 1] }}
                  className="inline-block mr-[0.3em] bg-gradient-to-r from-orange to-orange-light bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg sm:text-xl text-muted max-w-lg"
            >
              Gestão de stock, pricing inteligente, prospeção automática e CRM — tudo numa única plataforma.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contacto"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  e.currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.02)`;
                }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
                className="group inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3 text-base font-semibold text-white shadow-glow hover:shadow-[0_0_50px_rgba(247,127,0,0.3)] transition-transform duration-200 ease-out"
              >
                Experimentar Grátis
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contacto"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  e.currentTarget.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
                }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-base font-medium text-off-white hover:border-white/20 hover:bg-white/5 transition-transform duration-200 ease-out"
              >
                <Mail size={18} />
                Pedir Demo
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-6 pt-2"
            >
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <badge.icon size={16} className="text-success" />
                  {badge.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Floating 3D Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10, rotateY: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 5, rotateY: -5 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring', damping: 20 }}
            className="perspective-1000 relative"
            style={{ y: mockupY }}
          >
            {/* Animated glow behind */}
            <div className="absolute -inset-8 bg-orange/10 blur-3xl rounded-full pointer-events-none animate-pulse-slow" />
            {/* Floating wrapper */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Browser chrome */}
              <div className="relative rounded-xl border border-white/10 bg-navy-dark shadow-2xl overflow-hidden tilt-3d">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-navy-medium/50 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="rounded-md bg-navy/60 px-3 py-1 text-xs text-muted text-center font-mono">
                      standcrawl/dashboard
                    </div>
                  </div>
                </div>
                {/* Dashboard mock content */}
                <div className="aspect-[16/10] bg-gradient-to-br from-navy to-navy-dark">
                  <div className="flex h-full">
                    {/* Sidebar */}
                    <div className="w-14 sm:w-44 bg-navy-dark/80 border-r border-white/5 p-2 sm:p-3 flex flex-col gap-1 shrink-0">
                      <div className="hidden sm:flex items-center gap-2 px-2 py-2 mb-3">
                        <div className="w-6 h-6 rounded bg-orange/20" />
                        <div className="h-2.5 w-20 rounded bg-white/10" />
                      </div>
                      {['Dashboard', 'Stock', 'Pricing', 'Market', 'Aquisições'].map((label, i) => (
                        <div key={label} className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[10px] ${
                          i === 0 ? 'bg-orange/10 text-orange border border-orange/20' : 'text-muted'
                        }`}>
                          <div className={`w-4 h-4 rounded ${i === 0 ? 'bg-orange/20' : 'bg-navy-medium/50'}`} />
                          <span className="hidden sm:inline">{label}</span>
                        </div>
                      ))}
                    </div>
                    {/* Main content */}
                    <div className="flex-1 p-3 sm:p-4 space-y-3 overflow-hidden">
                      {/* KPI cards with pulse */}
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { label: 'Veículos', value: '24', change: '+3', color: 'text-success' },
                          { label: 'Vendidos', value: '8', change: '+2', color: 'text-success' },
                          { label: 'Avg. Dias', value: '34', change: '-5', color: 'text-success' },
                          { label: 'Valor Stock', value: '€312k', change: '+12%', color: 'text-orange' },
                        ].map((kpi, i) => (
                          <motion.div
                            key={kpi.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                            className="rounded-lg bg-navy-medium/30 border border-white/5 p-2"
                          >
                            <div className="text-[8px] text-muted mb-0.5">{kpi.label}</div>
                            <div className="text-sm font-bold text-off-white">{kpi.value}</div>
                            <div className={`text-[8px] font-medium ${kpi.color}`}>{kpi.change}</div>
                          </motion.div>
                        ))}
                      </div>
                      {/* Chart with animated bars */}
                      <div className="rounded-lg bg-navy-medium/20 border border-white/5 p-3 flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-[9px] text-muted font-medium">Vendas vs Stock</div>
                          <div className="flex gap-3">
                            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange" /><span className="text-[8px] text-muted">Stock</span></div>
                            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-success" /><span className="text-[8px] text-muted">Vendas</span></div>
                          </div>
                        </div>
                        <div className="flex items-end gap-[3px] h-20 mt-1">
                          {chartData.map((d, i) => (
                            <div key={d.m} className="flex-1 flex flex-col items-center gap-[2px]">
                              <div className="w-full flex gap-[2px] items-end" style={{ height: 56 }}>
                                <motion.div
                                  className="flex-1 rounded-t-sm bg-orange/50"
                                  initial={{ height: 0 }}
                                  animate={{ height: `${d.stock}%` }}
                                  transition={{ delay: 1.5 + i * 0.08, duration: 0.6, ease: 'easeOut' }}
                                />
                                <motion.div
                                  className="flex-1 rounded-t-sm bg-success/40"
                                  initial={{ height: 0 }}
                                  animate={{ height: `${d.vendas}%` }}
                                  transition={{ delay: 1.6 + i * 0.08, duration: 0.6, ease: 'easeOut' }}
                                />
                              </div>
                              <span className="text-[7px] text-muted/60 leading-none">{d.m}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Recent table */}
                      <div className="rounded-lg bg-navy-medium/20 border border-white/5 p-2">
                        <div className="text-[9px] text-muted font-medium mb-1.5">Veículos Recentes</div>
                        {[
                          { car: 'BMW 320d', year: '2021', price: '€28.500', status: 'Em stock' },
                          { car: 'VW Golf 8', year: '2022', price: '€24.900', status: 'Vendido' },
                          { car: 'Audi A3', year: '2020', price: '€22.000', status: 'Em stock' },
                        ].map((row, i) => (
                          <motion.div
                            key={row.car}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.8 + i * 0.1, duration: 0.3 }}
                            className="flex items-center justify-between py-1 border-t border-white/5 text-[8px]"
                          >
                            <span className="text-off-white/80">{row.car}</span>
                            <span className="text-muted">{row.year}</span>
                            <span className="text-off-white font-medium">{row.price}</span>
                            <span className={`px-1.5 py-0.5 rounded text-[7px] font-medium ${
                              row.status === 'Vendido' ? 'bg-success/10 text-success' : 'bg-orange/10 text-orange'
                            }`}>{row.status}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
