'use client'

import { DotScreenShader } from '@/components/ui/dot-shader-background'
import { cn } from '@/lib/utils'
import { Typewriter } from 'react-simple-typewriter'

export function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
            {/* Background Shader */}
            <div className="absolute inset-0 z-0">
                <DotScreenShader />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="hero-content">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[var(--japanese-red)] relative inline-block">
                        👋 Hello, I’m <br /> Mahir Dyan
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--japanese-gold)] translate-y-2"></span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--secondary)] dark:text-[var(--secondary-foreground)] h-[80px]">
                        <Typewriter
                            words={[
                                'Computer Science & Engineering Student',
                                'Robotics & AI Enthusiast',
                                'Software Developer & Builder',
                                'Always Learning, Building, and Sharing'
                            ]}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        <a href="https://www.linkedin.com/in/mahir-dyan-47b396310/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="40" height="40" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/Iamm3taphorical" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-white rounded-full">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" height="40" alt="GitHub" />
                        </a>
                        <a href="https://codeforces.com/profile/mahir.dyan" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg" width="40" height="40" alt="Codeforces" />
                        </a>
                        <a href="https://leetcode.com/u/gnkF6xnyA4/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" width="40" height="40" alt="LeetCode" />
                        </a>
                        <a href="https://www.hackerrank.com/profile/mahir_dyan" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" width="40" height="40" alt="HackerRank" />
                        </a>
                        <a href="mailto:mahirdyan30@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" width="40" height="40" alt="Gmail" />
                        </a>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-[var(--japanese-red)] text-white border-2 border-[var(--japanese-red)] rounded hover:bg-transparent hover:text-[var(--japanese-red)] transition-colors font-semibold"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-transparent text-[var(--japanese-red)] border-2 border-[var(--japanese-red)] rounded hover:bg-[var(--japanese-red)] hover:text-white transition-colors font-semibold"
                        >
                            View My Work
                        </a>
                    </div>
                </div>

                <div className="hidden md:flex justify-center items-center">
                    {/* Coding GIF */}
                    <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-[var(--japanese-red)]">
                        <img src="https://github.com/abhisheknaiidu/abhisheknaiidu/blob/master/code.gif?raw=true" alt="Coding GIF" className="w-full max-w-md" />
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-[10%] right-[5%] text-9xl text-[var(--japanese-red)] opacity-5 pointer-events-none select-none font-japanese">
                The Dot
            </div>
            <div className="absolute top-[10%] right-[5%] text-[10rem] text-[var(--japanese-red)] opacity-5 pointer-events-none select-none font-serif z-0">
                風
            </div>
            <div className="absolute bottom-[10%] left-[5%] text-[8rem] text-[var(--japanese-gold)] opacity-5 pointer-events-none select-none font-serif z-0">
                桜
            </div>

            {/* Sakura animation div mapping */}
            {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    className="sakura"
                    style={{
                        left: `${5 + i * 10}%`,
                        animationDelay: `${i * 2}s`
                    }}
                />
            ))}
        </section>
    )
}
