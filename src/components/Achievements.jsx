const Achievements = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#111A19] to-[#809076]/20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Awards & Honours */}
        <div className="mb-16 slide-in-left">
          <div className="text-center mb-12">
            <div className="text-5xl mb-4 text-[#BB6830] bounce-animation">🏆</div>
            <h3 className="text-4xl md:text-5xl font-bold text-[#F8D794] mb-4 highlight">Awards & Honours</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BB6830] to-[#284139] mx-auto rounded-full"></div>
          </div>
          <div className="bg-[#284139]/40 rounded-2xl p-8 shadow-lg border border-[#809076]/20 hover:shadow-2xl transition-all duration-500 card-hover">
            <ul className="space-y-4">
              {[
                'Dr. APJ Abdul Kalam Award for Cultural Excellence',
                'NCPA Young Artist Scholarship',
                'ICCR Cultural Ambassador Award',
                'National Nritya Shiromani Award, 2023'
              ].map((award, index) => (
                <li 
                  key={index}
                  className="text-[#809076] text-lg leading-relaxed flex items-start gap-3 stagger-item hover:text-[#F8D794] transition-colors duration-300"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <span className="text-[#BB6830] font-bold mt-1 text-xl">🎖️</span>
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dance School */}
        <div className="slide-in-right">
          <div className="text-center mb-12">
            <div className="text-5xl mb-4 text-[#BB6830] float-animation">🎭</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8D794] mb-4 highlight">Dance School</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#BB6830] to-[#284139] mx-auto rounded-full"></div>
          </div>
          <div className="bg-[#284139]/40 rounded-2xl p-8 shadow-lg border border-[#809076]/20 hover:shadow-2xl transition-all duration-500 card-hover">
            <p className="text-xl text-[#809076] mb-8 leading-relaxed text-center fade-in">
              Elena's Dance Academy offers rigorous training in Bharatanatyam with emphasis on classical technique,
              cultural understanding, and performance confidence.
            </p>
            <ul className="space-y-4">
              {[
                'Weekly beginner and advanced classes',
                'Workshops with leading gurus and visiting artists',
                'Annual performance showcases and cultural events'
              ].map((item, index) => (
                <li 
                  key={index}
                  className="text-[#809076] text-lg leading-relaxed flex items-start gap-3 stagger-item hover:text-[#F8D794] transition-colors duration-300"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <span className="text-[#BB6830] font-bold mt-1 text-xl">✨</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;