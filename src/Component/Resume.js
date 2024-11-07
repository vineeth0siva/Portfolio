
import { motion } from 'framer-motion';
import React from 'react';

const Resume = () => {
  const handleDownload=()=>{
    const path=`${process.env.PUBLIC_URL}/img/VineethRESUME.pdf`;
    const a =document.createElement('a');
    a.href=path;
    a.download='VineethRESUME.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return (
    <div className="container-fluid p-5 bg-dark text-white" style={{ borderRadius: '8px', fontFamily: 'Poppins, sans-serif', marginLeft:15, background: 'linear-gradient(90deg, rgba(254,254,255,1) 0%, rgba(1,15,15,1) 100%, rgba(2,0,36,1) 100%)' }} id='resume'> 

      <motion.h1 
        className="text-center mb-4" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600,}}
      >
        RESUME
      </motion.h1>
      <div className="row ">
        <motion.div 
          className="col-md-6 mb-4 text-dark" 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 " style={{ fontWeight: 600 }}>Summary</h2>
          <p>VINEETH RS</p>
          <p className="mb-4">
            "I am a recent computer science graduate with a strong desire to learn and grow."
          </p>
          <ul className="list-unstyled">
            <li>Trivandrum, Kerala</li>
            <li>(+91) 7994340396</li>
            <li>vineethrs044@gmail.com</li>
          </ul>
          <h2 className="mb-3" style={{ fontWeight: 600 }}>Education</h2>
          <ul className="list-unstyled">
            <li>
              <p style={{ fontWeight: 500 }}>GHS SREEKARYAM</p>
              <p>2015 - 2016</p>
              <p>I successfully completed my state-level schooling with an impressive score of 95.46.</p>
            </li>
            <li>
              <p style={{ fontWeight: 500 }}>SNG HSS CHEMPAZHANRHY</p>
              <p>2017 - 2019</p>
              <p>I completed my higher secondary education at the state level and earned an impressive score of 66.42.</p>
            </li>
          </ul>
        </motion.div>
        <motion.div 
          className="col-md-6 mb-4" 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3" style={{ fontWeight: 600 }}>St Thomas Institute for Science and Technology</h2>
            <p style={{ fontWeight: 500 }}>COMPUTER SCIENCE</p>
            <p>2019 - 2023</p>
            <p>I have successfully completed my engineering degree with an impressive score of 73.4.</p>
          <h2 className="mb-3" style={{ fontWeight: 600 }}>Pivot Systems, Incorporated</h2>
            <p style={{ fontWeight: 500 }}>FRONTEND DEVELOPER</p>
            <p>2023 - 2024</p>
            <p>I worked as a frontend developer mainly focusing on JavaScript.</p>
          <h2 className="mb-3" style={{ fontWeight: 600 }}>More Details</h2>
          <p>
            "IF YOU REQUIRE ADDITIONAL INFORMATION, PLEASE FEEL FREE TO TAKE MY RESUME."
          </p>
          <motion.button 
            className="btn btn-light mt-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleDownload}
          >
            Download my CV
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
