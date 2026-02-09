
import React from 'react';

const ClientProofSection: React.FC = () => {
  const proofs = [
    {
      platform: 'Shopify',
      name: 'Domesticia',
      url: 'https://Domesticia.com',
      description: 'High-converting jewelry storefront with custom checkout and international shipping.',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Shopify_logo.svg',
      color: 'bg-[#95bf47]/10',
      textColor: 'text-[#95bf47]'
    },
    {
      platform: 'Amazon',
      name: 'HighStores UK',
      url: 'https://www.highstores.co.uk',
      description: 'Global marketplace synchronization and FBA-ready infrastructure.',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      color: 'bg-[#ff9900]/10',
      textColor: 'text-[#ff9900]'
    },
    {
      platform: 'TikTok Shop',
      name: 'INNOVATIONZ',
      url: 'https://vt.tiktok.com/ZNRS4MdXd/',
      description: 'Viral commerce engine integrated directly with social content systems.',
      icon: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg',
      color: 'bg-black/5',
      textColor: 'text-black'
    },
    {
      platform: 'Digital Product',
      name: 'SirzBooks',
      url: 'https://sirzbooks.com',
      description: 'Automated digital asset delivery system for books and courses.',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
      color: 'bg-blue-600/10',
      textColor: 'text-blue-600'
    },
    {
      platform: 'SaaS / Web App',
      name: 'Onboarding System',
      url: 'https://onboarding-pwqw.vercel.app',
      description: 'Reduce churn from day one with a frictionless onboarding experience.',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      color: 'bg-slate-900/10',
      textColor: 'text-slate-900'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading: Centralized on Mobile */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block bg-blue-600 text-white text-[13px] font-black uppercase tracking-[0.3em] px-8 py-3.5 rounded-full mb-8">
              Verified Deployments
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1] md:leading-[0.9] tracking-tighter">
              Don't take our word for it. <br/>Check the live sites.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            All systems currently operational
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofs.map((proof, i) => (
            <a 
              key={i} 
              href={proof.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-slate-50 rounded-[40px] p-8 border border-slate-100 hover:bg-white hover:border-blue-500 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              <div className={`absolute -top-24 -right-24 w-48 h-48 ${proof.color} rounded-full blur-[80px] group-hover:opacity-100 opacity-0 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <img src={proof.icon} className="h-6 w-auto grayscale group-hover:grayscale-0 transition-all" alt={proof.platform} />
                    <span className={`text-[10px] font-black uppercase tracking-widest ${proof.textColor}`}>{proof.platform}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{proof.name}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                  {proof.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-blue-600">
                Visit Live Implementation
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </a>
          ))}
          
          {/* Trust CTA Card: Fixed with Background Image and Centered Text */}
          <div className="bg-slate-900 rounded-[40px] p-8 text-white flex flex-col justify-center items-center text-center relative overflow-hidden group min-h-[420px]">
            {/* Background Image to fix the 'plain' look */}
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700" 
              alt="Team Collaboration" 
            />
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-10"></div>
            
            <div className="relative z-10 w-full max-w-xs mx-auto">
              <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter leading-tight">Ready to join them?</h3>
              <p className="text-slate-400 text-sm font-medium mb-12 leading-relaxed">
                Your business deserves the same high-performance infrastructure.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-6.5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all active:scale-95 shadow-2xl shadow-blue-500/20">
                START YOUR BUILD
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientProofSection;
