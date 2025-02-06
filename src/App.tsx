// import { useState, useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Education from './components/Education';
// import Home from './components/Home';
// import { AnimatePresence, motion } from 'framer-motion';
// import AboutMe from './components/AboutMe';
// import AllProjectsPage from './components/AllProjectsPage';
// import ProjectDetailPage from './components/ProjectDetailPage';
// import ScrollToTop from './components/ScrollToTop';
// import Quote from './components/Quote';

// function App() {
//   const [darkMode, setDarkMode] = useState<boolean>(false);
//   const location = useLocation();

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const handleDarkModeToggle = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={darkMode ? 'dark' : ''}>
//       <Header onToggleDarkMode={handleDarkModeToggle} darkMode={darkMode} />

//       {/* AnimatePresence for page transitions */}
//       <AnimatePresence mode="wait">
//       <ScrollToTop />
//         <Routes location={location} key={location.pathname}>
        
//           <Route
//             path="/"
//             element={
//               <motion.main
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
//               >
//                 <Home />
//               </motion.main>
//             }
//           />
//           {/* Your new All Projects route */}
          
//   <Route 
//   path="/all-projects" element={<AllProjectsPage />} />

// {/* Potential project detail route (to be built later) */}
// <Route path="/projects/:id" element={<ProjectDetailPage />} />
//           <Route
//             path="/education"
//             element={
//               <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//             >
//                 <Education />
//               </motion.div>
//             }
//           />
//                   <Route
//   path="/about-me"
//   element={
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.4 }}
//     >
//       <AboutMe />
//     </motion.div>
//   }

// /><Route
//     path="/quote"
//     element={
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.4 }}
//       >
//         <Quote />
//       </motion.div>
//     }
//   />
//         </Routes>

        
//       </AnimatePresence>

//       <Footer />
//     </div>
//   );
// }

// export default App;

// src/App.tsx
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Education from './components/Education';
import Home from './components/Home';
import { AnimatePresence, motion } from 'framer-motion';
import AboutMe from './components/AboutMe';
import AllProjectsPage from './components/AllProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import ScrollToTop from './components/ScrollToTop';
import Quote from './components/Quote'; // Import the Quote component

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

      <AnimatePresence mode="wait">
        <ScrollToTop />
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
          
          <Route path="/all-projects" element={<AllProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          
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
          
          <Route
            path="/about-me"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <AboutMe />
              </motion.div>
            }
          />

          {/* New Quote Route */}
          <Route
            path="/quote"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Quote />
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