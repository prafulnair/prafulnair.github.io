


import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard.tsx';
import { projects } from '../data/projectData';

const Projects: React.FC = () => {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section id="projects" className="py-20 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.shortDesc}
            techStack={project.techStack}
            impact={project.impact}
            role={project.role}
            actions={
              project.actions ?? [
                { label: 'View Project', href: `/projects/${project.id}`, type: 'internal' },
                ...(project.repoLink
                  ? [{ label: 'View Repo', href: project.repoLink, type: 'external' as const }]
                  : []),
              ]
            }
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/all-projects"
          className="inline-block bg-indigo-500 dark:bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all"
        >
          View More of My Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;