import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { projects } from '../data/projectData';

const skillIcons: { [key: string]: string } = {
  Python: 'devicon-python-plain',
  Flask: 'devicon-flask-original',
  Django: 'devicon-django-plain',
  Java: 'devicon-java-plain',
  JavaScript: 'devicon-javascript-plain',
  React: 'devicon-react-original',
  'React.js': 'devicon-react-original',
  NodeJS: 'devicon-nodejs-plain',
  'Node.js': 'devicon-nodejs-plain',
  Vite: 'devicon-vitejs-plain',
  HTML: 'devicon-html5-plain',
  CSS: 'devicon-css3-plain',
  'Tailwind CSS': 'devicon-tailwindcss-original',
  Docker: 'devicon-docker-plain',
  GCP: 'devicon-googlecloud-plain',
  'Google Cloud Platform': 'devicon-googlecloud-plain',
  AWS: 'devicon-amazonwebservices-plain-wordmark',
  'AWS App Runner': 'devicon-amazonwebservices-plain-wordmark',
  Pandas: 'devicon-pandas-plain-wordmark',
  NumPy: 'devicon-numpy-original',
  SQL: 'devicon-mysql-plain',
  PostgreSQL: 'devicon-postgresql-plain-wordmark',
  MySQL: 'devicon-mysql-plain',
  MongoDB: 'devicon-mongodb-plain-wordmark',
  Jupyter: 'devicon-jupyter-plain-wordmark',
  OpenCV: 'devicon-opencv-plain',
  Vercel: 'devicon-vercel-original',
  'Cloud Functions': 'devicon-googlecloud-plain',
  'Cloud Storage': 'devicon-googlecloud-plain',
  'SQLAlchemy': 'devicon-sqlalchemy-plain',
};

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const project = projects.find((p) => p.id === projectId);

  const mediaItems = useMemo(() => {
    if (project?.media && project.media.length > 0) {
      return project.media;
    }

    if (project?.imageUrl) {
      return [{ src: project.imageUrl, alt: project.title }];
    }

    return [];
  }, [project]);

  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  useEffect(() => {
    setActiveMediaIndex(0);
  }, [projectId]);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Project not found</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">The requested project does not exist.</p>
          <Link
            to="/all-projects"
            className="inline-block mt-6 px-5 py-2 bg-indigo-500 text-white rounded-md font-semibold hover:opacity-90 transition-opacity dark:bg-indigo-600"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const hasImpactSection = Boolean(project.impact || (project.impactMetrics && project.impactMetrics.length > 0));

  const goToPrevMedia = () => {
    setActiveMediaIndex((current) => {
      const nextIndex = current - 1;
      return nextIndex < 0 ? mediaItems.length - 1 : nextIndex;
    });
  };

  const goToNextMedia = () => {
    setActiveMediaIndex((current) => {
      const nextIndex = current + 1;
      return nextIndex >= mediaItems.length ? 0 : nextIndex;
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="relative w-full h-[40vh] bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
          <p className="text-md md:text-lg text-white max-w-2xl mx-auto">{project.shortDesc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        {project.longDesc && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.longDesc}</p>
          </div>
        )}

        {mediaItems.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Case Study Gallery</h3>
              {mediaItems.length > 1 && (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={goToPrevMedia}
                    className="rounded-full border border-indigo-200 dark:border-indigo-700 text-indigo-500 dark:text-indigo-200 px-3 py-1 text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-800/40"
                    aria-label="Previous media"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={goToNextMedia}
                    className="rounded-full border border-indigo-200 dark:border-indigo-700 text-indigo-500 dark:text-indigo-200 px-3 py-1 text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-800/40"
                    aria-label="Next media"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800">
              <AnimatePresence initial={false} mode="wait">
                <motion.figure
                  key={activeMediaIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35 }}
                  className="w-full"
                >
                  <img
                    src={mediaItems[activeMediaIndex].src}
                    alt={mediaItems[activeMediaIndex].alt}
                    className="w-full h-auto max-h-[480px] object-contain bg-gray-50 dark:bg-gray-900"
                  />
                  {mediaItems[activeMediaIndex].caption && (
                    <figcaption className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                      {mediaItems[activeMediaIndex].caption}
                    </figcaption>
                  )}
                </motion.figure>
              </AnimatePresence>
            </div>

            {mediaItems.length > 1 && (
              <div className="mt-4 flex justify-center gap-2">
                {mediaItems.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setActiveMediaIndex(index)}
                    className={`h-2.5 w-8 rounded-full transition-colors ${
                      activeMediaIndex === index
                        ? 'bg-indigo-500'
                        : 'bg-gray-300 dark:bg-gray-700 hover:bg-indigo-300 dark:hover:bg-indigo-600'
                    }`}
                    aria-label={`View media ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {project.problem && (
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Problem</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.problem}</p>
          </div>
        )}

        {project.role && (
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">My Role</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.role}</p>
          </div>
        )}

        {hasImpactSection && (
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Impact / Results</h3>
            {project.impact && <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{project.impact}</p>}
            {project.impactMetrics && project.impactMetrics.length > 0 && (
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                {project.impactMetrics.map((metric, index) => (
                  <li key={index}>{metric}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4 text-center">
              {project.techStack.map((tech) => {
                const iconClass = skillIcons[tech] || '';
                return (
                  <div key={tech} className="flex flex-col items-center justify-center space-y-2">
                    {iconClass ? (
                      <i className={`${iconClass} text-4xl`} aria-hidden />
                    ) : (
                      <span className="text-4xl" aria-hidden>
                        🔧
                      </span>
                    )}
                    <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {project.features && project.features.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Challenges &amp; Solutions</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}

        {project.lessons && (
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Lessons Learned</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.lessons}</p>
          </div>
        )}

        <div className="mt-12 flex flex-wrap gap-4 items-center">
          <Link
            to="/all-projects"
            className="inline-block px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            ← All Projects
          </Link>
          {project.actions && project.actions.length > 0 ? (
            project.actions.map((action) =>
              action.type === 'internal' ? (
                <Link
                  key={action.href}
                  to={action.href}
                  className="inline-block px-5 py-2 bg-indigo-500 text-white rounded-md font-semibold hover:opacity-90 transition-opacity dark:bg-indigo-600"
                >
                  {action.label}
                </Link>
              ) : (
                <a
                  key={action.href}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-indigo-500 text-white rounded-md font-semibold hover:opacity-90 transition-opacity dark:bg-indigo-600"
                >
                  {action.label}
                </a>
              )
            )
          ) : (
            project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-indigo-500 text-white rounded-md font-semibold hover:opacity-90 transition-opacity dark:bg-indigo-600"
              >
                View on GitHub
              </a>
            )
          )}
        </div>

        <div className="mt-16">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-10 md:px-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-3">Next steps / Contact</h3>
              <p className="text-base md:text-lg opacity-90">
                Interested in discussing this work further or exploring collaboration opportunities? Reach out directly and I’ll respond promptly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow hover:shadow-lg transition-shadow"
              >
                View Contact Section
              </Link>
              <a
                href="mailto:prafulworkspace@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/80 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
              >
                Email Me Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetailPage;
