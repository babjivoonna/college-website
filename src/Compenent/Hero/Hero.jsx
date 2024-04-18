import React from 'react'
import './Hero.css'
import Dark_arrow from'../../Assets/dark-arrow.png'

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure Better Education For Better Society</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta, unde commodi maxime eaque voluptatum a provident adipisci cupiditate placeat natus. Dignissimos quis soluta fuga consequatur blanditiis iusto nihil suscipit</p>
        <button className="btn">Explore More<img src={Dark_arrow}/> </button>

      </div>
    </div>
  )
}

export default Hero
