
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-[92px] font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
          Create a website <br />
          without limits
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
          Bring your ideas to life on the leading website builder.
        </p>
        
        <div className="mb-12">
          <a href="https://webquestionnaire.sirz.co.uk/" className="inline-block bg-blue-600 text-white px-16 py-7 rounded-full text-2xl font-bold transition-all hover:bg-blue-700 shadow-2xl shadow-blue-200 active:scale-95">
            Get Started
          </a>
          <p className="mt-4 text-sm text-slate-400 font-medium">
            Start for free. No credit card required.
          </p>
        </div>

        {/* Dynamic Image Collage similar to Wix Hero */}
        <div className="relative mx-auto max-w-5xl mt-20 p-2 bg-slate-50 rounded-[48px] border border-slate-100 shadow-inner">
           <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2000" 
                alt="Website Preview" 
                className="w-full h-auto"
              />
           </div>
           
           {/* Floating elements from the PDF */}
           <div className="absolute -top-12 -right-8 hidden xl:block bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 w-64 text-left">
              <div className="bg-blue-50 w-full aspect-video rounded-xl mb-4 flex items-center justify-center">
                 <div className="w-12 h-1 bg-blue-200 rounded-full overflow-hidden">
                    <div className="bg-blue-600 w-3/4 h-full"></div>
                 </div>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase mb-1">Weekly Traffic</p>
              <p className="text-lg font-bold text-slate-900">+124% increase</p>
           </div>

           <div className="absolute top-1/2 -left-12 hidden xl:block bg-white p-4 rounded-full shadow-2xl border border-slate-50 flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
              </div>
              <span className="font-bold pr-4">Booked Successfully</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
