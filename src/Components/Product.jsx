import React, { useState } from 'react';
import './Product.css';
import categories from './categories.js';

const Product = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleDropdownChange = (e) => {
    setActiveIndex(Number(e.target.value));
  };

  return (
    <div className="category-section">
      <h2>Industries We Serve</h2>

      {/* Button Row - Desktop */}
      <div className="category-row desktop-only">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`category-button ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Dropdown - Mobile */}
      <div className="mobile-only category-dropdown">
        <select value={activeIndex} onChange={handleDropdownChange}>
          {categories.map((cat, index) => (
            <option key={index} value={index}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Subcategory Display */}
      {activeIndex !== null && (
        <div className="subcategory-section">
          <h3>{categories[activeIndex].name} Sub-Categories</h3>
          <div className="subcategory-boxes">
            {categories[activeIndex].subcategories.map((sub, idx) => (
              <div key={idx} className="subcategory-box">
                <span className="icon">{sub.icon}</span>
                {sub.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
