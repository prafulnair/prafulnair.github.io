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
import React, { useMemo, useState } from 'react';
import AllProjectsItem from '../components/AllProjectsItem';
import { projects } from '../data/projectData';
import { motion } from 'framer-motion';

const AllProjectsPage: React.FC = () => {
  const filterOptions = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.techStack?.forEach((tech) => tags.add(tech));
    });
    return ['All', ...Array.from(tags).sort((a, b) => a.localeCompare(b))];
  }, []);

  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.techStack?.includes(activeFilter));
  }, [activeFilter]);

  const totalProjects = projects.length;
  const totalFocusAreas = filterOptions.length - 1;

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

        <motion.p
          className="max-w-3xl mx-auto text-center text-lg text-gray-600 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Explore a curated collection of case studies, experiments, and production builds spanning data engineering, full-stack
          products, and research prototypes.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-lg shadow-sm">
            <span className="font-semibold text-gray-900 dark:text-gray-100 mr-1">{totalProjects}</span>
            projects
          </div>
          {totalFocusAreas > 0 && (
            <div className="px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-lg shadow-sm">
              Focus areas across <span className="font-semibold text-gray-900 dark:text-gray-100">{totalFocusAreas}</span> tech
              stacks
            </div>
          )}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          {filterOptions.map((option) => {
            const isActive = option === activeFilter;

            return (
              <button
                key={option}
                type="button"
                onClick={() => setActiveFilter(option)}
                className={`px-4 py-2 rounded-full border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow'
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700'
                }`}
              >
                {option}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 pb-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
          }}
        >
          {filteredProjects.map((project) => (
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