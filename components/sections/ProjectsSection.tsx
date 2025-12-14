'use client'

import { Laptop, Cloud, Code2, Bot, Wrench } from 'lucide-react'

export function ProjectsSection() {
    const projects = [
        {
            title: 'MERN Stack Development',
            desc: 'Completed a comprehensive workshop on MERN stack development, covering MongoDB, Express.js, React, and Node.js.',
            icon: <Laptop className="h-10 w-10" />,
        },
        {
            title: 'AWS Academy Cloud Foundations',
            desc: 'Gained foundational knowledge of AWS cloud services and infrastructure through AWS Academy certification.',
            icon: <Cloud className="h-10 w-10" />,
        },
        {
            title: 'Java Programming',
            desc: 'Completed "The Ultimate Java Programming Course" on Udemy, mastering object-oriented programming concepts.',
            icon: <Code2 className="h-10 w-10" />,
        },
        {
            title: 'Generative AI with AWS',
            desc: 'Learned about generative AI technologies and their implementation using AWS services through Udacity.',
            icon: <Bot className="h-10 w-10" />,
        },
        {
            title: 'CodeApproach Advisor',
            desc: 'Utilized AI tools for code analysis and improvement recommendations as part of the CodeApproach program.',
            icon: <Wrench className="h-10 w-10" />,
        },
        {
            title: 'Python Programming',
            desc: 'Completed "Introduction to Python Programming" on Udacity, building a strong foundation in Python.',
            icon: <Code2 className="h-10 w-10" />,
        }
    ]

    return (
        <section id="projects" className="py-24 bg-card">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl font-bold text-[var(--japanese-red)] inline-block relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[var(--japanese-gold)] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">
                        Projects & Certificates
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-background rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-border group">
                            <div className="h-40 bg-[var(--accent)] flex items-center justify-center text-[var(--secondary)] group-hover:bg-[var(--japanese-red)] group-hover:text-white transition-colors duration-300">
                                {project.icon}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[var(--japanese-red)] mb-3">{project.title}</h3>
                                <p className="text-muted-foreground">{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
