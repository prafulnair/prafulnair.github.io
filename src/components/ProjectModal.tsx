import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  link?: string; // e.g. GitHub link
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  link
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Content box */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-11/12 max-w-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-800 dark:text-gray-100 hover:text-red-500 focus:outline-none"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {description}
            </p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-500 dark:bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                View on GitHub
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;