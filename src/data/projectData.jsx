// src/data/projectsData.js
import flavorLayorImg from '../assets/images/flavorLayer.png';
import careerRoadmapImg from '../assets/images/career-Roadmap.png';
import whipsImg from '../assets/images/whips.png';
import barberimg from '../assets/images/barber-app.png';
import memosImg from '../assets/images/memos-dashboard.png';
import infrastructureImg from '../assets/images/Diagram2.png';

// Main featured project
export const featuredProject = {
  title: 'Memos on AWS ECS Fargate',
  description:
    'Production deployment of Memos, an open-source note-taking platform, on AWS ECS Fargate. Infrastructure is managed with Terraform, frontend and backend are built with multi-stage Docker containers, and CI/CD is automated via GitHub Actions. The architecture includes multi-AZ networking, load balancing, and an Amazon RDS PostgreSQL database for secure, persistent storage.',
  tags: [
    'AWS',
    'ECS Fargate',
    'Terraform',
    'Docker',
    'GitHub Actions',
    'PostgreSQL',
  ],
  image: memosImg,
  infrastructureImage: infrastructureImg,
  github: 'https://github.com/abdinasir1warsame/ECS-Project',
};

// All projects categorized with the new structure
export const projectsData = {
  all: [
    {
      id: 1,
      title: 'Memos on AWS ECS Fargate',
      description:
        'Production deployment of Memos, an open-source note-taking platform, on AWS ECS Fargate. Infrastructure defined as code with Terraform, multi-stage Docker builds, and CI/CD automation with GitHub Actions.',
      tags: [
        'AWS',
        'ECS Fargate',
        'Terraform',
        'Docker',
        'GitHub Actions',
        'React',
        'Go',
        'PostgreSQL',
      ],
      image: memosImg,
      infrastructureImage: infrastructureImg,
      github: 'https://github.com/abdinasir1warsame/ECS-Project',
      categories: ['ecs'],
    },

    {
      id: 2,
      title: 'AI Career Roadmap',
      description:
        'Get personalized roadmaps, resume analysis, job-fit insights, curated training resources, and interview preparation — all powered by AI. Built with React, Firebase, and LangChain integrated with OpenAI for intelligent document parsing and guidance.',
      tags: ['React', 'Firebase', 'LangChain', 'OpenAI', 'PDF Parsing'],
      image: careerRoadmapImg,
      github: 'https://github.com/your-username/ai-career-roadmap',
      liveDemo: 'https://career-roadmap-3.vercel.app/',
      categories: ['web', 'ai'],
    },
    {
      id: 3,
      title: 'Flavor Layer',
      description:
        'A dynamic recipe-sharing platform using React, TailwindCSS, Firebase, and OpenAI API integration.',
      tags: ['React', 'TailwindCSS', 'Firebase', 'OpenAI API'],
      image: flavorLayorImg,
      github:
        'https://github.com/abdinasir1warsame/recipe-application-deployed/',
      liveDemo: 'https://flavor-layer.com/',
      categories: ['web', 'ai'],
    },
    {
      id: 4,
      title: 'Whips Car Rental',
      description:
        'Peer-to-peer car rental service enabling users to rent or list cars, built using MERN stack and AWS SDK.',
      tags: ['React', 'TailwindCSS', 'MongoDB', 'Express', 'AWS SDK'],
      image: whipsImg,
      github: 'https://github.com/abdinasir1warsame/whips/',
      liveDemo: 'https://whips-rental.vercel.app/',
      categories: ['web'],
    },
    {
      id: 5,
      title: "Warsame's Barber",
      description:
        'A modern grooming appointment booking app built on the MERN stack for efficient scheduling and user experience.',
      tags: ['React', 'MongoDB', 'Express', 'TailwindCSS'],
      image: barberimg,
      github: 'https://github.com/abdinasir1warsame/barber-site/',
      liveDemo: 'https://barber-site-seven.vercel.app/',
      categories: ['web'],
    },
  ],
  web: [
    {
      id: 1,
      title: 'AI Career Roadmap',
      description:
        'Get personalized roadmaps, resume analysis, job-fit insights, curated training resources, and interview preparation — all powered by AI. Built with React, Firebase, and LangChain integrated with OpenAI for intelligent document parsing and guidance.',
      tags: ['React', 'Firebase', 'LangChain', 'OpenAI', 'PDF Parsing'],
      image: careerRoadmapImg,
      github: 'https://github.com/your-username/ai-career-roadmap',
      liveDemo: 'https://career-roadmap-3.vercel.app/',
      categories: ['web', 'ai'],
    },
    {
      id: 2,
      title: 'Flavor Layer',
      description:
        'A dynamic recipe-sharing platform using React, TailwindCSS, Firebase, and OpenAI API integration.',
      tags: ['React', 'TailwindCSS', 'Firebase', 'OpenAI API'],
      image: flavorLayorImg,
      github:
        'https://github.com/abdinasir1warsame/recipe-application-deployed/',
      liveDemo: 'https://flavor-layer.com/',
    },
    {
      id: 3,
      title: 'Whips Car Rental',
      description:
        'Peer-to-peer car rental service enabling users to rent or list cars, built using MERN stack and AWS SDK.',
      tags: ['React', 'TailwindCSS', 'MongoDB', 'Express', 'AWS SDK'],
      image: whipsImg,
      github: 'https://github.com/abdinasir1warsame/whips/',
      liveDemo: 'https://whips-rental.vercel.app/',
    },
    {
      id: 4,
      title: "Warsame's Barber",
      description:
        'A modern grooming appointment booking app built on the MERN stack for efficient scheduling and user experience.',
      tags: ['React', 'MongoDB', 'Express', 'TailwindCSS'],
      image: barberimg,
      github: 'https://github.com/abdinasir1warsame/barber-site/',
      liveDemo: 'https://barber-site-seven.vercel.app/',
    },
  ],
  ai: [
    {
      id: 1,
      title: 'AI Career Roadmap',
      description:
        'Get personalized roadmaps, resume analysis, job-fit insights, curated training resources, and interview preparation — all powered by AI. Built with React, Firebase, and LangChain integrated with OpenAI for intelligent document parsing and guidance.',
      tags: ['React', 'Firebase', 'LangChain', 'OpenAI', 'PDF Parsing'],
      image: careerRoadmapImg,
      github: 'https://github.com/your-username/ai-career-roadmap',
      liveDemo: 'https://career-roadmap-3.vercel.app/',
    },
    {
      id: 2,
      title: 'Flavor Layer',
      description:
        'A dynamic recipe-sharing platform using React, TailwindCSS, Firebase, and OpenAI API integration.',
      tags: ['React', 'TailwindCSS', 'Firebase', 'OpenAI API'],
      image: flavorLayorImg,
      github:
        'https://github.com/abdinasir1warsame/recipe-application-deployed/',
      liveDemo: 'https://flavor-layer.com/',
    },
  ],
  ecs: [
    {
      id: 5,
      title: 'Memos on AWS ECS Fargate',
      description:
        'Production deployment of Memos, an open-source note-taking platform, on AWS ECS Fargate. Infrastructure defined as code with Terraform, multi-stage Docker builds, and CI/CD automation with GitHub Actions.',
      tags: [
        'AWS',
        'ECS Fargate',
        'Terraform',
        'Docker',
        'GitHub Actions',
        'React',
        'Go',
        'PostgreSQL',
      ],
      image: memosImg,
      github: 'https://github.com/abdinasir1warsame/ECS-Project',
      infrastructureImage: infrastructureImg,
    },
  ],
  eks: [
    // Empty for now - add EKS projects when you have them
  ],
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  if (category === 'all') {
    return projectsData.all;
  }
  return projectsData[category] || [];
};

// Helper function to get all projects
export const getAllProjects = () => {
  return projectsData.all;
};
