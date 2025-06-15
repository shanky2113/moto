import React from 'react';
import './About.css';

const industries = [
  {
    title: 'Education',
    description: [
      'Creative visuals for LMS portals',
      'Student dashboards',
      'Mobile learning apps',
    ],
    bg: 'linear-gradient(135deg, #4c02d4, #35075a)',
    shadow: '0 8px 20px rgba(0, 0, 0, 0.49)',
  },
  {
    title: 'Food & Beverages',
    description: [
      'Restaurant menus',
      'Packaging designs',
      'Delivery apps',
      'Digital branding',
    ],
    bg: 'linear-gradient(135deg, #516395, #614385)',
    shadow: '0 8px 20px rgba(0, 0, 0, 0.49)',
  },
  {
    title: 'Home Improvement',
    description: [
      'Interior design apps',
      'Booking portals',
      'Product showcases',
    ],
    bg: 'linear-gradient(135deg, #734b6d, #42275a)',
    shadow: '0 8px 20px rgba(0, 0, 0, 0.49)',
  },
  {
    title: 'Real Estate',
    description: [
      'Property listing UX',
      'Virtual tour interfaces',
      'Builder microsites',
    ],
    bg: 'linear-gradient(135deg, #000428 , #004e92)',
    shadow: '0 8px 20px rgba(0, 0, 0, 0.49)',
  },
  {
    title: 'Events & Hospitality',
    description: [
      'Event microsites',
      'Ticketing UI',
      'Hotel booking systems',
      'Branding assets',
    ],
    bg: 'linear-gradient(135deg, #43cea2 , #185a9d)',
    shadow: '0 8px 20px rgba(0, 0, 0, 0.49)',
  },
  {
    title: 'Retail & E-commerce',
    description: [
      'Online store UI',
      'Product cards',
      'Checkout flows',
      'Digital catalogs',
    ],
    bg: 'linear-gradient(135deg,rgb(91, 235, 72),rgb(21, 146, 59))',
    shadow: '0 8px 20px rgba(0, 0, 0, 0.49)',
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
            <div key={idx} className="industry-card" style={{ background: industry.bg, boxShadow: industry.shadow }}>
              <h3>{industry.title}</h3>
              <ul>
    {industry.description.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
