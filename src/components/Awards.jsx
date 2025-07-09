import React from "react";

const awards = [
  "Nalanda 'Academic Excellence' award for 1st rank in 5 consecutive years.",
  "Nalanda 'Nritya Nipuna', 2025.",
  "Vasudev Nrutya Kala Manch - All India National Dance Competition - 2nd Prize.",
  "Akhil Natarajam Sanskrut Sangh - Online Dance Competition (Season 3) - 1st Prize.",
  "'Visions Fest', SIES College - 1st Prize."
];

const honoursImages = [
  '/h0.jpg',
  '/h2.jpg'
];

const Awards = () => (
  <section style={{ background: '#222', color: '#ECE7E2', position: 'relative', overflow: 'hidden' }} className="pt-20 py-20 mt-20 md:min-h-screen">
    {/* Blurred background image */}
    <img
      src={window.innerWidth >= 768 ? "/awardpc.jpg" : "/award.jpg"}
      alt="Awards Background"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        objectPosition: 'center',
        zIndex: 0,
        filter: window.innerWidth < 768 ? ' brightness(0.7)' : ' brightness(0.7)',
        opacity: 0.6,
        pointerEvents: 'none',
      }}
      className="absolute block"
    />
    <div className="max-w-3xl mx-auto px-4 pt-32" style={{ position: 'relative', zIndex: 1 }}>
      <div className="text-center mb-12 fade-in mt-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 highlight" style={{ color: '#ECE7E2' }}>Awards</h2>
        <div className="w-24 h-1 mx-auto rounded-full" style={{ background: '#ECE7E2' }}></div>
      </div>
      <ul className="space-y-6 text-lg mb-16" style={{ fontFamily: 'Lucida Calligraphy, Narziss, serif', fontStyle: 'italic', letterSpacing: '1px', fontWeight: 400, textAlign: 'center' }}>
        {awards.map((item, idx) => (
          <li key={idx} className="fade-in" style={{ animationDelay: `${idx * 0.1}s`, color: '#ECE7E2', display: 'block' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const Mentions = () => {
  const [modalImg, setModalImg] = React.useState(null);

  return (
    <section style={{ background: '#EFDFBB', position: 'relative', overflow: 'visible', paddingBottom: '5rem' }} className="py-10"> 
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 fade-in">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 highlight" style={{ color: '#EFDFBB' }}>Mentions</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div style={{
              background: '#722F37',
              borderRadius: '16px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(0.9px)',
              WebkitBackdropFilter: 'blur(0.9px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              padding: '2rem',
              width: '100%',
              maxWidth: '700px',
              color: '#ECE7E2',
              margin: '0 auto',
              textAlign: 'center',
            }}>
              <div className="flex flex-col gap-6">
                {honoursImages.map((img, idx) => (
                  <React.Fragment key={img}>
                    <img
                      src={img}
                      alt={`Mention ${idx + 1}`}
                      className="rounded-2xl shadow-lg border max-w-xs w-full object-cover mx-auto cursor-pointer"
                      style={{ maxHeight: '340px', borderColor: '#ECE7E2' }}
                      onClick={() => setModalImg(img)}
                    />
                    <div style={{
                      fontFamily: 'Narziss, serif',
                      fontSize: '1.5rem',
                      letterSpacing: '1px',
                      fontWeight: 400,
                      color: '#EFDFBB'
                    }}>
                      {idx === 1 && "My performance at 'Nritya Tarangini Utsav' 2024."}
                      {idx === 2 && "'Narthaki' magazine's newsletter mentions the awardees of Nalanda Nritya Nipuna"}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal for expanded image */}
        {modalImg && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }} onClick={() => setModalImg(null)}>
            <img src={modalImg} alt="Expanded" style={{
              maxHeight: '90vh',
              maxWidth: '90vw',
              borderRadius: '1rem',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            }} />
          </div>
        )}
      </div>
    </section>
  );
};

export default function AwardsAndMentions() {
  return (
    <>
      <Awards />
      <Mentions />
    </>
  );
}
