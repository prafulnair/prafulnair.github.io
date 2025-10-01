export interface ProjectAction {
  label: string;
  href: string;
  type?: 'external' | 'internal';
}

export interface ProjectMedia {
  src: string;
  alt: string;
  caption?: string;
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
  problem?: string;
  impactMetrics?: string[];
  media?: ProjectMedia[];
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
    techStack: ['Python', 'Flask', 'React.js', 'SQLAlchemy', 'AWS App Runner', 'PostgreSQL'],
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
    problem:
      'Internal stakeholders lacked a unified space to raise feature ideas and triage bugs, leading to fragmented feedback channels and slow prioritisation.',
    impactMetrics: [
      'Reduced prioritisation cycle time from multiple days to hours with real-time dashboards.',
      'Enabled 30+ internal client teams to submit and collaborate on ERP requests securely.',
      'Delivered single-source visibility for the Financial Systems team across roadmap discussions.',
    ],
    media: [
      {
        src: '/assets/feature-request.png',
        alt: 'FeatureHub request analytics dashboard',
        caption: 'Threaded discussions and analytics that guide roadmap prioritisation.',
      },
    ],
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
    role: 'Research Engineer',
    problem:
      'Database students and practitioners needed a way to predict relational query sizes without full execution to understand optimisation trade-offs.',
    impactMetrics: [
      'Simulated optimiser-like estimates for 50+ academic benchmark queries.',
      'Improved teaching demos by turning theoretical relational algebra concepts into runnable tooling.',
    ],
    media: [
      {
        src: '/assets/query-estimation.png',
        alt: 'Query estimation system workflow diagram',
        caption: 'Estimator visualising selectivity and join cardinalities.',
      },
    ],
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
    role: 'Designer & Front-end Engineer',
    problem:
      'Needed a performant and easily maintainable portfolio to showcase case studies with fast load times and modern UX.',
    impactMetrics: [
      'Lighthouse performance score consistently above 95 on desktop and mobile.',
      'Supports rapid addition of projects with markdown-like configuration.',
    ],
    media: [
      {
        src: '/assets/portfolio.png',
        alt: 'Minimal portfolio hero page screenshot',
        caption: 'Responsive hero section introducing Praful with quick project access.',
      },
    ],
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
    problem:
      'Analytics teams needed near real-time insights from massive Amazon review feeds but the existing batch jobs were slow and failure-prone.',
    impactMetrics: [
      'Cut end-to-end processing latency by 40% using event-driven Cloud Functions.',
      'Processed 1M+ review records per day with automated quality gates before landing in BigQuery.',
      'Delivered sentiment word-clouds that highlighted trending topics during pilot launch.',
    ],
    media: [
      {
        src: '/assets/etl-pipeline.png',
        alt: 'Event-driven data streaming pipeline diagram',
        caption: 'GCP services orchestrating streaming and batch workloads.',
      },
    ],
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
    role: 'Data Analyst',
    problem:
      'Airline operations stakeholders lacked concise insights into delay patterns hidden within raw Bureau of Transportation Statistics datasets.',
    impactMetrics: [
      'Cleansed and analysed 7M+ flight records to surface seasonal delay trends.',
      'Produced visual reports consumed by classmates and instructors during final presentation.',
    ],
    media: [
      {
        src: '/assets/flight-data.png',
        alt: 'Flight data analysis dashboards',
        caption: 'Delay trend visualisations and route comparisons.',
      },
    ],
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
    problem:
      'Operations teams required a repeatable way to stress-test capacity planning strategies across varying network topologies.',
    impactMetrics: [
      'Benchmarked 100+ randomly generated networks across four augmenting path strategies.',
      'Identified the most performant strategy per density category with visual evidence.',
    ],
    media: [
      {
        src: '/assets/network-flow.png',
        alt: 'Network flow optimisation visualisation',
        caption: 'Flow capacities visualised from the Streamlit reporting app.',
      },
    ],
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
    role: 'Computer Vision Engineer',
    problem:
      'Needed a reliable classical computer vision baseline for highway lane detection before evaluating deep learning methods.',
    impactMetrics: [
      'Delivered a baseline pipeline that processes HD highway footage in near real time.',
      'Improved lane detection accuracy by combining ROI masking with non-max suppression.',
    ],
    media: [
      {
        src: '/assets/lane-detection.png',
        alt: 'Lane detection overlay on highway footage',
        caption: 'Canny edges and Hough Transform produce stable lane overlays.',
      },
    ],
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
    role: 'Product Designer & Full-stack Developer',
    problem:
      'Libraries and book clubs needed a digital bridge to keep patrons engaged with tailored recommendations and loan management.',
    impactMetrics: [
      'Designed core flows for borrowers, librarians, and administrators.',
      'Outlined recommendation engine leveraging reading history for personalised alerts.',
    ],
    media: [
      {
        src: '/assets/bookflix.png',
        alt: 'BookFlix concept interface mockups',
        caption: 'Netflix-inspired browsing experience adapted for library catalogues.',
      },
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
    role: 'Full-stack Developer',
    problem:
      'Career service advisors needed tooling to centralise student job search workflows and provide real-time progress tracking.',
    impactMetrics: [
      'Coordinated Agile sprints with a 4-person team delivering MVP in 6 weeks.',
      'Implemented shared analytics that increased advisor check-ins during pilot tests.',
    ],
    media: [
      {
        src: '/assets/career-service.png',
        alt: 'Career service web app dashboard',
        caption: 'Dashboard highlighting job applications and coaching resources.',
      },
    ],
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
    role: 'Game Systems Developer',
    problem:
      'Needed a sandbox engine to experiment with RPG mechanics without depending on heavyweight frameworks.',
    impactMetrics: [
      'Implemented modular object model covering players, enemies, combat, and inventory.',
      'Enabled rapid prototyping of new quests and encounters via extensible class hierarchy.',
    ],
    media: [
      {
        src: '/assets/rpg-engine.png',
        alt: 'RPG engine class design mockup',
        caption: 'Object-oriented layout for the Python RPG engine.',
      },
    ],
  },
];

export default projects;
