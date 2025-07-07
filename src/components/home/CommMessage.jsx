import React from 'react';
import { motion } from 'framer-motion';

const CommMessage = ({ children }) => {
  return (
    <motion.section
      className='w-full bg-[#1D1D1D] backdrop-blur-sm py-16 flex items-center justify-center min-h-screen'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gray-700 rounded-full blur-3xl"></div>
      </div>
      <div className='max-w-6xl mx-auto px-8'>
        {children || (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col items-center justify-center text-center z-10'
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-3xl md:text-4xl font-bold mb-6 text-white'
            >
              Conectamos el talento perfecto con tu marca
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed'
            >
              En Brand of Talent, somos especialistas en identificar y conectar el talento ideal con las marcas que buscan sobresalir. Nuestro enfoque personalizado garantiza que cada colaboración sea auténtica y efectiva.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center'
              >
                <h3 className='text-xl font-semibold mb-3 text-white'>Talento Auténtico</h3>
                <p className='text-white/80 leading-relaxed'>Conectamos con creadores que realmente representan los valores de tu marca</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className='bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center'
              >
                <h3 className='text-xl font-semibold mb-3 text-white'>Resultados Medibles</h3>
                <p className='text-white/80 leading-relaxed'>Campañas diseñadas para generar impacto real y engagement auténtico</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className='bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center'
              >
                <h3 className='text-xl font-semibold mb-3 text-white'>Experiencia Integral</h3>
                <p className='text-white/80 leading-relaxed'>Desde la estrategia hasta la ejecución, te acompañamos en todo el proceso</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default CommMessage; 