const Insights = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#111A19] to-[#809076]/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <div className="text-5xl mb-4 text-[#BB6830] float-animation">💡</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8D794] mb-4 highlight">Dance Insights</h2>
          <p className="text-xl text-[#809076] mb-6 leading-relaxed">Tips, techniques, and inspiration from our dance community</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BB6830] to-[#284139] mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 flex flex-col gap-8">
            <article className="bg-[#284139]/40 p-8 rounded-2xl shadow-lg border border-[#809076]/20 hover:shadow-2xl transition-all duration-500 card-hover slide-in-left">
              <h3 className="text-2xl font-bold text-[#F8D794] mb-4">Building Confidence Through Movement</h3>
              <p className="text-[#809076] mb-6 leading-relaxed text-lg">
                Dance is more than just physical movement—it's a powerful tool for building
                self-confidence and emotional expression. Through consistent practice and
                supportive guidance, students discover their unique artistic voice and
                develop the courage to express themselves authentically.
              </p>
              <div className="flex items-center gap-3 text-base text-[#809076]">
                <span className="flex items-center gap-2">
                  <span className="text-[#BB6830]">👤</span>
                  By Dance Instructor
                </span>
                <span>• March 10, 2024</span>
              </div>
            </article>
            <article className="bg-[#284139]/40 p-8 rounded-2xl shadow-lg border border-[#809076]/20 hover:shadow-2xl transition-all duration-500 card-hover slide-in-left" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold text-[#F8D794] mb-4">The Science Behind Dance and Memory</h3>
              <p className="text-[#809076] mb-6 leading-relaxed text-lg">
                Recent studies show that learning dance choreography significantly improves
                cognitive function and memory retention. The combination of physical movement,
                rhythm, and spatial awareness creates new neural pathways that benefit overall
                brain health.
              </p>
              <div className="flex items-center gap-3 text-base text-[#809076]">
                <span className="flex items-center gap-2">
                  <span className="text-[#BB6830]">👤</span>
                  By Guest Writer
                </span>
                <span>• March 5, 2024</span>
              </div>
            </article>
          </div>
          <div className="flex flex-col gap-8">
            <div className="bg-[#284139]/40 p-8 rounded-2xl shadow-lg border border-[#809076]/20 hover:shadow-2xl transition-all duration-500 card-hover slide-in-right">
              <div className="text-3xl mb-4 text-[#BB6830] bounce-animation">🏆</div>
              <h4 className="text-xl font-bold text-[#F8D794] mb-4">Student Success Story</h4>
              <blockquote className="italic text-[#809076] mb-4 leading-relaxed text-lg">
                "I started dancing here with no experience at all. The patient instruction
                and encouraging environment helped me not only learn to dance but also gain
                confidence in all areas of my life. It's been truly transformative."
              </blockquote>
              <cite className="not-italic text-base text-[#809076] font-semibold">- Sarah M., Student</cite>
            </div>
            <div className="bg-[#284139]/40 p-8 rounded-2xl shadow-lg border border-[#809076]/20 hover:shadow-2xl transition-all duration-500 card-hover slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl mb-4 text-[#BB6830] pulse-animation">💡</div>
              <h4 className="text-xl font-bold text-[#F8D794] mb-4">Quick Tip</h4>
              <p className="text-[#809076] leading-relaxed text-lg">
                <strong className="text-[#BB6830]">Practice Mindfully:</strong> Focus on the quality of your movements
                rather than quantity. Even 15 minutes of mindful practice can be more
                beneficial than an hour of unfocused repetition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;