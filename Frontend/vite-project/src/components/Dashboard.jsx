import React, { useState } from 'react';
import './Dashboard.css'; // Create this CSS file for styling
import { loadGoogleCalendarAPI, createGoogleMeetEvent } from './Services';
import Footer from './Footer';

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [dateTime, setDateTime] = useState('');
  const [meetLink, setMeetLink] = useState('');

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  const handleCreateGoogleMeet = async () => {
    try {
      await loadGoogleCalendarAPI();
      const link = await createGoogleMeetEvent(dateTime);
      setMeetLink(link);
    } catch (error) {
      console.error('API request error:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <Sidebar />
        <MainContent
          showForm={showForm}
          handleToggleForm={handleToggleForm}
          dateTime={dateTime}
          handleDateTimeChange={handleDateTimeChange}
          handleCreateGoogleMeet={handleCreateGoogleMeet}
          meetLink={meetLink}
        />
      </div>
      <Footer />
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
          <h4>Project Title 3</h4>
          <p>Description for project 13</p>
        </div>
        <div className="project-card">
          <h4>Project Title 4</h4>
          <p>Description for project 4</p>
        </div>
        <div className="project-card">
          <h4>Project Title 5</h4>
          <p>Description for project 5</p>
        </div>
        <div className="project-card">
          <h4>Project Title 6</h4>
          <p>Description for project 6</p>
        </div>
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
        <h4>Project Title 3</h4>
        <p>Description for project 3</p>
      </div>
      <div className="project-card">
        <h4>Project Title 4</h4>
        <p>Description for project 4</p>
      </div>
      <div className="project-card">
        <h4>Project Title 5</h4>
        <p>Description for project 5</p>
      </div>
      <div className="project-card">
        <h4>Project Title 6</h4>
        <p>Description for project 6</p>
      </div>
    </div>
  </aside>
);

const MainContent = ({ showForm, handleToggleForm, dateTime, handleDateTimeChange, handleCreateGoogleMeet, meetLink }) => (
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
      <div className='dashboard-card'>
        <h2>Create Google Meet</h2>
        <button onClick={handleToggleForm}>Create Google Meet</button>
        {showForm && (
          <div>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={handleDateTimeChange}
            />
            <button onClick={handleCreateGoogleMeet}>Generate Meet Link</button>
          </div>
        )}
        {meetLink && (
          <p>
            Google Meet Link:{' '}
            <a href={meetLink} target="_blank" rel="noopener noreferrer">
              {meetLink}
            </a>
          </p>
        )}
      </div>
    </div>
  </main>
);

export default Dashboard;
