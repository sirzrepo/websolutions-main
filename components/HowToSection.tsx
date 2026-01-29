
import React from 'react';

const HowToSection: React.FC = () => {
  const steps = [
    { num: 1, text: "Find a platform. Pick a secure and reliable website builder like SIRZ." },
    { num: 2, text: "Plan your website. Map out your goals, site structure and audience." },
    { num: 3, text: "Start creating. Choose from 2,000+ templates or use the AI builder." },
    { num: 4, text: "Customize everything. Use the drag and drop editor to adjust colors and fonts." },
    { num: 5, text: "Optimize for search engines. Set up your site for strong organic visibility." },
    { num: 6, text: "Publish your website. Register a domain name and make your site live." },
    { num: 7, text: "Drive traffic. Use built-in marketing tools to create email campaigns." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold mb-8">How to create a <br/>website for free</h2>
          <p className="text-slate-500 mb-8">Follow these 7 simple steps to create a website today.</p>
          <div className="flex gap-4">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm">Get Started</button>
            <button className="text-slate-900 font-bold border-b-2 border-slate-900">Learn more</button>
          </div>
        </div>
        <div className="md:w-2/3 border-l border-slate-100 pl-8 md:pl-16 space-y-8">
          {steps.map(step => (
            <div key={step.num} className="flex items-start gap-6 group">
              <span className="text-blue-600 font-bold text-lg min-w-[20px] group-hover:scale-125 transition-transform">{step.num}.</span>
              <p className="text-slate-600 font-medium leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
