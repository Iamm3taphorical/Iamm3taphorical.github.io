import React, { useState, useEffect } from 'react';
import { PersonalInfo } from '../types';

interface HeroProps {
    data: PersonalInfo;
}

const Typewriter: React.FC<{ words: string[], speed?: number, delay?: number }> = ({ words, speed = 150, delay = 2000 }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[currentWordIndex];
            if (isDeleting) {
                setDisplayText(currentWord.substring(0, displayText.length - 1));
            } else {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
            }

            if (!isDeleting && displayText === currentWord) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(typingTimeout);
    }, [displayText, isDeleting, currentWordIndex, words, speed, delay]);

    return <span className="border-r-4 border-primary-500 pr-1">{displayText}</span>;
};


const Hero: React.FC<HeroProps> = ({ data }) => {
    return (
        <section id="home" className="min-h-screen flex items-center bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-gray-900 dark:text-white">
                        Hello, I’m <span className="text-primary-600 dark:text-primary-400">{data.name}</span>
                        <span className="inline-block animate-wave">👋</span>
                    </h1>
                    <h2 className="text-xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-8 h-10">
                        <Typewriter words={data.taglines} />
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                        I build algorithms, explore machine vision and control systems, and develop full-stack web applications. My approach is collaborative, curious, and impact-focused.
                    </p>
                    <div className="flex justify-center items-center gap-4 flex-wrap">
                        <a href="#contact" className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105">
                            Get in Touch
                        </a>
                        <a href={data.socials.find(s => s.name === 'GitHub')?.url} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
                            View GitHub
                        </a>
                    </div>
                </div>
            </div>
            {/* Fix: Removed non-standard "jsx" attribute from style tag. This project is not using a framework like Next.js that supports styled-jsx. */}
            <style>{`
                @keyframes wave-animation {
                    0% { transform: rotate(0.0deg); }
                    10% { transform: rotate(14.0deg); }
                    20% { transform: rotate(-8.0deg); }
                    30% { transform: rotate(14.0deg); }
                    40% { transform: rotate(-4.0deg); }
                    50% { transform: rotate(10.0deg); }
                    60% { transform: rotate(0.0deg); }
                    100% { transform: rotate(0.0deg); }
                }
                .animate-wave {
                    animation-name: wave-animation;
                    animation-duration: 2.5s;
                    animation-iteration-count: infinite;
                    transform-origin: 70% 70%;
                    display: inline-block;
                }
            `}</style>
        </section>
    );
};

export default Hero;