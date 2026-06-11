import React, { useEffect, useRef, useState } from 'react';
import { Play, Search, Monitor, Code, Cpu, RefreshCw, Lock, Sparkles } from 'lucide-react';

export default function PlatformGrid() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ref}
      className={`relative py-24 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none overflow-hidden transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Background grid + glowing center */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 border border-sky-500/20 px-3 py-1 bg-sky-500/5 rounded-full">
            Autonomous Capabilities
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-tight">
            How DevAI Builds the Web
          </h2>
          <p className="font-body text-slate-400 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
            Witness our agent compile clean structures, research API changes, and verify code live in isolated sandboxes.
          </p>
        </div>

        {/* Asymmetric Grid: spans 4 columns on desktop (2-1-1) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* ── CARD 1: Autonomous UI Compilation (Wider card - spans 2 cols) ── */}
          <div className="lg:col-span-2 rounded-[32px] overflow-hidden border border-slate-800/80 hover:border-sky-500/20 bg-gradient-to-b from-slate-900/85 to-space-950/95 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_15px_40px_rgba(56,189,248,0.06)]">
            
            {/* Top Mockup Area */}
            <div className="p-8 pb-4 bg-[#0a0f2e]/40 border-b border-slate-900 flex items-center justify-center min-h-[260px] relative">
              <div className="absolute inset-0 bg-dot-pattern opacity-40" />
              
              {/* Interactive Layout board mockup */}
              <div className="relative w-full max-w-[420px] bg-[#020512] rounded-2xl border border-slate-800/80 p-5 shadow-2xl flex items-center justify-between gap-6 overflow-hidden">
                {/* Glowing decorative indicator */}
                <div className="absolute -right-10 -top-10 w-24 h-24 bg-sky-500/10 rounded-full blur-xl" />

                {/* Left circular build status button */}
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-full bg-sky-500/15 border border-sky-500/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
                      <Play className="w-5.5 h-5.5 fill-white text-white translate-x-0.5" />
                    </div>
                  </div>
                  {/* Small pulse dot */}
                  <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#020512] animate-pulse" />
                </div>

                {/* Center Console Status */}
                <div className="flex-1 min-w-0 font-mono text-[10px] space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500 font-bold uppercase tracking-wider">COMPILING</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                  </div>
                  <div className="text-sm font-black text-white leading-none">00:45 SEC</div>
                  
                  {/* Compilation code line wave */}
                  <div className="flex items-end gap-1 h-6 pt-1">
                    {[30, 60, 45, 80, 50, 95, 70, 40].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 rounded-sm bg-sky-500/30" 
                        style={{ 
                          height: `${h}%`,
                          animation: `pulse 1.5s ease-in-out infinite`,
                          animationDelay: `${i * 0.15}s`
                        }} 
                      />
                    ))}
                  </div>
                </div>

                {/* Right Node Tag */}
                <div className="shrink-0 flex flex-col items-end gap-1.5 justify-between h-full">
                  <div className="bg-[#0b132d] border border-sky-500/25 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span className="text-[8px] font-bold text-sky-300 font-mono uppercase tracking-wider">Vite Node</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-8">
              <h3 className="font-display font-black text-2xl text-white tracking-tight leading-snug">
                Autonomous Site Synthesis
              </h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed mt-3 max-w-lg">
                Launch clean, responsive layout scaffolds directly from plain description prompts. 
                DevAI automatically synthesizes reactive states, style layers, and components, outputting structured code in real time.
              </p>
            </div>

          </div>

          {/* ── CARD 2: Documentation Search Engine (Narrow card - spans 1 col) ── */}
          <div className="lg:col-span-1 rounded-[32px] overflow-hidden border border-slate-800/80 hover:border-sky-500/20 bg-gradient-to-b from-slate-900/85 to-space-950/95 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_15px_40px_rgba(56,189,248,0.06)]">
            
            {/* Top Mockup Area */}
            <div className="p-6 pb-4 bg-[#0a0f2e]/40 border-b border-slate-900 flex items-center justify-center min-h-[260px] relative">
              <div className="absolute inset-0 bg-dot-pattern opacity-40" />

              {/* Chat bubble search query mockup */}
              <div className="relative w-full max-w-[220px] flex flex-col gap-3 font-sans">
                {/* Search Query Message Bubble */}
                <div className="self-end bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl rounded-tr-sm p-3.5 text-[10px] leading-relaxed shadow-lg font-medium">
                  I need to import the latest Tailwind layout rules and components.
                </div>

                {/* Crawler Response Dots Indicator */}
                <div className="self-start bg-[#020512] border border-slate-800 rounded-xl px-3 py-2.5 flex items-center gap-2.5 shadow-xl">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-[9px] font-mono text-purple-300 uppercase font-black tracking-wider">CRAWLING DOCS</span>
                </div>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-6">
              <h3 className="font-display font-black text-lg text-white tracking-tight leading-snug">
                Live Web Indexing
              </h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed mt-2.5">
                Autonomously searches live packages, indexes StackOverflow threads, and inspects updated library syntaxes to avoid code generation with deprecated methods.
              </p>
            </div>

          </div>

          {/* ── CARD 3: Interactive Sandboxed Preview (Narrow card - spans 1 col) ── */}
          <div className="lg:col-span-1 rounded-[32px] overflow-hidden border border-slate-800/80 hover:border-sky-500/20 bg-gradient-to-b from-slate-900/85 to-space-950/95 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_15px_40px_rgba(56,189,248,0.06)]">
            
            {/* Top Mockup Area */}
            <div className="p-6 pb-4 bg-[#0a0f2e]/40 border-b border-slate-900 flex items-center justify-center min-h-[260px] relative">
              <div className="absolute inset-0 bg-dot-pattern opacity-40" />

              {/* Sandbox Server Live status card mockup */}
              <div className="relative w-full max-w-[220px] bg-[#020512] rounded-2xl border border-slate-800/80 overflow-hidden shadow-2xl flex flex-col font-mono text-[9px]">
                {/* Header title */}
                <div className="px-3 py-2 border-b border-slate-800/80 bg-[#070e28]/50 flex justify-between items-center">
                  <span className="text-[8px] font-bold text-slate-400 tracking-wider">SANDBOX STATUS</span>
                  <RefreshCw className="w-3 h-3 text-slate-500 group-hover:rotate-180 transition-transform duration-700" />
                </div>
                
                {/* Center Content */}
                <div className="p-4 flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-sans font-black text-white text-[10px] uppercase tracking-wider leading-none">PREVIEW ONLINE</div>
                    <span className="text-[8px] text-slate-500">PORTAL COMPASS SECURED</span>
                  </div>
                </div>

                {/* Footer address */}
                <div className="bg-[#060b24] border-t border-slate-800/80 px-3 py-2 text-center text-emerald-400 font-bold tracking-tight text-[8px]">
                  localhost:3000/sandbox
                </div>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-6">
              <h3 className="font-display font-black text-lg text-white tracking-tight leading-snug">
                Isolated Sandbox
              </h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed mt-2.5">
                Run compiled code instantenously in isolated visual sandbox containers. Interact with states, links, and data tables to review outputs before deployment.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
