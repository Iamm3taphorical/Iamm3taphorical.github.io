'use client'

import { Code2, Globe, Database, Cpu, Smartphone, Users, Brain, Terminal } from 'lucide-react'

export function SkillsSection() {
    const skills = [
        {
            category: 'Programming Languages',
            items: [
                { name: 'Java', icon: <Code2 className="h-5 w-5" /> },
                { name: 'Python', icon: <Terminal className="h-5 w-5" /> },
                { name: 'C++', icon: <Code2 className="h-5 w-5" /> },
                { name: 'C#', icon: <Code2 className="h-5 w-5" /> },
            ]
        },
        {
            category: 'Web Technologies',
            items: [
                { name: 'HTML', icon: <Globe className="h-5 w-5" /> },
                { name: 'CSS', icon: <Globe className="h-5 w-5" /> },
                { name: 'JavaScript', icon: <Globe className="h-5 w-5" /> },
                { name: 'TypeScript', icon: <Globe className="h-5 w-5" /> },
            ]
        },
        {
            category: 'Core Skills',
            items: [
                { name: 'OOP in Java', icon: <Database className="h-5 w-5" /> },
                { name: 'Procedural Python', icon: <Terminal className="h-5 w-5" /> },
                { name: 'Functional Python', icon: <Terminal className="h-5 w-5" /> },
                { name: 'Android Dev', icon: <Smartphone className="h-5 w-5" /> },
                { name: 'Team Coordination', icon: <Users className="h-5 w-5" /> },
                { name: 'Analytical Thinking', icon: <Brain className="h-5 w-5" /> },
            ]
        }
    ]

    return (
        <section id="skills" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl font-bold text-[var(--japanese-red)] inline-block relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[var(--japanese-gold)] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                        Skills
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category, idx) => (
                        <div key={idx} className="bg-card p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-border">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
