import React from 'react'
import Hero from '../components/home/Hero'
import CommMessage from '../components/home/CommMessage'
import QuoteCTA from '../components/home/QuoteCTA'
import HoverBenefits from '../components/home/HoverBenefits'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CommMessage />
      <HoverBenefits />
      <QuoteCTA />
    </div>
  )
}

export default Home
