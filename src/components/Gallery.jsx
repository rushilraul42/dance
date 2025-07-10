const Gallery = () => {
  const galleryImages = [
    { src: '/gallery/g1.jpg', alt: '"Pavitra Tulsi"- performed with renowned dancer & choreographer Sandip Soparrkar.' },
    { src: '/gallery/g2.jpg', alt: 'As a judge at "Namo Chashak", 2024.' },
    { src: '/gallery/g3.jpg', alt: 'With Guru G. Venu at "Navarasotsava 2024".' },
    { src: '/gallery/g4.jpg', alt: '"Annual Day 2025" - Proud 3rd Year teacher at Nalanda Dance Research Centre.' },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-20">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {galleryImages.filter((_, index) => index % 2 === 0).map((image, index) => (
              <div
                key={index * 2}
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

          {/* Right Column - Shifted Down */}
          <div className="flex flex-col gap-8" style={{ marginTop: '150px' }}>
            {galleryImages.filter((_, index) => index % 2 === 1).map((image, index) => (
              <div
                key={index * 2 + 1}
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
    </section>
  );
};

export default Gallery;
