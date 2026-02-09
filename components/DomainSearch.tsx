
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

interface DomainSuggestion {
  domain: string;
  reason: string;
}

const DomainSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DomainSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setResults([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Suggest 6 creative, modern, and brandable .com or .io domain names for a business described as: "${query}". For each domain, provide a short reason why it is a good fit.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                domain: { type: Type.STRING },
                reason: { type: Type.STRING },
              },
              required: ["domain", "reason"],
            },
          },
        },
      });

      const jsonStr = response.text;
      if (jsonStr) {
        const parsedResults = JSON.parse(jsonStr);
        setResults(parsedResults);
      }
    } catch (err) {
      console.error("Domain search failed:", err);
      setError("We couldn't generate suggestions right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 md:py-40 bg-[#143d4a] text-white transition-all duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header content matching the image layout */}
        <div className="max-w-3xl text-left mb-12">
          <h2 className="text-5xl md:text-[84px] font-black mb-8 tracking-tighter leading-[0.95]">
            Make your website official.
          </h2>
          <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Search for a domain you already have in mind, or describe your vision and let our AI source the perfect available matches for you.
          </p>
        </div>

        {/* Search Input Container - Matching the white pill and orange button in the image */}
        <div className="max-w-4xl mb-16">
          <div className="bg-white rounded-full p-2 flex flex-col sm:flex-row shadow-2xl focus-within:ring-4 focus-within:ring-white/20 transition-all overflow-hidden">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Describe your business idea..." 
              className="flex-grow bg-transparent text-slate-900 px-8 py-5 text-xl md:text-2xl focus:outline-none placeholder:text-slate-300 min-w-0 font-medium"
            />
            <button 
              onClick={handleSearch}
              disabled={isLoading}
              className="bg-[#f07c42] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#d96a32] transition-all active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 shadow-lg"
            >
              {isLoading ? (
                <svg className="animate-spin h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>Generate Suggestions <span className="ml-3">→</span></>
              )}
            </button>
          </div>
        </div>

        {/* Results Area */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-200 p-6 rounded-3xl mb-12 max-w-2xl">
            {error}
          </div>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {results.map((res, i) => (
              <div 
                key={i} 
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[40px] text-left hover:bg-white/10 transition-all group shadow-sm"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#f07c42] transition-colors break-all pr-2 tracking-tight">
                    {res.domain}
                  </h3>
                  <span className="bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg flex-shrink-0 border border-blue-500/30">
                    Available
                  </span>
                </div>
                <p className="text-slate-400 text-base mb-10 leading-relaxed font-medium">
                  {res.reason}
                </p>
                <button className="w-full bg-white text-[#143d4a] py-4.5 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-lg">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        )}

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white/5 border border-white/5 p-10 rounded-[40px] h-64 animate-pulse">
                <div className="h-8 w-3/4 bg-white/10 rounded-xl mb-6"></div>
                <div className="h-4 w-full bg-white/10 rounded mb-3"></div>
                <div className="h-4 w-2/3 bg-white/10 rounded mb-10"></div>
                <div className="h-12 w-full bg-white/10 rounded-2xl mt-auto"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DomainSearch;
