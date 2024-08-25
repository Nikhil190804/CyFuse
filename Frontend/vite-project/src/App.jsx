import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import './App.css';
import logo from './assets/logo.jpg';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import TechNewsSection from './components/TechNewsSection';
import NewProject from './components/NewProject';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

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

function App() {
  const [authMode, setAuthMode] = useState(null); // 'signup' or 'signin' or null
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    setIsAuthenticated(true); // Set authentication state to true
    setAuthMode(null); // Clear auth mode
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            !isAuthenticated ? (
              <>
                {!authMode ? (
                  <>
                    <HeroSection onJoinNow={handleJoinNowClick} onGetStarted={handleGetStartedClick} />
                    <IntroSection />
                    <TechNewsSection />
                    <NewProject />
                  </>
                ) : (
                  <Auth isSignUp={authMode === 'signup'} onSuccess={handleAuthSuccess} />
                )}
              </>
            ) : (
              <Dashboard />
            )
          } />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
