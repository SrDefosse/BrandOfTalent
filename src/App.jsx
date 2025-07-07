import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Importar páginas
import Home from './pages/Home'
import About from './pages/About'
import Talent from './pages/Talent'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Quote from './pages/Quote'
import Contact from './pages/Contact'

// Importar layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
