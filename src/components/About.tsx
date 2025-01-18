// import React from 'react';

// const About: React.FC = () => {
//   return (
//     <section
//       id="about"
//       className="py-20 border-t border-gray-200 dark:border-gray-700"
//     >
//       <h2 className="text-3xl font-bold mb-6">About Me</h2>

//       <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
//   I’m a new grad from Concordia University in Montreal, driven by a passion for creating clean, impactful solutions. Highly focused on Requirement Elicitation and Communication when it comes to building a Product. I put their requirements first. Whether I’m tackling complex problems or capturing life’s unscripted moments with my camera, I focus on the details that bring ideas to life. Working hard, staying kind, and making a real difference—those are the principles I live by.
// </p>


//       <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
//         At my last endavour, I was interning at Valsoft as an Intern Developer for the Financial Systems Team, primarily working on Javascript / Suitescript to enhance their ERP System (NetSuite) and automate lot of organizational funcitonalities.
//         Some of the projects I did involved lot of Javascript/Suitescripts and Python, considerbale amount of XML and Freemarker, Map/Reduce framework to digest, process and sync huge invoice data and lastly, React, Flask and AWS for FeatureHub. 
//         </p>
//       <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//       When I’m off the clock, you’ll probably spot me reading books, exploring story-oriented video games, and enjoying multiple cups of coffee... 
        
//       </p>
//     </section>
//   );
// };

// export default About;

import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
          About Me
        </h2>

        {/* Main content in a two-column layout for medium screens and up */}
        <div className="md:flex md:space-x-8">
          {/* Optional: You could place an avatar or a relevant image here */}
          {/* <div className="md:w-1/3 flex items-center justify-center mb-8 md:mb-0">
            <img 
              src="/path-to-your-image.jpg"
              alt="Praful's Avatar"
              className="rounded-full w-48 h-48 object-cover shadow-lg"
            />
          </div> */}

          {/* Text Column */}
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I’m a new grad from <span className="font-semibold">Concordia University</span> in Montreal, 
              driven by a passion for creating clean, impactful applications that are Reliable and Scalable. 
              Highly focused on <span className="font-semibold">Requirement Elicitation</span> and 
              <span className="font-semibold"> Communication</span> when it comes to building a product—because 
              understanding and delivering exactly what’s needed is half the battle. Whether I’m tackling 
              complex problems or capturing life’s unscripted moments with my camera, I focus on the 
              details that bring ideas to life. Working hard, staying kind, and making a real difference—those 
              are the principles I live by.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              During my internship at <span className="font-semibold">Valsoft</span> as a Developer Intern 
              for the Financial Systems Team, I dove into <span className="font-semibold">JavaScript, SuiteScript, and Python </span> 
               to enhance their NetSuite ERP system and automate key processes. From parsing hefty invoice 
              data with <span className="font-semibold">XML</span> and <span className="font-semibold">Freemarker </span> 
              to building out FullStack Application using React, Python(Flask) and making it <span className="font-semibold">AWS </span> deployment ready , 
              it was a blend of front-end, back-end, and everything in between—just how I like it.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I’m off the clock, you’ll probably spot me reading books, exploring story-rich video games, 
              or enjoying multiple cups of coffee. If that sounds like your vibe, let’s connect and 
              <span className="font-semibold"> build something amazing</span> together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;