import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/programs'
import Title from './components/Title/Title'
import AboutUs from './components/AboutUs/AboutUs'
import Campus from './components/Campus/Campus'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle = "Our Programs" title = "What we Offers"/>
        <Programs/>
        <AboutUs subTitle = "About University" title = "Nurturing Tomorrow's Leaders Today"/>
        <Campus subTitle = "Gallery" title = "Campus Photos"/>
      </div>
    </div>
  )
}

export default App