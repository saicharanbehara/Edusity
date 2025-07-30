import React, { useEffect, useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const[sticky,setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  },[])
  return (
    <nav className={`container ${sticky ? 'darkNav' : '' }`}>
          <img src = {logo} alt = '' className='logo'/>
        <ul>
            <li>
              <Link to='Hero' smooth={true} offset={-250} duration={500}>
              Home
              </Link>
            </li>
            <li>
              <Link to='program' smooth={true} offset={-250} duration={500}>
              Program
              </Link>
              </li>
            <li>
              <Link to='about' smooth={true} offset={-250} duration={500}>
              About Us
              </Link>
              </li>
            <li>
              <Link to='Campus' smooth={true} offset={-250} duration={500}>
              Campus
              </Link>
              </li>
            <li>
              <Link to='Testimonials' smooth={true} offset={-250} duration={500}>
               Testimonials
              </Link>
              </li>
            <li>
                <button className='btn'> 
                  <Link to='Contact' smooth={true} offset={-250} duration={500}>
               Contact Us
              </Link>
                   </button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar