'use client'

import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, Trophy, ExternalLink } from 'lucide-react'

const socialLinks = [
    { href: "https://www.linkedin.com/in/mahir-dyan-47b396310/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/Iamm3taphorical", icon: Github, label: "GitHub" },
    { href: "https://codeforces.com/profile/mahir.dyan", icon: Code2, label: "Codeforces" },
    { href: "https://leetcode.com/u/gnkF6xnyA4/", icon: Trophy, label: "LeetCode" },
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-6"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Open to opportunities
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground"
                    >
                        Hi, I'm{' '}
                        <span className="text-primary">
                            Mahir Dyan
                        </span>
                    </motion.h1>

                    {/* Typewriter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 text-muted-foreground h-[60px] sm:h-[80px] flex items-center justify-center"
                    >
                        <span className="text-primary mr-1">&lt;</span>
                        <Typewriter
                            words={[
                                'CS & Engineering Student',
                                'Robotics & AI Enthusiast',
                                'Full-Stack Developer',
                                'Building, Learning, Sharing'
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
                    >
                        Building algorithms, exploring machine vision, and developing full-stack applications.
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="flex flex-wrap gap-3 justify-center mb-8 sm:mb-10"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 sm:p-3 rounded-xl bg-card/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.label}
                            >
                                <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                    >
                        <a
                            href="#contact"
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-xl inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors btn-glow"
                        >
                            Get In Touch
                            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                        <a
                            href="#projects"
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-xl inline-flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors"
                        >
                            View Projects
                            <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
                    >
                        <div className="w-1 h-2 rounded-full bg-primary" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
