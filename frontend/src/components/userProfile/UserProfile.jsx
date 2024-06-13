import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './UserProfile.css'; // Import CSS file for custom styling
import {axiosWithToken} from '../../axiosWithToken.jsx' // Import axios for making HTTP requests
import table from '../../images/table.jpg'

// Component for displaying upcoming events
function UpcomingEventsCard({ upcomingEvents }) {
  return (
    <Card className="upcoming-events-card">
      <CardContent>
        <Typography variant="h5" component="h2">
          Upcoming Events
        </Typography>
        {upcomingEvents.map((event, index) => (
          <Card key={index} className="event-card">
            <CardContent className="event-content">
              <div className="event-info">
                <Typography variant="h6" component="div" className="event-name">
                  {event.eventname}
                </Typography>
                <div className="event-details">
                  <Typography variant="body1" component="div" className="event-time">
                    {event.date} | {event.duration} day/days
                  </Typography>
                  <Typography variant="body1" component="div" className="event-organizer">
                    Organized by: {event.organizingClub}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}

function UserProfile() {
  const [upcomingEvents, setUpcomingEvents] = useState([]); // State to store upcoming events

  useEffect(() => {
    // Function to fetch upcoming events from backend
    const fetchUpcomingEvents = async () => {
      try {
        const response = await axiosWithToken.get('http://localhost:4000/user-api/allBookings'); // Replace with your actual API endpoint
        if (response.data.payload) {
          // Sort events by date in ascending order (assuming backend already does this)
          const sortedEvents = response.data.payload.sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
          // Set state with sorted upcoming events
          setUpcomingEvents(sortedEvents);
        } else {
          console.error('No events found in response payload');
        }
      } catch (error) {
        console.error('Error fetching upcoming events:', error.message);
      }
    };

    // Fetch upcoming events when component mounts
    fetchUpcomingEvents();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="user-profile">
      {/* Image on the left */}
      <div className="profile-image">
        <img src={table} alt="Profile" />
      </div>
      
      {/* Upcoming Events on the right */}
      <div className="upcoming-events">
        <UpcomingEventsCard upcomingEvents={upcomingEvents} />
      </div>
    </div>
  );
}

export default UserProfile;
