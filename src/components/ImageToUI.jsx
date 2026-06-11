import React, { useState, useEffect } from 'react';
import { ImageIcon, Eye, Code, ArrowRight, Play } from 'lucide-react';
import compiledCodeImg from '../compiled_code_preview.png';

export default function ImageToUI() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle through the demo steps to make the page feel alive and interactive
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: "1. Upload Mockup",
      desc: "Drag-and-drop wireframes, sketches, whiteboard drawings, or high-fidelity design screenshots.",
      badge: "Vision Input"
    },
    {
      title: "2. Multimodal Scan",
      desc: "Vision models map structure, margins, components, text bounds, and structural flex alignments.",
      badge: "AI Vision Parsing"
    },
    {
      title: "3. Compiled React Code",
      desc: "Generates semantic HTML, clean state properties, and responsive Tailwind styling instantly.",
      badge: "Sandbox Export"
    }
  ];

  return (
    <section id="image-to-ui" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none overflow-hidden">
      {/* Background glow styling */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Context Copy */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3 py-1 bg-brand/5 rounded-full">
              VISUAL REPLICATION
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Turn Reference Images into Code
            </h2>
            <p className="font-body text-slate-400 text-sm font-light leading-relaxed">
              Skip translating wireframes by hand. Upload design blueprints, whiteboard mockups, or screenshots of existing sites. DevAI instantly recognizes the visual structure and outputs responsive code.
            </p>

            {/* Interactive Step Switcher Indicators */}
            <div className="space-y-4 pt-4">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                    activeStep === idx
                      ? 'bg-space-900/80 border-brand/30 shadow-lg'
                      : 'bg-transparent border-transparent hover:bg-space-900/30'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border text-xs font-bold ${
                    activeStep === idx
                      ? 'bg-brand/10 border-brand/30 text-brand'
                      : 'bg-slate-950 border-slate-800 text-slate-500'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${activeStep === idx ? 'text-white' : 'text-slate-400'}`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-normal font-light">
                      {step.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Process Demo Panel */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-slate-800/80 bg-space-900/60 p-6 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">
              
              {/* Fake Window Controls */}
              <div className="flex items-center justify-between border-b border-slate-800/50 pb-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <span className="text-[10px] text-slate-500 font-mono ml-2">multimodal_vision_sandbox.log</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-brand/10 border border-brand/20 text-brand">
                    {steps[activeStep].badge}
                  </span>
                </div>
              </div>

              {/* Demo States Display container */}
              <div className="flex-1 relative flex items-center justify-center rounded-xl bg-space-950/70 border border-slate-900/80 overflow-hidden">
                
                {/* Step 1: Raw Blue Wireframe Sketch */}
                {activeStep === 0 && (
                  <div className="w-full h-full p-8 flex flex-col justify-between animate-fadeIn text-brand/40">
                    <div className="h-6 w-1/4 rounded border border-dashed border-brand/30 flex items-center justify-center text-[9px] uppercase tracking-wider">Logo</div>
                    <div className="flex-1 flex gap-4 my-6">
                      <div className="w-2/3 h-full rounded border border-dashed border-brand/30 flex flex-col justify-between p-4">
                        <div className="h-4 w-3/4 rounded border border-dashed border-brand/30" />
                        <div className="h-12 w-full rounded border border-dashed border-brand/30" />
                        <div className="h-6 w-1/3 rounded border border-dashed border-brand/30" />
                      </div>
                      <div className="w-1/3 h-full rounded border border-dashed border-brand/30 flex items-center justify-center text-[9px] uppercase tracking-wider">Sidebar Image</div>
                    </div>
                    <div className="h-8 w-full rounded border border-dashed border-brand/30 flex items-center justify-center text-[9px] uppercase tracking-wider">Call to Action Button</div>
                  </div>
                )}

                {/* Step 2: Vision Analysis with Laser scanner scanline overlay */}
                {activeStep === 1 && (
                  <div className="w-full h-full p-8 flex flex-col justify-between relative animate-fadeIn text-brand">
                    {/* Laser line scan overlay animation */}
                    <div className="absolute left-0 right-0 h-0.5 bg-brand/80 shadow-[0_0_15px_rgba(187,220,253,0.8)] animate-[scan_2s_ease-in-out_infinite] z-20" />

                    <div className="h-6 w-1/4 rounded border border-brand/30 bg-brand/5 relative flex items-center px-2">
                      <span className="text-[7px] font-mono absolute -top-3 left-0 text-brand">#header-logo</span>
                      <div className="h-1.5 w-1/2 bg-brand/30 rounded" />
                    </div>
                    
                    <div className="flex-1 flex gap-4 my-6">
                      <div className="w-2/3 h-full rounded border border-brand/30 bg-brand/5 relative p-4 flex flex-col justify-between">
                        <span className="text-[7px] font-mono absolute -top-3 left-0 text-brand">.main-content-hero</span>
                        <div className="h-2 w-3/4 bg-brand/30 rounded" />
                        <div className="h-8 w-full bg-brand/20 rounded mt-2" />
                        <div className="h-4 w-1/3 bg-brand/30 rounded mt-2" />
                      </div>
                      <div className="w-1/3 h-full rounded border border-brand/30 bg-brand/5 relative flex flex-col items-center justify-center">
                        <span className="text-[7px] font-mono absolute -top-3 left-0 text-brand">img.hero-cover</span>
                        <ImageIcon className="w-6 h-6 text-brand/40" />
                      </div>
                    </div>

                    <div className="h-8 w-full rounded border border-brand/40 bg-brand/10 relative flex items-center justify-center">
                      <span className="text-[7px] font-mono absolute -top-3 left-0 text-brand">button.cta-primary</span>
                      <div className="h-2 w-1/4 bg-brand/40 rounded animate-pulse" />
                    </div>
                  </div>
                )}

                {/* Step 3: Beautiful Rendered React Sandbox Output */}
                {activeStep === 2 && (
                  <div className="w-full h-full p-8 flex flex-col justify-between bg-gradient-to-br from-space-950 to-space-900 text-white animate-fadeIn">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand" />
                        <span className="text-xs font-bold tracking-wider uppercase font-display">DevAI.App</span>
                      </div>
                      <span className="text-[8px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">Production</span>
                    </div>

                    <div className="flex-1 flex gap-6 my-6 items-center">
                      <div className="w-3/5 space-y-3">
                        <h1 className="text-lg font-black tracking-tight font-display leading-tight">Build at the Speed of Sight</h1>
                        <p className="text-[10px] text-slate-400 leading-relaxed font-light">
                          Our autonomous multimodal compiler renders high-fidelity visual layouts with complete component separation.
                        </p>
                      </div>
                      <div className="w-2/5 aspect-[4/3] rounded-xl border border-slate-800 shadow-inner flex items-center justify-center relative overflow-hidden group bg-space-950">
                        <img 
                          src={compiledCodeImg} 
                          alt="Compiled React Code" 
                          className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <button className="w-full py-2.5 rounded-lg font-bold text-xs bg-brand text-space-950 shadow-lg shadow-brand/10 flex items-center justify-center gap-1.5">
                      Get Started Free <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Embedded inline keyframes style tag for the scanning laser line */}
      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0.3; }
          50% { top: 100%; opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}
