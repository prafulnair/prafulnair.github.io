// import React from 'react';
// import { FaGraduationCap, FaLaptopCode, FaLightbulb, FaUser } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const AboutMe: React.FC = () => {
//   return (
//     // Wrapping the page content in a motion.div for the fade transition.
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.4 }}
//       className="py-20"
//     >
//       <div className="container mx-auto px-4 md:px-8">
//         {/* Page Title */}
//         <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>
//         <div className="md:flex md:space-x-10">
//           {/* Left Column: Profile Picture and Tagline */}
//           <div className="md:w-1/3 flex flex-col items-center text-center space-y-4">
//             {/* Profile Image */}
//             <img
//               src="/path/to/your/profile.jpg"  // Replace with your own image path
//               alt="Praful Nair"
//               className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
//             />
//             {/* Brief Tagline / Summary */}
//             <h2 className="text-2xl font-semibold">Praful Nair</h2>
//             <p className="text-base text-gray-600 dark:text-gray-300">
//               New Grad, Software Engineer
//             </p>
//             {/* A short list of core skills or focus areas */}
//             <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
//               <li>Problem Solver</li>
//               <li>Collaborative Innovator</li>
//               <li>Clean Code Advocate</li>
//             </ul>
//           </div>

//           {/* Right Column: Detailed Narrative */}
//           <div className="md:w-2/3 mt-10 md:mt-0 space-y-10">
            
//             {/* Section 1: Early Passion */}
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <FaLightbulb className="text-indigo-500" size={22} />
//                 <h3 className="text-2xl font-bold">Early Passion</h3>
//               </div>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 My fascination with technology sparked at a young age when I first encountered a computer.
//                 That spark evolved into a deep-seated passion for understanding how technology can create meaningful change.
//               </p>
//             </div>

//             <hr className="border-gray-300 dark:border-gray-600" />

//             {/* Section 2: Academic Journey */}
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <FaGraduationCap className="text-indigo-500" size={22} />
//                 <h3 className="text-2xl font-bold">Academic Journey</h3>
//               </div>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 My academic path took me through rigorous studies in computer engineering, where I delved into
//                 distributed systems, advanced algorithms, and innovative software practices. Every challenge shaped my desire to learn and improve.
//               </p>
//             </div>

//             <hr className="border-gray-300 dark:border-gray-600" />

//             {/* Section 3: Professional & Future Aspirations */}
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <FaLaptopCode className="text-indigo-500" size={22} />
//                 <h3 className="text-2xl font-bold">Professional & Future Aspirations</h3>
//               </div>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 Embarking on my career as a Software Engineer, I aim to design reliable, scalable applications that solve real problems.
//                 I cherish collaboration and believe that every innovative idea starts with understanding both the technical and human facets of a challenge.
//               </p>
//             </div>

//             <hr className="border-gray-300 dark:border-gray-600" />

//             {/* Section 4: What Drives Me */}
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <FaUser className="text-indigo-500" size={22} />
//                 <h3 className="text-2xl font-bold">What Drives Me</h3>
//               </div>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 I am driven by a commitment to continuous learning and a belief in technology’s potential to make our lives better.
//                 Whether it’s transforming abstract ideas into tangible solutions or working within dynamic teams, I remain passionate about creating a positive impact.
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default AboutMe;

// import React from 'react';
// import { FaGraduationCap, FaLaptopCode, FaLightbulb, FaUser } from 'react-icons/fa';
// import { motion } from 'framer-motion';


// const AboutMe: React.FC = () => {
//   return (
//     // Wrapping the page content in a motion.div for a fade transition.
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.4 }}
//       className="py-20"
//     >
//       <div className="container mx-auto px-4 md:px-8">
//         {/* Page Title */}
//         <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>
//         <div className="md:flex md:space-x-10">
//           {/* Left Column: Profile Picture and Tagline */}
//           <div className="md:w-1/3 flex flex-col items-center text-center space-y-4">
//             {/* Profile Image */}
//             <img
//               src="profile_photo2.jpeg"  // Replace with your actual image path
//               alt="Praful Nair"
//               className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
//             />
//             {/* Brief Tagline / Summary */}
//             <h2 className="text-2xl font-semibold">Praful Nair</h2>
//             <p className="text-base text-gray-600 dark:text-gray-300">
//               New Grad, Software Engineer
//             </p>
//             {/* Short list of core skills */}
//             <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
//               <li>Problem Solver</li>
//               <li>Collaborative Innovator</li>
//               <li>Clean Code Advocate</li>
//             </ul>
//           </div>

//           {/* Right Column: Detailed Narrative */}
//           <div className="md:w-2/3 mt-10 md:mt-0 space-y-10">
//             {/* Section 1: Early Passion */}
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <FaLightbulb className="text-indigo-500" size={22} />
//                 <h3 className="text-2xl font-bold">Early Passion</h3>
//               </div>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 My fascination with technology sparked at a young age when I first encountered a computer.
//                 That spark evolved into a deep-seated passion for understanding how technology can create meaningful change.
//               </p>
//             </div>

//             <hr className="border-gray-300 dark:border-gray-600" />

//             {/* Section 2: Academic Journey */}
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <FaGraduationCap className="text-indigo-500" size={22} />
//                 <h3 className="text-2xl font-bold">Academic Journey</h3>
//               </div>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 My academic path took me through rigorous studies in computer engineering, where I delved into
//                 distributed systems, advanced algorithms, and innovative software practices. Every challenge shaped my desire to learn and improve.
//               </p>
//             </div>

//             <hr className="border-gray-300 dark:border-gray-600" />

