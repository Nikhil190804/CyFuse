import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo.jpg';
import HeroSection from './components/HeroSection';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"> <img width = "40rem" height = "40rem" src={logo} alt="Logo" /></div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Resources</a>
        <a href="#">Messages</a>
        <a href="#">Notifications</a>
      </div>
      <div className="navbar-profile">Profile</div>
    </nav>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Project Overview</h3>
        <ul>
          <li>Active Projects</li>
          <li>Archived Projects</li>
          <li>Project Templates</li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Team Collaboration</h3>
        <ul>
          <li>Team Forums</li>
          <li>Group Chat</li>
          <li>Collaborative Tools</li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h3>Progress Tracking</h3>
        <ul>
          <li>Milestones</li>
          <li>Deadlines</li>
        </ul>
      </div>
      {/* Add more sidebar sections as needed */}
    </aside>
  );
}

function MainContent() {
  return (
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
}
function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <div className="content-wrapper">
        <Sidebar />
        <MainContent />
      </div> */}
      <HeroSection></HeroSection>
    </div>
  );
}

export default App;