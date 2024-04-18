import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"

import Hero2 from "../Components/Hero2"
import AboutContent from "../Components/AboutContent"
const About = () => {
  return (
    <div>
    <Navbar />
      <Hero2 heading="About." text="I'm a friendly web developer"/>
      <AboutContent/>
      <Footer />
  </div>
  )
}

export default About
