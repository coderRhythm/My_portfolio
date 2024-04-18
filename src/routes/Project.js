import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import Hero2 from "../Components/Hero2"
import Work from "../Components/Work"
const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="Projects." text="Some of my recent works.."/>
      <Work/>
      <Footer />

    </div>
  )
}

export default Project
