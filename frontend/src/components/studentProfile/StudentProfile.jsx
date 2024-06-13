import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './StudentProfile.css'; // Import CSS file for custom styling
import { axiosWithToken } from '../../axiosWithToken.jsx'; // Import axios for making HTTP requests

// Component for displaying upcoming events
function UpcomingEventsCard({ upcomingEvents }) {
  const handleApplyClick = (eventId) => {
    // Handle apply logic here, e.g., navigate to apply page or trigger application process
    console.log(`Applying for event with ID: ${eventId}`);
  };

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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleApplyClick(event.id)}
                    className="apply-button"
                  >
                    Apply for volunteering
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}

function StudentProfile() {
  const [upcomingEvents, setUpcomingEvents] = useState([]); // State to store upcoming events

  useEffect(() => {
    // Function to fetch upcoming events from backend
    const fetchUpcomingEvents = async () => {
      try {
        const response = await axiosWithToken.get('http://localhost:4000/student-api/allBookings'); // Replace with your actual API endpoint
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
    <div className="student-profile">
      {/* Upcoming Events */}
      <div className="upcoming-events">
        <UpcomingEventsCard upcomingEvents={upcomingEvents} />
      </div>
    </div>
  );
}

export default StudentProfile;
