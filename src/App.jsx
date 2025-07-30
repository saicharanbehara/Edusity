import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/programs'
import Title from './components/Title/Title'
import AboutUs from './components/AboutUs/AboutUs'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle = "Our Programs" title = "What we Offers"/>
        <Programs/>
        <AboutUs subTitle = "About University" title = "Nurturing Tomorrow's Leaders Today"/>
        <Title subTitle = "Gallery" title = "Campus Photos"/>
        <Campus/>
        <Title subTitle = "Testimonial" title = "What Student Stays"/>
        <Testimonials/>
        <Title subTitle = "Contact Us" title = "Get in touch"/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App