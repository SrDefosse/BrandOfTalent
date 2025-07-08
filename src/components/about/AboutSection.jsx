import React from "react"

import { useState, useEffect, useRef } from "react"
import {
  FaPencilAlt,
  FaBuilding,
  FaAward,
  FaUsers,
  FaCalendarAlt,
  FaStar,
  FaArrowRight,
  FaBolt,
  FaChartLine,
} from "react-icons/fa"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const services = [
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Cartera Directa",
      description:
        "Contamos con una cartera directa de +2,000 contactos de talento verificado. Acceso directo sin intermediarios para mayor eficiencia y mejores costos.",
      position: "left",
    },
    {
      icon: <FaStar className="w-6 h-6" />,
      title: "Trato Directo",
      description:
        "Eliminamos intermediarios para conectarte directamente con el talento. Mayor disponibilidad, negociación transparente y optimización de costos.",
      position: "left",
    },
    {
      icon: <FaPencilAlt className="w-6 h-6" />,
      title: "Conexión Emocional",
      description:
        "Creamos publicidad con sentido y autenticidad. Conectamos marcas con talento que genere verdaderas conexiones emocionales con tu audiencia.",
      position: "left",
    },
    {
      icon: <FaBuilding className="w-6 h-6" />,
      title: "Amplio Catálogo",
      description:
        "Diverso catálogo de celebridades y categorías de talento. Desde influencers hasta figuras reconocidas, encuentras el perfil ideal para tu marca.",
      position: "right",
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Resultados Medibles",
      description:
        "Proporcionamos reportes detallados y métricas de rendimiento. Resultados medibles que demuestran el impacto real de tus campañas de talento.",
      position: "right",
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      title: "Experiencias Únicas",
      description:
        "Creamos experiencias que dejan huella en tu audiencia. Gestión integral de talento que va más allá de una simple contratación.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <FaUsers />, value: 2000, label: "Contactos Directos", suffix: "+" },
    { icon: <FaAward />, value: 150, label: "Marcas Conectadas", suffix: "+" },
    { icon: <FaCalendarAlt />, value: 5, label: "Años de Experiencia", suffix: "" },
    { icon: <FaChartLine />, value: 95, label: "Tasa de Éxito", suffix: "%" },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-32 px-4 bg-gradient-to-b from-[#1D1D1D] to-[#2A2A2A] text-[#E8E0DC] overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#E8E0DC]/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#E8E0DC]/8 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#E8E0DC]/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#E8E0DC]/20"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-[#E8E0DC] font-medium mb-2 flex items-center gap-2 opacity-80"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaBolt className="w-4 h-4" />
            CONOCE BRAND OF TALENT
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#E8E0DC]">Nosotros</h2>
          <motion.div
            className="w-24 h-1 bg-[#E8E0DC]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p className="text-center max-w-3xl mx-auto mb-6 text-[#E8E0DC]/90 text-lg" variants={itemVariants}>
          Somos una agencia de talento con cobertura internacional, especializada en conectar marcas con el talento ideal de forma directa, eficiente y emocional.
        </motion.p>

        <motion.p className="text-center max-w-2xl mx-auto mb-16 text-[#E8E0DC]/70" variants={itemVariants}>
          Nuestra filosofía se basa en crear publicidad con sentido, conexión emocional y autenticidad. Ser líderes en México y LATAM en gestión de talento y experiencias únicas que conecten con la audiencia y dejen huella.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-md overflow-hidden shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1747582411588-f9b4acabe995?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern House"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#202e44]/50 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    className="bg-[#E8E0DC] text-[#1D1D1D] px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-[#E8E0DC]/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Nuestro Talento <FaArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-[#E8E0DC]/30 rounded-md -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-[#E8E0DC]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-[#E8E0DC]/15"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              ></motion.div>

              {/* Additional decorative elements */}
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#E8E0DC]/60"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#E8E0DC]/50"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-[#E8E0DC]/10 text-[#E8E0DC] p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#E8E0DC]/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-2 text-[#E8E0DC]">¿Listo para conectar con el talento ideal?</h3>
            <p className="text-[#E8E0DC]/70">Creemos juntos experiencias únicas que marquen la diferencia.</p>
          </div>
          <motion.button
            className="bg-[#E8E0DC] hover:bg-[#E8E0DC]/90 text-[#1D1D1D] px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comencemos <FaArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

function ServiceItem({ icon, title, description, variants, delay, direction }) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-[#E8E0DC] bg-[#E8E0DC]/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-[#E8E0DC]/20 relative border border-[#E8E0DC]/20"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-medium text-[#E8E0DC] group-hover:text-[#E8E0DC]/80 transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-[#E8E0DC]/70 leading-relaxed pl-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-12 flex items-center text-[#E8E0DC]/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Conoce más <FaArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  )
}

function StatCounter({ icon, value, label, suffix, delay }) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-[#E8E0DC]/5 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-[#E8E0DC]/10 transition-colors duration-300 border border-[#E8E0DC]/10"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-[#E8E0DC]/10 flex items-center justify-center mb-4 text-[#E8E0DC] group-hover:bg-[#E8E0DC]/20 transition-colors duration-300 border border-[#E8E0DC]/20"
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold text-[#E8E0DC] flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-[#E8E0DC]/70 text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-[#E8E0DC] mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  )
}

