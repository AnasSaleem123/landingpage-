import React, { useEffect, useRef, useState } from 'react';
import { XCircle, CheckCircle2, AlertCircle } from 'lucide-react';

const WITHOUT = [
  { title: 'Manual Coding & Styling', desc: 'Your team spends days manually copying styling layers, configuring CSS frameworks, and fixing alignment specs.' },
  { title: 'Deprecated API Errors', desc: 'Generative LLMs output outdated code blocks using deprecated dependencies, causing compilation errors.' },
  { title: 'Tedious Sandbox Setup', desc: 'Setting up mock servers, wiring databases, and launching preview environments takes hours of DevOps friction.' },
  { title: 'Blind Layout Iterations', desc: 'No interactive sandbox environment means you have to deploy code locally just to test button flows.' },
];

const WITH = [
  { title: 'Autonomous Site Synthesis', desc: 'Describe your interface wireframes in plain English, and DevAI transpiles them into modular React layouts.' },
  { title: 'Live Search Crawler', desc: 'DevAI queries package indices and live documentation, ensuring generated code conforms to the latest API specs.' },
  { title: 'Zero Configuration Sandbox', desc: 'Code compiles into isolated, live hot-reloaded sandboxes, allowing immediate verification of visual styles.' },
  { title: 'Pre-configured State Systems', desc: 'Layout inputs automatically bind to responsive react states, complete with simulated components.' },
];

function CompareCard({ items, isPositive, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rounded-3xl p-8 flex flex-col gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        background: isPositive
          ? 'linear-gradient(135deg, rgba(14,30,80,0.95) 0%, rgba(7,18,55,0.98) 100%)'
          : 'rgba(8,10,24,0.7)',
        border: isPositive
          ? '1px solid rgba(187,220,253,0.25)'
          : '1px solid rgba(255,255,255,0.06)',
        boxShadow: isPositive ? '0 0 40px rgba(187,220,253,0.08), inset 0 1px 0 rgba(255,255,255,0.05)' : 'none',
      }}
    >
      {/* Card header */}
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isPositive ? 'bg-brand/15 border border-brand/25' : 'bg-slate-800/60 border border-slate-700/50'}`}>
          {isPositive
            ? <CheckCircle2 className="w-4 h-4 text-brand" />
            : <AlertCircle className="w-4 h-4 text-slate-500" />
          }
        </div>
        <div>
          <div className={`text-[9px] font-black uppercase tracking-widest ${isPositive ? 'text-brand' : 'text-slate-500'}`}>
            {isPositive ? 'With DevAI Platform' : 'Current Reality'}
          </div>
          <div className={`text-base font-black mt-0.5 ${isPositive ? 'text-white' : 'text-slate-400'}`}>
            {isPositive ? 'The DevAI Way' : 'Without DevAI'}
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-4">
        {items.map(({ title, desc }, i) => (
          <div key={title} className={`flex gap-3 p-3.5 rounded-xl transition-colors ${isPositive ? 'bg-white/[0.03] hover:bg-white/[0.05]' : 'bg-transparent hover:bg-white/[0.02]'}`}>
            <div className="mt-0.5 shrink-0">
              {isPositive
                ? <CheckCircle2 className="w-4 h-4 text-brand" />
                : <XCircle className="w-4 h-4 text-slate-600" />
              }
            </div>
            <div>
              <div className={`text-sm font-bold mb-0.5 ${isPositive ? 'text-white' : 'text-slate-400'}`}>{title}</div>
              <div className={`text-xs font-light leading-relaxed ${isPositive ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompareSection({ onOpenAuth }) {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-64 pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(187,220,253,0.04) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3 py-1 bg-brand/5 rounded-full inline-block">
            <span className="text-brand-gradient">WHY DEVAI</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-tight">
            Stop Coding From Scratch. Start Assembling.
          </h2>
          <p className="font-body text-slate-400 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
            See the difference between legacy manual front-end development and autonomous visual synthesis.
          </p>
        </div>

        {/* Compare grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CompareCard items={WITHOUT} isPositive={false} index={0} />
          <CompareCard items={WITH} isPositive={true} index={1} />
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800/40 my-16" />

        {/* Code Ownership Sub-section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-space-900/30 border border-slate-800/60 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand/5 rounded-full filter blur-[80px] pointer-events-none" />
          
          <div className="md:col-span-7 space-y-4">
            <span className="text-[9px] uppercase font-mono px-2.5 py-1 rounded bg-brand/10 border border-brand/20 text-brand font-extrabold tracking-wider inline-block">
              <span className="text-brand-gradient">FULL FREEDOM</span>
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              Your code stays yours.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-xl">
              Export production-ready React, Vite, and Tailwind CSS code at any time. Continue editing locally, version control with git, or deploy on your own server infrastructure with no proprietary platform lock-in.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-3 text-[11px] font-semibold text-slate-300">
            <div className="flex items-center gap-2 bg-space-950/60 border border-slate-800/85 rounded-xl p-3">
              <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
              <span>Download Source Zip</span>
            </div>
            <div className="flex items-center gap-2 bg-space-950/60 border border-slate-800/85 rounded-xl p-3">
              <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
              <span>React + Vite Export</span>
            </div>
            <div className="flex items-center gap-2 bg-space-950/60 border border-slate-800/85 rounded-xl p-3">
              <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
              <span>Backend API Export</span>
            </div>
            <div className="flex items-center gap-2 bg-space-950/60 border border-slate-800/85 rounded-xl p-3">
              <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
              <span>No Host Lock-in</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-500 text-xs mb-4">Built for builders who value clean code and speed</p>
          <button
            onClick={() => onOpenAuth && onOpenAuth('signup')}
            className="font-display font-bold text-sm px-8 py-3.5 rounded-xl text-[#010412] bg-[#bbdcfd] hover:bg-[#e0f2fe] shadow-[0_4px_24px_rgba(187,220,253,0.3)] transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none"
          >
            Get Started Free →
          </button>
        </div>
      </div>
    </section>
  );
}
