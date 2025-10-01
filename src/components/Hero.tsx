import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type CTAButtonProps = {
  to: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

const CTAButton: React.FC<CTAButtonProps> = ({ to, variant = 'primary', children }) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500';
  const variantStyles =
    variant === 'primary'
      ? 'bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 shadow-lg shadow-indigo-500/20'
      : 'border border-indigo-200 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-300 dark:border-indigo-500/60 dark:hover:bg-indigo-500/10';

  return (
    <Link to={to} className={`${baseStyles} ${variantStyles}`}>
      {children}
    </Link>
  );
};

const Hero: React.FC = () => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3.4 }}
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-white via-white to-indigo-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/20" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-500/10" />
      </div>
      <div className="relative z-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-300 mb-4">
          Software Engineer
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 text-gray-900 dark:text-gray-100">
          Hello, I&apos;m <span className="text-indigo-600 dark:text-indigo-400">Praful</span>
        </h1>
        <p className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          I build resilient, human-centered software that keeps data-driven teams moving forward.
        </p>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
          From cloud infrastructure to polished product experiences, I help companies reduce operational friction,
          automate critical workflows, and launch scalable features with confidence.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CTAButton to="/#projects">View My Projects</CTAButton>
          <CTAButton to="/#contact" variant="secondary">
            Let&apos;s Collaborate
          </CTAButton>
        </div>
        <div className="mt-12 flex flex-col gap-6 text-left sm:flex-row sm:justify-center sm:text-center">
          <div className="flex-1">
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">7+</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Production features across service backends, API endpoints, and build/test automation pipelines.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">20+</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Scripts and tools that have reduced manual toil and improved developer productivity.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">∞</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Curiosity and drive to learn new tools, frameworks, and systems. Always eager to take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
