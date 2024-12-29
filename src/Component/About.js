import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const frontImage = `${process.env.PUBLIC_URL}/img/portfolio/vineeth_1.jpg`;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      });
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="container-fluid text-center p-5"
      ref={aboutRef}
      id="about"
      style={{
        background: "linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(207,199,199,1) 0%, rgba(255,250,250,1) 53%)"
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="display-4 text-primary mb-4 underline"
      >
        ABOUT
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lead text-dark mb-4 mx-auto"
        style={{
          fontFamily: 'serif',
          fontWeight: 700,
          fontStyle: 'italic',
          maxWidth: '80%'
        }}
      >
        "As a recent Computer Science Engineering graduate, I am eager to embark on my career journey,
        applying my academic knowledge and passion for technology to contribute effectively to the industry."
      </motion.p>
      <div className="row" style={{ marginTop: -75 }}>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={frontImage} alt="About Me" className="img-fluid rounded-circle h-75" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="display-5 text-info mb-3"
          >
            PROGRAM LEARNER.
            <br></br>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-muted mb-4 text-justify mx-auto"
            style={{
              fontFamily: 'serif',
              fontWeight: 600,
              fontStyle: 'italic',
              lineHeight: 3,
              maxWidth: '100%',
              textAlign:'justify'
            }}
          >
            "Welcome to my website! I am a programming enthusiast with a strong desire to learn new programming languages.
            I recently completed my B.Tech graduation in Computer Science Engineering, giving me a solid foundation in Python,
            HTML, and SQL. I have a deep interest in continuously expanding my knowledge and skills in this digital realm.
            I am excited to share my experiences and knowledge, hoping to inspire and connect with like-minded individuals.
            From coding challenges to innovative projects, I relish pushing my boundaries to foster continuous growth and
            adaptation. I believe in the power of collaboration and look forward to engaging in collaborative projects with
            fellow enthusiasts. Together, we can explore the ever-evolving world of technology and make a meaningful impact.
            Feel free to explore my website, where I share insights, tutorials, and the latest developments in the tech industry. Let's embark on this exciting journey of discovery and innovation together!"
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
