import React from 'react';
import { Link } from 'react-router-dom';
import type { ProjectAction } from '../data/projectData';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack?: string[];
  impact?: string;
  role?: string;
  actions?: ProjectAction[];
  link?: string;
}

const buttonClasses =
  'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500';

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  impact,
  role,
  actions = [],
  link,
}) => {
  const fallbackActions: ProjectAction[] = link
    ? [
        {
          label: 'View Project',
          href: link,
          type: link.startsWith('/') || link.startsWith('#') ? 'internal' : 'external',
        },
      ]
    : [];

  const resolvedActions = actions.length > 0 ? actions : fallbackActions;

  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        {role && (
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
            {role}
          </p>
        )}
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{description}</p>

        {techStack && techStack.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {impact && (
          <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50/60 p-4 dark:border-indigo-500/40 dark:bg-indigo-500/10">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
              Impact
            </p>
            <p className="mt-1 text-sm text-indigo-900 dark:text-indigo-100">{impact}</p>
          </div>
        )}
      </div>

      {resolvedActions.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {resolvedActions.map((action) => {
            if (action.type === 'internal') {
              return (
                <Link key={`${action.label}-${action.href}`} to={action.href} className={`${buttonClasses} bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400`}>
                  {action.label}
                </Link>
              );
            }

            return (
              <a
                key={`${action.label}-${action.href}`}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonClasses} border border-indigo-200 text-indigo-600 hover:border-indigo-300 hover:text-indigo-700 dark:border-indigo-500/40 dark:text-indigo-200 dark:hover:border-indigo-400`}
              >
                {action.label}
              </a>
            );
          })}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
