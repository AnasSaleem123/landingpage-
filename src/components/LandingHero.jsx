import React from 'react';
import AgentTerminal from './AgentTerminal';
import neoneBg from '../neone-bg.png';

export default function LandingHero({ onOpenDemo, onOpenAuth }) {
  return (
    <section className="relative bg-[#010412] select-none pb-24">
      
      {/* ── BACKGROUND CONTAINER ── */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none bg-[#010412]"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, #010412 0%, transparent 12%, transparent 75%, #010412 100%),
            linear-gradient(to right, #010412 0%, transparent 12%, transparent 88%, #010412 100%),
            url(${neoneBg})
          `,
          backgroundSize: '100% 880px, 100% 880px, 100% 880px',
          backgroundPosition: 'center top, center top, center top',
          backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
          zIndex: 0,
        }}
      >
        {/* ── GLOW ENHANCER BACKDROP ── */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[800px] h-[220px] pointer-events-none"
          style={{
            top: '680px',
            background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(187,220,253,0.85) 0%, rgba(147,197,253,0.4) 55%, transparent 100%)',
            filter: 'blur(25px)',
            zIndex: 1,
          }}
        />

        {/* ── GLITTERS / SPARKLES ── */}
        <div className="absolute inset-x-0 pointer-events-none" style={{ top: '755px', height: '120px', zIndex: 5 }}>
          <div className="absolute bg-white rounded-full animate-pulse"
            style={{ left: '42%', top: '35px', width: '3.5px', height: '3.5px', boxShadow: '0 0 12px 3px rgba(255,255,255,1), 0 0 20px 5px rgba(187,220,253,0.85)', opacity: 0.95 }}
          />
          <div className="absolute bg-white rounded-full animate-ping"
            style={{ left: '45%', top: '55px', width: '2px', height: '2px', opacity: 0.8 }}
          />
          <div className="absolute bg-white rounded-full animate-pulse"
            style={{ left: '48%', top: '20px', width: '4.5px', height: '4.5px', boxShadow: '0 0 14px 4px rgba(255,255,255,1), 0 0 24px 6px rgba(187,220,253,0.9)', opacity: 1, animationDelay: '0.5s' }}
          />
          <div className="absolute bg-white rounded-full animate-pulse"
            style={{ left: '52%', top: '45px', width: '2.5px', height: '2.5px', boxShadow: '0 0 9px 2px rgba(255,255,255,0.9), 0 0 16px 3px rgba(187,220,253,0.7)', opacity: 0.85, animationDelay: '1.2s' }}
          />
          <div className="absolute bg-white rounded-full animate-pulse"
            style={{ left: '55%', top: '30px', width: '3.5px', height: '3.5px', boxShadow: '0 0 11px 3px rgba(255,255,255,0.95), 0 0 18px 4px rgba(187,220,253,0.8)', opacity: 0.9, animationDelay: '0.8s' }}
          />
          <div className="absolute bg-white rounded-full animate-ping"
            style={{ left: '58%', top: '60px', width: '2px', height: '2px', opacity: 0.75 }}
          />
        </div>
      </div>

      {/* ── CONTENT FLOW ── */}
      <div className="relative w-full flex flex-col items-center px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
        
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-[310px]">
          
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-white text-[12px] font-display font-medium tracking-wide cursor-default select-none"
            style={{
              background: 'rgba(20, 28, 55, 0.60)',
              border: '1px solid rgba(255, 255, 255, 0.10)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <span className="w-1.5 h-1.5 rotate-45 bg-gradient-to-tr from-brand to-white" />
            <span className="text-brand">Early Access Beta</span>
          </div>

          {/* Title */}
          <h1
            className="font-display font-black tracking-tight leading-[1.08] mb-6 text-white"
            style={{ fontSize: 'clamp(2.4rem, 6.5vw, 4.4rem)', letterSpacing: '-0.02em' }}
          >
            Build Faster With
            <br />
            <span
              className="text-brand-gradient"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(187, 220, 253, 0.3))',
              }}
            >
              DevAI Engine
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-body font-light leading-relaxed mb-8 text-[#94a3b8]"
            style={{ fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)', maxWidth: '520px' }}
          >
            An autonomous AI software engineer that crawls documentation, 
            compiles reactive components, and deploys web applications live in isolated sandboxes.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row gap-4 mb-16 relative">
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[140px] pointer-events-none rounded-full"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(187,220,253,0.35) 0%, transparent 100%)',
                filter: 'blur(20px)',
                zIndex: -1,
              }}
            />
            <button
              onClick={() => onOpenAuth('signup')}
              className="font-display font-bold text-sm px-7 py-3 rounded-xl bg-[#bbdcfd] hover:bg-[#e0f2fe] text-[#010412] shadow-[0_4px_20px_rgba(187,220,253,0.35),0_4px_16px_rgba(255,255,255,0.12)] active:scale-95 transition-all duration-200 focus:outline-none"
            >
              Get Started
            </button>

            <button
              onClick={onOpenDemo}
              className="font-display font-bold text-sm px-7 py-3 rounded-xl bg-[#030822]/45 hover:bg-[#060d33]/65 text-white/85 border border-white/10 backdrop-blur-md active:scale-95 transition-all duration-200 focus:outline-none flex items-center gap-2"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* ── Dashboard Terminal — in normal document flow, no longer absolute ── */}
        <div className="w-full max-w-4xl">
          <AgentTerminal onOpenAuth={onOpenAuth} />
        </div>
      </div>
    </section>
  );
}
