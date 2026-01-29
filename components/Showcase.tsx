
import React from 'react';

const Showcase: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1522542550221-31fd19055cc2?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=600',
  ];

  return (
    <section className="py-24 bg-[#e6e2ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
           <div className="max-w-2xl">
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Made on SIRZ</h2>
             <p className="text-slate-600 font-medium">Over 15,000 sites are launched with our website builder every day. <br/>Dive into our top picks to find your inspiration.</p>
           </div>
           <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg">Explore Sites</button>
        </div>
        
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
           {images.map((src, i) => (
             <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer group bg-white">
                <img src={src} className="w-full h-auto group-hover:scale-105 transition-transform" alt="Webpage Showcase" />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
