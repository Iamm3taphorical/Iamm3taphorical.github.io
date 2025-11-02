
import React from 'react';
import { CurrentFocus } from '../types';

interface FocusProps {
  data: CurrentFocus;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">
        {children}
    </h2>
);

const Focus: React.FC<FocusProps> = ({ data }) => {
  return (
    <section id="focus" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Current Focus</SectionTitle>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">{data.introduction}</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {data.focusPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">
                    <i className="fas fa-rocket"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{point.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-center font-display text-gray-900 dark:text-white mb-6">Short-Term Goals (Next 3 Months)</h3>
            <ul className="space-y-4 max-w-2xl mx-auto">
              {data.shortTermGoals.map((goal, index) => (
                <li key={index} className="flex items-start p-4 bg-white dark:bg-slate-800/80 dark:backdrop-blur-sm rounded-lg shadow-md">
                  <i className="fas fa-bullseye text-primary-500 mt-1 mr-4"></i>
                  <p className="text-gray-700 dark:text-gray-300">{goal}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
