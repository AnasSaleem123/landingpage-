import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Cpu, Database, Eye, FileCode, Check } from 'lucide-react';

/* ── Animated SVG Globe / Network ── */
function GlobeNetwork() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-square">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full animate-pulse" style={{ background: 'radial-gradient(circle, rgba(187,220,253,0.12) 0%, transparent 65%)', filter: 'blur(20px)' }} />

      <svg viewBox="0 0 400 400" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 30px rgba(187,220,253,0.2))' }}>
        {/* Outer circle */}
        <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(187,220,253,0.15)" strokeWidth="1" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(187,220,253,0.10)" strokeWidth="0.5" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(187,220,253,0.08)" strokeWidth="0.5" />

        {/* Latitude lines */}
        {[-70, -40, 0, 40, 70].map((lat, i) => {
          const y = 200 + (lat / 90) * 160;
          const r = Math.sqrt(Math.max(0, 160 * 160 - (y - 200) * (y - 200)));
          return r > 5 ? (
            <ellipse key={i} cx="200" cy={y} rx={r} ry={r * 0.28} fill="none" stroke="rgba(187,220,253,0.12)" strokeWidth="0.5" />
          ) : null;
        })}

        {/* Longitude lines */}
        {[0, 36, 72, 108, 144].map((lng, i) => (
          <ellipse key={i} cx="200" cy="200" rx="160" ry={Math.abs(Math.cos((lng * Math.PI) / 180)) * 160} fill="none" stroke="rgba(187,220,253,0.10)" strokeWidth="0.5" transform={`rotate(${lng}, 200, 200)`} />
        ))}

        {/* Connection lines */}
        {[
          [200, 120, 310, 180],
          [310, 180, 280, 280],
          [280, 280, 150, 310],
          [150, 310, 90, 220],
          [90, 220, 200, 120],
          [200, 120, 280, 280],
          [310, 180, 90, 220],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(187,220,253,0.25)" strokeWidth="0.8" strokeDasharray="3 4" />
        ))}

        {/* Node dots */}
        {[
          [200, 120, 1],
          [310, 180, 0.7],
          [280, 280, 0.8],
          [150, 310, 0.6],
          [90, 220, 0.9],
          [240, 195, 0.5],
          [170, 155, 0.6],
        ].map(([cx, cy, opacity], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="8" fill="rgba(187,220,253,0.08)" stroke="rgba(187,220,253,0.4)" strokeWidth="0.8" />
            <circle cx={cx} cy={cy} r="3" fill={`rgba(187,220,253,${opacity})`} />
          </g>
        ))}

        {/* Active highlight node */}
        <g>
          <circle cx="200" cy="120" r="14" fill="none" stroke="rgba(187,220,253,0.5)" strokeWidth="1">
            <animate attributeName="r" values="10;16;10" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="120" r="4" fill="rgba(187,220,253,1)" />
        </g>

        {/* Location pill */}
        <g transform="translate(210, 90)">
          <rect x="0" y="0" width="68" height="18" rx="9" fill="rgba(8,16,43,0.95)" stroke="rgba(187,220,253,0.3)" strokeWidth="0.8" />
          <text x="10" y="12" fontSize="8" fill="rgba(255,255,255,0.8)" fontFamily="monospace">🌐 Global HQ</text>
        </g>
      </svg>
    </div>
  );
}

const STATS = [
  { label: 'Full ownership of generated code', value: '100%', sub: 'OWNERSHIP' },
  { label: 'Average container build speed', value: '< 10s', sub: 'COMPILATION' },
  { label: 'Zero platform proprietary lock-in', value: '0', sub: 'LOCK-IN' },
  { label: 'Collaborative autonomous agents', value: '4', sub: 'AGENTS' },
];

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
  const prefix = target.match(/^[^0-9]*/)?.[0] || '';
  const postfix = target.match(/[^0-9.]+$/)?.[0] || '';

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const steps = 60;
        const stepTime = duration / steps;
        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.min(numericTarget, parseFloat((eased * numericTarget).toFixed(2))));
          if (step >= steps) clearInterval(timer);
        }, stepTime);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericTarget]);

  const display = numericTarget % 1 === 0
    ? Math.round(count).toString()
    : count.toFixed(2);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{display}{postfix}
    </span>
  );
}

