import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3.4}}
      className="min-h-screen flex flex-col items-center justify-center text-center py-10"
    >
      <h1 className="text-5xl font-extrabold mb-4">
        Hello, I&apos;m{" "}
        <span className="text-indigo-500 dark:text-indigo-400">Praful</span>
      </h1>
      <p className="text-xl max-w-2xl mb-6 text-gray-600 dark:text-gray-300">
        New Graduate from Concordia University | Software Developer, Enthusiastic about Cloud Development and Building Reliable and Scalable Systems.
      </p>

                  <Link to="/#projects" className="inline-block bg-indigo-500 dark:bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
              View My Work
            </Link>
    </motion.section>
  );
};

export default Hero;