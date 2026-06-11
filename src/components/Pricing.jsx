import React, { useState } from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';

export default function Pricing({ onOpenAuth }) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-space-950 bg-dot-pattern border-t border-slate-900/60 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3 py-1 bg-brand/5 rounded-full inline-block">
            <span className="text-brand-gradient">SaaS BILLING</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-tight">
            Predictable, Flat-rate Pricing
          </h2>
          <p className="font-body text-slate-400 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
            Unleash autonomous software development fleets with zero surprise bills.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="inline-flex items-center gap-3 bg-[#030617] rounded-xl border border-slate-800 p-1 mt-8">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all focus:outline-none ${
                !isYearly 
                  ? 'bg-[#bbdcfd] text-[#050a1e] shadow-[0_1px_3px_rgba(0,0,0,0.1)]' 
                  : 'text-slate-500 hover:text-slate-200'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1 focus:outline-none ${
                isYearly 
                  ? 'bg-[#bbdcfd] text-[#050a1e] shadow-[0_1px_3px_rgba(0,0,0,0.1)]' 
                  : 'text-slate-500 hover:text-slate-200'
              }`}
            >
              Yearly Billing <span 
                className={`text-[9px] px-1.5 py-0.5 rounded font-extrabold transition-all ${
                  isYearly 
                    ? 'bg-[#010412]/10 text-[#050a1e]' 
                    : 'bg-[#bbdcfd]/10 text-[#bbdcfd]'
                }`}
              >-25%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            const isPopular = plan.popular;
            
            return (
              <div 
                key={idx}
                className={`p-6 bg-space-900/40 border rounded-3xl flex flex-col justify-between relative transition-all duration-300 ${
                  isPopular 
                    ? 'border-brand bg-space-900/70 shadow-[0_0_20px_rgba(187,220,253,0.15)] scale-105 z-10' 
                    : 'border-slate-800/80 hover:border-slate-700 hover:bg-space-900/60'
                }`}
              >
                {/* Popular highlight pill */}
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand text-[#050a1e] rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Most Recommended
                  </span>
                )}

                <div>
                  <h3 className="text-base font-black text-white">{plan.name}</h3>
                  <p className="text-[11px] text-slate-400 mt-2 font-light leading-relaxed min-h-[35px]">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-1 mt-6 border-b border-slate-800/50 pb-5">
                    <span className="text-3xl font-black text-white">{price}</span>
                    {price !== "Free" && (
                      <span className="text-xs text-slate-500 font-bold">/ {plan.period}</span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mt-6 text-xs text-slate-300 font-light">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Button Action */}
                <button
                  onClick={() => onOpenAuth('signup')}
                  className={`w-full py-3 rounded-xl text-xs font-bold font-display transition-all duration-300 mt-8 focus:outline-none ${
                    isPopular
                      ? 'bg-[#bbdcfd] text-[#010412] hover:bg-[#e0f2fe] shadow-[0_4px_20px_rgba(187,220,253,0.25)]'
                      : 'bg-[#010412] text-slate-300 border border-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
