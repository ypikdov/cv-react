// Portafolio.js
import React, { useState } from 'react';
import './Portafolio.css';
import proyectosData from '../data/proyectosData';

const categorias = ['Todos', 'Desarrollo Web', 'Programación', 'UI/UX', 'Branding Digital', 'Diseño Gráfico', 'Juegos'];

// --- COMPONENTE REUTILIZABLE PARA LAS TARJETAS DEL PORTAFOLIO ---
const ProyectoCard = ({ proyecto, index }) => {
  return (
    <div className="card proyecto-card-portafolio" style={{ "--i": index }}>
      <div className="card-front">
        <img 
          src={proyecto.imagen} 
          alt={proyecto.titulo}
          className="proyecto-imagen"
          onError={(e) => { e.target.src = '/images/placeholder.png'; }}
        />
        <h3>{proyecto.titulo}</h3>
      </div>
      <div className="card-back">
        <p>{proyecto.descripcion}</p>
        {proyecto.enlace ? (
          <a
            href={proyecto.enlace}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card"
          >
            Ver Proyecto
          </a>
        ) : (
          <span className="btn-card disabled">
            Próximamente
          </span>
        )}
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
const Portafolio = () => {
  const [filtro, setFiltro] = useState('Todos');

  const proyectosFiltrados = filtro === 'Todos'
    ? proyectosData
    : proyectosData.filter(p => p.categoria === filtro);

  return (
    <div className="seccion portafolio-container">
      <h1>Mi Portafolio</h1>
      
      <div className="filtro-categorias">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`btn-filtro ${filtro === cat ? 'active' : ''}`}
            onClick={() => setFiltro(cat)}
            aria-pressed={filtro === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {proyectosFiltrados.map((proyecto, index) => (
          <ProyectoCard key={proyecto.id} proyecto={proyecto} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Portafolio;