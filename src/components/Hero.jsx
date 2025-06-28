import { useState, useEffect, useRef } from 'react';

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
  const timeoutRef = useRef(null);

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
    <section className="w-full min-h-screen flex flex-col items-center justify-start pt-0 pb-0 fade-in" style={{ background: '#000' }}>
      {/* Carousel: take more space on mobile, nearly full screen */}
      <div className="relative w-full h-[92vh] sm:h-[80vh] md:h-[90vh] max-h-[900px] flex items-center justify-center overflow-hidden bg-[#ECE7E2] shadow-2xl">
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
          className="w-full h-full object-cover md:object-contain bg-[#ECE7E2] select-none transition-all duration-700 ease-in-out scale-in"
          style={{
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
        {/* Dots for all screens, but overlayed on image for mobile */}
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
      
      {/* Description and Resume: further below the fold on mobile, visible on desktop */}
      <div className="w-full max-w-xl mx-auto flex flex-col items-center glass">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4A7766] mb-4 text-center highlight text-reveal">Anushkaa Ramanatan</h1>
        <p className="text-lg md:text-xl text-[#4A7766] mb-8 text-center leading-relaxed fade-in" style={{animationDelay: '0.3s'}}>
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
              <button onClick={() => setShowFullDesc(true)} className="text-[#4A7766] underline font-semibold ml-1">Read more</button>
            </>
          )}
        </p>
        {showFullDesc && (
          <button onClick={() => setShowFullDesc(false)} className="text-[#4A7766] underline font-semibold mb-4">Show less</button>
        )}
        <a
          href="/ArtisteBiography.pdf"
          download
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C59C79] to-[#4A7766] hover:from-[#4A7766] hover:to-[#C59C79] text-[#ECE7E2] font-bold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl btn-primary scale-in"
          style={{animationDelay: '0.5s'}}
        >
          <span className="text-xl">📄</span>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;