import React, { useState } from 'react';
import { X, Send, CheckCircle2, User, Mail, MessageSquare, Briefcase, RefreshCw } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm select-none">
      <div className="relative w-full max-w-lg bg-[#040819] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 animate-fadeIn">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-[#020512] hover:bg-white/5 border border-slate-900 text-slate-400 hover:text-white transition-colors focus:outline-none"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center py-10">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 animate-pulse">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-white">Transmission Intercepted</h3>
            <p className="text-xs text-slate-400 max-w-xs mx-auto mt-2 leading-relaxed">
              Your message was encrypted and securely routed to our agent core. Our solutions engineers will compile a feedback response shortly.
            </p>
            <button
              onClick={() => { setIsSubmitted(false); onClose(); }}
              className="mt-6 px-6 py-2.5 bg-gradient-to-r from-[#bbdcfd] to-[#93c5fd] hover:from-[#e0f2fe] hover:to-[#bbdcfd] text-[#010412] rounded-xl text-xs font-bold transition-all focus:outline-none"
            >
              Back to Landing
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400">CONNECT PROTOCOL</span>
              <h2 className="text-xl font-extrabold text-white mt-1">Send secure transmission</h2>
              <p className="text-[11px] text-slate-400 font-light mt-1 leading-normal">Configure scope metrics and submit direct telemetry queries.</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-3.5">
              
              {/* Name */}
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full name / Alias..."
                  className="w-full bg-[#020512] border border-slate-800 focus:border-sky-500/60 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/10 shadow-inner"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Operational email address..."
                  className="w-full bg-[#020512] border border-slate-800 focus:border-sky-500/60 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/10 shadow-inner"
                />
              </div>

              {/* Company */}
              <div className="relative">
                <Briefcase className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company / Organization (Optional)..."
                  className="w-full bg-[#020512] border border-slate-800 focus:border-sky-500/60 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/10 shadow-inner"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3 top-4" />
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your design, feature scope, or requirements..."
                  className="w-full bg-[#020512] border border-slate-800 focus:border-sky-500/60 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/10 resize-none shadow-inner"
                />
              </div>

            </div>

            {/* Submit Action */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 bg-gradient-to-r from-[#bbdcfd] to-[#93c5fd] hover:from-[#e0f2fe] hover:to-[#bbdcfd] text-[#010412] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(187,220,253,0.25)] focus:outline-none active:scale-95 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed shadow-none' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#010412]" /> Routing signal...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#010412]" /> Transmit Secure Signal
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
