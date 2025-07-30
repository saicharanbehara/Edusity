import React from 'react'
import '../Hero/Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='Hero container'>
        <div className='Hero-text'>
            <h1>
                We Ensure Better Education for Better World
            </h1>
            <p>
                Our cutting edge edge circulum is designed to empower students with knowledge, skills
                and experience needed to excel in the dynamic field of education
            </p>
            <button className='btn'>
                Explore More
                <img src={dark_arrow} className='' />
            </button>
        </div>
    </div>
  )
}

export default Hero