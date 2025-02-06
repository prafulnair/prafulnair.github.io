// // src/components/Quote.tsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const Quote: React.FC = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-red-200 p-4"
//     >
//       <div className="max-w-2xl mx-auto bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-xl p-10 text-center">
//         {/* Decorative SVG as an oversized opening quote */}
//         <svg
//           className="w-12 h-12 mx-auto text-gray-300 mb-6"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path d="M7.17 6A5.17 5.17 0 002 11.17V19a2 2 0 002 2h5.83A5.17 5.17 0 0015 15.83V15a2 2 0 00-2-2H9a2 2 0 00-1.83 1H7.17A3.17 3.17 0 014 10.83V9.17A3.17 3.17 0 017.17 6zm11 0A5.17 5.17 0 0013 11.17V19a2 2 0 002 2h5.83A5.17 5.17 0 0021 15.83V15a2 2 0 00-2-2h-1a2 2 0 00-1.83 1H18.17A3.17 3.17 0 0015 10.83V9.17A3.17 3.17 0 0018.17 6z" />
//         </svg>

//         <blockquote className="text-4xl font-serif italic text-gray-800">
//           “What do we live for, if it is not to make life less difficult for each other?”
//         </blockquote>
//         <p className="mt-8 text-2xl font-medium text-gray-600">
//           ― George Eliot
//         </p>
//       </div>
//     </motion.section>
//   );
// };

// export default Quote;

// // FancyPost.tsx
// import React from 'react';

// const Quote: React.FC = () => {
//   return (
//     <a
//       href="#"
//       className="
//         group
//         relative
//         flex
//         items-center
//         justify-center
//         no-underline
//         max-w-[400px]
//         p-8
//         cursor-pointer
//         bg-white
//         shadow-[inset_0_0_0_4px_#000,inset_-4px_-4px_0_6px_#CCC]
//         overflow-hidden
//         transition-all
//         before:content-['']
//         before:absolute
//         before:left-0
//         before:bottom-0
//         before:block
//         before:w-full
//         before:h-full
//         before:bg-black
//         before:origin-[0_bottom_0]
//         before:scale-y-0
//         before:transition-transform
//         before:duration-[400ms]
//         before:ease-out
//         group-hover:before:scale-y-100
//       "
//     >
//       <h2
//         className="
//           relative
//           text-2xl
//           font-bold
          
//           leading-[1.333]
//           transition-colors
//           duration-[400ms]
//           group-hover:text-white
//           group-hover:block-black
//         "
//       >
//         “What do we live for, if it is not to make life less difficult for each other?”
//         ― George Eliot
//       </h2>
//     </a>
//   );
// };

// export default Quote;


// src/components/Quote.tsx// src/components/Quote.tsx
import React from 'react';

const Quote: React.FC = () => {
  return (
    <a
      href="#"
      className="
        group
        relative
        flex
        items-center
        justify-center
        no-underline
        max-w-[400px]
        p-8
        cursor-pointer
        bg-white dark:bg-gray-900
        shadow-[inset_0_0_0_4px_#000,inset_-4px_-4px_0_6px_#CCC]
        dark:shadow-[inset_0_0_0_4px_#fff,inset_-4px_-4px_0_6px_#666]
        overflow-hidden
        transition-all
        before:content-['']
        before:absolute
        before:left-0
        before:bottom-0
        before:block
        before:w-full
        before:h-full
        before:bg-black dark:before:bg-white
        before:origin-[0_bottom_0]
        before:scale-y-0
        before:transition-transform
        before:duration-[400ms]
        before:ease-out
        group-hover:before:scale-y-100
      "
    >
      <h2
        className="
          relative z-10
          text-2xl
          font-bold
          font-[DM\ Sans,sans-serif]
          leading-[1.333]
          transition-colors
          duration-[400ms]
          group-hover:text-white dark:group-hover:text-black
        "
      >
        “What do we live for, if it is not to make life less difficult for each other?”
        <br />― George Eliot
      </h2>
    </a>
  );
};

export default Quote;