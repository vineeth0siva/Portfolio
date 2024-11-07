import { motion } from 'framer-motion';
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact py-5">
      <div className="container" data-aos="fade-up">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-title mb-4 d-flex justify-content-center"
        >
          <h2>Contact</h2>
        </motion.div>
        <div className="row">
          <div className="col-lg-4">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="info"
            >
              <motion.div
                className="address mb-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <i className="bi bi-geo-alt fs-4"></i>
                <h4>Location:</h4>
                <p>Trivandrum</p>
              </motion.div>
              <motion.div
                className="email mb-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <i className="bi bi-envelope fs-4"></i>
                <h4>Email:</h4>
                <p>vineethrs044@gmail.com</p>
              </motion.div>
              <motion.div
                className="phone mb-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <i className="bi bi-phone fs-4"></i>
                <h4>Call:</h4>
                <p>+917994340396</p>
              </motion.div>
            </motion.div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <motion.form
              action="https://formspree.io/f/mbjvokqk"
              method="post"
              role="form"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="row"
            >
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control mb-5" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <br />
              <motion.button
                type="submit"
                className="btn btn-primary"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Send Message
              </motion.button>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;