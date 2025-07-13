import { useState, useEffect, useRef } from 'react';

// Import fonts
if (typeof document !== 'undefined') {
  // Playfair Display for title
  const playfairLink = document.createElement('link');
  playfairLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap';
  playfairLink.rel = 'stylesheet';
  document.head.appendChild(playfairLink);
  
  // Narziss font for description
  const narzissLink = document.createElement('link');
  narzissLink.href = 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap';
  narzissLink.rel = 'stylesheet';
  document.head.appendChild(narzissLink);
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

      {/* Desktop Static Image */}
      <div className="hidden md:flex relative w-full h-[90vh] max-h-[900px] items-center justify-between overflow-hidden bg-[#EFDFBB] mt-20">
        {/* Left side content area - 40% width */}
        <div className="w-2/5 h-full flex items-center justify-center px-8">
          <div className="flex items-center justify-center w-full h-full">
            <img
              src="/logo.png"
              alt="Anushkaa Ramanatan Logo"
              className="max-w-full max-h-full object-contain"
              style={{
                filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.3))',
              }}
            />
          </div>
        </div>
        
        {/* Right side image - 60% width */}
        <div className="w-3/5 h-full flex items-center justify-center overflow-hidden shadow-2xl" style={{ backgroundColor: '#F5F5DC' }}>
          <img
            src="/land.jpg"
            alt="Dance Performance"
            className="w-full h-full select-none scale-in"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              maxHeight: '100%',
              minHeight: '320px',
              opacity: 1,
            }}
          />
        </div>
      </div>
      
      {/* About Section - Partition between hero and description */}
      <div className="w-full py-8" style={{ background: '#F5F5DC' }}>
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <div 
            className="flex-1 h-px max-w-xs" 
            style={{ background: 'linear-gradient(to right, transparent, #722F37, #722F37)' }}
          ></div>
          <h2 
            className="px-8 text-3xl md:text-4xl font-bold tracking-widest"
            style={{
              color: '#722F37',
              fontFamily: 'Lucida Calligraphy, cursive',
              fontStyle: 'italic',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            ABOUT
          </h2>
          <div 
            className="flex-1 h-px max-w-xs" 
            style={{ background: 'linear-gradient(to left, transparent, #722F37, #722F37)' }}
          ></div>
        </div>
      </div>
      
      {/* Description and Resume: further below the fold on mobile, visible on desktop */}
      <div 
        className="w-full" 
        style={{ 
          backgroundImage: 'url(/background/b2.PNG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: isDesktop ? 'fixed' : 'scroll',
          color: '#F5F5DC',
          position: 'relative',
          minHeight: '100vh'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
        ></div>
        <div className="max-w-xl md:max-w-6xl mx-auto flex flex-col items-center px-4 sm:px-8 py-16 relative z-10">

            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
              style={{
                color: '#F5F5DC',
                fontFamily: 'Lucida Calligraphy, cursive',
                fontStyle: 'italic',
              }}
            >
          Anushkaa Ramanatan
        </h1>

        <p className="text-base md:text-2xl mb-8 text-center leading-relaxed fade-in" style={{ animationDelay: '0.3s', fontFamily: 'Lucida Calligraphy, cursive', letterSpacing: '1px', fontWeight: 500, color: '#F5F5DC' }}>
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
              <button onClick={() => setShowFullDesc(true)} className="underline font-semibold ml-1" style={{ fontFamily: 'Lucida Calligraphy, cursive', color: '#F5F5DC' }}>Read more</button>
            </>
          )}
        </p>
        {showFullDesc && (
          <button onClick={() => setShowFullDesc(false)} className="underline font-semibold mb-4" style={{ fontFamily: 'Lucida Calligraphy, cursive', color: '#F5F5DC' }}>Show less</button>
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