import React from 'react';
import { MessageSquare, Cpu, Play } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-5 h-5 text-brand" />,
      title: "Describe Your Idea",
      desc: "Write a description of your application in plain English, upload a mockup image, or specify an API schema to start from.",
      tag: "1. Prompt or Design Reference"
    },
    {
      number: "02",
      icon: <Cpu className="w-5 h-5 text-brand" />,
      title: "DevAI Collaborative Build",
      desc: "Our frontend, backend, and research agents coordinate autonomously to generate code, build schemas, and resolve library dependencies.",
      tag: "2. Autonomous Compilation"
    },
    {
      number: "03",
      icon: <Play className="w-5 h-5 text-brand" />,
      title: "Preview, Iterate, Export",
      desc: "Interact with your running app in a live container. Refine it with additional instructions, then download the source bundle with one click.",
      tag: "3. Interactive Sandbox & Code Export"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none">
      {/* Soft blue celestial backdrop glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3 py-1 bg-brand/5 rounded-full">
            WORKFLOW
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-tight">
            How DevAI Builds
          </h2>
          <p className="font-body text-slate-400 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
            Move from a blank canvas to a compiled, production-ready codebase in three clean phases.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-space-900/40 hover:bg-space-900/60 border border-slate-800/60 hover:border-brand/25 transition-all duration-300 group relative flex flex-col justify-between"
            >
              {/* Card Header Step Number */}
              <div className="absolute top-6 right-8 text-5xl font-black text-slate-800/20 select-none group-hover:text-brand/10 transition-colors">
                {step.number}
              </div>

              <div>
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-brand/5 flex items-center justify-center border border-brand/10 group-hover:scale-105 group-hover:border-brand/20 transition-transform duration-300 mb-6">
                  {step.icon}
                </div>

                <span className="text-[9px] uppercase font-extrabold text-brand tracking-wider block mb-1">
                  {step.tag}
                </span>

                <h3 className="text-lg font-extrabold text-white mb-3 tracking-tight leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Progress Indicator Dots decoration */}
              <div className="mt-8 flex gap-1.5 items-center">
                <span className={`w-2 h-2 rounded-full ${idx >= 0 ? 'bg-brand' : 'bg-slate-800'}`} />
                <span className={`w-2 h-2 rounded-full ${idx >= 1 ? 'bg-brand' : 'bg-slate-800'}`} />
                <span className={`w-2 h-2 rounded-full ${idx >= 2 ? 'bg-brand' : 'bg-slate-800'}`} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
