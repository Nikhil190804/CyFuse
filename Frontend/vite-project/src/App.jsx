import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import './App.css'

const CLIENT_ID = '1072192242833-p04mfhg029gk0earersup565qoi3344q.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCTAxL0HW8o_PAmP2RTdjWIl6obyuXWWlI';
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

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
    <div>
      <button onClick={handleAuthClick}>Sign in with Google</button>
      <button onClick={createGoogleMeet}>Create Google Meet</button>
    </div>
  );
}

export default App;
