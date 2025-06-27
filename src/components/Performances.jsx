import { useState } from 'react';

const Performances = () => {
  const performances = [
    {
      title: 'Subhashita | Bharatanatyam',
      href: 'https://youtu.be/Psqpo_fyjNo?si=jcHVNSN3PaEarTnp',
      description: 'Our annual spring showcase featuring all dance levels'
    },
    {
      title: 'Vasantha Pushpanjali | Bharatanatyam',
      href: 'https://youtu.be/uEbwutQ4cMA?si=3IalsQCbSubBZ0wL',
      description: 'A beautiful Bharatanatyam performance by our instructor'
    },
  ];

  return (
    <section style={{ background: '#4A7766', color: '#ECE7E2' }} className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Performances Header */}
        <div className="text-center mb-16 fade-in">
          <div className="text-5xl mb-4 text-[#4A7766] bounce-animation">▶️</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A7766] mb-4 highlight">Performances</h2>
          <p className="text-xl text-[#4A7766] mb-6 leading-relaxed">Watch our talented instructor in action</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4A7766] to-[#C59C79] mx-auto rounded-full"></div>
        </div>

        {/* Performance Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {performances.map((performance, index) => {
            const videoId = performance.href?.split('youtu.be/')[1]?.split('?')[0] || '';
            return (
              <a
                key={index}
                href={performance.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#284139]/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden group border border-[#809076]/20 hover:border-[#BB6830]/50 card-hover stagger-item"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={performance.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#284139]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-[#F8D794]/95 flex items-center justify-center text-4xl text-[#BB6830] shadow-2xl hover:scale-110 transition-transform duration-300 pulse-animation">
                      ▶️
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#F8D794] mb-3">{performance.title}</h3>
                  <p className="text-[#809076] leading-relaxed">{performance.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Performances;