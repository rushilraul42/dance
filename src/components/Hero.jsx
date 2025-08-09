import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    
    /* Scroll-triggered animations */
    .scroll-fade-up {
      opacity: 0;
      transform: translateY(50px) scale(1.1);
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .scroll-fade-up.visible {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    
    .scroll-zoom-out {
      opacity: 0;
      transform: translateY(30px) scale(1.2);
      transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .scroll-zoom-out.visible {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    
    .dynamic-zoom-text {
      transition: transform 0.1s ease-out;
      transform-origin: center;
    }
    
    .stagger-animation {
      transition-delay: 0.2s;
    }
    
    .stagger-animation-2 {
      transition-delay: 0.4s;
    }
    
    .hero-bg-parallax {
      transition: transform 0.1s ease-out;
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
  const [scrollY, setScrollY] = useState(0);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [textZoomScale, setTextZoomScale] = useState(1);
  
  const timeoutRef = useRef(null);
  const descriptionRef = useRef(null);
  const footerRef = useRef(null);

  // Check if desktop on mount and resize
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    // Initialize AOS
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
      offset: 120
    });
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Handle scroll events for animations and zoom effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detect scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
      
      // Calculate zoom scale based on scroll position and description visibility
      if (descriptionRef.current && isDesktop) {
        const rect = descriptionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        setIsDescriptionVisible(isInView);
        
        if (isInView) {
          // Calculate scroll progress within the description section
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of the section is visible (0 to 1)
          const visibilityProgress = Math.max(0, Math.min(1, 
            (viewportHeight - sectionTop) / (viewportHeight + sectionHeight)
          ));
          
          // Create zoom effect based on scroll direction and progress
          let zoomScale;
          if (scrollDirection === 'down') {
            // Zoom out when scrolling down (scale from 1.2 to 0.9)
            zoomScale = 1.2 - (visibilityProgress * 0.3);
          } else {
            // Zoom in when scrolling up (scale from 0.9 to 1.2)
            zoomScale = 0.9 + (visibilityProgress * 0.3);
          }
          
          // Clamp the scale between 0.8 and 1.3 for smooth effect
          zoomScale = Math.max(0.8, Math.min(1.3, zoomScale));
          setTextZoomScale(zoomScale);
        }
      } else {
        // For mobile or when section is not in view
        setIsDescriptionVisible(currentScrollY > window.innerHeight * 0.5);
      }
      
      // Check if footer area is in view (simulate footer section)
      if (window.innerHeight + currentScrollY >= document.documentElement.scrollHeight * 0.85) {
        setIsFooterVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isDesktop]);

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
      <div className="block md:hidden relative w-full h-[92vh] sm:h-[80vh] max-h-[900px] flex items-center justify-center overflow-hidden shadow-2xl">
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
            maxWidth: '100%',
            width: '100%',
            height: '100%',
            opacity: 1,
            transition: 'opacity 0.7s, transform 0.7s',
            transform: current === 1 ? 'translateX(-2px)' : 'none'
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
        {/* Background Image - positioned on the right with parallax effect */}
        <div 
          className="absolute right-0 h-full hero-bg-parallax"
          style={{
            top: '0',
            width: '100%',
            backgroundImage: 'url(/display/desktopback6.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            minHeight: '1080px',
            transform: `translateY(${scrollY * 0.3}px)` // Parallax effect
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
      
      {/* Description Section - Clean Two-Column Layout with Scroll Animations */}
      <div 
        ref={descriptionRef}
        className="w-full -mt-6 md:mt-0"
        style={{ 
          background: 'linear-gradient(135deg, #722F37 0%, #8B3A42 50%, #722F37 100%)',
          color: '#F5F5DC',
          position: 'relative',
          minHeight: 'auto'
        }}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {/* Decorative background pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #F5F5DC 2px, transparent 2px), radial-gradient(circle at 75% 75%, #F5F5DC 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}
        ></div>

        <div className="max-w-xl md:max-w-7xl mx-auto flex flex-col items-center px-6 sm:px-8 py-8 relative z-10">
          {/* Description Section */}
          <div className="w-full max-w-6xl mb-6">
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
                  data-aos="fade-down"
                  data-aos-delay="200"
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
                  data-aos="flip-up"
                  data-aos-delay="400"
                >
                  ANUSHKAA RAMANATAN
                </h1>
              </div>

              {/* Desktop Layout - Two Column */}
              <div className="hidden md:flex md:items-start md:gap-16 lg:gap-24">
                {/* Left Column - About Heading */}
                <div className="flex-shrink-0 w-24 lg:w-32 -ml-4 lg:-ml-8">
                  <h2 
                    className="text-3xl lg:text-4xl font-bold dynamic-zoom-text"
                    style={{
                      color: '#F5F5DC',
                      fontFamily: 'Georgia, serif',
                      fontWeight: 'bold',
                      lineHeight: '1.2',
                      transform: `scale(${textZoomScale})`
                    }}
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    About me
                  </h2>
                </div>

                {/* Right Column - Content */}
                <div className="flex-1 max-w-4xl ml-8 lg:ml-16">
                  <p 
                    className="text-base md:text-lg mb-4 leading-relaxed dynamic-zoom-text" 
                    style={{ 
                      fontFamily: 'Georgia, serif', 
                      fontWeight: 400, 
                      color: '#F5F5DC', 
                      lineHeight: '1.6',
                      textAlign: 'justify',
                      transform: `scale(${textZoomScale})`
                    }}
                    data-aos="fade-left"
                    data-aos-delay="400"
                  >
                    {showFullDesc ? (
                      <>
                        Anushkaa Ramanatan is a Bharatanatyam practitioner and performer based in Mumbai. With over 15 years of rigorous traditional training, she began her journey at the hobby-class level and went on to pursue formal education in the art form. She earned her Bachelor's degree in Bharatanatyam from Nalanda Nritya Kala Mahavidyalaya, consistently securing the top rank throughout her course. She recently completed her Master of Performing Arts degree in Bharatanatyam from Nalanda.<br/><br/>
                        Anushkaa has been a part of various Nalanda productions and has performed extensively as a part of the Nalanda Troupe, gaining much experience and exposure. She served as the President of the Student Council Committee at her alma mater, a role that helped her develop skills across diverse areas of work. <br/><br/>
                        Three years ago, Anushkaa founded 'Abhinita School of Dance' that provides authentic and traditional training in Bharatanatyam. <br/><br/>
                        Anushkaa currently works as an independent performer and with actively nurturing and expanding her dance class.
                      </>
                    ) : (
                      <>
                        Anushkaa Ramanatan is a Bharatanatyam practitioner and performer based in Mumbai. With over 15 years of rigorous traditional training, she began her journey at the hobby-class level and went on to pursue formal education in the art form. <span style={{ fontWeight: 600 }}>... </span>
                        <button onClick={() => setShowFullDesc(true)} className="underline font-semibold ml-1" style={{ fontFamily: 'Georgia, serif', color: '#F5F5DC', fontSize: '1em' }}>Read more</button>
                      </>
                    )}
                  </p>
                  {showFullDesc && (
                    <div 
                      className="mb-4 dynamic-zoom-text"
                      style={{ transform: `scale(${textZoomScale})` }}
                      data-aos="slide-up"
                      data-aos-delay="800"
                    >
                      <button onClick={() => setShowFullDesc(false)} className="underline font-semibold" style={{ fontFamily: 'Georgia, serif', color: '#F5F5DC', fontSize: '1em' }}>Show less</button>
                    </div>
                  )}
                  
                  {/* Resume button for desktop */}
                  <div 
                    className="text-left dynamic-zoom-text"
                    style={{ transform: `scale(${textZoomScale})` }}
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  >
                    <a
                      href="/ArtisteBiography.pdf"
                      download
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-transform duration-300"
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
                <p 
                  className="text-lg mb-8 text-center leading-relaxed" 
                  style={{ 
                    fontFamily: 'Georgia, serif', 
                    fontWeight: 400, 
                    color: '#F5F5DC', 
                    lineHeight: '1.6'
                  }}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
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
                  <div 
                    className="text-center mb-4"
                    data-aos="slide-up"
                    data-aos-delay="800"
                  >
                    <button onClick={() => setShowFullDesc(false)} className="underline font-semibold" style={{ fontFamily: 'Georgia, serif', color: '#F5F5DC', fontSize: '1em' }}>Show less</button>
                  </div>
                )}
                <div 
                  className="text-center"
                  data-aos="zoom-out"
                  data-aos-delay="700"
                >
                  <a
                    href="/ArtisteBiography.pdf"
                    download
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: '#F5F5DC', color: '#722F37', fontFamily: 'Lucida Calligraphy, cursive', fontStyle: 'italic' }}
                  >
                    <span className="text-xl">📄</span>
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Section with Animation */}
          <div 
            ref={footerRef}
            className="w-full max-w-6xl text-center"
            style={{ paddingTop: '1rem' }}
          >
            <div data-aos="flip-down" data-aos-delay="1000">
              <div 
                className="flex justify-center items-center gap-4 opacity-60"
                data-aos="flip-left"
                data-aos-delay="1400"
              >
                <div className="w-12 h-0.5 bg-current"></div>
                <span style={{ fontFamily: 'Lucida Calligraphy, cursive' }}>✦</span>
                <div className="w-12 h-0.5 bg-current"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
