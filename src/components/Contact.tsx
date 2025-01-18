import React, { FormEvent } from 'react';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {

  return (
    <section
      id="contact"
      className="py-20 border-t border-gray-200 dark:border-gray-700"
    >
        <h2 className="text-3xl font-bold mb-6"><a href="mailto:you@example.com" className="flex items-center gap-2">
            <FiMail />
                Contact Me
                </a>
        </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
      Got a question or want to work together? Just shoot me an email at
      {' '}
        <a
          href="mailto:prafulworkspace@gmail.com"
          className="text-indigo-500 dark:text-indigo-400 font-semibold">
          prafulworkspace@gmail.com
        </a>
      </p>
      {/* You could include social links or a short note here instead of a form */}
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Or find me on:
        {/* e.g. LinkedIn, GitHub icons, etc. */}
      </p>
      <div className="flex items-center gap-4 mt-2">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/praful-nair-3a5a87181/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-500 dark:text-indigo-400 hover:opacity-80 transition-opacity"
  > My LinkedIn
    <FaLinkedin size={30} aria-label="LinkedIn" />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/prafulnair/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-500 dark:text-indigo-400 hover:opacity-80 transition-opacity"
  > My GitHub
    <FaGithub size={30} aria-label="GitHub" />
  </a>
</div>
      
    </section>
  );
};

export default Contact;