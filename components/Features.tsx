
import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
      {/* Feature 1: Main */}
      <div className="md:col-span-8 bento-card bg-white rounded-[32px] p-10 border border-slate-100 flex flex-col justify-between group">
        <div className="max-w-md">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
          </div>
          <h3 className="text-3xl font-extrabold mb-4">Designer-Made Templates</h3>
          <p className="text-slate-500 font-medium">Get a head start with over 900+ fully customizable website templates built for every industry.</p>
        </div>
        <div className="mt-6 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 h-40">
           <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Web Templates Selection" />
        </div>
      </div>

      {/* Feature 2: Side */}
      <div className="md:col-span-4 bento-card bg-slate-900 text-white rounded-[32px] p-10 flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Unmatched Performance</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Fast-loading pages with enterprise-grade infrastructure. Built for SEO and mobile speed.</p>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">Speed Test</span>
          <span className="text-3xl font-black italic">A+</span>
        </div>
      </div>

      {/* Feature 3: Small */}
      <div className="md:col-span-4 bento-card bg-blue-600 text-white rounded-[32px] p-10 flex flex-col justify-between">
        <h3 className="text-2xl font-bold">Total Design Freedom</h3>
        <p className="text-blue-100 text-sm">Every pixel is yours. Drag, drop, and refine until it's perfect.</p>
        <button className="bg-white text-blue-600 w-fit px-6 py-2 rounded-full font-bold text-xs mt-4">Try Editor</button>
      </div>

      {/* Feature 4: Medium */}
      <div className="md:col-span-8 bento-card bg-white rounded-[32px] p-10 border border-slate-100 flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Built-in eCommerce</h3>
          <p className="text-slate-500 text-sm mb-6">Start selling anything. Manage orders, payments, and shipping all from one unified dashboard.</p>
          <ul className="space-y-2 text-xs font-bold text-slate-700">
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Multi-channel Sales</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Abandoned Cart Recovery</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Subscription Models</li>
          </ul>
        </div>
        <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="eCommerce Store Interface" />
        </div>
      </div>
    </div>
  );
};

export default Features;
