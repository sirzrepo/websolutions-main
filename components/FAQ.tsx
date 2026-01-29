
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{question}</span>
        <svg 
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-45 text-blue-600' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-8' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed text-lg max-w-4xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Is it easy to build a website?",
      answer: "Yes. SIRZ offers a few different ways to create your own free website, so you can choose the creation process that works best for you. Pick from 2000+ designer-made templates, or use our AI website builder to create a business-ready site in no time using a conversational interface."
    },
    {
      question: "How do I create a website?",
      answer: "Start by picking a template or using the AI builder. Customize your pages with drag-and-drop tools, add your content, and hit publish to go live on your own domain."
    },
    {
      question: "How do I choose the best website builder?",
      answer: "Look for a platform that offers the right balance of simplicity and advanced features. SIRZ provides high-speed infrastructure, robust security, and deep customization options."
    },
    {
      question: "What types of websites can you build on SIRZ?",
      answer: "You can build anything from personal blogs and portfolios to complex eCommerce platforms, event booking sites, and enterprise-grade corporate portals."
    },
    {
      question: "Can I create a website without knowing how to code?",
      answer: "Absolutely. SIRZ is designed for everyone, from beginners with zero code knowledge to professionals who want full control over their site's structure."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-bold text-slate-900 mb-16 text-center">Website builder FAQ</h2>
      <div className="divide-y divide-slate-200">
        {faqs.map((faq, i) => (
          <FAQItem key={i} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
