
import React from 'react';
import { GithubStats } from '../types';

interface StatsProps {
    data: GithubStats;
    theme: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">
        {children}
    </h2>
);

const StatImage: React.FC<{ src: string, alt: string }> = ({ src, alt }) => (
    <img 
        src={src} 
        alt={alt} 
        className="w-full rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    />
);

const Stats: React.FC<StatsProps> = ({ data, theme }) => {
    const lightTheme = 'merko';
    const darkTheme = 'tokyonight';
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
    const summaryCardTheme = theme === 'dark' ? 'dracula' : 'default';

    return (
        <section id="stats" className="py-20 md:py-28 bg-white dark:bg-[#11112f]/80 dark:backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>GitHub Stats</SectionTitle>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <StatImage src={`${data.stats}&theme=${currentTheme}`} alt="Mahir's GitHub Stats" />
                    <StatImage src={`${data.topLangs}&theme=${currentTheme}`} alt="Top Languages" />
                    <div className="md:col-span-2">
                        <StatImage src={`${data.streak}&theme=${currentTheme}`} alt="GitHub Streak" />
                    </div>
                     <div className="md:col-span-2">
                         <StatImage src={`${data.summaryCards.profileDetails.replace('radical', summaryCardTheme)}`} alt="Profile Details" />
                    </div>
                    <StatImage src={`${data.summaryCards.reposPerLang.replace('radical', summaryCardTheme)}`} alt="Repos per Language" />
                    <StatImage src={`${data.summaryCards.mostCommitLang.replace('radical', summaryCardTheme)}`} alt="Most Commit Language" />
                    <StatImage src={`${data.summaryCards.stats.replace('radical', summaryCardTheme)}`} alt="Summary Stats" />
                    <StatImage src={`${data.summaryCards.productiveTime.replace('radical', summaryCardTheme)}`} alt="Productive Time" />
                </div>
            </div>
        </section>
    );
};

export default Stats;
