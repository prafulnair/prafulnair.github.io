export interface ProjectAction {
  label: string;
  href: string;
  type?: 'external' | 'internal';
}

export interface ProjectData {
  id: number;
  title: string;
  shortDesc: string;
  longDesc?: string;
  imageUrl?: string;
  techStack?: string[];
  features?: string[];
  architectureImg?: string;
  challenges?: string[];
  lessons?: string;
  repoLink?: string;
  featured?: boolean;
  impact?: string;
  role?: string;
  actions?: ProjectAction[];
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: 'FeatureHub: A Feature Request Platform',
    shortDesc:
      'An internal platform built for Valsoft to gather feature requests, track issues, and align the ERP roadmap.',
    longDesc:
      'To enhance the efficiency of internal users and clients in requesting new features, reporting issues, and discussing ideas within the implemented ERP system, a dedicated platform was developed. Inspired by social media thread-based applications, this platform provides a centralized hub for communication, collaboration, and issue tracking—accessible exclusively to internal clients with secure authentication. This platform serves as a single source of truth for the Financial Systems team, enabling them to efficiently prioritize user needs, initiate projects, and improve ERP functionality based on real-time user input.',
    imageUrl: '/assets/feature-request.png',
    techStack: ['Python','Flask', 'React.js', 'SQLAlchemy','AWS App Runner', 'PostgreSQL'],
    features: [
      'Seamless feature requests, bug reports, and threaded discussions',
      'Interactive collaboration with comments, likes, and prioritisation tags',
      'Executive analytics dashboard that highlights request trends and SLA adherence',
      'Responsive UI optimised for both desktop and mobile users',
    ],
    repoLink: 'https://github.com/prafulnair/FeatureHub-Feature-Request-Platform',
    featured: true,
    impact:
      'Centralised feature submissions and shortened prioritisation cycles from days to hours through live analytics.',
    role: 'Full-stack Developer (Valsoft Internship)',
    actions: [
      { label: 'Read Case Study', href: '/projects/1', type: 'internal' },
      { label: 'View Repo', href: 'https://github.com/prafulnair/FeatureHub-Feature-Request-Platform', type: 'external' },
    ],
  },
  {
    id: 2,
    title: 'Query Result Estimation System',
    shortDesc: 'Estimates output tuple sizes for relational algebra queries.',
    longDesc:
      'Built a system leveraging statistical metadata and efficient algorithms to simulate query optimisation in database systems. Implemented custom parsing for relational algebra queries.',
    imageUrl: '/assets/query-estimation.png',
    techStack: ['Python', 'SQL', 'Statistics', 'Relational Algebra'],
    features: [
      'Custom relational algebra parser',
      'Statistical approach to size estimation',
      'Optimised for complex join queries',
    ],
    repoLink: 'https://github.com/prafulnair/QueryQantify-Relational_Algebra_Query_Estimator',
  },
  {
    id: 3,
    title: 'Minimal Portfolio Built using React, Vite and TypeScript',
    shortDesc: 'A modern, clean personal portfolio.',
    longDesc: 'A personal portfolio website designed with a minimalistic approach to showcase projects and skills.',
    imageUrl: '/assets/portfolio.png',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    features: ['Mobile-first responsive design', 'Dark mode toggle', 'Dynamic project gallery'],
    repoLink: 'https://github.com/prafulnair/prafulnair.github.io',
  },
  {
    id: 4,
    title: 'Data Streaming ETL Pipeline',
    shortDesc: 'Real-time data streaming & processing pipeline.',
    longDesc:
      'Engineered and implemented highly optimised cloud functions for data streaming and processing from Google Cloud Storage to BigQuery, reducing data processing time by 40%.',
    imageUrl: '/assets/etl-pipeline.png',
    techStack: ['Python', 'Google Cloud Platform', 'BigQuery', 'Cloud Functions', 'Cloud Storage'],
    features: [
      'Auto-scaling ETL pipeline',
      'Real-time data ingestion',
      '40% reduction in processing time',
      'Robust error handling & logging',
      'Modular Python cloud functions for extraction, cleaning, and processing',
      "Automated word cloud generation to surface reader sentiment",
    ],
    repoLink: 'https://github.com/prafulnair/GCP-Data-Streaming-ETL-Pipeline',
    featured: true,
    impact:
    'Event-driven ingestion and processing of Amazon book reviews using GCP; batch + streaming patterns with queryable results in BigQuery and WordCloud Data Visualizations.',
    role: 'Cloud Data Engineer',
    actions: [
      { label: 'Read Case Study', href: '/projects/4', type: 'internal' },
      { label: 'View Repo', href: 'https://github.com/prafulnair/GCP-Data-Streaming-ETL-Pipeline', type: 'external' },
    ],
  },
  {
    id: 5,
    title: 'U.S. Flight Data Analysis',
    shortDesc: 'Processed and analysed flight data for insights.',
    longDesc:
      'Analysed and cleaned U.S. flight data, uncovering trends, processing missing values, and calculating statistics using Python (Pandas, NumPy) for actionable insights.',
    imageUrl: '/assets/flight-data.png',
    techStack: ['Python', 'Pandas', 'NumPy', 'Jupyter'],
    features: [
      'Data cleaning & preprocessing',
      'Insightful visualisations (matplotlib/seaborn)',
      'Statistical summary of on-time performance',
    ],
    repoLink: 'https://github.com/prafulnair/Data-Analysis-Project-U.S.-Flight-Data-2021-',
  },
  {
    id: 6,
    title: 'Network Flow Optimization',
    shortDesc: 'Implemented Ford-Fulkerson Algorithm for network flow.',
    longDesc:
      'Developed the Ford-Fulkerson Algorithm with four augmenting path strategies for network flow optimisation, generating random graphs with 200-500 nodes and analysing performance across simulation sets.',
    imageUrl: '/assets/network-flow.png',
    techStack: ['Python'],
    features: [
      'Ford-Fulkerson with multiple path selection strategies',
      'Random graph generation for stress testing',
      'Performance analytics & visualisation',
    ],
    repoLink: 'https://github.com/prafulnair/ford-fulkerson-network-flow',
    featured: true,
    impact:
      'Delivered decision support for capacity planning by benchmarking 100+ simulated networks using advanced flow strategies.',
    role: 'Algorithm Engineer',
    actions: [
      { label: 'Read Case Study', href: '/projects/6', type: 'internal' },
      { label: 'View Project Visualization', href: 'https://praful-ford-fulkerson-network-flow.streamlit.app/', type: 'external' },
      { label: 'View Repo', href: 'https://github.com/prafulnair/ford-fulkerson-network-flow', type: 'external' },
    ],
  },
  {
    id: 7,
    title: 'Lane Detection using Hough Transform',
    shortDesc: 'Lane detection for highway images.',
    longDesc:
      'Implemented Hough Transform to detect straight lanes in highway images. Utilised Canny edge detection, custom ROI masks, and non-maximum suppression for accurate detection.',
    imageUrl: '/assets/lane-detection.png',
    techStack: ['Python', 'OpenCV'],
    features: [
      'Canny edge detection & ROI filtering',
      'Hough Transform for line detection',
      'Non-maximum suppression for accuracy',
    ],
    repoLink: 'https://github.com/prafulnair/Hough_Transformation',
  },
  {
    id: 8,
    title: 'BookFlix',
    shortDesc: 'Ongoing Project: Netflix-inspired platform for book enthusiasts.',
    longDesc:
      'An ongoing project designing a platform that connects libraries with users, providing smart book recommendations, loan management, and notifications for due dates.',
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
    techStack: ['Flask', 'NodeJs', 'MySQL', 'React', 'Vercel'],
    features: [
      'Job application management',
      'Resource library & resume tips',
      'Simple analytics on application progress',
    ],
    repoLink: 'https://github.com/hemareddy123/ProjectK-Soen6011summer2023',
  },
  {
    id: 10,
    title: 'Role-Playing Game Engine',
    shortDesc: 'An ongoing project building a basic RPG engine.',
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

export default projects;
