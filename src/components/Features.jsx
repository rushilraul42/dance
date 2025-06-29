const Features = () => {
  const features = [
    
   
  ];

  return (
    <section style={{ background: '#4A7766', color: '#ECE7E2' }} className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <div className="w-24 h-1 bg-gradient-to-r from-[#4A7766] to-[#C59C79] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#ECE7E2]/80 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-[#4A7766]/20 hover:border-[#C59C79]/50 card-hover stagger-item"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="text-6xl mb-6 text-[#4A7766] float-animation" style={{animationDelay: `${index * 0.5}s`}}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;