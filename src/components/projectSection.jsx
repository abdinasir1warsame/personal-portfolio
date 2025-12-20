import React, { useState, useEffect } from 'react';
import { getProjectsByCategory } from '../data/projectData';

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

// Project card component
const ProjectCard = ({ project }) => {
  const Button = ({
    children,
    primary = false,
    href = null,
    className = '',
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
    return null;
  };

  const Card = ({ children, className = '' }) => {
    return (
      <div
        className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg ${className}`}
      >
        {children}
      </div>
    );
  };

  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover "
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

const ProjectSection = ({
  activeTab,
  setActiveTab,
  showAllProjects,
  setShowAllProjects,
}) => {
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);

  // Load projects for the current tab
  useEffect(() => {
    const projects = getProjectsByCategory(activeTab);
    setAllProjects(projects);

    // If activeTab is 'all' and not showing all projects, show only first 3
    if (activeTab === 'all' && !showAllProjects) {
      setDisplayedProjects(projects.slice(0, 3));
    } else {
      setDisplayedProjects(projects);
    }
  }, [activeTab, showAllProjects]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // Reset to show limited projects when changing to 'all' tab
    if (tabId === 'all') {
      setShowAllProjects(false);
    }
  };

  // Get button text based on state
  const getButtonText = () => {
    if (activeTab === 'all') {
      return showAllProjects ? 'Show Less Projects' : 'View All Projects';
    }
    return 'View All Projects in This Category';
  };

  // Check if we should show the toggle button
  const shouldShowToggleButton = activeTab === 'all' && allProjects.length > 3;

  // Get the label for the current tab
  const getTabLabel = (tabId) => {
    const labels = {
      all: 'All Projects',
      web: 'Web Applications',
      ai: 'AI-Powered Projects',
      ecs: 'ECS Projects',
      eks: 'EKS Projects',
    };
    return labels[tabId] || tabId;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#FBBF24]/20 text-[#E11D48] font-medium">
            My Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-[#E11D48]">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of web applications, AI-powered projects, and
            cloud infrastructure deployments.
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-20">
          <TabButton
            id="all"
            label="All Projects"
            active={activeTab === 'all'}
            onClick={handleTabClick}
          />
          <TabButton
            id="web"
            label="Web Applications"
            active={activeTab === 'web'}
            onClick={handleTabClick}
          />
          <TabButton
            id="ai"
            label="AI-Powered Projects"
            active={activeTab === 'ai'}
            onClick={handleTabClick}
          />
          <TabButton
            id="ecs"
            label="ECS Projects"
            active={activeTab === 'ecs'}
            onClick={handleTabClick}
          />
          <TabButton
            id="eks"
            label="EKS Projects"
            active={activeTab === 'eks'}
            onClick={handleTabClick}
          />
        </div>

        {/* Project Grid */}
        {displayedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project) => (
              <ProjectCard
                key={`${activeTab}-${project.id}`}
                project={project}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 ">
            <p className="text-gray-600 italic">
              No projects in this category yet. Check back soon!
            </p>
          </div>
        )}
        {/* Project Count and Category Info */}
        <div className="text-center mt-10 mb-6">
          <p className="text-gray-600">
            {allProjects.length > 0 ? (
              <>
                Showing {displayedProjects.length} of {allProjects.length}{' '}
                project{allProjects.length !== 1 ? 's' : ''}
                {activeTab !== 'all' ? ` in ${getTabLabel(activeTab)}` : ''}
              </>
            ) : (
              <span className="italic"></span>
            )}
          </p>
        </div>
        {/* Toggle Button for All Projects */}
        {shouldShowToggleButton && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-6 py-3 rounded-md font-medium transition-all bg-[#FBBF24] text-[#1E293B] hover:bg-[#F59E0B]"
            >
              {getButtonText()}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
