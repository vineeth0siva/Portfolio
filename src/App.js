import { useEffect, useState } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom'; // Use HashRouter here
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Languages from './Component/Languages';
import Navigation from './Component/Navigation';
import Resume from './Component/Resume';
import Service from './Component/Service';
import Test from './Component/Test';
import Work from './Component/Work';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContentHidden, setIsContentHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsContentHidden(true);
      setTimeout(() => setIsContentHidden(false), 500); 
        };

    const handleClick = () => {
      // Add animation class on click
      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        mainContent.classList.add('clickable');
        setTimeout(() => mainContent.classList.remove('clickable'), 300); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Router>
      <div className={`App ${isNavOpen ? 'nav-open' : ''}`}>
        <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
        <main className={`main-content ${isContentHidden ? 'hidden' : ''}`}>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Languages />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
