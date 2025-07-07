import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaMoneyBillWave, FaUnlock } from 'react-icons/fa';

const CommMessage = ({ children }) => {
  return (
    <motion.section
      className='w-full bg-[#1D1D1D] backdrop-blur-sm py-10 flex items-center justify-center min-h-screen'
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
              viewport={{ once: true }}
              className='flex flex-col items-center justify-center text-center z-10'
            >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-3xl md:text-4xl font-bold mb-6 text-white'
            >
              Más de 27 años conectando marcas con talento latinoamericano con propósito y emoción
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='text-lg md:text-xl  text-white/90 max-w-3xl mx-auto leading-relaxed'
            >
              En Brand of Talent, somos especialistas en identificar y conectar el talento ideal con las marcas que buscan sobresalir.
            </motion.p>


            {/* Sección con el mensaje del usuario */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className='mt-12 w-full'
            >
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className='grid grid-cols-1 md:grid-cols-3 gap-0 mt-8 overflow-hidden'
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className='p-6 text-center border-r border-white/20 last:border-r-0'
                >
                  <FaHandshake className='text-4xl text-white mb-4 mx-auto' />
                  <h4 className='text-xl font-semibold mb-3 text-white'>Sin Intermediarios</h4>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  className='p-6 text-center border-r border-white/20 last:border-r-0'
                >
                  <FaMoneyBillWave className='text-4xl text-white mb-4 mx-auto' />
                  <h4 className='text-xl font-semibold mb-3 text-white'>Sin Comisiones</h4>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  className='p-6 text-center border-r border-white/20 last:border-r-0'
                >
                  <FaUnlock className='text-4xl text-white mb-4 mx-auto' />
                  <h4 className='text-xl font-semibold mb-3 text-white'>Sin Compromisos</h4>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
                className='text-2xl md:text-3xl font-bold mt-12 text-white'
              >
                Directo al corazón de tu audiencia
              </motion.h3>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default CommMessage; 