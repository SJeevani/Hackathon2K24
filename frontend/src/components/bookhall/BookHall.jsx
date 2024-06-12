import React from 'react';
import { useForm } from 'react-hook-form';
import {axiosWithToken} from '../../axiosWithToken.jsx'
import { useNavigate } from 'react-router-dom';
import './BookHall.css';

function BookHall() {
    const { register, handleSubmit, formState: { errors } } = useForm(); // Get the useForm hook
    const navigate = useNavigate();
    const currentDate = new Date();
    const formattedMaxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, currentDate.getDate()).toISOString().split('T')[0];

    const onSubmit = async (formData) => {
        console.log("Form Data Submitted: ", formData); // Debugging line
        try {
            const res = await axiosWithToken.post('http://localhost:4000/user-api/book-seminar-hall', formData);
            console.log("Response: ", res); // Debugging line
            if (res.data.message === 'Booking successful') {
                window.alert("Booking Request Sent");
                navigate('/user-profile/bookings');
            } else {
                console.log("Server Message: ", res.data.message); // Debugging line
            }
        } catch (error) {
            console.error("Error: ", error.message); // Debugging line
        }
    };

    return (
        <div className="booking-form-container">
            <h2 className='pr-3'>Book a Seminar Hall</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group fw-bold">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: "Name is required" })}
                        placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                </div>
                <div className="form-group fw-bold">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                                message: "Please enter a valid Gmail address"
                            }
                        })}
                        placeholder="Enter your email (e.g., yourname@gmail.com)"
                    />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
                <div className="form-group fw-bold">
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input
                        type="text"
                        id="mobileNumber"
                        {...register('mobileNumber', { required: "Mobile number is required" })}
                        placeholder="Enter your mobile number"
                    />
                    {errors.mobileNumber && <p className="text-danger">{errors.mobileNumber.message}</p>}
                </div>
                <div className="form-group fw-bold">
                    <label htmlFor="department">Department:</label>
                    <select
                        id="department"
                        {...register('department', { required: "Department is required" })}
                    >
                        <option value="">Select Department</option>
                        <option value="CSE">Computer Science and Engineering (CSE)</option>
                        <option value="ECE">Electronics and Communication Engineering (ECE)</option>
                        <option value="EEE">Electrical and Electronics Engineering (EEE)</option>
                        <option value="AIML">Artificial Intelligence and Machine Learning (AIML)</option>
                        <option value="AIDS">Artificial Intelligence and Data Science (AIDS)</option>
                        <option value="CSE-DS">Computer Science and Engineering with Data Science (CSE-DS)</option>
                        <option value="CE">Civil Engineering (CE)</option>
                        <option value="ME">Mechanical Engineering (ME)</option>
                        <option value="EIE">Electronics and Instrumentation Engineering (EIE)</option>
                        <option value="CYS">Cyber Security (CYS)</option>
                        <option value="CIVIL">Civil Engineering (CIVIL)</option>
                    </select>
                    {errors.department && <p className="text-danger">{errors.department.message}</p>}
                </div>
                <div className="form-group fw-bold">
                    <label htmlFor="year">Year:</label>
                    <select
                        id="year"
                        {...register('year', { required: "Year is required" })}
                    >
                        <option value="">Select Year</option>
                        <option value="1st">1st Year</option>
                        <option value="2nd">2nd Year</option>
                        <option value="3rd">3rd Year</option>
                        <option value="4th">4th Year</option>
                    </select>
                    {errors.year && <p className="text-danger">{errors.year.message}</p>}
                </div>
                <div className="form-group fw-bold">
                    <label htmlFor="organizingClub">Organizing Club:</label>
                    <select
                        id="organizingClub"
                        {...register('organizingClub', { required: "Organizing Club is required" })}
                    >
                        <option value="">Select Club/Chapter</option>
                        <option value="SCINTILLATE">SCINTILLATE</option>
                        <option value="NRITYA TARANG">NRITYA TARANG</option>
                        <option value="CREATIVE ARTS">CREATIVE ARTS</option>
                        <option value="CRESENDO">CRESENDO</option>
                        <option value="DRAMATRIX">DRAMATRIX</option>
                        <option value="LIVEWIRE">LIVEWIRE</option>
                        <option value="KRITHOMEDH">KRITHOMEDH</option>
                        <option value="NARMY">NARMY</option>
                        <option value="NSS">NSS</option>
                        <option value="VJ THREATRO">VJ THREATRO</option>
                        <option value="VJ DATA QUESTERS">VJ DATA QUESTERS</option>
                        <option value="VJ HACKSLASH">VJ HACKSLASH</option>
                        <option value="VJ GARUDA VIGILANCE">VJ GARUDA VIGILANCE</option>
                        <option value="TURING HUT">TURING HUT</option>
                        <option value="ART OF LIVING">ART OF LIVING</option>
                        <option value="ACM">ACM</option>
                        <option value="ASME">ASME</option>
                        <option value="CSI">CSI</option>
                        <option value="DIURNALIS">DIURNALIS</option>
                        <option value="GDSC">GDSC</option>
                        <option value="IEEE">IEEE</option>
                        <option value="ICI">ICI</option>
                        <option value="IEI">IEI</option>
                        <option value="ISOI">ISOI</option>
                        <option value="ISTE">ISTE</option>
                        <option value="IETE">IETE</option>
                        <option value="IUCEE">IUCEE</option>
                    </select>
                    {errors.organizingClub && <p className="text-danger">{errors.organizingClub.message}</p>}
                </div>
                <div className="form-group fw-bold">
                    <label htmlFor="estimation"> Estimation of No of Attendees:</label>
                    <textarea
                        id="estimation"
                        // type='number'
                        {...register('estimation', { required: "It is required" })}
                        placeholder="Enter the estimation of attendees"
                    />
                    {errors.estimation && <p className="text-danger">{errors.estimation.message}</p>}
                </div>
                <div className="form-group fw-bold">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        {...register('date', { required: "Date is required" })}
                        min={currentDate.toISOString().split('T')[0]}
                        max={formattedMaxDate}
                    />
                    {errors.date && <p className="text-danger">{errors.date.message}</p>}
                </div>
                <div className="form-group fw-bold">
                    <label htmlFor="duration">Duration:</label>
                    <select
                        id="duration"
                        {...register('duration', { required: "Duration is required" })}
                    >
                        <option value="">Select Duration</option>
                        <option value="1">1 Day</option>
                        <option value="2">2 Days</option>
                        <option value="3">3 Days</option>
                    </select>
                    {errors.duration && <p className="text-danger">{errors.duration.message}</p>}
                </div>
                <div className="form-group fw-bold">
                    <label htmlFor="purpose">Purpose:</label>
                    <textarea
                        id="purpose"
                        {...register('purpose', { required: "Purpose is required" })}
                        placeholder="Enter the purpose of booking"
                    />
                    {errors.purpose && <p className="text-danger">{errors.purpose.message}</p>}
                </div>
                <div className="form-group fw-bold">
                    <label htmlFor="permissionLetterUrl">Permission Letter URL:</label>
                    <input
                        type="url"
                        id="permissionLetterUrl"
                        {...register('permissionLetterUrl', {
                            required: "Permission letter URL is required",
                            pattern: {
                                value: /^https:\/\/.*$/,
                                message: "Please enter a valid URL"
                            }
                        })}
                        placeholder="Enter the URL of the permission letter"
                    />
                    {errors.permissionLetterUrl && <p className="text-danger">{errors.permissionLetterUrl.message}</p>}
                </div>
                <div className="text-end">
                    <button type="submit" className="btn btn-primary">Book Now</button>
                </div>
            </form>
            <br />
        </div>
    );
}

export default BookHall;