//             {/* Section 3: Professional & Future Aspirations */}
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <FaLaptopCode className="text-indigo-500" size={22} />
//                 <h3 className="text-2xl font-bold">Professional & Future Aspirations</h3>
//               </div>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 Embarking on my career as a Software Engineer, I aim to design reliable, scalable applications that solve real problems.
//                 I cherish collaboration and believe that every innovative idea starts with understanding both the technical and human facets of a challenge.
//               </p>
//             </div>

//             <hr className="border-gray-300 dark:border-gray-600" />

//             {/* Section 4: What Drives Me */}
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <FaUser className="text-indigo-500" size={22} />
//                 <h3 className="text-2xl font-bold">What Drives Me</h3>
//               </div>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 I am driven by a commitment to continuous learning and a belief in technology’s potential to improve lives.
//                 Whether it’s transforming abstract ideas into tangible solutions or collaborating within dynamic teams, I remain passionate about creating a positive impact.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default AboutMe;

// //AMZING
// import React from 'react';
// import { motion } from 'framer-motion';

// const AboutMe: React.FC = () => {
//   return (
//     // Simple fade transition on mount/unmount
//     <motion.main
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
//     >
//       {/* Hero / Banner Section */}
//       <section className="relative w-full h-[40vh] bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
//         <div className="text-center px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
//             My Journey
//           </h1>
//           <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
//             A deeper look into who I am, what I&apos;ve accomplished, and the principles that drive me.
//           </p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
//         <div className="md:flex md:space-x-12">
//           {/* Left Column: Profile or Quick Info */}
//           <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-6 mb-12 md:mb-0">
//             <img
//               src="/profile_photo2.jpeg" // Adjust path to your actual image
//               alt="Praful Nair"
//               className="w-48 h-48 rounded-full object-cover shadow-lg"
//             />
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-4">
//                 Praful Nair
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300 mt-2">
//                 New Grad, Software Engineer
//               </p>
//             </div>
//             {/* Brief Quick Facts or a short summary */}
//             <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1 mt-4">
//               <li>• Montreal-based</li>
//               <li>• Enthusiastic about system design</li>
//               <li>• Lifelong learner & coffee lover</li>
//             </ul>
//           </div>

//           {/* Right Column: Detailed Narrative */}
//           <div className="md:w-2/3 space-y-10">
//             {/* Early Passion */}
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
//                 Early Passion
//               </h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 My fascination with technology began the moment I booted up a computer 
//                 as a child, sparking endless curiosity. Over time, that curiosity turned 
//                 into a passion for how things work, and how I can build new experiences 
//                 that solve real-world problems.
//               </p>
//             </div>

//             <hr className="border-gray-300 dark:border-gray-700" />

//             {/* Academic Milestones */}
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
//                 Academic Milestones
//               </h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 My formal training in Computer Engineering introduced me to distributed 
//                 systems, advanced algorithms, and the joy of collaborative project work. 
//                 I delved into cutting-edge research, from cybersecurity to AI, always 
//                 pushing myself to learn more and to think bigger.
//               </p>
//             </div>

//             <hr className="border-gray-300 dark:border-gray-700" />

//             {/* Professional Outlook */}
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
//                 Professional Outlook
//               </h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 Starting my career as a Software Engineer, I’m excited to build scalable 
//                 solutions that address real challenges. My approach values communication, 
//                 agile principles, and a strong sense of ownership. Whether it’s designing 
//                 a data pipeline or architecting a user-friendly platform, I aim to 
//                 combine technical rigor with human-centered thinking.
//               </p>
//             </div>

//             <hr className="border-gray-300 dark:border-gray-700" />

//             {/* Core Values or Driving Principles */}
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
//                 What Drives Me
//               </h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 Beyond code, I believe in continuous learning, mentorship, and paying 
//                 forward the support I’ve received. I’m driven by the vision of 
//                 technology as a force for positive change—when applied thoughtfully. 
//                 I strive to be part of solutions that make a lasting impact, both 
//                 locally and globally.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </motion.main>
//   );
// };

// export default AboutMe;

import React from 'react';
import { motion } from 'framer-motion';

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
      <section className="relative w-full h-[40vh] bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            My Journey
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            A deeper look into who I am, what I&apos;ve accomplished, and the principles that drive me.
          </p>
        </div>
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
              <li>• Enthusiastic about system design</li>
              <li>• Lifelong learner & coffee lover</li>
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
                as a child, sparking endless curiosity. Over time, that curiosity turned 
                into a passion for building new experiences that solve real-world problems.
              </p>
            </div>

            <hr className="border-gray-300 dark:border-gray-700" />

            {/* Academic Milestones */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Academic Milestones
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My formal training in Computer Engineering introduced me to distributed 
                systems, advanced algorithms, and the joy of collaborative project work. 
                I’ve explored everything from cybersecurity to AI, always pushing myself 
                to learn more and think bigger.
              </p>
            </div>

            <hr className="border-gray-300 dark:border-gray-700" />

            {/* Professional Outlook */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Professional Outlook
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                As a new Software Engineer, I’m excited to build scalable solutions 
                addressing real challenges. I value effective communication, agile principles, 
                and ownership. Whether it’s designing a data pipeline or architecting 
                a user-friendly product, I aim to combine technical rigor with human-centered design.
              </p>
            </div>

            <hr className="border-gray-300 dark:border-gray-700" />

            {/* Core Values or Driving Principles */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                What Drives Me
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond code, I believe in continuous learning, mentorship, and using 
                technology for positive change. I’m driven by the vision of making a 
                meaningful impact—both locally and globally—through thoughtful, innovative 
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