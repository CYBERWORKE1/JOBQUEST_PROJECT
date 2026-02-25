import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121826] text-gray-300 px-[10%] py-14 mt-20 border-t border-gray-700">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Our Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Sitemap</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
          </ul>
        </div>

        {/* Career */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Career</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">We’re Hiring</a></li>
            <li><a href="#" className="hover:text-white transition">Post a Job</a></li>
            <li><a href="#" className="hover:text-white transition">Internships</a></li>
            <li><a href="#" className="hover:text-white transition">Free Job Alerts</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Connect With Me</h3>

          <div className="flex gap-5 text-2xl">

            <a
              href="https://www.linkedin.com/in/eklavya-kumar-63a264260/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/CYBERWORKE1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/ekp.8155"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
        <p className="mt-2">
          Designed & Developed by 
          <span className="text-blue-400 font-semibold"> EKLAVYA KUMAR</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;