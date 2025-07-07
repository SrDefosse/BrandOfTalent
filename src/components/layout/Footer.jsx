import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-[#E8E0DC] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/BOT_logo.png" 
                alt="Brand of Talent Logo" 
                className="h-16 w-auto transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Conectamos el talento perfecto con tu marca
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                >
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link 
                  to="/talent" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                >
                  Talento
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/quote" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                >
                  Cotización
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-2">
              <p className="text-gray-300">WhatsApp: +XX XXX XXX XXXX</p>
              <p className="text-gray-300">Email: info@brandoftalent.com</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Redes Sociales</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <FaInstagram className="text-white text-xl" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <FaLinkedinIn className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Brand of Talent. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 