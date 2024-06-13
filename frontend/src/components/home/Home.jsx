import CountUp from "react-countup";
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

function Home() {
const [direction, setDirection] = useState('ltr'); // State to toggle the direction of the Slider

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: direction === 'rtl' // Dynamic rtl property based on the direction state
};

// Function to handle beforeChange event of the Slider
const handleBeforeChange = (oldIndex, newIndex) => {
    // Toggle direction when reaching the last slide
    if (newIndex === 4) {
        setDirection('rtl');
    } else if (newIndex === 0) { // Toggle direction when reaching the first slide
        setDirection('ltr');
    }
};

return (
    <div className="home-container">
        <div className="content-container">
            <div className="text-content">
                <header>
                    <h1 className="align-center">Welcome to</h1>
                    <h2>Seminar Hall Booking</h2>
                </header>
                <section className="content fs-6 text-align-center">
                    <p>Welcome to our Seminar Hall Booking System! Our digital platform streamlines the process of reserving seminar halls, making it quick and easy. Check real-time availability, make bookings, and manage your reservations effortlessly. conflict detection to ensure smooth scheduling. Access the system anytime, anywhere via our user-friendly web and mobile applications.</p>
                    <p>Administrators can manage multiple halls and generate insightful reports, while users can search for available slots and book with ease. Integrated messaging and notification systems keep everyone informed. Experience improved efficiency, reduced scheduling conflicts, and enhanced overall satisfaction with our seamless booking system. Welcome aboard, and happy booking!

                    </p>
                </section>
            </div>
            <div className="image-content">
                <img src="https://vnrvjiet.ac.in/assets/images/Landing%20image.png" alt="VNRVJIET" />
            </div>
        </div>
        <div className="carousel-container">
            <Slider {...settings} beforeChange={handleBeforeChange}>
                <div><img src="https://fsf.org.in/news/images/vnrvjiet_seminar_02-768.jpg" alt="Slide 1" /></div>
                <div><img src="https://th.bing.com/th/id/OIP.NFYQ9vEU0uwy6AgNT1SsfgHaFj?pid=ImgDet&w=474&h=355&rs=1" alt="Slide 2" /></div>
                <div><img src="https://th.bing.com/th/id/OIP.tAsgm9u3MXogENc1qrEJwgHaE8?rs=1&pid=ImgDetMain" alt="Slide 3" /></div>
                <div><img src="https://th.bing.com/th/id/R.28051c762b90563070e0a71de410a154?rik=087%2bsu6OnIr0xg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-bUF5n6eSwbU%2fVcxflb1njSI%2fAAAAAAAABCg%2f-XS9A2wjM0I%2fs1600%2fntu08_09.jpg&ehk=%2fIRVxpaISZ8283IHM%2fF%2bGxyJHyrTdLK4L22RFYI3h0U%3d&risl=&pid=ImgRaw&r=0" alt="Slide 4" /></div>
                <div><img src="https://accountancy.smu.edu.sg/sites/accountancy.smu.edu.sg/files/dxpr_builder_images/DSC_3422.jpg?fid=13021 " alt="Slide 5" /></div>
            </Slider>
        </div>

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card cc card1 h-100">
                        <div className="card-body">
                            {/* <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/course-1648742-1400672.png" className='logo pic'></img> */}
                            <h5 className="card-title oo bg-dark fs-3 text-white rounded-2">Mission</h5>
                            <p className="card-text text-dark overflow-auto">
                            We aim to simplify seminar hall bookings, ensuring accessibility and efficiency for all users. Through innovation and user-centric design, we strive to streamline the reservation process. Our mission is to empower stakeholders and foster collaboration in seminar hall usage. Ultimately, we seek to create a seamless and hassle-free experience for booking seminar halls.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card cc bg-gradient bg-secondary-subtle h-100">
                        <div className="card-body">
                            {/* <img src="https://cdn-icons-png.flaticon.com/512/1591/1591045.png" className='logo1 pic'></img> */}
                            <h5 className="card-title oo bg-dark  fs-3 text-white rounded-2">Vision</h5>
                            
                            <p className="card-text text-dark ">
                            Our vision is to become the industry leader in seminar hall bookings, setting new standards of excellence. We aspire to revolutionize the booking process, making it effortless and transparent. By prioritizing innovation and user satisfaction, we aim to transform seminar hall management. Ultimately, we envision a future where booking seminar halls is a seamless and enjoyable experience for all.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card cc card1 h-100">
                        <div className="card-body">
                            {/* <img src="https://cdn4.iconfinder.com/data/icons/gamification-flat/64/learning-idea-knowledge-solve-experience-512.png" className='logo2 pic'></img> */}
                            <h5 className="card-title bg-dark text-white fs-3 oo rounded-2">Quality Policy</h5>
                            <p className="card-text text-dark justify-content-center ">
                            Committed to delivering excellence, we prioritize reliability, accuracy, and security in seminar hall bookings. Customer satisfaction is paramount, and we provide prompt and effective support. Compliance with industry regulations is integral, upholding the highest ethical standards. Through transparency, accountability, and continuous improvement, we exceed user expectations.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <br />
        </div>
        <div className="container">
            <div className="circles">
                <div className="circle">
                    <CountUp
                        start={0}
                        end={7722}
                        delay={0}
                        enableScrollSpy={true}
                        scrollSpyDelay={500}
                    >
                        {({ countUpRef }) => (
                            <div className="counter">
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                    <span className="circle-name">

                        Students
                    </span>
                </div>
                <div className="line" />
                <div className="circle">
                    <CountUp
                        start={0}
                        end={20}
                        delay={0}
                        enableScrollSpy={true}
                        scrollSpyDelay={500}
                    >
                        {({ countUpRef }) => (
                            <div className="counter">
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                    <span className="circle-name">
                        Clubs
                    </span>
                </div>
                
                <div className="line" />
                <div className="circle">
                    <CountUp
                        start={0}
                        end={15}
                        delay={0}
                        enableScrollSpy={true}
                        scrollSpyDelay={500}
                    >
                        {({ countUpRef }) => (
                            <div className="counter">
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                    <span className="circle-name">

                        Student-Chapters
                    </span>
                </div>
                <div className="line" />
                <div className="circle">
                
                    <CountUp
                        start={0}
                        end={6}
                        delay={0}
                        enableScrollSpy={true}
                        scrollSpyDelay={500}
                    >
                        {({ countUpRef }) => (
                            <div className="counter">
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                    <span className="circle-name">
                        Auditoriums
                    </span>
                </div>
            </div>
        </div>


    </div>
);
}

export default Home;