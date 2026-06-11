import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

export default function Testimonials() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ref}
      id="reviews" 
      className={`py-28 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3 py-1 bg-brand/5 rounded-full inline-block">
            <span className="text-brand-gradient">THE BUILDERS WE EMPOWER</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-tight">
            Loved by Developers Globally
          </h2>
          <p className="font-body text-slate-400 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
            Discover how engineering teams build faster, ship cleaner code, and keep previews in one place with DevAI software agents.
          </p>
        </div>

        {/* 6-Card Testimonials Grid (inspired by the reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* ── ROW 1: Profile-only Cards ── */}
          
          {/* Card 1: Alex Rivera (VP of Engineering) - Dark bg */}
          <div className="rounded-[24px] p-6 flex items-center gap-4 border border-slate-800/80 hover:border-brand/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.6) 0%, rgba(3,7,20,0.85) 100%)' }}>
            <img src={REVIEWS[0].avatar} alt={REVIEWS[0].name} className="w-12 h-12 rounded-full border-2 border-brand/35 object-cover" />
            <div>
              <h4 className="text-sm font-black text-white">{REVIEWS[0].name}</h4>
              <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5 text-brand-gradient">{REVIEWS[0].role}</p>
            </div>
          </div>

          {/* Card 2: Sarah Chen (Lead Architect) - Highlighted bg */}
          <div className="rounded-[24px] p-6 flex items-center gap-4 border border-brand/30 hover:border-brand/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(187,220,253,0.15)]"
            style={{ background: 'linear-gradient(135deg, rgba(14,30,80,0.9) 0%, rgba(5,12,40,0.95) 100%)' }}>
            <img src={REVIEWS[1].avatar} alt={REVIEWS[1].name} className="w-12 h-12 rounded-full border-2 border-brand/40 object-cover" />
            <div>
              <h4 className="text-sm font-black text-white">{REVIEWS[1].name}</h4>
              <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5 text-brand-gradient">{REVIEWS[1].role}</p>
            </div>
          </div>

          {/* Card 3: Marcus Dupont (Product Founder) - Dark bg */}
          <div className="rounded-[24px] p-6 flex items-center gap-4 border border-slate-800/80 hover:border-brand/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.6) 0%, rgba(3,7,20,0.85) 100%)' }}>
            <img src={REVIEWS[2].avatar} alt={REVIEWS[2].name} className="w-12 h-12 rounded-full border-2 border-brand/35 object-cover" />
            <div>
              <h4 className="text-sm font-black text-white">{REVIEWS[2].name}</h4>
              <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5 text-brand-gradient">{REVIEWS[2].role}</p>
            </div>
          </div>

          {/* ── ROW 2: Review Quote Cards ── */}

          {/* Card 4: Kanya Srisai (Lead DevOps) - Dark bg */}
          <div className="rounded-[24px] p-6 flex flex-col justify-between border border-slate-800/80 hover:border-brand/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.6) 0%, rgba(3,7,20,0.85) 100%)' }}>
            <div className="space-y-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed italic">
                "DevAI writes cleaner Tailwind than 90% of developers I know. The fact that it searches live API docs on the fly means it never writes deprecated code."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-6 border-t border-slate-800/50 mt-6">
              <img src={REVIEWS[3].avatar} alt={REVIEWS[3].name} className="w-9 h-9 rounded-full object-cover border border-slate-700" />
              <div>
                <h5 className="text-xs font-black text-white">{REVIEWS[3].name}</h5>
                <span className="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mt-0.5">{REVIEWS[3].role}</span>
              </div>
            </div>
          </div>

          {/* Card 5: Alex Rivera (VP of Engineering) - Highlighted bg */}
          <div className="rounded-[24px] p-6 flex flex-col justify-between border border-brand/30 hover:border-brand/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(187,220,253,0.15)]"
            style={{ background: 'linear-gradient(135deg, rgba(14,30,80,0.9) 0%, rgba(5,12,40,0.95) 100%)' }}>
            <div className="space-y-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed italic">
                "DevAI completely redefined how we spin up MVPs. I literally typed 'Design a real-time cluster monitoring tool with warning triggers' and had a working React prototype running in 3 minutes. The web search is hyper-accurate."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-6 border-t border-brand/20 mt-6">
              <img src={REVIEWS[0].avatar} alt={REVIEWS[0].name} className="w-9 h-9 rounded-full object-cover border border-brand/30" />
              <div>
                <h5 className="text-xs font-black text-white">{REVIEWS[0].name}</h5>
                <span className="text-[9px] uppercase tracking-wider font-bold block mt-0.5 text-brand-gradient">{REVIEWS[0].role}</span>
              </div>
            </div>
          </div>

          {/* Card 6: Sarah Chen (Lead Architect) - Dark bg */}
          <div className="rounded-[24px] p-6 flex flex-col justify-between border border-slate-800/80 hover:border-brand/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.6) 0%, rgba(3,7,20,0.85) 100%)' }}>
            <div className="space-y-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed italic">
                "What blew me away was DevAI's multimodal image analysis. I uploaded a handwritten whiteboard wireframe of a billing checkout portal, and it compiled a pixel-perfect, accessible React dashboard with state management."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-6 border-t border-slate-800/50 mt-6">
              <img src={REVIEWS[1].avatar} alt={REVIEWS[1].name} className="w-9 h-9 rounded-full object-cover border border-slate-700" />
              <div>
                <h5 className="text-xs font-black text-white">{REVIEWS[1].name}</h5>
                <span className="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mt-0.5">{REVIEWS[1].role}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
