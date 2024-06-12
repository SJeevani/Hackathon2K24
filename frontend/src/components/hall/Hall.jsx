import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import './Hall.css'; // Import CSS file for custom styling

function Hall() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state: hall } = location; // Retrieve hall details from state

  // If hall data is not available in state, set default values to avoid undefined errors
  const defaultHall = {
    name: "",
    hallId: "",
    capacity: 0,
    amenities: [],
    contactNumbers: [],
    description: "",
    additionalInfo: {
      location: "",
      accessibility: "",
      parking: "",
      nearbyFacilities: []
    }
  };

  // Set hall details to default values if not available
  const hallData = hall || defaultHall;

  // Images for scrolling
  const images = [
    hall.Image1,hall.Image2,hall.Image3 
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleBookNow = () => {
    navigate('/user-profile/hall-booking',{state:hallData});
  };

  return (
    <Card className="hall-card">
      {/* Image Slider */}
      <div className="image-slider">
        <img src={images[currentImageIndex]} alt="Hall" className="hall-image" />
        <button className="nav-arrow left" onClick={goToPreviousImage}>&#10094;</button>
        <button className="nav-arrow right" onClick={goToNextImage}>&#10095;</button>
      </div>

      {/* Hall Details */}
      <CardContent>
        <Typography variant="h4" component="h2" className="hall-name">
          {hallData.name}
        </Typography>
        <Typography variant="body1" color="textSecondary" className="hall-description">
          {hallData.description}
        </Typography>
        <div className="hall-details">
          <Typography variant="body2" color="textSecondary">
            <strong>Capacity:</strong> {hallData.capacity}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Contact Numbers:</strong> {hallData.contactNumbers.join(', ')}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Location:</strong> {hallData.additionalInfo.location}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Accessibility:</strong> {hallData.additionalInfo.accessibility}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Parking:</strong> {hallData.additionalInfo.parking}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Nearby Facilities:</strong> {hallData.additionalInfo.nearbyFacilities.join(', ')}
          </Typography>
        </div>
      </CardContent>

      {/* Book Now Button */}
      <CardContent>
        <Button variant="contained" color="primary" className="book-now-button" onClick={handleBookNow}>
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default Hall;
