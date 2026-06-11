import React, { useState } from 'react';
import { Monitor, Code2, ExternalLink, RefreshCw, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import CryptoPortfolio from './templates/CryptoPortfolio';
import SaaSInvoiceApp from './templates/SaaSInvoiceApp';
import DevPortfolio from './templates/DevPortfolio';

export default function PreviewEngine({ templateId }) {
  const [activeTab, setActiveTab] = useState('preview');

  const mockCodeSnippets = {
    crypto: `import React, { useState, useEffect } from 'react';
import { TrendingUp, Wallet, RefreshCw } from 'lucide-react';

export default function CryptoPortfolio() {
  const [balance, setBalance] = useState(48250.42);
  const [selectedCoin, setSelectedCoin] = useState('BTC');

  // Real-time market state ticks
  useEffect(() => {
    const timer = setInterval(() => {
      // Live tickers calculations...
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#040817] p-6 rounded-2xl border border-slate-800">
      {/* Stat Tiles, SVG Sparklines, Direct Trades */}
    </div>
  );
}`,
    invoice: `import React, { useState } from 'react';
import { FileText, Search, Clock, Plus } from 'lucide-react';

export default function SaaSInvoiceApp() {
  const [invoices, setInvoices] = useState([
    { id: 'INV-4029', client: 'Acme Systems Ltd', amount: 14250.00, status: 'Paid' },
    { id: 'INV-4028', client: 'Helius Aerospace', amount: 8900.00, status: 'Pending' }
  ]);

  return (
    <div className="w-full bg-[#020512] rounded-2xl p-5">
      {/* Invoicing Logs, Filter Status, Accounts aggregations */}
    </div>
  );
}`,
    portfolio: `import React, { useState } from 'react';
import { Terminal, Cpu, GitBranch, Shield } from 'lucide-react';

export default function DevPortfolio() {
  const [terminalLogs, setTerminalLogs] = useState([
    { text: 'DevAI OS v2.0.4 - Secure Software Kernel Booted', type: 'system' }
  ]);

  return (
    <div className="bg-black text-slate-100 p-5 font-mono">
      {/* Dynamic shell outputs, show projects, contact routing */}
    </div>
  );
}`
  };

  const handleOpenNewTab = () => {
    const url = `${window.location.origin}${window.location.pathname}?preview=${templateId}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full bg-[#040819] rounded-xl border border-slate-800 overflow-hidden shadow-inner flex flex-col">
      
      {/* Browser Bar Frame */}
      <div className="px-4 py-3 bg-[#070e28] border-b border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 select-none">
        
        {/* Left window actions */}
        <div className="flex items-center gap-6">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="hidden sm:flex items-center gap-1 text-slate-600">
            <ChevronLeft className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <RefreshCw className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>

        {/* Dynamic browser URL Bar */}
        <div className="flex-1 max-w-md w-full bg-[#020512] border border-slate-800/80 rounded-lg px-3 py-1 flex items-center gap-2 text-slate-500 text-[10px] sm:text-xs">
          <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span className="text-slate-400 truncate leading-none">https://sandbox.devai.software/local-app-{templateId}</span>
        </div>

        {/* Right side tab selection & links */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex bg-[#020512] rounded-lg border border-slate-800 p-0.5">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all focus:outline-none ${
                activeTab === 'preview'
                  ? 'bg-[#bbdcfd] text-[#050a1e] shadow-[0_1px_3px_rgba(0,0,0,0.1)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3 h-3" /> Live Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all focus:outline-none ${
                activeTab === 'code'
                  ? 'bg-[#bbdcfd] text-[#050a1e] shadow-[0_1px_3px_rgba(0,0,0,0.1)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3 h-3" /> React Code
            </button>
          </div>

          <button
            onClick={handleOpenNewTab}
            className="p-1.5 bg-[#020512] hover:bg-white/5 border border-slate-800 rounded-lg text-slate-400 hover:text-brand transition-colors"
            title="Open Live Preview in Standalone New Tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Sandbox Frame Rendering */}
      <div className="p-4 bg-[#01040f] min-h-[420px] flex flex-col justify-start overflow-hidden">
        {activeTab === 'preview' ? (
          <div className="w-full">
            {templateId === 'crypto' && <CryptoPortfolio />}
            {templateId === 'invoice' && <SaaSInvoiceApp />}
            {templateId === 'portfolio' && <DevPortfolio />}
          </div>
        ) : (
          <div className="w-full bg-[#020512] border border-slate-800/60 rounded-xl p-4 text-left font-mono text-xs overflow-x-auto select-text leading-relaxed whitespace-pre scrollbar-thin">
            <div className="flex justify-between items-center pb-2.5 border-b border-slate-900 mb-3 select-none">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">DevAI Output Module code</span>
              <button 
                onClick={() => { navigator.clipboard.writeText(mockCodeSnippets[templateId]); }}
                className="text-[9px] font-extrabold uppercase px-2 py-1 bg-slate-900 text-brand border border-slate-800 hover:border-slate-700 hover:text-white rounded transition-all"
              >
                Copy Module Code
              </button>
            </div>
            <code>
              {mockCodeSnippets[templateId]}
            </code>
          </div>
        )}
      </div>

    </div>
  );
}
