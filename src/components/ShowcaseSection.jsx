import React, { useEffect, useRef, useState } from 'react';
import { Code2, Search, Cpu, Play, CheckCircle2, ArrowRight, Server, Terminal, Lock } from 'lucide-react';

/* ── Mock UI snippets rendered directly as JSX ── */

function CodeSynthesisMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl" style={{ background: '#040819' }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-900 bg-[#070e28]/55">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="text-[10px] text-slate-400 ml-2 font-mono">App.tsx</span>
      </div>
      <div className="p-4 space-y-3 font-mono text-[10.5px]">
        {/* Mock React IDE */}
        <div className="rounded-xl p-3 border border-slate-800/60 bg-[#020512] text-slate-300 space-y-1">
          <div className="text-slate-500">{"// 1. Initializing state mapping"}</div>
          <div><span className="text-purple-400">const</span> [layout, setLayout] = <span className="text-sky-400">useState</span>(<span className="text-amber-300">"grid-3"</span>);</div>
          <div><span className="text-purple-400">const</span> [isLoaded, setIsLoaded] = <span className="text-sky-400">useState</span>(<span className="text-purple-400">true</span>);</div>
          <div className="pt-2 text-slate-500">{"// 2. Transpiled visual block"}</div>
          <div><span className="text-purple-400">return</span> (</div>
          <div className="pl-4">&lt;<span className="text-blue-400">section</span> className=<span className="text-amber-300">"grid grid-cols-3 gap-6"</span>&gt;</div>
          <div className="pl-8">{"{items.map(i => <Card key={i.id} data={i} />)}"}</div>
          <div className="pl-4">&lt;/<span className="text-blue-400">section</span>&gt;</div>
          <div>);</div>
        </div>
        
        {/* Simulation variables */}
        <div className="flex gap-3 text-[10px]">
          <div className="flex-1 rounded-xl p-2.5 border border-slate-800/60 bg-[#0d1235] text-center">
            <span className="text-slate-500 block uppercase text-[8px] font-bold">Compiled Components</span>
            <span className="text-white font-extrabold text-xs block mt-1">24 Entities</span>
          </div>
          <div className="flex-1 rounded-xl p-2.5 border border-slate-800/60 bg-[#0d1235] text-center">
            <span className="text-slate-500 block uppercase text-[8px] font-bold">Hot-Reload Rate</span>
            <span className="text-emerald-400 font-extrabold text-xs block mt-1">0.12ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentationSearchMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl" style={{ background: '#040819' }}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-900 bg-[#070e28]/55">
        <span className="text-[10px] font-bold text-white flex items-center gap-1.5">
          <Search className="w-3.5 h-3.5 text-brand" /> Web Crawler Index
        </span>
        <span className="text-[8px] bg-brand/10 text-brand px-2 py-0.5 rounded-full border border-brand/20">Live Search Active</span>
      </div>
      
      {/* Live web query logs */}
      <div className="p-3.5 space-y-2 font-mono text-[9px]">
        {[
          { query: "tailwindcss v4.0.0 container specifications", status: "Indexed", time: "0.2s" },
          { query: "lucide-react dynamic exports breaking changes", status: "Analyzed", time: "0.4s" },
          { query: "vite config css import syntax guidelines", status: "Parsed", time: "0.1s" },
        ].map((item, idx) => (
          <div key={idx} className="p-2.5 rounded-xl border border-slate-800 bg-[#020512] flex items-center justify-between hover:border-slate-700 transition-colors">
            <div className="truncate pr-3">
              <span className="text-slate-500 uppercase mr-1.5 font-bold">GET</span>
              <span className="text-slate-300">{item.query}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-slate-500">{item.time}</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-[8px]">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualSandboxMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl" style={{ background: '#040819' }}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-900 bg-[#070e28]/55">
        <div className="flex items-center gap-1 text-[10px] text-slate-400">
          <Lock className="w-3 h-3 text-emerald-400" />
          <span className="font-mono text-slate-400">https://sandbox.devai.software/local-app</span>
        </div>
        <span className="text-[8px] bg-emerald-500/25 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/25">Live</span>
      </div>
      <div className="p-4 space-y-3.5">
        <div className="flex items-center justify-between text-xs border-b border-slate-900 pb-2">
          <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Local Sandbox Engine</span>
          <span className="text-slate-500 font-mono text-[9px]">Uptime: 100%</span>
        </div>

        {/* Demo container previewing standard components */}
        <div className="rounded-xl border border-slate-800 bg-[#020512] p-3.5 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold">Interactive Sandbox Output</span>
            <div className="text-[11px] font-black text-white">SaaS Landing Page Header</div>
          </div>
          <button className="px-3 py-1.5 rounded-lg bg-brand text-[#050a1e] font-bold text-[9px] hover:bg-[#e0f2fe] transition-colors uppercase tracking-wider">
            Click Action
          </button>
        </div>

        {/* Console diagnostics log stream */}
        <div className="p-2.5 rounded-lg bg-[#020512]/60 border border-slate-850 font-mono text-[9px] text-slate-500">
          <span className="text-emerald-400">[info]</span> Sandbox container launched on port 3000
          <br />
          <span className="text-brand">[ready]</span> Hot reloading system initialized. Watching files...
        </div>
      </div>
    </div>
  );
}

const SHOWCASES = [
  {
    tag: 'Autonomous Development',
    title: 'Code Synthesis from Ideas',
    desc: 'Stop coding layouts from scratch. Write plain descriptions, scan wireframes, and let DevAI assemble robust state structures, reactive states, styles, and full layouts instantly.',
    perks: ['Responsive layout synthesis', 'State-management configuration', 'Downloadable React + Vite bundles'],
    icon: <Code2 className="w-5 h-5 text-brand" />,
    mockup: <CodeSynthesisMockup />,
    reverse: false,
  },
  {
    tag: 'Real-Time Web Intelligence',
    title: 'Live Internet Search Indexing',
    desc: 'DevAI searches, reads, and crawls live documentation and NPM package trees on the fly. It writes correct code conforming to the latest specifications, avoiding compilation errors.',
    perks: ['Autonomous documentation crawling', 'Deprecated library checks', 'Real-time API syntax resolution'],
    icon: <Search className="w-5 h-5 text-brand" />,
    mockup: <DocumentationSearchMockup />,
    reverse: true,
  },
  {
    tag: 'Safe Sandbox Testing',
    title: 'Isolated Interactive Sandboxes',
    desc: 'Verify layout features without deploying anything to production. Instantly run the compiled modules in isolated temporary visual containers to check details and interact with button flows.',
    perks: ['Live visual container runtime', 'State-tracking click logs', 'Fully isolated micro-server'],
    icon: <Cpu className="w-5 h-5 text-brand" />,
    mockup: <VisualSandboxMockup />,
    reverse: false,
  },
];

function ShowcaseCard({ tag, title, desc, perks, icon, mockup, reverse, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Text side */}
      <div className={reverse ? 'lg:order-2' : 'lg:order-1'}>
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-brand text-[10px] font-bold uppercase tracking-widest border border-brand/20 bg-brand/5">
          {icon}
          <span className="text-brand-gradient">{tag}</span>
        </div>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-white leading-tight mb-4">
          {title}
        </h3>
        <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 max-w-md">
          {desc}
        </p>
        <ul className="space-y-2.5">
          {perks.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* Mockup side */}
      <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'} relative`}>
        {/* Glow behind mockup */}
        <div className="absolute -inset-4 rounded-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(187,220,253,0.08) 0%, transparent 70%)' }} />
        {mockup}
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(187,220,253,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(187,220,253,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3 py-1 bg-brand/5 rounded-full inline-block">
            <span className="text-brand-gradient">PLATFORM FEATURES</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-tight">
            How DevAI Builds Awesome Sites
          </h2>
          <p className="font-body text-slate-400 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
            From autonomous component styling to live documentation indexing — all in one unified sandbox.
          </p>
        </div>

        {/* Showcase rows */}
        <div className="space-y-28">
          {SHOWCASES.map((s, i) => (
            <ShowcaseCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
