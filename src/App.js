// import logo from './logo.svg';
// import axios from 'axios'
import { useState } from 'react';
import './App.css';
import About from './Compenent/ABOUT/About';
import Contact from './Compenent/Contact/Contact';
import Footer from './Compenent/Footer/Footer';
import Hero from './Compenent/Hero/Hero';
import Program from './Compenent/Programs/Program';
import Testimonial from './Compenent/Testimonials/Testimonial';
import Title from './Compenent/Title/Title';
import VideoPlayer from './Compenent/VideoPlayer/VideoPlayer';
import Navbar from './Compenent/navbar/Navbar';

function App() {
    const [playState,setPlayState]=useState(false)
  return (
    <div >
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle="Our Program" title="What We Offer"/>
      <Program/>
      <About setPlayState={setPlayState}/>
      <Title subtitle="Gallery" title="Campus Photos"/>
      <Title subtitle="TESTIMONIALS" title="What Student Says"/>
      <Testimonial/>
      <Title subtitle="Contact Us" title="Get In Touch"/>
      <Contact/>
      <Footer/>
      </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;
