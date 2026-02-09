
import React from 'react';

const BusinessSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="grid-pattern w-full h-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[1] md:leading-[0.9] mb-8">
            Built for scale. <br/>Designed for business.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
            Powering the next generation of global brands with resilient infrastructure designed to handle peak demand and rapid expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Section: Physical Commerce */}
          <div className="bg-[#f8fbff] rounded-[40px] md:rounded-[56px] p-6 md:p-14 border border-blue-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.02)] flex flex-col hover:shadow-2xl transition-all duration-700">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Physical Commerce</h3>
            </div>

            <p className="text-slate-500 text-base md:text-lg mb-10 md:mb-12 leading-relaxed font-medium">
              Sell everywhere at once. Real-time inventory syncing, designed for physical retail. Built for scale and speed.
            </p>

            <div className="mb-10 md:mb-14">
              <h4 className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Live Client Deployments</h4>
              
              <div className="space-y-3">
                <a href="https://Domesticia.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-between p-4 md:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-500 transition-all group overflow-hidden">
                  <div className="flex items-center gap-3 md:gap-4 min-w-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg" className="w-4 h-4 md:w-5 md:h-5 grayscale group-hover:grayscale-0 flex-shrink-0" alt="Shopify" />
                    <span className="text-[13px] md:text-[15px] font-black text-slate-800 tracking-tight truncate">Domesticia.com</span>
                  </div>
                  <span className="text-blue-600 text-[11px] md:text-[13px] font-bold whitespace-nowrap ml-2">Visit Store →</span>
                </a>

                <a href="https://www.highstores.co.uk" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-between p-4 md:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-500 transition-all group overflow-hidden">
                  <div className="flex items-center gap-3 md:gap-4 min-w-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="w-4 h-4 md:w-5 md:h-5 grayscale group-hover:grayscale-0 flex-shrink-0" alt="Amazon" />
                    <span className="text-[13px] md:text-[15px] font-black text-slate-800 tracking-tight truncate">HighStores Amazon</span>
                  </div>
                  <span className="text-blue-600 text-[11px] md:text-[13px] font-bold whitespace-nowrap ml-2">View →</span>
                </a>

                <a href="https://vt.tiktok.com/ZNRS4MdXd/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-between p-4 md:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-500 transition-all group overflow-hidden">
                  <div className="flex items-center gap-3 md:gap-4 min-w-0">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" className="w-4 h-4 md:w-5 md:h-5 grayscale group-hover:grayscale-0 flex-shrink-0" alt="TikTok" />
                    <span className="text-[13px] md:text-[15px] font-black text-slate-800 tracking-tight truncate">INNOVATIONZ Shop</span>
                  </div>
                  <span className="text-blue-600 text-[11px] md:text-[13px] font-bold whitespace-nowrap ml-2">Shop →</span>
                </a>
              </div>
            </div>

            {/* Customer Checkout View Section */}
            <div className="bg-[#f8f9fb] rounded-[32px] md:rounded-[40px] p-6 md:p-10 relative mt-auto">
               <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-5 md:p-8 border border-white relative">
                  {/* Badge centered on white box top */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0f172a] text-white px-5 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest z-10 shadow-lg whitespace-nowrap">
                    CUSTOMER CHECKOUT VIEW
                  </div>
                  
                  <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 pt-2">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-50 rounded-xl md:rounded-2xl p-1 border border-slate-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Bracelet" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[13px] md:text-[15px] text-slate-900 leading-tight mb-2">Iced Out Single Row Rhinestones Chain</h4>
                      <p className="text-[11px] md:text-[13px] font-bold text-slate-400">Blue • Qty: 1</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 md:pt-6 border-t border-slate-50">
                    <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">£26.00</span>
                    <a href="https://webquestionnaire.sirz.co.uk/" className="bg-[#e2b041] text-white px-6 md:px-10 py-3 md:py-3.5 rounded-xl md:rounded-2xl text-[10px] md:text-[12px] font-black uppercase tracking-widest shadow-xl shadow-[#e2b041]/20 transform hover:scale-105 active:scale-95 transition-all text-center">
                      Checkout
                    </a>
                  </div>
               </div>
            </div>
          </div>

          {/* Section: Digital Ecosystems */}
          <div className="bg-[#f1f5f9] rounded-[40px] md:rounded-[56px] p-6 md:p-14 border border-slate-200/50 flex flex-col group hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all duration-700">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Digital Ecosystems</h3>
            </div>

            <p className="text-slate-500 text-base md:text-lg mb-10 md:mb-12 leading-relaxed font-medium">
              Engineering the backend of your digital world with automated delivery systems that scale alongside your user base.
            </p>

            <div className="mb-10 md:mb-14">
              <h4 className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Live Product Systems</h4>
              
              <div className="space-y-3">
                <a href="https://sirzbooks.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-between p-4 md:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-500 transition-all group overflow-hidden">
                  <div className="flex items-center gap-3 md:gap-4 min-w-0">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-600 rounded flex items-center justify-center text-[8px] md:text-[10px] text-white font-black italic flex-shrink-0">B</div>
                    <span className="text-[13px] md:text-[15px] font-black text-slate-800 tracking-tight truncate">SirzBooks.com</span>
                  </div>
                  <span className="text-blue-600 text-[11px] md:text-[13px] font-bold whitespace-nowrap ml-2">Visit →</span>
                </a>

                <a href="https://onboarding-pwqw.vercel.app" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-between p-4 md:p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-500 transition-all group overflow-hidden">
                  <div className="flex items-center gap-3 md:gap-4 min-w-0">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-slate-900 rounded flex items-center justify-center text-[8px] md:text-[10px] text-white font-black italic flex-shrink-0">S</div>
                    <span className="text-[13px] md:text-[15px] font-black text-slate-800 tracking-tight truncate">Onboarding System</span>
                  </div>
                  <span className="text-blue-600 text-[11px] md:text-[13px] font-bold whitespace-nowrap ml-2">Demo →</span>
                </a>
              </div>
            </div>

            {/* Optimized Digital Asset Checkout */}
            <div className="bg-[#0f172a] rounded-[32px] md:rounded-[40px] p-6 md:p-12 relative mt-auto overflow-hidden">
               {/* Dot Grid Background */}
               <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
               
               {/* Service Checkout Badge */}
               <div className="bg-white rounded-[32px] p-6 md:p-10 relative z-10 shadow-2xl mt-4">
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] z-20 shadow-xl shadow-blue-900/40 whitespace-nowrap">
                   SERVICE CHECKOUT VIEW
                 </div>

                 <div className="flex justify-between items-center mb-10 pt-4">
                    <h5 className="font-black text-slate-900 text-lg md:text-xl tracking-tight">Order Summary</h5>
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                       <span className="text-[10px] font-black text-slate-400 tracking-widest">SECURE</span>
                    </div>
                 </div>

                 <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-blue-50/40 rounded-3xl mb-10 border border-blue-50">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 flex-shrink-0">
                       <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M10 8l6 4-6 4V8z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[14px] md:text-[16px] font-black text-slate-900 leading-tight mb-1 truncate">LinkedIn Optimization</p>
                      <p className="text-[10px] md:text-[12px] font-black text-blue-600 tracking-wide">LIFETIME ACCESS</p>
                    </div>
                    <span className="font-black text-slate-900 text-lg md:text-xl ml-2">£200</span>
                 </div>

                 <a href="https://webquestionnaire.sirz.co.uk/" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-[13px] uppercase tracking-[0.15em] flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/30 transition-all hover:bg-blue-700 active:scale-95 text-center">
                   <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.52-2.09-.52-3.2 0-1.44.7-2.31.54-3.15-.4C3.82 16.32 4.14 10.15 8.27 9.99c1.17 0 2 .59 2.72.63.85.05 2.11-.75 3.51-.62 1.62.14 2.85.74 3.59 1.83-3.1 1.83-2.6 5.86.54 7.07-.63 1.4-1.47 2.76-2.58 3.38zM12.03 9.77c-.11-2.43 2.01-4.52 4.39-4.77.29 2.82-2.65 5.03-4.39 4.77z"/></svg>
                   COMPLETE ORDER
                 </a>
               </div>
            </div>
          </div>
        </div>

        {/* Global Support Call */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-slate-400 font-bold text-[10px] md:text-sm uppercase tracking-[0.3em] mb-8">Trusted by 12,000+ Businesses Globally</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-16 opacity-30 grayscale items-center px-4">
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg" className="h-4 md:h-6" alt="Shopify" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="h-4 md:h-6" alt="Amazon" />
             <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" className="h-4 md:h-6" alt="TikTok" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" className="h-6 md:h-8" alt="Stripe" />
          </div>
        </div>
        
        {/* Simple 'Build Yours Today' button */}
        <div className="mt-16 text-center">
          <a href="https://webquestionnaire.sirz.co.uk/" className="inline-block bg-blue-600 text-white px-16 py-7 rounded-2xl font-black text-lg uppercase tracking-widest transition-all hover:bg-blue-700 active:scale-95 shadow-2xl shadow-blue-500/20 text-center">
            BUILD YOURS TODAY
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
