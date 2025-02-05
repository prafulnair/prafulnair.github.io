

// import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TerminalBanner from './TerminalBanner';

const AboutMe: React.FC = () => {
  // Example static array of skills; adjust or expand as needed
  // A map of skill names to Devicon classes
const skillIcons: { [key: string]: string } = {
    Python: "devicon-python-plain",
    Flask: "devicon-flask-original",
    Django: "devicon-django-plain",
    Java: "devicon-java-plain",
    JavaScript: "devicon-javascript-plain",
    React: "devicon-react-original",
    NodeJS: "devicon-nodejs-plain",
    Vite: "devicon-vitejs-plain", // Devicon doesn’t have a Vite icon, might omit or find an alternative
    HTML: "devicon-html5-plain",
    CSS: "devicon-css3-plain",
    "Tailwind CSS": "devicon-tailwindcss-original", // Devicon doesn’t have Tailwind (there’s an unofficial icon)
    Docker: "devicon-docker-plain",
    GCP: "devicon-googlecloud-plain",
    AWS: "devicon-amazonwebservices-plain-wordmark",
    Pandas: "devicon-pandas-plain-wordmark",
    Git: "devicon-git-plain",
    BitBucket: "devicon-bitbucket-original-wordmark",
    PostgreSQL: "devicon-postgresql-plain-wordmark",
    "SQL Alchemy": "devicon-sqlalchemy-plain",
  };
  const skills = [
    'Python',
    'Flask',
    'Django',
    'Java',
    'JavaScript',
    'React',
    'NodeJS',
    'Vite',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Docker',
    'GCP',
    'AWS',
    'Pandas',
    'Git',
    'BitBucket',
    'PostgreSQL',
    'SQL Alchemy'
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Hero / Banner Section */}
      <section className="relative w-full h-[40vh] bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
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
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1 mt-4">
              <li>• Montreal-based</li>
              <li>• Enthusiastic about using tech to simplify life</li>
              <li>• Aspire to build scalable &amp; reliable systems</li>
              <li>• Loves Coffee</li>
            </ul>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="md:w-2/3 space-y-10">
            {/* Early Passion */}
            {/* <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Early Passion
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My fascination with technology began the moment I booted up a computer
                as a child, although, I have to admit the fascination was towards the
                flash games that came pre-loaded with the systems back in those days...
              </p>
            </div> */}

            {/* <hr className="border-gray-300 dark:border-gray-700" /> */}

            {/* Academic Milestones */}
            {/* <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Education
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I graduated with a Bachelor’s degree in Computer Engineering from the University of Mumbai (Pillai College of Engineering) in 2021 with a GPA of 8.42. During my undergrad, I focused on Advanced System Security and Honeypots, which sparked my interest in building secure and efficient systems.

Later, I moved to Montreal to pursue a Master’s in Applied Computer Science at Concordia University, where I learned to build reliable and scalable applications, design advanced algorithms, and improve my software development skills. I also worked as a Teaching Assistant for 8 months, helping students develop web applications and collaborate in Agile teams. I graduated in 2024 with a GPA of 3.65.
              </p>
            </div> */}

            <hr className="border-gray-300 dark:border-gray-700" />


<div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Technical Skills
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Below are some technologies and tools I’ve worked with:
              </p> </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mt-4 text-center">
  {skills.map((skill) => {
    const iconClass = skillIcons[skill] || "";
    return (
      <div 
        key={skill}
        className="flex flex-col items-center justify-center space-y-2"
      >
        {iconClass ? (
          <i 
            className={`${iconClass} text-4xl`} 
            // devicon classes for size & color can be added 
          />
        ) : (
          <span className="text-4xl">🔧</span> 
          // fallback icon if devicon not found
        )}
        <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">
          {skill}
        </span>
      </div>
    );
  })}
</div>

            <hr className="border-gray-300 dark:border-gray-700" />

            {/* Professional Outlook */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Professional Outlook: What drives Me..
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I like building solutions that actually solve real-world problems / real-people problems. Whether it’s a small improvement or a bigger project, I try to keep the end user in mind and work backwards and make sure it’s useful. I work best in collaborative environments where communication and ownership matter, and I take pride in delivering work that makes a difference.
                <p>
                I’m always looking to learn something new, share what I know, and use tech for good. My approach is simple: be kind, help where you can, and create things that make life easier for people. That’s what drives me—leaving a positive impact in a way that feels real and meaningful.
                </p>
              </p>
            </div>

            <hr className="border-gray-300 dark:border-gray-700" />

            {/* Core Values or Driving Principles */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                What makes me Human?
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I love making coffee and exploring cafés in new cities. Travel keeps me curious—I enjoy experiencing different cultures and learning from each place I visit. I also like taking photographs; it’s a way for me to capture and appreciate the small details around me.
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
              Joined Pillai College of Engineering, Mumbai University, specialized
              in research and production Honeypots and advanced system security.
              Topped University in Applied Physics, 2 Best Project Awards, 2 Minor
              Internships in Cyber Security, 3rd Place in Technical Paper
              Presentation Competition.
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
            href="mailto:prafulworkspace@gmail.com"
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