
import React from 'react';

const AISection: React.FC = () => {
  return (
    <section className="pt-8 md:pt-24 pb-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
            <span className="inline-block bg-blue-600 text-white text-[13px] font-black uppercase tracking-[0.3em] px-8 py-3.5 rounded-full mb-8">
              Next-Gen Autonomy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
              Deploy your site instantly <br/>with our AI UI Design Agent
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-slate-600 text-lg leading-relaxed max-w-md font-medium">
                Our intelligent agent handles everything from layout architecture to custom styling. Just describe your vision and watch it evolve in real-time.
              </p>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest leading-relaxed max-w-md">
                "Describe your project in plain English and let our AI handle the design, code, and deployment instantly"
              </p>
            </div>
            <a href="https://webquestionnaire.sirz.co.uk/" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-slate-800 shadow-xl transition-all active:scale-95">
              Launch Agent →
            </a>
          </div>
          <div className="flex-1 relative">
            <div className="bg-white p-2 rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 group">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                className="rounded-[32px] w-full h-[500px] object-cover transform transition-transform duration-1000 group-hover:scale-105" 
                alt="AI UI Design Agent Interface" 
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200';
                }}
              />
              
              <div className="absolute inset-0 bg-blue-600/5 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
                <div className="grid-pattern w-full h-full"></div>
              </div>
            </div>

            {/* Floating Status Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 w-72 hidden md:block animate-in fade-in slide-in-from-right-4 duration-1000">
               <div className="flex items-center gap-4 mb-3">
                 <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                 </div>
                 <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">Agent Status</p>
                    <p className="text-sm font-bold text-slate-900">Architecting Layout...</p>
                 </div>
               </div>
               <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-3/4 animate-pulse"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
