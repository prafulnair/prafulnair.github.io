
import React from 'react';
import MarqueeBanner from './MarqueeBanner';
import {Link} from 'react-router-dom';

interface HeaderProps {
  onToggleDarkMode: () => void;
  darkMode: boolean;
}

// const Header: React.FC<HeaderProps> = ({ onToggleDarkMode, darkMode }) => {
//   return (
//     <>
//       {/* 1. The marquee banner at the top */}
//       <MarqueeBanner />

//       {/* 2. Your existing header/nav code */}
//       <header className="w-full py-4 flex items-center justify-between">
//         <div className="text-2xl font-bold">
//           <a href="#hero" className="hover:opacity-80 transition-opacity">
//             Praful Nair
//           </a>
//         </div>
        
//         <nav className="space-x-4">
//         <Link to="/#about" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
//             About
//           </Link>
//           <a
//             href="#projects"
//             className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
//           >
//             Projects
//           </a>
//           <a
//             href="#contact"
//             className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
//           >
//             Contact
//           </a>
//           <Link
//           to="/education"
//           className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
//         >
//           Education
//         </Link>
//         </nav>

//         <button
//           onClick={onToggleDarkMode}
//           className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
//         >
//           {darkMode ? '☀️' : '🌑'}
//         </button>
//       </header>
//     </>
//   );
// };

const Header: React.FC<HeaderProps> = ({ onToggleDarkMode, darkMode }) => {
    return (
      <>
        {/* The marquee banner at the top */}
        <MarqueeBanner />
  
        {/* Existing header/nav code */}
        <header className="w-full py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            {/* Make this a Link to home */}
            <Link to="/" className="hover:opacity-80 transition-opacity">
              Praful Nair
            </Link>
          </div>
          
          <nav className="space-x-4">
            {/* Use Link components for internal anchors */}
            <Link to="/#about" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              About
            </Link>
            <Link to="/#projects" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              Projects
            </Link>
            <Link to="/#contact" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              Contact
            </Link>
            <Link to="/education" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              Education
            </Link>
          </nav>
  
          <button
            onClick={onToggleDarkMode}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
          >
            {darkMode ? '☀️' : '🌑'}
          </button>
        </header>
      </>
    );
  };

export default Header;