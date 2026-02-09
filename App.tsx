
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
import Footer from './components/Footer';
import ConversionSection from './components/ConversionSection';

const CTA_URL = "https://webquestionnaire.sirz.co.uk/";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <Hero />
        
        <ClientProofSection />
        
        <AISection />
        <TemplateSection />
        
        <section className="py-12 md:py-24 border-t border-slate-100">
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
                  <a href={CTA_URL} className="inline-block mt-4 bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-slate-800 transition-colors">Get Started</a>
                </div>
              </div>
              <div className="flex-1">
                <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-2xl border border-slate-100" alt="Website Editor Interface" />
              </div>
            </div>
          </div>
        </section>

        <BusinessSection />
        
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-10 text-center md:text-left">
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter">
                Market your site <br className="hidden md:block"/> from launch to scale
              </h2>
              <a href={CTA_URL} className="bg-slate-900 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 active:scale-95 whitespace-nowrap text-center">
                Get Started
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 flex flex-col group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="mb-8">
                   <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">SEO tools and AI visibility</h3>
                   <p className="text-slate-500 font-medium leading-relaxed">Let our built-in SEO tools and AI-driven insights put your brand in front of the right eyes, automatically.</p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" className="rounded-2xl w-full h-40 object-cover shadow-sm group-hover:scale-105 transition-transform duration-700" alt="SEO Tools Interface" />
                </div>
              </div>

              <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 flex flex-col group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="mb-8">
                   <div className="w-12 h-12 bg-[#f07c42] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5m-4-11l1 1"></path></svg>
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Multi-channel Ads Management</h3>
                   <p className="text-slate-500 font-medium leading-relaxed">Launch and track high-performing Google, Facebook, and Instagram campaigns from one central cockpit.</p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" className="rounded-2xl w-full h-40 object-cover shadow-sm group-hover:scale-105 transition-transform duration-700" alt="Ads Management Interface" />
                </div>
              </div>

              <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 flex flex-col group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="mb-8">
                   <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Social Media Ecosystems</h3>
                   <p className="text-slate-500 font-medium leading-relaxed">Direct integration with TikTok Shop and Instagram to sync your inventory and capture viral sales moments.</p>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=600" className="rounded-2xl w-full h-40 object-cover shadow-sm group-hover:scale-105 transition-transform duration-700" alt="Social Media Dashboard" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <DashboardSection />
        
        {/* Domain Search and Showcase grouped together as the 'Official' launch sequence */}
        <DomainSearch />
        <Showcase />
        
        <LiveGallery />

        {/* Grouped Closing Funnel Block */}
        <FoundationSection />
        <HowToSection />
        <ConversionSection />

      </main>
      <Footer />
    </div>
  );
};

export default App;
