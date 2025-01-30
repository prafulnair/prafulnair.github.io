// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { projects } from '../data/projectData';

// const ProjectDetailPage: React.FC = () => {
//   const { id } = useParams();
//   const projectId = Number(id);
//   const project = projects.find(p => p.id === projectId);

//   if (!project) {
//     return <div className="text-center py-20">Project not found.</div>;
//   }

//   return (
//     <section className="min-h-screen py-20 bg-gray-100 dark:bg-gray-900 transition-colors">
//       <div className="container mx-auto px-4 md:px-8">
//         <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
//           {project.title}
//         </h1>
//         {project.imageUrl && (
//           <img
//             src={project.imageUrl}
//             alt={project.title}
//             className="w-full max-h-96 object-cover mb-6 rounded-md shadow-lg"
//           />
//         )}
//         <p className="text-gray-700 dark:text-gray-300 mb-4">
//           {project.shortDesc}
//         </p>
//         <p className="text-gray-700 dark:text-gray-300">
//           {project.longDesc}
//         </p>
//       </div>
//     </section>
//   );
// };

// export default ProjectDetailPage;

// src/pages/ProjectDetailPage.tsx

// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { projects } from '../data/projectData';
// import { motion } from 'framer-motion';

// const ProjectDetailPage: React.FC = () => {
//   const { id } = useParams();
//   const projectId = Number(id);
//   const project = projects.find((p) => p.id === projectId);

//   if (!project) {
//     return (
//       <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
//         <div className="text-center py-20">
//           <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
//             Project not found
//           </h1>
//           <p className="text-gray-600 dark:text-gray-300 mt-2">
//             The requested project does not exist.
//           </p>
//           <Link
//             to="/all-projects"
//             className="inline-block mt-6 px-5 py-2 bg-indigo-500 text-white rounded-md font-semibold 
//                        hover:opacity-90 transition-opacity dark:bg-indigo-600"
//           >
//             Back to Projects
//           </Link>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
//     >
//       {/* Hero Banner */}
//       <div className="relative w-full h-[40vh] bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
//         <div className="text-center px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
//             {project.title}
//           </h1>
//           <p className="text-md md:text-lg text-white max-w-2xl mx-auto">
//             {project.shortDesc}
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
//         {/* Overview */}
//         {project.longDesc && (
//           <div className="mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
//               Overview
//             </h2>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//               {project.longDesc}
//             </p>
//           </div>
//         )}

//         {/* Image or Architecture Diagram */}
//         {project.imageUrl && (
//           <img
//             src={project.imageUrl}
//             alt={project.title}
//             className="w-full object-cover mb-6 rounded-md shadow-lg max-h-80"
//           />
//         )}
//         {project.architectureImg && (
//           <div className="mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
//               Architecture Diagram
//             </h3>
//             <img
//               src={project.architectureImg}
//               alt={`${project.title} architecture`}
//               className="w-full object-cover mb-6 rounded-md shadow"
//             />
//           </div>
//         )}

//         {/* Tech Stack */}
//         {project.techStack && project.techStack.length > 0 && (
//           <div className="mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
//               Tech Stack
//             </h3>
//             <ul className="flex flex-wrap gap-2">
//               {project.techStack.map((tech, i) => (
//                 <li
//                   key={i}
//                   className="bg-indigo-100 dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100 
//                              px-3 py-1 rounded-md text-sm font-medium"
//                 >
//                   {tech}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Key Features */}
//         {project.features && project.features.length > 0 && (
//           <div className="mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
//               Key Features
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
//               {project.features.map((feature, i) => (
//                 <li key={i}>{feature}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Challenges & Solutions */}
//         {project.challenges && project.challenges.length > 0 && (
//           <div className="mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
//               Challenges &amp; Solutions
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
//               {project.challenges.map((ch, i) => (
//                 <li key={i}>{ch}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Lessons Learned */}
//         {project.lessons && (
//           <div className="mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
//               Lessons Learned
//             </h3>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//               {project.lessons}
//             </p>
//           </div>
//         )}

