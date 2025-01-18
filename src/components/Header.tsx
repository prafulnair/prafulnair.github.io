import React from 'react';

interface HeaderProps {
  onToggleDarkMode: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleDarkMode, darkMode }) => {
  return (
    <header className="w-full py-4 flex items-center justify-between">
      <div className="text-2xl font-bold">
        <a href="#hero" className="hover:opacity-80 transition-opacity">
          Praful Nair
        </a>
      </div>
      <nav className="space-x-4">
        <a
          href="#about"
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
        >
          Contact
        </a>
      </nav>
      <button
        onClick={onToggleDarkMode}
        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
      >
        {darkMode ? '☀️' : '🌑'}
      </button>
    </header>
  );
};

export default Header;