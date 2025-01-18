import React from 'react';
import ProjectCard from './ProjectCard.tsx';

const Projects: React.FC = () => {
  const demoProjects = [
    {
      title: 'Minimal Portfolio',
      description: 'A clean and modern portfolio showcasing my design skills.',
      link: '#'
    },
    {
      title: 'E-commerce App',
      description: 'A full-stack, responsive online store built with React and Node.',
      link: '#'
    },
    {
      title: 'Landing Page',
      description: 'A slick marketing landing page with a strong focus on conversions.',
      link: '#'
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 border-t border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {demoProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;