const LIFECYCLE_STAGES = [
  {
    id: "vision",
    tab: "01/ Vision Scan",
    title: "Multimodal Layout Scanner",
    icon: <Eye className="w-4 h-4 text-coral-500" />,
    desc: "Drop wireframe sketches, Figma mockups, or drawing uploads directly. DevAI's vision model audits spacings, margins, and alignments to translate visual inputs into a clean component scaffold.",
    cmd: "devai scan --input ./layout-mockup.png",
    stat: "Vision Model Running - 99.4% layout layout transpiler index"
  },
  {
    id: "schema",
    tab: "02/ Schema Sync",
    icon: <Database className="w-4 h-4 text-coral-500" />,
    title: "Autonomous Database & Endpoint Mapping",
    desc: "Specify requirements to synthesize backend REST endpoints, model Express API routers, generate database schema configurations, and establish database entity connections automatically.",
    cmd: "devai db:sync --relations --provider postgresql",
    stat: "API Controllers Synthesized - 0 compilation errors"
  },
  {
    id: "sandbox",
    tab: "03/ Sandbox Run",
    icon: <Cpu className="w-4 h-4 text-coral-500" />,
    title: "Isolated Live Previews",
    desc: "Every edit compiles instantly inside temporary sandboxed web environments. Click through transactions, adjust inputs, and verify state actions live before downloading code.",
    cmd: "devai run:container --port 3000 --hot-reload",
    stat: "Vite Sandbox Live on port 3000 - hot-reload active"
  },
  {
    id: "export",
    tab: "04/ Code Export",
    icon: <FileCode className="w-4 h-4 text-coral-500" />,
    title: "Clean Production Bundling",
    desc: "No proprietary wrapper constraints. Download a standard zip containing clean React scripts, Vite settings, and PostCSS configurations, fully optimized for your development setup.",
    cmd: "devai export --bundle --format react-vite-zip",
    stat: "Production Bundle generated - 100% code ownership"
  }
];

export default function InfraSection({ onOpenAuth }) {
  const headRef = useRef(null);
  const [headVisible, setHeadVisible] = useState(false);
  const [activeStage, setActiveStage] = useState("vision");

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeadVisible(true); }, { threshold: 0.2 });
    if (headRef.current) observer.observe(headRef.current);
    return () => observer.disconnect();
  }, []);

  const stage = LIFECYCLE_STAGES.find(s => s.id === activeStage);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 select-none overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #010412 0%, #020820 50%, #010412 100%)' }}>

      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(187,220,253,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Interactive Selector + Stats */}
          <div
            ref={headRef}
            className={`lg:col-span-7 transition-all duration-700 space-y-6 text-left ${headVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3.5 py-1 bg-brand/5 rounded-full inline-block">
              <span className="text-brand-gradient">LIFECYCLE</span>
            </span>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white mt-4 leading-[1.08] tracking-tight">
              From Prompt to
              <br />
              <span className="text-brand-gradient">
                Production.
              </span>
            </h2>

            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-lg">
              DevAI automates the entire software cycle. Click the stages below to explore our interactive compilation workflow steps in real-time.
            </p>

            {/* Interactive Lifecycle Stage Selection Tabs */}
            <div className="flex flex-wrap gap-2 pt-2">
              {LIFECYCLE_STAGES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStage(s.id)}
                  className={`px-3.5 py-2 rounded-xl border text-[11px] font-bold tracking-wide transition-all duration-300 focus:outline-none ${
                    activeStage === s.id
                      ? 'bg-coral-500/10 border-coral-500/35 text-coral-400 shadow-[0_0_12px_rgba(255,90,95,0.12)]'
                      : 'bg-[#010412]/60 border-slate-900 text-slate-500 hover:text-slate-350 hover:border-slate-800'
                  }`}
                >
                  {s.tab}
                </button>
              ))}
            </div>

            {/* Stage Detail card with Shell emulator */}
            <div className="p-6 rounded-2xl bg-[#030712]/55 border border-slate-850 space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-coral-500/10 flex items-center justify-center border border-coral-500/20 shrink-0">
                  {stage.icon}
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                  {stage.title}
                </h3>
              </div>
              
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {stage.desc}
              </p>

              {/* Console simulator window */}
              <div className="bg-[#010412] rounded-xl p-4 border border-slate-900 font-mono text-[10px] space-y-1.5">
                <div className="text-slate-600 flex justify-between select-none">
                  <span>bash: devai-compiler</span>
                  <span className="text-[8px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold uppercase">compiled</span>
                </div>
                <div className="text-slate-200 font-bold leading-normal">$ {stage.cmd}</div>
                <div className="text-emerald-400 text-[9px] mt-1.5 flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  {stage.stat}
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {STATS.map(({ label, value, sub }) => (
                <div key={sub} className="rounded-2xl p-4 bg-[#030712]/55 border border-slate-850 hover:border-coral-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,90,95,0.04)]">
                  <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1">{sub}</div>
                  <div className="text-xl font-black text-white leading-none">
                    <AnimatedCounter target={value} />
                  </div>
                  <div className="text-[9px] text-slate-500 mt-1 font-light leading-normal">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Globe (Reverted back to SVG Globe Network) */}
          <div className={`lg:col-span-5 relative transition-all duration-700 delay-200 ${headVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <GlobeNetwork />
          </div>

        </div>
      </div>
    </section>
  );
}
