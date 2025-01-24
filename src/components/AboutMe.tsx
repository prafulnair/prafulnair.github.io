

import React from 'react';
import { motion } from 'framer-motion';
import TerminalBanner from './TerminalBanner';

const AboutMe: React.FC = () => {
  return (
    // Simple fade transition on mount/unmount
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Hero / Banner Section */}
      {/* <section className="relative w-full h-[40vh] bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            My Journey
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            A deeper look into who I am, what I&apos;ve accomplished, and the principles that drive me.
          </p>
        </div>
      </section> */}
      {/* Hero / Banner Section */}
{/* Hero / Banner Section */}
<section className="relative w-full h-[40vh] bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
        {/* Just slap TerminalBanner in the center */}
        <TerminalBanner />
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="md:flex md:space-x-12">
          {/* Left Column: Profile or Quick Info */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-6 mb-12 md:mb-0">
            <img
              src="/profile_photo2.jpeg" // Adjust path to your actual image
              alt="Praful Nair"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-4">
                Praful Nair
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                New Grad, Software Engineer
              </p>
            </div>
            {/* Brief Quick Facts or a short summary */}
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1 mt-4">
              <li>• Montreal-based</li>
              <li>• Enthusiastic about using tech to simplify life</li>
              <li>• Aspire to build scalable & reliable systems</li>
              <li>• Love to Learn & A Coffee lover</li>
            </ul>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="md:w-2/3 space-y-10">
            {/* Early Passion */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Early Passion
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My fascination with technology began the moment I booted up a computer 
                as a child, although, I have to admit the fascination was towards the flash games that came pre-loaded with the systems back in those days...
              </p>
            </div>

            <hr className="border-gray-300 dark:border-gray-700" />

            {/* Academic Milestones */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Computer Engineering at University of Mumbai
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I started learning Programming right from High-school, starting with C, C++ and Visual Basics.
                I got started Bachelor's of Engineering in Computer Engineering at University of Mumbai (Pillai College of Engineering) in 2016.
                In 2019-2020, I collaborated with Professor K.S Charumathi and did research on lesser known cyber defence mechanism - Honeypots and built our own small scale Honeypot and tested on small data in a Lab environment
              </p>
            </div>

            <hr className="border-gray-300 dark:border-gray-700" />

{/* Academic Milestones */}
<div>
  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
    Moving to Montreal, Concordia University.
  </h3>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
    I moved to Montreal in 2022 and started with my Masters in Applied Computer Science at Concordia University. The focus of my studies spanned from 
    building Distributed Systems, Building Softwares from ground up while collaborating with other people in an Agile environment, and Understanding and Designing Advanced Algorithms.
    I also studied building convolutional neural networks and other tools to build efficient Computer Vision applications and Machine Learning Components.
    I also served as a Teaching Assistant to Dr. Rodrigo Morales, for the course "Software Process" from September 2023 to May 2024, till the last day of my program. I mentored and helped over 80 students 
    in undestanding how to build scalable web applications, and how to collaborate with each other in team and contribute in Agile. 
  </p>
</div>

            <hr className="border-gray-300 dark:border-gray-700" />

            {/* Professional Outlook */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Professional Outlook
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a new Software Engineer, I’m driven by the opportunity to craft robust solutions that tackle real challenges. I value effective communication, agile principles, and a strong sense of ownership in my work. Whether I’m implementing a data pipeline or designing a user-friendly platform, I strive to blend technical rigor with human-centered thinking—ultimately creating tools that make a meaningful difference.
              </p>
            </div>

            <hr className="border-gray-300 dark:border-gray-700" />

            {/* Core Values or Driving Principles */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                What Drives Me
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                "Be Kind and Help others whenever you can".
                Beyond code, I believe in continuous learning, mentorship, and using 
                technology for positive change. I am a strong proponent of the belief that technology should simplify human life and aid in human society. I’m driven by the vision of making a 
                meaningful impact—both locally and globally—through thoughtful, sustainable 
                solutions that lift up the human experience. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Timeline or Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Key Milestones
        </h2>
        {/* A vertical timeline example */}
        <div className="relative border-l border-gray-300 dark:border-gray-700">
          {/* Timeline Item 1 */}
          <div className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-500 dark:bg-indigo-600 rounded-full -left-3 ring-4 ring-white dark:ring-gray-900">
              {/* Could be an icon or a small text, e.g. "1" */}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              2021 - Completed Bachelor&apos;s in Computer Engineering
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-300">
              Graduated with distinction, focusing on distributed systems &amp; security.
            </p>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-500 dark:bg-indigo-600 rounded-full -left-3 ring-4 ring-white dark:ring-gray-900">
              {/* Could be an icon or "2" */}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              2019 - Cybersecurity Internship
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-300">
              Worked on honeypot research, learning hands-on threat detection methods.
            </p>
          </div>

          {/* Timeline Item 3 */}
          <div className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-500 dark:bg-indigo-600 rounded-full -left-3 ring-4 ring-white dark:ring-gray-900">
              {/* Could be an icon or "3" */}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              2022 - Moved to Montreal &amp; Began Masters
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-300">
              Joined Concordia University&apos;s Gina Cody School, exploring advanced 
              AI, Cloud, and modern software practices.
            </p>
          </div>

          {/* Additional timeline items as needed */}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-200 dark:bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            Ready to Connect?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
            Interested in collaborating on a project, or just want to say hello?
            Feel free to reach out—I&apos;d love to hear from you!
          </p>
          <a
            href="mailto:prafulworkspace@gmail.com" // or link to your Contact page
            className="
              inline-block mt-6
              px-6 py-3
              bg-indigo-500 dark:bg-indigo-600
              text-white
              rounded-md
              font-semibold
              hover:opacity-90
              transition-opacity
            "
          >
            Contact Me
          </a>
        </div>
      </section>
    </motion.main>
  );
};

export default AboutMe;