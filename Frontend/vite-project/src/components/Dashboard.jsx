// src/components/Dashboard.jsx
import React from 'react';
import './Dashboard.css'; // Create this CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img src="/path-to-your-logo.png" alt="Logo" />
    </div>
    <div className="navbar-links">
      <a href="/">Home</a>
      <a href="#">Projects</a>
      <a href="#">Resources</a>
      <a href="#">Messages</a>
      <a href="#">Notifications</a>
    </div>
    <div className="navbar-profile">Profile</div>
  </nav>
);

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-section">
      <h3>Active Projects</h3>
      <div className="projects-list">
        <div className="project-card">
          <h4>Project Title 1</h4>
          <p>Description for project 1</p>
        </div>
        <div className="project-card">
          <h4>Project Title 2</h4>
          <p>Description for project 2</p>
        </div>
        <div className="project-card">
          <h4>Project Title 2</h4>
          <p>Description for project 3</p>
        </div>
        <div className="project-card">
          <h4>Project Title 2</h4>
          <p>Description for project 4</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
    <div className="sidebar-section">
      <h3>Archived Projects</h3>
      <div className="project-card">
          <h4>Project Title 1</h4>
          <p>Description for project 1</p>
        </div>
        <div className="project-card">
          <h4>Project Title 2</h4>
          <p>Description for project 2</p>
        </div>
        <div className="project-card">
          <h4>Project Title 2</h4>
          <p>Description for project 3</p>
        </div>
        <div className="project-card">
          <h4>Project Title 2</h4>
          <p>Description for project 4</p>
        </div>
      {/* Content will be added later */}
    </div>
  </aside>
);

const MainContent = () => (
  <main className="main-content">
    <h1>Dashboard</h1>
    <div className="dashboard-grid">
      <div className="dashboard-card">
        <h2>Project Summary</h2>
        <p>Overview of your current projects</p>
      </div>
      <div className="dashboard-card">
        <h2>Recent Activity</h2>
        <ul>
          <li>Update 1</li>
          <li>Update 2</li>
          <li>Announcement 1</li>
        </ul>
      </div>
      <div className="dashboard-card">
        <h2>Upcoming Deadlines</h2>
        <p>Calendar view here</p>
      </div>
      <div className="dashboard-card">
        <h2>Team Performance</h2>
        <p>Performance metrics and charts</p>
      </div>
    </div>
  </main>
);

export default Dashboard;
