// // projectsData.ts
// export interface ProjectData {
//     id: number;
//     title: string;
//     shortDesc: string;
//     longDesc?: string;
//     imageUrl?: string;  // optional
//   }
  
//   export const projects: ProjectData[] = [
//     {
//       id: 1,
//       title: 'Feature Request Platform',
//       shortDesc: 'A platform for gathering and managing feature requests.',
//       longDesc: 'Designed and developed a full-stack web application for internal feature request management at Valsoft using Flask and React, hosted on AWS App Runner. Implemented features like suggestion threads, upvotes, comments, and admin dashboard.',
//       imageUrl: '/assets/feature-request.png',
//     },
//     {
//       id: 2,
//       title: 'Query Result Estimation System',
//       shortDesc: 'Estimates output tuple sizes for relational algebra queries.',
//       longDesc: 'Built a system leveraging statistical metadata and efficient algorithms to simulate query optimization in database systems. Implemented custom parsing for relational algebra queries.',
//       imageUrl: '/assets/query-estimation.png',
//     },
//     {
//       id: 3,
//       title: 'Minimal Portfolio',
//       shortDesc: 'A modern, clean personal portfolio.',
//       longDesc: 'A personal portfolio website designed with a minimalistic approach to showcase projects and skills.',
//       imageUrl: '/assets/portfolio.png',
//     },
//     {
//       id: 4,
//       title: 'Data Streaming ETL Pipeline',
//       shortDesc: 'Real-time data streaming & processing pipeline.',
//       longDesc: 'Engineered and implemented highly optimized cloud functions for real-time data streaming and processing from Google Cloud Storage to BigQuery, reducing data processing time by 40%.',
//       imageUrl: '/assets/etl-pipeline.png',
//     },
//     {
//       id: 5,
//       title: 'U.S. Flight Data Analysis',
//       shortDesc: 'Processed and analyzed flight data for insights.',
//       longDesc: 'Analyzed and cleaned U.S. flight data, uncovering trends, processing missing values, and calculating statistics using Python (Pandas, NumPy) for actionable insights.',
//       imageUrl: '/assets/flight-data.png',
//     },
//     {
//       id: 6,
//       title: 'Network Flow Optimization',
//       shortDesc: 'Implemented Ford-Fulkerson Algorithm for network flow.',
//       longDesc: 'Developed the Ford-Fulkerson Algorithm with four augmenting path strategies for network flow optimization, generating random graphs with 200-500 nodes and analyzing performance across simulation sets.',
//       imageUrl: '/assets/network-flow.png',
//     },
//     {
//       id: 7,
//       title: 'Lane Detection using Hough Transform',
//       shortDesc: 'Lane detection for highway images.',
//       longDesc: 'Implemented Hough Transform to detect straight lanes in highway images. Utilized Canny edge detection, custom ROI masks, and non-maximum suppression for accurate detection.',
//       imageUrl: '/assets/lane-detection.png',
//     },
//     {
//       id: 8,
//       title: 'BookFlix',
//       shortDesc: 'Netflix-inspired platform for book enthusiasts.',
//       longDesc: 'Designed a platform connecting libraries with users, providing smart book recommendations, loan management, and notifications for due dates.',
//       imageUrl: '/assets/bookflix.png',
//     },
//     {
//       id: 9,
//       title: 'Career Service Platform',
//       shortDesc: 'Web application for career services and job tracking.',
//       longDesc: 'Developed a career service platform web application using Agile methodology, enabling job seekers to manage applications and career resources effectively.',
//       imageUrl: '/assets/career-service.png',
//     },
//     {
//       id: 10,
//       title: 'Role-Playing Game Engine',
//       shortDesc: 'Basic RPG engine to practice OOP concepts.',
//       longDesc: 'Designed a Python-based game engine focusing on object-oriented system mechanics, including classes for Player, Enemy, Item, and World, with features like inventory and combat mechanics.',
//       imageUrl: '/assets/rpg-engine.png',
//     },
//   ];


// projectsData.ts
// projectsData.ts

