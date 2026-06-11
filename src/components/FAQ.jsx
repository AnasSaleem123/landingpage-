import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Can DevAI build the backend too?",
      a: "Yes. Our Backend Agent synthesizes server routers, Node/Express API controllers, database schema structures, and authentication logic to deliver fully integrated full-stack applications."
    },
    {
      q: "Can I upload an image to replicate design?",
      a: "Absolutely. The Frontend Agent is powered by multimodal vision models. You can drop UI wireframes, Figma screenshots, or pencil sketches to generate matching reactive layouts."
    },
    {
      q: "Can I edit the generated project?",
      a: "Yes. You can refine and edit the application by typing conversational instructions directly in our sandbox chat, or export the files to continue local development."
    },
    {
      q: "Can I export the code?",
      a: "Yes. You can download your entire compiled repository as a standard zip bundle configured with clean Vite runscripts, package trees, and component scripts."
    },
    {
      q: "Does it support React, Vite, and Tailwind CSS?",
      a: "Yes. Our templates and agent compilation pathways target clean React, Vite bundlers, and Tailwind CSS classes for maximum readability and speed."
    },
    {
      q: "Can I preview before exporting?",
      a: "Yes. Every modification compiles in a secure sandbox container with a unique address, allowing you to test layouts, clicks, and states in a live simulated viewport."
    },
    {
      q: "Can DevAI search the internet for latest docs?",
      a: "Yes. Our Research Agent crawls API specs and NPM package structures in real-time, preventing the compilation of stale code or deprecated dependencies."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3 py-1 bg-brand/5 rounded-full inline-block">
            <span className="text-brand-gradient">QUESTIONS</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-slate-400 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
            Everything you need to know about DevAI's multi-agent build system.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-800/80 bg-space-900/20 hover:border-slate-700/60 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-sm font-bold text-white tracking-tight leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-brand' : ''
                    }`}
                  />
                </button>

                {/* Transition container */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 border-t border-slate-800/50' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="p-6 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
