
import React from 'react';
import { SocialLink } from '../types';

interface ContactProps {
  data: SocialLink[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">
        {children}
    </h2>
);

const SocialIcon: React.FC<{ link: SocialLink }> = ({ link }) => (
    <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}
       className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 transform hover:scale-110">
        <i className={`${link.icon} text-2xl`}></i>
    </a>
);

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-[#11112f]/80 dark:backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle>Let's Collaborate</SectionTitle>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-10">
          I’m always open to collaboration on robotics, web systems, and AI projects. Feel free to reach out!
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          {data.map(link => (
            <SocialIcon key={link.name} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;