import React, { useEffect, useRef, useState } from "react";
import footstyles from "../styles/FooterStyle.module.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`${footstyles.footer} ${isVisible ? footstyles.visible : ''}`}
    >
      <div className={footstyles.topSection}>
        <div className={`${footstyles.about} ${isVisible ? footstyles.animateContent : ''}`}>
          <div className={footstyles.logo}>
            <img
              src="https://via.placeholder.com/50" 
              alt="Internware Logo"
            />
            <span>Internware</span>
          </div>
          <p>
            Connecting talented students with valuable opportunities that foster
            growth and real-world experience.
          </p>
          <div className={footstyles.socialIcons}>
            <a href="#" className={footstyles.iconLink}><FaFacebookF /></a>
            <a href="#" className={footstyles.iconLink}><FaLinkedinIn /></a>
            <a href="#" className={footstyles.iconLink}><FaInstagram /></a>
          </div>
        </div>

        <div className={`${footstyles.links} ${isVisible ? footstyles.animateContent : ''}`}>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Perks</li>
            <li>Domain</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className={`${footstyles.contact} ${isVisible ? footstyles.animateContent : ''}`}>
          <h3>Contact Us</h3>
          <p>📍 IITM, D-29, Institutional Area, Janakpuri, New Delhi, Delhi 110058</p>
          <p>✉️ query@iitminternware.com</p>
          <p>📞 +91 87448 99382</p>
        </div>
      </div>

      <div className={`${footstyles.bottomSection} ${isVisible ? footstyles.animateContent : ''}`}>
        <hr />
        <p>© InternWare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;