// src/services/googleMeetService.js

import { gapi } from 'gapi-script';

export const loadGoogleCalendarAPI = async () => {
  await gapi.client.load('calendar', 'v3');
  console.log('Google Calendar API loaded');
};

export const createGoogleMeetEvent = async (dateTime) => {
  const event = {
    summary: 'Google Meet Meeting',
    description: 'A Google Meet meeting',
    start: {
      dateTime: new Date(dateTime).toISOString(),
      timeZone: 'Asia/Kolkata',
    },
    end: {
      dateTime: new Date(new Date(dateTime).getTime() + 60 * 60 * 1000).toISOString(), // 1-hour duration
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

  return response.result.hangoutLink;
};
