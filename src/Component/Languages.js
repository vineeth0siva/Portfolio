import { motion } from 'framer-motion';
import React from 'react';

const items = ["HTML", "REACT", "SQL", "CSS", "BOOSTRAP", "JAVA", "PYTHON", "NODE", "SPRING", "DJANGO"];
const positions = [
  { top: '20%', left: '10%' },
  { top: '20%', left: '70%' },
  { top: '20%', left: '35%' },
  { top: '80%', left: '25%' },
  { top: '70%', left: '80%' },
  { top: '55%', left: '40%' },
  { top: "50%", left: "15%" },
  { top: "42%", left: "89%" },
  { top: "40%", left: "55%" },
  { top: "80%", left: "60%" }
];

const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8F33", "#6A0DAD"];

const easeInOutExpo = [1.95, 1.05, 1.795, 1.035];

const Languages = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container position-relative" 
         style={{
           background: 'linear-gradient(80deg, rgba(254,254,255,1) 7%, rgba(88,199,223,0.896) 43%, rgba(255,255,255,1) 73%)'
         }} 
         id='skills'>
      <motion.h1
        className="text-center position-absolute w-100 fw-bold d-flex justify-content-center"
        style={{  transform: 'translate(-50%, 0)', fontFamily: "'Poppins', sans-serif", color: '#000000' }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        SKILLS
      </motion.h1>

      <div className="position-relative" style={{ height: windowHeight - 100 }}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`position-absolute`}
            style={{
              width: windowWidth >= 1200 ? '150px' : windowWidth >= 992 ? '120px' : windowWidth >= 768 ? '100px' : '80px',
              height: windowWidth >= 1200 ? '150px' : windowWidth >= 992 ? '120px' : windowWidth >= 768 ? '100px' : '80px',
              top: `${positions[index].top}`,
              left: `${positions[index].left}`,
              transform: `translate(-50%, -50%)`,
              overflow: 'hidden'
            }}
          >
            <motion.div
              className="position-absolute w-100 h-100"
              style={{ borderWidth: '5px', borderColor: colors[index % colors.length], borderStyle: 'solid', borderRadius: '10px' }}
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: { xs: 15, sm: 20, md: 25, lg: 30, xl: 35 }[`${windowWidth >= 1200 ? 'xl' : windowWidth >= 992 ? 'lg' : windowWidth >= 768 ? 'md' : windowWidth >= 576 ? 'sm' : 'xs'}`], ease: easeInOutExpo }}
            />
            <div className="position-absolute text-dark w-100 h-100 d-flex justify-content-center align-items-center" style={{ fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem', lg: '1.1rem', xl: '1.2rem' }[`${windowWidth >= 1200 ? 'xl' : windowWidth >= 992 ? 'lg' : windowWidth >= 768 ? 'md' : windowWidth >= 576 ? 'sm' : 'xs'}`], fontWeight: 'bold' }}>
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;