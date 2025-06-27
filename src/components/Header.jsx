import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-[#111A19]/95 backdrop-blur fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-[#809076]/20 fade-in">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4 relative">
          <Link 
            to="/" 
            className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105 float-animation" 
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-2xl text-[#BB6830] bounce-animation">🎵</span>
            <span className="text-xl font-bold text-[#F8D794] highlight">DanceStudio</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li className="slide-in-left">
                <Link 
                  to="/"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-semibold hover:scale-105 ${
                    location.pathname === '/' 
                      ? 'text-[#F8D794] bg-[#BB6830] shadow-lg' 
                      : 'text-[#F8D794] hover:text-[#F8D794] hover:bg-[#BB6830]'
                  }`}
                >
                  <span className="text-base">🏠</span>
                  Home
                </Link>
              </li>
              <li className="slide-in-left" style={{animationDelay: '0.1s', position: 'relative'}}>
                <div className="group relative">
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-semibold hover:scale-105 ${
                      location.pathname.startsWith('/my-journey')
                        ? 'text-[#F8D794] bg-[#BB6830] shadow-lg'
                        : 'text-[#F8D794] hover:text-[#F8D794] hover:bg-[#BB6830]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-base">🧭</span>
                    My Journey
                    <svg className="ml-2 w-4 h-4 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Dropdown menu */}
                  <ul className="absolute left-0 mt-2 w-56 bg-[#111A19] border border-[#809076]/20 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-30">
                    <li><Link to="/my-journey/performances" className="block px-6 py-3 text-[#F8D794] hover:bg-[#BB6830] rounded-t-lg">Performances</Link></li>
                    <li><Link to="/my-journey/notable-performances" className="block px-6 py-3 text-[#F8D794] hover:bg-[#BB6830]">Notable Performances</Link></li>
                    <li><Link to="/my-journey/awards" className="block px-6 py-3 text-[#F8D794] hover:bg-[#BB6830]">Awards and Honours</Link></li>
                    <li><Link to="/my-journey/school" className="block px-6 py-3 text-[#F8D794] hover:bg-[#BB6830]">Dance School</Link></li>
                    <li><Link to="/my-journey/insights" className="block px-6 py-3 text-[#F8D794] hover:bg-[#BB6830] rounded-b-lg">Dance Insights</Link></li>
                  </ul>
                </div>
              </li>
              <li className="slide-in-left" style={{animationDelay: '0.2s'}}>
                <Link 
                  to="/register"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-semibold hover:scale-105 ${
                    location.pathname === '/register' 
                      ? 'text-[#F8D794] bg-[#BB6830] shadow-lg' 
                      : 'text-[#F8D794] hover:text-[#F8D794] hover:bg-[#BB6830]'
                  }`}
                >
                  <span className="text-base">👤</span>
                  Register
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button 
            className="flex flex-col gap-1.5 md:hidden bg-none border-none cursor-pointer p-2 z-20 hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-0.5 bg-[#F8D794] rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-[#F8D794] rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-[#F8D794] rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Mobile Nav */}
          <nav className={`md:hidden absolute top-full left-0 right-0 bg-[#111A19]/95 backdrop-blur shadow-lg border-b border-[#809076]/20 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`} style={{zIndex: 10}}>
            <ul className="flex flex-col gap-0">
              <li>
                <Link 
                  to="/"
                  className={`flex items-center gap-2 px-6 py-4 transition-all duration-300 font-semibold border-b border-[#809076]/10 ${
                    location.pathname === '/' 
                      ? 'text-[#F8D794] bg-[#BB6830]' 
                      : 'text-[#F8D794] hover:text-[#F8D794] hover:bg-[#BB6830]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-base">🏠</span>
                  Home
                </Link>
              </li>
              <li>
                <div>
                  <button
                    className={`flex items-center gap-2 px-6 py-4 transition-all duration-300 font-semibold border-b border-[#809076]/10 w-full text-left ${
                      location.pathname.startsWith('/my-journey')
                        ? 'text-[#F8D794] bg-[#BB6830]'
                        : 'text-[#F8D794] hover:text-[#F8D794] hover:bg-[#BB6830]'
                    }`}
                    onClick={() => setIsMenuOpen((open) => open === 'journey' ? false : 'journey')}
                  >
                    <span className="text-base">🧭</span>
                    My Journey
                    <svg className="ml-2 w-4 h-4 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Collapsible submenu for mobile */}
                  {isMenuOpen === 'journey' && (
                    <ul className="bg-[#111A19] border-t border-[#809076]/10">
                      <li><Link to="/my-journey/performances" className="block px-10 py-3 text-[#F8D794] hover:bg-[#BB6830]" onClick={() => setIsMenuOpen(false)}>Performances</Link></li>
                      <li><Link to="/my-journey/notable-performances" className="block px-10 py-3 text-[#F8D794] hover:bg-[#BB6830]" onClick={() => setIsMenuOpen(false)}>Notable Performances</Link></li>
                      <li><Link to="/my-journey/awards" className="block px-10 py-3 text-[#F8D794] hover:bg-[#BB6830]" onClick={() => setIsMenuOpen(false)}>Awards and Honours</Link></li>
                      <li><Link to="/my-journey/school" className="block px-10 py-3 text-[#F8D794] hover:bg-[#BB6830]" onClick={() => setIsMenuOpen(false)}>Dance School</Link></li>
                      <li><Link to="/my-journey/insights" className="block px-10 py-3 text-[#F8D794] hover:bg-[#BB6830]" onClick={() => setIsMenuOpen(false)}>Dance Insights</Link></li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link 
                  to="/register"
                  className={`flex items-center gap-2 px-6 py-4 transition-all duration-300 font-semibold ${
                    location.pathname === '/register' 
                      ? 'text-[#F8D794] bg-[#BB6830]' 
                      : 'text-[#F8D794] hover:text-[#F8D794] hover:bg-[#BB6830]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-base">👤</span>
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;