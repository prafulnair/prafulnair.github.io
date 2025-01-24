import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projectData';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div className="text-center py-20">Project not found.</div>;
  }

  return (
    <section className="min-h-screen py-20 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          {project.title}
        </h1>
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full max-h-96 object-cover mb-6 rounded-md shadow-lg"
          />
        )}
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.shortDesc}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          {project.longDesc}
        </p>
      </div>
    </section>
  );
};

export default ProjectDetailPage;