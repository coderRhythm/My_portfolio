import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import Form from "../Components/Form"
import Hero2 from "../Components/Hero2"
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="CONTACT." text="lets have a chat...."/>
 
    <Form/>
    <Footer />
    </div>
  )
}

export default Contact
