
import React from 'react';
import { SkillCategory } from '../types';

interface SkillsProps {
  data: SkillCategory[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">
        {children}
    </h2>
);

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
    <div className="bg-white dark:bg-slate-800/80 dark:backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-xl font-bold font-display text-primary-600 dark:text-primary-400 mb-4">{category.title}</h3>
        <div className="flex flex-wrap gap-2">
            {category.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-primary-100 dark:bg-primary-950/70 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills & Technologies</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.map(category => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
