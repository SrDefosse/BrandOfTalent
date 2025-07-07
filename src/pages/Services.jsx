import React from 'react'
import MainServices from '../components/services/MainServices'
import ComplementaryServices from '../components/services/ComplementaryServices'

const Services = () => {
  return (
    <div className="services-page">
      <div className="container">
        <h1>Servicios</h1>
      </div>
      <MainServices />
      <ComplementaryServices />
    </div>
  )
}

export default Services
