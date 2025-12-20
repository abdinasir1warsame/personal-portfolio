// src/components/FeaturedProject.jsx
import React from 'react';
import { featuredProject } from '../data/projectData';

const Button = ({ children, primary = false, href = null, className = '' }) => {
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
          <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
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

const FeaturedProjectSection = () => {
  return (
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
            My most significant and impactful project showcasing the full range
            of my technical abilities.
          </p>
        </div>

        <FeaturedProjectCard project={featuredProject} />
      </div>
    </section>
  );
};

export default FeaturedProjectSection;
