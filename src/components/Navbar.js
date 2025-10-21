// Navbar.js
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../logo.webp";
import "./Navbar.css";

const navLinks = [
  { to: "/", text: "INICIO", icon: "fas fa-home" },
  { to: "/nosotros", text: "SOBRE MÍ" },
  { to: "/servicios", text: "SERVICIOS" },
  { to: "/portafolio", text: "PORTAFOLIO" },
  { to: "/blog", text: "BLOG" },
];

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const closeMenu = () => {
    setMenuAbierto(false);
  };

  useEffect(() => {
    if (menuAbierto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuAbierto]);

  return (
    <header className="navbar" role="banner">
      <div className="navbar-container">
        {/* El overlay solo se muestra en móvil cuando el menú está abierto */}
        {menuAbierto && <div className="overlay" onClick={closeMenu}></div>}
        
        <div className="navbar-content">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={logo} alt="Logo PIKDOV STUDIO" width="40" height="40" />
            <span>PIKDOV STUDIO</span>
          </Link>

          <nav className={`navbar-nav ${menuAbierto ? "abierto" : ""}`} role="navigation">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
                    {link.text}
                    {link.icon && <i className={link.icon} aria-hidden="true"></i>}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link to="/contacto" className="btn-contacto-nav" onClick={closeMenu}>
              CONTACTO <i className="fas fa-phone" aria-hidden="true"></i>
            </Link>
          </nav>

          <button
            className="menu-hamburguesa"
            onClick={toggleMenu}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
          >
            {menuAbierto ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;