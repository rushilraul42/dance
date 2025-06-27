const Features = () => {
  const features = [
    {
      icon: '🏆',
      title: 'Expert Instruction',
      description: 'Learn from experienced professionals with years of performance and teaching expertise.'
    },
    {
      icon: '👥',
      title: 'Supportive Community',
      description: 'Join a welcoming community of dancers who support and inspire each other.'
    },
    {
      icon: '⭐',
      title: 'Personalized Growth',
      description: 'Tailored instruction that adapts to your skill level and personal goals.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#284139]/30 to-[#111A19]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8D794] mb-6 highlight">
            Experience the difference with our comprehensive dance education approach
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BB6830] to-[#284139] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#284139]/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-[#809076]/20 hover:border-[#BB6830]/50 card-hover stagger-item"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="text-6xl mb-6 text-[#BB6830] float-animation" style={{animationDelay: `${index * 0.5}s`}}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#F8D794] mb-4">{feature.title}</h3>
              <p className="text-[#809076] leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;