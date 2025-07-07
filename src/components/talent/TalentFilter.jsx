import React from 'react'

const TalentFilter = () => {
  return (
    <section className="talent-filters">
      <div className="container">
        <h2>Filtros Inteligentes</h2>
        <div className="filters">
          <div className="filter-group">
            <h3>Categoría de Talento</h3>
            <p>Filtro por categoría</p>
          </div>
          <div className="filter-group">
            <h3>Edad</h3>
            <p>Filtro por edad</p>
          </div>
          <div className="filter-group">
            <h3>Características físicas</h3>
            <p>Filtro por características</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TalentFilter 