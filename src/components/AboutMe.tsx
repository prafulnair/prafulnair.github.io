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

import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaLightbulb, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';


const AboutMe: React.FC = () => {
  return (
    // Wrapping the page content in a motion.div for a fade transition.
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="py-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>
        <div className="md:flex md:space-x-10">
          {/* Left Column: Profile Picture and Tagline */}
          <div className="md:w-1/3 flex flex-col items-center text-center space-y-4">
            {/* Profile Image */}
            <img
              src="profile_photo2.jpeg"  // Replace with your actual image path
              alt="Praful Nair"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
            />
            {/* Brief Tagline / Summary */}
            <h2 className="text-2xl font-semibold">Praful Nair</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              New Grad, Software Engineer
            </p>
            {/* Short list of core skills */}
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>Problem Solver</li>
              <li>Collaborative Innovator</li>
              <li>Clean Code Advocate</li>
            </ul>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="md:w-2/3 mt-10 md:mt-0 space-y-10">
            {/* Section 1: Early Passion */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaLightbulb className="text-indigo-500" size={22} />
                <h3 className="text-2xl font-bold">Early Passion</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My fascination with technology sparked at a young age when I first encountered a computer.
                That spark evolved into a deep-seated passion for understanding how technology can create meaningful change.
              </p>
            </div>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Section 2: Academic Journey */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaGraduationCap className="text-indigo-500" size={22} />
                <h3 className="text-2xl font-bold">Academic Journey</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My academic path took me through rigorous studies in computer engineering, where I delved into
                distributed systems, advanced algorithms, and innovative software practices. Every challenge shaped my desire to learn and improve.
              </p>
            </div>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Section 3: Professional & Future Aspirations */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaLaptopCode className="text-indigo-500" size={22} />
                <h3 className="text-2xl font-bold">Professional & Future Aspirations</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Embarking on my career as a Software Engineer, I aim to design reliable, scalable applications that solve real problems.
                I cherish collaboration and believe that every innovative idea starts with understanding both the technical and human facets of a challenge.
              </p>
            </div>

            <hr className="border-gray-300 dark:border-gray-600" />

            {/* Section 4: What Drives Me */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaUser className="text-indigo-500" size={22} />
                <h3 className="text-2xl font-bold">What Drives Me</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am driven by a commitment to continuous learning and a belief in technology’s potential to improve lives.
                Whether it’s transforming abstract ideas into tangible solutions or collaborating within dynamic teams, I remain passionate about creating a positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;

// // the avatar one 
// import React from 'react';
// import { FaGraduationCap, FaLaptopCode, FaLightbulb, FaUser } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import Avatar from './Avatar'; // Import the avatar component


// const AboutMe: React.FC = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.4 }}
//       className="py-20"
//     >
//       <div className="container mx-auto px-4 md:px-8">
//         <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>
//         <div className="md:flex md:space-x-10">
//           {/* Left Column: Avatar and Tagline */}
//           <div className="md:w-1/3 flex flex-col items-center text-center space-y-4">
//             {/* Replace the image with our Avatar component */}
//             <Avatar />
//             <h2 className="text-2xl font-semibold">Praful Nair</h2>
//             <p className="text-base text-gray-600 dark:text-gray-300">
//               New Grad, Software Engineer
//             </p>
//             <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
//               <li>Problem Solver</li>
//               <li>Collaborative Innovator</li>
//               <li>Clean Code Advocate</li>
//             </ul>
//           </div>
//           {/* Right Column: Detailed Narrative */}
//           <div className="md:w-2/3 mt-10 md:mt-0 space-y-10">
//             {/* (The rest of your narrative sections remain unchanged) */}
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
//                 My academic path took me through rigorous studies in computer engineering, where I delved into distributed systems,
//                 advanced algorithms, and innovative software practices. Every challenge shaped my desire to learn and improve.
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