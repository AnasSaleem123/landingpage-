import React, { useState, useEffect, useRef } from 'react';
import { Play, Code2, Sparkles, Terminal, FileCode, CheckCircle, RefreshCw, Layers, ExternalLink } from 'lucide-react';
import { PREVIEW_TEMPLATES, GENERATION_LOGS } from '../data/mockData';
import PreviewEngine from './PreviewEngine';

export default function AgentTerminal({ onOpenAuth }) {
  const [selectedTemplate, setSelectedTemplate] = useState('crypto');
  const [customPrompt, setCustomPrompt] = useState(PREVIEW_TEMPLATES[0].prompt);
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileLogs, setCompileLogs] = useState([]);
  const [isCompiled, setIsCompiled] = useState(true); // Default compile on load so layout is live immediately
  const logContainerRef = useRef(null);

  // Set prompt when quick tags are clicked and trigger instant hot-reload
  const handleSelectTemplate = (id) => {
    setSelectedTemplate(id);
    const template = PREVIEW_TEMPLATES.find(t => t.id === id);
    setCustomPrompt(template.prompt);
    // Instant hot-reloading prevents any blank page states!
    setIsCompiled(true); 
  };

  const startCompilation = () => {
    if (isCompiling) return;
    setIsCompiling(true);
    setIsCompiled(false);
    setCompileLogs([]);
    
    const logs = GENERATION_LOGS[selectedTemplate] || GENERATION_LOGS.crypto;
    let logIndex = 0;

    const interval = setInterval(() => {
      if (logIndex < logs.length) {
        setCompileLogs(prev => [...prev, logs[logIndex]]);
        logIndex++;
        // Auto scroll compiling terminal logs
        setTimeout(() => {
          if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
          }
        }, 50);
      } else {
        clearInterval(interval);
        setIsCompiling(false);
        setIsCompiled(true);
      }
    }, 450); // Faster snappy compile simulation
  };

  return (
    <div className="w-full bg-[#030712]/90 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-[#bbdcfd]/20 text-left">
      
      {/* Prompt Construction Bar */}
      <div className="p-4 sm:p-5 bg-[#030822] border-b border-slate-800/70">
        <div className="text-left mb-3">
          <label className="text-[10px] uppercase font-bold tracking-widest text-[#bbdcfd] flex items-center gap-1.5 leading-none">
            <Sparkles className="w-3.5 h-3.5 text-[#bbdcfd] animate-pulse" /> Construct Autonomous Agent Prompt
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <textarea
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            rows="2"
            className="flex-1 bg-[#010412] border border-slate-800 focus:border-[#bbdcfd]/60 rounded-xl p-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none resize-none font-sans font-light leading-relaxed shadow-inner"
            placeholder="Describe what you want to build in plain English..."
          />
          <button
            onClick={startCompilation}
            disabled={isCompiling}
            className={`px-5 py-3 sm:py-0 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shrink-0 focus:outline-none active:scale-95 bg-[#bbdcfd] hover:bg-[#e0f2fe] text-[#010412] shadow-[0_4px_20px_rgba(187,220,253,0.25)] ${
              isCompiling ? 'opacity-50 cursor-not-allowed bg-[#bbdcfd]/50 shadow-none' : ''
            }`}
          >
            {isCompiling ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-[#010412]" /> Compiling...
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-[#010412] text-[#010412]" /> Compile Sandbox
              </>
            )}
          </button>
        </div>

        {/* Quick Tag Templates Toggle */}
        <div className="flex flex-wrap gap-2 mt-4 items-center">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mr-1">Choose Blueprint:</span>
          {PREVIEW_TEMPLATES.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => handleSelectTemplate(tpl.id)}
              disabled={isCompiling}
              className={`px-3 py-1.5 rounded-lg border text-[10px] font-bold tracking-wide uppercase transition-all duration-300 ${
                selectedTemplate === tpl.id
                  ? 'bg-[#bbdcfd]/10 border-[#bbdcfd]/40 text-[#bbdcfd] shadow-[0_0_12px_rgba(187,220,253,0.15)]'
                  : 'bg-[#010412]/60 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700'
              }`}
            >
              {tpl.id === 'crypto' && '₿ '}
              {tpl.id === 'invoice' && '💳 '}
              {tpl.id === 'portfolio' && '💻 '}
              {tpl.id === 'crypto' ? 'Crypto Portfolio' : tpl.id === 'invoice' ? 'SaaS Invoice App' : 'Dev Portfolio'}
            </button>
          ))}
        </div>
      </div>

      {/* Compiler logs when compiling */}
      {isCompiling && (
        <div className="p-5 bg-[#020512] border-b border-slate-900 text-left font-mono text-[11px] leading-relaxed max-h-56 overflow-y-auto" ref={logContainerRef}>
          <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-amber-500" /> Compiler System Stream Logs
          </div>
          <div className="space-y-2">
            {compileLogs.map((log, idx) => {
              let color = 'text-slate-300';
              if (log.type === 'search') color = 'text-amber-400';
              if (log.type === 'search_success') color = 'text-brand';
              if (log.type === 'vision') color = 'text-brand-gradient';
              if (log.type === 'write') color = 'text-slate-400';
              if (log.type === 'compile') color = 'text-brand';
              if (log.type === 'success') color = 'text-emerald-400 font-extrabold';
              
              return (
                <div key={idx} className={`${color} flex items-start gap-1.5 animate-fadeIn`}>
                  <span>{log.type === 'success' ? '✅' : '•'}</span>
                  <span>{log.message}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Renders Sandbox Environment if compiled */}
      {isCompiled && (
        <div className="w-full bg-space-950 p-4 sm:p-5 border-t border-slate-900">
          <div className="flex justify-between items-center mb-3 select-none">
            <div className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-brand shrink-0" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Sandboxed Environment</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">Status: Live Hot-Reloading</div>
          </div>
          <PreviewEngine templateId={selectedTemplate} />
        </div>
      )}

    </div>
  );
}
