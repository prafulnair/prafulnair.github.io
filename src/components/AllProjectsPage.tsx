import React from 'react';
import AllProjectsItem from '../components/AllProjectsItem';
import { projects } from '../data/projectData';
const AllProjectsPage: React.FC = () => {
  return (
    <section 
      className="
        min-h-screen py-20
        bg-gray-100 dark:bg-gray-900
        transition-colors duration-300
      "
    >
      <div className="container mx-auto px-4 md:px-8">
        <h1 
          className="
            text-4xl font-bold text-center mb-10
            text-gray-800 dark:text-gray-100
          "
        >
          All Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <AllProjectsItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjectsPage;