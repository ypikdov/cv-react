// Nosotros.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.webp";
import "./Nosotros.css";

// --- DATOS DE HABILIDADES ---
const habilidadesData = [
  {
    categoria: "Lenguajes de Programación",
    items: [
      { nombre: "JavaScript", icono: "fab fa-js", descripcion: "Lenguaje esencial para crear interactividad y dinamismo en sitios web y aplicaciones." },
      { nombre: "Java", icono: "fab fa-java", descripcion: "Lenguaje robusto y versátil para desarrollo de software empresarial y aplicaciones Android." },
      { nombre: "Go", icono: "fab fa-golang", descripcion: "Lenguaje moderno de Google, enfocado en la concurrencia y el alto rendimiento." },
      { nombre: "Python", icono: "fab fa-python", descripcion: "Ideal para desarrollo web backend, ciencia de datos y automatización de tareas." },
      { nombre: "PHP", icono: "fab fa-php", descripcion: "Ampliamente utilizado en el desarrollo backend, especialmente con sistemas como WordPress." },
    ],
  },
  {
    categoria: "Desarrollo Web",
    items: [
      { nombre: "HTML", icono: "fab fa-html5", descripcion: "El esqueleto de todas las páginas web, para estructurar contenido de forma semántica." },
      { nombre: "CSS", icono: "fab fa-css3-alt", descripcion: "Para estilizar y diseñar interfaces web atractivas, modernas y responsivas." },
      { nombre: "React", icono: "fab fa-react", descripcion: "Librería líder para construir interfaces de usuario interactivas y reutilizables." },
      { nombre: "Node.js", icono: "fab fa-node-js", descripcion: "Entorno para ejecutar JavaScript en el servidor, creando APIs y servicios backend." },
      { nombre: "WordPress", icono: "fab fa-wordpress", descripcion: "Plataforma para la creación y gestión de sitios web y blogs de manera eficiente." },
      { nombre: "Bootstrap", icono: "fab fa-bootstrap", descripcion: "Framework CSS para desarrollar sitios responsivos y 'mobile-first' rápidamente." },
      { nombre: "Elementor", icono: "fab fa-elementor", descripcion: "Constructor visual para WordPress que permite diseñar páginas complejas sin código." },
    ],
  },
  {
    categoria: "Metodologías Ágiles",
    items: [
      { nombre: "Scrum", icono: "fas fa-tasks", descripcion: "Marco de trabajo para gestionar proyectos complejos de forma iterativa e incremental." },
      { nombre: "Kanban", icono: "fas fa-columns", descripcion: "Método visual para gestionar el flujo de trabajo y optimizar la entrega continua." },
      { nombre: "Gestión de Proyectos", icono: "fas fa-project-diagram", descripcion: "Planificación, ejecución y seguimiento de proyectos para cumplir objetivos." },
    ],
  },
  {
    categoria: "Sistemas Operativos",
    items: [
        { nombre: "Windows", icono: "fab fa-windows", descripcion: "Administración, mantenimiento y optimización del sistema operativo de Microsoft." },
        { nombre: "Linux", icono: "fab fa-linux", descripcion: "Manejo de distribuciones como Ubuntu para servidores y desarrollo de software." },
        { nombre: "Android", icono: "fab fa-android", descripcion: "Conocimiento del sistema operativo móvil para pruebas y desarrollo." },
    ]
  },
  {
    categoria: "Suite de Oficina",
    items: [
      { nombre: "Microsoft Office", icono: "fas fa-file-word", descripcion: "Dominio de Word, Excel y PowerPoint para documentación y análisis de datos." },
      { nombre: "Google Workspace", icono: "fab fa-google-drive", descripcion: "Uso colaborativo de Docs, Sheets y Slides para gestión de proyectos." },
      { nombre: "LibreOffice", icono: "fas fa-file-alt", descripcion: "Alternativa de código abierto para la creación de documentos y hojas de cálculo." },
    ],
  },
  {
      categoria: "Edición Audiovisual",
      items: [
        { nombre: "Photoshop", icono: "fas fa-image", descripcion: "Herramienta líder para la edición profesional de imágenes y diseño gráfico." },
        { nombre: "Illustrator", icono: "fas fa-brush", descripcion: "Creación de gráficos vectoriales, logotipos e ilustraciones escalables." },
        { nombre: "Inkscape", icono: "fas fa-draw-polygon", descripcion: "Potente software de código abierto para la edición de gráficos vectoriales." },
        { nombre: "GIMP", icono: "fas fa-paint-brush", descripcion: "Alternativa gratuita a Photoshop para la manipulación avanzada de imágenes." },
        { nombre: "Shotcut", icono: "fas fa-video", descripcion: "Edición de video no lineal para crear contenido audiovisual de alta calidad." },
        {nombre: "Canva", icono: "fas fa-magic-wand-sparkles", descripcion: "Plataforma en línea para diseño gráfico rápido y accesible, ideal para redes sociales." },
        {nombre: "OpenShot", icono: "fas fa-clapperboard", descripcion: "Editor de video de código abierto, fácil de usar para proyectos básicos y avanzados." },
      ]
  },
  {
      categoria: "Herramientas de Desarrollo",
      items: [
        { nombre: "VS Code", icono: "fas fa-code", descripcion: "Editor de código ligero y potente con un ecosistema de extensiones masivo." },
        { nombre: "IntelliJ IDEA", icono: "fas fa-laptop-code", descripcion: "IDE avanzado para desarrollo en Java y otros lenguiales con análisis de código." },
        { nombre: "Git", icono: "fab fa-git-alt", descripcion: "Sistema de control de versiones para gestionar y rastrear cambios en el código." },
        { nombre: "GitHub", icono: "fab fa-github", descripcion: "Plataforma para alojar repositorios Git, colaborar y realizar revisión de código." },
        { nombre: "Balsamiq", icono: "fas fa-pencil-ruler", descripcion: "Herramienta para crear wireframes de baja fidelidad y prototipar ideas rápidamente." },
        { nombre: "Figma", icono: "fab fa-figma", descripcion: "Plataforma colaborativa para el diseño de interfaces (UI/UX) y prototipado." },
      ]
  },
  {
      categoria: "Reparación y Mantenimiento",
      items: [
        { nombre: "Reparación de Hardware", icono: "fas fa-tools", descripcion: "Diagnóstico y solución de problemas en componentes de PC y laptops." },
        { nombre: "Mantenimiento Preventivo", icono: "fas fa-shield-alt", descripcion: "Optimización y limpieza de software y hardware para prevenir fallas." },
        { nombre: "Instalación de SO", icono: "fas fa-download", descripcion: "Instalación y configuración de sistemas operativos Windows, Linux y macOS." },
        { nombre: "Reparación de Celulares", icono: "fas fa-mobile-alt", descripcion: "Solución de problemas de software y hardware en dispositivos móviles." },
        { nombre: "Redes y Conectividad", icono: "fas fa-network-wired", descripcion: "Configuración basica y mantenimiento de redes locales para asegurar la conexión." },
        { nombre: "Cambio de Componentes", icono: "fas fa-microchip", descripcion: "Reemplazo de piezas y actualización de hardware para mantener la eficiencia." },
        { nombre: "Instalación de Software", icono: "fas fa-download", descripcion: "Instalación y configuración de programas y controladores para mejorar el rendimiento." }, 
        { nombre: "Recuperación de Datos", icono: "fas fa-database", descripcion: "Técnicas para recuperar información perdida o inaccesible en dispositivos de almacenamiento." },
        { nombre: "Reparación de Impresoras", icono: "fas fa-print", descripcion: "Solución de problemas y mantenimiento de impresoras y dispositivos de impresión." },    
      ]
  }
];

