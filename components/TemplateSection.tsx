
import React, { useState, useMemo } from 'react';

interface Template {
  name: string;
  category: string;
  src: string;
}

const TemplateSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('eCommerce');
  
  const categories = ['eCommerce', 'Portfolio', 'Business', 'Blog', 'Restaurant', 'Non Profit'];
  
  const allTemplates: Template[] = [
    // eCommerce
    { 
      name: 'Revert', 
      category: 'eCommerce', 
      src: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Overture Haus', 
      category: 'eCommerce', 
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Lido Bianco', 
      category: 'eCommerce', 
      src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800' 
    },
    
    // Portfolio
    { 
      name: 'Creative Minds', 
      category: 'Portfolio', 
      src: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Visionary', 
      category: 'Portfolio', 
      src: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Art Pulse', 
      category: 'Portfolio', 
      src: 'https://images.unsplash.com/photo-1522204538344-922f76efe0a9?auto=format&fit=crop&q=80&w=800' 
    },
    
    // Business
    { 
      name: 'Enterprise Pro', 
      category: 'Business', 
      src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Growth Lab', 
      category: 'Business', 
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Corporate Edge', 
      category: 'Business', 
      src: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800' 
    },
    
    // Blog
    { 
      name: 'Modern Reader', 
      category: 'Blog', 
      src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Narrative', 
      category: 'Blog', 
      src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Insightful', 
      category: 'Blog', 
      src: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800' 
    },
    
    // Restaurant
    { 
      name: 'Tasty Bites', 
      category: 'Restaurant', 
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Gourmet Hub', 
      category: 'Restaurant', 
      src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Fresh Table', 
      category: 'Restaurant', 
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800' 
    },
    
    // Non Profit
    { 
      name: 'Kind Heart', 
      category: 'Non Profit', 
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Global Reach', 
      category: 'Non Profit', 
      src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'Community First', 
      category: 'Non Profit', 
      src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800' 
    },
  ];

  const filteredTemplates = useMemo(() => {
    return allTemplates.filter(t => t.category === activeCategory);
  }, [activeCategory, allTemplates]);

  return (
    <section className="pt-24 pb-8 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
            Or choose a professionally <br/>designed template
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10 text-lg font-medium">
            Our free website builder offers 2000+ website templates, all fully customizable and ready for business.
          </p>
          <a href="https://webquestionnaire.sirz.co.uk/" className="inline-block bg-[#0f172a] text-white px-12 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-slate-200 active:scale-95">
            Get Started
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-16 border-b border-slate-100 pb-6">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`text-[13px] font-black transition-all relative pb-2 px-1 ${
                activeCategory === cat 
                ? 'text-slate-900' 
                : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <div className="absolute bottom-[-2px] left-0 w-full h-1 bg-slate-900"></div>
              )}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filteredTemplates.map((t, i) => (
            <div 
              key={`${t.name}-${activeCategory}`} 
              className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[1.4/1] rounded-[24px] overflow-hidden border border-slate-100 bg-slate-50 mb-5 transition-all duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]">
                <img 
                  src={t.src} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={t.name} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              <h4 className="font-black text-xl text-slate-900 tracking-tight">{t.name}</h4>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 md:mt-20">
          <a href="https://webquestionnaire.sirz.co.uk/" className="text-slate-900 font-black text-sm uppercase tracking-widest border-b-2 border-slate-900 pb-2 hover:text-blue-600 hover:border-blue-600 transition-all">
            Browse All {activeCategory} Templates →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TemplateSection;
