import React from 'react'
import TalentFilter from '../components/talent/TalentFilter'
import TalentGrid from '../components/talent/TalentGrid'

const Talent = () => {
  return (
    <div className="talent-page">
      <div className="container">
        <h1>Talento</h1>
      </div>
      <TalentFilter />
      <TalentGrid />
    </div>
  )
}

export default Talent
