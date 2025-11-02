
import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  data: ExperienceItem[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-16">
        {children}
    </h2>
);

const ExperienceTimelineItem: React.FC<{ item: ExperienceItem, isLast: boolean }> = ({ item, isLast }) => (
    <div className="relative pl-10">
        <div className="absolute left-0 top-1.5 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-50 dark:border-[#11112f]"></div>
        {!isLast && <div className="absolute left-[7px] top-6 w-0.5 h-full bg-primary-200 dark:bg-primary-900"></div>}
        <div className="mb-10">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.role}</h3>
                <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mt-1 sm:mt-0">{item.period}</p>
            </div>
            <h4 className="text-md font-semibold text-gray-500 dark:text-gray-400 mb-2">{item.company}</h4>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
        </div>
    </div>
);

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white dark:bg-[#11112f]/80 dark:backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Experience & Projects</SectionTitle>
        <div className="max-w-3xl mx-auto">
            {data.map((item, index) => (
                <ExperienceTimelineItem key={`${item.role}-${item.company}-${index}`} item={item} isLast={index === data.length - 1} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;