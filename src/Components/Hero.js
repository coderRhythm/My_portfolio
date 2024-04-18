import "./heroStyles.css"
import React from 'react'
import Intro from "../assets/intro.png"
import IntroImg from "../assets/IntroImg.jpg"
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg"/>
            </div> 
        <div className="content">
            <img src={Intro} className="port-img"/>
            <p> Hii ,  This is <span>Rhythm sethiya</span> && <div>I am a frontend developer</div></p>
            <h1>Web developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>

            </div>
        </div>
    </div>
  )
}

export default Hero
