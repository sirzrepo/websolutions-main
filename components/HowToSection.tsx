
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
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-32">
        <div className="lg:w-[400px]">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter text-slate-900 leading-[1.1]">
            How to create a <br/>website for free
          </h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
            Follow these 7 simple steps to create a website today.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="https://webquestionnaire.sirz.co.uk/" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-slate-100">
              Get Started
            </a>
            <button className="text-slate-900 font-black text-xs uppercase tracking-widest border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex-1 space-y-10">
          {steps.map(step => (
            <div key={step.num} className="flex items-start gap-8 group">
              <span className="text-blue-600 font-black text-lg min-w-[24px] pt-0">{step.num}.</span>
              <p className="text-slate-600 text-[16px] md:text-[18px] font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
