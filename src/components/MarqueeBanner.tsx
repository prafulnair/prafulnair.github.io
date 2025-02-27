import React from 'react';

const MarqueeBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-8 flex items-center">
      {/* The scrolling text container */}
      <div className="whitespace-nowrap animate-marquee">
        {/* <span className="mr-8">Work in Progress</span> */}
        <span className="mr-8">Heads up! I am just finishing up this portfolio projects, and I apologize if you find any bug.</span>
        {/* <span className="mr-8">Things are work in progress!</span> */}
        {/* Repeat or modify the messages as desired */}
      </div>
    </div>
  );
};

export default ç;