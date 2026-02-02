
import React from 'react';

const AISection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Create your site in minutes <br/>with our AI website builder</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-md">Describe what you want and get a unique, business ready website tailored just for you.</p>
            <button onClick={() => window.location.href = 'https://webquestionnaire.sirz.co.uk/'} className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm hover:opacity-90">Get Started</button>
          </div>
          <div className="flex-1 relative">
            <div className="bg-white p-2 rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
              <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200" className="rounded-[32px]" alt="AI Website Generation UI" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 w-64 animate-pulse">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                 </div>
                 <p className="text-xs font-bold">Building your site...</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
