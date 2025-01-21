import React from 'react';
import './Avatar.css'; // Ensure this file is in the same folder or adjust the path

const Avatar: React.FC = () => {
  return (
    <article className="avatar">
      <section className="head">
        <div className="neck"></div>
        <div className="ear"></div>
        <div className="ear"></div>
        {/* Hair elements */}
        <div className="hair hair-9"></div>
        <div className="hair hair-8"></div>
        <div className="hair hair-7"></div>
        <div className="hair hair-6"></div>
        <div className="hair hair-9 hair-9b"></div>
        <div className="hair hair-7 hair-7b"></div>
        <div className="hair hair-8 hair-8b"></div>
        <div className="hair hair-6 hair-6b"></div>
        <div className="face">
          <div className="mouth"></div>
          <div className="nose"></div>
          <div className="eye"></div>
          <div className="eye"></div>
          <div className="eyebrow"></div>
          <div className="eyebrow"></div>
          <div className="hair hair-5"></div>
          <div className="hair hair-4"></div>
          <div className="hair hair-3"></div>
          <div className="hair hair-2"></div>
          <div className="hair hair-1"></div>
        </div>
      </section>
      <section className="body">
        <div className="chest"></div>
        <div className="shirt"></div>
      </section>
      {/* Optionally, a link to show how the drawing was made */}
      <a id="youtube" href="https://www.youtube.com/watch?v=yl1o-hE66uU" target="_blank" rel="noopener noreferrer">
        <span>See how this drawing was made</span>
      </a>
    </article>
  );
};

export default Avatar;