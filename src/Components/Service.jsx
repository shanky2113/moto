import React from 'react';
import './service.css';
import imagebox from './background.webp';
import { FaBullhorn, FaLaptopCode, FaTools, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    title: 'Marketing',
    icon: <FaBullhorn size={30} />,
    bgColor: '#1d1d1d',
    textColor: '#ffffff',
    size: 160,
    // bgImage:imagebox,
  },
  {
    title: 'Development',
    icon: <FaLaptopCode size={30} />,
    bgColor: '#1d1d1d',
    textColor: '#fff',
    size: 160,
  },
  {
    title: 'Maintaining',
    icon: <FaTools size={30} />,
    bgColor: '#1d1d1d',
    textColor: '#fff',
    size: 160,
  },
  {
    title: 'Designing',
    icon: <FaPaintBrush size={30} />,
    bgColor: '#1d1d1d',
    textColor: '#fff',
    size: 160,
  },
];


const Service = () => {
  return (
    <>
      <div className="services-wrapper"> {/* ✅ This container was missing */}
      {services.map((service, index) => (
  <div
    key={index}
    className="service-circle"
    style={{
      backgroundColor: service.bgColor,
      color: service.textColor,
      // width: service.size,
      // height: service.size,
      backgroundImage: `url(${service.bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      border: '5px solid rgba(105, 105, 105, 0.92)', // optional: adds border glow
  }}
>
    
  
    <div className="service-icon" style={{ color: service.textColor }}>
      {service.icon}
    </div>
    <h3 className="service-title" style={{ color: service.textColor }}>
      {service.title}
    </h3>
  </div>
))}

      </div>
    </>
  );
};

export default Service;