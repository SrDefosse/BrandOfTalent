import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { VideoButton } from '../ui/VideoButton'

const QuoteCTA = () => {
  const navigate = useNavigate()

  const handleQuoteClick = () => {
    navigate('/quote')
  }

  return (
    <section className="quote-cta py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-700 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#E8E0DC' }}>
            ¿Listo para tu próximo proyecto?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Solicita tu cotización personalizada
          </p>

          {/* CTA VideoButton */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <VideoButton
              label="Obtener Cotización"
              videoUrl="https://www.w3schools.com/howto/rain.mp4"
              onClick={handleQuoteClick}
            />
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Respuesta en 24 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Consulta gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sin compromiso</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuoteCTA 