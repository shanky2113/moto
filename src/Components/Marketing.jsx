import React from 'react';
import './Marketing.css';
import {  FaStar } from 'react-icons/fa';
import glogo from './Google_logo.svg';

function Marketing() {
  return (
    <>          
    <div className='grid-sys'>
    <div className='left-col'>
        <h1>For Your <span>Pro</span> Social Manager</h1>
        <p>We blend insights and strategy to create digital products for forward-thinking organisations.</p>
        <button className="cta-button">Get Started Now</button>
      </div>
      
    <div className='right-col'>
    <div className='google-card left'> 
     <img src={glogo} alt="google logo" className='g-logo'/>   <h3> Google Ads</h3>
        <p> take icons</p>
        <div className="rating">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" /> </div>
        </div>

        <div className='google-card right'> 
     <img src={glogo} alt="google logo" className='g-logo'/>   <h3> Google Ads</h3>
        <p> take icons</p>
        <div className="rating">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" /> </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Marketing;
