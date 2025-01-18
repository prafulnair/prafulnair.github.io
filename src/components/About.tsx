import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 border-t border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        I&apos;m a passionate developer with a knack for building modern, performant, and 
        user-friendly applications. I enjoy working with cutting-edge technologies and 
        constantly pushing myself to learn more.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        When I&apos;m not coding, you&apos;ll probably find me reading design blogs, 
        exploring new frameworks, or sipping on a fresh cup of coffee. 
        Let&apos;s create something amazing together!
      </p>
    </section>
  );
};

export default About;