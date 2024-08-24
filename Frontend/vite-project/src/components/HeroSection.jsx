// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = ({ onJoinNow, onGetStarted }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="main-headline">Unified Student Project Management Platform</h1>
        <h2 className="sub-headline">Streamlining Collaboration, Progress Tracking, and Resource Sharing for Enhanced Project Development</h2>
        <div className="action-buttons">
          <button className="action-btn" onClick={onJoinNow}>Join Now</button>
          <button className="action-btn" onClick={onGetStarted}>Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
