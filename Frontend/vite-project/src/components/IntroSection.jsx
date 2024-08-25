import React from 'react';
import './IntroSection.css';

function IntroSection() {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <h2 className="intro-title">Intro Section</h2>
        <p className="intro-text">
        Welcome to our app! We're excited to have you on board. Here’s a quick overview of how it works:
        </p>
        <ul className="intro-features">
          <li>
            <h3>Streamlined Project Management</h3>
            <p>Easily create, manage, and track your student projects from start to finish. Our intuitive interface allows you to organize tasks, set deadlines, and monitor progress all in one place.</p>
            </li>
          <li><h3>Collaborative Workspace</h3>
          <p>Work seamlessly with your team members using our built-in collaboration tools. Share resources, communicate in real-time, and keep everyone on the same page to ensure your project stays on track.</p>
          </li>
          <li>
            <h3>Resource Sharing and Accessibility</h3>
            <p>Access a wealth of resources and share your own. Our platform provides a central repository for documents, templates, and helpful links, making it easy for everyone to contribute and benefit.</p>
          </li>
        </ul>
        <p className="intro-cta">
          Get started today and experience the benefits of our app!
        </p>
      </div>
    </section>
  );
}

export default IntroSection;