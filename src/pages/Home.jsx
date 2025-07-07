import React from 'react'
import Hero from '../components/home/Hero'
import CommMessage from '../components/home/CommMessage'
import QuoteCTA from '../components/home/QuoteCTA'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CommMessage />
      <QuoteCTA />
    </div>
  )
}

export default Home
