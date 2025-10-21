// Contacto.js (Estructura Corregida)
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contacto.css";

const contactInfo = {
  whatsapp: "https://wa.me/50684136212",
  telegram: "https://t.me/ypikdov",
  email: "mailto:picado4@hotmail.es",
  linkedin: "https://www.linkedin.com/in/yeisonpv",
  maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15682.02983751717!2d-84.978161461145!3d10.47055088266782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9fe99f9231712d%3A0x14e1610260498b58!2sTilar%C3%A1n%2C%20Guanacaste%20Province!5e0!3m2!1sen!2scr!4v1727530138986!5m2!1sen!2scr",
};

const Contacto = () => {
  const form = useRef();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const enviarCorreo = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e4yznlp", "template_rxdkj5l", form.current, "wKBDOLfgITvbB5e8f"
      )
      .then((result) => {
        setMensajeEnviado(true);
        console.log("Correo enviado:", result.text);
        form.current.reset();
        setTimeout(() => setMensajeEnviado(false), 3000);
      })
      .catch((error) => {
        console.log("Error:", error.text);
      });
  };

  return (
    // Usamos un Fragment <> para poder tener elementos al mismo nivel sin un div extra
    <>
      <div className="contacto-container">
        <h1>Contacto</h1>

        <div className="contacto-grid">
          {/* FORMULARIO */}
          <section className="formulario-contacto" aria-labelledby="form-heading">
            <h2 id="form-heading">Envíame un mensaje</h2>
            <form ref={form} onSubmit={enviarCorreo}>
              <label htmlFor="name" className="visually-hidden">Nombre</label>
              <input type="text" name="name" id="name" placeholder="Nombre" required aria-required="true" />
              <label htmlFor="email" className="visually-hidden">Correo electrónico</label>
              <input type="email" name="email" id="email" placeholder="Correo electrónico" required aria-required="true" />
              <label htmlFor="subject" className="visually-hidden">Asunto</label>
              <input type="text" name="subject" id="subject" placeholder="Asunto" />
              <label htmlFor="message" className="visually-hidden">Mensaje</label>
              <textarea name="message" id="message" placeholder="Mensaje" rows="5" required aria-required="true"></textarea>
              <button type="submit" className="btn primario">Enviar Mensaje</button>
            </form>
            {mensajeEnviado && (
              <p role="status" aria-live="polite" className="notificacion-envio">
                ¡Mensaje enviado correctamente!
              </p>
            )}
          </section>

          {/* OTROS MEDIOS */}
          <div className="info-contacto-adicional">
            <section className="medios-contacto" aria-labelledby="medios-heading">
              <h3 id="medios-heading">Otros medios</h3>
              <div className="iconos-contacto" role="list">
                <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" role="listitem" aria-label="Contactar por WhatsApp"><i className="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp</a>
                <a href={contactInfo.telegram} target="_blank" rel="noreferrer" role="listitem" aria-label="Contactar por Telegram"><i className="fab fa-telegram" aria-hidden="true"></i> Telegram</a>
                <a href={contactInfo.email} role="listitem" aria-label="Enviar correo electrónico"><i className="fas fa-envelope" aria-hidden="true"></i> Correo</a>
                <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" role="listitem" aria-label="Visitar perfil de LinkedIn"><i className="fab fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
              </div>
            </section>
          </div>

          {/* --- CAMBIO 1: Movimos la sección Ubicación aquí --- */}
          {/* Ahora es un hijo directo del grid, lo que nos permite controlarla con CSS */}
          <section className="ubicacion" aria-labelledby="ubicacion-heading">
            <h3 id="ubicacion-heading">Ubicación</h3>
            <iframe
              title="Ubicación en Google Maps"
              src={contactInfo.maps}
              width="100%"
              height="400" /* Un poco más de altura */
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              aria-label="Mapa interactivo de la ubicación"
            ></iframe>
          </section>
        </div>
      </div>

      {/* --- CAMBIO 2: Movimos el CTA Final fuera del contenedor principal --- */}
      {/* Esto le permite ocupar el 100% del ANCHO DE LA PÁGINA */}
      <div className="cta-final">
        <div className="cta-final-contenido">
            <p>¿Prefieres una conversación más directa?</p>
            <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer" className="btn primario" aria-label="Iniciar conversación por WhatsApp">
              Hablemos por WhatsApp <i className="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
        </div>
      </div>
    </>
  );
};

export default Contacto;