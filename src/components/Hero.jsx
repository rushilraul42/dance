import { useState, useEffect, useRef } from 'react';

// Import fonts
if (typeof document !== 'undefined') {
  // Playfair Display for title
  const playfairLink = document.createElement('link');
  playfairLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap';
  playfairLink.rel = 'stylesheet';
  document.head.appendChild(playfairLink);
  
  // Oregon local font for description
  const oregonStyle = document.createElement('style');
  oregonStyle.textContent = `
    @font-face {
      font-family: 'Oregon';
      src: url('/fonts/oregon.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'Epistle';
      src: url('/fonts/fonts/Epistle-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'Didonesque Display';
      src: url('/fonts/FontsFree-Net-Didonesque-Display.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    
    /* Slideout Navigation Styles */
    .slideout-nav {
      position: fixed;
      top: 1rem;
      right: 1rem;
      padding: 0;
      z-index: 1000;
    }
    
    .slideout-nav::before,
    .slideout-nav::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      transition: width 600ms cubic-bezier(0.86, 0, 0.672, 1.003);
      border-radius: 30px 0 0 30px;
      height: 100vh;
      z-index: -1;
    }
    
    .slideout-nav::before {
      width: var(--nav-bg-w, 0);
      background-color: rgb(137, 75, 0);
    }
    
    .slideout-nav::after {
      width: var(--nav-bg-w-after, 0);
      background-color: rgb(254, 154, 0);
    }
    
    .slideout-nav:has([aria-expanded="true"]) {
      --nav-bg-w: calc(100vw + 30px);
      --nav-bg-w-after: calc(33vw + 30px);
    }
    
    .slideout-nav > button {
      appearance: none;
      border: none;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      background-color: transparent;
      color: #722F37;
      position: relative;
      z-index: 2;
      cursor: pointer;
      outline: none;
    }
    
    .slideout-nav > button:focus {
      outline: none;
      box-shadow: none;
    }
    
    .slideout-nav > button > svg path {
      transition-property: color, scale, rotate;
      transition-duration: 150ms;
      transition-timing-function: ease-in-out;
      transform-origin: center center;
    }
    
    .slideout-nav > button:hover {
      color: #722F37;
    }
    
    .slideout-nav > button::before {
      content: "Menu";
      transition: color 150ms ease-in-out;
      margin-right: 0.5rem;
      font-family: 'Lucida Calligraphy', cursive;
      font-style: italic;
      font-size: 1.875rem;
    }
    
    .slideout-nav > button[aria-expanded="true"] {
      color: #722F37;
    }
    
    .slideout-nav > button[aria-expanded="true"]::before {
      content: "Close";
    }
    
    .slideout-nav > button[aria-expanded="true"] > svg path:is(:nth-of-type(1), :nth-of-type(4)) {
      scale: 0 1;
    }
    
    .slideout-nav > button[aria-expanded="true"] > svg path:nth-of-type(2) {
      rotate: -45deg;
    }
    
    .slideout-nav > button[aria-expanded="true"] > svg path:nth-of-type(3) {
      rotate: 45deg;
    }
    
    .slideout-nav > ul {
      position: absolute;
      background-color: rgba(239, 223, 187, 0.95);
      border-radius: 30px 0 0 30px;
      overflow: hidden;
      top: 0;
      right: 0;
      margin: 0;
      padding: 0;
      width: fit-content;
      height: 100vh;
      list-style: none;
      transform: translateX(100%);
      transition: transform 1000ms cubic-bezier(0.86, 0, 0.672, 1.003);
    }
    
    .slideout-nav > ul[aria-hidden="false"] {
      transform: translateX(0);
    }
    
    .slideout-nav > ul > li {
      padding: 0;
      margin: 0;
      overflow-y: clip;
    }
    
    .slideout-nav > ul > li:nth-child(1) {
      margin-top: 60px;
    }
    
    .slideout-nav > ul > li > a {
      font-family: 'Lucida Calligraphy', cursive;
      font-style: italic;
      letter-spacing: 0.05rem;
      position: relative;
      display: flex;
      font-size: clamp(1.5rem, 2.5vw + 0.5rem, 3rem);
      font-weight: 700;
      text-transform: uppercase;
      line-height: 1;
      padding: 0.5rem 4rem 0.5rem 2rem;
      text-decoration: none;
      color: #722F37;
      isolation: isolate;
      transform: translateY(100%);
      transition: transform 300ms ease-in-out;
      transition-delay: calc(var(--i) * 50ms + 1000ms);
    }
    
    .slideout-nav > ul[aria-hidden="false"] > li > a {
      transform: translateY(0);
    }
    
    .slideout-nav > ul > li > a > span {
      display: block;
      transition: transform 350ms ease-in-out;
    }
    
    .slideout-nav > ul > li > a::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: #722F37;
      translate: 0 2lh;
      z-index: -1;
      transition: all 350ms ease-in-out;
    }
    
    .slideout-nav > ul > li > a:hover > span {
      transform: translateY(-2lh);
      translate: 0 2lh;
    }
    
    .slideout-nav > ul > li > a:hover::before {
      translate: 0 0;
    }
    
    /* Remove the wine line for Awards and Honours */
    .slideout-nav > ul > li:nth-child(3) > a::before {
      display: none;
    }
  `;
  document.head.appendChild(oregonStyle);
}

