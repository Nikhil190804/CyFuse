

// src/App.js
import React from "react";
import Auth from "./components/Auth.jsx";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import './App.css';
import logo from './assets/logo.jpg';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import TechNewsSection from './components/TechNewsSection';

const CLIENT_ID = '1072192242833-p04mfhg029gk0earersup565qoi3344q.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCTAxL0HW8o_PAmP2RTdjWIl6obyuXWWlI';
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img width="40rem" height="40rem" src={logo} alt="Logo" />
      </div>
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
  useEffect(() => {
    const start = () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES,
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        })
        .then(
          () => {
            console.log('GAPI client initialized');
          },
          (error) => {
            console.error('Error initializing GAPI client', error);
          }
        );
    };
    gapi.load('client:auth2', start);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const createGoogleMeet = async () => {
    try {
      await gapi.client.load('calendar', 'v3');
      console.log('Google Calendar API loaded');

      const event = {
        summary: 'Google Meet Meeting',
        description: 'A Google Meet meeting',
        start: {
          dateTime: '2024-08-25T09:00:00+05:30', // Time in IST
          timeZone: 'Asia/Kolkata',
        },
        end: {
          dateTime: '2024-08-25T10:00:00+05:30', // Time in IST
          timeZone: 'Asia/Kolkata',
        },
        conferenceData: {
          createRequest: {
            requestId: 'sample123',
            conferenceSolutionKey: {
              type: 'hangoutsMeet',
            },
          },
        },
      };

      const response = await gapi.client.calendar.events.insert({
        calendarId: 'primary',
        resource: event,
        conferenceDataVersion: 1,
      });

      console.log('Google Meet link:', response.result.hangoutLink);
    } catch (error) {
      console.error('API request error:', error);
    }
  };

  return (
    <div className="app">
      <Navbar />
      {/* <div className="content-wrapper">
        <Sidebar />
        <MainContent />
      </div> */}
      <HeroSection></HeroSection>
      <IntroSection></IntroSection>
      <TechNewsSection></TechNewsSection>
    <div>
      
      <div className="app">
        <Navbar />
        {/* <div className="content-wrapper">
          <Sidebar />
          <MainContent />
        </div> */}
        <HeroSection />
      </div>
      <button onClick={handleAuthClick}>Sign in with Google</button>
      <button onClick={createGoogleMeet}>Create Google Meet</button>
    </div>
  );
}

export default App;
