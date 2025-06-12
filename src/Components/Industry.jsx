import React, { useState } from 'react';
import './Industry.css';
import categories from './categories.js'; // Your categories with icons

const Industry = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleDropdownChange = (e) => {
    setActiveIndex(Number(e.target.value));
  };

  return (
    <div className="product-container">
      <h2>Industries we serve</h2>

      <div className="product-content">
        {/* Category Section */}
        <div className="categories">
          <h3>Categories</h3>

          {/* Category Buttons - Desktop View */}
          <div className="category-buttons desktop-view">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`category-btn ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
              >
                {/* Displaying category icon dynamically */}
                <span className="category-icon">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Category Dropdown for Mobile View */}
          <div className="category-dropdown mobile-view">
            <select value={activeIndex} onChange={handleDropdownChange}>
              {categories.map((cat, index) => (
                <option key={index} value={index}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Subcategory Section */}
        <div className="subcategories">
          {activeIndex !== null && (
            <div className="subcategory-content">
              <h3>{categories[activeIndex].name} Sub-Categories</h3>
              <div className="subcategory-items">
                {categories[activeIndex].subcategories.map((sub, idx) => (
                  <div key={idx} className="subcategory-item">
                    {/* Displaying subcategory icon */}
                    <span className="subcategory-icon">{sub.icon}</span>
                    {sub.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Industry;
