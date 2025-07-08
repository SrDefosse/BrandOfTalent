import React from 'react'
import Hero from '../components/home/Hero'
import CommMessage from '../components/home/CommMessage'
import QuoteCTA from '../components/home/QuoteCTA'
import Benefits from '../components/home/Benefits'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CommMessage />
      <Benefits />
      <QuoteCTA />
    </div>
  )
}

export default Home
