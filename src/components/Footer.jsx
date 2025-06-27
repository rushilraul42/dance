const Footer = () => {
  return (
    <footer style={{ background: '#4A7766', color: '#ECE7E2' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-3xl font-bold">
                <span style={{ color: '#ECE7E2' }}>3b5</span>
                <span className="highlight" style={{ color: '#ECE7E2' }}>DanceStudio</span>
              </div>
              <p style={{ color: '#ECE7E2' }} className="text-lg leading-relaxed">
                Inspiring dancers of all levels to express themselves through the beautiful art of movement.
                Join our community and discover the transformative power of dance.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.instagram.com/nrtyam_heals?igsh=MTY4cWY4MTl2eGJmcw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[#F8D794]/10 rounded-xl text-[#F8D794] text-2xl hover:bg-[#BB6830] hover:scale-110 transition-all duration-300 shadow-lg stagger-item"
                  style={{animationDelay: `0s`}}
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                    <rect width="20" height="20" x="2" y="2" rx="6" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                    <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[#F8D794]/10 rounded-xl text-[#F8D794] text-2xl hover:bg-[#BB6830] hover:scale-110 transition-all duration-300 shadow-lg stagger-item"
                  style={{animationDelay: `0.1s`}}
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                    <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/>
                  </svg>
                </a>
                <a
                  href="https://m.youtube.com/channel/UCUxL2cAnx-CrXsCP1P35QJg?fbclid=PAQ0xDSwLKMBtleHRuA2FlbQIxMQABp1QzQSjEDGxpn7uHKi0fZedcCqgU4Hiu9P72m-1Amp8vW8FhhKxgRL-F5fae_aem_fAXZ96Uym16HGxSt61X0eg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[#F8D794]/10 rounded-xl text-[#F8D794] text-2xl hover:bg-[#BB6830] hover:scale-110 transition-all duration-300 shadow-lg stagger-item"
                  style={{animationDelay: `0.2s`}}
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                    <path d="M21.8 8.001a2.752 2.752 0 0 0-1.936-1.948C18.077 6 12 6 12 6s-6.077 0-7.864.053A2.752 2.752 0 0 0 2.2 8.001C2 9.789 2 12 2 12s0 2.211.2 3.999a2.752 2.752 0 0 0 1.936 1.948C5.923 18 12 18 12 18s6.077 0 7.864-.053a2.752 2.752 0 0 0 1.936-1.948C22 14.211 22 12 22 12s0-2.211-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div className="slide-in-right">
                <h4 className="text-xl font-bold mb-6 text-[#ECE7E2]">Quick Links</h4>
                <ul className="flex flex-col gap-3">
                  {[
                    { name: 'Home', href: '#' },
                    { name: 'Discover Journey', href: '#' },
                    { name: 'Register', href: '#' },
                    { name: 'About', href: '#' },
                    { name: 'Contact', href: '#' }
                  ].map((link, index) => (
                    <li key={index} className="stagger-item" style={{animationDelay: `${index * 0.1}s`}}>
                      <a 
                        href={link.href} 
                        className="text-[#ECE7E2] hover:text-[#C59C79] transition-all duration-300 hover:translate-x-2 inline-block text-lg"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="slide-in-right" style={{animationDelay: '0.2s'}}>
                <h4 className="text-xl font-bold mb-6 text-[#ECE7E2]">Studio Hours</h4>
                <ul className="flex flex-col gap-3 text-[#ECE7E2] text-lg">
                  {[
                    'Monday - Friday: 10:00 AM - 8:00 PM',
                    'Saturday: 9:00 AM - 6:00 PM',
                    'Sunday: 12:00 PM - 5:00 PM'
                  ].map((hour, index) => (
                    <li 
                      key={index}
                      className="stagger-item hover:text-[#C59C79] transition-colors duration-300"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      {hour}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-[#ECE7E2]/20 pt-8 text-center fade-in">
            <p className="text-[#ECE7E2] text-lg">
              © 2024 <span className="text-[#ECE7E2] font-semibold">DanceStudio</span>. All rights reserved. 
              <span className="block mt-2 text-base">Made with ❤️ for the dance community</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;