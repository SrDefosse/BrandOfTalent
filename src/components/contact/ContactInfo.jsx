import React from 'react'

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="container">
        <h2>Información de Contacto</h2>
        
        <div className="contact-methods">
          <div className="contact-method">
            <h3>WhatsApp</h3>
            <p>Enlace de WhatsApp</p>
          </div>
          
          <div className="contact-method">
            <h3>Correo</h3>
            <p>Enlace de correo</p>
          </div>
          
          <div className="contact-method">
            <h3>Redes Sociales</h3>
            <p>Enlaces a redes sociales</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo 