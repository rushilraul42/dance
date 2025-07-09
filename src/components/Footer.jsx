const Footer = () => {
  return (
    <footer style={{ background: '#722F37', color: '#EFDFBB', padding: '2rem 0' }}>
      <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto px-4">
        {/* Email Section */}
        <div className="text-center">
          <p className="text-[#EFDFBB] text-lg font-medium mb-2">Contact Us</p>
          <a 
            href="mailto:abhinitaschoolofdance@gmail.com"
            className="text-[#EFDFBB] hover:text-white transition-colors duration-300 text-sm"
          >
            abhinitaschoolofdance@gmail.com
          </a>
        </div>

        {/* Social Media and Location Icons */}
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.instagram.com/nrtyam_heals?igsh=MTY4cWY4MTl2eGJmcw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#EFDFBB]/20 rounded-lg text-[#EFDFBB] text-base hover:bg-[#EFDFBB] hover:text-[#722F37] hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <rect width="20" height="20" x="2" y="2" rx="6" strokeWidth="2"/>
              <circle cx="12" cy="12" r="5" strokeWidth="2"/>
              <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
            </svg>
          </a>
         
          <a
            href="https://m.youtube.com/channel/UCUxL2cAnx-CrXsCP1P35QJg?fbclid=PAQ0xDSwLKMBtleHRuA2FlbQIxMQABp1QzQSjEDGxpn7uHKi0fZedcCqgU4Hiu9P72m-1Amp8vW8FhhKxgRL-F5fae_aem_fAXZ96Uym16HGxSt61X0eg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#EFDFBB]/20 rounded-lg text-[#EFDFBB] text-base hover:bg-[#EFDFBB] hover:text-[#722F37] hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M21.8 8.001a2.752 2.752 0 0 0-1.936-1.948C18.077 6 12 6 12 6s-6.077 0-7.864.053A2.752 2.752 0 0 0 2.2 8.001C2 9.789 2 12 2 12s0 2.211.2 3.999a2.752 2.752 0 0 0 1.936 1.948C5.923 18 12 18 12 18s6.077 0 7.864-.053a2.752 2.752 0 0 0 1.936-1.948C22 14.211 22 12 22 12s0-2.211-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z"/>
            </svg>
          </a>

          <a
            href="https://maps.app.goo.gl/rzfrhc3KBUBREVYd7?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#EFDFBB]/20 rounded-lg text-[#EFDFBB] text-base hover:bg-[#EFDFBB] hover:text-[#722F37] hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Location"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </a>
        </div>

        <div className="text-center text-[#EFDFBB] text-sm">
          © 2024 <span className="font-semibold">Abhinita School of Dance</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

