
import React from 'react';

const FoundationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Grow your website on <br/>a rock-solid foundation</h2>
          <p className="text-slate-500 mb-8">Set your site up for success on the powerful infrastructure that supports millions of websites worldwide.</p>
          <button onClick={() => window.location.href = 'https://webquestionnaire.sirz.co.uk/'} className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm">Get Started</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-4">Engineered for top speed</h3>
            <p className="text-blue-800/70 text-sm leading-relaxed">SIRZ sites are designed to ensure fast loading times across all devices.</p>
          </div>
          <div className="p-8 rounded-3xl bg-pink-50 border border-pink-100">
            <h3 className="font-bold text-pink-900 mb-4">Designed for accessibility</h3>
            <p className="text-pink-800/70 text-sm leading-relaxed">Build an inclusive site that everyone can interact with and understand.</p>
          </div>
          <div className="p-8 rounded-3xl bg-teal-50 border border-teal-100">
            <h3 className="font-bold text-teal-900 mb-4">Secured by industry experts</h3>
            <p className="text-teal-800/70 text-sm leading-relaxed">Get enterprise-grade security against threats for you and your visitors.</p>
          </div>
          <div className="p-8 rounded-3xl bg-orange-50 border border-orange-100">
            <h3 className="font-bold text-orange-900 mb-4">Built with reliability in mind</h3>
            <p className="text-orange-800/70 text-sm leading-relaxed">Multi-cloud hosting ensures 99.9% uptime, even during traffic spikes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
