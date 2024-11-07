import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaChalkboardTeacher } from "react-icons/fa";

const WorkMapping = ({ card }) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const frontImage = card?.frontImage;
  const title = card?.title || "Project Title";
  const item = card?.item || 'Project item';
  const id = card?.id || 1;

  const imageData = [
    {
      id: 1,
      images: [
        '/img/portfolio/image_019.jpg',
        '/img/portfolio/image_020.jpg',
        '/img/portfolio/image_021.jpg',
        '/img/portfolio/image_022.jpg',
        '/img/portfolio/image_023.jpg',
        '/img/portfolio/image_024.jpg',
        '/img/portfolio/image_025.jpg',
        '/img/portfolio/image_026.jpg'
      ]
    },
    {
      id: 2,
      images: [
        '/img/portfolio/Drawing_1.jpeg',
        '/img/portfolio/Drawing_2.jpeg',
        '/img/portfolio/Drawing_3.jpeg',
        '/img/portfolio/Drawing_4.jpeg'
      ]
    },
    {
      id: 3,
      images: [
        '/img/portfolio/venato1.png',
        '/img/portfolio/venato2.png',
        '/img/portfolio/venato3.png',
        '/img/portfolio/venato4.png',
        '/img/portfolio/venato5.png'
      ]
    }
  ];

  const getCarouselImages = () => {
    const imageSet = imageData.find(set => set.id === id);
    return imageSet ? imageSet.images : [frontImage];
  };

  const images = getCarouselImages();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (showCarousel && images.length > 1) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [showCarousel, images.length]);

  const handleCarouselToggle = (e) => {
    e.stopPropagation();
    setShowCarousel(!showCarousel);
    setActiveIndex(0);
  };

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 w-100">
          <motion.div
            className="card border-0 overflow-hidden rounded-lg position-relative"
            initial="initial"
            whileHover="hover"
            style={{ cursor: 'pointer' }}
          >
            <motion.img
              src={frontImage}
              alt={title}
              className="card-img rounded img-fluid w-100"
              style={{
                objectFit: 'cover',
                height: windowWidth > 768 ? '350px' : '250px', 
                
              }}
              variants={{
                initial: { scale: 1, filter: 'blur(0)' },
                hover: { scale: 1.1, filter: 'blur(2px)' }
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <motion.div
              className="position-absolute top-0 start-0 end-0 bottom-0 bg-black bg-opacity-50"
              variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 }
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="d-flex flex-column align-items-center justify-content-center h-100 text-white">
                <motion.h3
                  className="text-center mb-3"
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1 }
                  }}
                  transition={{ delay: 0.1 }}
                >
                  {title}
                </motion.h3>
                <motion.div
                  className="text-center"
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1 }
                  }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-success mb-2 fs-20">{item}</p>
                  <button
                    onClick={handleCarouselToggle}
                    className="btn text-warning border-0 fs-3"
                  >
                    <FaChalkboardTeacher />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modal Carousel */}
      {showCarousel && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
          onClick={handleCarouselToggle}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark">
              <div className="modal-header border-bottom border-secondary">
                <h5 className="modal-title text-white">{title}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={handleCarouselToggle}
                  aria-label="Close"
                />
              </div>
              <div className="modal-body p-0">
                <div className="carousel slide">
                  <div className="carousel-inner">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                        style={{ transition: 'transform 0.6s ease-in-out' }}
                      >
                        <img
                          src={image}
                          className="d-block w-100 img-fluid"
                          alt={`${title} - ${index + 1}`}
                          style={{
                            maxHeight: '500px',
                            objectFit: 'contain',
                            backgroundColor: '#000',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  {images.length > 1 && (
                    <>
                      <button
                        className="carousel-control-prev"
                        onClick={() => handleSlideChange((activeIndex - 1 + images.length) % images.length)}
                      >
                        <span className="carousel-control-prev-icon" />
                      </button>
                      <button
                        className="carousel-control-next"
                        onClick={() => handleSlideChange((activeIndex + 1) % images.length)}
                      >
                        <span className="carousel-control-next-icon" />
                      </button>
                      <div className="carousel-indicators w-100">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            className={index === activeIndex ? 'active' : ''}
                            onClick={() => handleSlideChange(index)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkMapping;
