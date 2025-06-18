import React, { useState } from 'react';
import './Slider.css';
import Image1 from './IT.png';
import Image2 from './mk.png';
import Image3 from './graphics.png';
import Image4 from './meetup.png';
import { FaLaptopCode, FaAudioDescription, FaPaintBrush, FaStackOverflow, FaSearch, FaHeadset } from 'react-icons/fa';
import { Button } from '@mui/material';

const slides = [
  {
    icon: <FaLaptopCode size={50} />,
    heading: 'Development',
    description: 'Developing web based applications using the required technologies. Our team are proffesional in working',
    image: Image1,
    // background: 'linear-gradient(135deg,rgba(14, 179, 255, 0),rgba(0, 200, 255, 0.21))',
    buttonText: 'Contact Us',
    buttonLink: '#contact',
  },
  {
    icon: <FaAudioDescription size={50} />,
    heading: 'Marketing',
    description: 'Get more distributors, Investors for your products or services and enhance your sales.',
    image: Image2,
    background: 'linear-gradient(135deg,rgba(14, 179, 255, 0),rgba(0, 200, 255, 0.21))',
    buttonText: 'Advertise',
    buttonLink: '#contac',
  },
  {
    icon: <FaPaintBrush size={50} />,
    heading: 'Designing',
    description: 'Unique designing of engaging Graphics, Animations & Content to get user attention.',
    image: Image3,
    background: 'linear-gradient(135deg,rgba(14, 179, 255, 0),rgba(0, 200, 255, 0.21))',
    buttonText: 'Design',
    buttonLink: '#contac',
  },
  {
    icon: <FaStackOverflow size={50} />,
    heading: 'Maintenance',
    description: 'Monitoring of project and maintaining good Return of Investments.',
    image: Image4,
    background: 'linear-gradient(135deg,rgba(14, 179, 255, 0),rgba(0, 200, 255, 0.21))',
    buttonText: 'Maintain',
    buttonLink: '#contact',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { heading, description, image, background, icon } = slides[currentIndex];

  return (
    <div className="slider-wrapper">
      <div className="slider-container"style={{ background }}>
      <div className="slider-left">
  <h2>{heading}</h2>
  <p>{description}</p>
  {icon && <div className="icon">{icon}</div>}
  {slides[currentIndex].buttonText && (
    <Button
      variant="contained"
      color="primary"
      className="slide-button"
      href={slides[currentIndex].buttonLink}
      style={{ marginTop: '20px' }}
    >
      {slides[currentIndex].buttonText}
    </Button>
  )}
</div>
        <div className="slider-right">
          <img src={image} alt={`Slide ${currentIndex + 1}`} className="slider-image"/>
        </div>
      </div>

      <div className="slider-bullets">
  {slides.map((_, index) => (
    <span
      key={index}
      className={`bullet ${index === currentIndex ? 'active' : ''}`}
      onClick={() => setCurrentIndex(index)}
    ></span>
  ))}
</div>
    </div>
  );
};

export default Slider;
