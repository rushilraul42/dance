import React, { useEffect, useRef } from "react";

const DanceSchool = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play video on component mount
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video autoplay failed:', error);
          // Fallback: show background image instead
          const fallbackDiv = document.querySelector('.video-fallback');
          if (fallbackDiv) {
            fallbackDiv.style.display = 'block';
            video.style.display = 'none';
          }
        });
      }
    }
  }, []);

  return (
  <>
    <section style={{ background: '#EFDFBB', color: '#722F37' }} className="pt-20 mt-20 pb-20">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12 fade-in">
        <div className="text-5xl mb-4 text-[#722F37] bounce-animation">🏛️</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 highlight" style={{ color: '#722F37' }}>Abhinita School of Dance</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#722F37] to-[#722F37] mx-auto rounded-full"></div>
      </div>

      {/* School Description with Video Background */}
      <div className="relative space-y-8 text-lg leading-relaxed mt-8 p-8 rounded-2xl overflow-hidden border-2 border-[#722F37]">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(1.7)' }}
        >
          <source src="/1.mp4" type="video/mp4" />
          {/* Fallback image for devices that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Fallback background image for mobile devices */}
        <div 
          className="video-fallback absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/display.jpg")',
            filter: 'brightness(1.2)',
            display: 'none'
          }}
        ></div>

        {/* Dark overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 bg-opacity-80 z-1"></div>

        <p className="relative z-10 fade-in text-white font-semibold" style={{ animationDelay: '0.1s', fontFamily: 'Lucida Calligraphy, serif', fontStyle: 'italic' }}>
          Abhinita School of Dance, affiliated with the renowned <span className="text-white font-semibold">Nalanda Dance Research Centre</span>,
          offers a certified course in Bharatanatyam — one of the most graceful and ancient classical dance forms of India. The school is
          dedicated to providing authentic and traditional training while making the learning process enjoyable and meaningful.
        </p>

        <p className="relative z-10 fade-in text-white font-semibold" style={{ animationDelay: '0.2s', fontFamily: 'Lucida Calligraphy, serif', fontStyle: 'italic' }}>
          Led by <span className="text-white font-semibold">Anushkaa Ramanatan</span>, the classes focus deeply on the technique of dancing,
          with attention to even the tiniest details. Alongside movement training, students also learn allied subjects like <span className="text-white">History of dance</span>, <span className="text-white">Indian mythology</span>, <span className="text-white">Sanskrit shlokas</span>, <span className="text-white">Talam (rhythm)</span>, <span className="text-white">basic concepts of Music</span>, and <span className="text-white">Abhinaya (expressions)</span>, helping them understand the magnanimity and cultural richness behind the art.
        </p>

        <p className="relative z-10 fade-in text-white font-semibold" style={{ animationDelay: '0.3s', fontFamily: 'Lucida Calligraphy, serif', fontStyle: 'italic' }}>
          What makes Abhinita School Of Dance truly special is its <span className="text-white font-semibold">warm and lively classroom environment</span>. While students are trained with discipline and structure, the classes are fun, engaging, and thoughtfully designed to spark creativity and passion.
        </p>

        <p className="relative z-10 fade-in text-center bg-[#11111]/40 p-6 rounded-2xl border border-[#722F37]/30 text-white font-black" style={{ animationDelay: '0.4s', fontFamily: 'Lucida Calligraphy, serif', fontStyle: 'italic' }}>
          <span className="text-white font-black text-xl">Our Goal:</span><br />
          The goal is not just to teach Bharatanatyam, but to help each student fall in love with it — to explore their roots, embrace Indian
          culture, and grow into expressive, confident, and well-rounded individuals.
        </p>
      </div>
    </div>
  </section>

  {/* Reviews Section - New section with different background */}
  <section style={{ background: 'linear-gradient(135deg, #722F37 0%, #5a2529 100%)', color: '#EFDFBB' }} className="py-20">
    <div className="max-w-6xl mx-auto px-4">
      {/* Reviews Section */}
      <div className="mb-20">
        <div className="text-center mb-12 fade-in">
          <div className="text-5xl mb-4 text-[#EFDFBB] bounce-animation">💬</div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#EFDFBB] mb-4 highlight">What Parents Say</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#EFDFBB] to-[#EFDFBB] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Review 1 */}
          <div className="bg-[#EFDFBB]/95 p-6 rounded-2xl border border-[#EFDFBB]/30 fade-in shadow-lg" style={{ animationDelay: '0.5s' }}>
            <p className="text-[#722F37] leading-relaxed mb-4 italic">
              "Anushka is not only an incredibly graceful dancer but also teaches dance to a group of girls under 10, including my daughter. She is patient, understanding, and deeply dedicated to her students. Despite the many dance academies in the area, Anushka's humble and disciplined approach to the art form sets her apart. I wholeheartedly recommend her to anyone seeking a Bharatanatyam instructor."
            </p>
            <p className="text-[#722F37] font-semibold text-right">- Amitha Nayak</p>
          </div>

          {/* Review 2 */}
          <div className="bg-[#EFDFBB]/95 p-6 rounded-2xl border border-[#EFDFBB]/30 fade-in shadow-lg" style={{ animationDelay: '0.6s' }}>
            <p className="text-[#722F37] leading-relaxed mb-4 italic">
              "Anushkaa has been learning music from me for the past 5 years. She is not only a good Bharatanatyam dancer but also good at Carnatic music. She takes classes of small children under my guidance. She is very good and teaches them with patience and love. Recently she has given her music exam and has passed with flying colours."
            </p>
            <p className="text-[#722F37] font-semibold text-right">- Geetha Ramaswamy</p>
          </div>

          {/* Review 3 */}
          <div className="bg-[#EFDFBB]/95 p-6 rounded-2xl border border-[#EFDFBB]/30 fade-in shadow-lg" style={{ animationDelay: '0.7s' }}>
            <p className="text-[#722F37] leading-relaxed mb-4 italic">
              "My daughter has been learning dance online from Anushka for the past 2-3 years and she has been a wonderful teacher, especially teaching with so much of patience. I would really recommend her and wish her Abhinita School of Dance grows every year with more students. My best wishes to her 👍"
            </p>
            <p className="text-[#722F37] font-semibold text-right">- Narasimhan Krishnamachari</p>
          </div>

          {/* Review 4 */}
          <div className="bg-[#EFDFBB]/95 p-6 rounded-2xl border border-[#EFDFBB]/30 fade-in shadow-lg" style={{ animationDelay: '0.8s' }}>
            <p className="text-[#722F37] leading-relaxed mb-4 italic">
              "My daughter is learning bharatnatyam from anushka. She is a passionate teacher and my daughter loves her class and eagerly waits for the class which is not usual with her. She engages them very patiently which is very much required with kids. Looking forward for a great bharatnatyam dancer in my daughter."
            </p>
            <p className="text-[#722F37] font-semibold text-right">- Swapna Chiluveru</p>
          </div>

          {/* Review 5 */}
          <div className="bg-[#EFDFBB]/95 p-6 rounded-2xl border border-[#EFDFBB]/30 fade-in shadow-lg" style={{ animationDelay: '0.9s' }}>
            <p className="text-[#722F37] leading-relaxed mb-4 italic">
              "I wish to extend my heartfelt thanks for your patience to handle my 5yr old kid and for sharing your passion with her. Personal attention and lot of patience with utmost grace. My daughter is in love with this dance form and her dance teacher. Thank you Anushka for bringing such a powerful change. Must recommend."
            </p>
            <p className="text-[#722F37] font-semibold text-right">- Divya Venkatesh</p>
          </div>

          {/* Review 6 */}
          <div className="bg-[#EFDFBB]/95 p-6 rounded-2xl border border-[#EFDFBB]/30 fade-in shadow-lg" style={{ animationDelay: '1.0s' }}>
            <p className="text-[#722F37] leading-relaxed mb-4 italic">
              "Anushkaa is an excellent, graceful, most expressive dancer whose performance totally mesmerises the audience watching her. She's definitely a trustworthy teacher whose knowledge and legacy should surely be passed on to the next generation."
            </p>
            <p className="text-[#722F37] font-semibold text-right">- Jayashree</p>
          </div>

          {/* Review 7 */}
          <div className="bg-[#EFDFBB]/95 p-6 rounded-2xl border border-[#EFDFBB]/30 fade-in shadow-lg md:col-span-2" style={{ animationDelay: '1.1s' }}>
            <p className="text-[#722F37] leading-relaxed mb-4 italic text-center max-w-3xl mx-auto">
              "Anushka has been practicing bharathanatyam for almost 2 decades. Not only she is an academically qualified professional, she has many attributes of a good teacher such as discipline, passion towards the art, a keen sense for helping students to learn quickly and inspiring young ones to take up dancing as a profession as well as a passion."
            </p>
            <p className="text-[#722F37] font-semibold text-right md:text-center">- Akhila</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default DanceSchool;
