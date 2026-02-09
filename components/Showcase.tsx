
import React from 'react';

const Showcase: React.FC = () => {
  // Projects curated for the showcase
  const projects = [
    {
      title: "Vanguard Studio",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      category: "Architectural Design",
      size: "large"
    },
    {
      title: "Aura Skincare",
      src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
      category: "Premium Wellness",
      size: "small"
    },
    {
      title: "Nexus OS",
      src: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      category: "Next-Gen SaaS",
      size: "medium"
    },
    {
      title: "Mono Archive",
      src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
      category: "Art & Editorial",
      size: "small"
    },
    {
      title: "Kore Coffee",
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
      category: "Specialty Retail",
      size: "medium"
    },
    {
      title: "Velocity Global",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      category: "Enterprise Finance",
      size: "large"
    }
  ];

  return (
    <section className="pt-20 md:pt-32 pb-6 md:pb-24 bg-[#f8f7ff] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Updated Split Header to match image exactly */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 md:mb-20 gap-8">
           <div className="max-w-2xl text-left">
             <h2 className="text-4xl md:text-[84px] font-black text-slate-900 mb-6 tracking-tighter leading-[0.9]">Made on SIRZ</h2>
             <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
               Crafting unique digital identities for global visionaries. Explore our latest curated deployments.
             </p>
           </div>
           <div className="flex-shrink-0">
             <a href="https://webquestionnaire.sirz.co.uk/" className="inline-block gradient-blue text-white px-14 py-6 rounded-2xl font-black text-base uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-blue-500/20 active:scale-95 whitespace-nowrap text-center">
               START MY BUILD
             </a>
           </div>
        </div>
        
        {/* Grid of projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
           {projects.map((project, i) => (
             <div 
               key={i} 
               className={`group relative rounded-[28px] md:rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer bg-white border border-slate-100 flex flex-col ${
                 project.size === 'large' ? 'lg:row-span-2' : ''
               }`}
             >
                <div className={`relative overflow-hidden flex-grow ${
                  project.size === 'large' ? 'min-h-[400px] lg:h-full' : 'aspect-[16/10]'
                }`}>
                  <img 
                    src={project.src} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt={project.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2">Live Site Preview</span>
                     <p className="text-white text-xs font-medium opacity-80">Full-scale responsive build with custom logic.</p>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 bg-white relative z-10">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-1 block">{project.category}</span>
                      <h4 className="text-lg md:text-2xl font-black text-slate-900 tracking-tight">{project.title}</h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-45">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-12 md:mt-20 text-center">
          <p className="text-slate-400 font-bold text-xs md:text-sm tracking-wide">Want your brand featured in the showcase?</p>
          <a href="https://webquestionnaire.sirz.co.uk/" className="inline-block mt-3 text-blue-600 font-black text-sm border-b-2 border-blue-600 pb-1 hover:text-blue-700 hover:border-blue-700 transition-all uppercase tracking-widest">
            Join the 1% →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
