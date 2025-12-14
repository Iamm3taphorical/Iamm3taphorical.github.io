'use client'

import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation'
import { motion } from 'framer-motion'
import { Terminal, Globe, Database, CircuitBoard, Layers, Users } from 'lucide-react'

const skills = [
    {
        category: 'Languages',
        icon: <Terminal className="h-5 w-5" />,
        items: [
            { name: 'Java', level: 90 },
            { name: 'Python', level: 85 },
            { name: 'C++', level: 75 },
            { name: 'C#', level: 70 },
        ]
    },
    {
        category: 'Web Technologies',
        icon: <Globe className="h-5 w-5" />,
        items: [
            { name: 'HTML/CSS', level: 95 },
            { name: 'JavaScript', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'React/Next.js', level: 85 },
        ]
    },
    {
        category: 'Databases',
        icon: <Database className="h-5 w-5" />,
        items: [
            { name: 'MongoDB', level: 80 },
            { name: 'MySQL', level: 75 },
        ]
    },
    {
        category: 'Robotics & ML',
        icon: <CircuitBoard className="h-5 w-5" />,
        items: [
            { name: 'Computer Vision', level: 75 },
            { name: 'Control Systems', level: 65 },
            { name: 'Sensor Integration', level: 70 },
        ]
    },
    {
        category: 'Dev Practices',
        icon: <Layers className="h-5 w-5" />,
        items: [
            { name: 'OOP', level: 90 },
            { name: 'REST APIs', level: 85 },
            { name: 'Git/GitHub', level: 85 },
        ]
    },
    {
        category: 'Soft Skills',
        icon: <Users className="h-5 w-5" />,
        items: [
            { name: 'Leadership', level: 85 },
            { name: 'Team Coordination', level: 90 },
            { name: 'Technical Writing', level: 80 },
        ]
    }
]

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 md:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <ScrollAnimation className="text-center mb-12 md:mb-16">
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
                        Built through continuous learning and hands-on project experience
                    </p>
                </ScrollAnimation>

                <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {skills.map((category, idx) => (
                        <StaggerItem key={idx}>
                            <div className="h-full bg-card/60 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-border hover:border-primary/30 transition-colors group">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-foreground">{category.category}</h3>
                                </div>

                                {/* Skills */}
                                <div className="space-y-3">
                                    {category.items.map((skill, index) => (
                                        <div key={index} className="space-y-1">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="font-medium text-foreground">{skill.name}</span>
                                                <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                            </div>
                                            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.6, delay: index * 0.05 }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}
