import { motion } from "framer-motion"
import { useState, useRef } from "react"

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Aquí pasas el texto y la URL que quieras */}
      <ExpandButton label="Contáctanos" url="https://tudominio.com/contacto" />
    </div>
  )
}

export function ExpandButton({
  label = "ExpandButton",   // texto por defecto
  url = "#",               // URL por defecto
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    const distance = Math.hypot(deltaX, deltaY)

    if (distance < 100) {
      const magnetStrength = (100 - distance) / 100
      setMousePosition({
        x: deltaX * magnetStrength * 0.3,
        y: deltaY * magnetStrength * 0.3,
      })
    } else {
      setMousePosition({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        ref={buttonRef}
        className="relative px-8 py-4 text-white font-semibold rounded-full bg-gradient-to-br from-black via-neutral-900 to-black shadow-2xl cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.location.href = url}    // redirige al hacer click
        animate={{
          scale: isHovered ? 1.1 : 1,
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      >
        <span className="relative z-10">{label}</span>
      </motion.button>
    </div>
  )
}
