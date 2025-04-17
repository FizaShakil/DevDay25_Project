const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Left Section */}
        <div className="flex flex-col text-xs">
        <h2 className="text-3xl font-bold">
            <span className="text-gray-400">G</span>lobex
          </h2>
          <p className='text-gray-400'>Where technology meets innovation</p>
          </div>

        {/* Middle Section - Social Icons */}
        <div className="flex flex-col items-center md:items-center">
          <p className="mb-3 uppercase text-sm tracking-widest text-gray-300">
            Connect with us
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-xl hover:text-pink-400 transition-colors"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook text-xl hover:text-blue-500 transition-colors"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter text-xl hover:text-sky-400 transition-colors"></i>
            </a>
          </div>
        </div>

        {/* Right Section - Email & Contact */}
        <div className="md:text-right space-y-2">
          {/* Email */}
          <div className="flex items-center justify-center md:justify-end space-x-2">
            <i className="fas fa-envelope text-gray-400"></i>
            <a
              href="mailto:globex@hotmail.com"
              className="hover:underline text-sm"
            >
              globex@hotmail.com
            </a>
          </div>

          {/* Contact */}
          <div className="flex items-center justify-center md:justify-end space-x-2">
            <i className="fas fa-phone text-gray-400"></i>
            <a href="tel:+92309123456" className="hover:underline text-sm">
              +92 309 123456
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Globex. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
