import React from 'react'
import History from '../components/about/History'
import Differentiators from '../components/about/Differentiators'
import Vision from '../components/about/Vision'
import AboutSection from '../components/about/AboutSection'

const About = () => {
  return (
    <div className="about-page">
      <AboutSection />
      <History />
      <Differentiators />
      <Vision />
    </div>
  )
}

export default About
