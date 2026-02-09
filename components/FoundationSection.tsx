
import React from 'react';

const FoundationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-10 rounded-[32px] bg-[#f0f7ff] border border-blue-100/30 group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <h3 className="font-bold text-[#1e40af] text-lg mb-4">Engineered for top speed</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              SIRZ sites are designed to ensure fast loading times across all devices.
            </p>
          </div>

          <div className="p-10 rounded-[32px] bg-[#fff1f5] border border-pink-100/30 group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <h3 className="font-bold text-[#9d174d] text-lg mb-4">Designed for accessibility</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Build an inclusive site that everyone can interact with and understand.
            </p>
          </div>

          <div className="p-10 rounded-[32px] bg-[#f0fffb] border border-teal-100/30 group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <h3 className="font-bold text-[#0f766e] text-lg mb-4">Secured by industry experts</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Get enterprise-grade security against threats for you and your visitors.
            </p>
          </div>

          <div className="p-10 rounded-[32px] bg-[#fffaf0] border border-orange-100/30 group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <h3 className="font-bold text-[#9a3412] text-lg mb-4">Built with reliability in mind</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Multi-cloud hosting ensures 99.9% uptime, even during traffic spikes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
