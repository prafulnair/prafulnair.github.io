
import { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
// import ProjectCard from './components/ProjectCard.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  // Start in dark mode
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Right away, add 'dark' to the <html> if darkMode is true
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <header className="sticky top-0 bg-white dark:bg-gray-900 z-50">
      {/* ...header content */}
      <Header onToggleDarkMode={handleDarkModeToggle} darkMode={darkMode} />
      </header>
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;