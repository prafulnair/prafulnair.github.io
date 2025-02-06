
// import React from 'react';
// import MarqueeBanner from './MarqueeBanner';
// import {Link} from 'react-router-dom';

// interface HeaderProps {
//   onToggleDarkMode: () => void;
//   darkMode: boolean;
// }

// // const Header: React.FC<HeaderProps> = ({ onToggleDarkMode, darkMode }) => {
// //   return (
// //     <>
// //       {/* 1. The marquee banner at the top */}
// //       <MarqueeBanner />

// //       {/* 2. Your existing header/nav code */}
// //       <header className="w-full py-4 flex items-center justify-between">
// //         <div className="text-2xl font-bold">
// //           <a href="#hero" className="hover:opacity-80 transition-opacity">
// //             Praful Nair
// //           </a>
// //         </div>
        
// //         <nav className="space-x-4">
// //         <Link to="/#about" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
// //             About
// //           </Link>
// //           <a
// //             href="#projects"
// //             className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
// //           >
// //             Projects
// //           </a>
// //           <a
// //             href="#contact"
// //             className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
// //           >
// //             Contact
// //           </a>
// //           <Link
// //           to="/education"
// //           className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
// //         >
// //           Education
// //         </Link>
// //         </nav>

// //         <button
// //           onClick={onToggleDarkMode}
// //           className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
// //         >
// //           {darkMode ? '☀️' : '🌑'}
// //         </button>
// //       </header>
// //     </>
// //   );
// // };

// const Header: React.FC<HeaderProps> = ({ onToggleDarkMode, darkMode }) => {
//     return (
//       <>
//         {/* The marquee banner at the top */}
//         <MarqueeBanner />
  
//         {/* Existing header/nav code */}
//         <header className="w-full py-4 flex items-center justify-between">
//           <div className="text-2xl font-bold">
//             {/* Make this a Link to home */}
//             <Link to="/" className="hover:opacity-80 transition-opacity">
//               Praful Nair
//             </Link>
//           </div>
          
//           <nav className="space-x-4">
//             {/* Use Link components for internal anchors */}
//             <Link to="/#about" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
//               About
//             </Link>
//             <Link to="/#projects" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
//               Projects
//             </Link>
//             <Link to="/#contact" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
//               Contact
//             </Link>
//             <Link to="/education" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
//               Education & Experiences
//             </Link>

//           </nav>
  
//           <button
//             onClick={onToggleDarkMode}
//             className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
//           >
//             {darkMode ? '☀️' : '🌑'}
//           </button>
//         </header>
//       </>
//     );
//   };

// export default Header;


import React, { useState } from 'react';
import MarqueeBanner from './MarqueeBanner';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onToggleDarkMode: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleDarkMode, darkMode }) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  // Toggle either dropdown, closing the other if open.
  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
    setProjectsOpen(false);
  };

  const toggleProjects = () => {
    setProjectsOpen(!projectsOpen);
    setAboutOpen(false);
  };

  return (
    <>
      <MarqueeBanner />

      <header className="w-full py-4 flex items-center justify-between bg-white dark:bg-gray-900 transition-colors">
        {/* Brand / Home Link */}
        <div className="text-2xl font-bold ml-4">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            Praful Nair
          </Link>
        </div>

        <nav className="flex items-center space-x-6 mr-4 relative">
          {/* About (Click-based dropdown) */}
          <div className="relative inline-block">
            <button
              onClick={toggleAbout}
              className="
                inline-flex items-center
                text-gray-800 dark:text-gray-100
                hover:text-indigo-500 dark:hover:text-indigo-400
                font-semibold
                transition-colors
                focus:outline-none
              "
            >
              About
            </button>

            {/* Submenu: About */}
            {aboutOpen && (
              <div
                className="
                  absolute left-1/2 top-full transform -translate-x-1/2
                  mt-2
                  min-w-[140px]
                  bg-white dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  rounded-lg
                  shadow-lg
                  z-50
                  px-1 py-2
                  text-center
                  animate-fadeInScale
                "
              >
                <Link
                  to="/#about"
                  className="
                    block w-full px-4 py-2 text-sm
                    text-gray-700 dark:text-gray-200
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    rounded-md
                  "
                  onClick={() => setAboutOpen(false)}
                >
                  TL;DR
                </Link>
                <Link
                  to="/about-me"
                  className="
                    block w-full px-4 py-2 text-sm
                    text-gray-700 dark:text-gray-200
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    rounded-md
                  "
                  onClick={() => setAboutOpen(false)}
                >
                  More About Me
                </Link>
              </div>
            )}
          </div>

          {/* Projects (Click-based dropdown) */}
          <div className="relative inline-block">
            <button
              onClick={toggleProjects}
              className="
                inline-flex items-center
                text-gray-800 dark:text-gray-100
                hover:text-indigo-500 dark:hover:text-indigo-400
                font-semibold
                transition-colors
                focus:outline-none
              "
            >
              Projects
            </button>

            {/* Submenu: Projects */}
            {projectsOpen && (
              <div
                className="
                  absolute left-1/2 top-full transform -translate-x-1/2
                  mt-2
                  min-w-[140px]
                  bg-white dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  rounded-lg
                  shadow-lg
                  z-50
                  px-1 py-2
                  text-center
                  animate-fadeInScale
                "
              >
                <Link to="/#projects" 
                className=" block w-full px-4 py-2 text-sm
                text-gray-700 dark:text-gray-200
                hover:bg-gray-100 dark:hover:bg-gray-700
                rounded-md
              "
              onClick={() => setProjectsOpen(false)}>
              Projects
            </Link>

                <Link
                  to="/all-projects"
                  className="
                    block w-full px-4 py-2 text-sm
                    text-gray-700 dark:text-gray-200
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    rounded-md
                  "
                  onClick={() => setProjectsOpen(false)}
                >
                  All Projects
                </Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            to="/#contact"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-gray-800 dark:text-gray-100"
          >
            Contact
          </Link>

          {/* Education & Experiences */}
          <Link
            to="/education"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-gray-800 dark:text-gray-100"
          >
            Education & Experiences
          </Link>

                    {/* New Quote Link
                    <Link
            to="/quote"
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-gray-800 dark:text-gray-100"
          >
            Quote
          </Link> */}

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
          >
            {darkMode ? '☀️' : '🌑'}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;