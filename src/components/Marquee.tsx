import { Car, TrendingUp, Search, Bot, Users, MessageCircle, Shield, Zap } from 'lucide-react';

const items = [
  { icon: Car, text: 'Gestão de Stock' },
  { icon: TrendingUp, text: 'Pricing com IA' },
  { icon: Search, text: 'Market Explorer' },
  { icon: Bot, text: 'Agentes Autónomos' },
  { icon: Users, text: 'CRM & Leads' },
  { icon: MessageCircle, text: 'WhatsApp Integrado' },
  { icon: Shield, text: 'Segurança AES-256' },
  { icon: Zap, text: 'Automação 24/7' },
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-5 border-y border-white/5 bg-navy-dark/40">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {items.map((item) => (
              <div key={`${copy}-${item.text}`} className="flex items-center gap-2 mx-8">
                <item.icon size={14} className="text-orange shrink-0" />
                <span className="text-sm font-medium text-muted">{item.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
