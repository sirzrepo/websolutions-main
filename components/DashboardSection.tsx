
import React from 'react';

const DashboardSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-blue-600 text-white text-[13px] font-black uppercase tracking-[0.3em] px-8 py-3.5 rounded-full mb-8">
              Intelligence Cockpit
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]">
              Run your business <br/>from one dashboard
            </h2>
            <div className="space-y-8 text-left max-w-lg mx-auto lg:mx-0">
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-xl mb-3 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                  Real-time Analytics
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Track every sale, session, and conversion event as it happens. Built-in attribution helps you see exactly where your revenue is coming from.
                </p>
              </div>
              
              <div className="pl-6 space-y-4">
                <div className="flex items-center gap-4 text-slate-400 group cursor-pointer hover:text-slate-900 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600"></div>
                  <span className="font-bold text-lg">Inventory & CRM Sync</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400 group cursor-pointer hover:text-slate-900 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600"></div>
                  <span className="font-bold text-lg">Automated Payouts</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400 group cursor-pointer hover:text-slate-900 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600"></div>
                  <span className="font-bold text-lg">Multi-Marketplace Reports</span>
                </div>
              </div>

              <a href="https://webquestionnaire.sirz.co.uk/" className="inline-block bg-slate-900 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 active:scale-95 text-center">
                Start My Build
              </a>
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto">
            {/* The High-Fidelity Dashboard Mock */}
            <div className="bg-[#fcfcfd] rounded-[48px] border border-slate-200 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] p-4 md:p-8 overflow-hidden relative">
              {/* Header */}
              <div className="flex justify-between items-center mb-8 px-2">
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black italic text-xs">S</div>
                  <span className="font-black text-slate-900 text-sm">sirz</span>
                </div>
                <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                   <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                </div>
              </div>

              {/* Grid Layout for Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Total Sales</p>
                  <p className="text-xl font-black text-slate-900">$350K</p>
                  <div className="h-6 w-full mt-2">
                     <svg viewBox="0 0 100 30" className="w-full h-full text-blue-500 overflow-visible">
                        <path d="M0,25 Q25,5 50,20 T100,10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                     </svg>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Sessions</p>
                  <p className="text-xl font-black text-slate-900">16.5K</p>
                  <div className="h-6 w-full mt-2">
                     <svg viewBox="0 0 100 30" className="w-full h-full text-pink-500 overflow-visible">
                        <path d="M0,10 Q25,25 50,15 T100,20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                     </svg>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Total Profit</p>
                  <p className="text-xl font-black text-slate-900">50K</p>
                  <div className="h-6 w-full mt-2">
                     <svg viewBox="0 0 100 30" className="w-full h-full text-green-500 overflow-visible">
                        <path d="M0,20 Q25,10 50,25 T100,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                     </svg>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Discounted</p>
                  <p className="text-xl font-black text-slate-900">12K</p>
                  <div className="h-6 w-full mt-2">
                     <svg viewBox="0 0 100 30" className="w-full h-full text-orange-500 overflow-visible">
                        <path d="M0,15 Q25,25 50,5 T100,15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                     </svg>
                  </div>
                </div>
              </div>

              {/* Main Chart Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h5 className="text-sm font-black text-slate-900">Reports</h5>
                    <div className="flex gap-4 text-[10px] font-bold text-slate-400">
                      <span>Last 7 Days</span>
                    </div>
                  </div>
                  <div className="h-48 w-full">
                     <svg viewBox="0 0 400 150" className="w-full h-full text-blue-600 overflow-visible">
                        <path d="M0,120 C50,100 100,140 150,80 C200,20 250,110 300,60 C350,10 400,40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        <path d="M0,120 C50,100 100,140 150,80 C200,20 250,110 300,60 C350,10 400,40 L400,150 L0,150 Z" fill="currentColor" fillOpacity="0.05" />
                        {/* Grid Lines */}
                        <line x1="0" y1="150" x2="400" y2="150" stroke="#f1f5f9" strokeWidth="1" />
                        <line x1="0" y1="100" x2="400" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                        <line x1="0" y1="50" x2="400" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                     </svg>
                  </div>
                  <div className="flex justify-between mt-4 text-[9px] font-bold text-slate-300 uppercase tracking-widest px-2">
                     <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
                  <h5 className="text-sm font-black text-slate-900 mb-6">Activity</h5>
                  <div className="flex-1 flex items-end justify-between gap-2 px-2">
                    {[60, 40, 80, 50, 90, 30, 70, 45, 85].map((h, i) => (
                      <div key={i} className="w-full bg-slate-100 rounded-t-lg relative group">
                        <div 
                          className="w-full bg-orange-500 rounded-t-lg transition-all duration-1000 group-hover:bg-blue-600" 
                          style={{ height: `${h}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-3">
                    <div className="flex justify-between items-center text-[10px]">
                       <span className="font-bold text-slate-400">USA</span>
                       <span className="font-black text-slate-900">25.8%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                       <div className="w-[65%] h-full bg-blue-600"></div>
                    </div>
                    <div className="flex justify-between items-center text-[10px]">
                       <span className="font-bold text-slate-400">UK</span>
                       <span className="font-black text-slate-900">18.2%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                       <div className="w-[45%] h-full bg-pink-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row Tables/Misc */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                       <h5 className="text-sm font-black text-slate-900">Last Transactions</h5>
                       <span className="text-[10px] font-bold text-blue-600">View All</span>
                    </div>
                    <div className="space-y-4">
                       {[
                         { id: "#5089", date: "31 March 2023", total: "$1200", status: "Paid" },
                         { id: "#5090", date: "31 March 2023", total: "$840", status: "Paid" },
                         { id: "#5091", date: "01 April 2023", total: "$2100", status: "Pending" }
                       ].map((tx, i) => (
                         <div key={i} className="flex justify-between items-center text-[11px] pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                            <div>
                               <p className="font-black text-slate-900">{tx.id}</p>
                               <p className="text-slate-400 text-[9px]">{tx.date}</p>
                            </div>
                            <span className="font-black text-slate-900">{tx.total}</span>
                            <span className={`px-2 py-0.5 rounded font-black text-[9px] ${tx.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>{tx.status}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-center items-center">
                    <h5 className="text-sm font-black text-slate-900 mb-6 w-full text-left">Top Categories</h5>
                    <div className="relative w-32 h-32">
                       <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                         <circle cx="18" cy="18" r="16" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                         <circle cx="18" cy="18" r="16" fill="none" stroke="#0052FF" strokeWidth="4" strokeDasharray="60, 100" />
                         <circle cx="18" cy="18" r="16" fill="none" stroke="#f07c42" strokeWidth="4" strokeDasharray="30, 100" strokeDashoffset="-60" />
                         <circle cx="18" cy="18" r="16" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="10, 100" strokeDashoffset="-90" />
                       </svg>
                       <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-xs font-black text-slate-900 leading-none">74%</span>
                          <span className="text-[8px] text-slate-400 font-bold">Growth</span>
                       </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2">
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                          <span className="text-[10px] font-bold text-slate-500">Retail</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#f07c42]"></div>
                          <span className="text-[10px] font-bold text-slate-500">Digital</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                          <span className="text-[10px] font-bold text-slate-500">SaaS</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
