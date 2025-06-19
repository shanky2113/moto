import React from 'react';
import './MiniCard.css';
import logo from './Google_logo.svg'; // Replace with your own logo path

const MiniCard = () => {
  return (
    <div className="mini-card">
      <img src={logo} alt="logo" className="card-logo" />

      <div className="graph">
        <div className="bar-vertical">
          <div className="bar-fill-vertical" style={{ height: '70%' }}></div>
          <span>Reach</span>
        </div>
        <div className="bar-vertical">
          <div className="bar-fill-vertical" style={{ height: '50%' }}></div>
          <span>Leads</span>
        </div>
        <div className="bar-vertical">
          <div className="bar-fill-vertical" style={{ height: '90%' }}></div>
          <span>Engage</span>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
