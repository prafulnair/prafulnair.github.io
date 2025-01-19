import React from 'react';

const Education: React.FC = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">My Education Timeline</h1>

      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {/* Timeline item 1 */}
        <div className="mb-10 ml-6">
          {/* Dot */}
          <span className="absolute w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2022 - 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Masters of Applied Computer Science
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Concordia University (Gina Cody School of Engineering and Computer Science)
          </p>
        </div>

        {/* Timeline item 2 */}
        <div className="mb-10 ml-6">
          <span className="absolute w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2016 - 2021
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Bachelor of Engineering in Computer Engineering
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          University of Mumbai (Pillai College of Engineering)
          </p>
        </div>
      </div>
    </main>
  );
};

export default Education;