// import React from 'react';

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   link: string;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
//   return (
//     <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-shadow flex flex-col justify-between">
//       <div>
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-600 dark:text-gray-300">{description}</p>
//       </div>
//       <div className="mt-4">
//         <a
//           href={link}
//           className="text-indigo-500 dark:text-indigo-400 font-semibold hover:underline"
//         >
//           View Project
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-shadow cursor-pointer"
      >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="mb-4">{description}</p>
            <a
              href={link}
              className="inline-block bg-indigo-500 text-white px-4 py-2 rounded"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;