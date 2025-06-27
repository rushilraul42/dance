const notablePerformances = [
  "The Cotton Association of India, 2022",
  "Hindu Mahila Sabha, Pune 2022",
  "‘YATRA’ final dance season of NCPA, 2023",
  "‘Made in India Swadeshi Runway DR. APJ Abdul Kalam Awards’, 2023",
  "The G20 summit in Mumbai, 2023",
  "The Sindhu Festival as a part of Vaibhav Arekar’s tribute to Kanak Rele ‘the eternal Mohini’, 2023",
  "The Kalaghoda Arts Festival, Mumbai with Sandip Soparrkar & troupe for his work ‘PAVITRA TULSI’, 2024",
  "Nalanda Nrityotsava, 2025",
  "Shanmukhapriya's Natyanjali",
  "'Aavaahana' alongside Dr. Smt. Uma Rele at NCPA Mumbai.",
  "'Hare Krishna Festival' at ISKCON, Mumbai."
];

const NotablePerformances = () => (
  <section className="py-20 bg-gradient-to-br from-[#111A19] to-[#284139]/20">
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-12 fade-in">
        <div className="text-5xl mb-4 text-[#BB6830] bounce-animation">🌟</div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#F8D794] mb-4 highlight">Notable Performances</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#BB6830] to-[#284139] mx-auto rounded-full"></div>
      </div>
      <ul className="space-y-6 text-lg text-[#809076]">
        {notablePerformances.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
            <span className="text-[#BB6830] font-bold mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default NotablePerformances;
