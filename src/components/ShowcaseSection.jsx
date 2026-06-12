import React, { useEffect, useRef, useState } from 'react';
import readyToUseImg from '../ready-to-use.png';

export default function ShowcaseSection() {
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
    <section id="showcase" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.03) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
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

        {/* Two-Column split layout matching the IDE screenshot grid */}
        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-5 text-left space-y-6">
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white leading-[1.15] tracking-tight">
              Ready for actual use right out of the box
            </h3>
            
            <p className="font-body text-slate-400 text-sm leading-relaxed font-light">
              Mission-critical tools and a wide variety of supported languages and frameworks are at your fingertips – no plugin hassle included.
            </p>

            {/* Subtle aesthetic details */}
            <div className="pt-2 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider font-bold">Zero integration overhead</span>
            </div>
          </div>

          {/* Right Column: IDE mockup screenshot */}
          <div className="lg:col-span-7 relative group">
            {/* Glowing violet-indigo backshadow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/15 to-indigo-600/10 rounded-3xl filter blur-[30px] pointer-events-none opacity-80 group-hover:opacity-100 transition-all duration-500" />
            
            <div className="relative rounded-2xl border border-slate-800/80 bg-space-950 shadow-2xl overflow-hidden">
              <img 
                src={readyToUseImg} 
                alt="IDE environment integration" 
                className="w-full h-auto object-cover relative z-10 transition-transform duration-500 group-hover:scale-[1.01]" 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
