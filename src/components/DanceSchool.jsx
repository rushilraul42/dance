const DanceSchool = () => (
  <section style={{ background: '#4A7766', color: '#ECE7E2' }} className="py-20 mt-20">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12 fade-in">
        <div className="text-5xl mb-4 text-[#F8D794] bounce-animation">🏛️</div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#F8D794] mb-4 highlight">Abhinita School of Dance</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#F8D794] to-[#C59C79] mx-auto rounded-full"></div>
      </div>
      
      <div className="space-y-8 text-lg leading-relaxed">
        <p className="fade-in" style={{animationDelay: '0.1s'}}>
          Abhinita School of Dance, affiliated with the renowned <span className="text-[#F8D794] font-semibold">Nalanda Dance Research Centre</span>, offers a certified course in Bharatanatyam — one of the most graceful and ancient classical dance forms of India. The school is dedicated to providing authentic and traditional training while making the learning process enjoyable and meaningful.
        </p>
        
        <p className="fade-in" style={{animationDelay: '0.2s'}}>
          Led by <span className="text-[#F8D794] font-semibold">Anushkaa Ramanatan</span>, the classes focus deeply on the technique of dancing, with attention to even the tiniest details. Alongside movement training, students also learn allied subjects like <span className="text-[#C59C79]">History of dance</span>, <span className="text-[#C59C79]">Indian mythology</span>, <span className="text-[#C59C79]">Sanskrit shlokas</span>, <span className="text-[#C59C79]">Talam (rhythm)</span>, <span className="text-[#C59C79]">basic concepts of Music</span>, and <span className="text-[#C59C79]">Abhinaya (expressions)</span>, helping them understand the magnanimity and cultural richness behind the art.
        </p>
        
        <p className="fade-in" style={{animationDelay: '0.3s'}}>
          What makes Abhinita truly special is its <span className="text-[#F8D794] font-semibold">warm and lively classroom environment</span>. While students are trained with discipline and structure, the classes are fun, engaging, and thoughtfully designed to spark creativity and passion.
        </p>
        
        <p className="fade-in text-center bg-[#284139]/40 p-6 rounded-2xl border border-[#C59C79]/30" style={{animationDelay: '0.4s'}}>
          <span className="text-[#F8D794] font-bold text-xl">Our Goal:</span><br/>
          The goal is not just to teach Bharatanatyam, but to help each student fall in love with it — to explore their roots, embrace Indian culture, and grow into expressive, confident, and well-rounded individuals.
        </p>
      </div>
    </div>
  </section>
);

export default DanceSchool;
