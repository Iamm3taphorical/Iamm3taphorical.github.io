'use client'

import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, Trophy, ExternalLink, Terminal } from 'lucide-react'

const socialLinks = [
    { href: "https://www.linkedin.com/in/mahir-dyan-47b396310/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/Iamm3taphorical", icon: Github, label: "GitHub" },
    { href: "https://codeforces.com/profile/mahir.dyan", icon: Code2, label: "Codeforces" },
    { href: "https://leetcode.com/u/gnkF6xnyA4/", icon: Trophy, label: "LeetCode" },
    { href: "https://www.hackerrank.com/profile/mahir_dyan", icon: Terminal, label: "HackerRank" },
    { href: "mailto:mahirdyan30@gmail.com", icon: Mail, label: "Email" },
]

export function HeroSection() {
    return (
        <section id="home" className="relative min-h-[100svh] flex items-center pt-20 pb-12 overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-pulse-glow">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Open to opportunities
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground"
                    >
                        Hi, I'm{' '}
                        <span className="animate-shimmer">
                            Mahir Dyan
                        </span>
                    </motion.h1>

                    {/* Typewriter */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 text-muted-foreground h-[60px] sm:h-[80px] flex items-center justify-center"
                    >
                        <span className="text-primary mr-1">&lt;</span>
                        <Typewriter
                            words={[
                                'Computer Science & Engineering Student',
                                'Robotics & AI Enthusiast',
                                'Software Developer & System Builder',
                                'IEEE Research Team Member',
                                'AI Data Trainer @ SuperAnnotate',
                                'Always Learning, Building, and Shipping'
                            ]}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={60}
                            deleteSpeed={40}
                            delaySpeed={2000}
                        />
                        <span className="text-primary ml-1">/&gt;</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
                    >
                        Building full-stack products, intelligent pipelines, and real-world robotics systems with clarity, modularity, and impact in mind.
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-10"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                                whileHover={{ y: -4, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                                aria-label={social.label}
                            >
                                <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.a
                            href="#contact"
                            className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl inline-flex items-center justify-center gap-2 btn-glow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                            <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="group px-8 py-4 bg-card/80 backdrop-blur-sm border-2 border-primary text-primary font-semibold rounded-xl inline-flex items-center justify-center gap-2 hover:bg-primary/10 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                            <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Scroll Indicator - Floating Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="w-1.5 h-3 rounded-full bg-primary"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
