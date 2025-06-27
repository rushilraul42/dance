import { useState, useEffect, useRef } from 'react';

const images = [
  '/display.jpg',
  '/display2.jpg',
  '/display3.jpg',
  '/display4.jpg',
  '/display5.jpg',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
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
    <section className="w-full min-h-screen flex flex-col items-center justify-start pt-0 pb-0 bg-gradient-to-br from-[#284139] to-[#111A19] fade-in">
      {/* Carousel: full screen on mobile, centered on desktop */}
      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[90vh] max-h-[800px] flex items-center justify-center overflow-hidden bg-[#111A19] shadow-2xl">
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#F8D794]/90 hover:bg-[#BB6830] hover:text-[#F8D794] text-[#284139] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover-lift"
          aria-label="Previous image"
        >
          <span className="text-xl font-bold">&#8592;</span>
        </button>
        <img
          src={images[current]}
          alt={`Performance ${current + 1}`}
          className="w-full h-full object-contain md:object-contain bg-[#111A19] select-none transition-all duration-700 ease-in-out scale-in"
          style={{
            maxHeight: '100%',
            minHeight: '320px',
            opacity: 1,
            transition: 'opacity 0.7s, transform 0.7s',
          }}
        />
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#F8D794]/90 hover:bg-[#BB6830] hover:text-[#F8D794] text-[#284139] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover-lift"
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
                  ? 'bg-[#BB6830] shadow-lg scale-110' 
                  : 'bg-[#F8D794]/60 hover:bg-[#F8D794]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Description and Resume: further below the fold on mobile, visible on desktop */}
      <div className="w-full max-w-xl mx-auto flex flex-col items-center bg-gradient-to-br from-[#284139]/90 to-[#111A19]/90 backdrop-blur rounded-t-2xl p-8 md:p-12 shadow-2xl mt-24 sm:mt-8 -translate-y-8 sm:translate-y-0 border border-[#809076]/20 slide-in-left">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F8D794] mb-4 text-center highlight text-reveal">Elena Martinez</h1>
        <p className="text-lg md:text-xl text-[#809076] mb-8 text-center leading-relaxed fade-in" style={{animationDelay: '0.3s'}}>
          Anushkaa Ramanatan is a Bharatanatyam practitioner and performer bringing classical dance to life with passion and precision.
        </p>
        <a
          href="/ArtisteBiography.pdf"
          download
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BB6830] to-[#284139] hover:from-[#284139] hover:to-[#BB6830] text-[#F8D794] font-bold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl btn-primary scale-in"
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