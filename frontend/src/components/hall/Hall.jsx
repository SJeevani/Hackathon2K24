import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './Hall.css'; // Import CSS file for custom styling
import { NavLink } from 'react-router-dom';

function Hall() {
  // Sample hall data
  const hall = {
    name: "KS Auditorium",
    hallId: "AUD001",
    capacity: 500,
    amenities: [
      "Air Conditioning",
      "High-Quality Sound System",
      "Projector and Screen",
      "Wi-Fi",
      "Stage Lighting",
      "Comfortable Seating",
      "Green Room",
      "Backstage Area"
    ],
    contactNumbers: [
      "+91-40-1234-5678",
      "+91-40-8765-4321"
    ],
    description: "KS Auditorium at VNRVJIET is a premier venue for hosting large-scale events, including academic conferences, seminars, cultural performances, and guest lectures. The auditorium features state-of-the-art audio-visual equipment, ensuring a high-quality experience for both presenters and attendees. The spacious and well-ventilated hall is designed to accommodate up to 500 guests comfortably.",
    additionalInfo: {
      location: "Main Campus",
      accessibility: "Wheelchair accessible with reserved seating",
      parking: "Large parking area available nearby",
      nearbyFacilities: [
        "Cafeteria",
        "Restrooms",
        "Information Desk"
      ]
    }
  };

  return (
    <Card className="hall-card">
      {/* Big Picture */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDTn5vZvi3iCDADrJKdY0N2crpk-e9YCJ3g&s" alt="Hall" className="hall-image" />

      {/* Hall Details */}
      <CardContent>
        <Typography variant="h5" component="h2" className="hall-name">
          {hall.name}
        </Typography>
        <Typography variant="body1" color="textSecondary" className="hall-description">
          {hall.description}
        </Typography>
        <div className="hall-details">
          <Typography variant="body2" color="textSecondary">
            <strong>Capacity:</strong> {hall.capacity}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Contact Numbers:</strong> {hall.contactNumbers.join(', ')}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Location:</strong> {hall.additionalInfo.location}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Accessibility:</strong> {hall.additionalInfo.accessibility}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Parking:</strong> {hall.additionalInfo.parking}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Nearby Facilities:</strong> {hall.additionalInfo.nearbyFacilities.join(', ')}
          </Typography>
        </div>
      </CardContent>

      {/* Book Now Button */}
      <CardContent>
        <Button variant="contained" color="primary" className="book-now-button">
          <NavLink to='/user-profile/hall-booking'className='text-white'>Book Now</NavLink>
        </Button>
      </CardContent>
    </Card>
  );
}

export default Hall;