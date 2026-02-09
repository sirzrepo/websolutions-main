
import React from 'react';

const ConversionSection: React.FC = () => {
  return (
    <section className="py-24 md:py-48 bg-[#0f111a] text-center relative overflow-hidden">
      {/* Subtle glow effect to match the 'premium' feel of the provided image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* User Requested Copy: Clean, high-contrast, and impactful */}
        <h2 className="text-4xl md:text-[72px] font-black text-white mb-16 leading-[1.05] tracking-tighter max-w-4xl mx-auto">
          Reach the right audience for your product at the right time!
        </h2>

        {/* User Requested CTA Button: Vibrant Magenta Pill with high-fidelity shadow */}
        <a 
          href="https://webquestionnaire.sirz.co.uk/" 
          className="inline-block bg-[#f43fbd] text-white px-16 py-6 md:py-7 rounded-full text-xl md:text-2xl font-black hover:brightness-110 transition-all transform hover:scale-105 active:scale-95 shadow-[0_25px_60px_rgba(244,63,189,0.4)]"
        >
          Create Account
        </a>
      </div>
    </section>
  );
};

export default ConversionSection;
