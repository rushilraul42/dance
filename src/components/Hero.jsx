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
  `;
  document.head.appendChild(oregonStyle);
}


const images = [
  '/display/display2.jpg',
  '/display/display5.jpg',
  '/display/display4.jpg',
  '/display/display.jpg',
  '/display/display3.jpg',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const timeoutRef = useRef(null);

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

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

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
          backgroundColor: '#EFDFBB'
        }}
      >
        {/* Background Image - positioned on the right */}
        <div 
          className="absolute right-0 h-full"
          style={{
            top: '0',
            width: '100%',
            backgroundImage: 'url(/display/deskdisplay.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Left side content - Name and greeting */}
        <div className="absolute left-2 top-8 z-10">
          {/* Artist Name */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-wider leading-tight drop-shadow-lg" style={{ color: 'white' }}>
            <span className="block">ANUSHKAA</span>
            <span className="block">RAMANATAN</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-bold tracking-widest mt-4" style={{ color: 'white', letterSpacing: '0.2em' }}>
            BHARATANATYAM ARTISTE
          </p>
          
          
          
        </div>
      </div>
      
      {/* Description and Resume: Enhanced design for better visual appeal */}
      <div 
        className="w-full" 
        style={{ 
          background: 'linear-gradient(135deg, #722F37 0%, #8B3A42 50%, #722F37 100%)',
          color: '#F5F5DC',
          position: 'relative',
          minHeight: '100vh'
        }}
      >
        {/* Decorative background pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #F5F5DC 2px, transparent 2px), radial-gradient(circle at 75% 75%, #F5F5DC 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}
        ></div>

        <div className="max-w-xl md:max-w-7xl mx-auto flex flex-col items-center px-6 sm:px-8 py-20 relative z-10">

          {/* Description Section - Clean Layout */}
          <div className="w-full max-w-6xl mb-12">
            <div className="relative">
              {/* Mobile Layout - Stacked */}
              <div className="block md:hidden">
                {/* About Heading */}
                <h2 
                  className="text-4xl font-bold tracking-widest mb-8 text-center"
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
                  className="text-4xl font-bold mb-4 text-center"
                  style={{
                    color: '#F5F5DC',
                    fontFamily: 'Epistle, serif',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                  }}
                >
                  ANUSHKAA RAMANATAN
                </h1>
              </div>

              {/* Desktop Layout - Two Column */}
              <div className="hidden md:flex md:items-start md:gap-8 lg:gap-12">
                {/* Left Column - About Heading */}
                <div className="flex-shrink-0 w-32 lg:w-40">
                  <h2 
                    className="text-3xl lg:text-4xl font-bold"
                    style={{
                      color: '#F5F5DC',
                      fontFamily: 'Georgia, serif',
                      fontWeight: 'bold',
                      lineHeight: '1.2'
                    }}
                  >
                    About me
                  </h2>
                </div>

                {/* Right Column - Content */}
                {/* Right Column - Content */}
                <div className="flex-1 max-w-4xl">
                  <p className="text-base md:text-lg mb-8 leading-relaxed fade-in" style={{ 
                    animationDelay: '0.3s', 
                    fontFamily: 'Georgia, serif', 
                    fontWeight: 400, 
                    color: '#F5F5DC', 
                    lineHeight: '1.6',
                    textAlign: 'justify'
                  }}>
                    {showFullDesc ? (
                      <>
                        Anushkaa Ramanatan is a Bharatanatyam practitioner and performer based in Mumbai. With over 15 years of rigorous traditional training, she began her journey at the hobby-class level and went on to pursue formal education in the art form. She earned her Bachelor's degree in Bharatanatyam from Nalanda Nritya Kala Mahavidyalaya, consistently securing the top rank throughout her course. She recently completed her Master of Performing Arts degree in Bharatanatyam from Nalanda.<br/><br/>
                        Anushkaa has been a part of various Nalanda productions and has performed extensively as a part of the Nalanda Troupe, gaining much experience and exposure. She served as the President of the Student Council Committee at her alma mater, a role that helped her develop skills across diverse areas of work. <br/><br/>
                        Three years ago, Anushkaa founded 'Abhinita School of Dance' that provides authentic and traditional training in Bharatanatyam. <br/><br/>
                        Anushkaa currently works as an independent performer and with actively nurturing and expanding her dance class.
                      </>
                    ) : (
                      <>
                        Anushkaa Ramanatan is a Bharatanatyam practitioner and performer based in Mumbai. With over 15 years of rigorous traditional training, she began her journey at the hobby-class level and went on to pursue formal education in the art form. She earned her Bachelor's degree in Bharatanatyam from Nalanda Nritya Kala Mahavidyalaya, consistently securing the top rank throughout her course. <span style={{ fontWeight: 600 }}>... </span>
                        <button onClick={() => setShowFullDesc(true)} className="underline font-semibold ml-1" style={{ fontFamily: 'Georgia, serif', color: '#F5F5DC', fontSize: '1em' }}>Read more</button>
                      </>
                    )}
                  </p>
                  {showFullDesc && (
                    <div className="mb-4">
                      <button onClick={() => setShowFullDesc(false)} className="underline font-semibold" style={{ fontFamily: 'Georgia, serif', color: '#F5F5DC', fontSize: '1em' }}>Show less</button>
                    </div>
                  )}
                  
                  {/* Resume button for desktop */}
                  <div className="text-left">
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
              </div>

              {/* Mobile description - separate from desktop layout */}
              <div className="block md:hidden">
                <p className="text-lg mb-8 text-center leading-relaxed fade-in mt-6" style={{ 
                  animationDelay: '0.3s', 
                  fontFamily: 'Georgia, serif', 
                  fontWeight: 400, 
                  color: '#F5F5DC', 
                  lineHeight: '1.6'
                }}>
                  {showFullDesc ? (
                    <>
                      Anushkaa Ramanatan is a Bharatanatyam practitioner and performer based in Mumbai. With over 15 years of rigorous traditional training, she began her journey at the hobby-class level and went on to pursue formal education in the art form. She earned her Bachelor's degree in Bharatanatyam from Nalanda Nritya Kala Mahavidyalaya, consistently securing the top rank throughout her course. She recently completed her Master of Performing Arts degree in Bharatanatyam from Nalanda.<br/><br/>
                      Anushkaa has been a part of various Nalanda productions and has performed extensively as a part of the Nalanda Troupe, gaining much experience and exposure. She served as the President of the Student Council Committee at her alma mater, a role that helped her develop skills across diverse areas of work. <br/><br/>
                      Three years ago, Anushkaa founded 'Abhinita School of Dance' that provides authentic and traditional training in Bharatanatyam. <br/><br/>
                      Anushkaa currently works as an independent performer and with actively nurturing and expanding her dance class.
                    </>
                  ) : (
                    <>
                      Anushkaa Ramanatan is a Bharatanatyam practitioner and performer based in Mumbai. With over 15 years of rigorous traditional training, she began her journey at the hobby-class level and went on to pursue formal education in the art form. She earned her Bachelor's degree in Bharatanatyam from Nalanda Nritya Kala Mahavidyalaya, consistently securing the top rank throughout her course. <span style={{ fontWeight: 600 }}>... </span>
                      <button onClick={() => setShowFullDesc(true)} className="underline font-semibold ml-1" style={{ fontFamily: 'Georgia, serif', color: '#F5F5DC', fontSize: '1em' }}>Read more</button>
                    </>
                  )}
                </p>
                {showFullDesc && (
                  <div className="text-center mb-4">
                    <button onClick={() => setShowFullDesc(false)} className="underline font-semibold" style={{ fontFamily: 'Georgia, serif', color: '#F5F5DC', fontSize: '1em' }}>Show less</button>
                  </div>
                )}
                <div className="text-center">
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
