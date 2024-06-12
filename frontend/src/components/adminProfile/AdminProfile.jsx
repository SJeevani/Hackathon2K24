// import React, { useState, useEffect } from 'react';
// import { FaCheck, FaTimes } from 'react-icons/fa';
// import { axiosWithToken } from '../../axiosWithToken.jsx';
// import './AdminProfile.css';

// function AdminProfile() {
//     const [bookings, setBookings] = useState([]);

//     const fetchBookings = async () => {
//         try {
//             const res = await axiosWithToken.get('http://localhost:4000/admin-api/allBookings');
//             if (res.data.payload) {
//                 setBookings(res.data.payload);
//             } else {
//                 console.error("Expected bookings to be in payload");
//             }
//         } catch (error) {
//             console.error("Error fetching bookings:", error.message);
//         }
//     };

//     useEffect(() => {
//         fetchBookings();
//     }, []);

//     const handleAccept = async (id) => {
//         try {
//             await axiosWithToken.patch(`http://localhost:4000/admin-api/bookings/${id}`, { status: 'Accepted' });
//             setBookings(bookings.map(booking => booking.bookingId === id ? { ...booking, status: 'Accepted' } : booking));
//         } catch (error) {
//             console.error("Error accepting booking:", error.message);
//         }
//     };

//     const handleReject = async (id) => {
//         try {
//             await axiosWithToken.patch(`http://localhost:4000/admin-api/bookings/${id}`, { status: 'Rejected' });
//             setBookings(bookings.map(booking => booking.bookingId === id ? { ...booking, status: 'Rejected' } : booking));
//         } catch (error) {
//             console.error("Error rejecting booking:", error.message);
//         }
//     };

//     return (
//         <div className="admin-container">
//             <h2>Booking Requests</h2>
//             <div className="booking-cards">
//                 {bookings.map(booking => (
//                     <div key={booking.bookingId} className="booking-card">
//                         <p><strong>Hall Name:</strong> {booking.hallName}</p>
//                         <p><strong>Name:</strong> {booking.name}</p>
//                         <p><strong>Event Name:</strong> {booking.eventname}</p>
//                         <p><strong>Email:</strong> {booking.email}</p>
//                         <p><strong>Mobile Number:</strong> {booking.mobileNumber}</p>
//                         <p><strong>Department:</strong> {booking.department}</p>
//                         <p><strong>Year:</strong> {booking.year}</p>
//                         <p><strong>Organizing Club:</strong> {booking.organizingClub}</p>
//                         <p><strong>Estimation:</strong> {booking.estimation}</p>
//                         <p><strong>Date:</strong> {booking.date}</p>
//                         <p><strong>Duration:</strong> {booking.duration}</p>
//                         <p><strong>Purpose:</strong> {booking.purpose}</p>
//                         <p><strong>Permission Letter:</strong> <a href={booking.permissionLetterUrl} target="_blank" rel="noopener noreferrer">View Letter</a></p>
//                         <p><strong>Status:</strong> {booking.status}</p>
//                         {booking.status === 'pending' && (
//                             <div className="admin-actions">
//                                 <button className="btn btn-success" onClick={() => handleAccept(booking.bookingId)}>
//                                     <FaCheck /> Accept
//                                 </button>
//                                 <button className="btn btn-danger" onClick={() => handleReject(booking.bookingId)}>
//                                     <FaTimes /> Reject
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default AdminProfile;

import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { axiosWithToken } from '../../axiosWithToken.jsx';
import './AdminProfile.css';

function AdminProfile() {
    const [bookings, setBookings] = useState([]);

    const fetchBookings = async () => {
        try {
            const res = await axiosWithToken.get('http://localhost:4000/admin-api/allBookings');
            if (res.data.payload) {
                setBookings(res.data.payload);
            } else {
                console.error("Expected bookings to be in payload");
            }
        } catch (error) {
            console.error("Error fetching bookings:", error.message);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const handleAccept = async (id) => {
        try {
            await axiosWithToken.patch(`http://localhost:4000/admin-api/bookings/${id}`, { status: 'Accepted' });
            setBookings(bookings.map(booking => booking.bookingId === id ? { ...booking, status: 'Accepted' } : booking));
        } catch (error) {
            console.error("Error accepting booking:", error.message);
        }
    };

    const handleReject = async (id) => {
        try {
            await axiosWithToken.patch(`http://localhost:4000/admin-api/bookings/${id}`, { status: 'Rejected' });
            setBookings(bookings.map(booking => booking.bookingId === id ? { ...booking, status: 'Rejected' } : booking));
        } catch (error) {
            console.error("Error rejecting booking:", error.message);
        }
    };

    return (
        <div className="admin-container">
            <h2>Booking Requests</h2>
            <div className="booking-cards">
                {bookings.map((booking, index) => (
                    <div key={booking.bookingId} className="booking-card">
                        <p><strong>Hall Name:</strong> {booking.hallName}</p>
                        <p><strong>Name:</strong> {booking.name}</p>
                        <p><strong>Event Name:</strong> {booking.eventname}</p>
                        <p><strong>Email:</strong> {booking.email}</p>
                        <p><strong>Mobile Number:</strong> {booking.mobileNumber}</p>
                        <p><strong>Department:</strong> {booking.department}</p>
                        <p><strong>Year:</strong> {booking.year}</p>
                        <p><strong>Organizing Club:</strong> {booking.organizingClub}</p>
                        <p><strong>Estimation:</strong> {booking.estimation}</p>
                        <p><strong>Date:</strong> {booking.date}</p>
                        <p><strong>Duration:</strong> {booking.duration}</p>
                        <p><strong>Purpose:</strong> {booking.purpose}</p>
                        <p><strong>Permission Letter:</strong> <a href={booking.permissionLetterUrl} target="_blank" rel="noopener noreferrer">View Letter</a></p>
                        <p><strong>Status:</strong> {booking.status}</p>
                        {booking.status === 'pending' && (
                            <div className="admin-actions">
                                <button className="btn btn-success" onClick={() => handleAccept(booking.bookingId)}>
                                    <FaCheck /> Accept
                                </button>
                                <button className="btn btn-danger" onClick={() => handleReject(booking.bookingId)}>
                                    <FaTimes /> Reject
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminProfile;


