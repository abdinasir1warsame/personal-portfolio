// src/components/ExpertiseSection.jsx
import React from 'react';
import { skillsData } from '../data/skillsData';

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

const ExpertiseSection = () => {
  return (
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
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <SkillCategory category={skill.category} items={skill.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
