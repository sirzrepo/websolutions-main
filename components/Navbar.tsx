
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-white border-b border-slate-100 px-6">
      <div className="max-w-[1440px] mx-auto h-16 flex items-center justify-between">
        <div className="flex items-center space-x-10 h-full">
          <a href="/" className="flex items-center space-x-2 group mr-4">
            <div className="w-8 h-8 gradient-blue rounded-md flex items-center justify-center text-white font-black italic text-sm shadow-md transition-transform group-hover:rotate-12">
              S
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">SIRZ</span>
          </a>

          <div className="hidden lg:flex items-center space-x-8 text-[13px] font-bold text-slate-500 h-full">
            <div className="relative group/menu flex items-center h-full cursor-pointer hover:text-slate-900">
              Product <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
            </div>
            <div className="relative group/menu flex items-center h-full cursor-pointer hover:text-slate-900">
              Solutions <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
            </div>
            <div className="flex items-center h-full cursor-pointer hover:text-slate-900">Resources</div>
            <div className="flex items-center h-full cursor-pointer hover:text-slate-900">Pricing</div>
            <div className="flex items-center h-full cursor-pointer hover:text-slate-900 border-l pl-8 border-slate-200">SIRZ Studio</div>
            <div className="flex items-center h-full cursor-pointer hover:text-slate-900">Enterprise</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
