// import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Halls.css'; // Import CSS file for styling

function Halls() {
    return (
        <div className="auditorium-cards-container">
            {/* Card 1 */}
            <div className="auditorium-card">
                <img 
                    src='https://fsf.org.in/news/images/vnrvjiet_seminar_02-768.jpg' 
                    alt="Auditorium" 
                    className="auditorium-image" 
                />
                <div className="auditorium-details">
                    <h3 className="auditorium-name">K S Auditorium</h3>
                    <p className="auditorium-info">Capacity: 400</p>
                    <p className="auditorium-info">Location: C Block</p>
                </div>
                <Link to="/user-profile/hall" className="book-now-btn">More Info</Link> {/* Use Link for navigation */}
            </div>

            {/* Card 2 */}
            <div className="auditorium-card">
                <img 
                    src='https://lums.edu.pk/sites/default/files/inline-images/kardar%201.jpg' 
                    alt="Auditorium" 
                    className="auditorium-image" 
                />
                <div className="auditorium-details">
                    <h3 className="auditorium-name">B Block SeminarHall</h3>
                    <p className="auditorium-info">Capacity: 250</p>
                    <p className="auditorium-info">Location: B Block</p>
                </div>
                <Link to="/booking" className="book-now-btn">More Info</Link> {/* Use Link for navigation */}
            </div> 
            <div className="auditorium-card">
                <img 
                    src='https://fsf.org.in/news/images/vnrvjiet_seminar_02-768.jpg' 
                    alt="Auditorium" 
                    className="auditorium-image" 
                />
                <div className="auditorium-details">
                    <h3 className="auditorium-name">APJ Auditorium</h3>
                    <p className="auditorium-info">Capacity: 200</p>
                    <p className="auditorium-info">Location: D Block</p>
                </div>
                <Link to="/booking" className="book-now-btn">More Info</Link> {/* Use Link for navigation */}
            </div>
            <div className="auditorium-card">
                <img 
                    src='https://fsf.org.in/news/images/vnrvjiet_seminar_02-768.jpg' 
                    alt="Auditorium" 
                    className="auditorium-image" 
                />
                <div className="auditorium-details">
                    <h3 className="auditorium-name">Any Lab</h3>
                    <p className="auditorium-info">Capacity: 100</p>
                    <p className="auditorium-info">A Block</p>
                </div>
                <Link to="/booking" className="book-now-btn">More Info</Link> {/* Use Link for navigation */}
            </div>
            <div className="auditorium-card">
                <img 
                    src='https://fsf.org.in/news/images/vnrvjiet_seminar_02-768.jpg' 
                    alt="Auditorium" 
                    className="auditorium-image" 
                />
                <div className="auditorium-details">
                    <h3 className="auditorium-name">PG SeminarHall</h3>
                    <p className="auditorium-info">Capacity: 200</p>
                    <p className="auditorium-info">Location:PG Block</p>
                </div>
                <Link to="/booking" className="book-now-btn">More Info</Link> {/* Use Link for navigation */}
            </div>
            <div className="auditorium-card">
                <img 
                    src='https://fsf.org.in/news/images/vnrvjiet_seminar_02-768.jpg' 
                    alt="Auditorium" 
                    className="auditorium-image" 
                />
                <div className="auditorium-details">
                    <h3 className="auditorium-name">VJIM Auditorium</h3>
                    <p className="auditorium-info">Capacity: 200</p>
                    <p className="auditorium-info">Location: MBA Block</p>
                </div>
                <Link to="/booking" className="book-now-btn">More Info</Link> {/* Use Link for navigation */}
            </div>
            <div className="auditorium-card">
                <img 
                    src='https://fsf.org.in/news/images/vnrvjiet_seminar_02-768.jpg' 
                    alt="Auditorium" 
                    className="auditorium-image" 
                />
                <div className="auditorium-details">
                    <h3 className="auditorium-name">PEB-SeminarHall</h3>
                    <p className="auditorium-info">Capacity:100</p>
                    <p className="auditorium-info">Location: PEB Block</p>
                </div>
                
               
                <Link to="/booking" className="book-now-btn">More Info</Link> {/* Use Link for navigation */}
            </div>

            {/* Add more cards as needed */}
        </div>
    );
}

export default Halls;