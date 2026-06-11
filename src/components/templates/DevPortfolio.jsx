import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Cpu, GitBranch, Shield, Server, ArrowRight, CornerDownRight, Check, Send } from 'lucide-react';

export default function DevPortfolio() {
  const [activeTab, setActiveTab] = useState('overview');
  const [cmdInput, setCmdInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { text: 'DevAI OS v2.0.4 - Secure Software Kernel Booted', type: 'system' },
    { text: 'Loading environmental packages... Loaded [100%]', type: 'system' },
    { text: 'Establishing secure SSH session with developer core...', type: 'system' },
    { text: "Connection online. Type 'help' to retrieve available CLI routines.", type: 'success' },
  ]);

  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsContactSubmitted] = useState(false);
  const terminalEndRef = useRef(null);

  const projects = [
    { name: 'AetherDB', role: 'Database Core', tech: 'Rust + Raft + WASM', metric: '1.2M QPS', desc: 'A decentralized, key-value data-store executing custom consensus modules on transaction grids.' },
    { name: 'KubeGlow', role: 'DevOps Visualizer', tech: 'React + Go + gRPC', metric: '99.9% Uptime', desc: 'Real-time Kubernetes state tracker rendering live node clusters as glowing, colored topology meshes.' },
    { name: 'SpecterLang', role: 'Compiler Compiler', tech: 'C++ + LLVM + ANTLR', metric: '0.4s Build Latency', desc: 'A custom, statically-typed functional programming language transpiling into high-speed optimized C code.' }
  ];

  const developerStats = [
    { label: 'Total Commits', value: '4,821', icon: <GitBranch className="w-4 h-4 text-brand" /> },
    { label: 'Uptime Score', value: '99.98%', icon: <Server className="w-4 h-4 text-brand" /> },
    { label: 'Security Grade', value: 'A+ Class', icon: <Shield className="w-4 h-4 text-brand" /> },
    { label: 'Engine Compute', value: '4.8 Teraflops', icon: <Cpu className="w-4 h-4 text-brand" /> }
  ];

  // Auto scroll terminal logs
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cleanCmd = cmdInput.trim().toLowerCase();
    if (!cleanCmd) return;

    const newLogs = [...terminalLogs, { text: `user@devai:~$ ${cmdInput}`, type: 'input' }];

    switch (cleanCmd) {
      case 'help':
        newLogs.push({ text: 'Available commands:\n  about     - Core developer background file\n  projects  - Show detailed listing of high-load systems built\n  stats     - Query system telemetry indices\n  contact   - Print email routing variables\n  clear     - Wipe terminal registry history', type: 'system' });
        break;
      case 'about':
        newLogs.push({ text: 'DevAI Core: A highly sophisticated software architect specializing in distributed databases, monospaced terminal designs, and compiled, low-latency micro-routines.', type: 'success' });
        break;
      case 'projects':
        newLogs.push({ text: 'ACTIVE SYSTEMS ARCHIVE:\n' + projects.map(p => `  • [${p.name}] - ${p.role} (${p.tech}) - ${p.metric}\n    ${p.desc}`).join('\n\n'), type: 'success' });
        break;
      case 'stats':
        newLogs.push({ text: 'TELEMETRY STATUS ARCHIVE:\n  • Commits: 4,821 push events\n  • System Health: 100% online\n  • Compilation speed: 0.15ms standard drift', type: 'system' });
        break;
      case 'contact':
        newLogs.push({ text: 'ROUTING ENDPOINTS:\n  • Secure Email: contact@devai.software\n  • Github: devai-autonomous-core\n  • Discord: devai-sandbox#4024', type: 'system' });
        break;
      case 'clear':
        setTerminalLogs([]);
        setCmdInput('');
        return;
      default:
        newLogs.push({ text: `bash: command not found: ${cleanCmd}. Type 'help' to review directory functions.`, type: 'error' });
    }

    setTerminalLogs(newLogs);
    setCmdInput('');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setIsContactSubmitted(true);
    setTerminalLogs(prev => [
      ...prev,
      { text: `System Event: New message intercepted from ${contactForm.name} (${contactForm.email})!`, type: 'success' }
    ]);
  };

  return (
    <div className="w-full text-slate-100 bg-black rounded-2xl border border-slate-800 p-5 font-mono select-none">
      {/* Upper Bio Board */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-slate-800 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center border border-brand/20 text-brand">
            <Terminal className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h2 className="text-sm font-black text-white leading-none">DEVAI_SOFTWARE_AGENT</h2>
            <p className="text-[10px] text-slate-500 mt-1">Autonomous Systems Portfolio & Shell</p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-slate-950 border border-slate-800 rounded-lg p-0.5">
          {['overview', 'projects', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded text-[10px] uppercase font-bold transition-all ${
                activeTab === tab ? 'bg-brand text-[#050a1e] shadow-sm' : 'text-slate-500 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Modules */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {developerStats.map((stat, idx) => (
              <div key={idx} className="bg-zinc-950 border border-zinc-900 p-3 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center border border-brand/10 shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 block uppercase leading-none">{stat.label}</span>
                  <span className="text-xs font-black text-white block mt-1">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Shell Terminal Panel */}
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-2 pl-1">
              <Cpu className="w-3.5 h-3.5 text-brand shrink-0" /> Local Virtual CLI Console
            </div>
            
            <div className="bg-[#020202] rounded-xl border border-slate-800/80 p-4 font-mono text-[11px] leading-relaxed">
              {/* Terminal Logs Window */}
              <div className="space-y-1.5 max-h-48 overflow-y-auto mb-3 pr-1">
                {terminalLogs.map((log, idx) => {
                  let color = 'text-slate-300';
                  if (log.type === 'system') color = 'text-brand';
                  if (log.type === 'success') color = 'text-emerald-400';
                  if (log.type === 'error') color = 'text-rose-400';
                  if (log.type === 'input') color = 'text-slate-400';
                  return (
                    <div key={idx} className={`${color} whitespace-pre-wrap`}>
                      {log.text}
                    </div>
                  );
                })}
                <div ref={terminalEndRef} />
              </div>

              {/* Console Input Bar */}
              <form onSubmit={handleCommandSubmit} className="flex items-center gap-1 border-t border-slate-900 pt-3">
                <span className="text-brand font-bold">user@devai:~$</span>
                <input
                  type="text"
                  value={cmdInput}
                  onChange={(e) => setCmdInput(e.target.value)}
                  placeholder="type help, about, stats, projects, or clear..."
                  className="w-full bg-transparent focus:outline-none text-slate-100 text-[11px] placeholder-slate-600 font-mono caret-brand"
                />
              </form>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'projects' && (
        <div className="space-y-4">
          <div className="text-[10px] text-slate-400 uppercase tracking-widest pl-1">Consolidated Active Systems</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 flex flex-col justify-between hover:border-brand/20 transition-all">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xs font-black text-white">{proj.name}</h3>
                    <span className="text-[9px] bg-brand/10 text-brand px-1.5 py-0.5 rounded font-bold">{proj.metric}</span>
                  </div>
                  <span className="text-[9px] text-slate-500 block font-bold uppercase">{proj.role}</span>
                  <p className="text-[10px] text-slate-400 mt-2.5 leading-relaxed">{proj.desc}</p>
                </div>
                <div className="text-[9px] font-mono text-brand font-bold border-t border-slate-900 pt-2.5 mt-4">
                  Stack: {proj.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'contact' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email directory parameters */}
          <div className="space-y-4">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest pl-1">Server Communication Directory</div>
            
            <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 space-y-3 text-[11px]">
              <div>
                <span className="text-zinc-500 text-[9px] uppercase font-bold block">Developer Host IP</span>
                <span className="text-slate-300 font-bold mt-0.5 block">127.0.0.1:2042 [SSH ACTIVE]</span>
              </div>
              <div>
                <span className="text-zinc-500 text-[9px] uppercase font-bold block">Local Encryption standard</span>
                <span className="text-slate-300 font-bold mt-0.5 block">OpenSSL RSA-4096 Sha-256</span>
              </div>
              <div>
                <span className="text-zinc-500 text-[9px] uppercase font-bold block">Central Mail Protocol</span>
                <span className="text-white font-bold mt-0.5 block flex items-center gap-1">
                  <ArrowRight className="w-3.5 h-3.5 text-brand" /> contact@devai.software
                </span>
              </div>
            </div>
          </div>

          {/* Inline Feedback Form */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 flex flex-col justify-between">
            {isSubmitted ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">Submission Intercepted</h4>
                <p className="text-[10px] text-slate-500 mt-1 max-w-[200px]">Signal routing successful. Agent will compile response shortly.</p>
                <button
                  onClick={() => setIsContactSubmitted(false)}
                  className="mt-3 px-3 py-1 bg-slate-900 text-[9px] text-brand font-bold rounded hover:bg-slate-800 transition-colors"
                >
                  Send another signal
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-3">
                <span className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">Compose Shell Transmission</span>
                <div>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Sender handle / Name..."
                    className="w-full bg-black border border-slate-800 text-[10px] rounded p-2 focus:outline-none focus:border-brand/60"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="Sender routing / Email address..."
                    className="w-full bg-black border border-slate-800 text-[10px] rounded p-2 focus:outline-none focus:border-brand/60"
                  />
                </div>
                <div>
                  <textarea
                    required
                    rows="3"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Transmission payload / Message..."
                    className="w-full bg-black border border-slate-800 text-[10px] rounded p-2 focus:outline-none focus:border-brand/60 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-1.5 bg-brand hover:bg-brand/90 text-[#050a1e] rounded text-[10px] font-extrabold flex items-center justify-center gap-1 transition-all"
                >
                  <Send className="w-3 h-3" /> ROUTE SIGNAL
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
