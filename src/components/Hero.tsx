import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "flowbite-react";

export function Example() {
  return <Button gradientDuoTone="purpleToBlue">Flowbite Button</Button>;
}

const Hero: React.FC = () => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3.4}}
      className="min-h-screen flex flex-col items-center justify-center text-center py-10"
    >
      <h1 className="text-5xl font-extrabold mb-4">
        Hello, I&apos;m{" "}
        <span className="text-indigo-500 dark:text-indigo-400">Praful</span>
      </h1>
      <p className="text-xl max-w-2xl mb-6 text-gray-600 dark:text-gray-300">
        New Graduate from Concordia University | Software Developer, Enthusiastic about Cloud Development and Building Reliable and Scalable Systems.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
      {/* <Link to="/#projects" className="inline-block bg-indigo-500 dark:bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
              Featured Projects
            </Link> */}
            <Link to="/#about" className="inline-block bg-indigo-500 dark:bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
              About Me
            </Link>
      </div>
                  {/* <Link to="/#projects" className="inline-block bg-indigo-500 dark:bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
              View My Featured Projects
            </Link>
            <Link to="/#about" className="inline-block bg-indigo-500 dark:bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
              About Me
            </Link> */}


    </motion.section>
  );
};

export default Hero;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Button } from "flowbite-react";

// const Hero: React.FC = () => {
//   return (
//     <motion.section
//       id="hero"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 3.4 }}
//       className="min-h-screen flex flex-col items-center justify-center text-center py-10 px-4"
//     >
//       <h1 className="text-5xl font-extrabold mb-4">
//         Hello, I&apos;m{" "}
//         <span className="text-indigo-500 dark:text-indigo-400">Praful</span>
//       </h1>
//       <p className="text-xl max-w-2xl mb-8 text-gray-600 dark:text-gray-300">
//         New Graduate from Concordia University | Software Developer, Enthusiastic about Cloud Development and Building Reliable and Scalable Systems.
//       </p>

//       {/* Button Container */}
//       <div className="flex flex-wrap gap-4 justify-center">
//         <Link to="/#projects" className="w-full sm:w-auto">
//           <Button gradientDuoTone="purpleToBlue" className="w-full sm:w-auto">
//             View My Featured Projects
//           </Button>
//         </Link>
//         <Link to="/#about" className="w-full sm:w-auto">
//           <Button gradientDuoTone="purpleToBlue" className="w-full sm:w-auto">
//             About Me
//           </Button>
//         </Link>
//         {/* Optional Additional Button */}
//         <Button gradientDuoTone="pinkToOrange" onClick={() => alert('Button Clicked!')} className="w-full sm:w-auto">
//           Click Me
//         </Button>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;