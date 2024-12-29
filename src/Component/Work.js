import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WorkMapping from './WorkMapping';

const Work = () => {
    const [filter, setFilter] = useState('All');

    const cardsData = [
        {
            id: 1,
            frontImage: `${process.env.PUBLIC_URL}/img/portfolio/portfolio_1.jpg`,
            title: 'Plant Disease',
            item: 'College project'
        },
        {
            id: 2,
            frontImage: `${process.env.PUBLIC_URL}/img/portfolio/Drawing.png`,
            title: 'Drawing',
            item: 'Personal work'
        },
        {
            id: 3,
            frontImage: `${process.env.PUBLIC_URL}/img/portfolio/portfolio_3.jpg`,
            title: 'Project App',
            item: 'College project'
        },
        {
            id: 4,
            frontImage: `${process.env.PUBLIC_URL}/img/portfolio/TasteItOut1.png`,
            title: 'Personal Project',
            item: 'Personal work'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: 'spring',
                stiffness: 120
            }
        }
    };

    const handleFilter = (filterType) => {
        setFilter(filterType);
    };

    const filteredCards = cardsData.filter((card) =>
        filter === 'All' ? true : card.item.includes(filter)
    );

    return (
        <motion.div
            className="container w-full min-h-screen bg-gray-100 py-12 mt-5"
            id='work'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    variants={cardVariants}
                >
                    <span className="animate-pulse">WORKS</span>
                </motion.h2>

                <ul className="nav nav-pills justify-content-center gap-3 mb-4 d-flex flex-row">
                    <li className="nav-item">
                        <Link
                            to="#"
                            onClick={() => handleFilter('All')}
                            className="nav-link btn btn-outline-dark hover-animate"
                            data-bs-toggle="pill"
                        >
                            All
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="#"
                            onClick={() => handleFilter('College project')}
                            className="nav-link btn btn-outline-dark hover-animate"
                            data-bs-toggle="pill"
                        >
                            College Project
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="#"
                            onClick={() => handleFilter('Self Work')}
                            className="nav-link btn btn-outline-dark hover-animate"
                            data-bs-toggle="pill"
                        >
                            Self Work
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="#"
                            onClick={() => handleFilter('Personal work')}
                            className="nav-link btn btn-outline-dark hover-animate"
                            data-bs-toggle="pill"
                        >
                            Personal Work
                        </Link>
                    </li>
                </ul>



                <div className="row mt-5">
                    {filteredCards.map((card, index) => (
                        <motion.div
                            className="col-12 col-sm-6 col-md-4 mb-4"
                            key={index}
                            variants={cardVariants}
                        >
                            <WorkMapping card={card} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Work;