// import React from 'react';
// import { FiMail } from 'react-icons/fi';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';

// const Contact: React.FC = () => {

//   return (
//     <section
//       id="contact"
//       className="py-20 border-t border-gray-200 dark:border-gray-700"
//     >
//         <h2 className="text-3xl font-bold mb-6"><a href="mailto:prafulworkspace@gmail.com" className="flex items-center gap-2">
//             <FiMail />
//                 Contact Me
//                 </a>
//         </h2>
//         <p className="text-lg text-gray-700 dark:text-gray-300 mb-6"> 
//         A portfolio is just a glimpse—pixels and code can only say so much. The best way to truly know what I bring to the table? Let’s connect and have a conversation.
//       </p>
//       <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
//       Got a question or want to work together? Just shoot me an email at
//       {' '}
//         <a
//           href="mailto:prafulworkspace@gmail.com"
//           className="text-indigo-500 dark:text-indigo-400 font-semibold">
//           prafulworkspace@gmail.com
//         </a>
//       </p>
//       {/* You could include social links or a short note here instead of a form */}
//       <p className="text-lg text-gray-700 dark:text-gray-300">
//         Or find me on:
//         {/* e.g. LinkedIn, GitHub icons, etc. */}
//       </p>
//       <div className="flex items-center gap-4 mt-2">
//   {/* LinkedIn */}
//   <a
//     href="https://www.linkedin.com/in/praful-nair-3a5a87181/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-indigo-500 dark:text-indigo-400 hover:opacity-80 transition-opacity"
//   > LinkedIn
//     <FaLinkedin size={30} aria-label="LinkedIn" />
//   </a>

//   {/* GitHub */}
//   <a
//     href="https://github.com/prafulnair/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-indigo-500 dark:text-indigo-400 hover:opacity-80 transition-opacity"
//   > GitHub
//     <FaGithub size={30} aria-label="GitHub" />
//   </a>
// </div>
      
//     </section>
//   );
// };

// export default Contact;

import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold mb-6">
        <a href="mailto:prafulworkspace@gmail.com" className="flex items-center gap-2">
          <FiMail />
          Contact Me
        </a>
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        A portfolio is just a snapshot—pixels and code can only say so much. The best way to know what I bring to the table? Let’s connect and have a conversation.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Have a question, an idea, or just want to chat? Drop me a message at{' '}
        <a href="mailto:prafulworkspace@gmail.com" className="text-indigo-500 dark:text-indigo-400 font-semibold">
          prafulworkspace@gmail.com
        </a>{' '}
        —I’d love to hear from you.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300">
        You can also find me on:
      </p>

      <div className="flex items-center gap-6 mt-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/praful-nair-3a5a87181/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 hover:opacity-80 transition-opacity"
        >
          <FaLinkedin size={28} aria-label="LinkedIn" />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/prafulnair/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 hover:opacity-80 transition-opacity"
        >
          <FaGithub size={28} aria-label="GitHub" />
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;

