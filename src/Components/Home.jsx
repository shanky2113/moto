import React from 'react'
import './Home.css';
import imagebox from './imagebox.jpg';
import SliderBoxes from './SlidingBoxes.jsx';
import image from './background.webp';
import { FaCar, FaIndustry, FaDraftingCompass, FaCouch, FaTools } from 'react-icons/fa';
import Slider from './Slider.jsx';
import Product from './Product.jsx';
import Industry from './Industry.jsx';
import About from './About.jsx';
import Service from './Service.jsx';




function Home() {
  return (
    <div>
      <Slider/>
        <div className="section1">
            <h1>MWT is Highway for your business needs.</h1>
            <p>MWT is a global IT Service providing Company with Technical Powers, Respectfully working for our Clients Business Dreams. We help our clients with Marketing, Design, Develop and Maintaining of Business Processes by Utilizing the technologies.
            </p>
             <Service />
        </div>
        
    <div className="section2">
      <h2>Make Big Appearance of Your Business.</h2>
      <p>Our team is assembled in a manner that we have expert’s who do work together to make big appearance of your business</p>
      </div>
      <SliderBoxes/>
    <div><Product /></div>
    <div className="section6"> 
      <Industry />
    </div>
  

    </div>
  )
}

export default Home
