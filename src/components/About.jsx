import React, { useState, useEffect } from 'react';

const About = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [modalImg, setModalImg] = useState(null);

  // Performances data
  const performances = [
    {
      title: 'Subhashita | Bharatanatyam',
      href: 'https://youtu.be/Psqpo_fyjNo?si=jcHVNSN3PaEarTnp',
      description: 'An amusing conversation between Goddess Parvati and Goddess Lakshmi. '
    },
    {
      title: 'Vasantha Pushpanjali | Bharatanatyam',
      href: 'https://youtu.be/uEbwutQ4cMA?si=3IalsQCbSubBZ0wL',
      description: 'A beautiful Bharatanatyam performance by our instructor'
    },
  ];

  const notablePerformances = [
    "The Cotton Association of India, 2022",
    "Hindu Mahila Sabha, Pune 2022",
    "'YATRA' final dance season of NCPA, 2023",
    "'Made in India Swadeshi Runway DR. APJ Abdul Kalam Awards', 2023",
    "The G20 summit in Mumbai, 2023",
    "The Sindhu Festival as a part of Vaibhav Arekar's tribute to Kanak Rele 'the eternal Mohini', 2023",
    "The Kalaghoda Arts Festival, Mumbai with Sandip Soparrkar & troupe for his work 'PAVITRA TULSI', 2024",
    "Nalanda Nrityotsava, 2025",
    "Shanmukhapriya's Natyanjali",
    "'Aavaahana' alongside Dr. Smt. Uma Rele at NCPA Mumbai.",
    "'Hare Krishna Festival' at ISKCON, Mumbai."
  ];

  // Awards data
  const awards = [
    "Nalanda 'Academic Excellence' award for 1st rank in 5 consecutive years.",
    "Nalanda 'Nritya Nipuna', 2025.",
    "Vasudev Nrutya Kala Manch - All India National Dance Competition - 2nd Prize.",
    "Akhil Natarajam Sanskrut Sangh - Online Dance Competition (Season 3) - 1st Prize.",
    "'Visions Fest', SIES College - 1st Prize."
  ];

  const honoursImages = [
    '/h0.jpg',
    '/h2.jpg'
  ];

  // Gallery data
  const galleryImages = [
    { src: '/gallery/g1.jpg', alt: '"Pavitra Tulsi"- performed with renowned dancer & choreographer Sandip Soparrkar.' },
    { src: '/gallery/g2.jpg', alt: 'As a judge at "Namo Chashak", 2024.' },
    { src: '/gallery/g3.jpg', alt: 'With Guru G. Venu at "Navarasotsava 2024".' },
    { src: '/gallery/g4.jpg', alt: '"Annual Day 2025" - Proud 3rd Year teacher at Nalanda Dance Research Centre.' },
  ];

  // Gallery hover effects
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
    <div className="w-full">
      {/* Performances Section */}
      <section style={{ background: '#EFDFBB', color: '#0C0C0C' }} className="py-20 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Performances Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-gradient-glow text-[#722F37]" style={{ fontFamily: 'Lucida Calligraphy, serif', fontStyle: 'italic' }}>Notable Performances</h2>
            <p className="text-xl mb-6 leading-relaxed animate-gradient-glow text-[#722F37]">Watch our talented instructor in action</p>
          </div>

          {/* Notable Performances List */}
          <div className="bg-[#722F37] rounded-2xl p-8 shadow-lg mb-16">
            <ul className="space-y-6 text-lg max-w-3xl mx-auto" style={{ fontFamily: 'Lucida Calligraphy, serif', fontStyle: 'italic', color: '#EFDFBB' }}>
              {notablePerformances.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                  <span className="text-[#EFDFBB] font-bold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Performance Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {performances.map((performance, index) => {
              const videoId = performance.href?.split('youtu.be/')[1]?.split('?')[0] || '';
              const isPlaying = playingVideo === index;
              
              return (
                <div
                  key={index}
                  className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden group border border-[#722F37]/30 hover:border-[#722F37]/70 card-hover stagger-item"
                  style={{animationDelay: `${index * 0.2}s`, backgroundColor: '#722F37'}}
                >
                  <div className="relative h-64 overflow-hidden">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                        title={performance.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img
                          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                          alt={performance.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#722F37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <button 
                            onClick={() => setPlayingVideo(index)}
                            className="w-20 h-20 rounded-full bg-[#EFDFBB]/95 flex items-center justify-center text-4xl text-[#722F37] shadow-2xl hover:scale-110 transition-transform duration-300 pulse-animation"
                          >
                            ▶️
                          </button>
                        </div>
                        {/* Always visible play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button 
                            onClick={() => setPlayingVideo(index)}
                            className="w-16 h-16 rounded-full bg-[#EFDFBB]/90 flex items-center justify-center text-2xl text-[#722F37] shadow-xl hover:scale-110 transition-all duration-300 hover:bg-[#EFDFBB]"
                          >
                            ▶️
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#EFDFBB' }}>{performance.title}</h3>
                    <p className="leading-relaxed" style={{ fontFamily: 'Lucida Calligraphy, cursive', fontStyle: 'italic', color: '#EFDFBB' }}>{performance.description}</p>
                    {isPlaying && (
                      <button 
                        onClick={() => setPlayingVideo(null)}
                        className="mt-4 px-4 py-2 bg-[#EFDFBB] text-[#722F37] rounded-lg hover:bg-white transition-colors duration-300 font-semibold"
                      >
                        Close Video
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section style={{ background: '#222', color: '#ECE7E2', position: 'relative', overflow: 'hidden' }} className="pt-20 py-20 md:min-h-screen">
        {/* Blurred background image */}
        <img
          src="/awardpc.jpg"
          alt="Awards Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
            filter: 'brightness(0.7)',
            opacity: 0.6,
            pointerEvents: 'none',
          }}
          className="absolute block"
        />
        <div className="max-w-3xl mx-auto px-4 pt-32" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center mb-12 fade-in mt-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 highlight" style={{ color: '#ECE7E2' }}>Awards</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ background: '#ECE7E2' }}></div>
          </div>
          <ul className="space-y-6 text-lg md:text-3xl mb-16" style={{ fontFamily: 'Lucida Calligraphy, Narziss, serif', fontStyle: 'italic', letterSpacing: '1px', fontWeight: 400, textAlign: 'center' }}>
            {awards.map((item, idx) => (
              <li key={idx} className="fade-in" style={{ animationDelay: `${idx * 0.1}s`, color: '#ECE7E2', display: 'block' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mentions Section */}
      <section style={{ background: '#EFDFBB', position: 'relative', overflow: 'visible', paddingBottom: '5rem' }} className="py-10"> 
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8 fade-in">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 highlight" style={{ color: '#722F37' }}>Mentions</h3>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <div style={{
                background: '#722F37',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(0.9px)',
                WebkitBackdropFilter: 'blur(0.9px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '2rem',
                width: '100%',
                maxWidth: '700px',
                color: '#ECE7E2',
                margin: '0 auto',
                textAlign: 'center',
              }}>
                <div className="flex flex-col gap-6">
                  {honoursImages.map((img, idx) => (
                    <React.Fragment key={img}>
                      <img
                        src={img}
                        alt={`Mention ${idx + 1}`}
                        className="rounded-2xl shadow-lg border max-w-xs w-full object-cover mx-auto cursor-pointer"
                        style={{ maxHeight: '340px', borderColor: '#ECE7E2' }}
                        onClick={() => setModalImg(img)}
                      />
                      <div style={{
                        fontFamily: 'Narziss, serif',
                        fontSize: '1.5rem',
                        letterSpacing: '1px',
                        fontWeight: 400,
                        color: '#EFDFBB'
                      }}>
                        {idx === 0 && "My performance at 'Nritya Tarangini Utsav' 2024."}
                        {idx === 1 && "'Narthaki' magazine's newsletter mentions the awardees of Nalanda Nritya Nipuna"}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        className="w-full min-h-screen py-20 px-4"
        style={{ 
          backgroundColor: '#F5F5DC',
          color: '#0C0C0C'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in mt-20">
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
      </section>

      {/* Modal for expanded image */}
      {modalImg && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Expanded" style={{
            maxHeight: '90vh',
            maxWidth: '90vw',
            borderRadius: '1rem',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
          }} />
        </div>
      )}

      <style jsx>{`
        .gallery-card.is-active,
        .gallery-card:hover {
          opacity: 1 !important;
        }
        
        .gallery-card:hover {
          flex-basis: 30% !important;
        }
      `}</style>
    </div>
  );
};

export default About;