import React from 'react'

const QuoteForm = () => {
  return (
    <section className="quote-form">
      <div className="container">
        <h2>Formulario Inteligente</h2>
        <form>
          <div className="form-group">
            <h3>Tipo de servicio</h3>
            <p>Selector de tipo de servicio</p>
          </div>
          
          <div className="form-group">
            <h3>Fechas</h3>
            <p>Selector de fechas</p>
          </div>
          
          <div className="form-group">
            <h3>Presupuesto estimado</h3>
            <p>Input de presupuesto</p>
          </div>
          
          <div className="form-group">
            <h3>Datos de contacto</h3>
            <p>Campos de contacto</p>
          </div>
          
          <button type="submit">Enviar Cotización</button>
        </form>
      </div>
    </section>
  )
}

export default QuoteForm 