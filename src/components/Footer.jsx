import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div>
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <div>
          <h3>Resources</h3>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
          <a href="#">Help</a>
        </div>

        <div>
          <h3>Career</h3>
          <a href="#">We’re Hiring</a>
          <a href="#">Post Job</a>
          <a href="#">Internships</a>
          <a href="#">Job Alerts</a>
        </div>

        <div>
          <h3>Connect</h3>

          <div className="socials">

            <a href="https://www.linkedin.com/in/eklavya-kumar-63a264260/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://github.com/CYBERWORKE1" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.instagram.com/ekp.8155" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} JobQuest — Designed by EKLAVYA KUMAR
      </div>

    </footer>
  );
};

export default Footer;