const habilidadesBlandasData = [
    { nombre: "Comunicación Efectiva", icono: "fas fa-comments", descripcion: "Capacidad para expresar ideas de forma clara y escuchar activamente para lograr entendimiento." },
    { nombre: "Trabajo en equipo", icono: "fas fa-users", descripcion: "Colaboración proactiva con otros para alcanzar metas comunes de manera eficiente." },
    { nombre: "Creatividad e Innovación", icono: "fas fa-lightbulb", descripcion: "Habilidad para generar soluciones originales y mejorar procesos de forma constante." },
    { nombre: "Resolución de Problemas", icono: "fas fa-bug", descripcion: "Enfoque analítico para identificar, evaluar y solucionar desafíos técnicos y lógicos." },
    { nombre: "Aprendizaje Continuo", icono: "fas fa-graduation-cap", descripcion: "Compromiso con la adquisición de nuevos conocimientos y habilidades tecnológicas." },
    { nombre: "Adaptabilidad y Proactividad", icono: "fas fa-running", descripcion: "Flexibilidad para ajustarse a nuevos entornos, tecnologías y requerimientos de proyecto." },
    { nombre: "Gestión del Tiempo", icono: "fas fa-clock", descripcion: "Organización y priorización de tareas para cumplir con los plazos de entrega." },
    { nombre: "Atención al Detalle", icono: "fas fa-search", descripcion: "Meticulosidad para asegurar la calidad y precisión en cada aspecto del trabajo." },
];

// --- COMPONENTES REUTILIZABLES ---
const SkillCard = ({ item, index }) => (
    <div className="card" style={{ "--i": index + 1 }}>
        <div className="card-front">
            <i className={`${item.icono} icono`}></i>
            <h3>{item.nombre}</h3>
        </div>
        <div className="card-back">
            <p>{item.descripcion}</p>
        </div>
    </div>
);

