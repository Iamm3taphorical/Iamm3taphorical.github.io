
import React from 'react';
import { Award } from '../types';

interface AwardsProps {
  data: Award[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">
        {children}
    </h2>
);

const AwardCard: React.FC<{ award: Award }> = ({ award }) => (
    <div className="bg-white dark:bg-slate-800/80 dark:backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-4xl text-primary-500 mb-4">
            <i className="fas fa-trophy"></i>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{award.title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{award.event}</p>
    </div>
);

const Awards: React.FC<AwardsProps> = ({ data }) => {
  return (
    <section id="awards" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Awards & Competitions</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {data.map((award) => (
            <AwardCard key={award.title} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;