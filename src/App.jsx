import React, { useState, useEffect } from 'react';
import flavorLayorImg from './assets/images/flavorLayer.png';
import careerRoadmapImg from './assets/images/career-Roadmap.png';
import whipsImg from './assets/images/whips.png';
import barberimg from './assets/images/barber-app.png';
import ContactSection from './components/contactSection';
import Footer from './components/footer';
import AboutSection from './components/about';

function App() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('ai');

  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State for theme toggle
  const [darkMode, setDarkMode] = useState(false);

  // State for scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // State for all projects view
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main featured project
  const featuredProject = {
    title: 'AI Career Roadmap',
    description:
      'Get personalized roadmaps, resume analysis, job-fit insights, curated training resources, and interview preparation — all powered by AI. Built with React, Firebase, and LangChain integrated with OpenAI for intelligent document parsing and guidance.',
    tags: ['React', 'Firebase', 'LangChain', 'OpenAI', 'PDF Parsing'],
    image: careerRoadmapImg, // replace with your actual project image if available
    github: 'https://github.com/your-username/ai-career-roadmap', // replace with actual GitHub repo URL
    liveDemo: 'https://career-roadmap-3.vercel.app/',
  };

  // Projects data
  const projects = {
    ai: [
      {
        id: 1,
        title: 'AI Career Roadmap',
        description:
          'Get personalized roadmaps, resume analysis, job-fit insights, curated training resources, and interview preparation — all powered by AI. Built with React, Firebase, and LangChain integrated with OpenAI for intelligent document parsing and guidance.',
        tags: ['React', 'Firebase', 'LangChain', 'OpenAI', 'PDF Parsing'],
        image: careerRoadmapImg, // replace with your actual project image if available
        github: 'https://github.com/your-username/ai-career-roadmap', // replace with actual GitHub repo URL
        liveDemo: 'https://career-roadmap-3.vercel.app/',
      },
    ],
    saas: [
      {
        id: 1,
        title: 'AI Career Roadmap',
        description:
          'Get personalized roadmaps, resume analysis, job-fit insights, curated training resources, and interview preparation — all powered by AI. Built with React, Firebase, and LangChain integrated with OpenAI for intelligent document parsing and guidance.',
        tags: ['React', 'Firebase', 'LangChain', 'OpenAI', 'PDF Parsing'],
        image: careerRoadmapImg, // replace with your actual project image if available
        github: 'https://github.com/your-username/ai-career-roadmap', // replace with actual GitHub repo URL
        liveDemo: 'https://career-roadmap-3.vercel.app/',
      },
    ],
    personal: [
      {
        id: 1,
        title: 'Flavor Layer',
        description:
          'A dynamic recipe-sharing platform using React, TailwindCSS, Firebase, and OpenAI API integration.',
        tags: ['React', 'TailwindCSS', 'Firebase', 'OpenAI API'],
        image: flavorLayorImg, // Replace with actual image if available
        github:
          'https://github.com/abdinasir1warsame/recipe-application-deployed/',
        liveDemo: 'https://flavor-layer.com/',
      },
      {
        id: 2,
        title: 'Whips Car Rental',
        description:
          'Peer-to-peer car rental service enabling users to rent or list cars, built using MERN stack and AWS SDK.',
        tags: ['React', 'TailwindCSS', 'MongoDB', 'Express', 'AWS SDK'],
        image: whipsImg, // Replace with actual image if available
        github: 'https://github.com/abdinasir1warsame/whips/',
        liveDemo: 'https://whips-rental.vercel.app/',
      },
      {
        id: 3,
        title: "Warsame's Barber",
        description:
          'A modern grooming appointment booking app built on the MERN stack for efficient scheduling and user experience.',
        tags: ['React', 'MongoDB', 'Express', 'TailwindCSS'],
        image: barberimg, // Replace with BarberImage if hosting available
        github: 'https://github.com/abdinasir1warsame/barber-site/',
        liveDemo: 'https://barber-site-seven.vercel.app/',
      },
    ],
  };

  // Get all projects for "View All" functionality
  const allProjects = [...projects.ai, ...projects.saas, ...projects.personal];

  const skills = [
    {
      category: 'Frontend',
      items: [
        'React.js',
        'Tailwind CSS',
        'Bootstrap',
        'HTML',
        'CSS',
        'Responsive Web Design',
        'jQuery',
      ],
    },
    {
      category: 'Backend & APIs',
      items: [
        'Node.js',
        'Express.js',
        'PHP',
        'API Development & Integration',
        'LangChain',
        'OpenAI API',
        'Replicate API',
      ],
    },
    {
      category: 'Databases',
      items: ['Firebase', 'MongoDB', 'MySQL', 'NoSQL'],
    },
    {
      category: 'AI & ML Integration',
      items: ['LangChain', 'OpenAI API', 'Replicate Models', 'PDF Parsing'],
    },
    {
      category: 'Security & Auth',
      items: ['JWT (JSON Web Token)', 'OAuth2', 'Bcrypt.js', 'HTTPS'],
    },
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'Python', 'SQL', 'PHP'],
    },
    {
      category: 'Tools & DevOps',
      items: ['Git', 'GitHub', 'GitLab', 'CI/CD Basics'],
    },
    {
      category: 'Other Skills',
      items: [
        'Debugging',
        'Performance Optimization',
        'Project Management',
        'Unit & Integration Testing',
        'PDF Document Handling',
      ],
    },
  ];

  const experiences = [
    {
      title: 'Founder & Lead Developer',
      company: 'AI Career Path',
      period: 'Present',
      description:
        'Built and launched an AI-powered career development platform. Features include personalized skill-based roadmaps, interactive visualizations, mock interviews, real-time AI feedback, and curated learning resources to guide users through tailored career paths.',
    },
    {
      title: 'Freelance Full Stack Developer',
      company: 'Self-Employed',
      period: '2022 - present',
      description:
        'Building and launching SaaS applications independently using React, Firebase, LangChain, and the OpenAI API. Focused on developing AI-powered features such as document parsing, real-time inference, and intelligent interfaces to deliver personalized user experiences.',
    },
    {
      title: 'IT Support Specialist',
      company: 'Xpress Resource Solutions',
      period: '2020 - 2021',
      description:
        'Provided technical support for internal systems and external client networks. Resolved hardware/software issues, managed user accounts, and ensured secure access to digital resources.',
    },
  ];

  // Custom button component
  const Button = ({
    children,
    primary = false,
    onClick = () => {},
    className = '',
    href = null,
  }) => {
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block px-4 py-2 rounded-md font-medium transition-all ${
            primary
              ? 'bg-[#E11D48] text-white hover:bg-[#C01A3E]'
              : 'bg-[#FBBF24] text-[#1E293B] hover:bg-[#F59E0B]'
          } ${className}`}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-md font-medium transition-all ${
          primary
            ? 'bg-[#E11D48] text-white hover:bg-[#C01A3E]'
            : 'bg-[#FBBF24] text-[#1E293B] hover:bg-[#F59E0B]'
        } ${className}`}
      >
        {children}
      </button>
    );
  };

  // Custom card component
  const Card = ({ children, className = '' }) => {
    return (
      <div
        className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg ${className}`}
      >
        {children}
      </div>
    );
  };

  // Project card component
  const ProjectCard = ({ project }) => {
    return (
      <Card className="h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-[#1E293B]">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-auto">
            <Button href={project.github} className="flex-1 text-center">
              <span className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </span>
            </Button>
            <Button
              primary
              href={project.liveDemo}
              className="flex-1 text-center"
            >
              <span className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </span>
            </Button>
          </div>
        </div>
      </Card>
    );
  };

  // Featured project component
  const FeaturedProjectCard = ({ project }) => {
    return (
      <Card className="w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-[#E11D48] text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured Project
            </div>
          </div>
          <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-3 text-[#1E293B]">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Button href={project.github} className="flex-1 text-center">
                <span className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </span>
              </Button>
              <Button
                primary
                href={project.liveDemo}
                className="flex-1 text-center"
              >
                <span className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  // Tab button component
  const TabButton = ({ id, label, active, onClick }) => {
    return (
      <button
        onClick={() => onClick(id)}
        className={`px-4 py-2 font-medium rounded-md transition-all ${
          active
            ? 'bg-[#E11D48] text-white'
            : 'bg-white text-[#1E293B] hover:bg-gray-100'
        }`}
      >
        {label}
      </button>
    );
  };

  // Skill category component
  const SkillCategory = ({ category, items }) => {
    return (
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-3 text-[#E11D48]">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1.5 text-sm font-medium rounded-md bg-gray-100 text-[#1E293B]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  };

  // Experience card component
  const ExperienceCard = ({ title, company, period, description }) => {
    return (
      <Card className="mb-4 p-5 border-l-4 border-l-[#E11D48]">
        <h3 className="text-xl font-bold text-[#1E293B]">{title}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#E11D48] font-medium">{company}</span>
          <span className="text-gray-500 text-sm">{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </Card>
    );
  };

  // Animated circuit lines for AI theme
  const CircuitLines = () => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Horizontal lines */}
          <line
            x1="0"
            y1="20"
            x2="100"
            y2="20"
            stroke="#E11D48"
            strokeWidth="0.2"
          />
          <line
            x1="0"
            y1="40"
            x2="100"
            y2="40"
            stroke="#E11D48"
            strokeWidth="0.2"
          />
          <line
            x1="0"
            y1="60"
            x2="100"
            y2="60"
            stroke="#E11D48"
            strokeWidth="0.2"
          />
          <line
            x1="0"
            y1="80"
            x2="100"
            y2="80"
            stroke="#E11D48"
            strokeWidth="0.2"
          />

          {/* Vertical lines */}
          <line
            x1="20"
            y1="0"
            x2="20"
            y2="100"
            stroke="#E11D48"
            strokeWidth="0.2"
          />
          <line
            x1="40"
            y1="0"
            x2="40"
            y2="100"
            stroke="#E11D48"
            strokeWidth="0.2"
          />
          <line
            x1="60"
            y1="0"
            x2="60"
            y2="100"
            stroke="#E11D48"
            strokeWidth="0.2"
          />
          <line
            x1="80"
            y1="0"
            x2="80"
            y2="100"
            stroke="#E11D48"
            strokeWidth="0.2"
          />

          {/* Diagonal lines */}
          <line
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            stroke="#FBBF24"
            strokeWidth="0.2"
          />
          <line
            x1="100"
            y1="0"
            x2="0"
            y2="100"
            stroke="#FBBF24"
            strokeWidth="0.2"
          />

          {/* Circuit nodes */}
          <circle cx="20" cy="20" r="1" fill="#E11D48" />
          <circle cx="40" cy="40" r="1" fill="#E11D48" />
          <circle cx="60" cy="60" r="1" fill="#E11D48" />
          <circle cx="80" cy="80" r="1" fill="#E11D48" />
          <circle cx="20" cy="80" r="1" fill="#FBBF24" />
          <circle cx="80" cy="20" r="1" fill="#FBBF24" />
        </svg>
      </div>
    );
  };

  return (
    <div className="min-h-screen lg:px-20 bg-[#FFFFFF] text-[#1E293B] relative">
      {/* Circuit background for AI theme */}
      <CircuitLines />

      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-white/90 backdrop-blur-sm transition-all ${
          scrollPosition > 50 ? 'shadow-md' : ''
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#E11D48] flex items-center justify-center text-white font-bold mr-3">
              AW
            </div>
            <h1 className="text-xl font-bold">
              <span className="text-[#E11D48]">Abdinasir</span>{' '}
              <span className="text-[#1E293B]">Warsame</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              About
            </a>
            <a
              href="#featured"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              Featured
            </a>
            <a
              href="#projects"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              Contact
            </a>
            <Button primary>Resume</Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <a
                href="#home"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#featured"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Featured
              </a>
              <a
                href="#projects"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#contact"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button primary className="w-full">
                Resume
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#FBBF24]/20 text-[#E11D48] font-medium">
                  DevOps Engineer & Full-Stack Developer
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Building <span className="text-[#E11D48]">Scalable</span>{' '}
                  Systems and Modern Web Applications
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  I design and deploy scalable applications and cloud
                  infrastructure, combining DevOps practices with modern web
                  development to build reliable, efficient systems
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    primary
                    onClick={() => {
                      document
                        .getElementById('featured')
                        .scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    onClick={() => {
                      document
                        .getElementById('contact')
                        .scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 w-full h-80 md:h-96 bg-gradient-to-br from-[#E11D48]/10 to-[#FBBF24]/10 rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-[#E11D48] flex items-center justify-center text-white text-5xl font-bold animate-pulse">
                    AW
                  </div>
                </div>
                <div className="absolute inset-0">
                  {/* Animated circuit pattern */}
                  <svg
                    className="w-full h-full opacity-20"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <pattern
                        id="grid"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 10 0 L 0 0 0 10"
                          fill="none"
                          stroke="#E11D48"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="none"
                      stroke="#FBBF24"
                      strokeWidth="0.5"
                      strokeDasharray="2,2"
                    >
                      <animate
                        attributeName="r"
                        from="30"
                        to="40"
                        dur="10s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="50"
                      cy="50"
                      r="20"
                      fill="none"
                      stroke="#E11D48"
                      strokeWidth="0.5"
                    >
                      <animate
                        attributeName="r"
                        from="20"
                        to="25"
                        dur="5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-[#FBBF24]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-[#E11D48]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Featured Project Section */}
      <section id="featured" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#E11D48]/10 text-[#E11D48] font-medium">
              Flagship Project
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-[#E11D48]">Work</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My most significant and impactful project showcasing the full
              range of my technical abilities.
            </p>
          </div>

          <FeaturedProjectCard project={featuredProject} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#FBBF24]/20 text-[#E11D48] font-medium">
              My Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent <span className="text-[#E11D48]">Projects</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore my portfolio of projects spanning AI applications, SaaS
              platforms, personal projects, and open-source contributions.
            </p>
          </div>

          {/* Project Tabs */}
          {!showAllProjects && (
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              <TabButton
                id="ai"
                label="AI Powered Projects"
                active={activeTab === 'ai'}
                onClick={setActiveTab}
              />
              <TabButton
                id="personal"
                label="Personal Projects"
                active={activeTab === 'personal'}
                onClick={setActiveTab}
              />
              <TabButton
                id="saas"
                label="SaaS Projects"
                active={activeTab === 'saas'}
                onClick={setActiveTab}
              />
            </div>
          )}

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showAllProjects
              ? allProjects.map((project) => (
                  <ProjectCard key={`all-${project.id}`} project={project} />
                ))
              : projects[activeTab].map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
          </div>

          <div className="text-center mt-10">
            <Button onClick={() => setShowAllProjects(!showAllProjects)}>
              {showAllProjects ? 'Show Filtered Projects' : 'View All Projects'}
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#E11D48]/10 text-[#E11D48] font-medium">
              My Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-[#E11D48]">Skills</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and areas of
              expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <SkillCategory category={skill.category} items={skill.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#FBBF24]/20 text-[#E11D48] font-medium">
              Professional Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="text-[#E11D48]">Experience</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My professional background and career milestones.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#E11D48]/10 text-[#E11D48] font-medium">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Work <span className="text-[#E11D48]">Together</span>
              </h2>
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#E11D48]/10 flex items-center justify-center text-[#E11D48] mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-medium">
                      abdinasir_jirde@hotmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#E11D48]/10 flex items-center justify-center text-[#E11D48] mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium">Birmingham, UK</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#E11D48]/10 flex items-center justify-center text-[#E11D48] mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="font-medium">+44 7519551171</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#E11D48] flex items-center justify-center text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#E11D48] flex items-center justify-center text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#E11D48] flex items-center justify-center text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#E11D48] flex items-center justify-center text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E11D48] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E11D48] focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E11D48] focus:border-transparent"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E11D48] focus:border-transparent"
                      rows={4}
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button primary className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
