
import React from 'react';

interface AboutProps {
  data: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">
        {children}
    </h2>
);


const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-[#11112f]/80 dark:backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {data}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;