// src/pages/AboutUs.jsx
import React, { useEffect } from 'react';
import '../styles/AboutUsStyle.css';
import bgGrey from '../assets/images/bgGrey.jpg';
import bgWhite from '../assets/images/bg1.jpg';

import card1 from '../assets/images/grp.jpg';
import card2 from '../assets/images/lab.jpg';
import card3 from '../assets/images/hall.png';

const AboutUs = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-container" style={{ backgroundImage: `url(${bgGrey})` }}>
      <div className="about-content" style={{ backgroundImage: `url(${bgWhite})` }}>

        {/* LEFT: Text */}
        <div className="text-column">
          <div className="icon-box">🎤</div>
          <h1 className="section-title">
            <span className="highlight ">About</span> Us
          </h1>

          <div className="text-content">
            <p className="fade-in-up">
              InternWare, the official internship cell of the Institute of Information Technology 
              and Management, Janakpuri, was established on September 26, 2017 by a group
              of visionary students with a mission to bridge the gap between 
              academics and industry exposure.
            </p>
            <p className="fade-in-up">
              The cell strives to help students secure internships in their preferred domains, 
              enabling them to gain hands-on experience and kick-start their corporate 
              journey with confidence.
            </p>
            <p className="fade-in-up">
              InternWare organizes a wide array of domain-centric activities such as podcast, 
              bootcamp, competitions and corporate talks ensuring that students
              are consistently engaged and prepared for the dynamic world ahead.
            </p>
          </div>
        </div>

        {/* RIGHT: Stacked Cards */}
        <div className="cards-column">
          <div className="card card-blue">
            <p>Comfy rooms</p>
            <img src={card1} alt="Rooms" />
          </div>
          <div className="card card-white">
            <p>Digital education</p>
            <img src={card2} alt="Education" />
          </div>
          <div className="card card-green">
            <p>Seminar Hall</p>
            <img src={card3} alt="Seminar" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
