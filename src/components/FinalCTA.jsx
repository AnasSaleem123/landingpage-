import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function FinalCTA({ onOpenAuth, onOpenDemo }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none overflow-hidden">
      {/* Background celestial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Glow board container */}
        <div className="rounded-3xl border border-brand/15 bg-gradient-to-br from-space-900/90 to-space-950/90 p-8 sm:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full filter blur-[100px] pointer-events-none" />
          
          {/* Label */}
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3.5 py-1 bg-brand/5 rounded-full inline-block">
            <span className="text-brand-gradient">IMMEDIATE DEPLOYMENT</span>
          </span>

          {/* Heading */}
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mt-6 tracking-tight leading-tight max-w-2xl mx-auto">
            Ready to build your next app with AI?
          </h2>

          {/* Subheading */}
          <p className="font-body text-slate-400 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
            Start with a prompt, upload a design layout, or compile a prototype sandbox. Get production-ready, exportable React code in seconds.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            
            {/* Primary button: Start Building */}
            <button
              onClick={() => onOpenAuth && onOpenAuth('signup')}
              className="w-full sm:w-auto font-display font-bold text-xs px-8 py-4 rounded-lg bg-[#bbdcfd] hover:bg-[#e0f2fe] text-[#050a1e] shadow-[0_4px_20px_rgba(187,220,253,0.3)] active:scale-95 transition-all duration-200 focus:outline-none flex items-center justify-center gap-2"
            >
              Start Building Now <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Secondary button: Watch Demo */}
            <button
              onClick={() => onOpenDemo && onOpenDemo()}
              className="w-full sm:w-auto font-display font-bold text-xs px-8 py-4 rounded-lg border border-[#bbdcfd]/35 text-[#bbdcfd] bg-transparent hover:bg-[#bbdcfd]/10 hover:border-[#bbdcfd]/50 active:scale-95 transition-all duration-200 focus:outline-none flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" /> Watch Demo
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
