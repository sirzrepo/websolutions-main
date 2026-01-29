
import React from 'react';

const BusinessSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="grid-pattern w-full h-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9] mb-8">
            Built for scale. <br/>Designed for business.
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            From automated digital product delivery to global physical commerce, <br className="hidden md:block"/> we build the infrastructure that powers modern brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Section: Physical Commerce (Following the screenshot exactly) */}
          <div className="bg-white rounded-[56px] p-8 md:p-14 border border-slate-200/60 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.02)] flex flex-col hover:shadow-2xl transition-all duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Physical Commerce</h3>
            </div>

            <p className="text-slate-500 text-lg mb-12 leading-relaxed font-medium">
              Multi-channel infrastructure that syncs your inventory across the world's largest marketplaces. Built for scale and speed.
            </p>

            <div className="mb-14">
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Live Client Deployments</h4>
              
              <div className="space-y-4">
                <a href="https://Domesticia.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-500 transition-all group">
                  <div className="flex items-center gap-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg" className="w-5 h-5 grayscale group-hover:grayscale-0" alt="Shopify" />
                    <span className="text-[15px] font-black text-slate-800 tracking-tight">Domesticia.com</span>
                  </div>
                  <span className="text-blue-600 text-[13px] font-bold">Visit Store →</span>
                </a>

                <a href="https://www.highstores.co.uk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-500 transition-all group">
                  <div className="flex items-center gap-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="w-5 h-5 grayscale group-hover:grayscale-0" alt="Amazon" />
                    <span className="text-[15px] font-black text-slate-800 tracking-tight">HighStores Amazon</span>
                  </div>
                  <span className="text-blue-600 text-[13px] font-bold">View Collection →</span>
                </a>

                <a href="https://vt.tiktok.com/ZNRS4MdXd/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-500 transition-all group">
                  <div className="flex items-center gap-4">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" className="w-5 h-5 grayscale group-hover:grayscale-0" alt="TikTok" />
                    <span className="text-[15px] font-black text-slate-800 tracking-tight">INNOVATIONZ TikTok Shop</span>
                  </div>
                  <span className="text-blue-600 text-[13px] font-bold">Shop TikTok →</span>
                </a>
              </div>
            </div>

            {/* Customer Checkout View Section */}
            <div className="bg-[#f8f9fb] rounded-[40px] p-8 md:p-10 relative mt-auto">
               <div className="absolute -top-3 left-10 bg-[#0f172a] text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest z-10 shadow-lg">
                 Customer Checkout View
               </div>
               
               <div className="bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-8 border border-white">
                  <div className="flex gap-6 mb-8">
                    <div className="w-24 h-24 bg-slate-50 rounded-2xl p-1 border border-slate-100 flex items-center justify-center overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Bracelet" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[15px] text-slate-900 leading-tight mb-2">Iced Out Single Row Rhinestones Chain</h4>
                      <p className="text-[13px] font-bold text-slate-400">Blue • Qty: 1</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                    <span className="text-3xl font-black text-slate-900 tracking-tighter">£26.00</span>
                    <button className="bg-[#e2b041] text-white px-10 py-3.5 rounded-2xl text-[12px] font-black uppercase tracking-widest shadow-xl shadow-[#e2b041]/20 transform hover:scale-105 active:scale-95 transition-all">
                      Checkout
                    </button>
                  </div>
               </div>
            </div>
          </div>

          {/* Section: Digital Ecosystems */}
          <div className="bg-[#f1f5f9] rounded-[56px] p-8 md:p-14 border border-slate-200/50 flex flex-col group hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Digital Ecosystems</h3>
            </div>

            <p className="text-slate-500 text-lg mb-12 leading-relaxed font-medium">
              Automated high-ticket funnels and digital distribution systems. We build the engine that delivers your content while you scale.
            </p>

            <div className="mb-14">
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Live Product Systems</h4>
              
              <div className="space-y-4">
                <a href="https://sirzbooks.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-500 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-[10px] text-white font-black italic">B</div>
                    <span className="text-[15px] font-black text-slate-800 tracking-tight">SirzBooks.com</span>
                  </div>
                  <span className="text-blue-600 text-[13px] font-bold">Visit Platform →</span>
                </a>

                <a href="https://onboarding-pwqw.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-500 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 bg-slate-900 rounded flex items-center justify-center text-[10px] text-white font-black italic">S</div>
                    <span className="text-[15px] font-black text-slate-800 tracking-tight">Technical Onboarding System</span>
                  </div>
                  <span className="text-blue-600 text-[13px] font-bold">Launch Demo →</span>
                </a>
              </div>
            </div>

            {/* Example Digital Asset Checkout */}
            <div className="bg-slate-900 rounded-[40px] p-8 md:p-10 relative mt-auto overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="grid-pattern w-full h-full"></div>
               </div>
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest z-10 shadow-lg">
                 Service Checkout View
               </div>
               
               <div className="bg-white rounded-3xl p-8 relative z-10 shadow-2xl">
                 <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-50">
                    <h5 className="font-black text-slate-900 text-lg">Order Summary</h5>
                    <div className="flex items-center gap-1.5">
                       <div className="w-2 h-2 rounded-full bg-green-500"></div>
                       <span className="text-[10px] font-black text-slate-400">SECURE</span>
                    </div>
                 </div>

                 <div className="flex items-center gap-5 p-5 bg-blue-50/50 rounded-2xl mb-8">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                       <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
                    </div>
                    <div>
                      <p className="text-[14px] font-black text-slate-900">LinkedIn Optimization Bundle</p>
                      <p className="text-[11px] font-bold text-blue-600">LIFETIME ACCESS</p>
                    </div>
                    <span className="ml-auto font-black text-slate-900">£200</span>
                 </div>

                 <button className="w-full bg-[#007aff] text-white py-5 rounded-2xl font-black text-[13px] uppercase tracking-[0.1em] flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 transform hover:-translate-y-1 active:scale-95 transition-all">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.52-2.09-.52-3.2 0-1.44.7-2.31.54-3.15-.4C3.82 16.32 4.14 10.15 8.27 9.99c1.17 0 2 .59 2.72.63.85.05 2.11-.75 3.51-.62 1.62.14 2.85.74 3.59 1.83-3.1 1.83-2.6 5.86.54 7.07-.63 1.4-1.47 2.76-2.58 3.38zM12.03 9.77c-.11-2.43 2.01-4.52 4.39-4.77.29 2.82-2.65 5.03-4.39 4.77z"/></svg>
                   Complete Order
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* Global Support Call */}
        <div className="mt-24 text-center">
          <p className="text-slate-400 font-bold text-sm uppercase tracking-[0.3em] mb-8">Trusted by 12,000+ Businesses Globally</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale items-center">
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg" className="h-6" alt="Shopify" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="h-6" alt="Amazon" />
             <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" className="h-6" alt="TikTok" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" className="h-8" alt="Stripe" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
