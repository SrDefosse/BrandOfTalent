import React from 'react'

const Gallery = () => {
  return (
    <section className="project-gallery">
      <div className="container">
        <h2>Galería de Proyectos</h2>
        
        {/* Fotos */}
        <div className="gallery-section">
          <h3>Fotos</h3>
          <div className="photo-gallery">
            <p>Galería de fotos aquí</p>
          </div>
        </div>
        
        {/* Videos */}
        <div className="gallery-section">
          <h3>Videos</h3>
          <div className="video-gallery">
            <p>Galería de videos aquí</p>
          </div>
        </div>
        
        {/* Reseñas */}
        <div className="gallery-section">
          <h3>Reseñas</h3>
          <div className="testimonials">
            <p>Testimonios y reseñas aquí</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery 