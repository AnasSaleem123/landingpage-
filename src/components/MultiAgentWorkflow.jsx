import React from 'react';
import { Layout, Server, Search, CheckCircle, ArrowRight } from 'lucide-react';

const AGENTS = [
  {
    icon: <Layout className="w-6 h-6" />,
    name: "Frontend Agent",
    role: "User Interfaces & Styling",
    desc: "Synthesizes responsive React components, wires state hooks, and implements pixel-perfect Tailwind CSS style tokens from wireframes or layout mockups.",
    tasks: ["Responsive React layout structures", "Tailwind CSS style tokens", "State hooks & transitions"]
  },
  {
    icon: <Server className="w-6 h-6" />,
    name: "Backend Agent",
    role: "APIs & Schema Mapping",
    desc: "Autonomously maps database schema models, sets up Express/Node API routes, and configures secure JWT authentication middleware logic.",
    tasks: ["Express & Node API routing", "Relational database models", "Authentication middleware"]
  },
  {
    icon: <Search className="w-6 h-6" />,
    name: "Research Agent",
    role: "Documentation & Crawler",
    desc: "Crawls API specs, matches NPM packages, and queries live documentation index trees to avoid deprecated methods and compile code successfully.",
    tasks: ["Real-time library package crawling", "API version compatibility audit", "Code snippet validations"]
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    name: "QA Agent",
    role: "Debugging & Sandbox Compiler",
    desc: "Runs sandboxed compiler checks, performs syntax lint validations, and auto-corrects minor runtime script errors before hosting previews.",
    tasks: ["Console log lint validation", "Sandbox compiler checks", "Auto-correct syntax drift"]
  }
];

export default function MultiAgentWorkflow() {
  return (
    <section id="multi-agent-workflow" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none overflow-hidden">
      {/* Soft glows background */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-coral-500/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-brand/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Row */}
        <div className="flex justify-between items-end mb-16 border-b border-slate-900/60 pb-6">
          <div className="flex items-center gap-2.5">
            <h2 className="font-display font-black text-xl sm:text-3xl text-white tracking-tight">
              Specialized AI Agents
            </h2>
          </div>
          <span className="text-[10px] uppercase font-mono px-3 py-1 bg-coral-500/10 border border-coral-500/20 text-coral-400 rounded-full font-bold tracking-wider">
            Active Team Orchestration
          </span>
        </div>

        {/* 4 Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {AGENTS.map((agent, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-2xl bg-[#030712]/55 border border-slate-800/80 hover:border-coral-500/25 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_-10px_rgba(255,90,95,0.06)] flex flex-col items-center text-center"
            >
              {/* Centered Glowing Icon Container */}
              <div className="w-14 h-14 rounded-full bg-coral-500/5 border border-slate-800 flex items-center justify-center text-coral-500 group-hover:scale-110 group-hover:border-coral-500/35 group-hover:bg-coral-500/10 group-hover:shadow-[0_0_15px_rgba(255,90,95,0.25)] transition-all duration-300 mb-6 shrink-0">
                {agent.icon}
              </div>

              {/* Title & Role */}
              <h3 className="text-base font-black text-white leading-tight">
                {agent.name}
              </h3>
              <span className="text-[10px] text-coral-500 font-bold uppercase tracking-wider block mt-1.5 mb-4">
                {agent.role}
              </span>

              {/* Description text */}
              <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                {agent.desc}
              </p>

              {/* Tasks details visible on group-hover */}
              <div className="w-full border-t border-slate-900/60 pt-4 mt-auto">
                <ul className="space-y-2 text-left">
                  {agent.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="text-[10.5px] text-slate-500 flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral-500/40 shrink-0" />
                      <span className="truncate">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
