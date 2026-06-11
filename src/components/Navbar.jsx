import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenAuth, onOpenContact, onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      setScrolled(scrollPos > 15);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true });
    // Trigger initially in case page is loaded scrolled
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav
      className="sticky top-0 z-40 w-full select-none transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(3, 7, 20, 0.78)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(187, 220, 253, 0.12)'
          : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.7)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Custom DevAI Sparkle Icon */}
            <div className="flex items-center gap-0.5 text-glow-blue">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-brand" style={{ filter: 'drop-shadow(0 0 8px rgba(187,220,253,0.7))' }}>
                <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z" />
              </svg>
            </div>
            <span
              className="font-display font-black text-sm uppercase tracking-widest text-white"
              style={{ letterSpacing: '0.25em' }}
            >
              DevAI
            </span>
          </div>

          {/* ── Nav Links (center) ── */}
          <div className="hidden md:flex items-center space-x-9">
            <a
              href="#features"
              className="font-display text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
              style={{ color: 'rgba(255, 255, 255, 0.70)' }}
              onMouseEnter={e => e.target.style.color = '#ffffff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255, 255, 255, 0.70)'}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="font-display text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
              style={{ color: 'rgba(255, 255, 255, 0.70)' }}
              onMouseEnter={e => e.target.style.color = '#ffffff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255, 255, 255, 0.70)'}
            >
              How It Works
            </a>
            <a
              href="#showcase"
              className="font-display text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
              style={{ color: 'rgba(255, 255, 255, 0.70)' }}
              onMouseEnter={e => e.target.style.color = '#ffffff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255, 255, 255, 0.70)'}
            >
              Showcase
            </a>
            <a
              href="#pricing"
              className="font-display text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
              style={{ color: 'rgba(255, 255, 255, 0.70)' }}
              onMouseEnter={e => e.target.style.color = '#ffffff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255, 255, 255, 0.70)'}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="font-display text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
              style={{ color: 'rgba(255, 255, 255, 0.70)' }}
              onMouseEnter={e => e.target.style.color = '#ffffff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255, 255, 255, 0.70)'}
            >
              FAQ
            </a>
          </div>

          {/* ── Right CTAs ── */}
          <div className="flex items-center gap-6">
            {/* "Sign in" link */}
            <button
              onClick={() => onOpenAuth('login')}
              className="font-display text-xs font-semibold uppercase tracking-wider transition-colors duration-200 focus:outline-none"
              style={{ color: 'rgba(255, 255, 255, 0.80)' }}
              onMouseEnter={e => e.target.style.color = '#ffffff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255, 255, 255, 0.80)'}
            >
              Sign in
            </button>

            {/* "Get Started" white button */}
            <button
              onClick={() => onOpenAuth('signup')}
              className="font-display font-bold text-xs px-5 py-2.5 rounded-lg bg-[#bbdcfd] hover:bg-[#e0f2fe] text-[#050a1e] shadow-[0_4px_16px_rgba(187,220,253,0.25)] active:scale-95 transition-all duration-200 focus:outline-none"
            >
              Get Started
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
