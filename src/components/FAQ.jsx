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
    <section id="faq" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none overflow-hidden">
      {/* Ambient glow in background */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 text-left space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3.5 py-1 bg-brand/5 rounded-full inline-block">
              <span className="text-brand-gradient">QUESTIONS</span>
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.15]">
              Frequently
              <br />
              asked questions
            </h2>
            <p className="font-body text-slate-400 text-sm font-light leading-relaxed max-w-sm">
              Have questions about how DevAI constructs full-stack applications, isolated sandboxes, or custom designs? We've compiled detailed answers here.
            </p>
          </div>

          {/* Right Column: Accordions list */}
          <div className="lg:col-span-7 w-full divide-y divide-slate-800/80">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="py-5 first:pt-0 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left focus:outline-none group py-1"
                  >
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-brand transition-colors duration-200">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-slate-400 transition-transform duration-350 shrink-0 ml-4 group-hover:text-brand ${
                        isOpen ? 'rotate-180 text-brand' : ''
                      }`}
                    />
                  </button>

                  {/* Collapsible Answer */}
                  <div 
                    className={`transition-all duration-350 ease-in-out ${
                      isOpen ? 'max-h-[160px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
