const Footer = () => {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #722F37 0%, #5a2529 100%)', color: '#EFDFBB', padding: '3rem 0 2rem 0', borderTop: '2px solid #EFDFBB/20' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#EFDFBB] mb-3" style={{ fontFamily: 'Great Vibes, cursive' }}>
              Abhinita School of Dance
            </h3>
            <p className="text-[#EFDFBB]/80 text-sm leading-relaxed">
              Nurturing the art of classical dance with passion, tradition, and excellence.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-[#EFDFBB] mb-3">Get In Touch</h4>
            <div className="space-y-2">
              <a 
                href="mailto:abhinitaschoolofdance@gmail.com"
                className="block text-[#EFDFBB]/90 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                📧 abhinitaschoolofdance@gmail.com
              </a>
              <p className="text-[#EFDFBB]/80 text-sm">
                📞 Contact us for class schedules
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-[#EFDFBB] mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-end items-center gap-3">
              <a
                href="https://www.instagram.com/nrtyam_heals?igsh=MTY4cWY4MTl2eGJmcw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-[#EFDFBB]/15 rounded-full text-[#EFDFBB] hover:bg-[#EFDFBB] hover:text-[#722F37] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <rect width="20" height="20" x="2" y="2" rx="6" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
                </svg>
              </a>
             
              <a
                href="https://m.youtube.com/channel/UCUxL2cAnx-CrXsCP1P35QJg?fbclid=PAQ0xDSwLKMBtleHRuA2FlbQIxMQABp1QzQSjEDGxpn7uHKi0fZedcCqgU4Hiu9P72m-1Amp8vW8FhhKxgRL-F5fae_aem_fAXZ96Uym16HGxSt61X0eg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-[#EFDFBB]/15 rounded-full text-[#EFDFBB] hover:bg-[#EFDFBB] hover:text-[#722F37] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M21.8 8.001a2.752 2.752 0 0 0-1.936-1.948C18.077 6 12 6 12 6s-6.077 0-7.864.053A2.752 2.752 0 0 0 2.2 8.001C2 9.789 2 12 2 12s0 2.211.2 3.999a2.752 2.752 0 0 0 1.936 1.948C5.923 18 12 18 12 18s6.077 0 7.864-.053a2.752 2.752 0 0 0 1.936-1.948C22 14.211 22 12 22 12s0-2.211-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z"/>
                </svg>
              </a>

              <a
                href="https://maps.app.goo.gl/rzfrhc3KBUBREVYd7?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-[#EFDFBB]/15 rounded-full text-[#EFDFBB] hover:bg-[#EFDFBB] hover:text-[#722F37] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Location"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#EFDFBB]/20 pt-6">
          <div className="text-center">
            <p className="text-[#EFDFBB]/70 text-sm">
              © 2024 <span className="font-semibold text-[#EFDFBB]">Abhinita School of Dance</span>. All rights reserved.
            </p>
            <p className="text-[#EFDFBB]/60 text-xs mt-1">
              Preserving tradition through dance • Inspiring the next generation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

