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

// // export default ProjectCard;
// import React, { useState } from 'react';

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   link: string;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <div
//         onClick={() => setShowModal(true)}
//         className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-shadow cursor-pointer"
//       >
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-600 dark:text-gray-300">{description}</p>
//       </div>

//       {showModal && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white dark:bg-gray-800 p-8 rounded">
//             <h3 className="text-2xl font-bold mb-4">{title}</h3>
//             <p className="mb-4">{description}</p>
//             <a
//               href={link}
//               className="inline-block bg-indigo-500 text-white px-4 py-2 rounded"
//               target="_blank"
//               rel="noreferrer"
//             >
//               View Project
//             </a>
//             <button
//               onClick={() => setShowModal(false)}
//               className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProjectCard;

import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  function openDialog() {
    setIsOpen(true);
  }

  function closeDialog() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Card Content */}
      <div
        onClick={openDialog}
        className="
          p-6 bg-white dark:bg-gray-800 
          rounded-lg shadow hover:shadow-xl 
          transition-shadow cursor-pointer
        "
      >
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>

      {/* Headless UI Dialog */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeDialog}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* The backdrop */}
            <div 
              className="
                fixed inset-0 bg-black 
                bg-opacity-40 
              " 
              aria-hidden="true" 
            />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="
                  w-full max-w-lg 
                  rounded-lg 
                  bg-white dark:bg-gray-800
                  p-6 
                  shadow-lg 
                  transform transition-all
                "
              >
                {/* Close Button (top-right) */}
                <div className="flex justify-end">
                  <button
                    onClick={closeDialog}
                    className="
                      text-gray-500 dark:text-gray-300 
                      hover:text-red-500 
                      transition-colors
                      focus:outline-none
                    "
                  >
                    ✕
                  </button>
                </div>

                {/* Title */}
                <Dialog.Title 
                  as="h3" 
                  className="text-2xl font-bold text-gray-800 dark:text-gray-100"
                >
                  {title}
                </Dialog.Title>

                {/* Body */}
                <div className="mt-4 text-gray-700 dark:text-gray-300">
                  {description}
                </div>

                {/* Actions */}
                <div className="mt-6 flex space-x-3">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-indigo-500 dark:bg-indigo-600 
                      text-white px-4 py-2 rounded-full 
                      font-semibold hover:opacity-90 
                      transition-opacity
                    "
                  >
                    View Project
                  </a>
                  <button
                    onClick={closeDialog}
                    className="
                      bg-gray-200 dark:bg-gray-700 
                      text-gray-800 dark:text-gray-200 
                      px-4 py-2 rounded-full 
                      font-semibold hover:opacity-90 
                      transition-opacity
                    "
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProjectCard;