import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-auto">
      <div className="container text-center">
        <nav className="mb-3">
          <Link to="/" className="text-white me-3 text-decoration-none">Home</Link>
          <Link to="/course" className="text-white me-3 text-decoration-none">Courses</Link>
          <Link to="/about" className="text-white me-3 text-decoration-none">About</Link>
          <Link to="/contact" className="text-white me-3 text-decoration-none">Contact</Link>
          <Link to="/login" className="text-white text-decoration-none">Login</Link>
        </nav>

        <div className="mb-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaLinkedin />
          </a>
        </div>

        <p className="mb-1">&copy; {new Date().getFullYear()} Indi Secure • All rights reserved</p>      
      </div>
    </footer>
  );
};

export default Footer;
