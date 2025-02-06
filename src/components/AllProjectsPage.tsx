// import React from 'react';
// import AllProjectsItem from '../components/AllProjectsItem';
// import { projects } from '../data/projectData';
// const AllProjectsPage: React.FC = () => {
//   return (
//     <section 
//       className="
//         min-h-screen py-20
//         bg-gray-100 dark:bg-gray-900
//         transition-colors duration-300
//       "
//     >
//       <div className="container mx-auto px-4 md:px-8">
//         <h1 
//           className="
//             text-4xl font-bold text-center mb-10
//             text-gray-800 dark:text-gray-100
//           "
//         >
//           All Projects
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <AllProjectsItem key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllProjectsPage;

// src/pages/AllProjectsPage.tsx
import React from 'react';
import AllProjectsItem from '../components/AllProjectsItem';
import { projects } from '../data/projectData';
import { motion } from 'framer-motion';

const AllProjectsPage: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.h1 
          className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          All Projects
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
          }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <AllProjectsItem project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AllProjectsPage;