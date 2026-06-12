import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function FinalCTA({ onOpenAuth, onOpenDemo }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // Simulate API request
    setSubscribed(true);
    setEmail('');
  };

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
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 border-b border-slate-900/60 pb-12">
            
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

          {/* Subscription Letter Form */}
          <div className="mt-12 max-w-md mx-auto space-y-4 text-left">
            <div className="text-center sm:text-left">
              <h3 className="font-display font-extrabold text-xs text-white uppercase tracking-widest">
                Subscribe to our developer newsletter
              </h3>
              <p className="text-[11px] text-slate-400 mt-1.5 font-light leading-relaxed">
                Receive weekly updates on autonomous multi-agent compilation, vision models benchmarks, and raw template source releases.
              </p>
            </div>
            
            {subscribed ? (
              <div className="p-3.5 rounded-xl border border-coral-500/25 bg-coral-500/10 text-coral-400 font-display font-bold text-xs text-center animate-fadeIn">
                ✓ Welcome to the cohort! Check your email for early developer sandbox access credentials.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 mt-2 select-text">
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your developer email..."
                  className="flex-1 bg-[#010412]/80 border border-slate-800/80 focus:border-[#bbdcfd]/50 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-0 shadow-inner"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-display font-bold text-xs transition-colors duration-200 active:scale-95 focus:outline-none whitespace-nowrap shadow-[0_4px_12px_rgba(255,90,95,0.15)]"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
