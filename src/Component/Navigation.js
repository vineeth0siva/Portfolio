import React, { useState } from "react";
import {
  FaBars,
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
  FaHome,
  FaLaptopCode,
  FaServicestack,
  FaTimes,
  FaUser
} from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink for smooth scrolling
import './Navigation.css';

const icons = [
  { name: "Home", icon: <FaHome />, path: "/#home" },
  { name: "About", icon: <FaUser />, path: "/#about" },
  { name: "Resume", icon: <FaFileAlt />, path: "/#resume" },
  { name: "Work", icon: <FaBriefcase />, path: "/#work" },
  { name: "Skills", icon: <FaLaptopCode />, path: "/#skills" },
  { name: "Service", icon: <FaServicestack />, path: "/#service" },
  { name: "Contact", icon: <FaEnvelope />, path: "/#contact" }
];

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (index, path) => {
    setActiveIndex(index);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
    window.location.href = path;
  };

  return (
    <div className="navigation-container">
      <button
        className={`toggle-btn btn btn-primary ${isOpen ? 'menu-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes className="toggle-icon" /> : <FaBars className="toggle-icon" />}
      </button>

      <nav className={`navigation-menu ${isOpen ? 'show' : ''}`}>
        <div className="nav-items-container">
          {icons.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className={`nav-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index, item.path)}
              style={{ animationDelay: `${index * 0.1}s` }}
              smooth
            >
              <div className="nav-link-custom d-flex flex-column align-items-center">
                <span className="icon-container">
                  {item.icon}
                </span>
                <span className={`nav-label ${activeIndex === index ? 'show' : ''}`}>
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;