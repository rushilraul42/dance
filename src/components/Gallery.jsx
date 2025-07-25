import { useEffect } from 'react';

const Gallery = () => {
  const galleryImages = [
    { src: '/gallery/g1.jpg', alt: '"Pavitra Tulsi"- performed with renowned dancer & choreographer Sandip Soparrkar.' },
    { src: '/gallery/g2.jpg', alt: 'As a judge at "Namo Chashak", 2024.' },
    { src: '/gallery/g3.jpg', alt: 'With Guru G. Venu at "Navarasotsava 2024".' },
    { src: '/gallery/g4.jpg', alt: '"Annual Day 2025" - Proud 3rd Year teacher at Nalanda Dance Research Centre.' },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".gallery-card");

    // Add "is-active" class to all cards initially
    cards.forEach(card => card.classList.add("is-active"));

    const handleMouseEnter = (event) => {
      const card = event.target.closest(".gallery-card");
      if (card) {
        cards.forEach(c => c.classList.remove("is-active"));
        card.classList.add("is-active");
      }
    };

    const handleMouseLeave = (event) => {
      const card = event.target.closest(".gallery-card");
      if (card) {
        cards.forEach(c => c.classList.add("is-active"));
      }
    };

    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <section
      className="w-full min-h-screen py-20 px-4"
      style={{ 
        backgroundColor: '#F5F5DC',
        color: '#0C0C0C'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in mt-20 ">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 highlight" style={{ color: '#722F37' }}>
            Dance Gallery
          </h2>
          <p className="text-xl mb-6 leading-relaxed" style={{ color: '#0C0C0C' }}>
            Capturing moments of grace, passion, and artistic expression
          </p>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: '#722F37' }}></div>
        </div>

        {/* Desktop Gallery Layout */}
        <div className="hidden md:block">
          <div 
            className="gallery-container flex max-w-full mx-auto overflow-auto items-start justify-center"
            style={{ padding: '0 3rem' }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`gallery-card flex-1 relative transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-20 hover:opacity-100 ${
                  index === 1 || index === 3 ? 'mt-[2.5%]' : 
                  index === 2 ? 'mt-[5%]' : 'mt-0'
                }`}
                style={{
                  flexBasis: '1%',
                  transition: 'flex 600ms cubic-bezier(0.25, 1, 0.5, 1), opacity 250ms ease'
                }}
              >
                <div 
                  className="card-inner m-1 bg-white rounded-lg flex justify-center items-center overflow-hidden"
                  style={{ background: '#722F37' }}
                >
                  <div className="relative w-full overflow-hidden" style={{ paddingBottom: '600px' }}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 transform translate-y-full opacity-0 transition-all duration-300 hover:translate-y-0 hover:opacity-100">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Gallery Layout - Keep original for mobile */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                style={{
                  background: '#722F37',
                  borderColor: '#722F37',
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: 'brightness(0.9)' }}
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 fade-in">
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#0C0C0C' }}>
            Each image tells a story of dedication, artistry, and the transformative power of dance. 
            Join us to create your own beautiful moments in movement.
          </p>
        </div>
      </div>

      <style jsx>{`
        .gallery-card.is-active,
        .gallery-card:hover {
          opacity: 1 !important;
        }
        
        .gallery-card:hover {
          flex-basis: 30% !important;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
