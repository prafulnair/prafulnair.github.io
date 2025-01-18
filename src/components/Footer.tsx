import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-gray-200 dark:border-gray-700 text-center mt-10">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;