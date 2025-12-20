// src/components/ExperienceSection.jsx
import React from 'react';
import { experienceData } from '../data/experienceData';

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

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

const ExperienceSection = () => {
  return (
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
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
