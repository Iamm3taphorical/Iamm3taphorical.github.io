'use client'

import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

const education = [
    {
        degree: "Bachelor of Computer Science and Engineering",
        institution: "BRAC University",
        location: "Dhaka, Bangladesh",
        period: "2023 - Present",
        description: "Pursuing BSc in CSE with focus on AI, Robotics, and Software Engineering",
        current: true,
    },
    {
        degree: "Higher Secondary School Certificate",
        institution: "Mohammadpur Government College",
        location: "Dhaka, Bangladesh",
        period: "2020 - 2022",
        description: "Science stream with focus on Physics, Chemistry, and Mathematics",
        current: false,
    },
    {
        degree: "Secondary School Certificate",
        institution: "Dhanmondi Government Boys High School",
        location: "Dhaka, Bangladesh",
        period: "2017 - 2020",
        description: "Foundation education in science and mathematics",
        current: false,
    },
]

export function EducationSection() {
    return (
        <section id="education" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollAnimation className="text-center mb-16">
                    <h2 className="section-title">Education</h2>
                </ScrollAnimation>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

                    {education.map((item, index) => (
                        <ScrollAnimation
                            key={index}
                            delay={index * 0.15}
                            direction={index % 2 === 0 ? "right" : "left"}
                        >
                            <div className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Timeline Dot */}
                                <motion.div
                                    className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary z-10"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, type: "spring" }}
                                >
                                    {item.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    )}
                                </motion.div>

                                {/* Content Card */}
                                <motion.div
                                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="card-3d bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/30 transition-all group">
                                        {/* Current Badge */}
                                        {item.current && (
                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                                Currently Pursuing
                                            </span>
                                        )}

                                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {item.degree}
                                        </h3>

                                        <div className="flex items-center gap-2 text-primary font-medium mb-2">
                                            <GraduationCap className="h-4 w-4" />
                                            {item.institution}
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="h-3.5 w-3.5" />
                                                {item.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3.5 w-3.5" />
                                                {item.period}
                                            </div>
                                        </div>

                                        <p className="text-sm text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}
