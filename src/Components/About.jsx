import React from 'react';
import '../Components/About.css';

const logos = [
  '/logos/logo1.svg',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.png',
  '/logos/logo5.png',
];

const About = () => {
  return (
    <div className="hero-bottom-center">
      <h2 className="about-heading">Our Trusted Partners</h2>
      <div className="logo-slider-container">
        <div className="logo-slider-box">
          <div className="logo-slider-track">
            {[...logos, ...logos].map((src, idx) => (
              <img key={idx} src={src} alt={`logos${idx}`} className="logo-img" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
