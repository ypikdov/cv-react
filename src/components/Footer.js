// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.webp";
import "./Footer.css"; // Usaremos el CSS mejorado

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        {/* --- Columna 1: Logo y Redes Sociales --- */}
        <div className="footer-col">
          <Link to="/" className="footer-logo-link">
            <img src={logo} alt="Logo PIKDOV STUDIO" className="footer-logo" width="150" />
          </Link>
          <ul className="footer-socials">
            <li><a href="https://www.facebook.com/ypikdov" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/ypikdov_" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/yeisonpv" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/ypikdov" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a></li>
          </ul>
        </div>

        {/* --- Columna 2: Enlaces Rápidos --- */}
        <div className="footer-col">
          <h4>Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><Link to="/nosotros">Sobre Mí</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/portafolio">Portafolio</Link></li>
            <li><Link to="/contacto">Contáctame</Link></li>
          </ul>
        </div>

        {/* --- Columna 3: Contacto --- */}
        <div className="footer-col">
          <h4>Oficina</h4>
          <address className="footer-contact">
            <p><i className="fas fa-map-marker-alt"></i>Tilarán, Guanacaste, CRC</p>
            <p><i className="fas fa-envelope"></i>picado4@hotmail.es</p>
            <p><i className="fas fa-phone"></i>+506 8413-6212</p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; PIKDOV STUDIO. DERECHOS RESERVADOS {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;