
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
    <section className="py-24 bg-[#143d4a] text-white transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">
          Make your website official <br /> with an AI-powered domain
        </h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-full p-2 flex shadow-2xl focus-within:ring-4 focus-within:ring-blue-500/30 transition-all">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Describe your business (e.g. 'organic coffee shop')" 
              className="flex-grow bg-transparent text-slate-900 px-8 py-4 text-lg md:text-xl focus:outline-none placeholder:text-slate-300"
            />
            <button 
              onClick={handleSearch}
              disabled={isLoading}
              className="bg-[#f07c42] text-white px-10 py-4 rounded-full font-bold text-lg md:text-xl hover:bg-[#d96a32] transition-all active:scale-95 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>Search <span className="ml-2">→</span></>
              )}
            </button>
          </div>
          <p className="mt-8 text-slate-300 font-medium">
            Let our AI find the perfect brandable domain for your vision.
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-200 p-4 rounded-2xl mb-8 max-w-xl mx-auto">
            {error}
          </div>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {results.map((res, i) => (
              <div 
                key={i} 
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[32px] text-left hover:bg-white/10 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-[#f07c42] transition-colors">
                    {res.domain}
                  </h3>
                  <span className="bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                    Available
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {res.reason}
                </p>
                <button className="w-full bg-white text-[#143d4a] py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        )}

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white/5 border border-white/5 p-8 rounded-[32px] h-48 animate-pulse">
                <div className="h-6 w-3/4 bg-white/10 rounded mb-4"></div>
                <div className="h-4 w-full bg-white/10 rounded mb-2"></div>
                <div className="h-4 w-2/3 bg-white/10 rounded"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DomainSearch;
