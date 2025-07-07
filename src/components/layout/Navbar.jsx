import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="bg-gradient-to-r from-black/20 via-gray-900/20 to-black/20 backdrop-blur-xl border-b border-white/10 px-4 py-3 fixed top-0 left-0 right-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 py-2" onClick={closeMenu}>
            <img 
              src="/BOT_logo.png" 
              alt="Brand of Talent Logo" 
              className="h-10 w-auto transition-transform duration-300 hover:scale-105" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link 
              to="/" 
              className={`text-gray-200 no-underline py-3 px-5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm ${isActive('/') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-200 no-underline py-3 px-5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm ${isActive('/about') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            >
              Quiénes Somos
            </Link>
            <Link 
              to="/talent" 
              className={`text-gray-200 no-underline py-3 px-5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm ${isActive('/talent') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            >
              Talento
            </Link>
            <Link 
              to="/services" 
              className={`text-gray-200 no-underline py-3 px-5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm ${isActive('/services') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            >
              Servicios
            </Link>
            <Link 
              to="/portfolio" 
              className={`text-gray-200 no-underline py-3 px-5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm ${isActive('/portfolio') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            >
              Portafolio
            </Link>
            <Link 
              to="/quote" 
              className={`text-gray-200 no-underline py-3 px-5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm ${isActive('/quote') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            >
              Cotización
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-200 no-underline py-3 px-5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm ${isActive('/contact') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            >
              Contacto
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 bg-white/5 backdrop-blur-sm border-none cursor-pointer p-0 z-50 relative rounded-md transition-all duration-300 hover:bg-white/10 ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={`w-6 h-0.5 bg-gray-200 rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0.5' : 'mb-1'}`}></span>
            <span className={`w-6 h-0.5 bg-gray-200 rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
            <span className={`w-6 h-0.5 bg-gray-200 rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Moved outside navbar */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/90 backdrop-blur-md transition-all duration-300 ease-in-out z-40 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={closeMenu}
      >
        <div 
          className="flex flex-col justify-center items-center h-full gap-4 px-6 pt-20"
          onClick={(e) => e.stopPropagation()}
        >
          <Link 
            to="/" 
            className={`text-gray-200 no-underline py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm w-full text-center max-w-sm ${isActive('/') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            onClick={closeMenu}
          >
            Inicio
          </Link>
          <Link 
            to="/about" 
            className={`text-gray-200 no-underline py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm w-full text-center max-w-sm ${isActive('/about') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            onClick={closeMenu}
          >
            Quiénes Somos
          </Link>
          <Link 
            to="/talent" 
            className={`text-gray-200 no-underline py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm w-full text-center max-w-sm ${isActive('/talent') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            onClick={closeMenu}
          >
            Talento
          </Link>
          <Link 
            to="/services" 
            className={`text-gray-200 no-underline py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm w-full text-center max-w-sm ${isActive('/services') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            onClick={closeMenu}
          >
            Servicios
          </Link>
          <Link 
            to="/portfolio" 
            className={`text-gray-200 no-underline py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm w-full text-center max-w-sm ${isActive('/portfolio') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            onClick={closeMenu}
          >
            Portafolio
          </Link>
          <Link 
            to="/quote" 
            className={`text-gray-200 no-underline py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm w-full text-center max-w-sm ${isActive('/quote') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            onClick={closeMenu}
          >
            Cotización
          </Link>
          <Link 
            to="/contact" 
            className={`text-gray-200 no-underline py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:scale-105 hover:backdrop-blur-sm w-full text-center max-w-sm ${isActive('/contact') ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' : ''}`}
            onClick={closeMenu}
          >
            Contacto
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar