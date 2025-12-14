'use client'

import { Code2, Globe, Database, Cpu, Users, Brain, Terminal, CircuitBoard, Layers } from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

export function SkillsSection() {
    const skills = [
        {
            category: 'Languages',
            items: [
                { name: 'Java', icon: <Code2 className="h-5 w-5" /> },
                { name: 'Python', icon: <Terminal className="h-5 w-5" /> },
                { name: 'C++', icon: <Code2 className="h-5 w-5" /> },
                { name: 'C#', icon: <Code2 className="h-5 w-5" /> },
            ]
        },
        {
            category: 'Web',
            items: [
                { name: 'HTML', icon: <Globe className="h-5 w-5" /> },
                { name: 'CSS', icon: <Globe className="h-5 w-5" /> },
                { name: 'JavaScript', icon: <Globe className="h-5 w-5" /> },
                { name: 'TypeScript', icon: <Globe className="h-5 w-5" /> },
                { name: 'React', icon: <Globe className="h-5 w-5" /> },
                { name: 'Node.js', icon: <Globe className="h-5 w-5" /> },
                { name: 'Express', icon: <Globe className="h-5 w-5" /> },
                { name: 'MongoDB', icon: <Database className="h-5 w-5" /> },
                { name: 'MySQL', icon: <Database className="h-5 w-5" /> },
            ]
        },
        {
            category: 'Robotics & Embedded',
            items: [
                { name: 'Machine Vision', icon: <Brain className="h-5 w-5" /> },
                { name: 'Control Systems', icon: <CircuitBoard className="h-5 w-5" /> },
                { name: 'Sensor Integration', icon: <Cpu className="h-5 w-5" /> },
                { name: 'Embedded Programming', icon: <Cpu className="h-5 w-5" /> },
            ]
        },
        {
            category: 'Dev Practices',
            items: [
                { name: 'OOP', icon: <Layers className="h-5 w-5" /> },
                { name: 'Functional Programming', icon: <Layers className="h-5 w-5" /> },
                { name: 'Procedural Programming', icon: <Layers className="h-5 w-5" /> },
                { name: 'REST APIs', icon: <Globe className="h-5 w-5" /> },
            ]
        },
        {
            category: 'Soft Skills',
            items: [
                { name: 'Leadership', icon: <Users className="h-5 w-5" /> },
                { name: 'Team Coordination', icon: <Users className="h-5 w-5" /> },
                { name: 'Technical Documentation', icon: <Users className="h-5 w-5" /> },
                { name: 'Content & Community', icon: <Users className="h-5 w-5" /> },
            ]
        }
    ]

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <ScrollAnimation className="text-center mb-16 relative">
                    <h2 className="text-4xl font-bold text-[var(--japanese-red)] inline-block relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[var(--japanese-gold)] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                        Skills & Technologies
                    </h2>
                </ScrollAnimation>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category, idx) => (
                        <ScrollAnimation key={idx} className="bg-card/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-border">
                            <h3 className="text-2xl font-bold text-[var(--japanese-red)] mb-6 text-center">{category.category}</h3>
                            <ul className="space-y-4">
                                {category.items.map((skill, index) => (
                                    <li key={index} className="flex items-center text-foreground">
                                        <span className="text-[var(--japanese-gold)] mr-3">
                                            {skill.icon}
                                        </span>
                                        <span className="font-medium">{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}
