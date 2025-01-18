// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="py-6 border-t border-gray-200 dark:border-gray-700 text-center mt-10">
//       <p className="text-sm text-gray-600 dark:text-gray-400">
//         &copy; {new Date().getFullYear()} Praful Nair. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-gray-200 dark:border-gray-700 text-center mt-10">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="https://www.linkedin.com/in/praful-nair-3a5a87181/" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-xl hover:text-indigo-500 transition-colors" />
        </a>
        <a href="https://github.com/prafulnair" target="_blank" rel="noreferrer">
          <FaGithub className="text-xl hover:text-indigo-500 transition-colors" />
        </a>

      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Praful Nair. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;