import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Wallet, DollarSign, Search, PlusCircle, CheckCircle, RefreshCw } from 'lucide-react';

export default function CryptoPortfolio() {
  const [selectedCoin, setSelectedCoin] = useState('BTC');
  const [searchQuery, setSearchQuery] = useState('');
  const [balance, setBalance] = useState(48250.42);
  const [toastMessage, setToastMessage] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const coinsData = {
    BTC: {
      name: 'Bitcoin',
      price: 64250.80,
      change: 3.45,
      sparkline: [40, 45, 38, 48, 55, 52, 60, 58, 64],
      color: '#f7931a',
      symbol: '₿'
    },
    ETH: {
      name: 'Ethereum',
      price: 3450.25,
      change: -1.24,
      sparkline: [35, 30, 32, 28, 40, 38, 36, 32, 34],
      color: '#627eea',
      symbol: 'Ξ'
    },
    SOL: {
      name: 'Solana',
      price: 142.15,
      change: 8.72,
      sparkline: [12, 15, 18, 14, 22, 25, 28, 24, 30],
      color: '#14f195',
      symbol: '◎'
    }
  };

  const transactions = [
    { id: '#TX8024', type: 'Buy', coin: 'BTC', amount: '0.045 BTC', value: '$2,891.28', date: 'Just now', status: 'Completed' },
    { id: '#TX8023', type: 'Sell', coin: 'ETH', amount: '1.20 ETH', value: '$4,140.30', date: '2 hours ago', status: 'Completed' },
    { id: '#TX8022', type: 'Buy', coin: 'SOL', amount: '15.5 SOL', value: '$2,132.25', date: 'Yesterday', status: 'Completed' },
    { id: '#TX8021', type: 'Buy', coin: 'BTC', amount: '0.012 BTC', value: '$771.00', date: '2 days ago', status: 'Completed' },
    { id: '#TX8020', type: 'Receive', coin: 'ETH', amount: '0.50 ETH', value: '$1,725.12', date: '3 days ago', status: 'Completed' },
    { id: '#TX8019', type: 'Sell', coin: 'SOL', amount: '8.0 SOL', value: '$1,136.00', date: '4 days ago', status: 'Failed' }
  ];

  // Live price simulator
  useEffect(() => {
    const timer = setInterval(() => {
      const isUp = Math.random() > 0.4;
      const amount = (Math.random() * 0.15).toFixed(2);
      
      // Select random coin to tick
      const keys = Object.keys(coinsData);
      const randomCoin = keys[Math.floor(Math.random() * keys.length)];
      
      if (randomCoin === 'BTC') {
        coinsData.BTC.price += isUp ? parseFloat(amount) * 10 : -parseFloat(amount) * 10;
      } else if (randomCoin === 'ETH') {
        coinsData.ETH.price += isUp ? parseFloat(amount) * 2 : -parseFloat(amount) * 2;
      } else {
        coinsData.SOL.price += isUp ? parseFloat(amount) * 0.5 : -parseFloat(amount) * 0.5;
      }

      showToast(`Market Update: ${randomCoin} ticked ${isUp ? 'UP' : 'DOWN'} to $${coinsData[randomCoin].price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleTransaction = (coin, type) => {
    const currentPrice = coinsData[coin].price;
    const value = 2500; // Mock fixed transfer of $2500
    const cryptoAmount = (value / currentPrice).toFixed(4);

    if (type === 'Buy') {
      if (balance < value) {
        showToast("Error: Insufficient cash balance!");
        return;
      }
      setBalance(prev => prev - value);
      showToast(`Successfully purchased ${cryptoAmount} ${coin}!`);
    } else {
      setBalance(prev => prev + value);
      showToast(`Successfully sold ${cryptoAmount} ${coin} for $2,500.00!`);
    }
  };

  const currentCoin = coinsData[selectedCoin];

  const filteredTransactions = transactions.filter(tx => {
    const matchesSearch = tx.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tx.coin.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tx.type.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'buy') return matchesSearch && tx.type === 'Buy';
    if (activeTab === 'sell') return matchesSearch && tx.type === 'Sell';
    return matchesSearch;
  });

  return (
    <div className="w-full text-slate-100 bg-[#040817] rounded-2xl overflow-hidden border border-slate-800 p-4 sm:p-6 font-display select-none">
      {/* Dynamic Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-4 right-4 z-50 bg-[#06122d] border border-brand/30 text-brand text-xs py-2.5 px-4 rounded-xl shadow-lg flex items-center gap-2 animate-bounce backdrop-blur-md">
          <CheckCircle className="w-4 h-4 text-brand shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-slate-800/60 pb-5">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
            <Wallet className="w-3.5 h-3.5 text-brand" /> Live Portfolio Dashboard
          </h2>
        </div>
        <div className="bg-[#0b1436] rounded-xl border border-brand/10 px-4 py-2 flex items-center gap-3">
          <div className="flex-1">
            <span className="text-[8px] uppercase tracking-wider text-slate-500 block">Total Balance</span>
            <div className="text-sm font-bold text-brand">${balance.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
          </div>
          <button 
            onClick={() => { setBalance(50000); showToast("Portfolio reloaded with $50,000.00 cash!"); }}
            className="p-1.5 hover:bg-white/5 rounded-lg text-slate-400 hover:text-brand transition-colors"
            title="Reload Funds"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Coins Ticker Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {Object.keys(coinsData).map((key) => {
          const coin = coinsData[key];
          const isActive = selectedCoin === key;
          return (
            <div 
              key={key}
              onClick={() => setSelectedCoin(key)}
              className={`p-4 rounded-xl cursor-pointer border transition-all duration-300 ${
                isActive 
                  ? 'bg-slate-900/60 border-brand/40 shadow-[0_0_15px_rgba(187,220,253,0.15)]' 
                  : 'bg-slate-950/40 border-slate-800/60 hover:border-slate-700 hover:bg-slate-900/30'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2.5">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
                    style={{ backgroundColor: coin.color }}
                  >
                    {coin.symbol}
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-white leading-none">{coin.name}</h3>
                    <span className="text-[10px] text-slate-400">{key} / USD</span>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 ${
                  coin.change >= 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                }`}>
                  {coin.change >= 0 ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                  {coin.change}%
                </span>
              </div>

              <div className="flex justify-between items-end mt-4">
                <div className="text-lg font-black tracking-tight text-white">
                  ${coin.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </div>
                {/* Mini SVG Sparkline */}
                <div className="w-16 h-6">
                  <svg viewBox="0 0 100 30" className="w-full h-full">
                    <polyline
                      fill="none"
                      stroke={coin.change >= 0 ? '#10b981' : '#f43f5e'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={coin.sparkline.map((val, idx) => `${(idx / (coin.sparkline.length - 1)) * 100},${30 - (val / 65) * 30}`).join(' ')}
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Interactive SVG Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 p-5 bg-[#050b21]/70 border border-slate-800/80 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              {currentCoin.name} Real-time Performance (9D Chart)
            </h3>
            <div className="flex gap-2">
              <button 
                onClick={() => handleTransaction(selectedCoin, 'Buy')}
                className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-all"
              >
                <PlusCircle className="w-3 h-3" /> Buy $2.5K
              </button>
              <button 
                onClick={() => handleTransaction(selectedCoin, 'Sell')}
                className="px-3 py-1 bg-rose-500 hover:bg-rose-600 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-all"
              >
                <ArrowUpRight className="w-3 h-3" /> Sell $2.5K
              </button>
            </div>
          </div>

          {/* Interactive Chart Core */}
          <div className="relative w-full h-48 bg-[#020512] border border-slate-900/60 rounded-lg p-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-brand/[0.02] to-transparent pointer-events-none" />
            
            {/* Grid helper lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none opacity-20">
              <div className="border-b border-slate-700 w-full" />
              <div className="border-b border-slate-700 w-full" />
              <div className="border-b border-slate-700 w-full" />
              <div className="border-b border-slate-700 w-full" />
            </div>

            <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id={`grad-${selectedCoin}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={currentCoin.color} stopOpacity="0.45" />
                  <stop offset="100%" stopColor={currentCoin.color} stopOpacity="0.0" />
                </linearGradient>
              </defs>
              
              {/* Shaded Area Under Path */}
              <path
                d={`M 0 150 
                    ${currentCoin.sparkline.map((val, idx) => `L ${(idx / (currentCoin.sparkline.length - 1)) * 500} ${150 - (val / 70) * 130}`).join(' ')} 
                    L 500 150 Z`}
                fill={`url(#grad-${selectedCoin})`}
              />
              
              {/* Bold Chart Line */}
              <path
                d={currentCoin.sparkline.map((val, idx) => `${idx === 0 ? 'M' : 'L'} ${(idx / (currentCoin.sparkline.length - 1)) * 500} ${150 - (val / 70) * 130}`).join(' ')}
                fill="none"
                stroke={currentCoin.color}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Glowing Interactive Data Nodes */}
              {currentCoin.sparkline.map((val, idx) => {
                const cx = (idx / (currentCoin.sparkline.length - 1)) * 500;
                const cy = 150 - (val / 70) * 130;
                return (
                  <g key={idx} className="group cursor-pointer">
                    <circle
                      cx={cx}
                      cy={cy}
                      r="4"
                      fill={currentCoin.color}
                      className="transition-all hover:r-6"
                    />
                    <circle
                      cx={cx}
                      cy={cy}
                      r="10"
                      stroke={currentCoin.color}
                      strokeWidth="1.5"
                      fill="none"
                      className="opacity-0 group-hover:opacity-100 animate-ping"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Price values axis indicators */}
            <div className="absolute top-2 left-2 text-[9px] text-slate-500 font-bold">
              ${(currentCoin.price * 1.08).toLocaleString(undefined, {maximumFractionDigits: 0})}
            </div>
            <div className="absolute bottom-2 left-2 text-[9px] text-slate-500 font-bold">
              ${(currentCoin.price * 0.92).toLocaleString(undefined, {maximumFractionDigits: 0})}
            </div>
          </div>
        </div>

        {/* Quick Transaction Executor Card */}
        <div className="p-5 bg-[#050b21]/70 border border-slate-800/80 rounded-xl flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
              Direct Sandbox Order
            </h3>
            <div className="p-3 bg-[#020512] rounded-lg border border-slate-900 flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand/10 flex items-center justify-center text-brand font-bold text-xs">
                  {currentCoin.symbol.substring(0,2)}
                </div>
                <div>
                  <span className="text-[8px] uppercase text-slate-500 block font-bold">Price</span>
                  <span className="text-xs font-extrabold text-brand">${currentCoin.price.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-500 block leading-none">Price per unit</span>
                <span className="text-xs font-extrabold text-brand">${currentCoin.price.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/40">
                <span className="text-slate-400">Fixed sandbox value</span>
                <span className="text-white font-bold">$2,500.00 USD</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/40">
                <span className="text-slate-400">Estimated output</span>
                <span className="text-emerald-400 font-black">{(2500 / currentCoin.price).toFixed(5)} {selectedCoin}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Vapor Fees (Simulated)</span>
                <span className="text-slate-400 font-bold">$0.00 USD</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 mt-5">
            <button
              onClick={() => handleTransaction(selectedCoin, 'Buy')}
              className="py-2.5 bg-emerald-500/15 hover:bg-emerald-500 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-white rounded-xl text-xs font-extrabold transition-all shadow-[0_0_10px_rgba(16,185,129,0.05)]"
            >
              EXECUTE BUY
            </button>
            <button
              onClick={() => handleTransaction(selectedCoin, 'Sell')}
              className="py-2.5 bg-rose-500/15 hover:bg-rose-500 border border-rose-500/30 hover:border-rose-500 text-rose-400 hover:text-white rounded-xl text-xs font-extrabold transition-all shadow-[0_0_10px_rgba(244,63,94,0.05)]"
            >
              EXECUTE SELL
            </button>
          </div>
        </div>
      </div>

      {/* Transaction List and Search Filter */}
      <div className="bg-[#050b21]/70 border border-slate-800/80 rounded-xl p-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              Transactions Archive
            </h3>
            <div className="flex bg-[#020512] rounded-lg border border-slate-800/50 p-0.5">
              {['all', 'buy', 'sell'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab ? 'bg-brand text-[#050a1e] shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar inside template */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by Order ID or Code..."
              className="w-full bg-[#020512] border border-slate-800 text-xs rounded-lg pl-9 pr-3 py-1.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand/60"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[11px] text-left">
            <thead>
              <tr className="border-b border-slate-800/60 text-slate-400 uppercase tracking-wider">
                <th className="py-2">Tx Code</th>
                <th className="py-2">Action</th>
                <th className="py-2">Token</th>
                <th className="py-2 text-right">Volume</th>
                <th className="py-2 text-right">Equity (USD)</th>
                <th className="py-2">Timestamp</th>
                <th className="py-2">Security Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/30 text-slate-300">
              {filteredTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-900/35 transition-colors">
                  <td className="py-2.5 font-mono font-bold text-white">{tx.id}</td>
                  <td className="py-2.5">
                    <span className={`px-2 py-0.5 rounded font-extrabold text-[9px] uppercase ${
                      tx.type === 'Buy' || tx.type === 'Receive' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className="py-2.5 font-bold">{tx.coin}</td>
                  <td className="py-2.5 text-right font-mono font-bold text-slate-100">{tx.amount}</td>
                  <td className="py-2.5 text-right font-mono font-black text-white">{tx.value}</td>
                  <td className="py-2.5 text-slate-400">{tx.date}</td>
                  <td className="py-2.5">
                    <span className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Completed' ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredTransactions.length === 0 && (
            <div className="text-center py-6 text-slate-500 font-bold">No simulated transactions found matching "{searchQuery}"</div>
          )}
        </div>
      </div>
    </div>
  );
}
