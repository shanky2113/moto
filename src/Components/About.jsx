import React from 'react';
import './About.css';

const industries = [
  {
    title: 'Education',
    description: 'Creative visuals for LMS portals, student dashboards, and mobile learning apps.',
  },
  {
    title: 'Food & Beverages',
    description: 'Designs for restaurant menus, packaging, delivery apps & digital branding.',
  },
  {
    title: 'Home Improvement',
    description: 'UI/UX for interior design apps, booking portals, and product showcases.',
  },
  {
    title: 'Real Estate',
    description: 'Property listing UX, virtual tour interfaces, and builder microsites.',
  },
  {
    title: 'Events & Hospitality',
    description: 'Event microsites, ticketing UI, hotel booking systems and branding assets.',
  },
  {
    title: 'Retail & E-commerce',
    description: 'Online store UI, product cards, checkout flows, and digital catalogs.',
  },
];

const IndustriesSection = () => {
  return (
    <section className="industries-section">
      <div className="container">
        <h2 className="section-title">Industries We Serve</h2>
        <p className="section-subtitle">We craft tailored design experiences for these industries:</p>
        <div className="industries-grid">
          {industries.map((industry, idx) => (
            <div key={idx} className="industry-card">
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
