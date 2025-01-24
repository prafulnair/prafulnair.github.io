// projectsData.ts
export interface ProjectData {
    id: number;
    title: string;
    shortDesc: string;
    longDesc?: string;
    imageUrl?: string;  // optional
  }
  
  export const projects: ProjectData[] = [
    {
      id: 1,
      title: 'Feature Request Platform',
      shortDesc: 'A platform for gathering and managing feature requests.',
      longDesc: 'Designed and developed a full-stack web application for internal feature request management at Valsoft using Flask and React, hosted on AWS App Runner. Implemented features like suggestion threads, upvotes, comments, and admin dashboard.',
      imageUrl: '/assets/feature-request.png',
    },
    {
      id: 2,
      title: 'Query Result Estimation System',
      shortDesc: 'Estimates output tuple sizes for relational algebra queries.',
      longDesc: 'Built a system leveraging statistical metadata and efficient algorithms to simulate query optimization in database systems. Implemented custom parsing for relational algebra queries.',
      imageUrl: '/assets/query-estimation.png',
    },
    {
      id: 3,
      title: 'Minimal Portfolio',
      shortDesc: 'A modern, clean personal portfolio.',
      longDesc: 'A personal portfolio website designed with a minimalistic approach to showcase projects and skills.',
      imageUrl: '/assets/portfolio.png',
    },
    {
      id: 4,
      title: 'Data Streaming ETL Pipeline',
      shortDesc: 'Real-time data streaming & processing pipeline.',
      longDesc: 'Engineered and implemented highly optimized cloud functions for real-time data streaming and processing from Google Cloud Storage to BigQuery, reducing data processing time by 40%.',
      imageUrl: '/assets/etl-pipeline.png',
    },
    {
      id: 5,
      title: 'U.S. Flight Data Analysis',
      shortDesc: 'Processed and analyzed flight data for insights.',
      longDesc: 'Analyzed and cleaned U.S. flight data, uncovering trends, processing missing values, and calculating statistics using Python (Pandas, NumPy) for actionable insights.',
      imageUrl: '/assets/flight-data.png',
    },
    {
      id: 6,
      title: 'Network Flow Optimization',
      shortDesc: 'Implemented Ford-Fulkerson Algorithm for network flow.',
      longDesc: 'Developed the Ford-Fulkerson Algorithm with four augmenting path strategies for network flow optimization, generating random graphs with 200-500 nodes and analyzing performance across simulation sets.',
      imageUrl: '/assets/network-flow.png',
    },
    {
      id: 7,
      title: 'Lane Detection using Hough Transform',
      shortDesc: 'Lane detection for highway images.',
      longDesc: 'Implemented Hough Transform to detect straight lanes in highway images. Utilized Canny edge detection, custom ROI masks, and non-maximum suppression for accurate detection.',
      imageUrl: '/assets/lane-detection.png',
    },
    {
      id: 8,
      title: 'BookFlix',
      shortDesc: 'Netflix-inspired platform for book enthusiasts.',
      longDesc: 'Designed a platform connecting libraries with users, providing smart book recommendations, loan management, and notifications for due dates.',
      imageUrl: '/assets/bookflix.png',
    },
    {
      id: 9,
      title: 'Career Service Platform',
      shortDesc: 'Web application for career services and job tracking.',
      longDesc: 'Developed a career service platform web application using Agile methodology, enabling job seekers to manage applications and career resources effectively.',
      imageUrl: '/assets/career-service.png',
    },
    {
      id: 10,
      title: 'Role-Playing Game Engine',
      shortDesc: 'Basic RPG engine to practice OOP concepts.',
      longDesc: 'Designed a Python-based game engine focusing on object-oriented system mechanics, including classes for Player, Enemy, Item, and World, with features like inventory and combat mechanics.',
      imageUrl: '/assets/rpg-engine.png',
    },
  ];
  