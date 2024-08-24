import React from 'react';
import './HeroSection.css'; // You'll need to create this CSS file

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="main-headline">Unified Student Project Management Platform</h1>
        <h2 className="sub-headline">Streamlining Collaboration, Progress Tracking, and Resource Sharing for Enhanced Project Development</h2>
        <div className="action-buttons">
          <button className="action-btn">Join now</button>
          <button className="action-btn">Get started</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;