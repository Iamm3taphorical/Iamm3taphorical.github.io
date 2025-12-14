'use client'

import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { motion } from 'framer-motion'

const stats = [
    { label: "Total Stars", value: "31", icon: "⭐" },
    { label: "Commits (2025)", value: "111", icon: "🔥" },
    { label: "Repositories", value: "16+", icon: "📦" },
    { label: "Profile Views", value: "168+", icon: "👀" },
]

const languages = [
    { name: "Python", percentage: 35, color: "#3572A5" },
    { name: "TypeScript", percentage: 25, color: "#3178C6" },
    { name: "Java", percentage: 20, color: "#B07219" },
    { name: "JavaScript", percentage: 12, color: "#F7DF1E" },
    { name: "C++", percentage: 8, color: "#f34b7d" },
]

export function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <ScrollAnimation className="text-center mb-12 md:mb-16">
                    <h2 className="section-title">About Me</h2>
                </ScrollAnimation>

                {/* Bio */}
                <ScrollAnimation delay={0.1} className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-muted-foreground space-y-4 text-center mb-12 md:mb-16">
                    <p>
                        I'm a <span className="text-primary font-semibold">Computer Science & Engineering student</span> at BRAC University (Dhaka, Bangladesh), passionate about <span className="text-primary font-semibold">software development</span>, <span className="text-primary font-semibold">robotics</span>, <span className="text-primary font-semibold">automation</span>, and <span className="text-primary font-semibold">AI-driven solutions</span>.
                    </p>
                    <p>
                        I build algorithms, explore machine vision and control systems, and develop full-stack web applications. My approach is collaborative, curious, and impact-focused.
                    </p>
                </ScrollAnimation>

                {/* Stats Grid - Static Data */}
                <ScrollAnimation delay={0.2} className="mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="p-4 md:p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border text-center"
                                whileHover={{ scale: 1.02, y: -4 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
                                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </ScrollAnimation>

                {/* Languages Chart */}
                <ScrollAnimation delay={0.3}>
                    <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border">
                        <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Top Languages</h3>
                        <div className="space-y-4">
                            {languages.map((lang, index) => (
                                <div key={index} className="space-y-1">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-medium text-foreground">{lang.name}</span>
                                        <span className="text-muted-foreground">{lang.percentage}%</span>
                                    </div>
                                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: lang.color }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${lang.percentage}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: index * 0.1 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* GitHub Link */}
                        <div className="mt-6 text-center">
                            <a
                                href="https://github.com/Iamm3taphorical"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                            >
                                View Full GitHub Profile →
                            </a>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
