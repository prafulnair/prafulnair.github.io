

import React from 'react';

const Quote: React.FC = () => {
  return (
    <a
      href="https://en.wikipedia.org/wiki/George_Eliot"
      className="
        group
        relative
        flex
        items-center
        justify-center
        no-underline
        max-w-[400px]
        p-8
        cursor-pointer
        bg-white dark:bg-gray-900
        shadow-[inset_0_0_0_4px_#000,inset_-4px_-4px_0_6px_#CCC]
        dark:shadow-[inset_0_0_0_4px_#fff,inset_-4px_-4px_0_6px_#666]
        overflow-hidden
        transition-all
      "
    >
      {/* Background transition effect */}
      <span
        className="
          absolute inset-0
          bg-black dark:bg-white
          scale-y-0 group-hover:scale-y-100
          transition-transform duration-[400ms] ease-out
        "
      />

      <h2
        className="
          relative z-10
          text-2xl
          font-bold
          font-[DM\ Sans,sans-serif]
          leading-[1.333]
          transition-colors duration-[400ms]
          text-black dark:text-white
          group-hover:text-white dark:group-hover:text-black
        "
      >
        “What do we live for, if it is not to make life less difficult for each other?”
        <br />― George Eliot
      </h2>
    </a>
  );
};

export default Quote;