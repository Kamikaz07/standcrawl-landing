import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const screenshots = [
  { label: 'Dashboard', path: 'dashboard' },
  { label: 'Stock', path: 'stock' },
  { label: 'Market Explorer', path: 'market' },
  { label: 'Pricing IA', path: 'pricing' },
  { label: 'Aquisições', path: 'acquisitions' },
];

export default function DashboardPreview() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Veja a plataforma em ação.
          </h2>
          <p className="text-lg text-muted">
            Interface moderna e intuitiva para gerir o seu stand.
          </p>
        </motion.div>

        {/* Tab indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {screenshots.map((s, i) => (
            <button
              key={s.path}
              onClick={() => setActive(i)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                active === i
                  ? 'bg-orange/10 text-orange border border-orange/20'
                  : 'text-muted hover:text-off-white'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, type: 'spring', damping: 20 }}
          className="perspective-1000"
        >
          <div className="relative rounded-xl border border-white/10 bg-navy-dark shadow-2xl overflow-hidden tilt-3d mx-auto max-w-4xl">
            {/* Glow */}
            <div className="absolute -inset-8 bg-orange/5 blur-3xl rounded-full pointer-events-none" />

            {/* Browser bar */}
            <div className="relative flex items-center gap-2 px-4 py-2.5 bg-navy-medium/50 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-8">
                <div className="rounded-md bg-navy/60 px-3 py-1 text-xs text-muted text-center font-mono">
                  standcrawl/{screenshots[active].path}
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="relative aspect-[16/9] bg-gradient-to-br from-navy to-navy-dark overflow-hidden">
              <div className="flex h-full">
                {/* Sidebar */}
                <div className="w-12 sm:w-40 bg-navy-dark/80 border-r border-white/5 p-2 shrink-0">
                  <div className="hidden sm:flex items-center gap-2 px-2 py-2 mb-2">
                    <div className="w-5 h-5 rounded bg-orange/20" />
                    <div className="h-2 w-16 rounded bg-white/10" />
                  </div>
                  {screenshots.map((s, i) => (
                    <div key={s.path} className={`flex items-center gap-2 rounded-lg px-2 py-1.5 mb-0.5 text-[9px] ${
                      active === i ? 'bg-orange/10 text-orange border border-orange/20' : 'text-muted'
                    }`}>
                      <div className={`w-3.5 h-3.5 rounded ${active === i ? 'bg-orange/20' : 'bg-navy-medium/50'}`} />
                      <span className="hidden sm:inline">{s.label}</span>
                    </div>
                  ))}
                </div>
                {/* Main */}
                <div className="flex-1 p-3 sm:p-4 space-y-2 overflow-hidden">
                  {active === 0 && (
                    /* Dashboard */
                    <>
                      <div className="grid grid-cols-4 gap-2">
                        {[{ l: 'Veículos', v: '24' }, { l: 'Vendidos', v: '8' }, { l: 'Dias Médio', v: '34' }, { l: 'Valor', v: '€312k' }].map((k) => (
                          <div key={k.l} className="rounded-lg bg-navy-medium/30 border border-white/5 p-2">
                            <div className="text-[7px] text-muted">{k.l}</div>
                            <div className="text-xs font-bold text-off-white">{k.v}</div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-navy-medium/20 border border-white/5 p-2 flex-1">
                        <div className="text-[8px] text-muted mb-1">Vendas Mensais</div>
                        <div className="flex items-end gap-1 h-20">
                          {[35, 50, 40, 65, 55, 75, 50, 80, 60, 70, 55, 85].map((h, i) => (
                            <div key={i} className="flex-1 rounded-t bg-orange/40" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  {active === 1 && (
                    /* Stock */
                    <>
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-[9px] font-medium text-off-white">Stock de Veículos</div>
                        <div className="rounded bg-orange/10 px-2 py-0.5 text-[8px] text-orange">+ Adicionar</div>
                      </div>
                      <div className="rounded-lg bg-navy-medium/20 border border-white/5 overflow-hidden">
                        <div className="grid grid-cols-5 gap-0 text-[7px] text-muted px-2 py-1 border-b border-white/5 font-medium">
                          <span>Veículo</span><span>Ano</span><span>Preço</span><span>Dias</span><span>Estado</span>
                        </div>
                        {[
                          { c: 'BMW 320d', y: '2021', p: '€28.500', d: '12', s: 'stock' },
                          { c: 'VW Golf 8', y: '2022', p: '€24.900', d: '45', s: 'alert' },
                          { c: 'Audi A3', y: '2020', p: '€22.000', d: '8', s: 'stock' },
                          { c: 'Mercedes C200', y: '2021', p: '€32.900', d: '67', s: 'warn' },
                          { c: 'Peugeot 308', y: '2023', p: '€19.500', d: '3', s: 'stock' },
                        ].map((r) => (
                          <div key={r.c} className="grid grid-cols-5 gap-0 text-[8px] px-2 py-1.5 border-b border-white/5">
                            <span className="text-off-white/90">{r.c}</span>
                            <span className="text-muted">{r.y}</span>
                            <span className="text-off-white font-medium">{r.p}</span>
                            <span className={r.s === 'warn' ? 'text-red-400' : r.s === 'alert' ? 'text-orange-light' : 'text-muted'}>{r.d}d</span>
                            <span className={`w-fit px-1.5 rounded text-[7px] ${
                              r.s === 'warn' ? 'bg-red-500/10 text-red-400' : r.s === 'alert' ? 'bg-orange/10 text-orange' : 'bg-success/10 text-success'
                            }`}>{r.s === 'warn' ? 'Aging' : r.s === 'alert' ? 'Atenção' : 'OK'}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {active === 2 && (
                    /* Market Explorer */
                    <>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex-1 rounded-lg bg-navy-medium/30 border border-white/5 px-2 py-1.5 text-[9px] text-muted">BMW 320d 2020-2023</div>
                        <div className="rounded bg-orange px-2 py-1.5 text-[8px] text-white font-medium">Pesquisar</div>
                      </div>
                      <div className="flex gap-2 mb-2">
                        {['StandVirtual', 'OLX', 'PiscaPisca'].map((p) => (
                          <div key={p} className="rounded bg-navy-medium/40 px-2 py-0.5 text-[7px] text-muted border border-white/5">{p}</div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-navy-medium/20 border border-white/5 p-2">
                        <div className="h-1.5 rounded-full bg-navy-medium overflow-hidden mb-2"><div className="h-full w-3/4 rounded-full bg-success"/></div>
                        <div className="text-[7px] text-success mb-2">142 resultados encontrados</div>
                        {[{ c: 'BMW 320d Touring', p: '€27.900', l: 'StandVirtual' }, { c: 'BMW 320d Sport', p: '€25.400', l: 'OLX' }].map((r) => (
                          <div key={r.c} className="flex items-center justify-between py-1 border-t border-white/5 text-[8px]">
                            <span className="text-off-white/80">{r.c}</span>
                            <span className="text-off-white font-medium">{r.p}</span>
                            <span className="text-muted text-[7px]">{r.l}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {active === 3 && (
                    /* Pricing IA */
                    <>
                      <div className="text-[9px] font-medium text-off-white mb-2">Pricing IA — BMW 320d 2021</div>
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        {[{ l: 'ML Recomenda', v: '€27.800', c: 'text-success' }, { l: 'Preço Atual', v: '€28.500', c: 'text-off-white' }, { l: 'Mercado Médio', v: '€28.200', c: 'text-orange' }].map((k) => (
                          <div key={k.l} className="rounded-lg bg-navy-medium/30 border border-white/5 p-2 text-center">
                            <div className="text-[7px] text-muted">{k.l}</div>
                            <div className={`text-sm font-bold ${k.c}`}>{k.v}</div>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-navy-medium/20 border border-white/5 p-2">
                        <div className="text-[8px] text-muted mb-1">Distribuição de Preços Mercado</div>
                        <div className="h-12 rounded bg-gradient-to-r from-success/20 via-orange/30 to-red-500/20 relative">
                          <div className="absolute top-0 bottom-0 left-[45%] w-0.5 bg-orange" />
                          <div className="absolute -top-2 left-[45%] -translate-x-1/2 text-[7px] text-orange font-bold">P50</div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-success/5 border border-success/20 p-2 mt-1">
                        <div className="text-[8px] text-success">Gemini: Preço bem posicionado. Considere reduzir €700 para acelerar venda.</div>
                      </div>
                    </>
                  )}
                  {active === 4 && (
                    /* Acquisitions */
                    <>
                      <div className="text-[9px] font-medium text-off-white mb-2">Oportunidades de Aquisição</div>
                      <div className="flex gap-1 mb-2">
                        {['Scout', 'Analyst', 'Valuator', 'Recommender'].map((a, i) => (
                          <div key={a} className="flex items-center gap-1 rounded px-1.5 py-0.5 text-[7px]" style={{ backgroundColor: ['#3b82f620','#8b5cf620','#f77f0020','#22c55e20'][i], color: ['#3b82f6','#8b5cf6','#f77f00','#22c55e'][i] }}>
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ['#3b82f6','#8b5cf6','#f77f00','#22c55e'][i] }}/>{a}
                          </div>
                        ))}
                      </div>
                      {[
                        { c: 'BMW 520d', p: '€19.900', s: 98, t: 'Top Pick' },
                        { c: 'Audi A4 Avant', p: '€17.500', s: 92, t: 'Oportunidade' },
                        { c: 'VW Passat', p: '€14.900', s: 85, t: 'Bom Negócio' },
                      ].map((r) => (
                        <div key={r.c} className="flex items-center justify-between py-1.5 px-2 border-b border-white/5 rounded-lg bg-navy-medium/20 mb-1">
                          <span className="text-[8px] text-off-white">{r.c}</span>
                          <span className="text-[8px] text-off-white font-medium">{r.p}</span>
                          <div className="flex items-center gap-1">
                            <div className="w-8 h-1.5 rounded-full bg-navy-medium overflow-hidden"><div className="h-full rounded-full bg-success" style={{ width: `${r.s}%` }}/></div>
                            <span className="text-[7px] text-success font-medium">{r.s}</span>
                          </div>
                          <span className="text-[7px] px-1.5 rounded bg-success/10 text-success">{r.t}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>

              {/* Active label */}
              <div className="absolute bottom-3 right-3 rounded-lg bg-navy/80 glass border border-white/10 px-3 py-1.5 text-xs font-medium text-orange">
                {screenshots[active].label}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
