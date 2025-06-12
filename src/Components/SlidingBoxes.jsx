import React from 'react';
import { FaCouch, FaDonate, FaPaintBrush, FaChartBar, FaSearch, FaHeadset } from 'react-icons/fa';
import './SlidingBoxes.css';

const SlidingBoxes = () => {
  const boxes = [
    {
      id: 1,
      heading: 'Furniture',
      content: 'Grow your brand and reach.',
      icon: <FaCouch size={40} />,
    },
    {
      id: 2,
      heading: 'Development',
      content: 'Build scalable web apps.',
      icon: <FaDonate size={40} />,
    },
    {
      id: 3,
      heading: 'Design',
      content: 'Create beautiful UI/UX.',
      icon: <FaPaintBrush size={40} />,
    },
    {
      id: 4,
      heading: 'Analytics',
      content: 'Make data-driven decisions.',
      icon: <FaChartBar size={40} />,
    },
    {
      id: 5,
      heading: 'SEO',
      content: 'Boost your online visibility.',
      icon: <FaSearch size={40} />,
    },
    {
      id: 6,
      heading: 'Support',
      content: '24/7 customer assistance.',
      icon: <FaHeadset size={40} />,
    },
  ];

  return (
    <div className="slider-container">
      <div className="slider">
        {boxes.map((box) => (
          <div key={box.id} className="box" style={{ backgroundColor: box.bgColor }}>
            <div className="icon">{box.icon}</div>
            <h3>{box.heading}</h3>
            <p>{box.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingBoxes;
