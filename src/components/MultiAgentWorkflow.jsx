import React from 'react';
import { Layout, Server, Search, CheckCircle } from 'lucide-react';

export default function MultiAgentWorkflow() {
  const agents = [
    {
      icon: <Layout className="w-5 h-5 text-brand" />,
      name: "Frontend Agent",
      role: "User Interfaces & Styling",
      tasks: ["Responsive React layout structures", "Tailwind CSS style tokens", "State hooks & transitions"],
      status: "Active"
    },
    {
      icon: <Server className="w-5 h-5 text-brand" />,
      name: "Backend Agent",
      role: "APIs & Schema Mapping",
      tasks: ["Express & Node API routing", "Relational database models", "Authentication middleware"],
      status: "Active"
    },
    {
      icon: <Search className="w-5 h-5 text-brand" />,
      name: "Research Agent",
      role: "Documentation & Crawler",
      tasks: ["Real-time library package crawling", "API version compatibility audit", "Code snippet validations"],
      status: "Active"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-brand" />,
      name: "QA Agent",
      role: "Debugging & Build Testing",
      tasks: ["Console log lint validation", "Sandbox compiler checks", "Auto-correct syntax drift"],
      status: "Active"
    }
  ];

  return (
    <section id="multi-agent-workflow" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3 py-1 bg-brand/5 rounded-full">
            TEAM ARCHITECTURE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-tight">
            Specialized Collaborative Agents
          </h2>
          <p className="font-body text-slate-400 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
            One AI cannot compile a full application alone. DevAI assigns multiple dedicated developer agents that coordinate in real-time.
          </p>
        </div>

        {/* 2x2 or 4 Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {agents.map((agent, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-space-900/40 hover:bg-space-900/60 border border-slate-800/60 hover:border-brand/25 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Agent Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-brand/5 flex items-center justify-center border border-brand/10 group-hover:scale-105 group-hover:border-brand/20 transition-transform duration-300">
                    {agent.icon}
                  </div>
                  <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-brand/10 border border-brand/20 text-brand">
                    {agent.status}
                  </span>
                </div>

                {/* Agent Identity */}
                <h3 className="text-base font-extrabold text-white leading-tight">
                  {agent.name}
                </h3>
                <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase block mt-1">
                  {agent.role}
                </span>

                {/* Tasks Bullet List */}
                <ul className="mt-6 space-y-2.5">
                  {agent.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="text-xs text-slate-400 flex items-start gap-2.5 leading-relaxed font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand/55 mt-1.5 shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative base line */}
              <div className="mt-8 h-0.5 w-full bg-slate-800/40 group-hover:bg-brand/20 transition-colors" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