const images = [
  '/display2.jpg',
  '/display5.jpg',
  '/display4.jpg',
  '/display.jpg',
  '/display3.jpg',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);

  // Check if desktop on mount and resize
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start pt-0 pb-0 fade-in" style={{ background: '#EFDFBB' }}>
      {/* Mobile Carousel */}
      <div className="block md:hidden relative w-full h-[92vh] sm:h-[80vh] max-h-[900px] flex items-center justify-center overflow-hidden bg-[#ECE7E2] shadow-2xl">
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#4A7766]/90 hover:bg-[#C59C79] hover:text-[#4A7766] text-[#ECE7E2] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover-lift"
          aria-label="Previous image"
        >
          <span className="text-xl font-bold">&#8592;</span>
        </button>
        <img
          src={images[current]}
          alt={`Performance ${current + 1}`}
          className="w-full h-full select-none transition-all duration-700 ease-in-out scale-in"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            maxHeight: '100%',
            minHeight: '320px',
            opacity: 1,
            transition: 'opacity 0.7s, transform 0.7s',
          }}
        />
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#4A7766]/90 hover:bg-[#C59C79] hover:text-[#4A7766] text-[#ECE7E2] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover-lift"
          aria-label="Next image"
        >
          <span className="text-xl font-bold">&#8594;</span>
        </button>
        {/* Dots for mobile only */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                current === idx 
                  ? 'bg-[#C59C79] shadow-lg scale-110' 
                  : 'bg-[#4A7766]/60 hover:bg-[#4A7766]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Full Screen Hero */}
      <div className="hidden md:flex relative w-full h-screen items-center justify-center overflow-hidden" 
        style={{ 
          backgroundImage: 'url(/background/desktopback.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Left side content - Name and greeting */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
          {/* Artist Name */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-wider leading-tight drop-shadow-lg" style={{ color: '#722F37' }}>
            <span className="block">ANUSHKAA</span>
            <span className="block">RAMANATAN</span>
          </h1>
          
          
          
        </div>

        {/* Desktop Menu Button */}
        <nav className="slideout-nav" ref={navRef}>
          <button 
            type="button" 
            id="btn-nav-toggle" 
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu" 
            aria-label="Toggle navigation menu"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </g>
            </svg>
          </button>

          <ul id="nav-menu" role="list" aria-labelledby="btn-nav-toggle" aria-hidden={!isMenuOpen}>
            <li style={{ '--i': 1 }}><a href="/"><span>Home</span></a></li>
            <li style={{ '--i': 2 }}><a href="/my-journey/performances"><span>Performances</span></a></li>
            <li style={{ '--i': 3 }}><a href="/my-journey/awards"><span>Awards and Honours</span></a></li>
            <li style={{ '--i': 4 }}><a href="/my-journey/school"><span>Dance School</span></a></li>
            <li style={{ '--i': 5 }}><a href="/my-journey/insights"><span>Gallery</span></a></li>
            <li style={{ '--i': 6 }}><a href="/register"><span>Register</span></a></li>
          </ul>
        </nav>
      </div>
      
      {/* Description and Resume: further below the fold on mobile, visible on desktop */}
      <div 
        className="w-full" 
        style={{ 
          background: '#722F37',
          color: '#F5F5DC',
          position: 'relative',
          minHeight: '100vh'
        }}
      >
        <div className="max-w-xl md:max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-8 py-16 relative z-10">

          {/* About Heading */}
          <h2 
            className="text-4xl md:text-5xl font-bold tracking-widest mb-8 text-center"
            style={{
              color: '#F5F5DC',
              fontFamily: 'Lucida Calligraphy, cursive',
              fontStyle: 'italic',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            ABOUT
          </h2>

            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
              style={{
                color: '#F5F5DC',
                fontFamily: 'Epistle, serif',
                fontStyle: 'normal',
                fontWeight: 'bold',
              }}
            >
          ANUSHKAA RAMANATAN
        </h1>

        <p className="text-lg md:text-3xl mb-8 text-center leading-relaxed fade-in" style={{ animationDelay: '0.3s', fontFamily: 'Oregon, serif', letterSpacing: '1px', fontWeight: 400, color: '#F5F5DC' }}>
          {showFullDesc ? (
            <>
              Anushkaa Ramanatan is a Bharatanatyam practitioner and performer based in Mumbai. With over 15 years of rigorous traditional training, she began her journey at the hobby-class level and went on to pursue formal education in the art form. She earned her Bachelor's degree in Bharatanatyam from Nalanda Nritya Kala Mahavidyalaya, consistently securing the top rank throughout her course. She recently completed her Master of Performing Arts degree in Bharatanatyam from Nalanda.<br/><br/>
              Anushkaa has been a part of various Nalanda productions and has performed extensively as a part of the Nalanda Troupe, gaining much experience and exposure. She served as the President of the Student Council Committee at her alma mater, a role that helped her develop skills across diverse areas of work. <br/><br/>
              Three years ago, Anushkaa founded 'Abhinita School of Dance' that provides authentic and traditional training in Bharatanatyam. <br/><br/>
              Anushkaa currently works as an independent performer and with actively nurturing and expanding her dance class.
            </>
          ) : (
            <>
              Anushkaa Ramanatan is a Bharatanatyam practitioner and performer based in Mumbai. With over 15 years of rigorous traditional training, she began her journey at the hobby-class level and went on to pursue formal education in the art form. She earned her Bachelor's degree in Bharatanatyam from Nalanda Nritya Kala Mahavidyalaya, consistently securing the top rank throughout her course. <span style={{ fontWeight: 600 }}>... </span>
              <button onClick={() => setShowFullDesc(true)} className="underline font-semibold ml-1" style={{ fontFamily: 'Oregon, serif', color: '#F5F5DC', fontSize: '1.1em' }}>Read more</button>
            </>
          )}
        </p>
        {showFullDesc && (
          <button onClick={() => setShowFullDesc(false)} className="underline font-semibold mb-4" style={{ fontFamily: 'Oregon, serif', color: '#F5F5DC', fontSize: '1.1em' }}>Show less</button>
        )}
        <a
          href="/ArtisteBiography.pdf"
          download
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold shadow-xl"
          style={{ backgroundColor: '#F5F5DC', color: '#722F37', fontFamily: 'Lucida Calligraphy, cursive', fontStyle: 'italic' }}
        >
          <span className="text-xl">📄</span>
          Resume
        </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;