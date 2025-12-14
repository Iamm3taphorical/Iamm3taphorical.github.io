'use client'

import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation'
import { Code2, Globe, Database, Cpu, Users, Brain, Terminal, CircuitBoard, Layers, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const skills = [
    {
        category: 'Languages',
        icon: <Terminal className="h-6 w-6" />,
        items: [
            { name: 'Java', level: 90 },
            { name: 'Python', level: 85 },
            { name: 'C++', level: 75 },
            { name: 'C#', level: 70 },
        ]
    },
    {
        category: 'Web Technologies',
        icon: <Globe className="h-6 w-6" />,
        items: [
            { name: 'HTML/CSS', level: 95 },
            { name: 'JavaScript', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'React', level: 85 },
            { name: 'Node.js', level: 80 },
            { name: 'Express', level: 75 },
        ]
    },
    {
        category: 'Databases',
        icon: <Database className="h-6 w-6" />,
        items: [
            { name: 'MongoDB', level: 80 },
            { name: 'MySQL', level: 75 },
        ]
    },
    {
        category: 'Robotics & Embedded',
        icon: <CircuitBoard className="h-6 w-6" />,
        items: [
            { name: 'Machine Vision', level: 70 },
            { name: 'Control Systems', level: 65 },
            { name: 'Sensor Integration', level: 70 },
            { name: 'Embedded Programming', level: 65 },
        ]
    },
    {
        category: 'Dev Practices',
        icon: <Layers className="h-6 w-6" />,
        items: [
            { name: 'OOP', level: 90 },
            { name: 'Functional Programming', level: 80 },
            { name: 'REST APIs', level: 85 },
            { name: 'Git/GitHub', level: 85 },
        ]
    },
    {
        category: 'Soft Skills',
        icon: <Users className="h-6 w-6" />,
        items: [
            { name: 'Leadership', level: 85 },
            { name: 'Team Coordination', level: 90 },
            { name: 'Technical Writing', level: 80 },
            { name: 'Community Building', level: 85 },
        ]
    }
]

export function SkillsSection() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollAnimation className="text-center mb-16">
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="mt-8 text-muted-foreground max-w-2xl mx-auto text-lg">
                        A comprehensive toolkit built through continuous learning and hands-on project experience
                    </p>
                </ScrollAnimation>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((category, idx) => (
                        <StaggerItem key={idx}>
                            <motion.div
                                className="card-3d h-full bg-card/60 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 group"
                                whileHover={{
                                    boxShadow: "0 0 40px rgba(59, 130, 246, 0.15)",
                                }}
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                                </div>

                                {/* Skills List with Progress Bars */}
                                <div className="space-y-4">
                                    {category.items.map((skill, index) => (
                                        <div key={index} className="space-y-1">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                                <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                            </div>
                                            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}