export interface ProjectData {
    id: number;
    title: string;
    shortDesc: string;
    longDesc?: string;
    imageUrl?: string;     // optional
    techStack?: string[];  // optional
    features?: string[];   // optional
    // Additional optional fields if you need them:
    architectureImg?: string;
    challenges?: string[];
    lessons?: string;
    repoLink?: string;
  }
  
  export const projects: ProjectData[] = [
    {
      id: 1,
      title: 'Feature Request Platform',
      shortDesc: 'A platform for gathering and managing feature requests.',
      longDesc:
        'Designed and developed a full-stack web application for internal feature request management at Valsoft using Flask and React, hosted on AWS App Runner. Implemented features like suggestion threads, upvotes, comments, and admin dashboard.',
      imageUrl: '/assets/feature-request.png',
  
      techStack: ['Flask', 'React', 'AWS App Runner', 'PostgreSQL'],
      features: [
        'Threaded discussions with comments & upvotes',
        'Admin dashboard to approve or reject features, update status of approved requests such as confirmed, implemented, or rejected',
        'Deployed via AWS App Runner',
        'Responsive UI for desktop and mobile',
      ],
      
    },
    {
      id: 2,
      title: 'Query Result Estimation System',
      shortDesc: 'Estimates output tuple sizes for relational algebra queries.',
      longDesc:
        'Built a system leveraging statistical metadata and efficient algorithms to simulate query optimization in database systems. Implemented custom parsing for relational algebra queries.',
      imageUrl: '/assets/query-estimation.png',
  
      techStack: ['Python', 'SQL', 'Statistics', 'Relational Algebra'],
      features: [
        'Custom relational algebra parser',
        'Statistical approach to size estimation',
        'Optimized for complex join queries',
      ],
      repoLink: 'https://github.com/prafulnair/QueryQantify-Relational_Algebra_Query_Estimator',
    },
    {
      id: 3,
      title: 'Minimal Portfolio Built using React, Vite and TypeScript',
      shortDesc: 'A modern, clean personal portfolio.',
      longDesc:
        'A personal portfolio website designed with a minimalistic approach to showcase projects and skills.',
      imageUrl: '/assets/portfolio.png',
  
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      features: [
        'Mobile-first responsive design',
        'Dark mode toggle',
        'Dynamic project gallery',
      ],
      repoLink: "https://github.com/prafulnair/prafulnair.github.io"
    },
    {
      id: 4,
      title: 'Data Streaming ETL Pipeline',
      shortDesc: 'Real-time data streaming & processing pipeline.',
      longDesc:
        'Engineered and implemented highly optimized cloud functions for real-time data streaming and processing from Google Cloud Storage to BigQuery, reducing data processing time by 40%.',
      imageUrl: '/assets/etl-pipeline.png',
  
      techStack: ['Python', 'Google Cloud Platform', 'BigQuery', 'Cloud Functions', 'Google Storage'],
      features: [
        'Auto-scaling ETL pipeline',
        'Real-time data ingestion',
        '40% reduction in processing time',
        'Robust error handling & logging',
        'Automated Extraction, Cleaning and Processing of Data via modular cloud functions written in Python',
        'Word Cloud generation by Cloud Functions in the very end of the Pipeline to get User\'s general sentiments about the book'
      ],
      repoLink: "https://github.com/prafulnair/GCP-Data-Streaming-ETL-Pipeline"
    },
    {
      id: 5,
      title: 'U.S. Flight Data Analysis',
      shortDesc: 'Processed and analyzed flight data for insights.',
      longDesc:
        'Analyzed and cleaned U.S. flight data, uncovering trends, processing missing values, and calculating statistics using Python (Pandas, NumPy) for actionable insights.',
      imageUrl: '/assets/flight-data.png',
  
      techStack: ['Python', 'Pandas', 'NumPy', 'Jupyter'],
      features: [
        'Data cleaning & preprocessing',
        'Insightful visualizations (matplotlib/seaborn)',
        'Statistical summary of on-time performance',
      ],
      repoLink: "https://github.com/prafulnair/Data-Analysis-Project-U.S.-Flight-Data-2021-"
    },
    {
      id: 6,
      title: 'Network Flow Optimization',
      shortDesc: 'Implemented Ford-Fulkerson Algorithm for network flow.',
      longDesc:
        'Developed the Ford-Fulkerson Algorithm with four augmenting path strategies for network flow optimization, generating random graphs with 200-500 nodes and analyzing performance across simulation sets.',
      imageUrl: '/assets/network-flow.png',
  
      techStack: ['Python'],
      features: [
        'Ford-Fulkerson with multiple path selection strategies',
        'Random graph generation for stress testing',
        'Performance analytics & visualization',
      ],
      repoLink: "https://github.com/prafulnair/ford-fulkerson-network-flow"
    },
    {
      id: 7,
      title: 'Lane Detection using Hough Transform',
      shortDesc: 'Lane detection for highway images.',
      longDesc:
        'Implemented Hough Transform to detect straight lanes in highway images. Utilized Canny edge detection, custom ROI masks, and non-maximum suppression for accurate detection.',
      imageUrl: '/assets/lane-detection.png',
  
      techStack: ['Python', 'OpenCV'],
      features: [
        'Canny edge detection & ROI filtering',
        'Hough Transform for line detection',
        'Non-maximum suppression for accuracy',
      ],
      repoLink: "https://github.com/prafulnair/Hough_Transformation"
    },
    {
      id: 8,
      title: 'BookFlix',
      shortDesc: 'Ongoing Project: Netflix-inspired platform for book enthusiasts.',
      longDesc:
        'An Ongoing Project. Desiging a platform connecting libraries with users, providing smart book recommendations, loan management, and notifications for due dates.',
      imageUrl: '/assets/bookflix.png',
  
      techStack: ['Node.js', 'React', 'MongoDB'],
      features: [
        'User registration & library linking',
        'Automated due date reminders',
        'Recommendation engine for suggested reads',
      ],
    },
    {
      id: 9,
      title: 'Career Service Application',
      shortDesc: 'Web application for career services and job tracking.',
      longDesc:
        'Developed a career service platform web application using Agile methodology, enabling job seekers to manage applications and career resources effectively.',
      imageUrl: '/assets/career-service.png',
  
      techStack: ['Flask', 'NodeJs', 'MySQL', 'React','Vercel'],
      features: [
        'Job application management',
        'Resource library & resume tips',
        'Simple analytics on application progress',
      ],
      repoLink: "https://github.com/hemareddy123/ProjectK-Soen6011summer2023"
    },
    {
      id: 10,
      title: 'Role-Playing Game Engine',
      shortDesc: 'An Ongoing Project. Basic RPG engine',
      longDesc:
        'Designed a Python-based game engine focusing on object-oriented design, including classes for Player, Enemy, Item, and World, with features like inventory and combat mechanics.',
      imageUrl: '/assets/rpg-engine.png',
  
      techStack: ['Python', 'OOP'],
      features: [
        'Classes for player, enemy, items, and world',
        'Inventory & combat system',
        'Modular design for expansions',
      ],
    },
  ];