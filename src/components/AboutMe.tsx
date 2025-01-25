

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
              I began programming in high school, exploring C, C++, and Visual Basic. In 2016, I started my Bachelor’s in Computer Engineering at the University of Mumbai (Pillai College of Engineering). During 2019–2020, my team researched honeypots—building a small-scale version in a lab environment—and learned how attackers probe vulnerabilities. 
              <p>Covid Pandemic halted the world, stopping my college when I was in my last term. I graduated admist the second wave in India, in January 2021.
              </p></p>
                             
            </div>

            <hr className="border-gray-300 dark:border-gray-700" />

{/* Academic Milestones */}
<div>
  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
    Moving to Montreal, Masters at Concordia University.
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
                Professional Outlook: What drives Me..
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m motivated by the chance to craft robust solutions that address real-world challenges, and I bring a 
              human-centered mindset to every project I touch. Through agile principles, effective communication, and a strong sense of ownership, I aim to deliver technology that truly benefits its users.
              <p>I believe in continuous learning, mentorship, and using technology for positive social impact. 
    My guiding principle is simple yet powerful: “Be kind and help others whenever you can.” For me, innovation should simplify human life, empower communities, and leave a meaningful mark—both locally and globally.</p>      
              </p>
        
            </div>

            <hr className="border-gray-300 dark:border-gray-700" />

            {/* Core Values or Driving Principles */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                What makes me Human?
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  I love making coffee as much as I love discovering cafés in new cities. Travel 
  fuels my curiosity—I explore diverse cultures and try to learn from each place 
  I visit. I’m humbled by how much there is to discover beyond my current knowledge, 
  but that humility drives me to wake up each day eager to learn more.
</p>
            </div>
          </div>
        </div>
      </section>
{/* Optional: Brief Timeline */}
<section className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
  <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
    Key Highlights
  </h2>
  <div className="relative border-l border-gray-300 dark:border-gray-700">

    {/* 2016–2021: BE in Computer Engineering */}
    <div className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-500 dark:bg-indigo-600
                       rounded-full -left-3 ring-4 ring-white dark:ring-gray-900"></span>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        2016–2021 — Started my Bachelor&apos;s in Computer Engineering
      </h3>
      <p className="text-base font-normal text-gray-500 dark:text-gray-300">
        Joined Pillai College of Engineering, Mumbai University, specialized in research and production Honepots and advanced system security.
        Topped University in Applied Physics, 2 Best Project Awards, 2 Minor Internships in Cyber Security, 3rd Place in Technical Paper Presentation Competition.


      </p>
    </div>

    {/* 2021: UN Volunteering */}
    <div className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-500 dark:bg-indigo-600
                       rounded-full -left-3 ring-4 ring-white dark:ring-gray-900"></span>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        2021 — UN Online Volunteering
      </h3>
      <p className="text-base font-normal text-gray-500 dark:text-gray-300">
        Supported two organizations, including <em>World Changing Center</em> (UK), 
        helping children with autism and their families. Continued self‑study 
        and graduate prep.
      </p>
    </div>

    {/* 2022–2024: Masters at Concordia */}
    <div className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-500 dark:bg-indigo-600
                       rounded-full -left-3 ring-4 ring-white dark:ring-gray-900"></span>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        2022–2024 — Master&apos;s in Applied Computer Science
      </h3>
      <p className="text-base font-normal text-gray-500 dark:text-gray-300">
        Concordia University, Montreal. Served as a Teaching Assistant (2023), 
        managing over 14 teams on web app development. Graduated with a 3.65 GPA.
      </p>
    </div>

    {/* 2024: Intern Developer at Valsoft */}
    <div className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-500 dark:bg-indigo-600
                       rounded-full -left-3 ring-4 ring-white dark:ring-gray-900"></span>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        2024 (Sep–Dec) — Intern Developer, Valsoft
      </h3>
      <p className="text-base font-normal text-gray-500 dark:text-gray-300">
        Enhanced NetSuite-based ERP and developed FeatureHub, a platform for 
        feature requests and issue tracking. Looking forward to full-time roles next.
      </p>
    </div>

  </div>
</section>

      {/* Bottom CTA */}
      <section className="bg-gray-200 dark:bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            Ready to Connect?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
            Interested in learning how I can be a good fit for your team, or just want to say hello?
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