// Servicios.js
import React from "react";
import { Link } from "react-router-dom";
import "./Servicios.css";

// --- DATOS COMPLETOS ---
const serviciosData = [
  { id: 1, titulo: "Diseño Gráfico", icono: "fas fa-paint-brush", descripcion: "Creación de identidades visuales y branding profesional" },
  { id: 2, titulo: "Desarrollo Web", icono: "fas fa-laptop-code", descripcion: "Sitios web modernos, responsivos y funcionales" },
  { id: 3, titulo: "Programación", icono: "fas fa-code", descripcion: "Soluciones a medida con código limpio y eficiente" },
  { id: 4, titulo: "UI/UX", icono: "fas fa-object-group", descripcion: "Diseño de interfaces intuitivas y atractivas" },
  { id: 5, titulo: "Branding Digital", icono: "fas fa-globe", descripcion: "Estrategias de marca para medios digitales" },
  { id: 6, titulo: "Reparación de Computadoras", icono: "fas fa-tools", descripcion: "Diagnóstico, reparación y mantenimiento de equipos" },
  { id: 7, titulo: "Mantenimiento Preventivo", icono: "fas fa-shield-alt", descripcion: "Limpieza interna, optimización y prevención de fallas" },
  { id: 8, titulo: "Instalación de Software", icono: "fas fa-download", descripcion: "Sistemas operativos, programas y controladores" },
  { id: 9, titulo: "Cambio de Componentes", icono: "fas fa-microchip", descripcion: "Actualización de hardware y reemplazo de piezas" },
  { id: 10, titulo: "Reparación de Celulares", icono: "fas fa-mobile-alt", descripcion: "Software, cambio de componentes y solución de problemas" },
];

const pasosTrabajo = [
  { id: 1, paso: "Investigación", icono: "fas fa-search", descripcion: "Analizamos tus necesidades y requerimientos para entender completamente el proyecto." },
  { id: 2, paso: "Diseño", icono: "fas fa-pencil-ruler", descripcion: "Creamos wireframes y diseños visuales que se ajusten a tu visión y objetivos." },
  { id: 3, paso: "Desarrollo", icono: "fas fa-laptop-code", descripcion: "Convertimos los diseños en código funcional utilizando las mejores prácticas y tecnologías." },
  { id: 4, paso: "Pruebas", icono: "fas fa-check-circle", descripcion: "Realizamos pruebas exhaustivas para garantizar la calidad y funcionalidad del producto." },
  { id: 5, paso: "Entrega y soporte", icono: "fas fa-box-open", descripcion: "Entregamos el proyecto y proporcionamos soporte inicial para asegurar una transición sin problemas." },
  { id: 6, paso: "Feedback y mejoras", icono: "fas fa-comments", descripcion: "Recabamos tus comentarios para realizar ajustes y mejoras necesarias." },
  { id: 7, paso: "Mantenimiento", icono: "fas fa-tools", descripcion: "Ofrecemos mantenimiento periódico para asegurar el correcto funcionamiento del proyecto." },
  { id: 8, paso: "Actualizaciones", icono: "fas fa-sync-alt", descripcion: "Mantenemos tu proyecto actualizado con las últimas tecnologías y características." },
  { id: 9, paso: "Optimización", icono: "fas fa-tachometer-alt", descripcion: "Optimizamos el rendimiento y la eficiencia de tu proyecto continuamente." },
  { id: 10, paso: "Capacitación", icono: "fas fa-chalkboard-teacher", descripcion: "Capacitamos a tu equipo para que puedan utilizar y gestionar el proyecto de manera efectiva." },
  { id: 11, paso: "Documentación", icono: "fas fa-file-alt", descripcion: "Elaboramos documentación clara y completa para futuras referencias y mantenimiento." },
  { id: 12, paso: "Soporte continuo", icono: "fas fa-headset", descripcion: "Brindamos soporte técnico continuo para resolver cualquier duda o incidencia." },
];

const beneficios = [
  { id: 1, icono: "fas fa-comments", titulo: "Comunicación Clara", descripcion: "Mantenemos una comunicación constante y transparente" },
  { id: 2, icono: "fas fa-clock", titulo: "Entrega Puntual", descripcion: "Cumplimiento de plazos acordados" },
  { id: 3, icono: "fas fa-search", titulo: "Diagnóstico Gratuito", descripcion: "Evaluación inicial sin costo" },
  { id: 4, icono: "fas fa-award", titulo: "Repuestos de Calidad", descripcion: "Utilizamos componentes de primera calidad" },
  { id: 5, icono: "fas fa-shield-alt", titulo: "Garantía en Servicios", descripcion: "Respaldo para todos nuestros trabajos" },
  { id: 6, icono: "fas fa-handshake", titulo: "Asesoría Post-Entrega", descripcion: "Soporte continuo después del proyecto" },
  { id: 7, icono: "fas fa-headset", titulo: "Soporte Continuo", descripcion: "Acompañamiento durante y después del proyecto" },
  { id: 8, icono: "fas fa-medal", titulo: "Alta Calidad", descripcion: "Trabajos realizados con los más altos estándares" },
  { id: 9, icono: "fas fa-lightbulb", titulo: "Soluciones Innovadoras", descripcion: "Enfoque creativo para resolver problemas" }
];

// --- COMPONENTE CARD REUTILIZABLE ---
const Card = ({ item, index }) => (
  <div className="card" style={{ "--i": index + 1 }}>
    <div className="card-front">
      <i className={`${item.icono} icono`}></i>
      <h3>{item.titulo || item.paso}</h3>
    </div>
    <div className="card-back">
      <p>{item.descripcion}</p>
    </div>
  </div>
);


// --- COMPONENTE PRINCIPAL ---
const Servicios = () => {
  return (
    <div className="servicios-container">
      <h1>Servicios Profesionales</h1>

      <section className="section-spacing">
        <h2>Mis Servicios</h2>
        <div className="card-grid">
          {serviciosData.map((item, index) => (
            <Card key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <h2>Mi Proceso de Trabajo</h2>
        <div className="card-grid">
          {pasosTrabajo.map((item, index) => (
            <Card key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <h2>Beneficios de Trabajar Conmigo</h2>
        <div className="card-grid">
          {beneficios.map((item, index) => (
            <Card key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="cta-contacto section-spacing">
        <h2>¿NECESITAS AYUDA?</h2>
        <p>¡HABLEMOS!</p>
        <Link to="/contacto" className="contacto-button">
          HAZ CLICK AQUÍ
        </Link>
      </section>
    </div>
  );
};

export default Servicios;