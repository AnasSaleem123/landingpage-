import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingHero from './components/LandingHero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import ImageToUI from './components/ImageToUI';
import MultiAgentWorkflow from './components/MultiAgentWorkflow';
import InfraSection from './components/InfraSection';
import WhatYouCanBuild from './components/WhatYouCanBuild';
import ShowcaseSection from './components/ShowcaseSection';
import CompareSection from './components/CompareSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import ContactModal from './components/ContactModal';
import DemoModal from './components/DemoModal';
import AuthModal from './components/AuthModal';

// Templates
import CryptoPortfolio from './components/templates/CryptoPortfolio';
import SaaSInvoiceApp from './components/templates/SaaSInvoiceApp';
import DevPortfolio from './components/templates/DevPortfolio';

export default function App() {
  const [previewId, setPreviewId] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // 'contact', 'demo', 'auth'
  const [authInitialMode, setAuthInitialMode] = useState('login');

  useEffect(() => {
    // Detect if standalone preview query is requested (e.g. ?preview=crypto)
    const params = new URLSearchParams(window.location.search);
    const pId = params.get('preview');
    if (pId) {
      setPreviewId(pId);
    }
  }, []);

  // Standard modal open handlings
  const handleOpenAuth = (mode = 'login') => {
    setAuthInitialMode(mode);
    setActiveModal('auth');
  };

  const handleOpenContact = () => setActiveModal('contact');
  const handleOpenDemo = () => setActiveModal('demo');
  const handleCloseModal = () => setActiveModal(null);

  // If in standalone preview mode, render ONLY the specific fully functional generated sandbox full screen
  if (previewId) {
    return (
      <div className="min-h-screen bg-space-950 flex flex-col items-center justify-center p-4 sm:p-8 font-sans overflow-x-hidden selection:bg-brand/30 selection:text-white bg-grid-pattern relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] celestial-glow-arc pointer-events-none" />
        <div className="w-full max-w-6xl relative z-10 animate-fadeIn shadow-2xl rounded-2xl overflow-hidden">
          <div className="text-center mb-4 select-none flex items-center justify-between px-2 text-slate-500 font-mono text-[10px]">
            <span>🛰️ DevAI Autonomous Sandbox Live Server</span>
            <span>Relative origin URL: ?preview={previewId}</span>
          </div>
          {previewId === 'crypto' && <CryptoPortfolio />}
          {previewId === 'invoice' && <SaaSInvoiceApp />}
          {previewId === 'portfolio' && <DevPortfolio />}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-brand/30 selection:text-white bg-space-950 text-slate-100">
      
      {/* Landing Header */}
      <Navbar 
        onOpenAuth={handleOpenAuth}
        onOpenContact={handleOpenContact}
        onOpenDemo={handleOpenDemo}
      />

      {/* Main Sections */}
      <main>
        <LandingHero 
          onOpenDemo={handleOpenDemo}
          onOpenAuth={handleOpenAuth}
        />
        {/* 1. Features & Capabilities */}
        <Features />
        <Testimonials />
        <ImageToUI />
        <MultiAgentWorkflow />
        <InfraSection onOpenAuth={handleOpenAuth} />
        <WhatYouCanBuild />

        {/* 2. Workflow / How It Works */}
        <HowItWorks />

        {/* 3. Showcase Platform Examples & Social Proof */}
        <ShowcaseSection />
        <CompareSection onOpenAuth={handleOpenAuth} />

        {/* 4. Pricing & Plans */}
        <Pricing onOpenAuth={handleOpenAuth} />

        {/* 5. Frequently Asked Questions */}
        <FAQ />

        {/* Action Call */}
        <FinalCTA 
          onOpenAuth={handleOpenAuth}
          onOpenDemo={handleOpenDemo}
        />
      </main>

      {/* Footer Details */}
      <footer className="py-12 border-t border-slate-900 bg-space-950/80 select-none text-slate-500 text-center font-mono text-[11px] leading-relaxed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex justify-center gap-1.5 items-center text-slate-400 font-display font-extrabold text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-brand animate-ping" /> DevAI Agent
          </div>
          <p className="max-w-md mx-auto">
            © 2024 DevAI Systems Inc. Autonomous developer agents deployed under SOC-2 compliance frameworks. 
            All sandboxes fully isolated.
          </p>
          <div className="flex justify-center gap-6 text-[10px] uppercase text-slate-500 font-bold pt-2">
            <button onClick={handleOpenContact} className="hover:text-brand transition-colors">Audit logs</button>
            <span className="text-slate-800">|</span>
            <button onClick={handleOpenDemo} className="hover:text-brand transition-colors">Core API Specs</button>
            <span className="text-slate-800">|</span>
            <button onClick={handleOpenContact} className="hover:text-brand transition-colors">Secure SLA</button>
          </div>
        </div>
      </footer>

      {/* Modular Overlays */}
      <ContactModal 
        isOpen={activeModal === 'contact'}
        onClose={handleCloseModal}
      />
      <DemoModal 
        isOpen={activeModal === 'demo'}
        onClose={handleCloseModal}
      />
      <AuthModal 
        isOpen={activeModal === 'auth'}
        onClose={handleCloseModal}
        initialMode={authInitialMode}
      />

    </div>
  );
}
