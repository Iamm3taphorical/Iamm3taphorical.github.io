'use client'

import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, Trophy, ExternalLink } from 'lucide-react'

const socialLinks = [
    { href: "https://www.linkedin.com/in/mahir-dyan-47b396310/", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-500" },
    { href: "https://github.com/Iamm3taphorical", icon: Github, label: "GitHub", color: "hover:text-gray-400" },
    { href: "https://codeforces.com/profile/mahir.dyan", icon: Code2, label: "Codeforces", color: "hover:text-red-500" },
    { href: "https://leetcode.com/u/gnkF6xnyA4/", icon: Trophy, label: "LeetCode", color: "hover:text-orange-500" },
    { href: "mailto:mahirdyan30@gmail.com", icon: Mail, label: "Email", color: "hover:text-green-500" },
]

export function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Open to opportunities
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
                    >
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
                            Mahir Dyan
                        </span>
                    </motion.h1>

                    {/* Typewriter */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-3xl font-medium mb-8 text-muted-foreground h-[80px] flex items-center justify-center"
                    >
                        <span className="text-primary">&lt;</span>
                        <Typewriter
                            words={[
                                'Computer Science & Engineering Student',
                                'Robotics & AI Enthusiast',
                                'Full-Stack Developer',
                                'Always Learning, Building, Sharing'
                            ]}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={60}
                            deleteSpeed={40}
                            delaySpeed={2000}
                        />
                        <span className="text-primary">/&gt;</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
                    >
                        A curious and creative person who values deep connections and continuous learning.
                        Building algorithms, exploring machine vision, and developing full-stack applications.
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-4 justify-center mb-10"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 rounded-xl bg-card/50 border border-border backdrop-blur-sm text-muted-foreground transition-all duration-300 ${social.color} hover:border-primary/50 hover:scale-110 hover:shadow-lg hover:shadow-primary/10`}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                aria-label={social.label}
                            >
                                <social.icon className="h-6 w-6" />
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
                            className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl inline-flex items-center justify-center gap-2 relative overflow-hidden btn-glow"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                            <Mail className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="group px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-xl inline-flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                            <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
                    >
                        <motion.div
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-3 rounded-full bg-primary"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
