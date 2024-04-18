import React, { useEffect, useState } from 'react'
import Logo from '../../Assets/logo.png'
import './Navbar.css'
import menu_icon from '../../Assets/menu-icon.png'
function Navbar() {
  const[sticky,setSticky]=useState(false)
  useEffect(()=>{
window.addEventListener('scroll',()=>{
      window.scrollY>300?setSticky(true):setSticky(false)
})
  },[])
  const [mobileMenu,setMobileMenu]=useState(false)
  const toggleMenu=()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true)
  }
  return (
    <nav className={`container ${sticky?"dark-nav":""}`}>
      <img src={Logo}alt="Logo" className="logo" />
      <ul className={mobileMenu?"":'hide-mobile-menu'}>
        <a href="home"><li>Home</li></a>
        <li><a href="#programs">Programs</a></li>
        <a href="#aboutus"><li>About Us</li></a>
        <a href="#testimonials"><li>Testimonials</li></a>
        <li>Campus</li>
        <a href="#contactus"><li><button className="btn">Contact Us</button></li></a>
      </ul>
      <img src={menu_icon} alt="" className={`menu-icon`}
      onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
