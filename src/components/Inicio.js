// Inicio.js
import React from 'react';
import { Link } from 'react-router-dom';
import proyectosData from '../data/proyectosData'; 
import './Inicio.css';

// --- DATOS DE SERVICIOS (AHORA MÁS GENERALES) ---
const serviciosData = [
  {
    titulo: "Diseño y Estrategia Digital",
    icono: "fas fa-palette",
    descripcion: "Desde el branding hasta el diseño UI/UX, creo identidades visuales atractivas y funcionales."
  },
  {
    titulo: "Desarrollo Web y Software",
    icono: "fas fa-code",
    descripcion: "Construyo soluciones a medida, desde sitios web responsivos hasta aplicaciones complejas."
  },
  {
    titulo: "Soporte y Mantenimiento",
    icono: "fas fa-tools",
    descripcion: "Ofrezco mantenimiento preventivo y reparación de equipos para asegurar su óptimo rendimiento."
  },
];

// --- COMPONENTE CARD REUTILIZABLE ---
const Card = ({ item, type, index }) => {
  const isProyecto = type === 'proyecto';
  
  return (
    <div className="card" style={{ "--i": index + 1 }}>
      <div className="card-front">
        {isProyecto ? (
          <img src={item.imagen} alt={item.titulo} className="proyecto-imagen" />
        ) : (
          <i className={`${item.icono} icono`}></i>
        )}
        <h3>{item.titulo}</h3>
      </div>
      <div className="card-back">
        <p>{item.descripcion}</p>
        {isProyecto && (
          <a href={item.enlace} target="_blank" rel="noopener noreferrer" className="cta-button-card">
            Ver Proyecto
          </a>
        )}
      </div>
    </div>
  );
};


// --- COMPONENTE PRINCIPAL ---
function Inicio() {
  const ultimosTresProyectos = proyectosData.slice(-3).reverse();

  return (
    <div className="inicio-container">
      <section className="banner-principal">
        <div className="banner-overlay">
          <h1>Bienvenido a Mi Mundo Digital</h1>
          <p className="subtitle">Desarrollador Web & Diseñador Gráfico</p>
          <div className="banner-cta">
            <Link to="/portafolio" className="cta-button primary">Ver Portafolio</Link>
            <Link to="/contacto" className="cta-button secondary">Contáctame</Link>
          </div>
        </div>
      </section>

      <section className="presentacion">
        <h2>Yeison Picado Villalobos</h2>
        <p className="resumen-perfil">
          Un creativo digital que fusiona diseño visual y desarrollo técnico para crear experiencias funcionales, atractivas y memorables.
        </p>
        <div className="cta-buttons-presentacion">
          <Link to="/portafolio" className="cta-button primary">Ver Portafolio</Link>
          <Link to="/nosotros" className="cta-button secondary">Sobre Mí</Link>
        </div>
      </section>

      <section className="servicios">
        <h2>Servicios Destacados</h2>
        <div className="card-grid">
          {serviciosData.map((servicio, index) => (
            <Card key={servicio.titulo} item={servicio} type="servicio" index={index} />
          ))}
        </div>
        {/* AQUÍ ESTÁ EL CAMBIO: Botón para ver más servicios */}
        <div className="ver-mas-cta">
          <Link to="/servicios" className="cta-button primary">
            Ver todos los servicios
          </Link>
        </div>
      </section>

      <section className="proyectos-recientes">
        <h2>Proyectos Recientes</h2>
        <div className="card-grid">
          {ultimosTresProyectos.map((proyecto, index) => (
            <Card key={proyecto.id} item={proyecto} type="proyecto" index={index} />
          ))}
        </div>
      </section>

      <section className="cta-final">
        <h2>¿Listo para trabajar juntos?</h2>
        <Link to="/contacto" className="cta-button primary">
          <i className="fas fa-comments" aria-hidden="true"></i> Hablemos
        </Link>
      </section>
    </div>
  );
}

export default Inicio;