
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Focus from './components/Focus';
import Stats from './components/Stats';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

const AnimatedBackground: React.FC = () => {
    return (
      <div className="dark:block hidden fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-b from-[#0a0a2a] to-[#1a1a3a]">
        <div id="stars1" className="stars"></div>
        <div id="stars2" className="stars"></div>
        <div id="stars3" className="stars"></div>
        <style>{`
          @keyframes animateStars {
            from {
              transform: translateY(0px);
            }
            to {
              transform: translateY(-2000px);
            }
          }

          .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }

          #stars1 {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 2000'%3E%3Ccircle cx='200' cy='200' r='1' fill='%23fff'/%3E%3Ccircle cx='400' cy='800' r='1' fill='%23fff'/%3E%3Ccircle cx='800' cy='300' r='1' fill='%23fff'/%3E%3Ccircle cx='1200' cy='900' r='0.5' fill='%23fff'/%3E%3Ccircle cx='1500' cy='400' r='0.5' fill='%23fff'/%3E%3Ccircle cx='1800' cy='1100' r='1' fill='%23fff'/%3E%3Ccircle cx='900' cy='1300' r='1' fill='%23fff'/%3E%3Ccircle cx='300' cy='1600' r='0.5' fill='%23fff'/%3E%3Ccircle cx='1100' cy='1800' r='1' fill='%23fff'/%3E%3Ccircle cx='1600' cy='1400' r='1' fill='%23fff'/%3E%3C/svg%3E");
            background-size: 2000px 2000px;
            background-repeat: repeat;
            animation: animateStars 150s linear infinite;
            height: 200%;
          }

          #stars2 {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 2000'%3E%3Ccircle cx='100' cy='500' r='1.5' fill='%23fff'/%3E%3Ccircle cx='600' cy='200' r='1.5' fill='%23fff'/%3E%3Ccircle cx='900' cy='800' r='1' fill='%23fff'/%3E%3Ccircle cx='1300' cy='400' r='1' fill='%23fff'/%3E%3Ccircle cx='1700' cy='1000' r='1.5' fill='%23fff'/%3E%3Ccircle cx='500' cy='1400' r='1' fill='%23fff'/%3E%3Ccircle cx='1000' cy='1700' r='1.5' fill='%23fff'/%3E%3Ccircle cx='1400' cy='1200' r='1' fill='%23fff'/%3E%3Ccircle cx='1900' cy='600' r='1.5' fill='%23fff'/%3E%3C/svg%3E");
            background-size: 2000px 2000px;
            background-repeat: repeat;
            animation: animateStars 100s linear infinite;
            height: 200%;
          }

          #stars3 {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 2000'%3E%3Ccircle cx='300' cy='300' r='2' fill='%23fff'/%3E%3Ccircle cx='700' cy='900' r='1' fill='%23fff'/%3E%3Ccircle cx='1100' cy='200' r='1.5' fill='%23fff'/%3E%3Ccircle cx='1600' cy='700' r='2' fill='%23fff'/%3E%3Ccircle cx='200' cy='1200' r='1' fill='%23fff'/%3E%3Ccircle cx='800' cy='1500' r='1.5' fill='%23fff'/%3E%3Ccircle cx='1300' cy='1100' r='2' fill='%23fff'/%3E%3Ccircle cx='1800' cy='1600' r='1' fill='%23fff'/%3E%3C/svg%3E");
            background-size: 2000px 2000px;
            background-repeat: repeat;
            animation: animateStars 50s linear infinite;
            height: 200%;
          }
        `}</style>
      </div>
    );
};


const App: React.FC = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="bg-gray-50 dark:bg-transparent text-gray-800 dark:text-gray-200 transition-colors duration-300 font-sans">
            <AnimatedBackground />
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero data={portfolioData.personalInfo} />
                <About data={portfolioData.about} />
                <Skills data={portfolioData.skills} />
                <Experience data={portfolioData.experience} />
                <Focus data={portfolioData.currentFocus} />
                <Stats data={portfolioData.githubStats} theme={theme}/>
                <Awards data={portfolioData.awards} />
                <Contact data={portfolioData.personalInfo.socials} />
            </main>
            <Footer name={portfolioData.personalInfo.name} />
        </div>
    );
};

export default App;
