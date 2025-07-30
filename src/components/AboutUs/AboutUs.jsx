import React from 'react'
import '../AboutUs/AboutUs'
import About from '../../assets/about.png'
import Playicon from '../../assets/play-icon.png'
const AboutUs = ({subTitle,title}) => {
  return (
    <div className='AboutUs'>
        <div className='About-left'>
            <img src={About} alt='' className='About-img'/>
            <img src={Playicon} className='Play-icon'/>
        </div>
        <div className='About-right'>
            <h3>{subTitle}</h3>
            <h2>{title}</h2>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
  )
}

export default AboutUs