//         {/* Repo Link or CTA */}
//         <div className="mt-10 flex flex-col items-start sm:items-center sm:flex-row sm:justify-between">
//           <Link
//             to="/all-projects"
//             className="mb-4 sm:mb-0 sm:mr-4 inline-block px-5 py-2 
//                        bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
//                        rounded-md font-semibold hover:opacity-90 transition-opacity"
//           >
//             ← All Projects
//           </Link>
//           {project.repoLink && (
//             <a
//               href={project.repoLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block px-5 py-2 bg-indigo-500 text-white 
//                          rounded-md font-semibold hover:opacity-90 transition-opacity
//                          dark:bg-indigo-600"
//             >
//               View on GitHub
//             </a>
//           )}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default ProjectDetailPage;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectData';
import { motion } from 'framer-motion';

// 1) Insert or import your skillIcons map:
const skillIcons: { [key: string]: string } = {
  Python: "devicon-python-plain",
  Flask: "devicon-flask-original",
  Django: "devicon-django-plain",
  Java: "devicon-java-plain",
  JavaScript: "devicon-javascript-plain",
  React: "devicon-react-original",
  NodeJS: "devicon-nodejs-plain",
  Vite: "devicon-vitejs-plain",
  HTML: "devicon-html5-plain",
  CSS: "devicon-css3-plain",
  "Tailwind CSS": "devicon-tailwindcss-original",
  Docker: "devicon-docker-plain",
  GCP: "devicon-googlecloud-plain",
  AWS: "devicon-amazonwebservices-plain-wordmark",
  Pandas: "devicon-pandas-plain-wordmark",
  Git: "devicon-git-plain",
  BitBucket: "devicon-bitbucket-original-wordmark",
  PostgreSQL: "devicon-postgresql-plain-wordmark",
  'AWS App Runner': "devicon-amazonwebservices-plain-wordmark",
  "SQL Alchemy": "devicon-sqlalchemy-plain",
};

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Project not found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            The requested project does not exist.
          </p>
          <Link
            to="/all-projects"
            className="inline-block mt-6 px-5 py-2 bg-indigo-500 text-white rounded-md font-semibold 
                       hover:opacity-90 transition-opacity dark:bg-indigo-600"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {project.title}
          </h1>
          <p className="text-md md:text-lg text-white max-w-2xl mx-auto">
            {project.shortDesc}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Overview */}
        {project.longDesc && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.longDesc}
            </p>
          </div>
        )}

        {/* Image or Architecture Diagram */}
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full object-cover mb-6 rounded-md shadow-lg max-h-80"
          />
        )}
        {project.architectureImg && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Architecture Diagram
            </h3>
            <img
              src={project.architectureImg}
              alt={`${project.title} architecture`}
              className="w-full object-cover mb-6 rounded-md shadow"
            />
          </div>
        )}

        {/* Tech Stack with icons */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Tech Stack
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mt-4 text-center">
              {project.techStack.map((tech) => {
                const iconClass = skillIcons[tech] || "";
                return (
                  <div 
                    key={tech} 
                    className="flex flex-col items-center justify-center space-y-2"
                  >
                    {iconClass ? (
                      <i className={`${iconClass} text-4xl`} />
                    ) : (
                      <span className="text-4xl">🔧</span>
                    )}
                    <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                      {tech}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges & Solutions */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Challenges &amp; Solutions
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {project.challenges.map((ch, i) => (
                <li key={i}>{ch}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Lessons Learned */}
        {project.lessons && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Lessons Learned
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.lessons}
            </p>
          </div>
        )}

        {/* Repo Link or CTA */}
        <div className="mt-10 flex flex-col items-start sm:items-center sm:flex-row sm:justify-between">
          <Link
            to="/all-projects"
            className="mb-4 sm:mb-0 sm:mr-4 inline-block px-5 py-2 
                       bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                       rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            ← All Projects
          </Link>
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-indigo-500 text-white 
                         rounded-md font-semibold hover:opacity-90 transition-opacity
                         dark:bg-indigo-600"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetailPage;