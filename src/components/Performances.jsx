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

  return (
    <section style={{ background: '#4A7766', color: '#ECE7E2' }} className="py-20 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Performances Header */}
        <div className="text-center mb-16 fade-in">
          <div className="text-5xl mb-4 animate-gradient-glow">▶️</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-gradient-glow" style={{ fontFamily: 'Narziss, serif', fontStyle: 'italic' }}>Performances</h2>
          <p className="text-xl mb-6 leading-relaxed animate-gradient-glow">Watch our talented instructor in action</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#B06A37] to-[#FFF4E9] mx-auto rounded-full"></div>
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

        {/* Notable Performances Section */}
        <div className="text-center mb-12 fade-in">
          <div className="text-5xl mb-4 text-[#F8D794] bounce-animation">🌟</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8D794] mb-4 highlight">Notable Performances</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F8D794] to-[#C59C79] mx-auto rounded-full"></div>
        </div>
        <ul className="space-y-6 text-lg text-[#ECE7E2] max-w-3xl mx-auto">
          {notablePerformances.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
              <span className="text-[#C59C79] font-bold mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Performances;