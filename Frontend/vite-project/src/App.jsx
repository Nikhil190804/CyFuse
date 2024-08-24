import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import './App.css';
import logo from './assets/logo.jpg';
import HeroSection from './components/HeroSection';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

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
        <a href="/">Home</a>
        <a href="#">Projects</a>
        <a href="#">Resources</a>
        <a href="#">Messages</a>
        <a href="#">Notifications</a>
      </div>
      <div className="navbar-profile">Profile</div>
    </nav>
  );
}

function App() {
  const [authMode, setAuthMode] = useState(null);

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

  const handleJoinNowClick = () => {
    setAuthMode('signup');
  };

  const handleGetStartedClick = () => {
    setAuthMode('signin');
  };

  const handleAuthSuccess = () => {
    setAuthMode(null); // Reset state after successful auth
  };

  const handleAuthClick = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance.signIn().then(() => {
      console.log('User signed in');
    }).catch(error => {
      console.error('Error signing in', error);
    });
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
    <Router>
      <div>
        <Navbar />
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                !authMode ? (
                  <HeroSection onJoinNow={handleJoinNowClick} onGetStarted={handleGetStartedClick} />
                ) : (
                  <Auth isSignUp={authMode === 'signup'} onSuccess={handleAuthSuccess} />
                )
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <button onClick={handleAuthClick}>Sign in with Google</button>
        <button onClick={createGoogleMeet}>Create Google Meet</button>
      </div>
    </Router>
  );
}

export default App;
