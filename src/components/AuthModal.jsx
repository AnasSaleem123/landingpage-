import React, { useState } from 'react';
import { X, Mail, Lock, User, CheckCircle2, ChevronRight, RefreshCw, KeyRound } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialMode }) {
  const [authMode, setAuthMode] = useState(initialMode || 'login'); // 'login' or 'signup'
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  // Sync mode if initialMode changes
  React.useEffect(() => {
    if (initialMode) {
      setAuthMode(initialMode);
    }
  }, [initialMode, isOpen]);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', password: '' });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm select-none">
      <div className="relative w-full max-w-md bg-[#040819] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 animate-fadeIn">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-[#020512] hover:bg-white/5 border border-slate-900 text-slate-400 hover:text-white transition-colors focus:outline-none"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center text-center py-10">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 animate-pulse">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-white font-display">
              {authMode === 'login' ? 'Session Authenticated' : 'Account Registered'}
            </h3>
            <p className="text-xs text-slate-400 max-w-xs mx-auto mt-2 leading-relaxed">
              {authMode === 'login' 
                ? 'Your secure session token was written successfully. Loading autonomous software workspace...' 
                : 'Your profile has been created successfully. Welcome to DevAI! Check your email to complete authorization.'}
            </p>
            <button
              onClick={() => { setIsSuccess(false); onClose(); }}
              className="mt-6 px-6 py-2.5 bg-gradient-to-r from-[#bbdcfd] to-[#93c5fd] hover:from-[#e0f2fe] hover:to-[#bbdcfd] text-[#010412] rounded-xl text-xs font-bold transition-all focus:outline-none"
            >
              Enter Dashboard
            </button>
          </div>
        ) : (
          <form onSubmit={handleAuthSubmit} className="space-y-4">
            
            {/* Header */}
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400">DEVAI CLOUD AUTHENTICATION</span>
              <h2 className="text-xl font-extrabold text-white mt-1">
                {authMode === 'login' ? 'Sign In to Agent Core' : 'Deploy Developer Workspace'}
              </h2>
              <p className="text-[11px] text-slate-400 font-light mt-1">
                {authMode === 'login' ? 'Resume active build runs and pull bundle logs.' : 'Deploy autonomous developer fleets on standard cloud clusters.'}
              </p>
            </div>

            {/* Mode Toggle Tabs */}
            <div className="flex bg-[#020512] rounded-xl border border-slate-850 p-1.5 gap-1.5">
              <button
                type="button"
                onClick={() => { setAuthMode('login'); setIsSuccess(false); }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all focus:outline-none ${
                  authMode === 'login' ? 'bg-[#bbdcfd] text-[#010412] shadow-sm' : 'text-slate-500 hover:text-slate-200'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => { setAuthMode('signup'); setIsSuccess(false); }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all focus:outline-none ${
                  authMode === 'signup' ? 'bg-[#bbdcfd] text-[#010412] shadow-sm' : 'text-slate-500 hover:text-slate-200'
                }`}
              >
                Register
              </button>
            </div>

            {/* Fields Grid */}
            <div className="space-y-3.5 pt-3">
              
              {/* Name (Signup only) */}
              {authMode === 'signup' && (
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Profile name / Company handles..."
                    className="w-full bg-[#020512] border border-slate-800 focus:border-sky-500/60 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/10 shadow-inner"
                  />
                </div>
              )}

              {/* Email */}
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Operational registry email..."
                  className="w-full bg-[#020512] border border-slate-800 focus:border-sky-500/60 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/10 shadow-inner"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Secure passcode passphrase..."
                  className="w-full bg-[#020512] border border-slate-800 focus:border-sky-500/60 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/10 shadow-inner"
                />
              </div>

            </div>

            {/* Password recover option */}
            {authMode === 'login' && (
              <div className="flex justify-end select-none">
                <button 
                  type="button" 
                  onClick={() => alert("Simulated recovery: A password reset link has been dispatched to your target email if it matches our active nodes.")}
                  className="text-[10px] text-sky-400 hover:underline flex items-center gap-1 focus:outline-none"
                >
                  <KeyRound className="w-3 h-3" /> Recover credentials?
                </button>
              </div>
            )}

            {/* Action Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 bg-gradient-to-r from-[#bbdcfd] to-[#93c5fd] hover:from-[#e0f2fe] hover:to-[#bbdcfd] text-[#010412] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(187,220,253,0.25)] focus:outline-none active:scale-95 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed shadow-none' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#010412]" /> Authorizing credentials...
                </>
              ) : (
                <>
                  {authMode === 'login' ? 'Authenticate Session' : 'Provision Agent Workspace'} <ChevronRight className="w-4 h-4 text-[#010412]" />
                </>
              )}
            </button>

            {/* Legal / Sandbox notice footer */}
            <div className="text-[9px] text-slate-500 text-center font-mono leading-relaxed mt-4 pt-4 border-t border-slate-900">
              DevAI secure auth environment. Transmissions encrypted under 4096-bit TLS grids.
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
