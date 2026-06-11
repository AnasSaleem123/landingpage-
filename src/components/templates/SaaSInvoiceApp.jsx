import React, { useState } from 'react';
import { FileText, Search, Filter, CheckCircle2, AlertCircle, Clock, XCircle, Plus, Edit2, ChevronRight, CornerDownRight, Check, DollarSign } from 'lucide-react';

export default function SaaSInvoiceApp() {
  const [invoices, setInvoices] = useState([
    { id: 'INV-4029', client: 'Acme Systems Ltd', email: 'billing@acmesystems.com', amount: 14250.00, status: 'Paid', date: 'Oct 15, 2024', due: 'Oct 30, 2024' },
    { id: 'INV-4028', client: 'Helius Aerospace', email: 'invoices@helius.space', amount: 8900.00, status: 'Pending', date: 'Oct 18, 2024', due: 'Nov 02, 2024' },
    { id: 'INV-4027', client: 'Starlight Retail LLC', email: 'accountspayable@starlight.com', amount: 3120.50, status: 'Paid', date: 'Oct 12, 2024', due: 'Oct 27, 2024' },
    { id: 'INV-4026', client: 'Nebula Analytics', email: 'finance@nebula.io', amount: 12500.00, status: 'Overdue', date: 'Sep 28, 2024', due: 'Oct 13, 2024' },
    { id: 'INV-4025', client: 'DevFlow Systems', email: 'ops@devflow.co', amount: 5600.00, status: 'Paid', date: 'Oct 05, 2024', due: 'Oct 20, 2024' },
    { id: 'INV-4024', client: 'Quantum Bio Labs', email: 'payable@quantumbiolabs.org', amount: 18450.00, status: 'Pending', date: 'Oct 21, 2024', due: 'Nov 05, 2024' },
    { id: 'INV-4023', client: 'Vortex Global', email: 'invoice@vortex.net', amount: 950.00, status: 'Canceled', date: 'Sep 15, 2024', due: 'Sep 30, 2024' }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editStatus, setEditStatus] = useState('');
  const [editAmount, setEditAmount] = useState('');
  const [toast, setToast] = useState(null);

  // Aggregations
  const totalInvoiced = invoices.reduce((sum, inv) => txVal(inv) + sum, 0);
  const totalPaid = invoices.filter(inv => inv.status === 'Paid').reduce((sum, inv) => txVal(inv) + sum, 0);
  const totalPending = invoices.filter(inv => inv.status === 'Pending').reduce((sum, inv) => txVal(inv) + sum, 0);
  const totalOverdue = invoices.filter(inv => inv.status === 'Overdue').reduce((sum, inv) => txVal(inv) + sum, 0);

  function txVal(inv) {
    return typeof inv.amount === 'number' ? inv.amount : parseFloat(inv.amount) || 0;
  }

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
    setEditStatus(invoice.status);
    setEditAmount(invoice.amount.toString());
    setIsEditing(false);
  };

  const handleSaveChanges = () => {
    if (!selectedInvoice) return;
    
    const amt = parseFloat(editAmount);
    if (isNaN(amt) || amt <= 0) {
      showToast("Error: Please specify a valid positive invoice amount!");
      return;
    }

    setInvoices(prev => prev.map(inv => {
      if (inv.id === selectedInvoice.id) {
        const updated = { ...inv, status: editStatus, amount: amt };
        setSelectedInvoice(updated);
        return updated;
      }
      return inv;
    }));

    setIsEditing(false);
    showToast(`Invoice ${selectedInvoice.id} successfully updated!`);
  };

  const handleAddNewInvoice = () => {
    const newId = `INV-${Math.floor(4000 + Math.random() * 999)}`;
    const newInv = {
      id: newId,
      client: 'Apex Creative Inc',
      email: 'finance@apexcreative.io',
      amount: 4500.00,
      status: 'Pending',
      date: 'Just now',
      due: 'In 14 days'
    };
    setInvoices([newInv, ...invoices]);
    handleInvoiceClick(newInv);
    showToast(`Simulated Invoice ${newId} created for Apex Creative!`);
  };

  const filteredInvoices = invoices.filter(inv => {
    const matchesSearch = inv.client.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          inv.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          inv.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = statusFilter === 'All' || inv.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Paid':
        return { bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: <CheckCircle2 className="w-3.5 h-3.5" /> };
      case 'Pending':
        return { bg: 'bg-amber-500/10 text-amber-400 border-amber-500/20', icon: <Clock className="w-3.5 h-3.5" /> };
      case 'Overdue':
        return { bg: 'bg-rose-500/10 text-rose-400 border-rose-500/20', icon: <AlertCircle className="w-3.5 h-3.5" /> };
      default:
        return { bg: 'bg-slate-500/10 text-slate-400 border-slate-500/20', icon: <XCircle className="w-3.5 h-3.5" /> };
    }
  };

  return (
    <div className="w-full text-slate-100 bg-[#020512] rounded-2xl border border-slate-800/80 p-5 font-display select-none">
      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-4 right-4 z-50 bg-[#080f26] border border-emerald-500/30 text-emerald-400 text-xs py-2.5 px-4 rounded-xl shadow-lg flex items-center gap-2 animate-bounce backdrop-blur-md">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      {/* Top Aggregation Blocks */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#050c26]/60 border border-slate-800/50 p-4 rounded-xl">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Gross Invoiced</span>
          <div className="text-lg font-black text-white mt-1">${totalInvoiced.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
          <span className="text-[9px] text-slate-500 block mt-1">Gross accounts total</span>
        </div>
        <div className="bg-[#050c26]/60 border border-slate-800/50 p-4 rounded-xl">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Collected Funds</span>
          <div className="text-lg font-black text-emerald-400 mt-1">${totalPaid.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
          <span className="text-[9px] text-emerald-500/70 block mt-1">{(totalPaid / totalInvoiced * 100).toFixed(0)}% recovery rate</span>
        </div>
        <div className="bg-[#050c26]/60 border border-slate-800/50 p-4 rounded-xl">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Pending Cashflow</span>
          <div className="text-lg font-black text-amber-400 mt-1">${totalPending.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
          <span className="text-[9px] text-slate-500 block mt-1">Awaiting bank clearing</span>
        </div>
        <div className="bg-[#050c26]/60 border border-slate-800/50 p-4 rounded-xl">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Arrears / Overdue</span>
          <div className="text-lg font-black text-rose-400 mt-1">${totalOverdue.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
          <span className="text-[9px] text-rose-500/70 block mt-1">Requires follow-up team</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Invoice Database Grid */}
        <div className="lg:col-span-2 bg-[#050b21]/40 border border-slate-800/60 rounded-xl p-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 pb-4 border-b border-slate-800/50">
            <div>
              <h3 className="text-sm font-extrabold text-white">Invoice Database</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">SaaS Accounts Receivable Sandbox</p>
            </div>
            <button
              onClick={handleAddNewInvoice}
              className="px-3 py-1.5 bg-brand hover:bg-[#e0f2fe] text-[#050a1e] rounded-lg text-xs font-bold flex items-center gap-1 transition-all"
            >
              <Plus className="w-3.5 h-3.5" /> New Invoice
            </button>
          </div>

          {/* Filters Bar */}
          <div className="flex gap-2.5 mb-4 overflow-x-auto pb-1">
            {['All', 'Paid', 'Pending', 'Overdue'].map((filter) => (
              <button
                key={filter}
                onClick={() => setStatusFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wide uppercase transition-all ${
                  statusFilter === filter
                    ? 'bg-brand border-brand/50 text-[#050a1e] shadow-[0_0_10px_rgba(187,220,253,0.2)]'
                    : 'bg-slate-950/60 border-slate-800 text-slate-500 hover:text-slate-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search bar inside template */}
          <div className="relative mb-4">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clients or invoice ID..."
              className="w-full bg-[#030617] border border-slate-800 text-xs rounded-lg pl-9 pr-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand/60"
            />
          </div>

          {/* Invoice Items Table */}
          <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
            {filteredInvoices.map((inv) => {
              const theme = getStatusStyle(inv.status);
              const isSelected = selectedInvoice?.id === inv.id;
              return (
                <div
                  key={inv.id}
                  onClick={() => handleInvoiceClick(inv)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-slate-900 border-brand/40 shadow-sm'
                      : 'bg-slate-950/40 border-slate-800/60 hover:bg-slate-900/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center border border-brand/10 text-brand">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-black text-white leading-none">{inv.client}</span>
                        <span className="text-[9px] font-mono text-slate-500">{inv.id}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block mt-0.5">{inv.email}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-xs font-extrabold text-white">${inv.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                      <span className="text-[9px] text-slate-500 block">Due: {inv.due}</span>
                    </div>
                    <div className={`px-2 py-0.5 rounded border text-[9px] font-extrabold flex items-center gap-1 uppercase ${theme.bg}`}>
                      {theme.icon}
                      {inv.status}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
                  </div>
                </div>
              );
            })}
            {filteredInvoices.length === 0 && (
              <div className="text-center py-8 text-slate-500 font-bold">No simulated invoices found matching "{searchQuery}"</div>
            )}
          </div>
        </div>

        {/* Right Side: Dynamic Drawer Panel */}
        <div className="bg-[#050b21]/40 border border-slate-800/60 rounded-xl p-4 flex flex-col justify-between min-h-[350px]">
          {selectedInvoice ? (
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start border-b border-slate-800/50 pb-3 mb-4">
                  <div>
                    <span className="text-[9px] font-mono text-slate-500">Selected Invoice Ledger</span>
                    <h3 className="text-xs font-black text-white">{selectedInvoice.id}</h3>
                  </div>
                  <div className={`px-2 py-0.5 rounded border text-[9px] font-extrabold flex items-center gap-1 uppercase ${getStatusStyle(selectedInvoice.status).bg}`}>
                    {getStatusStyle(selectedInvoice.status).icon}
                    {selectedInvoice.status}
                  </div>
                </div>

                <div className="space-y-3 text-xs mb-6">
                  <div>
                    <span className="text-slate-500 text-[9px] uppercase font-bold block">Client / Registrant</span>
                    <span className="text-white font-extrabold mt-0.5 block">{selectedInvoice.client}</span>
                    <span className="text-slate-400 block text-[10px] mt-0.5">{selectedInvoice.email}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-slate-500 text-[9px] uppercase font-bold block">Issued Date</span>
                      <span className="text-slate-300 font-bold mt-0.5 block">{selectedInvoice.date}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[9px] uppercase font-bold block">Payment Due</span>
                      <span className="text-slate-300 font-bold mt-0.5 block">{selectedInvoice.due}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-800/40 pt-3">
                    <div className="text-[10px] uppercase font-bold text-slate-500">Invoice Sum</div>
                    {isEditing ? (
                      <div className="flex items-center gap-1 bg-[#020512] rounded-lg border border-slate-800 p-1 mt-1">
                        <span className="text-brand font-bold pl-1">$</span>
                        <input
                          type="number"
                          value={editAmount}
                          onChange={(e) => setEditAmount(e.target.value)}
                          className="w-full bg-transparent text-xs text-white focus:outline-none font-bold"
                        />
                      </div>
                    ) : (
                      <span className="text-xl font-black text-brand mt-1 block">${selectedInvoice.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                    )}
                  </div>

                  {isEditing && (
                    <div className="border-t border-slate-800/40 pt-3">
                      <span className="text-slate-500 text-[9px] uppercase font-bold block mb-1">Modify Payment Security Status</span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {['Paid', 'Pending', 'Overdue', 'Canceled'].map((status) => (
                          <button
                            key={status}
                            onClick={() => setEditStatus(status)}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${
                              editStatus === status
                                ? 'bg-brand/10 border-brand text-brand font-extrabold'
                                : 'bg-slate-950/60 border-slate-800 text-slate-500 hover:text-slate-300'
                            }`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2.5 pt-4 border-t border-slate-800/50">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSaveChanges}
                      className="flex-1 py-2 bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1 hover:bg-emerald-600 transition-colors"
                    >
                      <Check className="w-3.5 h-3.5" /> Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-3 py-2 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 rounded-lg text-xs font-bold transition-all"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full py-2 bg-[#020512] border border-slate-800 text-slate-300 rounded-lg text-xs font-bold flex items-center justify-center gap-1 hover:border-slate-700 hover:text-white transition-colors"
                  >
                    <Edit2 className="w-3.5 h-3.5" /> Adjust Invoice Status
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
              <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-600 mb-3 animate-pulse">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-300">No Invoice Selected</h4>
              <p className="text-[10px] text-slate-500 mt-1 max-w-[200px]">Click any row in the ledger to view full payment audit and edit details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
