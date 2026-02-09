
import React from 'react';

const SupportSection: React.FC = () => {
  const items = [
    { title: 'Get answers', desc: 'Ask anything and get quick answers in the Help Center.', link: '→' },
    { title: 'Chat with us', desc: 'Get 24/7 chat help from our Helpmate or a Customer Care Expert.', link: '→' },
    { title: 'Hire a pro', desc: 'Get help at any stage from site creation to online growth.', link: '→' },
  ];

  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-16">We're here for you 24/7</h2>
        <div className="divide-y divide-slate-800">
          {items.map((item, i) => (
            <div key={i} className="py-12 group cursor-pointer flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 max-w-md">{item.desc}</p>
              </div>
              <span className="text-4xl group-hover:translate-x-4 transition-transform">{item.link}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
