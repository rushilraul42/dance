const Register = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 text-center"
      style={{ 
        background: '#F5F5DC !important', 
        color: '#0C0C0C',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div 
        className="max-w-2xl mx-auto fade-in w-full"
        style={{ background: 'transparent' }}
      >
        <h1
          className="text-5xl md:text-6xl font-bold mb-6 highlight text-reveal mt-20 md:mt-0"
          style={{ color: '#722F37' }}
        >
          <span className="block md:inline">Register for</span>
          <span className="block md:inline md:ml-3">Classes</span>
        </h1>

        <p
          className="text-xl md:text-2xl mb-12 max-w-xl mx-auto leading-relaxed slide-in-left"
          style={{ color: '#0C0C0C', animationDelay: '0.3s' }}
        >
          Join our dance community and start your transformative journey today!
        </p>

        {/* Benefits Box */}
        <div
          className="rounded-2xl p-8 shadow-2xl border mb-8 scale-in w-full"
          style={{
            background: '#722F37',
            borderColor: '#EFDFBB',
            animationDelay: '0.5s',
          }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#EFDFBB' }}>
            What You'll Get:
          </h3>
          <ul className="text-left space-y-3 text-lg">
            {[
              'Expert instruction from certified professional',
              'Personalized attention and guidance',
            ].map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-3 stagger-item hover:text-[#C59C79] transition-colors duration-300"
                style={{
                  animationDelay: `${0.7 + index * 0.1}s`,
                  color: '#EFDFBB',
                }}
              >
                <span
                  className="font-bold mt-1"
                  style={{ color: '#C59C79' }}
                >
                  •
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Register Button */}
        <a
          href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 text-xl scale-in"
          style={{
            background: '#722F37 !important',
            color: '#EFDFBB !important',
            animationDelay: '1.2s',
            border: 'none',
          }}
        >
          <span className="text-2xl">📝</span>
          Fill Out Registration Form
        </a>

        {/* Contact Text */}
        <p
          className="mt-6 fade-in"
          style={{ color: '#0C0C0C', animationDelay: '1.4s' }}
        >
          Questions? Contact us at{' '}
          <span className="font-semibold" style={{ color: '#722F37' }}>
            
          </span>
        </p>
      </div>
    </section>
  );
};

export default Register;