const TestimonioCard = ({ testimonio, index }) => (
    <blockquote className="testimonio-card" style={{ "--i": index + 1 }}>
         <p>"{testimonio.texto}"</p>
         <cite>– {testimonio.autor}</cite>
    </blockquote>
);

// --- COMPONENTE PRINCIPAL ---
const Nosotros = () => {
  const [testimonios, setTestimonios] = useState([
    { texto: "Excelente profesional y muy creativo en cada proyecto.", autor: "Cliente A" },
    { texto: "La entrega fue puntual y la comunicación siempre fue clara.", autor: "Cliente B" },
    { texto: "Un trabajo profesional y de altísima calidad. Recomendado.", autor: "Cliente C" },
  ]);

  const [nuevoTestimonio, setNuevoTestimonio] = useState({ texto: "", autor: "" });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarOpcionesCV, setMostrarOpcionesCV] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoTestimonio.texto || !nuevoTestimonio.autor) return;
    setTestimonios([...testimonios, nuevoTestimonio]);
    setNuevoTestimonio({ texto: "", autor: "" });
    setMostrarFormulario(false);
  };

  return (
    <div className="seccion sobre-mi-container">
      <h1>Sobre Mí</h1>
      
      <section className="biografia">
        <h2>¿Quién soy?</h2>
        <div className="foto-texto">
          <img src={logo} alt="Yeison Picado Villalobos" className="foto-yo" />
          <div className="texto-bio">
            <h3>Yeison Picado Villalobos</h3>
            <h4>Diseñador Gráfico & Desarrollador Web</h4>
            <p>
              Profesional multidisciplinario con una sólida orientación hacia la tecnología
              y la innovación. Mi trayectoria se centra en el desarrollo web, 
              junto con una amplia experiencia en el mantenimiento y
              reparación de equipos informáticos.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-cv">
        <h2>Eleva tu presencia digital conmigo</h2>
        <p>Conoce a fondo mis capacidades y trayectoria profesional.</p>
        <div className="cv-download">
          <button className="btn secundario" onClick={() => setMostrarOpcionesCV(!mostrarOpcionesCV)}>
            Descargar CV <i className="fas fa-download"></i>
          </button>
          {mostrarOpcionesCV && (
            <div className="cv-options">
              <a href="https://mega.nz/file/gZIwQIyD#R5XcIE0WpR_zy-Wl2TWD86Qg17WnPi7d3DQgOi4OKbk" download>Español</a>
              <a href="https://mega.nz/file/kQRRCJiK#9Fv9FneRXUThNYYzxNa27SsIoDRtRcpLqpFIjvXjGLI" download>English</a>
            </div>
          )}
        </div>
      </section>

      <section className="habilidades-tecnicas">
        <h2>Habilidades Técnicas</h2>
        {habilidadesData.map((seccion) => (
            <div key={seccion.categoria} className="subsection">
                <h4>{seccion.categoria}</h4>
                <div className="card-grid">
                    {seccion.items.map((item, index) => (
                        <SkillCard key={item.nombre} item={item} index={index} />
                    ))}
                </div>
            </div>
        ))}
      </section>

      <section className="habilidades-blandas">
        <h2>Habilidades Blandas</h2>
        <div className="card-grid">
          {habilidadesBlandasData.map((item, index) => (
             <SkillCard key={item.nombre} item={item} index={index} />
          ))}
        </div>
      </section>
      
      <section className="testimonios">
        <h2>Testimonios</h2>
        <div className="card-grid">
          {testimonios.map((t, i) => (
            <TestimonioCard key={i} testimonio={t} index={i} />
          ))}
        </div>
        <button className="btn primario" onClick={() => setMostrarFormulario(!mostrarFormulario)}>
          {mostrarFormulario ? "Cancelar" : "Escribir Testimonio"}
        </button>
        {mostrarFormulario && (
          <form className="form-testimonio" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Tu nombre"
              value={nuevoTestimonio.autor}
              onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, autor: e.target.value })}
              required
            />
            <textarea
              placeholder="Escribe tu testimonio aquí..."
              value={nuevoTestimonio.texto}
              onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, texto: e.target.value })}
              required
            />
            <button type="submit" className="btn primario">
              Enviar Testimonio
            </button>
          </form>
        )}
      </section>

      <section className="ubicacion">
        <h2><i className="fas fa-map-marker-alt"></i> Ubicación</h2>
        <p>Tilarán, Guanacaste, Costa Rica</p>
        <div className="mapa-container">
            <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15682.02983751717!2d-84.978161461145!3d10.47055088266782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9fe99f9231712d%3A0x14e1610260498b58!2sTilar%C3%A1n%2C%20Guanacaste%20Province!5e0!3m2!1sen!2scr!4v1727530138986!5m2!1sen!2scr" 
    width="100%" 
    height="350" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="Ubicación en Google Maps">
</iframe>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;