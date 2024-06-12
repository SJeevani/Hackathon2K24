import React, { useEffect, useState } from 'react';
import { axiosWithToken } from '../../axiosWithToken.jsx';
import './Bookings.css';
import { useSelector } from 'react-redux';

function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const {  currentUser } = useSelector((state) => state.LoginReducer);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await axiosWithToken.get(`http://localhost:4000/user-api/allBookings/${currentUser.username}`);
                console.log("API response:", res.data); 

                if (Array.isArray(res.data.payload)) { 
                    setBookings(res.data.payload);
                } else {
                    console.error("Expected bookings to be an array:", res.data); // Log the data for debugging
                    setError("Expected bookings to be an array");
                }
            } catch (error) {
                console.error("Error fetching bookings:", error.message);
                setError(error.message);
            } finally {
                setLoading(false); // Update loading state regardless of success or failure
            }
        };

        fetchBookings();
    }, []);

    const getStatusColor = (status) => {
        if (status === 'Accepted') return 'green';
        if (status === 'Rejected') return 'red';
        return 'orange'; // Pending
    };

    if (loading) {
        return <div className="bookings-container">Loading...</div>;
    }

    if (error) {
        return <div className="bookings-container">Error: {error}</div>;
    }

    return (
        <div className="bookings-container">
            <h2>Your Bookings</h2>
            <div className="bookings-list">
                {bookings.length === 0 ? (
                    <p>No bookings found.</p>
                ) : (
                    bookings.map((booking, index) => (
                        <div className="booking-card" key={index}>
                            <h3>{booking.hallName}</h3>
                            <p><strong>Name:</strong> {booking.name}</p>
                            <p><strong>Email:</strong> {booking.email}</p>
                            <p><strong>Mobile Number:</strong> {booking.mobileNumber}</p>
                            <p><strong>Department:</strong> {booking.department}</p>
                            <p><strong>Year:</strong> {booking.year}</p>
                            <p><strong>Organizing Club:</strong> {booking.organizingClub}</p>
                            <p><strong>Estimation of No of Attendees:</strong> {booking.estimation}</p>
                            <p><strong>Date:</strong> {booking.date}</p>
                            <p><strong>Duration:</strong> {booking.duration} {booking.duration > 1 ? 'Days' : 'Day'}</p>
                            <p><strong>Purpose:</strong> {booking.purpose}</p>
                            <p><strong>Status:</strong> <span style={{ color: getStatusColor(booking.status) }}>{booking.status}</span></p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Bookings;
