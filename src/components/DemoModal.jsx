import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ChevronRight, User, Mail, Globe } from 'lucide-react';
import { AVAILABLE_DATES } from '../data/mockData';

export default function DemoModal({ isOpen, onClose }) {
  const [selectedDateIdx, setSelectedDateIdx] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingForm, setBookingForm] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleDateSelect = (idx) => {
    setSelectedDateIdx(idx);
    setSelectedSlot(null);
  };

  const handleBookDemo = (e) => {
    e.preventDefault();
    if (!selectedSlot) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 1500);
  };

  const activeDate = AVAILABLE_DATES[selectedDateIdx];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm select-none">
      <div className="relative w-full max-w-2xl bg-[#040819] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 animate-fadeIn">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-[#020512] hover:bg-white/5 border border-slate-900 text-slate-400 hover:text-white transition-colors focus:outline-none"
        >
          <X className="w-4 h-4" />
        </button>

        {isBooked ? (
          <div className="flex flex-col items-center justify-center text-center py-10">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 animate-pulse">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-white font-display">Demo Session Registered</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mt-2 leading-relaxed">
              We have booked your interactive DevAI demo for <span className="text-sky-400 font-extrabold">{activeDate.date}</span> at <span className="text-sky-400 font-extrabold">{selectedSlot}</span>. An automated calendar invite containing the secure sandbox stream link was sent to <span className="text-white font-semibold">{bookingForm.email}</span>.
            </p>
            <button
              onClick={() => { setIsBooked(false); setSelectedSlot(null); setBookingForm({ name: '', email: '', company: '' }); onClose(); }}
              className="mt-6 px-6 py-2.5 bg-gradient-to-r from-[#bbdcfd] to-[#93c5fd] hover:from-[#e0f2fe] hover:to-[#bbdcfd] text-[#010412] rounded-xl text-xs font-bold transition-all focus:outline-none"
            >
              Close Scheduler
            </button>
          </div>
        ) : (
          <form onSubmit={handleBookDemo} className="space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400">TELEMETRY RESERVATIONS</span>
              <h2 className="text-xl font-extrabold text-white mt-1">Book Live Agent Demo</h2>
              <p className="text-[11px] text-slate-400 font-light mt-1">Lock in a personalized engineering demonstration with our core systems architects.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Calendar & Time Selector */}
              <div className="space-y-4">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider pl-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" /> Select Availability
                </div>

                {/* Day Blocks List */}
                <div className="grid grid-cols-5 gap-2">
                  {AVAILABLE_DATES.map((date, idx) => {
                    const isSelected = selectedDateIdx === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleDateSelect(idx)}
                        className={`p-2 rounded-xl text-center cursor-pointer border transition-all duration-200 ${
                          isSelected
                            ? 'bg-[#bbdcfd]/10 border-[#bbdcfd] text-[#bbdcfd] shadow-sm'
                            : 'bg-[#020512] border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300'
                        }`}
                      >
                        <div className="text-[10px] uppercase font-bold leading-none">{date.day}</div>
                        <div className="text-xs font-black mt-1">{date.date.split(' ')[1]}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Slots Grid */}
                <div className="space-y-2">
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider pl-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-400" /> Select Hours ({activeDate.date})
                  </div>
                  <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto">
                    {activeDate.slots.map((slot) => {
                      const isSelected = selectedSlot === slot;
                      return (
                        <div
                          key={slot}
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-2.5 rounded-lg text-center cursor-pointer border text-[10px] font-bold transition-all duration-200 ${
                            isSelected
                              ? 'bg-[#bbdcfd] text-[#010412] border-[#93c5fd] shadow-[0_0_10px_rgba(187,220,253,0.2)]'
                              : 'bg-[#020512] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          {slot}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Profile details form */}
              <div className="space-y-4 border-t md:border-t-0 md:border-l border-slate-850 pt-5 md:pt-0 md:pl-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider pl-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-sky-400" /> Lead Credentials
                  </div>

                  {/* Name */}
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      placeholder="Your handle / Name..."
                      className="w-full bg-[#020512] border border-slate-800 focus:border-sky-500/60 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/10 shadow-inner"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      placeholder="Corporate email routing..."
                      className="w-full bg-[#020512] border border-slate-800 focus:border-sky-500/60 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/10 shadow-inner"
                    />
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <Globe className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={bookingForm.company}
                      onChange={(e) => setBookingForm({ ...bookingForm, company: e.target.value })}
                      placeholder="Company domain (e.g. cloudscale.io)..."
                      className="w-full bg-[#020512] border border-slate-800 focus:border-sky-500/60 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500/10 shadow-inner"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={!selectedSlot || isSubmitting}
                    className={`w-full py-3 bg-gradient-to-r from-[#bbdcfd] to-[#93c5fd] hover:from-[#e0f2fe] hover:to-[#bbdcfd] text-[#010412] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(187,220,253,0.25)] focus:outline-none active:scale-95 ${
                      (!selectedSlot || isSubmitting) ? 'opacity-50 cursor-not-allowed shadow-none' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin text-[#010412]" /> Registering Lock...
                      </>
                    ) : (
                      <>
                        Book Session <ChevronRight className="w-4 h-4 text-[#010412]" />
                      </>
                    )}
                  </button>
                  {!selectedSlot && (
                    <span className="text-[9px] text-center text-rose-400/80 block mt-2 font-mono">⚠️ Select an active time slot from the calendar</span>
                  )}
                </div>
              </div>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
