import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { axiosWithToken } from '../../axiosWithToken.jsx';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './Halls.css'; // Import CSS file for styling

function Halls() {
    let navigate = useNavigate();
    const [halls, setHalls] = useState([]);
    // console.log(halls);
    let { currentUser } = useSelector(state => state.LoginReducer)

    useEffect(() => {
        // Fetch halls data from the API
        const fetchHalls = async () => {
            try {
                const response = await axiosWithToken.get('http://localhost:4000/user-api/allHalls');
                console.log(response.data); // Check the structure of the response data
                setHalls(response.data.payload);
            } catch (error) {
                console.error('Error fetching halls data:', error);
            }
        };

        fetchHalls();
    }, []);

    // if (!Array.isArray(halls)) {
    //     return <div>Error: Unable to fetch halls data</div>;
    // }

    const readHallByHallId = (hallObj) => {
        navigate(`../${currentUser.userType}-profile/hall/${hallObj.hallId}`, { state: hallObj })
      }

    return (
        <div className="auditorium-cards-container">
            {halls.map((hall) => (
                <div key={hall.hallId} className="auditorium-card">
                    <img 
                        src={hall.Image1} 
                        alt={hall.name} 
                        className="auditorium-image" 
                    />
                    <div className="auditorium-details">
                        <h3 className="auditorium-name">{hall.name}</h3>
                        <p className="auditorium-info">Capacity: {hall.capacity}</p>
                        <p className="auditorium-info">Location: {hall.additionalInfo.location}</p>
                    </div>
                    <button className="book-now-btn" onClick={() => readHallByHallId(hall)}>More Info</button> 
                </div>
            ))}
        </div>
    );
}

export default Halls;
