
// import { useState, useEffect } from 'react';
// import { Routes, Route }  from 'react-router-dom';
// import Header from './components/Header.tsx';
// import Hero from './components/Hero.tsx';
// import About from './components/About.tsx';
// // import ProjectCard from './components/ProjectCard.tsx';
// import Projects from './components/Projects.tsx';
// import Contact from './components/Contact.tsx';
// import Footer from './components/Footer.tsx';
// import Education from './components/Education.tsx';
// import { AnimatePresence, motion } from 'framer-motion';
// function App() {
//   // Start in dark mode
//   const [darkMode, setDarkMode] = useState<boolean>(false);

//   useEffect(() => {
//     // Right away, add 'dark' to the <html> if darkMode is true
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const handleDarkModeToggle = () => {
//     setDarkMode(!darkMode);
//   };

//   // return (
//   //   <div className={darkMode ? 'dark' : ''}>
//   //     <header className="sticky top-0 bg-white dark:bg-gray-900 z-50">
//   //     {/* ...header content */}
//   //     <Header onToggleDarkMode={handleDarkModeToggle} darkMode={darkMode} />
//   //     </header>
      
//   //     <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//   //       <Hero />
//   //       <About />
//   //       <Projects />
//   //       <Contact />
//   //     </main>
//   //     <Footer />
//   //   </div>
//   // );
//   return (
//     <div className={darkMode ? 'dark' : ''}>
//       <Header onToggleDarkMode={handleDarkModeToggle} darkMode={darkMode} />

//       {/* AnimatePresence handles the transition between routes */}
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route
//             path="/"
//             element={
//               <motion.main
//                 initial={{ x: '100%', opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: '-100%', opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
//               >
//                 <Hero />
//                 <About />
//                 <Projects />
//                 <Contact />
//               </motion.main>
//             }
//           />
//           <Route
//             path="/education"
//             element={
//               <motion.div
//                 initial={{ x: '100%', opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: '-100%', opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Education />
//               </motion.div>
//             }
//           />
//         </Routes>
//       </AnimatePresence>

//       <Footer />
//     </div>
//   );
// }

// export default App;

// App.tsx
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Education from './components/Education';
import Home from './components/Home';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
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
      <Header onToggleDarkMode={handleDarkModeToggle} darkMode={darkMode} />

      {/* AnimatePresence for page transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <Home />
              </motion.main>
            }
          />
          <Route
            path="/education"
            element={
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
                <Education />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;