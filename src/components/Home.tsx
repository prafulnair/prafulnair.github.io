// Home.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const location = useLocation();

  // When the location changes, if a hash exists, scroll to that element
  useEffect(() => {
    if (location.hash) {
      // Remove the '#' from the hash to get the id
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Scroll into view smoothly
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;