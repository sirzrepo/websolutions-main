
import React from 'react';

const LiveGallery: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-32 bg-[#fafafa] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <div className="grid-pattern w-full h-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block bg-blue-50 text-blue-600 font-black text-[13px] uppercase tracking-[0.3em] px-12 py-4 rounded-full mb-8 shadow-sm">
            REAL DEPLOYMENT PREVIEW
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
            Experience the <br/>SIRZ standard.
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
              We don’t just build websites. We engineer high-speed, premium web experiences that match the quality and feel of world-class brands.
            </p>
          </div>
        </div>

        {/* Mockup Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Case 1: Digital Product Checkout (Sanz Innovation) */}
          <div className="flex flex-col group">
            <div className="relative mx-auto w-[310px] h-[640px] bg-[#1a1a1a] rounded-[54px] border-[10px] border-[#2a2a2a] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-700 group-hover:-translate-y-4">
              {/* Status Bar */}
              <div className="absolute top-0 w-full h-8 px-8 flex items-center justify-between z-40">
                <span className="text-[10px] font-bold text-slate-900">13:06</span>
                <div className="flex gap-1.5 items-center">
                   <div className="w-3 h-3 border border-slate-900 rounded-sm"></div>
                   <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                </div>
              </div>
              
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50"></div>

              {/* Screen Content: Sanz Innovation Checkout */}
              <div className="h-full bg-white pt-10 overflow-y-auto hide-scrollbar">
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-6 h-6 bg-slate-100 rounded-md flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    </div>
                    <span className="text-[11px] font-bold text-slate-600">Sanz Innovation Retro</span>
                  </div>

                  <div className="bg-slate-50 rounded-3xl p-6 mb-6">
                    <img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=300" className="w-24 h-24 mx-auto rounded-xl shadow-lg mb-6 object-cover" alt="Product" />
                    <h4 className="text-center font-bold text-sm text-slate-700 mb-1">LinkedIn Optimization</h4>
                    <p className="text-center text-2xl font-black text-slate-900">£200.00</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <button className="bg-black text-white h-12 rounded-xl flex items-center justify-center gap-2">
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.52-2.09-.52-3.2 0-1.44.7-2.31.54-3.15-.4C3.82 16.32 4.14 10.15 8.27 9.99c1.17 0 2 .59 2.72.63.85.05 2.11-.75 3.51-.62 1.62.14 2.85.74 3.59 1.83-3.1 1.83-2.6 5.86.54 7.07-.63 1.4-1.47 2.76-2.58 3.38zM12.03 9.77c-.11-2.43 2.01-4.52 4.39-4.77.29 2.82-2.65 5.03-4.39 4.77z"/></svg>
                       <span className="text-[12px] font-black">Pay</span>
                    </button>
                    <button className="bg-[#00d66f] text-white h-12 rounded-xl flex items-center justify-center gap-2">
                       <span className="text-[12px] font-black italic">link</span>
                    </button>
                  </div>

                  <div className="relative mb-8 text-center">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 -z-10"></div>
                    <span className="bg-white px-4 text-[9px] font-black text-slate-300 uppercase tracking-widest">OR</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-2">Email</label>
                      <div className="w-full h-11 bg-slate-50 border border-slate-100 rounded-xl px-4 flex items-center text-slate-300 text-[11px]">email@example.com</div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 mb-2">Payment method</label>
                      <div className="space-y-2">
                        <div className="w-full h-12 border border-slate-100 rounded-xl px-4 flex items-center justify-between">
                           <div className="flex items-center gap-3">
                              <div className="w-4 h-4 rounded-full border border-slate-200"></div>
                              <span className="text-[11px] font-bold">Card</span>
                           </div>
                           <div className="flex gap-1">
                              <div className="w-6 h-4 bg-slate-100 rounded-sm"></div>
                              <div className="w-6 h-4 bg-slate-100 rounded-sm"></div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="sticky bottom-0 bg-white p-6 border-t border-slate-50">
                  <a href="https://webquestionnaire.sirz.co.uk/" className="block w-full bg-[#007aff] text-white py-4 rounded-xl font-black text-[12px] shadow-lg shadow-blue-500/20 text-center">Pay</a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center px-6">
              <h3 className="text-xl font-black text-slate-900 mb-2">Digital Checkout Flow</h3>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Sanz Innovation Retro</p>
            </div>
          </div>

          {/* Case 2: Jewelry eCommerce (Domesticia) */}
          <div className="flex flex-col group lg:mt-24">
            <div className="relative mx-auto w-[310px] h-[640px] bg-[#1a1a1a] rounded-[54px] border-[10px] border-[#2a2a2a] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-700 group-hover:-translate-y-4">
              <div className="absolute top-0 w-full h-8 px-8 flex items-center justify-between z-40">
                <span className="text-[10px] font-bold text-slate-900">13:07</span>
                <div className="flex gap-1.5 items-center">
                   <div className="w-4 h-4 text-slate-900">
                     <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 1h-1v2h1V1zm10.707 11.293l-1.414 1.414L22.707 14 24 12.707l-1.293-1.414zM12 21h-1v2h1v-2zM1.293 11.293l1.414 1.414L4.121 11.293 2.707 9.879 1.293 11.293z"/></svg>
                   </div>
                </div>
              </div>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50"></div>

              {/* Screen Content: Domesticia Store */}
              <div className="h-full bg-white flex flex-col">
                <div className="pt-10 px-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="text-center w-full">
                    <h5 className="text-[14px] font-black tracking-tighter uppercase italic">Domesticia</h5>
                    <p className="text-[7px] text-slate-400 font-bold">WE LISTEN, WE DELIVER</p>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto hide-scrollbar">
                  {/* Cart Banner */}
                  <div className="bg-slate-50 py-3 px-6 text-center">
                    <p className="text-[9px] font-bold text-slate-600 mb-2">You're <span className="text-slate-900">£74.00</span> away from FREE SHIPPING!</p>
                    <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                       <div className="w-[30%] h-full bg-[#f07c42]"></div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-[12px] font-black text-slate-900 mb-6 uppercase tracking-tight">Your Cart</h4>
                    
                    <div className="flex gap-4 mb-6">
                      <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden shadow-sm">
                        <img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Bracelet" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-[10px] font-black leading-tight mb-1">Hip Hop Bracelet Iced Out Single Row Rhinestones Chain</h5>
                        <p className="text-[9px] text-slate-400 mb-2">Blue</p>
                        <p className="text-[13px] font-black">£26.00</p>
                        
                        <div className="flex items-center gap-4 mt-3">
                           <div className="flex items-center border border-slate-100 rounded-lg px-2 py-1 gap-3">
                              <button className="text-[14px] text-slate-400">-</button>
                              <span className="text-[11px] font-bold">1</span>
                              <button className="text-[14px] text-slate-400">+</button>
                           </div>
                           <svg className="w-3.5 h-3.5 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 002 2h10a2 2 0 002-2V6h1V4h-5V3H9z"/></svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-slate-100">
                      <div className="flex justify-between items-center py-2 border-b border-slate-50">
                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-2">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                          Add a note
                        </span>
                        <span className="text-[10px] text-slate-300">→</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100">
                  <div className="flex justify-between mb-4">
                    <span className="text-[12px] font-black text-slate-400">Subtotal</span>
                    <span className="text-[14px] font-black text-slate-900">£26.00</span>
                  </div>
                  <a href="https://webquestionnaire.sirz.co.uk/" className="w-full bg-[#e2b041] text-white py-4 rounded-xl font-black text-[12px] flex items-center justify-center gap-2 shadow-xl shadow-[#e2b041]/20 text-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2V7a5 5 0 00-5-5zM7 7a3 3 0 016 0v2H7V7z"/></svg>
                    Checkout
                  </a>
                  <div className="mt-4 flex flex-wrap justify-center gap-2 opacity-50 grayscale">
                    <div className="w-6 h-4 bg-slate-300 rounded-sm"></div>
                    <div className="w-6 h-4 bg-slate-300 rounded-sm"></div>
                    <div className="w-6 h-4 bg-slate-300 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center px-6">
              <h3 className="text-xl font-black text-slate-900 mb-2">Jewelry Cart UI</h3>
              <p className="text-xs font-bold text-orange-600 uppercase tracking-widest">Domesticia.com</p>
            </div>
          </div>

          {/* Case 3: TikTok Social Shop (INNOVATIONZ) */}
          <div className="flex flex-col group">
            <div className="relative mx-auto w-[310px] h-[640px] bg-[#1a1a1a] rounded-[54px] border-[10px] border-[#2a2a2a] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-700 group-hover:-translate-y-4">
              <div className="absolute top-0 w-full h-8 px-8 flex items-center justify-between z-40">
                <span className="text-[10px] font-bold text-white">13:06</span>
                <div className="flex gap-1.5 items-center">
                   <div className="w-3 h-3 border border-white rounded-sm"></div>
                </div>
              </div>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50"></div>

              {/* Screen Content: TikTok Shop */}
              <div className="h-full bg-white pt-10 overflow-y-auto hide-scrollbar">
                <div className="bg-black text-white px-6 py-6 pb-12 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-br from-purple-500 to-pink-500"></div>
                   <div className="relative z-10 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-white p-0.5 border-2 border-white shadow-xl">
                         <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-black italic">DOM</div>
                      </div>
                      <div>
                        <h4 className="text-[15px] font-black">INNOVATIONZ</h4>
                        <p className="text-[9px] font-bold text-white/70">200+ Followers • 1 Video</p>
                      </div>
                   </div>
                </div>

                <div className="bg-white rounded-t-3xl -mt-6 relative z-20 px-4 pt-6">
                   <div className="flex gap-6 border-b border-slate-100 pb-2 mb-6">
                      <span className="text-[11px] font-black text-slate-900 border-b-2 border-slate-900 pb-2">Products</span>
                      <span className="text-[11px] font-bold text-slate-400">Best Seller</span>
                      <span className="text-[11px] font-bold text-slate-400">Price</span>
                   </div>

                   <div className="space-y-6 pb-20">
                      {[
                        { title: "ANUA Azelaic 10 Hyaluron Redness", price: "£16.99", img: "https://images.unsplash.com/photo-1556229174-5e42a09e45af?auto=format&fit=crop&q=80&w=150" },
                        { title: "Anua PDRN 100 Hyaluron Acid Glow", price: "£15.95", img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=150" },
                        { title: "Palmer's Coconut Monoi Luminous", price: "£8.90", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=150" }
                      ].map((prod, i) => (
                        <div key={i} className="flex gap-4">
                          <img src={prod.img} className="w-20 h-20 rounded-xl object-cover border border-slate-100" alt="Product" />
                          <div className="flex-1">
                             <h5 className="text-[10px] font-bold text-slate-700 leading-tight mb-1">{prod.title}</h5>
                             <p className="text-[8px] text-slate-400 mb-2">1 sold</p>
                             <p className="text-[13px] font-black text-slate-900">{prod.price}</p>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center px-6">
              <h3 className="text-xl font-black text-slate-900 mb-2">Social Shop Integration</h3>
              <p className="text-xs font-bold text-pink-600 uppercase tracking-widest">TikTok Shop Profile</p>
            </div>
          </div>

        </div>

        {/* Closing trust bridge: Centered for Mobile with tighter spacing */}
        <div className="mt-16 md:mt-32 bg-slate-900 rounded-[54px] p-8 md:p-12 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 skew-x-[-20deg] translate-x-1/2 opacity-20 transition-transform group-hover:translate-x-[45%]"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 leading-none">Your customers see <br/>the difference.</h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">
                Whether it's a £500 digital asset or a £26 physical product, we build the technical infrastructure that makes every transaction feel premium, secure, and effortless.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto justify-center">
               <a href="https://webquestionnaire.sirz.co.uk/" className="inline-block bg-blue-600 text-white px-14 py-6 rounded-full font-black text-base uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20 text-center">
                 Start My Build
               </a>
               <a href="https://webquestionnaire.sirz.co.uk/" className="inline-block bg-white/5 border border-white/20 text-white px-14 py-6 rounded-full font-black text-base uppercase tracking-widest hover:bg-white/10 transition-all text-center">
                 Live Demo
               </a>
            </div>
          </div>
        </div>
      </div>

      {/* Connection Icon to bridge the gap - floating sparkle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-30 animate-bounce">
         <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.5-6.2 4.5 2.3-7.3-6.1-4.5h7.6z" />
         </svg>
      </div>
    </section>
  );
};

export default LiveGallery;
