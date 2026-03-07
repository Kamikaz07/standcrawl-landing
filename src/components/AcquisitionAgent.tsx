import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart3, Brain, Lightbulb, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Agent {
  icon: LucideIcon;
  name: string;
  action: string;
  color: string;
  description: string;
}

const agents: Agent[] = [
  { icon: Search, name: 'Scout', action: 'Scan', color: '#3b82f6', description: 'Varre 3 plataformas a cada 2h.' },
  { icon: BarChart3, name: 'Analyst', action: 'Score', color: '#8b5cf6', description: 'Calcula deal scores com estatística.' },
  { icon: Brain, name: 'Valuator', action: 'Avalia', color: '#f77f00', description: 'Análise profunda com Google Gemini.' },
  { icon: Lightbulb, name: 'Recommender', action: 'Sugere', color: '#22c55e', description: 'Sugere compras baseadas no seu histórico.' },
];

export default function AcquisitionAgent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const runSequenceRef = useRef<(() => void) | undefined>(undefined);

  const runSequence = useCallback(() => {
    clearTimers();
    setActiveIndex(-1);

    agents.forEach((_, i) => {
      const delay = (i + 1) * 700;
      setTimeout(() => setActiveIndex(i), delay);
    });

    // Restart cycle after completing
    timerRef.current = setTimeout(() => {
      setActiveIndex(-1);
      timerRef.current = setTimeout(() => runSequenceRef.current?.(), 600);
    }, agents.length * 700 + 2500);
  }, [clearTimers]);

  useEffect(() => {
    runSequenceRef.current = runSequence;
  }, [runSequence]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runSequence();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, [runSequence, clearTimers]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden bg-navy-dark/50">
      {/* Perspective grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(247,127,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(247,127,0,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: 'perspective(600px) rotateX(55deg) scale(2.5) translateY(-10%)',
            transformOrigin: 'center bottom',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 70%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-orange/10 border border-orange/20 px-4 py-1.5 text-sm font-medium text-orange mb-6">
            <Brain size={16} />
            Multi-Agent AI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            4 Agentes IA a trabalhar por si.
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            O primeiro sistema multi-agente para stands automóveis em Portugal.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 mb-20">
          {/* Animated connector line (desktop) */}
          <div className="hidden sm:block absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 h-[2px] bg-white/5 rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-[#3b82f6] via-[#f77f00] to-[#22c55e] rounded-full origin-left"
              animate={{ scaleX: activeIndex >= 0 ? (activeIndex + 1) / agents.length : 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>

          {/* Animated connector line (mobile) */}
          <div className="sm:hidden absolute top-[6%] bottom-[6%] left-1/2 -translate-x-1/2 w-[2px] bg-white/5 rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-[#3b82f6] via-[#f77f00] to-[#22c55e] rounded-full origin-top"
              animate={{ scaleY: activeIndex >= 0 ? (activeIndex + 1) / agents.length : 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>

          {agents.map((agent, i) => (
            <div key={agent.name} className="flex flex-col sm:flex-row items-center z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                {/* Glow ring */}
                <div
                  className="absolute -inset-2 rounded-2xl transition-opacity duration-700"
                  style={{
                    opacity: i <= activeIndex ? 1 : 0,
                    background: `radial-gradient(circle, ${agent.color}15 0%, transparent 70%)`,
                  }}
                />

                <div
                  className="relative flex flex-col items-center gap-3 w-36 p-5 rounded-2xl border-2 transition-all duration-500"
                  style={{
                    borderColor: i <= activeIndex ? agent.color + '50' : 'rgba(255,255,255,0.05)',
                    backgroundColor: i <= activeIndex ? 'rgba(15,23,41,0.9)' : 'rgba(15,23,41,0.5)',
                    boxShadow: i <= activeIndex ? `0 0 30px ${agent.color}15` : 'none',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500"
                    style={{
                      backgroundColor: i <= activeIndex ? agent.color + '20' : 'rgba(45,58,85,0.5)',
                      color: i <= activeIndex ? agent.color : '#6b7280',
                    }}
                  >
                    <agent.icon size={26} />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-sm text-off-white">{agent.name}</div>
                    <div
                      className="text-[11px] font-medium transition-colors duration-500"
                      style={{ color: i <= activeIndex ? agent.color : '#6b7280' }}
                    >
                      {agent.action}
                    </div>
                  </div>

                  {/* Active dot */}
                  <div
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-navy-dark transition-all duration-300"
                    style={{
                      backgroundColor: agent.color,
                      transform: `translateX(-50%) scale(${i === activeIndex ? 1 : 0})`,
                    }}
                  />
                </div>
              </motion.div>

              {/* Connector chevron */}
              {i < agents.length - 1 && (
                <div className="flex items-center py-2 sm:py-0 sm:px-4">
                  <ChevronRight
                    size={18}
                    className={`hidden sm:block transition-colors duration-500 ${
                      i < activeIndex ? 'text-orange' : 'text-white/10'
                    }`}
                  />
                  <ChevronRight
                    size={18}
                    className={`sm:hidden rotate-90 transition-colors duration-500 ${
                      i < activeIndex ? 'text-orange' : 'text-white/10'
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Description cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="rounded-xl border border-white/5 bg-navy-dark/30 p-5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <agent.icon size={16} style={{ color: agent.color }} />
                <span className="font-semibold text-sm text-off-white">{agent.name}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{agent.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
