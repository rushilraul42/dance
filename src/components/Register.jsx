const Register = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-4 text-center" style={{ background: '#4A7766', color: '#ECE7E2' }}>
      <div className="max-w-2xl mx-auto fade-in">
        <div className="text-6xl mb-8" style={{ color: '#ECE7E2' }}>3ad</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 highlight text-reveal" style={{ color: '#ECE7E2' }}>
          Register for Classes
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-xl mx-auto leading-relaxed slide-in-left" style={{ color: '#ECE7E2', animationDelay: '0.3s' }}>
          Join our dance community and start your transformative journey today!
        </p>
        
        <div className="rounded-2xl p-8 shadow-2xl border mb-8 scale-in" style={{ background: '#4A7766', borderColor: '#ECE7E2', animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#ECE7E2' }}>What You'll Get:</h3>
          <ul className="text-left space-y-3 text-lg">
            {[
              'Expert instruction from certified professionals',
              'Personalized attention and guidance',
              'Access to exclusive workshops and events',
              'Supportive community of fellow dancers',
              'Performance opportunities'
            ].map((benefit, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 stagger-item hover:text-[#C59C79] transition-colors duration-300"
                style={{ animationDelay: `${0.7 + index * 0.1}s`, color: '#ECE7E2' }}
              >
                <span className="font-bold mt-1" style={{ color: '#C59C79' }}>728</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <a
          href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 btn-primary text-xl scale-in"
          style={{ background: '#ECE7E2', color: '#4A7766', animationDelay: '1.2s' }}
        >
          <span className="text-2xl">4dd</span>
          Fill Out Registration Form
        </a>
        
        <p className="mt-6 fade-in" style={{ color: '#ECE7E2', animationDelay: '1.4s' }}>
          Questions? Contact us at <span className="font-semibold" style={{ color: '#C59C79' }}>info@dancestudio.com</span>
        </p>
      </div>
    </section>
  );
};

export default Register;