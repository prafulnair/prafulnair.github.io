// // src/components/AllProjectsItem.tsx

// import React, { useState } from 'react';
// import { ProjectData } from '../data/projectData';
// import { Link } from 'react-router-dom'; // For "Full Details" navigation

// interface AllProjectsItemProps {
//   project: ProjectData;
// }

// const AllProjectsItem: React.FC<AllProjectsItemProps> = ({ project }) => {
//   const { id, title, shortDesc, longDesc, imageUrl } = project;
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleCardClick = () => {
//     // Toggle expanded details
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div
//       onClick={handleCardClick}
//       className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 cursor-pointer flex flex-col"
//     >
//       {/* Image section - optional */}
//       {imageUrl ? (
//         <img
//           src={imageUrl}
//           alt={title}
//           className="w-full h-40 object-cover rounded-t-lg"
//         />
//       ) : (
//         // Placeholder if no image is provided
//         <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-t-lg">
//           <p className="text-gray-500 dark:text-gray-300">No Image</p>
//         </div>
//       )}

//       {/* Content */}
//       <div className="p-4 flex-1 flex flex-col">
//         <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
//           {title}
//         </h3>
//         <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{shortDesc}</p>

//         {/* Expanded area */}
//         {isExpanded && longDesc && (
//           <div className="mt-3">
//             <hr className="border-gray-300 dark:border-gray-600 mb-3" />
//             <p className="text-gray-700 dark:text-gray-300">{longDesc}</p>
//           </div>
//         )}

//         {/* Full Details button */}
//         {isExpanded && (
//           <div className="mt-auto pt-3">
//             <Link
//               to={`/projects/${id}`}
//               onClick={(e) => e.stopPropagation()} // prevent card click toggling
//               className="inline-block bg-indigo-500 dark:bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity"
//             >
//               View Full Details
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllProjectsItem;

//WORKING
// import React, { useState } from 'react';

// import { ProjectData } from '../data/projectData';
// import { Link } from 'react-router-dom';

// interface AllProjectsItemProps {
//   project: ProjectData;
// }

// const AllProjectsItem: React.FC<AllProjectsItemProps> = ({ project }) => {
//   const { id, title, shortDesc, longDesc, imageUrl } = project;
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleCardClick = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div
//       onClick={handleCardClick}
//       className="
//         bg-white dark:bg-gray-800
//         rounded-lg
//         shadow-card /* your custom shadow from tailwind.config.js if desired */
//         hover:shadow-card-hover
//         transition-shadow
//         cursor-pointer
//         flex flex-col
//         group
        
//         /* Lift-up on hover using Tailwind transforms */
//         transform transition-transform duration-200
//         hover:-translate-y-1
//       "
//     >
//       {/* Optional image / placeholder */}
//       {imageUrl ? (
//         <img
//           src={imageUrl}
//           alt={title}
//           className="w-full h-40 object-cover rounded-t-lg"
//         />
//       ) : (
//         <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-t-lg">
//           <p className="text-gray-500 dark:text-gray-300">No Image</p>
//         </div>
//       )}

//       {/* Content */}
//       <div className="p-4 flex-1 flex flex-col">
//         <h3
//           className="
//             text-xl font-bold mb-2
//             text-gray-800 dark:text-gray-100
//             group-hover:text-accent /* if you have an accent color */
//             transition-colors
//           "
//         >
//           {title}
//         </h3>
//         <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
//           {shortDesc}
//         </p>

//         {/* Expanded area */}
//         {isExpanded && longDesc && (
//           <div className="mt-3">
//             <hr className="border-gray-300 dark:border-gray-600 mb-3" />
//             <p className="text-gray-700 dark:text-gray-300">{longDesc}</p>
//           </div>
//         )}

//         {/* Full Details button */}
//         {isExpanded && (
//           <div className="mt-auto pt-3">
//             <Link
//               to={`/projects/${id}`}
//               onClick={(e) => e.stopPropagation()} // prevent toggling on click
//               className="
//                 inline-block
//                 bg-indigo-500 dark:bg-indigo-600
//                 text-white px-4 py-2 rounded-md
//                 font-semibold hover:opacity-90 transition-opacity
//               "
//             >
//               View Full Details
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllProjectsItem;


// import React, { useState } from 'react';
// import { ProjectData } from '../data/projectData';
// import { Link } from 'react-router-dom';

// interface AllProjectsItemProps {
//   project: ProjectData;
// }

// const AllProjectsItem: React.FC<AllProjectsItemProps> = ({ project }) => {
//   const { title, shortDesc, longDesc, imageUrl, repoLink } = project;
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleCardClick = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div
//       onClick={handleCardClick}
//       className="
//         bg-white dark:bg-gray-800
//         rounded-lg
//         shadow-card
//         hover:shadow-card-hover
//         transition-shadow
//         cursor-pointer
//         flex flex-col
//         group
//         transform transition-transform duration-200
//         hover:-translate-y-1
//       "
//     >
//       {/* Optional image / placeholder */}
//       {imageUrl ? (
//         <img
//           src={imageUrl}
//           alt={title}
//           className="w-full h-40 object-cover rounded-t-lg"
//         />
//       ) : (
//         <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-t-lg">
//           <p className="text-gray-500 dark:text-gray-300">No Image</p>
//         </div>
//       )}

//       {/* Content */}
//       <div className="p-4 flex-1 flex flex-col">
//         <h3
//           className="
//             text-xl font-bold mb-2
//             text-gray-800 dark:text-gray-100
//             group-hover:text-accent
//             transition-colors
//           "
//         >
//           {title}
//         </h3>
//         <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
//           {shortDesc}
//         </p>

//         {/* Expanded area */}
//         {isExpanded && longDesc && (
//           <div className="mt-3">
//             <hr className="border-gray-300 dark:border-gray-600 mb-3" />
//             <p className="text-gray-700 dark:text-gray-300">{longDesc}</p>
//           </div>
//         )}

//         {/* Link to GitHub repo */}
//         {isExpanded && repoLink && (
//           <div className="mt-auto pt-3">
//             <a
//               href={repoLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={(e) => e.stopPropagation()} // prevent toggling on click
//               className="
//                 inline-block
//                 bg-indigo-500 dark:bg-indigo-600
//                 text-white px-4 py-2 rounded-md
//                 font-semibold hover:opacity-90 transition-opacity
//               "
//             >
//               View Full Details
//             </a>
//           </div>
//         )}
//         {isExpanded && !repoLink && (
//             <div className='mt-auto pt-3'>
//                 <Link
//                 to={'projects/${id}'}
//                 onClick={(e) => e.stopPropagation()}
//                 className='
//                 inline-block
//                 bg-indigo-500 dark:bg-indigo-600
//                 text-white px-4 py-2 rounded-md
//                 font-semibold hover:opacity-90 transition-opacity'
//                 >
//                     View Project Details
//                 </Link>
//             </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllProjectsItem;


// //WORKING
// import React, { useState } from 'react';
// import { ProjectData } from '../data/projectData';
// import { Link } from 'react-router-dom';

// interface AllProjectsItemProps {
//   project: ProjectData;
// }

// const AllProjectsItem: React.FC<AllProjectsItemProps> = ({ project }) => {
//   // Make sure your project data includes an 'id' if you want to link internally
//   const { id, title, shortDesc, longDesc, imageUrl, repoLink } = project;
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleCardClick = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div
//       onClick={handleCardClick}
//       className="
//         bg-white dark:bg-gray-800
//         rounded-lg
//         shadow-card 
//         hover:shadow-card-hover
//         transition-shadow
//         cursor-pointer
//         flex flex-col
//         group
//         transform transition-transform duration-200
//         hover:-translate-y-1
//       "
//     >
//       {/* Optional Image / Placeholder */}
//       {imageUrl ? (
//         <img
//           src={imageUrl}
//           alt={title}
//           className="w-full h-40 object-cover rounded-t-lg"
//         />
//       ) : (
//         <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-t-lg">
//           <p className="text-gray-500 dark:text-gray-300">No Image</p>
//         </div>
//       )}

//       {/* Card Content */}
//       <div className="p-4 flex-1 flex flex-col">
//         <h3
//           className="
//             text-xl font-bold mb-2
//             text-gray-800 dark:text-gray-100
//             group-hover:text-accent
//             transition-colors
//           "
//         >
//           {title}
//         </h3>
//         <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
//           {shortDesc}
//         </p>

//         {/* Expanded Details */}
//         {isExpanded && (
//           <div className="mt-3">
//             {longDesc && (
//               <>
//                 <hr className="border-gray-300 dark:border-gray-600 mb-3" />
//                 <p className="text-gray-700 dark:text-gray-300">{longDesc}</p>
//               </>
//             )}

//             {/* Show either repo link OR internal project detail link */}
//             <div className="mt-4">
//               {repoLink ? (
//                 <a
//                   href={repoLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={(e) => e.stopPropagation()} 
//                   className="
//                     inline-block
//                     bg-indigo-500 dark:bg-indigo-600
//                     text-white px-4 py-2 rounded-md
//                     font-semibold hover:opacity-90 transition-opacity
//                   "
//                 >
//                   View Full Details
//                 </a>
//               ) : (
//                 <Link
//                   to={`/projects/${id}`} 
//                   onClick={(e) => e.stopPropagation()}
//                   className="
//                     inline-block
//                     bg-indigo-500 dark:bg-indigo-600
//                     text-white px-4 py-2 rounded-md
//                     font-semibold hover:opacity-90 transition-opacity
//                   "
//                 >
//                   View Project Details
//                 </Link>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllProjectsItem;


// src/components/AllProjectsItem.tsx
import React, { useState } from 'react';
import { ProjectData } from '../data/projectData';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface AllProjectsItemProps {
  project: ProjectData;
}

const AllProjectsItem: React.FC<AllProjectsItemProps> = ({ project }) => {
  const { id, title, shortDesc, longDesc, imageUrl, repoLink } = project;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      onClick={handleCardClick}
      layout
      whileHover={{ scale: 1.03 }}
      className="
        bg-white dark:bg-gray-800
        rounded-lg overflow-hidden
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        cursor-pointer
      "
    >
      {/* Image Section */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-300">No Image</p>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {shortDesc}
        </p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent card toggle when clicking inside expanded area
            >
              {longDesc && (
                <>
                  <hr className="border-gray-300 dark:border-gray-600 mb-3" />
                  <p className="text-gray-700 dark:text-gray-300">{longDesc}</p>
                </>
              )}

              <div className="mt-4 flex justify-end">
                {repoLink ? (
                  <a
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="
                      bg-indigo-500 dark:bg-indigo-600
                      text-white px-4 py-2 rounded-md
                      font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-700
                      transition-colors
                    "
                  >
                    View Full Details
                  </a>
                ) : (
                  <Link
                    to={`/projects/${id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="
                      bg-indigo-500 dark:bg-indigo-600
                      text-white px-4 py-2 rounded-md
                      font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-700
                      transition-colors
                    "
                  >
                    View Project Details
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AllProjectsItem;