import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Add Google Fonts import for Great Vibes
if (typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header style={{ background: '#000', borderBottom: '1px solid #ECE7E2', boxShadow: '4px 0 24px 0 rgba(0,0,0,0.18)' }} className="backdrop-blur fixed top-0 right-0 left-auto w-full md:w-[calc(100%-32px)] z-50 transition-all duration-300" >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4 relative">
          <Link 
            to="/" 
            className="flex flex-col items-start gap-0 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
            style={{ lineHeight: 1.1 }}
          >
            <span style={{ fontFamily: 'Great Vibes, cursive', color: '#ECE7E2', fontSize: '2.5rem', fontWeight: 400, letterSpacing: '1px' }}>Anushkaa</span>
            <span style={{ fontFamily: 'Great Vibes, cursive', color: '#ECE7E2', fontSize: '2.5rem', fontWeight: 400, letterSpacing: '1px', marginTop: '-0.3em' }}>Ramanatan</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <Link 
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold"
                  style={{ color: '#ECE7E2', background: 'transparent' }}
                >
                  <span className="text-base">🏠</span>
                  Home
                </Link>
              </li>
              <li style={{animationDelay: '0.1s', position: 'relative'}}>
                <div className="group relative">
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold"
                    style={{ color: '#ECE7E2', background: 'transparent' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-base">🧭</span>
                    My Journey
                    <svg className="ml-2 w-4 h-4 inline-block" fill="none" stroke="#ECE7E2" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Dropdown menu */}
                  <ul style={{ background: '#4A7766', border: '1px solid #ECE7E2' }} className="absolute left-0 mt-2 w-56 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-30">
                    <li><Link to="/my-journey/performances" className="block px-6 py-3" style={{ color: '#ECE7E2', background: 'transparent' }}>Performances</Link></li>
                    <li><Link to="/my-journey/notable-performances" className="block px-6 py-3" style={{ color: '#ECE7E2', background: 'transparent' }}>Notable Performances</Link></li>
                    <li><Link to="/my-journey/awards" className="block px-6 py-3" style={{ color: '#ECE7E2', background: 'transparent' }}>Awards and Honours</Link></li>
                    <li><Link to="/my-journey/school" className="block px-6 py-3" style={{ color: '#ECE7E2', background: 'transparent' }}>Dance School</Link></li>
                    <li><Link to="/my-journey/insights" className="block px-6 py-3" style={{ color: '#ECE7E2', background: 'transparent' }}>Dance Insights</Link></li>
                  </ul>
                </div>
              </li>
              <li style={{animationDelay: '0.2s'}}>
                <Link 
                  to="/register"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold"
                  style={{ color: '#ECE7E2', background: 'transparent' }}
                >
                  <span className="text-base">👤</span>
                  Register
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button 
            className="flex flex-col gap-1.5 md:hidden bg-none border-none cursor-pointer p-2 z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-7 h-0.5 rounded" style={{ background: '#ECE7E2' }}></span>
            <span className="block w-7 h-0.5 rounded" style={{ background: '#ECE7E2' }}></span>
            <span className="block w-7 h-0.5 rounded" style={{ background: '#ECE7E2' }}></span>
          </button>

          {/* Off-canvas Mobile Nav */}
          <nav 
            className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#4A7766] shadow-lg z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ borderLeft: '1px solid #ECE7E2' }}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-[#ECE7E2]"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="flex flex-col gap-2 mt-16 px-6">
              <li>
                <Link 
                  to="/"
                  className="flex items-center gap-2 px-4 py-3 font-semibold border-b w-full"
                  style={{ color: '#ECE7E2', background: 'transparent', borderBottom: '1px solid #ECE7E2' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-base">🏠</span>
                  Home
                </Link>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 px-4 py-3 font-semibold border-b w-full text-left"
                  style={{ color: '#ECE7E2', background: 'transparent', borderBottom: '1px solid #ECE7E2' }}
                  onClick={() => setIsMenuOpen(isMenuOpen === 'journey' ? false : 'journey')}
                >
                  <span className="text-base">🧭</span>
                  My Journey
                  <svg className="ml-2 w-4 h-4 inline-block" fill="none" stroke="#ECE7E2" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {/* Collapsible submenu for mobile */}
                {isMenuOpen === 'journey' && (
                  <ul style={{ background: '#4A7766', borderTop: '1px solid #ECE7E2' }} className="ml-4">
                    <li><Link to="/my-journey/performances" className="block px-6 py-3" style={{ color: '#ECE7E2', background: 'transparent' }} onClick={() => setIsMenuOpen(false)}>Performances</Link></li>
                    <li><Link to="/my-journey/notable-performances" className="block px-6 py-3" style={{ color: '#ECE7E2', background: 'transparent' }} onClick={() => setIsMenuOpen(false)}>Notable Performances</Link></li>
                    <li><Link to="/my-journey/awards" className="block px-6 py-3" style={{ color: '#ECE7E2', background: 'transparent' }} onClick={() => setIsMenuOpen(false)}>Awards and Honours</Link></li>
                    <li><Link to="/my-journey/school" className="block px-6 py-3" style={{ color: '#ECE7E2', background: 'transparent' }} onClick={() => setIsMenuOpen(false)}>Dance School</Link></li>
                    <li><Link to="/my-journey/insights" className="block px-6 py-3" style={{ color: '#ECE7E2', background: 'transparent' }} onClick={() => setIsMenuOpen(false)}>Dance Insights</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link 
                  to="/register"
                  className="flex items-center gap-2 px-4 py-3 font-semibold w-full"
                  style={{ color: '#ECE7E2', background: 'transparent' }}
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