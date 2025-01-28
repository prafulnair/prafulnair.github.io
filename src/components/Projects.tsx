


import React from 'react';
import ProjectCard from './ProjectCard.tsx';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const demoProjects = [
    {
      title: 'Scalable GCP Data Pipeline for Amazon Book Reviews',
      description:
        'Developed a data streaming pipeline using Google Cloud Functions, Cloud Storage, and BigQuery to efficiently process and analyze Amazon Book Reviews data. Demonstrated auto-scaling and concurrency, along with real-time ETL transformations for large datasets.',
      link: 'https://github.com/prafulnair/GCP-Data-Streaming-ETL-Pipeline',
    },
    {
      title: 'FeatureHub - A Feature Request Platform',
      description:
        'Built for the Financial Systems Team at Valsoft during my Internship, this full-stack, responsive Feature Request Website allows users to log in, submit feature requests and bug reports, and discuss ideas with fellow teammates. Think of it like a more professional, civil version of Reddit for product feedback.',
      link: '#/all-projects',
    },
    {
      title: 'FlowForge: Ford-Fulkerson Network Flow Optimization',
      description:
        'A Python-based solution implementing the Ford-Fulkerson Algorithm with four augmenting path strategies (SAP, DFS-like, MaxCap, and Random). It features random graph generation and optional visualization, offering a comprehensive look at network flow optimization and performance analysis.',
      link: 'https://github.com/prafulnair/ford-fulkerson-network-flow',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 border-t border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

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

      {/* CTA button to view more projects */}
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