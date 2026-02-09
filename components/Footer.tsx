
import React from 'react';

const Footer: React.FC = () => {
  const socialIcons = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61565689515262',
      path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sirz_official/',
      path: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm5.23-.92a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM12 9a3 3 0 110 6 3 3 0 010-6z'
    },
    {
      name: 'Linktree',
      url: 'https://linktr.ee/sirzsupport',
      path: 'M13.511 5.83333L17.5 5.83333L12 0L6.5 5.83333L10.489 5.83333L6.16667 10.5H9.5L5.5 14.8333H8.83333L4.5 19.5H11.1667V24H12.8333V19.5H19.5L15.1667 14.8333H18.5L14.5 10.5H17.8333L13.511 5.83333Z'
    }
  ];

  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Minimalist Logo Section */}
        <div className="flex items-center space-x-2 mb-10 group cursor-default">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black italic text-lg shadow-lg shadow-blue-200 transition-transform group-hover:scale-110">S</div>
          <span className="text-2xl font-black tracking-tight text-slate-900 uppercase">SIRZ</span>
        </div>

        {/* Social Icons Strip */}
        <div className="flex items-center space-x-8 mb-12">
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-all transform hover:scale-125"
              aria-label={icon.name}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={icon.path} />
              </svg>
            </a>
          ))}
        </div>

        {/* Minimal Copyright and Legal Row */}
        <div className="pt-8 border-t border-slate-50 w-full max-w-lg">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
            © 2026 SIRZ Web Solutions. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-8 text-[11px] font-bold text-slate-300">
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
