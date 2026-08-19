'use client'

import { useState, useEffect } from 'react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'

export function AboutSection() {
    const [pageViews, setPageViews] = useState<number>(0)

    useEffect(() => {
        // Simple page view counter using localStorage
        const storedViews = localStorage.getItem('portfolio_views')
        const currentViews = storedViews ? parseInt(storedViews, 10) : 168 // Start from 168 (previous count)
        const newViews = currentViews + 1
        localStorage.setItem('portfolio_views', newViews.toString())
        setPageViews(newViews)
    }, [])

    return (
        <section id="about" className="py-20 md:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <ScrollAnimation className="text-center mb-12 md:mb-16">
                    <h2 className="section-title">About Me</h2>
                </ScrollAnimation>

                {/* Bio */}
                <ScrollAnimation delay={0.1} className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-muted-foreground space-y-4 text-center mb-12">
                    <p>
                        I'm a <span className="text-primary font-semibold">Computer Science & Engineering student</span> at BRAC University (Dhaka, Bangladesh), passionate about <span className="text-primary font-semibold">software development</span>, <span className="text-primary font-semibold">robotics</span>, <span className="text-primary font-semibold">automation</span>, and <span className="text-primary font-semibold">AI-driven solutions</span>.
                    </p>
                    <p>
                        I design algorithms, build full-stack products, and integrate machine vision, control systems, and intelligent pipelines into real-world platforms. My approach centers on clarity, modularity, collaboration, and long-term scalability.
                    </p>
                </ScrollAnimation>

                {/* Page Views Counter */}
                <ScrollAnimation delay={0.2}>
                    <motion.div
                        className="flex justify-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                            <Eye className="h-5 w-5 text-primary" />
                            <span className="text-muted-foreground">Portfolio Views:</span>
                            <span className="text-xl font-bold text-primary">{pageViews.toLocaleString()}</span>
                        </div>
                    </motion.div>
                </ScrollAnimation>

                {/* Quick Links to GitHub */}
                <ScrollAnimation delay={0.3} className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        Check out my work on{' '}
                        <a
                            href="https://github.com/Iamm3taphorical"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium"
                        >
                            GitHub
                        </a>
                        {' '}for more projects and contributions.
                    </p>
                </ScrollAnimation>
            </div>
        </section>
    )
}
