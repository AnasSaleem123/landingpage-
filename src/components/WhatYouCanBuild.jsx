import React from 'react';
import { Globe, BarChart2, Shield, Database, Eye, ShoppingCart, Layout, Layers } from 'lucide-react';

export default function WhatYouCanBuild() {
  const categories = [
    {
      icon: <Globe className="w-5 h-5 text-brand" />,
      title: "SaaS Landing Pages",
      desc: "Vibrant conversion-focused copy layouts, smooth scrolling navigations, and optimized layout hooks."
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-brand" />,
      title: "Admin Dashboards",
      desc: "Interactive tables, data metrics grids, modular chart hooks, and responsive sidebar menus."
    },
    {
      icon: <Layers className="w-5 h-5 text-brand" />,
      title: "Full SaaS Websites",
      desc: "Multipage structural apps including pricing plans, blogs, contact pipelines, and showcase blocks."
    },
    {
      icon: <Shield className="w-5 h-5 text-brand" />,
      title: "Auth & Gateways",
      desc: "User login forms, registration panels, password resets, and modular dashboard routes."
    },
    {
      icon: <Database className="w-5 h-5 text-brand" />,
      title: "Backend API Enpoints",
      desc: "REST controllers, JSON API paths, database schema migrations, and route state logic."
    },
    {
      icon: <Eye className="w-5 h-5 text-brand" />,
      title: "Image-to-UI Transpilations",
      desc: "Visual designs translated directly to HTML grids, CSS properties, and React components."
    },
    {
      icon: <ShoppingCart className="w-5 h-5 text-brand" />,
      title: "E-commerce Layouts",
      desc: "Product listings grids, interactive cart states, details view modals, and search filters."
    },
    {
      icon: <Layout className="w-5 h-5 text-brand" />,
      title: "Custom Web Apps",
      desc: "Complex interactive states, custom calculators, form submissions, and webhook triggers."
    }
  ];

  return (
    <section id="what-you-can-build" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-space-950 border-t border-slate-900/60 select-none">
      {/* Background glow shadow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[250px] bg-brand/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand border border-brand/20 px-3 py-1 bg-brand/5 rounded-full">
            CAPABILITIES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white mt-4 tracking-tight leading-tight">
            Build Anything on the Web
          </h2>
          <p className="font-body text-slate-400 text-sm max-w-xl mx-auto mt-4 font-light leading-relaxed">
            From single-page responsive designs to full-stack database integrations, DevAI is equipped for diverse development scopes.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-xl bg-space-900/30 hover:bg-space-900/50 border border-slate-800/40 hover:border-brand/20 transition-all duration-300 group flex items-start gap-4"
            >
              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-brand/5 flex items-center justify-center border border-brand/10 group-hover:scale-105 group-hover:border-brand/20 transition-transform duration-300 shrink-0">
                {cat.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm font-bold text-white leading-snug group-hover:text-brand transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal font-light">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
