const awards = [
  "Nalanda 'Academic Excellence' award for securing 1st Rank in 5 consecutive years",
  "Nalanda 'Nritya Nipuna', 2025",
  "Vasudev Nrutya Kala Manch - All India National Dance Competition - 2nd Prize",
  "Akhil Natarajam Sanskrut Sangh - Online Dance Competition (Season 3) - 1st Prize",
  "'Visions Fest', SIES College - 1st Prize"
];

const honoursImages = [
  '/h1.jpg',
  '/h2.jpg'
];

const Awards = () => (
  <section className="py-20 bg-gradient-to-br from-[#111A19] to-[#284139]/20">
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-12 fade-in">
        <div className="text-5xl mb-4 text-[#BB6830] bounce-animation">🏆</div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#F8D794] mb-4 highlight">Awards</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#BB6830] to-[#284139] mx-auto rounded-full"></div>
      </div>
      <ul className="space-y-6 text-lg text-[#809076] mb-16">
        {awards.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
            <span className="text-[#BB6830] font-bold mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="text-center mb-8 fade-in">
        <h3 className="text-3xl font-bold text-[#F8D794] mb-6 highlight">Honours</h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {honoursImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Honour ${idx + 1}`}
              className="rounded-2xl shadow-lg border border-[#809076]/20 max-w-xs w-full object-cover"
              style={{ maxHeight: '340px' }}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Awards;
