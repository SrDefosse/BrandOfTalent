// src/components/FilterMasonGallery.jsx
import React, {
  useState,
  useMemo,
  useCallback,
  memo
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/** Data expandida con más ejemplos de talento **/
const talentItems = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    name: 'Juan Pérez',
    specialty: 'Actor de cine',
    description: 'Actor con 10 años de experiencia en cine y teatro. Especializado en drama y acción.',
    category: 'actor',
    age: 35,
    gender: 'male',
    language: 'es',
    region: 'CDMX'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    name: 'María Gómez',
    specialty: 'Locutora de radio',
    description: 'Voz cálida y versátil para comerciales y documentales. 8 años de experiencia.',
    category: 'locutor',
    age: 29,
    gender: 'female',
    language: 'es',
    region: 'Guadalajara'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    name: 'Carlos Ruiz',
    specialty: 'Actor de teatro',
    description: 'Especialista en obras clásicas y contemporáneas. Formación en actuación método.',
    category: 'actor',
    age: 42,
    gender: 'male',
    language: 'es',
    region: 'Monterrey'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    name: 'Ana Silva',
    specialty: 'Modelo comercial',
    description: 'Modelo con experiencia en campañas publicitarias y fashion. Portfolio diverso.',
    category: 'modelo',
    age: 24,
    gender: 'female',
    language: 'es',
    region: 'CDMX'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    name: 'Roberto Vega',
    specialty: 'Locutor comercial',
    description: 'Voz grave y distintiva para spots publicitarios y narraciones corporativas.',
    category: 'locutor',
    age: 38,
    gender: 'male',
    language: 'es',
    region: 'Tijuana'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
    name: 'Sofía Martínez',
    specialty: 'Actriz de TV',
    description: 'Actriz con participaciones en telenovelas y series. Especializada en comedia.',
    category: 'actor',
    age: 31,
    gender: 'female',
    language: 'es',
    region: 'CDMX'
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    name: 'Diego Fernández',
    specialty: 'Modelo de pasarela',
    description: 'Modelo profesional con experiencia en Fashion Week y marcas internacionales.',
    category: 'modelo',
    age: 27,
    gender: 'male',
    language: 'es',
    region: 'Guadalajara'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    name: 'Lucía Torres',
    specialty: 'Locutora bilingüe',
    description: 'Locutora especializada en contenido bilingüe español-inglés para medios digitales.',
    category: 'locutor',
    age: 33,
    gender: 'female',
    language: 'bilingue',
    region: 'CDMX'
  },
  {
    id: 9,
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    name: 'Fernando López',
    specialty: 'Actor de doblaje',
    description: 'Especialista en doblaje de películas y series. Voz versátil para diferentes personajes.',
    category: 'actor',
    age: 45,
    gender: 'male',
    language: 'es',
    region: 'Monterrey'
  },
  {
    id: 10,
    image: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg',
    name: 'Valeria Ramírez',
    specialty: 'Modelo de producto',
    description: 'Especializada en fotografía de producto y e-commerce. Experiencia en beauty y lifestyle.',
    category: 'modelo',
    age: 26,
    gender: 'female',
    language: 'es',
    region: 'Guadalajara'
  },
  {
    id: 11,
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg',
    name: 'Andrés Morales',
    specialty: 'Locutor deportivo',
    description: 'Locutor especializado en deportes con experiencia en transmisiones en vivo.',
    category: 'locutor',
    age: 41,
    gender: 'male',
    language: 'es',
    region: 'CDMX'
  },
  {
    id: 12,
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg',
    name: 'Isabella Cruz',
    specialty: 'Actriz de musical',
    description: 'Actriz, cantante y bailarina con formación en teatro musical y ópera.',
    category: 'actor',
    age: 28,
    gender: 'female',
    language: 'es',
    region: 'Monterrey'
  }
]

// Mapeo de etiquetas en español (movido fuera para evitar recreación)
const categoryLabels = {
  'actor': 'Actor/Actriz',
  'locutor': 'Locutor/a',
  'modelo': 'Modelo'
}

const genderLabels = {
  'male': 'Masculino',
  'female': 'Femenino'
}

const languageLabels = {
  'es': 'Español',
  'en': 'Inglés',
  'bilingue': 'Bilingüe'
}

// Animaciones optimizadas - reducidas para mejor performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Reducido de 0.1
      delayChildren: 0.1     // Reducido de 0.2
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,  // Reducido de 50
    scale: 0.95  // Reducido de 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "tween", // Cambiado de spring para mejor performance
      duration: 0.3  // Duración fija más rápida
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,  // Reducido de 0.8
    transition: {
      duration: 0.15  // Reducido de 0.2
    }
  }
}

