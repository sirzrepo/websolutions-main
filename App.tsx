
import React from 'react';
import Hero from './components/Hero';
import AISection from './components/AISection';
import ClientProofSection from './components/ClientProofSection';
import LiveGallery from './components/LiveGallery';
import TemplateSection from './components/TemplateSection';
import BusinessSection from './components/BusinessSection';
import DomainSearch from './components/DomainSearch';
import DashboardSection from './components/DashboardSection';
import FoundationSection from './components/FoundationSection';
import HowToSection from './components/HowToSection';
import Showcase from './components/Showcase';
import SupportSection from './components/SupportSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <Hero />
        <ClientProofSection />
        <LiveGallery />
        <AISection />
        <TemplateSection />
        
        <section className="py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Customize to <br/>make it your own</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <span className="text-blue-600">→</span> Intuitive drag and drop
                    </h3>
                    <p className="text-slate-600 mt-1 pl-6">Effortlessly add and arrange your text, visuals, buttons and even entire sections.</p>
                  </div>
                  <h3 className="font-bold text-lg pl-6">Built in AI tools</h3>
                  <h3 className="font-bold text-lg pl-6">Advanced design features</h3>
                  <button onClick={() => window.location.href = 'https://webquestionnaire.sirz.co.uk/'} className="mt-4 bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm">Get Started</button>
                </div>
              </div>
              <div className="flex-1">
                <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-2xl border border-slate-100" alt="Website Editor Interface" />
              </div>
            </div>
          </div>
        </section>

        <BusinessSection />
        <DomainSearch />
        
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">Market your site <br/>from launch to scale</h2>
              <button onClick={() => window.location.href = 'https://webquestionnaire.sirz.co.uk/'} className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold text-sm">Get Started</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="font-bold mb-2">SEO tools and AI visibility</h3>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" className="rounded-xl mt-6 grayscale opacity-60" alt="SEO Tools Interface" />
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="font-bold mb-2">Google, Facebook and Instagram ads</h3>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" className="rounded-xl mt-6 grayscale opacity-60" alt="Ads Management Interface" />
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="font-bold mb-2">Social media marketing</h3>
                <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400" className="rounded-xl mt-6 grayscale opacity-60" alt="Social Media Dashboard" />
              </div>
            </div>
          </div>
        </section>

        <DashboardSection />
        <FoundationSection />
        <HowToSection />

        {/* Improved Thriving with SIRZ Section */}
        <section className="py-24 bg-[#0052FF] text-white overflow-hidden relative">
          {/* Subtle Dot Grid Background */}
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}></div>
          
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
             <h2 className="text-6xl md:text-8xl font-black mb-16 tracking-tighter">Thriving with SIRZ</h2>
             
             <div className="flex justify-center items-center gap-6 md:gap-12 flex-nowrap">
                {/* Left Circle */}
                <div className="w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400" 
                    className="w-full h-full object-cover" 
                    alt="Success 1" 
                  />
                </div>
                
                {/* Center Circle (Larger) */}
                <div className="w-36 h-36 md:w-64 md:h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
                    className="w-full h-full object-cover" 
                    alt="Success 2" 
                  />
                </div>
                
                {/* Right Circle. */}
                <div className="w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400" 
                    className="w-full h-full object-cover" 
                    alt="Success 3" 
                  />
                </div>
             </div>
          </div>
        </section>

        <Showcase />
        <SupportSection />
        <FAQ />

        <section className="py-32 bg-slate-50 text-center">
           <h2 className="text-5xl font-bold mb-4">Your vision. Your goals. <br/>Your website.</h2>
           <button onClick={() => window.location.href = 'https://webquestionnaire.sirz.co.uk/'} className="bg-blue-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-700 transition-colors shadow-xl">Get Started</button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
