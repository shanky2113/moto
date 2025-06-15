import React from 'react';
import './Designing.css';
import { FaPaintBrush, FaCode, FaBullhorn, FaMobileAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import cssIcon from '../Assets/css.png';
import jsIcon from '../Assets/javascript.png';
import tsIcon from '../Assets/ts.png';
import waIcon from '../Assets/wa.png';
import logo1 from '../Assets/logos/logo1.svg';
import logo2 from '../Assets/logos/logo2.svg';
import logo3 from '../Assets/logos/logo3.svg';
import logo4 from '../Assets/logos/logo4.svg';
import logo5 from '../Assets/logos/logo5.svg';
import About from '../Components/About.jsx';
const logos = [logo1, logo2, logo3, logo4, logo5];

const icons = [
  { src: cssIcon, alt: 'UI&UX', glow: 'blue' },
  { src: jsIcon, alt: 'Application', glow: 'yellow' },
  { src: tsIcon, alt: 'Website', glow: 'cyan' },
  { src: waIcon, alt: 'Graphics', glow: 'purple' },
  { src: waIcon, alt: 'Product', glow: 'red' },
];

function Designing() {
  return (
    <>
      <div className="hero-designing">
        <div className="hero-top">
          <div className="hero-left">
            <h1>
              Creating Intuitive User Interfaces That <span className="con">Convert</span>
            </h1>
            <h2>We create Good Graphics and content for Online marketing and Advertising.</h2>
            <button className="hero-button">Learn More</button>
          </div>

          <div className="hero-right">
            <div className="icon-layout">
              <div className="icon-row">
                <div className="icon-circle"><FaPaintBrush /></div>
                <div className="icon-circle"><FaCode /></div>
              </div>
              <div className="icon-row single">
                <div className="icon-circle"><FaBullhorn /></div>
              </div>
            </div>
          </div>
        </div>

        {/* ⬇️ This is centered below the two columns */}
        <div className="hero-bottom-center">
          <h2 className="logo-heading">Our Trusted Partners</h2>
          <div className="logo-slider-container">
            <div className="logo-slider-box">
              <div className="logo-slider-track">
                {[...logos, ...logos].map((src, idx) => (
                  <img key={idx} src={src} alt={`logo-${idx}`} className="logo-img" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="designing-icons">
        <h2>What We Design</h2>
        <div className="tech-icons-section">
          {icons.map((icon, index) => (
            <div key={index} className="icon-container">
              <div className={`icon-box glow-${icon.glow}`}>
                <img src={icon.src} alt={icon.alt} />
              </div>
              <p className="icon-label">{icon.alt}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='why-us'>
              <h2> Industries we serve </h2>
              <h2> What we Design <br></br> Great Design Build Better Get Success</h2>
              <p>we at motowetech define client real need to get access to digital world</p>             
              <div className="section-row">
        <div className="action-box">
        <div className="icon-grid">
                <div className="icon-item"><div className="design-icon-box"><FaPaintBrush /></div><p>Design</p></div>
                <div className="icon-item"><div className="design-icon-box"><FaCode /></div><p>Development</p></div>
                <div className="icon-item"><div className="design-icon-box"><FaBullhorn /></div><p>Marketing</p></div>
                <div className="icon-item"><div className="design-icon-box"><FaMobileAlt /></div><p>Mobile</p></div>
              </div>
        </div>
        <div className="section-box2">Section 2
          <Button>Get Now</Button>
        </div>
        <div className="action-box">
        <div className="icon-grid">
                <div className="icon-item"><div className="design-icon-box"><FaPaintBrush /></div><p>Design</p></div>
                <div className="icon-item"><div className="design-icon-box"><FaCode /></div><p>Development</p></div>
                <div className="icon-item"><div className="design-icon-box"><FaBullhorn /></div><p>Marketing</p></div>
                <div className="icon-item"><div className="design-icon-box"><FaMobileAlt /></div><p>Mobile</p></div>
              </div>
      
        </div>
      </div>
              </div>
              <About />
      
    </>
  );
}

export default Designing;
