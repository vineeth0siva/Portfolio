import React, { useState } from "react";
import { FaBars, FaBriefcase, FaEnvelope, FaFileAlt, FaHome, FaLaptopCode, FaServicestack, FaTimes, FaUser } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink for smooth scrolling
import './Navigation.css';

// Icons and paths for navigation items
const icons = [
  { name: "Home", icon: <FaHome />, path: "#home" },
  { name: "About", icon: <FaUser />, path: "#about" },
  { name: "Resume", icon: <FaFileAlt />, path: "#resume" },
  { name: "Work", icon: <FaBriefcase />, path: "#work" },
  { name: "Skills", icon: <FaLaptopCode />, path: "#skills" },
  { name: "Service", icon: <FaServicestack />, path: "#service" },
  { name: "Contact", icon: <FaEnvelope />, path: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open or closed
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="navigation-container">
      {/* Toggle button for mobile view */}
      <button
        className={`toggle-btn btn ${isOpen ? 'menu-open' : ''}`}
        onClick={handleClick}
      >
        {isOpen ? <FaTimes className="toggle-icon" /> : <FaBars className="toggle-icon" />}
      </button>

      {/* Navigation menu */}
      <nav className={`navigation-menu ${isOpen ? 'show' : ''}`}>
        <div className="nav-items-container">
          {/* Map through the icons array and render each link */}
          {icons.map((item, index) => (
            <Link key={index} to={item.path} className="nav-item" onClick={handleLinkClick}>
              <div className="nav-link-custom d-flex flex-column align-items-center">
                <span className="icon-container">
                  {item.icon}
                </span>
                <span className="nav-label d-flex justify-content-center">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
