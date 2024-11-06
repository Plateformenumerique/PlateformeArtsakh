import React from 'react'
import Hero from '../components/Hero'
import LatestActor from '../components/LatestActor'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestActor />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home