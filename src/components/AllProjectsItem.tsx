import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { ProjectData, ProjectAction } from '../data/projectData';

interface AllProjectsItemProps {
  project: ProjectData;
}

const CTA_PRIMARY_CLASSES =
  'inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500';
const CTA_SECONDARY_CLASSES =
  'inline-flex items-center justify-center rounded-md border border-indigo-200 px-4 py-2 text-sm font-semibold text-indigo-600 transition-colors hover:border-indigo-300 hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-indigo-700/60 dark:text-indigo-300 dark:hover:border-indigo-500 dark:hover:text-indigo-200';

const AllProjectsItem: React.FC<AllProjectsItemProps> = ({ project }) => {
  const {
    id,
    title,
    shortDesc,
    longDesc,
    imageUrl,
    techStack,
    role,
    impact,
    actions,
    repoLink,
    impactMetrics,
    features,
    problem,
  } = project;

  const [isExpanded, setIsExpanded] = useState(false);
  const detailsPanelId = useMemo(() => `project-${id}-details`, [id]);

  const internalAction = actions?.find((action) => action.type === 'internal');
  const externalActions = (actions ?? []).filter((action) => action.type !== 'internal');
  const shouldRenderFooter = Boolean(internalAction || externalActions.length > 0 || repoLink);

  const expandableSections = {
    longDesc,
    problem,
    features,
    impactMetrics,
  };
  const hasExpandableContent = Object.values(expandableSections).some((value) => {
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return Boolean(value);
  });

  const handleToggleDetails = () => {
    if (!hasExpandableContent) return;
    setIsExpanded((prev) => !prev);
  };

  return (
    <motion.article
      layout
      whileHover={{ scale: 1.02 }}
      className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:bg-gray-800"
    >
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
      ) : (
        <div className="flex h-48 w-full items-center justify-center bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-300">
          No Image Available
        </div>
      )}

      <div className="flex h-full flex-col">
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{shortDesc}</p>

          <div className="mt-4 flex-1">
            <div className="flex min-h-[150px] flex-col gap-4">
              {techStack && techStack.length > 0 && (
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Tech Stack
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {role && (
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-800 dark:text-gray-100">Role: </span>
                  {role}
                </p>
              )}

              {impact && (
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-800 dark:text-gray-100">Impact: </span>
                  {impact}
                </p>
              )}
            </div>
          </div>

          {hasExpandableContent && (
            <div className="mt-4">
              <button
                type="button"
                onClick={handleToggleDetails}
                aria-expanded={isExpanded}
                aria-controls={detailsPanelId}
                className="inline-flex items-center gap-2 rounded-md border border-transparent px-4 py-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200"
              >
                {isExpanded ? 'Show less' : 'More details'}
                <span aria-hidden="true">{isExpanded ? '−' : '+'}</span>
              </button>
            </div>
          )}

          <AnimatePresence initial={false}>
            {isExpanded && hasExpandableContent && (
              <motion.section
                id={detailsPanelId}
                key="expanded-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-4 overflow-hidden text-sm text-gray-700 dark:text-gray-300"
              >
                {longDesc && <p>{longDesc}</p>}

                {problem && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Problem</h4>
                    <p className="mt-1">{problem}</p>
                  </div>
                )}

                {features && features.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Key Features</h4>
                    <ul className="mt-1 list-disc space-y-1 pl-5">
                      {features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {impactMetrics && impactMetrics.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Impact Metrics</h4>
                    <ul className="mt-1 list-disc space-y-1 pl-5">
                      {impactMetrics.map((metric) => (
                        <li key={metric}>{metric}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {shouldRenderFooter && (
          <div className="flex flex-wrap gap-3 border-t border-gray-200 px-6 py-4 dark:border-gray-700">
            {internalAction && (
              <Link to={internalAction.href} className={CTA_PRIMARY_CLASSES}>
                {internalAction.label}
              </Link>
            )}

            {externalActions.map((action: ProjectAction) => (
              <a
                key={action.href}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={internalAction ? CTA_SECONDARY_CLASSES : CTA_PRIMARY_CLASSES}
              >
                {action.label}
              </a>
            ))}

            {!actions?.length && repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={CTA_PRIMARY_CLASSES}
              >
                View Repo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default AllProjectsItem;
