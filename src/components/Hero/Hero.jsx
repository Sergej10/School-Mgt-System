import React from 'react'
import './Hero.css'
import {  FaArrowAltCircleRight, } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Edulink</h1>
            <p>Modern school management system</p>
            <button className='btn'>Explore More<FaArrowAltCircleRight/></button>
        </div>
        
    </div>
  )
}

export default Hero