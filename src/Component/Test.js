import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import About from './About';
import Contact from './Contact';
import Language from './Languages';
import Resume from './Resume';
import Service from './Service';

import './Test.css';
import Work from './Work';
const Test = () => {
  const titles = [
    { line1: "I am a", line2: "Learner", line3: "Committed to personal growth and embracing new challenges every day." },
    { line1: "I am a", line2: "Frontend Developer", line3: "Crafting intuitive user experiences through clean and efficient code." },
    { line1: "I am a", line2: "Fast Learner", line3: "Eager to absorb new skills and technologies to stay ahead in the industry." },
    { line1: "I am a", line2: "Problem Solver", line3: "Using analytical thinking to turn challenges into opportunities for innovation." },
    { line1: "I am", line2: "Creative", line3: "Bringing unique perspectives to every project and inspiring others to think outside the box." }
  ];
  const frontImage= `${process.env.PUBLIC_URL}/logo192.png`;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className="profile-section"
        id="home"
        style={{
          background: "linear-gradient(135deg, rgba(9, 9, 121, 1) 0%, rgba(124, 226, 226, 1) 10%,rgba(255, 255, 255, 3) 75%, rgba(255, 255, 255, 10) 100%)",
        }}
      >

        <div className="container">
          <div className="row align-items-center justify-content-center min-vh-75">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center text-md-start"
                style={{ marginLeft: '40px' }} 
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="display-4 fw-bold mb-3">
                      {titles[currentIndex].line1}{' '}
                      <span className="text-primary">{titles[currentIndex].line2}</span>
                    </h2>
                    <p className="lead text-muted">
                      {titles[currentIndex].line3}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            <div className="col-12 col-md-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="profile-image-container"
              >
                <img
                  src={frontImage}
                  alt="Profile"
                  className="profile-image"
                />
                <div className="image-overlay" />

                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="floating-decoration"
                    animate={{
                      y: [-20, 20, -20],
                      x: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: 'absolute',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 15}%`,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Resume/>
      <Work/>
      <Language/>
      <Service/>
      <Contact/>
    </>
  );
};

export default Test;