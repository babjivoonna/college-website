import React from 'react'
import './About.css'
import About_img from '../../Assets/about.png'
import Play_icon from '../../Assets/play-icon.png'

const About=({setPlayState})=> {
  return (
    <div className="about" id="aboutus">
        <div className="about-left">
            <img src={About_img} alt="About_image"  className="about-img"/>
            <img src={Play_icon} alt=" Play_icon"  className="playicon" onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right"
        >
            <h3>About University</h3>
            <h2>Nuturing the Tommorow's leader</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consequuntur quis doloribus iste quia quas porro, ea nesciunt, alias aut tempora cum quisquam mollitia omnis rerum voluptates quaerat sed. Aliquam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti ipsam omnis amet culpa explicabo labore aspernatur placeat ipsa ad dolore expedita numquam repellendus consequatur, recusandae perspiciatis esse at architecto?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vitae culpa deleniti, alias explicabo, at commodi ad aliquid tenetur numquam laboriosam. Iure ab omnis magnam eligendi hic totam provident sint!</p>
        </div>
      
    </div>
  )
}

export default About
