import React from 'react';
import { Eye, Search, Code2, Globe, Cpu, Zap, Lock, Terminal } from 'lucide-react';

export default function Features() {
  const cards = [
    {
      icon: <Eye className="w-6 h-6 text-brand" />,
      title: "Multimodal Layout Scan",
      desc: "Directly drop sketches, wireframes, whiteboard diagrams, or reference design mockups. DevAI visually parses alignment, typography, and spacing to transpile them into code.",
      tag: "Image Analysis Vision"
    },
    {
      icon: <Search className="w-6 h-6 text-brand" />,
      title: "Live Internet Indexing",
      desc: "Autonomously searches live API documentations, StackOverflow repositories, and NPM index trees on the fly, preventing code generation with deprecated libraries.",
      tag: "Autonomous Web Search"
    },
    {
      icon: <Code2 className="w-6 h-6 text-brand" />,
      title: "Full-Stack Code Synthesis",
      desc: "Assembles robust reactive states, database models, schema entities, API controllers, and style scripts—producing a clean zip bundle configured for instant hot-reload.",
      tag: "React + Vite + PostCSS"
    },
    {
      icon: <Terminal className="w-6 h-6 text-brand" />,
      title: "Simulated Shell sandboxes",
      desc: "Compiles and executes outputs in temporary sandboxed environments. Allows you to interact with live data, mock states, and clickable metrics to verify layouts visually.",
      tag: "Secure Micro-containers"
    }
  ];

  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-space-950 bg-dot-pattern border-t border-slate-900/60 select-none">
      {/* Soft celestial backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3 py-1 bg-brand/5 rounded-full">SUPERPOWERS</span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-tight">
            Designed for Elite Software Teams
          </h2>
          <p className="font-body text-slate-400 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
            Standard LLMs write code. DevAI acts as an autonomous senior systems engineer that searches, 
            sees, validates, and deploys.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="p-5 bg-space-900/40 hover:bg-space-900/70 border border-slate-800/60 hover:border-brand/20 rounded-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center border border-brand/10 group-hover:scale-105 group-hover:border-brand/20 transition-transform duration-300 mb-5">
                  {card.icon}
                </div>
                <span className="text-[9px] uppercase font-bold text-brand tracking-wider block mb-1">{card.tag}</span>
                <h3 className="text-base font-extrabold text-white mb-2 leading-snug">{card.title}</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Softened statistics row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 bg-space-900/20 border border-slate-800/40 rounded-2xl p-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800/40">
          <div className="py-4 sm:py-0 px-4 flex flex-col justify-center items-center">
            <div className="text-base font-extrabold text-brand">Built for modern software teams</div>
            <span className="text-[10px] text-slate-500 block mt-2 max-w-xs leading-relaxed font-semibold uppercase tracking-wider">Engineering scalability</span>
          </div>
          <div className="py-4 sm:py-0 px-4 flex flex-col justify-center items-center">
            <div className="text-base font-extrabold text-white">Designed for fast product builders</div>
            <span className="text-[10px] text-slate-500 block mt-2 max-w-xs leading-relaxed font-semibold uppercase tracking-wider">Zero boilerplate overhead</span>
          </div>
          <div className="py-4 sm:py-0 px-4 flex flex-col justify-center items-center">
            <div className="text-base font-extrabold text-white">Early access for developers & startups</div>
            <span className="text-[10px] text-slate-500 block mt-2 max-w-xs leading-relaxed font-semibold uppercase tracking-wider">Full code ownership</span>
          </div>
        </div>

      </div>
    </section>
  );
}
