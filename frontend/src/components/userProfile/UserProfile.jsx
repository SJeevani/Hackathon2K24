import React from 'react';
import { Card, CardContent, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import './UserProfile.css'

// Component for displaying auditoriums
function AuditoriumCard({ auditoriums }) {
  return (
    <Card sx={{ bgcolor: '#e0f7fa', border: '1px solid #011a1a', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', width: '60%', height: 'auto', overflowY: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ color: '#333', marginBottom: '30px' }}>
          Auditoriums
        </Typography>
        <TableContainer>
          <Table sx={{ width: '100%', borderCollapse: 'collapse' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#370101c9', color: '#ffffff', fontWeight: 'bold' }}>Room Name</TableCell>
                <TableCell align="right" sx={{ backgroundColor: '#370101c9', color: '#ffffff', fontWeight: 'bold' }}>Capacity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {auditoriums.map((auditorium, index) => (
                <TableRow key={index}>
                  <TableCell>{auditorium.name}</TableCell>
                  <TableCell align="right">{auditorium.capacity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

// Component for displaying upcoming events
function UpcomingEventsCard({ upcomingEvents }) {
  return (
    <Card sx={{ bgcolor: '#fff8e1', border: '1px solid #201601', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', width: '35%', height: 'auto', overflowY: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ color: '#333', marginBottom: '30px' }}>
          Upcoming Events
        </Typography>
        {upcomingEvents.map((event, index) => (
          <Card key={index} sx={{ marginBottom: '5px', bgcolor: '#fffde7', border: '1px solid #2301012b', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '8px', transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', '&:hover': { transform: 'scale(1.02)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' } }}>
            <CardContent sx={{ paddingTop: '5px' }}>
              <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginBottom: '10px' }}>
                  {event.name}
                </Typography>
                <Typography variant="body1" component="div" sx={{ marginLeft: '10px', marginTop: '-15px' }}>
                  {event.date} | {event.time}
                </Typography>
                <Typography variant="body1" component="div" sx={{ fontSize: '0.5em', color: '#333' }}>
                  Organized by: {event.clubName}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}

function UserProfile() {
  // Sample data for upcoming events
  const upcomingEvents = [
    { name: 'Event 1', date: 'DD/MM/YYYY', time: '10:00 AM', clubName: 'Music Club' },
    { name: 'Event 2', date: 'DD/MM/YYYY', time: '2:00 PM', clubName: 'Art Club' },
    { name: 'Event 3', date: 'DD/MM/YYYY', time: '6:00 PM', clubName: 'Dance Club' },
    // Add more event entries as needed
  ];

  // Sample data for auditoriums
  const auditoriums = [
    { name: 'KS Auditorium', capacity: 100 },
    { name: 'B Block Seminar Hall', capacity: 150 },
    { name: 'Auditorium 3', capacity: 200 },
    { name: 'Auditorium 3', capacity: 200 },
    { name: 'Auditorium 3', capacity: 200 },
    // Add more auditorium entries as needed
  ];

  return (
    <div className="user-profile">
      {/* Display Auditorium Card */}
      <AuditoriumCard auditoriums={auditoriums} />
      {/* Display Upcoming Events Card */}
      <UpcomingEventsCard upcomingEvents={upcomingEvents} />
    </div>
  );
}

export default UserProfile;
