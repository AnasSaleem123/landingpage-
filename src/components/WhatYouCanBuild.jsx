import React from 'react';
import { Globe, BarChart2, Shield, Database, Eye, ShoppingCart, Layout, Layers } from 'lucide-react';

const CATEGORIES = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: "SaaS Landing Pages",
    desc: "Vibrant conversion-focused copy layouts, smooth scrolling navigations, and optimized layout hooks for maximum marketing impact."
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Admin Dashboards",
    desc: "Interactive tables, data metrics grids, modular chart hooks, and responsive sidebar menus for business diagnostics."
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Full SaaS Websites",
    desc: "Multipage structural apps including pricing plans, blogs, contact pipelines, and showcase blocks ready to publish."
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Auth & Gateways",
    desc: "User login forms, registration panels, password resets, and modular dashboard routes secured by standard policies."
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Backend API Endpoints",
    desc: "REST controllers, JSON API paths, database schema migrations, and route state logic generated autonomously."
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Image-to-UI Transpilations",
    desc: "Visual design wireframes or images translated directly to responsive HTML grids, CSS styles, and React elements."
  },
  {
    icon: <ShoppingCart className="w-5 h-5" />,
    title: "E-commerce Layouts",
    desc: "Product listings grids, interactive cart states, details view modals, and search filters for visual storefronts."
  },
  {
    icon: <Layout className="w-5 h-5" />,
    title: "Custom Web Apps",
    desc: "Complex interactive states, custom calculators, form submissions, and webhook triggers tailored to your specifications."
  }
];

export default function WhatYouCanBuild() {
  return (
    <section id="what-you-can-build" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-brand/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-20 border-b border-slate-900/60 pb-8">
          <div className="md:col-span-7 text-left space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3.5 py-1 bg-brand/5 rounded-full inline-block">
              <span className="text-brand-gradient">CAPABILITIES</span>
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.15]">
              Build anything on the web
            </h2>
          </div>
          <div className="md:col-span-5 text-left pb-1">
            <p className="font-body text-slate-400 text-sm font-light leading-relaxed">
              From single-page responsive designs to full-stack database integrations, DevAI is equipped for diverse development scopes with no platform lock-in.
            </p>
          </div>
        </div>

        {/* 3-Column Top-Bordered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 relative z-10">
          {CATEGORIES.map((cat, idx) => (
            <div 
              key={idx}
              className="group flex flex-col items-start text-left relative transition-all duration-300"
            >
              {/* Top accent line */}
              <div className="h-[2px] w-full bg-slate-800/80 group-hover:bg-coral-500 transition-colors duration-300 mb-8" />
              
              {/* Circular Icon Container */}
              <div className="w-11 h-11 rounded-full border border-slate-800 bg-[#030712]/80 flex items-center justify-center text-slate-400 group-hover:text-coral-500 group-hover:border-coral-500/30 group-hover:bg-coral-500/5 group-hover:shadow-[0_0_12px_rgba(255,90,95,0.15)] transition-all duration-300 mb-6 shrink-0">
                {cat.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-sm sm:text-base font-black text-white leading-tight group-hover:text-brand transition-colors duration-200 mb-3">
                {cat.title}
              </h3>
              
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
