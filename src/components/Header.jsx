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
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  return (
    <header style={{ background: '#722F37', borderBottom: '1px solid #ECE7E2', boxShadow: '4px 0 24px 0 rgba(0,0,0,0.18)', zIndex: 1000 }} className="backdrop-blur fixed top-0 right-0 left-0 w-full transition-all duration-500" >
      {/* Hamburger Icon - only show on mobile */}
      <div
        className="md:hidden"
        style={{ position: 'absolute', right: '20px', top: '22px', border: 0, zIndex: 999, cursor: 'pointer', outline: 'none' }}
        onClick={() => setNavOpen(!navOpen)}
        tabIndex={0}
        aria-label="Open menu"
      >
        <div className="bread" style={{ 
          width: 30, 
          height: 3, 
          backgroundColor: '#EFDFBB', 
          margin: '6px 0', 
          transition: '.3s',
          transform: navOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
        }}></div>
        <div className="bread" style={{ 
          width: 30, 
          height: 3, 
          backgroundColor: '#EFDFBB', 
          margin: '6px 0', 
          transition: '.3s',
          transform: navOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
        }}></div>
      </div>

      {/* Fullscreen Nav Overlay - only for mobile */}
      <nav
        className={`md:hidden ${navOpen ? 'open' : ''}`}
        style={{
          opacity: navOpen ? 1 : 0,
          visibility: navOpen ? 'visible' : 'hidden',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 999,
          background: '#722F37',
          transition: 'opacity 0.5s, visibility 0.5s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => setNavOpen(false)}
      >
        {/* Cancel button always visible at the top */}
        <div
          style={{ 
            position: 'absolute', 
            right: '20px', 
            top: '22px', 
            zIndex: 1000, 
            cursor: 'pointer' 
          }}
          onClick={() => setNavOpen(false)}
        >
          <div className="bread" style={{ 
            width: 30, 
            height: 3, 
            backgroundColor: '#EFDFBB', 
            margin: '6px 0', 
            transition: '.3s',
            transform: 'rotate(45deg) translate(5px, 5px)'
          }}></div>
          <div className="bread" style={{ 
            width: 30, 
            height: 3, 
            backgroundColor: '#EFDFBB', 
            margin: '6px 0', 
            transition: '.3s',
            transform: 'rotate(-45deg) translate(5px, -5px)'
          }}></div>
        </div>

        <ul style={{ 
          width: '100%', 
          height: '100vh', 
          margin: 0, 
          padding: '0 2rem', 
          boxSizing: 'border-box', 
          paddingTop: '15%', 
          paddingBottom: '15%', 
          textAlign: 'center', 
          listStyle: 'none', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          gap: '2rem' 
        }} onClick={e => e.stopPropagation()}>
          <li style={{ borderBottom: '2px solid #EFDFBB', paddingBottom: '0.8rem' }}>
            <Link to="/" style={{ 
              display: 'block', 
              padding: '8px 0', 
              fontSize: '1.8rem', 
              color: '#EFDFBB', 
              textDecoration: 'none', 
              transition: 'color .6s, transform .3s',
              fontWeight: '500',
              fontFamily: 'Lucida Calligraphy, cursive',
              fontStyle: 'italic'
            }} onClick={() => setNavOpen(false)}>Home</Link>
          </li>
          <li style={{ borderBottom: '2px solid #EFDFBB', paddingBottom: '0.8rem' }}>
            <Link to="/my-journey/performances" style={{ 
              display: 'block', 
              padding: '8px 0', 
              fontSize: '1.8rem', 
              color: '#EFDFBB', 
              textDecoration: 'none', 
              transition: 'color .6s, transform .3s',
              fontWeight: '500',
              fontFamily: 'Lucida Calligraphy, cursive',
              fontStyle: 'italic'
            }} onClick={() => setNavOpen(false)}>Performances</Link>
          </li>
          <li style={{ borderBottom: '2px solid #EFDFBB', paddingBottom: '0.8rem' }}>
            <Link to="/my-journey/awards" style={{ 
              display: 'block', 
              padding: '8px 0', 
              fontSize: '1.8rem', 
              color: '#EFDFBB', 
              textDecoration: 'none', 
              transition: 'color .6s, transform .3s',
              fontWeight: '500',
              fontFamily: 'Lucida Calligraphy, cursive',
              fontStyle: 'italic'
            }} onClick={() => setNavOpen(false)}>Awards and Honours</Link>
          </li>
          <li style={{ borderBottom: '2px solid #EFDFBB', paddingBottom: '0.8rem' }}>
            <Link to="/my-journey/school" style={{ 
              display: 'block', 
              padding: '8px 0', 
              fontSize: '1.8rem', 
              color: '#EFDFBB', 
              textDecoration: 'none', 
              transition: 'color .6s, transform .3s',
              fontWeight: '500',
              fontFamily: 'Lucida Calligraphy, cursive',
              fontStyle: 'italic'
            }} onClick={() => setNavOpen(false)}>Dance School</Link>
          </li>
          <li style={{ borderBottom: '2px solid #EFDFBB', paddingBottom: '0.8rem' }}>
            <Link to="/my-journey/insights" style={{ 
              display: 'block', 
              padding: '8px 0', 
              fontSize: '1.8rem', 
              color: '#EFDFBB', 
              textDecoration: 'none', 
              transition: 'color .6s, transform .3s',
              fontWeight: '500',
              fontFamily: 'Lucida Calligraphy, cursive',
              fontStyle: 'italic'
            }} onClick={() => setNavOpen(false)}>Dance Insights</Link>
          </li>
          <li style={{ borderBottom: '2px solid #EFDFBB', paddingBottom: '0.8rem' }}>
            <Link to="/register" style={{ 
              display: 'block', 
              padding: '8px 0', 
              fontSize: '1.8rem', 
              color: '#EFDFBB', 
              textDecoration: 'none', 
              transition: 'color .6s, transform .3s',
              fontWeight: '500',
              fontFamily: 'Lucida Calligraphy, cursive',
              fontStyle: 'italic'
            }} onClick={() => setNavOpen(false)}>Register</Link>
          </li>
        </ul>
      </nav>

      {/* Keep the rest of your header (logo, nav, etc.) as before, but hide when navOpen */}
      <div className="max-w-7xl mx-auto px-4" style={{ filter: navOpen ? 'blur(8px)' : 'none', pointerEvents: navOpen ? 'none' : 'auto', transition: 'filter 0.3s' }}>
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
                  style={{ color: '#EFDFBB', background: 'transparent' }}
                >
                  <span className="text-base">🏠</span>
                  Home
                </Link>
              </li>
              <li style={{animationDelay: '0.1s', position: 'relative'}}>
                <div className="group relative">
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold"
                    style={{ color: '#EFDFBB', background: 'transparent' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-base">🧭</span>
                    My Journey
                    <svg className="ml-2 w-4 h-4 inline-block" fill="none" stroke="#EFDFBB" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Dropdown menu */}
                  <ul style={{ background: '#722F37', border: '1px solid #EFDFBB' }} className="absolute left-0 mt-2 w-56 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-30">
                    <li><Link to="/my-journey/performances" className="block px-6 py-3 hover:bg-[#5a2529] transition-colors duration-200" style={{ color: '#EFDFBB', background: 'transparent' }}>Performances</Link></li>
                    <li><Link to="/my-journey/awards" className="block px-6 py-3 hover:bg-[#5a2529] transition-colors duration-200" style={{ color: '#EFDFBB', background: 'transparent' }}>Awards and Honours</Link></li>
                    <li><Link to="/my-journey/school" className="block px-6 py-3 hover:bg-[#5a2529] transition-colors duration-200" style={{ color: '#EFDFBB', background: 'transparent' }}>Dance School</Link></li>
                    <li><Link to="/my-journey/insights" className="block px-6 py-3 hover:bg-[#5a2529] transition-colors duration-200" style={{ color: '#EFDFBB', background: 'transparent' }}>Dance Insights</Link></li>
                  </ul>
                </div>
              </li>
              <li style={{animationDelay: '0.2s'}}>
                <Link 
                  to="/register"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold"
                  style={{ color: '#EFDFBB', background: 'transparent' }}
                >
                  <span className="text-base">👤</span>
                  Register
                </Link>
              </li>
            </ul>
          </nav>

          {/* Off-canvas Mobile Nav - only for mobile */}
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