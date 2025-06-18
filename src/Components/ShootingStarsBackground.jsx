import React from 'react';
import './ShootingStarsBackground.css';

const ShootingStarsBackground = () => {
  return (
    <div className="shooting-stars-wrapper">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="shooting-star"></div>
      ))}
    </div>
  );
};

export default ShootingStarsBackground;
