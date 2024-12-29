import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaCat, FaConnectdevelop, FaEdit } from "react-icons/fa";

const Service = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const fulldata = [
    {
      image: "https://th.bing.com/th/id/OIP.fPwcUxtBsl26Fv15RNOXewHaEo?w=299&h=186&c=7&r=0&o=5&pid=1.7",
      icon: <FaCat />,
      title: "Web design",
      content: "Creating the visual and user interface aspects of a website."
    },
    {
      image: "https://th.bing.com/th/id/OIP.aPIVz8ckaR2HDf_P0Wz-GQHaDo?w=340&h=171&c=7&r=0&o=5&pid=1.7",
      icon: <FaConnectdevelop />,
      title: "Web development",
      content: "Building and maintaining websites and web applications, mainly front end."
    },
    {
      image: "https://th.bing.com/th/id/OIP.MFd5bz-tNAtVG2krY6o7hwHaEK?w=311&h=180&c=7&r=0&o=5&pid=1.7",
      icon: <FaEdit />,
      title: "Drawing",
      content: "Involves the creation of imaginative designs and novel ideas through visual representation."
    }
  ];

  const handleImageClick = (index) => {
    setVisibleIndex(index); 
    setTimeout(() => {
      setVisibleIndex(null); 
    }, 20000);
  };

  return (
    <div id="service" className="container mt-5">
      <motion.h1
        className="d-flex justify-content-center mb-5"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        SERVICE
      </motion.h1>
      <div className="w-2/3 flex flex-col justify-center">
        <motion.p
          className="text-gray-700 font-medium "
          initial="hidden"
          style={{marginLeft:40,alignItems:'center'}}
        >
          {"I specialize in offering a versatile range of creative services, including expert drawing, captivating web design, and seamless webpage development. With a keen eye for aesthetics and cutting-edge technology, I bring your vision to life online."}
        </motion.p>
      </div>
      <div className="row mt-5">
        {fulldata.map((data, index) => (
          <div className="col-sm-12 col-md-4 mb-4" key={index}>
            <div className="card h-100 position-relative">
              <div
                className="position-relative overflow-hidden rounded"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={data.image}
                  className="card-img-top img-fluid object-cover "
                  alt="Service"
                />
                <motion.div
                  className="overlay d-flex justify-content-center align-items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: visibleIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '10px', 
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    transition: 'left 0.3s ease-in-out'
                  }}
                >
                  <div className="text-center">
                    <div className="icon" style={{ fontSize: '2rem' }}>
                      {data.icon}
                    </div>
                    <h2 className="mt-2">{data.title}</h2>
                    <p className="mt-2">{data.content}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