// Hook personalizado para debounce optimizado
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

// Componente de imagen optimizado con lazy loading
const OptimizedImage = memo(({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const handleLoad = useCallback(() => {
    setLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setError(true)
  }, [])

  return (
    <div className={className}>
      {!loaded && !error && (
        <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`object-cover w-full h-full transition-all duration-300 ${
          loaded ? 'opacity-100 group-hover:scale-110' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        style={{ display: loaded ? 'block' : 'none' }}
      />
      {error && (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Error al cargar</span>
        </div>
      )}
    </div>
  )
})

// Componente de tarjeta memoizado para evitar re-renders
const TalentCard = memo(({ item, onOpenModal }) => {
  const handleClick = useCallback(() => {
    onOpenModal(item)
  }, [item, onOpenModal])

  return (
    <motion.div
      className="group mb-6 break-inside-avoid relative cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      onClick={handleClick}
      layout
    >
      <div className="relative w-full rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-white/10 shadow-2xl">
        <div style={{ aspectRatio: '4 / 3' }} className="relative">
          <OptimizedImage
            src={item.image}
            alt={item.name}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-semibold mb-1 font-['Poppins']">{item.name}</h3>
          <p className="text-sm text-gray-200">{item.specialty}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
              {item.age} años
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
              {item.region}
            </span>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center items-center text-center text-white p-6 opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }} // Reducido de 0.3
        >
          <h3 className="text-xl font-bold mb-2 font-['Poppins']">{item.name}</h3>
          <p className="text-sm text-gray-200 mb-3">{item.specialty}</p>
          <p className="text-xs text-gray-300 mb-4 line-clamp-3">{item.description}</p>
          <motion.button
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver más detalles
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
})

function FilterMasonGallery({ items, onRequestProfile }) {
  // Estados de filtros
  const [category, setCategory] = useState('')
  const [gender, setGender] = useState('')
  const [language, setLanguage] = useState('')
  const [region, setRegion] = useState('')
  const [minAge, setMinAge] = useState('')
  const [maxAge, setMaxAge] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)

  // Debounce para campos numéricos
  const debouncedMinAge = useDebounce(minAge, 300)
  const debouncedMaxAge = useDebounce(maxAge, 300)

  // Opciones únicas memoizadas con dependencias optimizadas
  const categories = useMemo(() => [...new Set(items.map(i => i.category))], [items])
  const genders = useMemo(() => [...new Set(items.map(i => i.gender))], [items])
  const languages = useMemo(() => [...new Set(items.map(i => i.language))], [items])
  const regions = useMemo(() => [...new Set(items.map(i => i.region))], [items])

  // Filtrado optimizado con debounced values
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      if (category && item.category !== category) return false
      if (gender && item.gender !== gender) return false
      if (language && item.language !== language) return false
      if (region && item.region !== region) return false
      if (debouncedMinAge && item.age < Number(debouncedMinAge)) return false
      if (debouncedMaxAge && item.age > Number(debouncedMaxAge)) return false
      return true
    })
  }, [items, category, gender, language, region, debouncedMinAge, debouncedMaxAge])

  // Callbacks memoizados
  const openModal = useCallback((item) => setSelectedItem(item), [])
  const closeModal = useCallback(() => setSelectedItem(null), [])

  const clearAllFilters = useCallback(() => {
    setCategory('')
    setGender('')
    setLanguage('')
    setRegion('')
    setMinAge('')
    setMaxAge('')
  }, [])

  const handleRequestProfile = useCallback((id) => {
    onRequestProfile(id)
  }, [onRequestProfile])

  // Key optimizada para re-mount solo cuando sea necesario
  const galleryKey = useMemo(() => 
    `${category}-${gender}-${language}-${region}-${debouncedMinAge}-${debouncedMaxAge}`,
    [category, gender, language, region, debouncedMinAge, debouncedMaxAge]
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1D1D1D] via-black to-[#1D1D1D] px-6 py-14">
      <div className="max-w-7xl mx-auto">
        {/* Header con título y contador */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }} // Reducido de 0.6
        >
          <h1 className="text-4xl font-bold text-white mb-4 font-['Poppins']">
            Nuestro Talento
          </h1>
          <p className="text-gray-300 text-lg">
            Encuentra el talento perfecto para tu proyecto
          </p>
          <div className="mt-4 inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-2">
            <span className="text-white font-medium">
              {filteredItems.length} {filteredItems.length === 1 ? 'talento encontrado' : 'talentos encontrados'}
            </span>
          </div>
        </motion.div>

        {/* Controles de filtro mejorados */}
        <motion.div 
          className="mb-12 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }} // Optimizado
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white font-['Poppins']">Filtros</h2>
            <button
              onClick={clearAllFilters}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Limpiar filtros
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {/* Categoría */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 font-['Poppins']">Categoría</label>
              <select
                className="w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="" className="bg-gray-900">Todas</option>
                {categories.map(c => (
                  <option key={c} value={c} className="bg-gray-900">
                    {categoryLabels[c] || c}
                  </option>
                ))}
              </select>
            </div>

            {/* Género */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 font-['Poppins']">Género</label>
              <select
                className="w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                value={gender}
                onChange={e => setGender(e.target.value)}
              >
                <option value="" className="bg-gray-900">Todos</option>
                {genders.map(g => (
                  <option key={g} value={g} className="bg-gray-900">
                    {genderLabels[g] || g}
                  </option>
                ))}
              </select>
            </div>

            {/* Idioma */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 font-['Poppins']">Idioma</label>
              <select
                className="w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                value={language}
                onChange={e => setLanguage(e.target.value)}
              >
                <option value="" className="bg-gray-900">Todos</option>
                {languages.map(l => (
                  <option key={l} value={l} className="bg-gray-900">
                    {languageLabels[l] || l}
                  </option>
                ))}
              </select>
            </div>

            {/* Región */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 font-['Poppins']">Región</label>
              <select
                className="w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                value={region}
                onChange={e => setRegion(e.target.value)}
              >
                <option value="" className="bg-gray-900">Todas</option>
                {regions.map(r => (
                  <option key={r} value={r} className="bg-gray-900">{r}</option>
                ))}
              </select>
            </div>

            {/* Edad mínima */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 font-['Poppins']">Edad mínima</label>
              <input
                type="number"
                placeholder="Ej. 18"
                className="w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 placeholder-gray-400"
                value={minAge}
                onChange={e => setMinAge(e.target.value)}
              />
            </div>

            {/* Edad máxima */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 font-['Poppins']">Edad máxima</label>
              <input
                type="number"
                placeholder="Ej. 65"
                className="w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 placeholder-gray-400"
                value={maxAge}
                onChange={e => setMaxAge(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Galería Masonry optimizada */}
        <motion.div 
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={galleryKey}
        >
          <AnimatePresence mode="wait"> {/* Cambiado de popLayout a wait para mejor performance */}
            {filteredItems.map(item => (
              <TalentCard
                key={item.id}
                item={item}
                onOpenModal={openModal}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mensaje cuando no hay resultados */}
        {filteredItems.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }} // Reducido de 0.5
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 font-['Poppins']">
                No se encontraron resultados
              </h3>
              <p className="text-gray-300 mb-6">
                Intenta ajustar los filtros para encontrar el talento que buscas
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm font-medium"
              >
                Limpiar todos los filtros
              </button>
            </div>
          </motion.div>
        )}

        {/* Modal optimizado */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }} // Reducido
              onClick={closeModal}
            >
              <motion.div
                className="relative bg-gray-900/90 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden max-w-3xl w-full mx-4 shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }} // Reducido de 0.8
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "tween", duration: 0.2 }} // Cambiado de spring
                onClick={e => e.stopPropagation()}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-64 md:h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-3 text-white font-['Poppins']">{selectedItem.name}</h2>
                    <p className="text-xl text-gray-300 mb-4">{selectedItem.specialty}</p>
                    <p className="text-gray-400 mb-6 leading-relaxed">{selectedItem.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <span className="text-sm text-gray-500 block">Edad</span>
                        <span className="text-white font-medium">{selectedItem.age} años</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 block">Región</span>
                        <span className="text-white font-medium">{selectedItem.region}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 block">Categoría</span>
                        <span className="text-white font-medium">{categoryLabels[selectedItem.category]}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 block">Idioma</span>
                        <span className="text-white font-medium">{languageLabels[selectedItem.language]}</span>
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={() => handleRequestProfile(selectedItem.id)}
                      className="w-full bg-gradient-to-r from-black to-[#1D1D1D] hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Solicitar perfil completo
                    </motion.button>
                  </div>
                </div>
                
                <motion.button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Componente principal memoizado
const FilterMasonGalleryMemo = memo(FilterMasonGallery)

/** Wrapper optimizado **/
export default function GalleryWithData() {
  const handleRequestProfile = useCallback((id) => {
    console.log('Solicitar perfil de id:', id)
    // Aquí se puede integrar con un sistema de solicitudes
  }, [])

  return (
    <FilterMasonGalleryMemo
      items={talentItems}
      onRequestProfile={handleRequestProfile}
    />
  )
}

