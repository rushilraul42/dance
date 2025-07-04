const Insights = () => {
  return (
    <section style={{ background: '#4A7766', color: '#ECE7E2' }}>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16 fade-in">
          <div className="text-5xl mb-4" style={{ color: '#ECE7E2' }}>4a1</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 highlight" style={{ color: '#ECE7E2' }}>Dance Insights</h2>
          <p className="text-xl mb-6 leading-relaxed" style={{ color: '#ECE7E2' }}>Tips, techniques, and inspiration from our dance community</p>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: '#ECE7E2' }}></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 flex flex-col gap-8">
            <article className="p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-500 card-hover slide-in-left" style={{ background: '#4A7766', borderColor: '#ECE7E2' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#ECE7E2' }}>Building Confidence Through Movement</h3>
              <p className="mb-6 leading-relaxed text-lg" style={{ color: '#ECE7E2' }}>
                Dance is more than just physical movement—it's a powerful tool for building
                self-confidence and emotional expression. Through consistent practice and
                supportive guidance, students discover their unique artistic voice and
                develop the courage to express themselves authentically.
              </p>
              <div className="flex items-center gap-3 text-base" style={{ color: '#ECE7E2' }}>
                <span className="flex items-center gap-2">
                  <span style={{ color: '#C59C79' }}>464</span>
                  By Dance Instructor
                </span>
                <span>2 March 10, 2024</span>
              </div>
            </article>
            <article className="p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-500 card-hover slide-in-left" style={{ background: '#4A7766', borderColor: '#ECE7E2', animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#ECE7E2' }}>The Science Behind Dance and Memory</h3>
              <p className="mb-6 leading-relaxed text-lg" style={{ color: '#ECE7E2' }}>
                Recent studies show that learning dance choreography significantly improves
                cognitive function and memory retention. The combination of physical movement,
                rhythm, and spatial awareness creates new neural pathways that benefit overall
                brain health.
              </p>
              <div className="flex items-center gap-3 text-base" style={{ color: '#ECE7E2' }}>
                <span className="flex items-center gap-2">
                  <span style={{ color: '#C59C79' }}>464</span>
                  By Guest Writer
                </span>
                <span> 2 March 5, 2024</span>
              </div>
            </article>
          </div>
          <div className="flex flex-col gap-8">
            <div className="p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-500 card-hover slide-in-right" style={{ background: '#4A7766', borderColor: '#ECE7E2' }}>
              <div className="text-3xl mb-4" style={{ color: '#ECE7E2' }}>3c6</div>
              <h4 className="text-xl font-bold mb-4" style={{ color: '#ECE7E2' }}>Student Success Story</h4>
              <blockquote className="italic mb-4 leading-relaxed text-lg" style={{ color: '#ECE7E2' }}>
                "I started dancing here with no experience at all. The patient instruction
                and encouraging environment helped me not only learn to dance but also gain
                confidence in all areas of my life. It's been truly transformative."
              </blockquote>
              <cite className="not-italic text-base font-semibold" style={{ color: '#ECE7E2' }}>- Sarah M., Student</cite>
            </div>
            <div className="p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-500 card-hover slide-in-right" style={{ background: '#4A7766', borderColor: '#ECE7E2', animationDelay: '0.2s' }}>
              <div className="text-3xl mb-4" style={{ color: '#ECE7E2' }}>4a1</div>
              <h4 className="text-xl font-bold mb-4" style={{ color: '#ECE7E2' }}>Quick Tip</h4>
              <p className="leading-relaxed text-lg" style={{ color: '#ECE7E2' }}>
                <strong style={{ color: '#C59C79' }}>Practice Mindfully:</strong> Focus on the quality of your movements
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