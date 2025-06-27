const Register = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#111A19] to-[#284139]/30 py-20 px-4 text-center">
      <div className="max-w-2xl mx-auto fade-in">
        <div className="text-6xl mb-8 text-[#BB6830] bounce-animation">🎭</div>
        <h1 className="text-5xl md:text-6xl font-bold text-[#F8D794] mb-6 highlight text-reveal">
          Register for Classes
        </h1>
        <p className="text-xl md:text-2xl text-[#809076] mb-12 max-w-xl mx-auto leading-relaxed slide-in-left" style={{animationDelay: '0.3s'}}>
          Join our dance community and start your transformative journey today!
        </p>
        
        <div className="bg-[#284139]/40 rounded-2xl p-8 shadow-2xl border border-[#809076]/20 mb-8 scale-in" style={{animationDelay: '0.5s'}}>
          <h3 className="text-2xl font-bold text-[#F8D794] mb-4">What You'll Get:</h3>
          <ul className="text-left space-y-3 text-[#809076] text-lg">
            {[
              'Expert instruction from certified professionals',
              'Personalized attention and guidance',
              'Access to exclusive workshops and events',
              'Supportive community of fellow dancers',
              'Performance opportunities'
            ].map((benefit, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 stagger-item hover:text-[#F8D794] transition-colors duration-300"
                style={{animationDelay: `${0.7 + index * 0.1}s`}}
              >
                <span className="text-[#BB6830] font-bold mt-1">✨</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <a
          href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#BB6830] to-[#284139] hover:from-[#284139] hover:to-[#BB6830] text-[#F8D794] font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 btn-primary text-xl scale-in"
          style={{animationDelay: '1.2s'}}
        >
          <span className="text-2xl">📝</span>
          Fill Out Registration Form
        </a>
        
        <p className="text-[#809076] mt-6 fade-in" style={{animationDelay: '1.4s'}}>
          Questions? Contact us at <span className="text-[#BB6830] font-semibold">info@dancestudio.com</span>
        </p>
      </div>
    </section>
  );
};

export default Register;